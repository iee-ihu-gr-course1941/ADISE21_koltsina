import { getCookie } from "../Util/cookies.js";
import { sleep } from "../Util/sleep.js"
import { checkGameStatus, checkUsernames } from "./gameStatus.js"
import { gameGenerator } from "../../pages/game-page.js"

export async function gameplay(p_game) {
    var game = p_game;
    var turn = game.turn;

    checkGameStatus(game)
    if(turn != getCookie("player_no"))
        document.getElementById("announcer").innerHTML = "It's the opponent's turn to play. Please wait..."

    while(turn != getCookie("player_no")) {
        sleep(500);
        turn = await game.getTurn()
    }

    await game.updateGameObject();
    gameGenerator(game)
    escalateTurn(game)
}

async function escalateTurn(p_game) {

    var game = p_game;

    checkUsernames(game);

    var table = game.players[0];
    var player = game.players[game.turn];

    var table_hand = table.cards.filter(card => card.in_hand == 1)
    var player_hand = player.cards.filter(card => card.in_hand == 1)

    checkGameStatus(game)

    document.getElementById("announcer").innerHTML = "Calculating moves..."
    var moves = calculateMoves(player_hand, table_hand);
    if(moves.length == 0){
        for(let i=0; i<player_hand.length; i++){
            document.getElementById(`card${player_hand[i].id}`).style.border = "3px solid red";
            document.getElementById(`card${player_hand[i].id}`).addEventListener('click', () => changeOwnership(game, table, player_hand[i], false))
        }
    }else{
        for(let i=0; i<moves.length; i++){
            document.getElementById(`card${moves[i].hand.id}`).style.border = "3px solid red";
            document.getElementById(`card${moves[i].hand.id}`).addEventListener('click', () => changeOwnership(game, player, moves[i], true))
        }
    }
    document.getElementById("announcer").innerHTML = "It's your turn to play!"
}

function calculateMoves(hand, deck) {

    var available_moves = []
    for(let i=0; i<hand.length; i++){
        for(let j=0; j<deck.length; j++){
            if(hand[i].card_number == deck[j].card_number){ //TODO: Calculate adding hand cards together as a move
                available_moves.push({
                    hand: hand[i],
                    deck: deck[j]
                });
            }
        }
    }

    return available_moves;
}


async function changeOwnership(game, p_nextOwner, card, toPlayer) {

    document.getElementById("announcer").innerHTML = "Making move..."
    var nextOwner = p_nextOwner;

    if(toPlayer){ //has move/moves to hand
        card.hand.in_hand = 0;

        await card.hand.updateCard();

        card.deck.player_id = nextOwner.id;
        card.deck.in_hand = 0;
        await card.deck.updateCard();

    }else{ //doesn't have move/moves to table
        card.player_id = nextOwner.id;
        await card.updateCard();
    }

    endTurn(game);


}

export async function endTurn(p_game) {

    var game = p_game;

    await game.updateTurn();
    await game.updateGameObject();

    gameGenerator(game);
    gameplay(game);
}
