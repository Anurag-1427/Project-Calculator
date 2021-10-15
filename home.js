const menu = document.querySelector('.bi');
const toggleMenuBar = document.querySelector('.toggle-menu');
menu.addEventListener('click', (e)=>{
    console.log('clicked');
    if(toggleMenuBar.style.top=='-1000px'){
        toggleMenuBar.style.top='0px'
    }
    else{
        toggleMenuBar.style.top='-1000px'
    }
})



var body = document.getElementsByTagName("body");
var modes = document.querySelector('.darkite-mode');
    
const btn = document.querySelector(".darkite-mode");
btn.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
})