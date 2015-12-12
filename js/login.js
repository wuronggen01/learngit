/*balabala*/
window.onload = function () {
    var username = $("#username");   						    		//用户名输入框对象
    var password = $("#password");                                      //密码输入框对象
    var username_haserror = $(".has-error");							//当用户名有错时
    var help_blank = $("#help-blank");								    //用户名空提示
    var help_used = $("#help-used");						            //用户名存在提示
    var patt1 = /^(\w+)$/;												//正则  用户名格式
    var patt2 = /^(\w{5,15})$/;                                         //正则  注册用户格式
    var signIn = $("#signIn");											//登录按钮
    var visitor = $("#visitor");										//游客登录按钮
    var registration = $("#registration");								//切换注册页面
    var register = $("#register");										//注册提交按钮
    var have_account = $("#have_account");								//切换登录页面
    var regUsername = $("#reg_username");								//注册用户输入框
    var regPassword = $("#reg_password");								//注册密码
    var confirmPassword = $("#confirmPassword");					    //注册确认密码

    //游客登录
    visitor.click(function () {
        window.location = "Onepiece.php";
    })

    //登录验证
    function onEnterDown(e) {
        var event = e || window.event;
        if (event.keyCode == 13) {
            alert("Enter success!");
            var usernameVal = username.val();
            var passwordVal = password.val();
            var xhr = createXHR();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var res = xhr.responseText;
                        if (res == "signInSuccess") {
                            location.href = "Onepiece.php";
                        } else {
                            alert("Username or Password error!");
                        }
                    }
                }
            }
            xhr.open("post", "signin.php");
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send("username=" + username + "&password=" + password);
        }
    }

    signIn.click(function () {
        var usernameVal = username.val();
        var passwordVal = password.val();
        var xhr = createXHR();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var res = xhr.responseText;
                    if (res == "signInSuccess") {
                        location.href = "Onepiece.php";
                    } else {
                        alert("Username or Password error!");
                    }
                }
            }
        }
        xhr.open("post", "signin.php");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send("username=" + username + "&password=" + password);
    })

    //注册账号
    register.click(function () {
        var reg_username = document.getElementById("reg_username").value;
        var reg_password = document.getElementById("reg_password").value;
        var confirmPassword = $("#confirmPassword").val();
        var xhr = createXHR();

        if ((reg_password == confirmPassword) && patt2.test(regUsername.val())) {
            xhr.open("post", "registration.php");
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send("reg_username=" + reg_username + "&reg_password=" + reg_password);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var res = eval("(" + xhr.responseText + ")");
                        if (res.registerSuccess == "true") {
                            alert("register success!");
                        }
                    }
                }
            }
        } else {
            regUsername.attr("class", "form-control form-reg has-error");
        }
    });

    //验证密码
    $(".con-password").bind("blur keyup", function () {
        if (regPassword.val() == confirmPassword.val()) {
            regPassword.attr("class", "form-control form-reg con-password");
            confirmPassword.attr("class", "form-control form-reg con-password");
        } else {
            regPassword.attr("class", "form-control form-reg con-password has-error");
            confirmPassword.attr("class", "form-control form-reg con-password has-error");
        }
    })


    //验证用户名是否重复
    regUsername.attr("class", "form-control form-reg");
    regUsername.blur(function () {
        if (patt2.test($(this).val())) {
            var reg_username = regUsername.val();
            var xhr = createXHR();
            xhr.open("post", "registration.php");
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send("reg_username=" + reg_username);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var res = eval("(" + xhr.responseText + ")");
                        if (res.usernameUsed == "true") {
                            regUsername.attr("class", "form-control form-reg has-error");
                            help_used.css("display", "block");
                        } else {
                            regUsername.attr("class", "form-control form-reg");
                            help_used.css("display", "none");
                        }
                    }
                }
            }
        }
    });

    //注册用户名格式
    regUsername.bind("keyup", function () {
        if (!patt2.test($(this).val())) {
            $(this).attr("class", "form-control form-reg has-error");
        } else {
            $(this).attr("class", "form-control form-reg");
        }
    })

    //输入框效果
    //  username.attr("class","required form-control");
    username.bind("change keyup", function () {
        if (!patt1.test($(this).val())) {
            username.attr("class", "has-error required form-control");
        } else {
            username.attr("class", "required form-control");
        }

        if ($(this).val() == "") {
            help_blank.css("display", "block");
        } else {
            help_blank.css("display", "none");
        }
    })

    //切换注册
    registration.click(function () {
        $(".lcb-login-box-login").css("display", "none");
        $(".lcb-login-box-registration").css("display", "block");
    })
    have_account.click(function () {
        $(".lcb-login-box-login").css("display", "block");
        $(".lcb-login-box-registration").css("display", "none");
    })
}

//创建ajax对象
function createXHR() {
    var xhr = null;
    try {
        xhr = new ActiveXObject("microsoft.xmlhttp");
    } catch (e) {
        try {
            xhr = new XMLHttpRequest();
        } catch (e) {
            window.alert("你的浏览器太差");
        }
    }
    return xhr;
}