<?php
$user='root';
$pass='xxxxxx'; // αυτό που ορίσατε κατά το create
$host='';
$db = 'bookstoredb';
$mysqli = new mysqli($host, $user, $pass, $db, null,
    '/path to home directory/mysql/run/mysql.sock');
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" .
        $mysqli->connect_errno . ") " . $mysqli->connect_error;
}?>
