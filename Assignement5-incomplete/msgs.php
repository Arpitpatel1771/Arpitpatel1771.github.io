<?php
    require 'connect.php';
    if(empty($_SESSION['username']) || !isset($_SESSION['username'])){
        header('Location: index.php');
    }
    if(empty($_POST['otherperson']) || !isset($_POST['otherperson'])){
        header('Location: home.php');
    }else{
        $person = $_POST['otherperson'];
        $user = $_SESSION['username'];
        $query = "SELECT `msg`,`date`,`time`,`sender`,`reciever` FROM `msgs` WHERE (`sender`='".$person."' AND `reciever`='".$user."') OR (`sender`='".$user."' AND `reciever`='".$person."')";
        $query_run = mysql_query($query);
        $i = 0;
        for($i = 0; $i < mysql_num_rows($query_run); $i++){
            if(mysql_result($query_run,$i,'sender') == $user) {
                echo '<div class="msg sent" ><div class="msgbody">' . mysql_result($query_run, $i, 'msg') . '</div><div class="msgfooter">' . mysql_result($query_run, $i, 'time') . '</div></div>';
            }else{
                echo '<div class="msg got" ><div class="msgbody">' . mysql_result($query_run, $i, 'msg') . '</div><div class="msgfooter">' . mysql_result($query_run, $i, 'time') . '</div></div>';
            }
        }
    }
?>