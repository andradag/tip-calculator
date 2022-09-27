// target the HTML elements

const formElement = document.getElementById("form");
const formTotalInputElement = document.getElementById("total");
const formTipInputElement = document.getElementById("tip-percentage");
const tipSpanElement = document.getElementById("tip-amount");
const totalSpanElement = document.getElementById("new-total");

const renderAmounts = (event) => {
  event.preventDefault();
  console.log("form submit");
};

// add event listeners
formElement.addEventListener("submit", renderAmounts);
