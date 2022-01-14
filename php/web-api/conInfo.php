<?php
$user='root';
$pass='1234';
$host='localhost';
$db = 'THE_DB';


$mysqli = new mysqli($host, $user, $pass, $db,null,'/home/student/it/2017/it174951/mysql/run/mysql.sock');
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" .
        $mysqli->connect_errno . ") " . $mysqli->connect_error;
}?>

