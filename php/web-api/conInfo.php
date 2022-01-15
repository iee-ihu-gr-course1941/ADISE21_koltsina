<?php
$user='it174913';
$pass='Piperomania1.';
$host='localhost';
$db = 'koltsinadb';


if(gethostname()=='users.iee.ihu.gr') {
    $mysqli = new mysqli($host, $user, $pass, $db,null,'/home/student/it/2017/it174913/mysql/run/mysql.sock');
} else {
//    $pass=null;
    $mysqli = new mysqli($host, $user, $pass, $db);
}
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" .
        $mysqli->connect_errno . ") " . $mysqli->connect_error;
}?>
