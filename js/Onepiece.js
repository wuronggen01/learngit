/**
 * Created by Logan on 2015/11/29.
 */

$(function(){
    var chara = $(".character");

    chara.animate({
        top:'40px',
        opacity:1
    },600);
    chara.mouseover(function(){$(this).css("background-size","cover")});
    chara.mouseout(function(){$(this).css("background-size","124px 637px")});

    var vote = $(".add");
    vote.click(function(){
        var xhr = new creatXHR();
        var id = this.name;
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    var res = xhr.responseText;
                    var str = res.split("_");
                    if(str[0] == "true"){
                        $(this).find(".add").innerText("����:" + str[1]);
                    }else{
                        alert("ͶƱʧ�ܣ�");
                    }
                }
            }
        }
        xhr.open("post","/MyVoteSystem/MyServlet?time="+new Date().getTime()+"&method=vote");
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send("id="+id);
    });

})

//ajax����
function creatXHR(){
    var xhr = null;
    try{
        xhr = new ActiveXObject("microsoft.xmlhttp");
    }catch(e){
        try{
            xhr = new XMLHttpRequest();
        }catch(e){
            alert("��������̫��");
        }
    }
    return xhr;
}



































/*
 var templ,tempt;
 $(".character img").mouseover(function(){
 templ = parseInt($(this).css("left"));
 tempt = parseInt($(this).css("top"))
 $(this).animate({
 width: 136,
 height: "700px",
 left: parseInt($(this).css("left")) - 6,
 top: parseInt($(this).css("top")) - 32
 }, 10);
 })

 $(".character img").mouseout(function(){
 $(this).animate({
 width: "124px",
 height: "637px",
 left: templ,
 top: tempt
 }, 10);
 })*/