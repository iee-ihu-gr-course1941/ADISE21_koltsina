<?php

    include('./conInfo.php');

    $id = $_GET['id'];

    $query = "SELECT turn FROM Game WHERE id = $id;";
    $stmt = $mysqli -> query($query);

    if (!empty($stmt) && $stmt->num_rows != 0) {
        $row = $stmt->fetch_row();        
        echo $row[0];
    }else{
        echo 0;
    }
    
?>