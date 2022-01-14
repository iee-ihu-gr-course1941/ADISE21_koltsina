import { getCookie } from "../Util/cookies.js";
import { gameGenerator } from "../../pages/game-page.js"
import { gameplay, endTurn } from "./gameplay.js"
import { endGame } from "./endGame.js"

export function checkGameStatus(p_game) {

    var game = p_game;
    var table = game.players[0];
    var player = game.players[game.turn];
    // alert(game.turn)

    var deck = table.cards.filter(card => card.in_hand == 0)
    var table_hand = table.cards.filter(card => card.in_hand == 1)
    var player_hand = player.cards.filter(card => card.in_hand == 1)

    document.getElementById("announcer").innerHTML = "Checking game status..."
    if(deck.length != 0){
        if(player_hand.length == 0)
            refillPlayer(game, table, player);        
    }else{
        if (!game.players[1].can_play && !game.players[2].can_play)
            endGame(game);
        if(player_hand.length == 0){
            player.can_play = false;
            endTurn(game);
        }        
        if(table_hand.length == 0)
            endGame(game);
    }
}

async function refillPlayer(game, p_table, p_player){
    var player = p_player;
    var table = p_table;
    var deck = table.cards.filter(card => card.in_hand == 0);

    var refillCount = (deck.length >= 4) ? 4 : deck.length;

    for(let i=0; i<refillCount; i++){
        deck[i].in_hand = 1;
        deck[i].player_id = player.id;
        await deck[i].updateCard();
    }

    await game.updateGameObject()
    gameGenerator(game);
    gameplay(game);
}

export function checkUsernames(p_game){
    
    var game = p_game;
    var player_no = getCookie("player_no")

    if(game.players[player_no].username != getCookie("username")){
        game.players[player_no].username = getCookie("username")
        game.players[player_no].updatePlayer();
    }
        

    for(let i=0; i<game.players.length; i++)
        document.getElementById(`Player${i}Name`).innerHTML = game.players[i].username.split('"')
}
