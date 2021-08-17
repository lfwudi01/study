window.onload=function(){
    /*
        设置img_left_div的宽度随图片数量而变化
    */
   var imgBox = document.getElementById("img_left_div");
   var imgArr = imgBox.getElementsByTagName("img");
   imgBox.style.width = 648*imgArr.length+"px";
};