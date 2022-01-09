<?php

    include('./conInfo.php');

    $deck = new \stdClass();
    $deck =  json_decode($_POST['deck']);
    $in_hand = $_POST['in_hand'];
    $player_id = $_POST['player_id'];

    $query = "";

    foreach($deck as $card){
        $card_number = $card->card_number;
        $card_shape = $card->card_shape;
        $query .= "INSERT INTO Deck (card_number, card_shape, in_hand, player_id) VALUES ('$card_number', '$card_shape', $in_hand, $player_id);";
    }

    $stmt = $mysqli -> multi_query($query);

?>