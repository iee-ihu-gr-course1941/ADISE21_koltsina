<?php

    include('./conInfo.php');

    $id = $_GET['id'];
    $query = "DELETE FROM Game WHERE id = $id;";

    $stmt = $mysqli -> query($query);

?>