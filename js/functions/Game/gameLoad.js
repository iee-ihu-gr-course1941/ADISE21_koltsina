import { checkCookie, getCookie } from "../Util/cookies.js";
import { deckCreator } from "../Util/deckHandling.js";
import { Game } from "../../../model/game.js"
import { sleep } from "../Util/sleep.js"


export async function gameStart() {

    if( checkCookie("player_id") ){
        alert("You are already a player.");
        window.location.href = window.location.href;
        return;
    }

    var deck = deckCreator();
    var game = new Game (0, 1);
    await game.addGame();
    await game.updateGameObject();

    await game.addPlayer("Table", 0);
    await game.players[0].addDeck(deck);
    await game.updateGameObject();
    alert(JSON.stringify(game.players[0].cards))
    for (let i=0; i<4; i++){
        game.players[0].cards[i].in_hand = 1;
        game.players[0].cards[i].updateCard();
    }

    var username = checkCookie("username") ? getCookie("username") : null
    await game.addPlayer(username != null ? username : "Player1", 1);

    var cards=0;
    for (let i=0; i<game.players[0].cards.length; i++){
        if(game.players[0].cards[i].in_hand == 0){
            game.players[0].cards[i].in_hand = 1;
            game.players[0].cards[i].player_id = game.players[1].id;
            game.players[0].cards[i].updateCard();
            cards++
            if(cards >= 4)
                break;
        }
    }


    document.cookie = `player_no=${1}; sameSite=Lax`
    document.cookie = `username=${game.players[1].username}; sameSite=Lax`;
    document.cookie = `game_id=${game.id}; sameSite=Lax`;

    await sleep(100);
    window.location.href = "game-page.php";
}

export async function joinGame(game_id) {

    var game = new Game (game_id, 1);
    await game.updateGameObject();

    var username = checkCookie("username") ? getCookie("username") : null
    await game.addPlayer(username != null ? username : "Player2", 2);

        var cards=0;
        for (let i=0; i<game.players[0].cards.length; i++){
            if(game.players[0].cards[i].in_hand == 0){
                game.players[0].cards[i].in_hand = 1;
                game.players[0].cards[i].player_id = game.players[2].id;
                game.players[0].cards[i].updateCard();
                cards++
                if(cards >= 4)
                    break;
            }
        }

    document.cookie = `player_no=${2}; sameSite=Lax`
    document.cookie = `username=${game.players[2].username}; sameSite=Lax`;
    document.cookie = `game_id=${game.id}; sameSite=Lax`;

    await sleep(100);
    window.location.href = "game-page.php";
}
