//reusable function.
function getInputValue(fieldID) {
  const inputField = document.getElementById(fieldID);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}
//set innerText function
function setElementInnerText(elementId,areaSum){
  const element = document.getElementById(elementId);
  element.innerText = areaSum;
}

function calculateTriangleArea() {
  const base = getInputValue("triangle-base");
  const height = getInputValue("triangle-height");

  if (isNaN(base, height)) {
    alert("Please Enter a valid Value");
    return;
  }
  const area = 0.5 * base * height;
  setElementInnerText('triangle-area', area)
  
}

function calculateRectangleArea() {
  const width = getInputValue("rectangle-width");
  const length = getInputValue("rectangle-length");
  if (isNaN(width, length)) {
    alert("Please Enter a valid Value");
    return;
  }
  const area = width * length;
  setElementInnerText('rectangle-area', area)
}

//reusable function
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  if (isNaN(base, height)) {
    alert("Please Enter a valid Value");
    return;
  }
  const area = base * height;
  setElementInnerText('parallelogram-area', area)
}

function calculateElipseArea(){
  const majorRadious = getInputValue('elipse-major');
  const minorRadious = getInputValue('elipse-minor');
  if (isNaN(majorRadious, minorRadious)) {
    alert("Please Enter a valid Value");
    return;
  }
  const area = 3.14 * majorRadious * minorRadious;
  setElementInnerText('elipse-area', area);
}