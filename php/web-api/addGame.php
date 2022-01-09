<?php

    include('./conInfo.php');

    $turn =  $_POST['turn'];

    $query = "INSERT INTO Game (turn) VALUES ($turn);";

    $stmt = $mysqli -> query($query);

    $query = "SELECT * FROM Game ORDER BY id DESC LIMIT 1;";

    $stmt = $mysqli -> query($query);

    if (!empty($stmt) && $stmt->num_rows != 0) {
        $row = $stmt->fetch_row();        
        echo $row[0];
    }else{
        echo 0;
    }
        
?>