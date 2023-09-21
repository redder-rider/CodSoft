const displayEl = document.getElementById("displayElement");
const buttonsList = document.querySelectorAll(".button");

Array.from(buttonsList).forEach((item) => {
  item.addEventListener("click", (e) => customButtonClickFunctions(e));
});

function customButtonClickFunctions(e) {
  let tempDisplayValueStorage = displayEl.value;
  if (
    (tempDisplayValueStorage.charAt(tempDisplayValueStorage.length - 1) ==
      "+" ||
      tempDisplayValueStorage.charAt(tempDisplayValueStorage.length - 1) ==
        "-" ||
      tempDisplayValueStorage.charAt(tempDisplayValueStorage.length - 1) ==
        "*" ||
      tempDisplayValueStorage.charAt(tempDisplayValueStorage.length - 1) ==
        "/") &&
    (e.target.value == "+" ||
      e.target.value == "-" ||
      e.target.value == "*" ||
      e.target.value == "/" ||
      e.target.value == "%")
  ) {
    alert("Operator is already present!!\n");
  } else {
    if ((e.target.value <= 9 && e.target.value >= 0) || e.target.value == ".") {
      displayEl.value += e.target.value;
    }
    if (
      e.target.value == "+" ||
      e.target.value == "-" ||
      e.target.value == "*" ||
      e.target.value == "/" ||
      e.target.value == "%"
    ) {
      displayEl.value += e.target.value;
    }
  }

  if (e.target.value == "AC") {
    displayEl.value = "";
  }
  if (e.target.value == "DEL") {
    tempDisplayValueStorage = tempDisplayValueStorage.substring(
      0,
      tempDisplayValueStorage.length - 1
    );
    if (
      tempDisplayValueStorage.charAt(tempDisplayValueStorage.length - 1) == " "
    ) {
      tempDisplayValueStorage = tempDisplayValueStorage.substring(
        0,
        tempDisplayValueStorage.length - 1
      );
    }
    displayEl.value = tempDisplayValueStorage;
  }

  if (e.target.value == "=") {
    tempDisplayValueStorage = displayEl.value;
    let firstOperand = "";
    let secondOperand = "";
    let tempIndex = 0;
    let operation = "";
    for (let i = 0; i < tempDisplayValueStorage.length; i++) {
      if (
        tempDisplayValueStorage.charAt(i) == "/" ||
        tempDisplayValueStorage.charAt(i) == "*" ||
        tempDisplayValueStorage.charAt(i) == "+" ||
        tempDisplayValueStorage.charAt(i) == "-" ||
        tempDisplayValueStorage.charAt(i) == "%"
      ) {
        operation = tempDisplayValueStorage.charAt(i);
        tempIndex = i + 1;
        break;
      } else {
        firstOperand += tempDisplayValueStorage.charAt(i);
      }
    }
    for (let j = tempIndex; j < tempDisplayValueStorage.length; j++) {
      secondOperand += tempDisplayValueStorage.charAt(j);
    }
    customOperationsFunction(
      Number(firstOperand),
      operation,
      Number(secondOperand)
    );
  }
}

function customOperationsFunction(firstOperand, operation, secondOperand) {
  if (operation == "+") {
    displayEl.value = firstOperand + secondOperand;
  }
  if (operation == "-") {
    displayEl.value = firstOperand - secondOperand;
  }
  if (operation == "*") {
    displayEl.value = firstOperand * secondOperand;
  }
  if (operation == "/") {
    displayEl.value = firstOperand / secondOperand;
  }
  if (operation == "%") {
    displayEl.value = firstOperand % secondOperand;
  }
}