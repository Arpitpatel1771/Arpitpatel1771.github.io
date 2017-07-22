<?php
    require 'connect.php';
    if(!empty($_SESSION['username']) || isset($_SESSION['username'])){
        header('Location: home.php');
    }
?>
<html>
<head>
    <title>NoteStore</title>
    <!-- jquery, css and scripts -->
    <script src="jquery.js" type="text/javascript"></script>
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" type="text/javascript" ></script>-->
    <link rel="stylesheet" href="index.css" type="text/css" />
    <script src="index.js" type="text/javascript "></script>
</head>
<body>
    <img src="bk.jpg" class="bk" />
    <div class="header"><div class="hdrtext">Note Store<div class="underline"></div></div></div>
    <div class="content">
        <div class="logincontent transopacity">
            <?php
                if(isset($_POST['username']) && isset($_POST['password'])){
                    $username = $_POST['username'];
                    $password = $_POST['password'];
                    $passwordhash = md5($password);
                    if(!empty($username) && !empty($password)){
                        $query = "SELECT `username`, `password` FROM `users` WHERE `username`='".mysql_real_escape_string($username)."' AND `password`='$passwordhash'";
                        if($query_run = mysql_query($query)){
                            if(mysql_num_rows($query_run) != 1){
                                echo '<span class="error">Invalid Login Data</span>';
                            }else{
                                $loggedinusername = mysql_result($query_run,0,'username');
                                $_SESSION['username'] = $loggedinusername;
                                header('Location: home.php');
                            }
                        }
                    }else{
                        echo '<span class="error">Please enter a username and password.</span>';
                    }
                }
            ?>
            <form action="index.php" method="post" >
                <div class="field"><div class="labeltext">Username</div> <input class="inp input1 username" name="username"  type="text" required="required" maxlength="20"></div>
                <div class="field"><div class="labeltext">Password</div> <input class="inp input1 pass" name="password" type="password" required="required" maxlength="12"></div>
                <div class="field"><input class="btn loginbtn noselect" type="submit" value="Log in"></div>
            </form>
        </div>
        <div class="seperatorwrapper">
            <div class="seperator"></div>
        </div>
        <div class="signupcontent transopacity">
            <?php
                if(isset($_POST['regusername']) && isset($_POST['regpassword']) && isset($_POST['cnfpassword'])){
                    $regusername = $_POST['regusername'];
                    $regpassword = $_POST['regpassword'];
                    $cnfpassword = $_POST['cnfpassword'];
                    if($regpassword != $cnfpassword){
                        echo '<span class="error">Passwords do not match</span>';
                    }else{
                        $query = "SELECT `username` FROM `users` WHERE `username` = '$regusername' ";
                        if(mysql_num_rows(mysql_query($query)) > 0){
                            echo '<span class="error">Username already exists! <br>Please choose another username.</span>';
                        }else{
                            $query = "INSERT INTO `users` VALUES ('','".mysql_real_escape_string($regusername)."','".md5($regpassword)."')";
                            if(mysql_query($query)){
                                $_SESSION['username'] = $regusername;
                                header('Location: home.php');
                            }else{
                                die('Oops! Something went wrong! Please try again later :(');
                            }
                        }
                    }
                }
            ?>
            <form action="index.php" method="post" >
                <div class="field"><div class="labeltext">Username</div> <input class="inp input2 regusername" type="text" name="regusername" required="required" maxlength="20" value="<?php echo (isset($regusername))?($regusername):('') ?>"/></div>
                <div class="field"><div class="labeltext">Password</div> <input class="inp input2 regpass" type="password" name="regpassword" required="required" maxlength="12"/></div>
                <div class="field"><div class="labeltext">Confirm Password</div> <input class="inp input2 regpass2" type="password" name="cnfpassword" required="required" maxlength="12"/></div>
                <div class="field"><input class="btn signupbtn noselect" type="submit" value="Sign up" /></div>
            </form>
        </div>
    </div>
</body>
</html>
