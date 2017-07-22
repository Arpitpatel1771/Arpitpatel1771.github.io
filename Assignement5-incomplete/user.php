<?php
    require 'connect.php';
    if(empty($_POST['username']) && empty($_POST['username2'])){
        header('Location: home.php');
    }
    if(isset($_POST['username']) && isset($_POST['password'])){
        $username = $_POST['username'];
        $password = $_POST['password'];
        $passwordhash = md5($password);
        $query = "SELECT `username`, `password` FROM `users` WHERE `username`='".mysql_real_escape_string($username)."' AND `password`='$passwordhash'";
        if($query_run = mysql_query($query)){
            if(mysql_num_rows($query_run) != 1){
                echo 'No such user exists.';
            }else{
                $loggedinusername = mysql_result($query_run,0,'username');
                $_SESSION['username'] = $loggedinusername;
                echo 'done';
            }
        }
    }
    if(isset($_POST['username2'])) {
        $regusername = $_POST['username2'];
        $regpassword = $_POST['password2'];
        $first = $_POST['first'];
        $last = $_POST['last'];
        $query = "SELECT `username` FROM `users` WHERE `username` = '$regusername' ";
        if (mysql_num_rows(mysql_query($query)) > 0) {
            echo 'Username already exists!<br>Please choose another username.';
        } else {
            $query = "INSERT INTO `users` VALUES ('','" . $first . "','" . $last . "','" . mysql_real_escape_string($regusername) . "','" . md5($regpassword) . "')";
            if (mysql_query($query)) {
                $_SESSION['username'] = $regusername;
                echo 'done';
            } else {
                echo 'Request could not be completed,<br>Please try again';
            }
        }
    }
?>
