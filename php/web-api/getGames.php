<?php

    include('./conInfo.php');


    $query = "SELECT * FROM Game;";
    $stmt = $mysqli -> query($query);

    if (!empty($stmt) && $stmt->num_rows != 0) {
        $i = 0;
        while($row = $stmt->fetch_assoc()){
            $json[$i]['id'] = $row['id'];
            $json[$i]['turn'] = $row['turn'];
            $i = $i + 1;

        }
        $myJSON = json_encode($json);
        echo $myJSON;
    }else{
        echo 0;
    }
?>