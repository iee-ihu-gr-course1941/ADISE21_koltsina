<?php

    include('./conInfo.php');
    require_once "db_upass.php";


    $id = $_GET['id'];
    $query = "SELECT * FROM Game WHERE id = $id;";

    $stmt = $mysqli -> query($query);

    if (!empty($stmt) && $stmt->num_rows != 0) {
        while($row = $stmt->fetch_assoc()){
            $json['id'] = $row['id'];
            $json['turn'] = $row['turn'];
        }

        $myJSON = json_encode($json);
        echo $myJSON;
    }else{
        echo 0;
    }
?>
