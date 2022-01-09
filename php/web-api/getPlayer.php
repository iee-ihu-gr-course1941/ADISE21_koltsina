<?php

    include('./conInfo.php');

    $id = $_GET['id'];
    
    $query = "SELECT * FROM Players WHERE id = $id ";

    $stmt = $mysqli -> query($query);

    if (!empty($stmt) && $stmt->num_rows != 0) {
        $i = 0;
        while($row = $stmt->fetch_assoc()){

            $json['id'] = $row['id'];
            $json['username'] = $row['username'];
            $json['player_no'] = $row['player_no'];
            $json['game_id'] = $row['game_id'];

            $i++;
        }

        $myJSON = json_encode($json);
        echo $myJSON;
    }else{
        echo 0;
    }

?>