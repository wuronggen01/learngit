<?php
		include('conn.php');
		
		$reg_username = $_POST['reg_username'];
		$reg_password = $_POST['reg_password'];
		$res->usernameUsed = "true";
		$res->registerSuccess = "false";
		
		if(!empty($reg_username) && !empty($reg_password)){
			$sql_confirm = "select `username` from `users` where `username` = '$reg_username'";
            $result_confirm = mysql_query($sql_confirm);
			if(mysql_fetch_array($result_confirm)){
				$res->usernameUsed = "true";
				return;
			}
				$sql_insert = "insert into `users` (`id`,`username`,`password`)values(null,'$reg_username','$reg_password')";
				$insert = mysql_query($sql_insert);
				$res->registerSuccess = "true";
		}else if(!empty($reg_username)){
			$sql_confirm = "select `username` from `users` where `username` = '$reg_username'";
			$result_confirm = mysql_query($sql_confirm);
			if(mysql_fetch_array($result_confirm)){
				$res->usernameUsed = "true";
			}else{
				$res->usernameUsed = "false";
			}
		}

		echo json_encode($res);

?>