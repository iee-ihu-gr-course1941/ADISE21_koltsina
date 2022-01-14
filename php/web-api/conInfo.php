<?php
    $host='~/public_html';
    $user='root';
    $pass=''; // αυτό που ορίσατε κατά το create
    $db = 'koltsinadb';

    $mysqli = new mysqli($host, $user, $pass, $db);
    // $mysqli = new mysqli($host, $user, $pass, $db, null,
    // '/path to home directory/mysql/run/mysql.sock');
    
    if ($mysqli -> connect_errno) {
        echo "Failed to connect to MySQL: (" .
            $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
?>
