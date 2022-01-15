<?php

    include('./conInfo.php');

    $id = $_GET['id'];

    $query = "SELECT * FROM Deck WHERE id = $id;";

$mysqli ="";
$stmt = $mysqli -> query($query);

    if (!empty($stmt) && $stmt->num_rows != 0) {
        $i = 0;
        while($row = $stmt->fetch_assoc()){

            $json['id'] = $row['id'];
            $json['card_number'] = $row['card_number'];
            $json['card_shape'] = $row['card_shape'];
            $json['in_hand'] = $row['in_hand'];
            $json['player_id'] = $row['player_id'];

            $i++;
        }

        $myJSON = json_encode($json);
        echo $myJSON;
    }else{
        echo null;
    }

?>