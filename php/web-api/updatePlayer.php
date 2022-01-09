<?php

    include('./conInfo.php');

    $id = $_GET['id'];
    $username = $_GET['username'];
    $player_no = $_GET['player_no'];

    $query = "UPDATE Players SET username = '$username', player_no = $player_no WHERE id = $id;";
    $stmt = $mysqli -> query($query);

?>