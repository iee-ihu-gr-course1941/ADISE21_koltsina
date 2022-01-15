<?php

    include('./conInfo.php');

    $username =  $_POST['username'];
    $player_no = $_POST['player_no'];
    $game_id =  $_POST['game_id'];

    $query = "INSERT INTO Players (username, player_no, game_id) VALUES ('$username', $player_no, $game_id);";
    $stmt = $mysqli -> query($query);

    $query = "SELECT * FROM Players WHERE player_no = $player_no AND game_id = $game_id;";
    $stmt = $mysqli -> query($query);
    $row = $stmt->fetch_assoc();

     $player_data = new \stdClass();
     $player_data->id = $row['id'];
     $player_data->username = $row['username'];
     $player_data->player_no = $row['player_no'];
     $player_data->game_id = $row['game_id'];

     $json = json_encode($player_data);
     echo $json;
?>
