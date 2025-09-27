 const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      currentInput = "";
      display.value = "0";
    } 
    else if (value === "=") {
      try {
        currentInput = eval(currentInput.replace("×","*").replace("÷","/"));
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } 
    else if (value === "√") {
      currentInput = Math.sqrt(parseFloat(display.value)).toString();
      display.value = currentInput;
    } 
    else if (value === "%") {
      currentInput = (parseFloat(display.value) / 100).toString();
      display.value = currentInput;
    } 
    else if (value === "±") {
      currentInput = (parseFloat(display.value) * -1).toString();
      display.value = currentInput;
    } 
    else {
      if (display.value === "0") {
        currentInput = value;
      } else {
        currentInput += value;
      }
      display.value = currentInput;
    }
  });
});
