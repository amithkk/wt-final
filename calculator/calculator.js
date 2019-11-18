function processBtn(e) {
  console.log(e);
  var screen = document.querySelector("#calc-screen");
  var pressed = e.target.innerText;
  if (e.target.nodeName !== "BUTTON") return;
  if (pressed)
    switch (pressed) {
      case "=":
        try {
          screen.value = eval(screen.value);
        }
        catch(e){
            screen.value = "E"
        }

        break;

      case "C":
          screen.value = '';
          break;
    
      case 'INR': screen.value *= 64.2; break;
      case 'USD': screen.value /= 64.2; break;
      default:
        screen.value += pressed;
    }
}

document.addEventListener("click", processBtn);
