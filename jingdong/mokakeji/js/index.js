window.onload=function(){
    swiperadd();
    var righttitle = document.getElementById("right-title");
    var as = righttitle.getElementsByTagName("a");
    var rightcase=document.getElementsByClassName("rightcase-swarp");
    var index=0;
    function swiperadd(){
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            // spaceBetween: 30,
            loop: true,
            speed: 1500,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: true,//等同于以下设置
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
        });
    }

    for(var i=0;i<as.length;i++){
        as[i].num=i;
        as[i].onclick=function(){
            index=this.num;
            for(var a=0;a<as.length;a++){
                as[a].style.backgroundColor="";
                as[a].style.color="";
            }
            this.style.backgroundColor="#007BFF";
            this.style.color="#fff";
            for(var b=0;b<rightcase.length;b++){
                rightcase[b].style.display="none";
                rightcase[b].style.opacity="0";
            }
           
                rightcase[index].style.display="block";
                setTimeout(function () {
                    rightcase[index].style.opacity="1";
                },.1);
                swiperadd();
            
            
            
            
        }
    }

    
}