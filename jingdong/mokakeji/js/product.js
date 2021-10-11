var outsideli = document.getElementsByClassName("outsideli");
var insideul = document.getElementsByClassName("insideul");
var ulheight =new Array("382px","123px");

for(var i=0;i<outsideli.length;i++){
    outsideli[i].num=i;
    outsideli[i].onclick=function(){

        index=this.num;
        for(var a=0;a<insideul.length;a++){
            insideul[a].style.height="0";
        }
        if(insideul[index].clientHeight==0){               
                insideul[index].style.height=ulheight[index];
        }else{
            insideul[index].style.height="";
        }
        
    }
}