<?php

    include('./conInfo.php');

    $player_no = $_GET['player_no'];
    $query = "SELECT COUNT(id) FROM Deck WHERE player_no = $player_no";
    
    $stmt = $mysqli -> query($query);

    if (!empty($stmt) && $stmt->num_rows != 0) {
        $row = $stmt->fetch_row();        
        echo $row[0];
    }else{
        echo 0;
    }
    

?>