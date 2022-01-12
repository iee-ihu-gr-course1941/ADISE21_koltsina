import { Game } from "../../model/game.js"
import { getCookie } from "../functions/Util/cookies.js";
import { sleep } from "../functions/Util/sleep.js"
import { gameplay } from "../functions/Game/gameplay.js"

export async function initGame() {

    var game_id = getCookie("game_id");
    if (game_id == "")
        window.location.href = "board-page.php";

    document.getElementById("announcer").innerHTML = "Game is loading..."

    var game = new Game (game_id, 1);
    await game.updateGameObject()

    var playerCount = await game.getPlayerCount();
    if(playerCount < 3)
        document.getElementById('announcer').innerHTML = "Waiting for more players...";
    while(playerCount < 3){
        await sleep(500);
        playerCount = await game.getPlayerCount();
    }
    await game.getPlayers();
    gameDiv();

    await game.updateGameObject();
    gameGenerator(game);
    gameplay(game);
}

function gameDiv() {
    document.getElementById('game').innerHTML = `
                <div class="horizontal-flex game-flex">
                    <div id="player1">
                        <div id="Player1Name"></div>
                        <div id="Deck1" class="horizontal-flex"></div>
                    </div>
                    <div id="table">
                        <div id="Player0Name"></div>
                        <div id="Deck0" class="horizontal-flex"></div>
                    </div>
                    <div id="player2">
                        <div id="Player2Name"></div>
                        <div id="Deck2" class="horizontal-flex"></div>
                    </div>
                </div>
        `;
}

export function gameGenerator(game) {

    if(getCookie("player_no") == 1){
        var playerIndex = 1;
        var opponentIndex = 2;
    }else{
        var playerIndex = 2;
        var opponentIndex = 1;
    }

    var table = game.players[0];
    var player = game.players[playerIndex];
    var opponent = game.players[opponentIndex];

    cardGenerator(table, true);
    cardGenerator(player, true);
    cardGenerator(opponent, false);
}

function cardGenerator(player, showCards) {

    var symbol;
    var text = ``;
    for(let i=0; i<player.cards.length; i++) {
        if(player.cards[i].in_hand == 1 && showCards == true){
            player.cards[i].card_shape === "Diamonds" ? (symbol = "&diams;") : (symbol = "&" + player.cards[i].card_shape.toLowerCase() + ";"); // &diams, &hearts, &spades, &
            text += `
                <button id="card${player.cards[i].id}" class="card ${player.cards[i].card_shape.toLowerCase()}">
                    <span class="card-body top"> ${player.cards[i].card_number} ${symbol} </span>
                    <span class="card-shape"> ${symbol} </span>
                    <span class="card-body bot"> ${player.cards[i].card_number} ${symbol} </span>
                </button>
            `
        }else if (player.cards[i].in_hand == 1 && showCards == false){
            text += `
                <div class="card card-back">
                </div>
            `
        }
    }

    document.getElementById(`Deck${player.player_no}`).innerHTML = text;
