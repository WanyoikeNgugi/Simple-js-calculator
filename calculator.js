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
      inverseTrigFunc();
      calculateTrig();
      calculate();
    } else if (
      operation === "sin⁻¹" ||
      operation === "cos⁻¹" ||
      operation === "tan⁻¹"
    ) {
      appendToDisplay(`${operation}(`);
    } else if (
      operation === "sin" ||
      operation === "cos" ||
      operation === "tan"
    ) {
      appendToDisplay(`${operation}(`);
    } else if (
      operation === "sinh⁻¹" ||
      operation === "cosh⁻¹" ||
      operation === "tanh⁻¹"
    ) {
      appendToDisplay(`${operation}(`);
    } else if (operation === "√" || operation === "∛") {
      appendToDisplay(`${operation}(`);
    } else if (operation === "xⁿ") {
      let x = prompt("Enter the base:");
      let n = prompt("Enter the exponent:");
      screenValue = Math.pow(x, n).toString();
      screen.value = screenValue;
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
    value.includes("tan(") ||
    value.includes("sinh(") ||
    value.includes("cosh(") ||
    value.includes("tanh(") ||
    value.includes("√(") ||
    value.includes("∛(")
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
    screenValue = screenValue.replace(/√/g, "Math. sqrt");
    screenValue = screenValue.replace(/∛/g, "Math. cbrt");
    screenValue = eval(screenValue);
    screen.value = screenValue;
  } catch (error) {
    screen.value = "Error";
  }
}
function calculateTrig() {
  try {
    screenValue = screenValue.replace(/sin⁻¹/g, "Math.asin");
    screenValue = screenValue.replace(/cos⁻¹/g, "Math.acos");
    screenValue = screenValue.replace(/tan⁻¹/g, "Math.atan");
    screenValue = eval(screenValue);
    screen.value = screenValue;
  } catch (error) {
    screen.value = "Error";
  }
}
function inverseTrigFunc() {
  try {
    screenValue = screenValue.replace(/sinh⁻¹/g, "Math.asinh");
    screenValue = screenValue.replace(/cosh⁻¹/g, "Math.acosh");
    screenValue = screenValue.replace(/tanh⁻¹/g, "Math.atanh");
    screenValue = eval(screenValue);
    screen.value = screenValue;
  } catch (error) {
    screen.value = "Error";
  }
}
