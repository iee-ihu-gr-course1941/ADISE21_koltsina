export function endGame(p_game) {

    var game = p_game;

    var calculation = calculatePoints(game);
    document.getElementById('game').innerHTML = `
    <div class="control">
        <input id="exit" type="button" value="Thank you for playing. The winner is ${calculation.winner.username}. Click here to exit the game.">
    </div>
    <div class="text announcer">
        <div>Player 1 points: ${calculation.pointsp1}</div>
        <br>
        <div>Player 2 points: ${calculation.pointsp2}</div>
    </div>
`
    game.is_running = false;
    document.getElementById('exit').addEventListener('click', () => {window.location.href = "credits-page.php"})
    document.getElementById("announcer").innerHTML = "The game has ended."

    game.deleteGame();
    document.cookie = "game_id=;expires=Thu, 01 Jan 1970;sameSite=Lax";
    document.cookie = "player_no=;expires=Thu, 01 Jan 1970;sameSite=Lax";
}

function calculatePoints(p_game) {
    var game = p_game;

    var player1 = game.players[1]
    var player2 = game.players[2]

    var pointsp1 = 0;
    var pointsp2 = 0;

    if (player1.cards.length > 26)
        pointsp1 += 2;
    else
        pointsp2 += 2;

    var clubsp1;
    for(let i=0; i<player1.cards.length; i++){
        if(player1.cards.card_shape == "Club"){
            if(player1.cards.card_number == 2)
                pointsp1++;
            clubsp1++;
        }
        if(player1.cards.card_shape == "Diamond" && player1.cards.card_number == 10)
            pointsp1++;
    }

    var clubsp2;
    for(let i=0; i<player2.cards.length; i++){
        if(player2.cards.card_shape == "Club"){
            if(player2.cards.card_number == 2)
                pointsp2++;
            clubsp2++;
        }
        if(player2.cards.card_shape == "Diamond" && player2.cards.card_number == 10)
            pointsp2++;
    }

    if(clubsp1 > clubsp2)
        pointsp1++;
    else
        pointsp2++;

    if(pointsp1 > pointsp2)
        return {
            winner: player1,
            pointsp1: pointsp1,
            pointsp2: pointsp2
        };
    else if(pointsp1 < pointsp2)
        return {
            winner: player2,
            pointsp1: pointsp1,
            pointsp2: pointsp2
        };
    else
        return 0;
}
