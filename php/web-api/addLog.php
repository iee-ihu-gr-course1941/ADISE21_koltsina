<?php

    include('./conInfo.php');

    $text =  $_POST['text'];

    $query = "INSERT INTO Log (logger) VALUES ('$text');";

    $stmt = $mysqli -> query($query);


?>