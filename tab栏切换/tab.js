var tabList=document.querySelector(".tabList");
var Liall=tabList.querySelectorAll("li");
var items=document.querySelectorAll('.item')
for(var i=0;i<Liall.length;i++){
    Liall[i].setAttribute('index',i);
    Liall[i].onclick=function(){
        //排他思想
        for(var i=0;i<Liall.length;i++){
            Liall[i].className="";
        }
        
        this.className="current";
       var index= this.getAttribute('index');
        console.log(index);
        for(var i=0;i<items.length;i++){
            items[i].style.display='none';
        }
        items[index].style.display='block';
    }
}