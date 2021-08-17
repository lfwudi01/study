window.onload=function(){
    /*
        设置主页轮播图广告滚动
    */
    var scrollImg = document.getElementById("scrollImg");
    var imgArr=["img/scrImg/q.jpg","img/scrImg/q1.jpg","img/scrImg/q2.jpg","img/scrImg/q3.jpg","img/scrImg/q4.jpg","img/scrImg/q5.jpg","img/scrImg/q6.jpg","img/scrImg/q7.jpg","img/scrImg/q8.jpg"];
    var index=0;
    setInterval(function(){
        index++;
        index %= imgArr.length;
        scrollImg.src=imgArr[index];
    },3000);
};