<?php

    include('./conInfo.php');

    $id = $_GET['id'];
    $next_turn = $_GET['turn'] == 1 ? 2 : 1;

    $query = "UPDATE Game SET turn = $next_turn WHERE id = $id;";
    $stmt = $mysqli -> query($query);

    echo $next_turn;
?>