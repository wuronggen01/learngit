<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Login</title>
    <link type="text/css" rel="stylesheet" href="css/login.css" />
</head>
<body class="lcb-login">
		<div class="lcb-login-main">
			<h1 class="lcb-login-logo">Praise</h1>
			<div class="lcb-login-boxes">
                <!--登录页面-->
                <div class="lcb-login-box lcb-login-box-login validate" >
					<h2 class="lcb-login-box-head">Sign in</h2>
					<div class="form-group">
						<div class="jvFloat">
							<input class="required form-control ahas-error" placeholder="Username" name="username" type="text" id="username" />
							<span class="help-block" id="help-blank">This field is required.</span>
						</div>
					</div>
					<div class="form-group">
						<div class="jvFloat">
							<input class="required form-control" placeholder="Password" name="password" type="password" id="password" />
						</div>
					</div>
					<div class="lcb-login-box-bottom">
						<div class="links pull-left" id="registration">Registration</div>
						<button id="signIn" class="btn-info btn btn-lg pull-right" type="button" >Sign in</button>
						<button class="btn-info btn btn-lg pull-right" type="button" id="visitor">I am visitor</button>
					</div>
				</div>
                <!--注册页面-->
				<div class="lcb-login-box lcb-login-box-registration validate" style="display:none;">
					<h2 class="lcb-login-box-head">Registration</h2>
					<div class="form-group">
						<div class="jvFloat">
							<input class="form-control form-reg ahas-error" type="text" placeholder="Username" id="reg_username"/>
							<span class="help-block" id="help-used" >This username have been used.</span>
						</div>
					</div>
					<div class="form-group">
						<div class="jvFloat">
							<input class="form-control form-reg con-password a" type="password" placeholder="Password" id="reg_password"/>
						</div>
					</div>
					<div class="form-group">
						<div class="jvFloat">
							<input class="form-control form-reg con-password" type="password" placeholder="Confirm Password" id="confirmPassword"/>
						</div>
					</div>
					<div class="lcb-login-box-bottom">
						<div class="links pull-left" id="have_account">I already have an account</div>
						<button class="btn-info btn btn-lg pull-right" id="register">Register</button>
					</div>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="js/jquery-1.11.3.js"></script>
		<script type="text/javascript" src="js/login.js"></script>
</body>
</html>