<?php
ob_start();
session_start();
$mysqlhost = 'localhost';
$username = 'arpitpatel1771';
$pass = '8141016301';
$database = 'assignment4';
if(!mysql_connect($mysqlhost,$username,$pass) || !mysql_select_db($database)){
    die('Oops! Something went wrong.. try reloading again! :(');
}
?>