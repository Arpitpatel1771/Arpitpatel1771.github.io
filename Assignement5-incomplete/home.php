<?php
    require 'connect.php';
    if(empty($_SESSION['username']) || !isset($_SESSION['username'])){
        header('Location: index.php');
    }
?>
<html>
<head>
    <title>Chatterbox</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script type="text/javascript" src="jquery.js"></script>
    <link href="home.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="home.js"></script>
</head>
<body>
    <div class="usersformwrapper">
        <form action="" method="post" id="getusersform">
            <input type="text" name="getusers" />
            <input type="submit" class="submitusers" />
        </form>
    </div>
    <div class="msgformwrapper">
        <form action="" method="post" id="msgform">
            <input class="otherperson" name="otherperson" value="arpitpatel1771"/>
            <input type="submit" class="msgsubmit" />
        </form>
    </div>
    <div class="newmsgwrapper">
        <form id="newmsg" action="" method="post">
            <textarea name="nmsg"></textarea>
            <input name="otherperson2" value="arpitpatel1771"/>
            <input type="submit" class="newmsgbtn" />
        </form>
    </div>
    <div id="overlay">
        <div id="progstat"></div>
        <div id="progress" class="progress rounded"></div>
    </div>
    <img src="cardboard2.jpg" class="backgroundimage">
    <div class="content">
        <div class="panel">
            <div class="pnlheader">
                <div class="srchtypewrapper">
                    Search by <span class="srchtype noselect">Username</span>
                </div>
                <div class="srchwrapper">
                    <input type="text" class="inp inpsrch" />
                    <div class="srchiconwrapper noselect"><i class="fa fa-search"></i></div>
                </div>
            </div>
            <div class="pnlbody"></div>
            <div class="pnlfooter">
                <a href="logout.php" class="logout" title="Log out"><?php echo $_SESSION['username'] ?></a>
            </div>
        </div>
        <div class="msgbox">
            <div class="boxheader">

            </div>
            <span class="paneltoggle">Hide</span>
            <div class="boxbody"></div>
            <div class="boxfooter">
                <div class="input">
                    <div contenteditable="true" class="msginput"></div>
                </div>
                <div class="sendbtn noselect effect">
                    <i class="fa fa-paper-plane"></i>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

