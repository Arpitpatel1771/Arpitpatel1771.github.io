<?php
    ob_start();
    session_start();
    $mysqlhost = 'localhost';
    $username = 'root';
    $pass = '';
    $database = 'assignment5';
    if(!mysql_connect($mysqlhost,$username,$pass) || !mysql_select_db($database)){
        die('Oops! Something went wrong.. try reloading again! :(');
    }
?>