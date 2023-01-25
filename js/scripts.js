function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function calculate(num1, num2, oper) {
  if (oper === "add") {
    return add(num1, num2);
  } else if (oper === "subtract") {
    return sub(num1, num2);
  } else if (oper === "multiply") {
    return mul(num1, num2);
  } else if (oper === "divide"){
    return div(num1, num2);
  }
}

function handleCalculation(event) {
  event.preventDefault();
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const oper = document.querySelector("input[name='operator']:checked").value;

  let result = calculate(num1, num2, oper);

  document.getElementById("answer").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", handleCalculation);
});
