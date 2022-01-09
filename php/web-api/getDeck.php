<?php

    include('./conInfo.php');

    $player_id = $_GET['player_id'];
    $query = "SELECT * FROM Deck WHERE player_id = $player_id ";


    $in_hand = $_GET['in_hand'] == -1 ? null : $_GET['in_hand'];
    if ($in_hand != null)
        $query .= "AND in_hand = $in_hand ";

    $number_of_cards = $_GET['number_of_cards'] == 0 ? null : $_GET['number_of_cards'];
    if ($number_of_cards != null)
        $query .= "LIMIT $number_of_cards;";

    $stmt = $mysqli -> query($query);

    if (!empty($stmt) && $stmt->num_rows != 0) {
        $i = 0;
        while($row = $stmt->fetch_assoc()){

            $json[$i]['id'] = $row['id'];
            $json[$i]['card_number'] = $row['card_number'];
            $json[$i]['card_shape'] = $row['card_shape'];
            $json[$i]['in_hand'] = $row['in_hand'];
            $json[$i]['player_id'] = $row['player_id'];

            $i++;
        }

        $myJSON = json_encode($json);
        echo $myJSON;
    }else{
        echo 0;
    }

?>