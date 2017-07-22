<?php
    require 'connect.php';
    if(empty($_SESSION['username']) || !isset($_SESSION['username'])){
        header('Location: index.php');
    }
    if(empty($_POST['getusers'])){
        header('Location: home.php');
    }
    $query = 'SELECT `first`,`last`,`username` FROM `users`';
    $query_run = mysql_query($query);
    $i = 0;
    for($i = 0; $i < mysql_num_rows($query_run); $i++){
        if(mysql_result($query_run,$i,'username') != $_SESSION['username']){
            if($i == 0){
                echo "<div class='user active' id='".mysql_result($query_run,$i,'username')."'><div class='usrname noselect'>".mysql_result($query_run,$i,'username')."</div><div class='name noselect'>".mysql_result($query_run,$i,'first')."&nbsp;".mysql_result($query_run,$i,'last')."</div></div>";
            }else {
                echo "<div class='user' id='".mysql_result($query_run,$i,'username')."'><div class='usrname noselect'>" . mysql_result($query_run, $i, 'username') . "</div><div class='name noselect'>" . mysql_result($query_run, $i, 'first') . "&nbsp;" . mysql_result($query_run, $i, 'last') . "</div></div>";
            }
        }
    }
?>