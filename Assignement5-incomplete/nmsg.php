<?php
    require 'connect.php';
    if(empty($_SESSION['username']) || !isset($_SESSION['username'])){
        header('Location: index.php');
    }
    if(empty($_POST['nmsg'])){
        header('Location: home.php');
    }else{
        $msg = $_POST['nmsg'];
        $to = $_POST['otherperson2'];
        $from = $_SESSION['username'];
        $query = "INSERT INTO `msgs` VALUES ('','".$msg."','".$from."','".$to."','".date("Y-m-d")."','".date("h:i:sa")."')";
        mysql_query($query);
    }
?>