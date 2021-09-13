window.onload = function () {
    /* 
        右侧导航条响应事件
    */
    var ringhtnav = function () {
        var seewd = document.body.offsetWidth;
        if (seewd <= 1444) {
            returntop.setAttribute('class', 'return-smail');
        } else {
            returntop.setAttribute('class', 'return-larger');
        }
        if (seewd <= 1280) {
            returntop.style.marginRight = "0";
            returntop.style.right = "0";
        } else {
            returntop.style.marginRight = "";
            returntop.style.right = "";
        }
    }
    var returntop = document.getElementById("returntop");
    ringhtnav();

    window.onresize = function () {
        ringhtnav();
    }
    var lasttop = document.getElementById("lasttop");
    document.onscroll=function(){
        var ht = document.documentElement.scrollTop;
        console.log(ht);
        if(ht>=700){
            lasttop.style.display="block";
        }else{
            lasttop.style.display="";
        }
    }

    lasttop.onclick=function(){
        document.documentElement.scrollTop="0";
    }

}