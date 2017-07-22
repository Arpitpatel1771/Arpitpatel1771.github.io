<?php
    require 'connect.php';
    if(!empty($_SESSION['username']) || isset($_SESSION['username'])){
        //header('Location: home.php');
    }
?>
<html>
    <head>
        <title>Chatterbox</title>
        <script type="text/javascript" src="jquery.js"></script>
        <link href="index.css" type="text/css" rel="stylesheet">
        <script type="text/javascript" src="index.js"></script>
    </head>
    <body>
        <div id="overlay">
            <div id="progstat"></div>
            <div id="progress" class="progress rounded"></div>
        </div>
        <img src="cardboard2.jpg" class="backgroundimage">
        <div class="bring bringlogin noselect transspl">Already have an account? Click here to Login.</div>
        <div class="bring bringsignup noselect transspl">Don't have an account? Create one for free!</div>
        <div class="content">
            <div class="header noselect">
                <span class="headerchar">C</span>
                <span class="headerchar">h</span>
                <span class="headerchar">a</span>
                <span class="headerchar">t</span>
                <span class="headerchar">t</span>
                <span class="headerchar">e</span>
                <span class="headerchar">r</span>
                <span class="header2">
                    <span class="headerchar">B</span>
                    <span class="headerchar">o</span>
                    <span class="headerchar">x</span>
                </span>
            </div>
            <div class="body">
                <div class="sideleft"></div>
                <div class="sideright"></div>
                <div class="sidetop"></div>
                <div class="sidebottom"></div>
                <div class="loginform">
                    <div class="err errlogin"></div>
                    <form action="" method="post" id="loginform">
                        <table class="tbl tbllogin">
                            <tr>
                                <td class="leftalign">Username</td>
                                <td class="rightalign"><input type="text" class="inp inp1" name="username" maxlength="20"/></td>
                            </tr>
                            <tr>
                                <td class="leftalign">Password</td>
                                <td class="rightalign"><input type="password" class="inp inp1" name="password" maxlength="12"/></td>
                            </tr>
                            <tr>
                                <td colspan="2" class="btnwrapper"><input type="submit" class="bttn login" value="Login" /></td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div class="signupform widthclass heightclass">
                    <div class="err errsignup"></div>
                    <form action="" method="post" id="signupform">
                        <table class="tbl tblsignup">
                            <tr>
                                <td class="leftalign">First name</td>
                                <td class="rightalign"><div class="lol"></div><input type="text" class="inp inp2 trans3" name="first"  maxlength="20"/></td>
                            </tr>
                            <tr>
                                <td class="leftalign">Surname</td>
                                <td class="rightalign"><input type="text" class="inp inp2 trans3" name="last"  maxlength="20"/></td>
                            </tr>
                            <tr>
                                <td class="leftalign">Username</td>
                                <td class="rightalign"><input type="text" class="inp inp2 trans3" name="username2"  maxlength="20"/></td>
                            </tr>
                            <tr>
                                <td class="leftalign">Password</td>
                                <td class="rightalign"><input type="password" class="inp inp2 trans3" name="password2" maxlength="12"/></td>
                            </tr>
                            <tr>
                                <td class="leftalign">Confirm<br>Password</td>
                                <td class="rightalign"><input type="password" class="inp inp2 trans3" name="password2cnf"  maxlength="12"/></td>
                            </tr>
                            <tr>
                                <td colspan="2" class="btnwrapper"><input type="submit" class="bttn signup" value="Register" /></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
        <a href="home.php" class="redirect">redirect</a>
    </body>
</html>
