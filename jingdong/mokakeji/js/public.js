var returntop = document.getElementById("returntop");
var timer=null;
var ht=document.documentElement.scrollTop;
/*
    滚动显示回滚块
*/
document.onscroll=function(){
    ht = document.documentElement.scrollTop;
    if(ht>200){
        returntop.style.display="block";
    }else{
        returntop.style.display="";
    }
}
/*
    点击返回顶层
*/
returntop.onclick=function(){
    timer = setInterval(function(){
        document.documentElement.scrollTop=Math.floor(ht-45);
        if(ht==0){
            clearInterval(timer);
        }
    },10);
}