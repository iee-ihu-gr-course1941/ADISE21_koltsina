<?php

    include('./conInfo.php');

    $deck = new \stdClass();
    $deck =  json_decode($_GET['deck']);
    $player_id = $_GET['player_id'];
    $in_hand = $_GET['in_hand'];
    $query = "";

    foreach($deck as $card){
        $id = $card->id;
        $query .= "UPDATE Deck SET in_hand = $in_hand, player_id = $player_id WHERE id = $id;";
    }
    $stmt = $mysqli -> multi_query($query);

?>