import { checkCookie } from "../functions/Util/cookies.js";
import { gameStart, joinGame } from "../functions/Game/gameLoad.js";
import { Game } from "../../model/game.js"
import { Server } from "../../model/server.js";


export async function boardDiv() {


    if (checkCookie("player_no")){
        var text = `
            <div class="control">
                <input id="existingJoinButton" type="button" value="">
            </div>
        `
        document.getElementById(`gameList`).innerHTML = text;
        document.getElementById('existingJoinButton').value = "Go to your game";
        document.getElementById('existingJoinButton').addEventListener('click', () => {openGamePage()});
    }else{
        var games = [];
        
        var server = new Server;
        await server.getGames().then(
            (p_games) => {
                if(p_games != 0)
                    for(let i=0; i<p_games.length; i++)
                        games.push(new Game (p_games[i].id, p_games[i].turn));
                else
                    games = 0;
            }
        );
        var text = `<div>
            <div class="control">
                <input id="createButton" type="button" value="">
            </div>
            `
        for (let i=0; i<games.length; i++){
            var playerCount = await games[i].getPlayerCount();
            if (playerCount <= 2)
                text += `
                    <div class="control">
                        <input id="joinButton${games[i].id}" type="button" value="">
                    </div>
                `
        }
        text += `</div>`

        document.getElementById(`gameList`).innerHTML = text;

        document.getElementById('createButton').value = "Create Board"
        document.getElementById('createButton').addEventListener('click', () => {gameStart()})

        for (let i=0; i<games.length; i++){
            var playerCount = await games[i].getPlayerCount();
            if (playerCount <= 2){
                document.getElementById(`joinButton${games[i].id}`).value = `Join existing game with ID ${games[i].id}`
                document.getElementById(`joinButton${games[i].id}`).addEventListener('click', () => {joinGame(games[i].id)})
            }
        }    
    } 
}

export function openGamePage(){
    window.location.href ="game-page.php";
}