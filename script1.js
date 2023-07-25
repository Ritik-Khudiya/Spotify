let menu=document.getElementById("open-outline");
let navbar=document.getElementsByClassName('navbar')[0];
let close=document.getElementById("close-outline");
let bottomline=document.getElementsByClassName('bottomline')[0];

menu.addEventListener('click',()=>{
    
    navbar.classList.toggle('active');
    bottomline.classList.add('bottomline2');
})

close.addEventListener('click',()=>{
    navbar.classList.toggle('active');
     bottomline.classList.remove('bottomline2');
})