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


function BMI(){
    var h = document.getElementById('h').value;
    var w = document.getElementById('w').value;
    var bmi = w/(h/100*h/100);
    var bmio = (bmi.toFixed(2));

    document.getElementById('result').innerHTML = "Your BMI is " + bmio;
}

var body = document.getElementsByTagName("body");
var modes = document.querySelector('.darkite-mode');
    
const btn = document.querySelector(".darkite-mode");
btn.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
})