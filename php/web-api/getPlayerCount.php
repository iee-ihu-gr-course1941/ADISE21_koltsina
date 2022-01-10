<?php

    include('./conInfo.php');

    $game_id = $_GET['game_id'];
    $query = "SELECT COUNT(id) FROM Players WHERE game_id = $game_id";
    
    $stmt = $mysqli -> query($query);

    if (!empty($stmt) && $stmt->num_rows != 0) {
        $row = $stmt->fetch_row();        
        echo $row[0];
    }else{
        echo 0;
    }
    

?>