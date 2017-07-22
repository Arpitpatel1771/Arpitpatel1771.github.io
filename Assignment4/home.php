<?php
    require 'connect.php';
    if(empty($_SESSION['username']) || !isset($_SESSION['username'])){
        header('Location: index.php');
    }
    if(isset($_POST['note'])){
        $note = $_POST['note'];
        $user = $_SESSION['username'];
        if(!empty($note)){
            $query = "INSERT INTO `notes` VALUES('','$user','".mysql_real_escape_string($note)."')";
            if(mysql_query($query)){
                header('Location: home.php');
            }
        }
    }
    if(isset($_POST['deletenote'])) {
        $deleteid = $_POST['deletenote'];
        $querydelete = "DELETE FROM `notes` WHERE `notes`.`id`='$deleteid'";
        if(mysql_query($querydelete)){
            header('Location: home.php');
        }
    }
?>
<html>
<head>
    <title>NoteStore</title>
    <!-- jquery, css and scripts -->
    <script src="jquery.js" type="text/javascript"></script>
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" type="text/javascript" ></script>-->
    <link rel="stylesheet" href="home.css" type="text/css" />
    <script src="home.js" type="text/javascript "></script>
</head>
<body>
    <img src="table.jpg" class="bk" />
    <div class="notes">
        <?php
        $user = $_SESSION['username'];
        $query = "SELECT `note`,`id` FROM `notes` WHERE `notes`.`creator`='$user'";
        if(mysql_query($query)){
            $i = 0;
            for($i = 0;$i < mysql_num_rows(mysql_query($query)) ; $i = $i + 1){
                $temp = mysql_result(mysql_query($query),$i,'note');
                $temp2 = mysql_result(mysql_query($query),$i,'id');
                echo '<div class="notewrapper">
                            <div class="notetext">'.$temp.'</div>
                            <div class="closenote noselect">&times;</div>
                            <form action="home.php" method="post">
                                <input class="deleteinput" value="'.$temp2.'" name="deletenote"/>
                                <input class="deletesubmit" type="submit" value="Delete this note"/>
                            </form>
                      </div>';
            }
        }
        ?>
        <div class="newnotewrapper bk2">
            <div class="addsymbol noselect">+</div>
        </div>
        <form action="home.php" method="post" >
            <input class="note" type="text" maxlength="60" name="note" />
            <input class="makenote" type="submit" value="make a note" />
        </form>
    </div>
    <div class="header" >
        <div class="hdrcontent">
            <?php
                echo '<span class="hdrtext noselect">'.$_SESSION['username'].'</span>'
            ?>
            <div class="seperator"></div>
            <span class="hdrtext trans hdrtextlogout"><a href="logout.php">Log Out</a></div></span>
        </div>
    </div>
</body>
</html>

