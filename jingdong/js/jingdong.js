window.onload = function () {
    /* 
        设置图标logo动态变化
    */
    var leftimg = document.getElementById("leftimg");
    var logo = leftimg.getElementsByTagName("img");
    var logospan = leftimg.getElementsByTagName("span");
    var flag = new RegExp("img/logo.png");
    logo[0].onmousemove = function () {
        if (flag.test(logo[0].src)) {
            logo[0].src = "img/changelogo.gif";
            setTimeout(function () {
                logospan[0].style.opacity = "1";
                logospan[1].style.opacity = "1";
                setTimeout(function () {
                    logo[0].src = "img/logo.png";
                    logospan[0].style.opacity = "";
                    logospan[1].style.opacity = "";
                }, 2000);
            }, 4000);
        } else {
            return false;
        }

    };

    /*
        设置img_left_div的宽度随图片数量而变化
    */
    var imgBox = document.getElementById("img_left_div");
    var imgArr = imgBox.getElementsByTagName("img");
    imgBox.style.width = 647 * imgArr.length + "px";

    /*
        设置滚动点击按钮位置居中，autochangebtn（按钮快）autochangediv(滚动块)
    */
    var autochangebtn = document.getElementById("autochangebtn");
    var autochangediv = document.getElementById("autochangediv");
    var autoLeft = (autochangediv.clientWidth - autochangebtn.clientWidth) / 2;
    autochangebtn.style.left = autoLeft + "px";

    /* 
        滚动按钮绑定单击事件
    */
    var btns = autochangebtn.getElementsByTagName("a");
    for (var i = 0; i < btns.length; i++) {
        btns[i].num = i;
        btns[i].onclick = function () {
            clearInterval(timer);
            index = this.num;
            var target = -647 * index;
            move(imgBox, target, 200, "left", function () {
                autoChange();
            });
            setA();
        };
    }
    /* 
        设置自动轮播事件
    */
    autoChange();



    /* 
        设置自动切换函数
    */
    var timer;
    var index = 0;
    function autoChange() {
        timer = setInterval(function () {
            index++;
            if (index >= imgArr.length) {
                index = 0;
            }
            move(imgBox, -647 * index, 200, "left", function () {
                setA();
            });

        }, 3000);
    };


    /* 
                    创建一个函数设置所有a背景色
                 */
    function setA() {
        if (index >= imgArr.length - 1) {
            index = 0;
            imgBox.style.left = 0;
        }
        for (var i = 0; i < btns.length; i++) {
            //解决hover不生效的问题
            btns[i].style.backgroundColor = "";
            btns[i].style.border="";

        }
        btns[index].style.backgroundColor = "white";
        btns[index].style.border="2px solid rgba(0,0,0,.1)";
    };
    /*
        move函数封装移动操作
        obj 对象
        target 目标
     */
    function move(obj, target, speed, attr, callback) {
        clearInterval(obj.timer);
        var current = parseInt(getStyle(obj, attr));
        if (current > target) {
            speed = -speed;
        }
        obj.timer = setInterval(function () {
            var oldValue = parseInt(getStyle(obj, attr));
            var newValue = oldValue + speed;
            if ((speed > 0 && newValue > target) || (speed < 0 && newValue < target)) {
                newValue = target;
            }
            obj.style[attr] = newValue + "px";
            if (newValue == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
        }, 30);
    };

    function getStyle(obj, name) {
        if (window.getComputedStyle) {
            //其他浏览器
            return getComputedStyle(obj, null)[name];
        } else {
            //ie8浏览器
            return obj.currentStyle[name];
        }
    }
};