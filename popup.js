const convertPxToRem = (event) => {
  const valueToConvert = pxInput.value;
  const convertedValue = valueToConvert * 0.0625;
  pxOutput.textContent = convertedValue + "rem";
  event.preventDefault();
};

const convertRemToPx = (event) => {
  const valueToConvert = remInput.value;
  const convertedValue = valueToConvert / 0.0625;
  remOutput.textContent = convertedValue + "px";
  event.preventDefault();
};

// Pixel to rem conversion elements
const pxInput = document.getElementById("px-input");
const pxForm = document.getElementById("form-px");
const pxOutput = document.getElementById("rem-output");
pxForm.addEventListener("submit", convertPxToRem);

// Rem to pixel conversion elements
const remInput = document.getElementById("rem-input");
const remForm = document.getElementById("form-rems");
const remOutput = document.getElementById("px-output");
remForm.addEventListener("submit", convertRemToPx);
