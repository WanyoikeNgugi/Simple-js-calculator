document.getElementById("answer").readOnly = true;
let screen = document.getElementById("answer");
let buttons = document.querySelectorAll("button");
let screenValue = "";

document.getElementById("calc").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const operation = event.target.getAttribute("data-operation");
    const value = event.target.innerText;
    if (operation === "clear") {
      screenValue = "";
    } else if (operation === "CE") {
      screenValue = screenValue.slice(0, -1);
    } else if (operation === "equals") {
      calculate();
    } else if (
      operation === "sin" ||
      operation === "cos" ||
      operation === "tan"
    ) {
      appendToDisplay(`${operation}(`);
    } else {
      screenValue += value;
    }
    screen.value = screenValue;
    console.log(screenValue);
  }
});

function appendToDisplay(value) {
  if (
    value.includes("sin(") ||
    value.includes("cos(") ||
    value.includes("tan(")
  ) {
    screenValue += value;
  } else {
    screenValue += value;
  }
  screen.value = screenValue;
}

function calculate() {
  try {
    screenValue = screenValue.replace(/sin/g, "Math.sin");
    screenValue = screenValue.replace(/cos/g, "Math.cos");
    screenValue = screenValue.replace(/tan/g, "Math.tan");

    screenValue = eval(screenValue);
    screen.value = screenValue;
  } catch (error) {
    screen.value = "Error";
  }
}
