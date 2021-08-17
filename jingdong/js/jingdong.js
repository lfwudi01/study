window.onload=function(){
    /*
        设置img_left_div的宽度随图片数量而变化
    */
    var imgBox = document.getElementById("img_left_div");
    var imgArr = imgBox.getElementsByTagName("img");
    imgBox.style.width = 647*imgArr.length+"px";

    /*
        设置滚动点击按钮位置居中，autochangebtn（按钮快）autochangediv(滚动块)
    */ 
    var autochangebtn = document.getElementById("autochangebtn");
    var autochangediv = document.getElementById("autochangediv");
    var autoLeft = (autochangediv.clientWidth - autochangebtn.clientWidth)/2;
    autochangebtn.style.left=autoLeft+"px";
    
    /* 
        滚动按钮绑定单击事件
    */
    var btns = autochangebtn.getElementsByTagName("a");
    for(var i=0;i<btns.length;i++){
        btns[i].num=i;
        btns[i].onclick=function(){
                clearInterval(timer);
                setA();
                index=this.num;
                var target = -647*index;
                move(imgBox,target,200,"left",function(){
                    autoChange();
                });
                btns[index].style.backgroundColor="black";
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
    var index=0;
    function autoChange(){
       timer = setInterval(function(){
            index++;
            
            setA();
            move(imgBox,-647*index,200,"left",function(){
                if(index==imgArr.length-1){
                    imgBox.style.left=0;
                    index=0;
                    btns[0].style.backgroundColor="black";
                }
            });
            btns[index].style.backgroundColor="black";
        },3000);
    };


    /* 
					创建一个函数设置所有a背景色
				 */
                    function setA(){
                        for(var i=0;i<btns.length;i++){
                            //解决hover不生效的问题
                            btns[i].style.backgroundColor="";
                        }
                    };
    /*
		move函数封装移动操作
		obj 对象
		target 目标
	 */
	function move(obj,target,speed,attr,callback){
		clearInterval(obj.timer);
		var current = parseInt(getStyle(obj,attr));
		if(current>target){
			speed=-speed;
		}
		obj.timer = setInterval(function(){
			var oldValue = parseInt(getStyle(obj,attr));
			var newValue = oldValue+speed;
			if((speed>0 && newValue>target) || (speed<0 && newValue<target)){
				newValue=target;
			}
			obj.style[attr]=newValue+"px";
			if(newValue==target){
				clearInterval(obj.timer);
				callback && callback();
			}
		},30);
	};
	
	function getStyle(obj,name){
		if(window.getComputedStyle){
			//其他浏览器
			return getComputedStyle(obj,null)[name];
		}else{
			//ie8浏览器
			return obj.currentStyle[name];
		}
	}
};