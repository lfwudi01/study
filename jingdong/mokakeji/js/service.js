var outsideli = document.getElementsByClassName("outsideli");
var insideul = document.getElementsByClassName("insideul");
var ulheight =new Array("264px","176px","132px");

for(var i=0;i<outsideli.length;i++){
    outsideli[i].num=i;
    outsideli[i].onclick=function(){

        index=this.num;
        for(var a=0;a<insideul.length;a++){
            insideul[a].style.height="0";
        }
        if(insideul[index-1].clientHeight==0){               
                insideul[index-1].style.height=ulheight[index-1];
        }else{
            insideul[index].style.height="";
        }
        
    }
}