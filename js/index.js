window.onload=function(){
    // let dot = document.getElementsByClassName('dot');
    // let tu = document.getElementsByClassName('tu');
    let ul = document.querySelector('ul');
    let tu = document.querySelectorAll('.tu');
    let dot = document.querySelectorAll('.dot');
    let leftBtn = document.querySelector('.leftBtn');
    // console.log(leftBtn);
    let rightBtn = document.querySelector('.rightBtn');
    // console.log(rightBtn);
    let index = 0;
    let flag = true;
    for(let i=0;i<dot.length;i++){
        dot[i].onclick=function(){
            for(let j=0;j<dot.length;j++){
                dot[j].className='dot';
                tu[j].style.zIndex=10;
            }
            dot[i].className='dot hot';
            tu[i].style.zIndex=999;
            index=i;
        }
    }
    ul.onmouseenter=function(){
        clearInterval(t);
    }
    ul.onmouseleave=function(){
        t=setInterval(move,2000);
    }
    rightBtn.onclick =function(){
        move();
    }
    leftBtn.onclick=function(){
        moveL();
    }
    let t = setInterval(move,2000);
    function move(){
        index++;
        if(index === tu.length){
            index=0;
        }
        tu.forEach(function(element){
            element.style.zIndex=10;
        });
        dot.forEach(element=>element.className='dot');
        tu[index].style.zIndex=999;
        dot[index].className='dot hot';
    }
    function moveL(){
        index--;
        if(index<0){
            index=tu.length-1;
        }
        tu.forEach(function(element){
            element.style.zIndex=10;
        });
        dot.forEach(element=>element.className='dot');
        tu[index].style.zIndex=999;
        dot[index].className='dot hot';
    }

}