<?php
	include('conn.php');
	
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$sql = "select `username`,`password` from `users` where `username`= '$username'";
	$result = mysql_query($sql);
	$array = mysql_fetch_array($result);
	
	if($array){
        if($password == $array['password']){
        	echo "signInSuccess";
        }else{
		echo "passwordError";
        }
    }else{
    	echo "usernameError";
    }
?>