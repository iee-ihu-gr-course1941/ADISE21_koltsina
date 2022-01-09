<?php

    include('./conInfo.php');

    $game_id = $_GET['game_id'];
    
    $query = "SELECT * FROM Players WHERE game_id = $game_id ";

    $stmt = $mysqli -> query($query);

    if (!empty($stmt) && $stmt->num_rows != 0) {
        $i = 0;
        while($row = $stmt->fetch_assoc()){

            $json[$i]['id'] = $row['id'];
            $json[$i]['username'] = $row['username'];
            $json[$i]['player_no'] = $row['player_no'];
            $json[$i]['game_id'] = $row['game_id'];

            $i++;
        }

        $myJSON = json_encode($json);
        echo $myJSON;
    }else{
        echo 0;
    }

?>