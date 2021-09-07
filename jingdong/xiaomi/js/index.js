window.onload=function(){
    /* 
        搜索按钮与输入框边框联动
    */
    var searchbutton = document.getElementById("searchbutton");
    var searchinput = document.getElementById("searchinput");
    searchbutton.onmousemove=function(){
        searchinput.style.borderColor="#B0B0B0";
        searchinput.style.borderRight="none";
    }
    searchbutton.onmouseout=function(){
        searchinput.style.borderColor="";
        searchinput.style.borderRight="";
    }

    var titlediv=document.getElementById("titlediv");
    var titledropdown=document.getElementById("titledropdown");
    var as=titlediv.getElementsByTagName("a");
    for(var i=0;i<as.length;i++){
        as[i].onmousemove=function(){
            titledropdown.style.height="230px";
            titledropdown.style.borderTop="1px solid #E0E0E0";
        }
        as[i].onmouseout=function(){
            titledropdown.style.height="";
            titledropdown.style.borderTop="";
        }
    }
    
}