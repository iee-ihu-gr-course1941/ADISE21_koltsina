<?php

    include('./conInfo.php');

    $id = $_GET['id'];
    $in_hand = $_GET['in_hand'];
    $player_id = $_GET['player_id'];

    $query = "UPDATE Deck SET in_hand = $in_hand, player_id = $player_id WHERE id = $id;";

    $stmt = $mysqli -> query($query);

?>