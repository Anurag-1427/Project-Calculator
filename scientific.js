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

let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "sin":
        display.innerText = Math.sin(display.innerText);
        break;
      case "cos":
        display.innerText = Math.cos(display.innerText);
        break;
      case "tan":
        display.innerText = Math.tan(display.innerText);
        break;
        case 'x2':
        display.innerText = (display.innerText*display.innerText);
              break;
        case 'x3':
            display.innerText = ((display.innerText*display.innerText)*display.innerText);
          break;
        case '√':
        display.innerText = Math.pow(display.innerText, 1/2);
              break;
        case '∛':
            display.innerText = Math.pow(display.innerText, 1/3);
          break;

      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});


var body = document.getElementsByTagName("body");
var modes = document.querySelector('.darkite-mode');
    
const btn = document.querySelector(".darkite-mode");
btn.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
})