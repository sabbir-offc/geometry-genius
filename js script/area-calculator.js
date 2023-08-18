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
  addToCalculationEnty('Triangle', area);
  
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
  addToCalculationEnty('Rectangle', area);
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
  addToCalculationEnty('Parallelogram', area);
}

function calculateElipseArea(){
  const majorRadious = getInputValue('elipse-major');
  const minorRadious = getInputValue('elipse-minor');
  if (isNaN(majorRadious, minorRadious)) {
    alert("Please Enter a valid Value");
    return;
  }
  const area = Math.PI * majorRadious * minorRadious;
  const areaTwoDecimal = area.toFixed(2);
  setElementInnerText('elipse-area', areaTwoDecimal);
  addToCalculationEnty('Elipse', areaTwoDecimal);
}

//add to calculation entry.
/**
 * 
 * 
 */
function addToCalculationEnty(shapeType, area){
  const areaCalculation = document.getElementById('area-calculation');
  const count = areaCalculation.childElementCount;

  const p = document.createElement('p');
  p.classList.add('my-4')
  p.innerHTML = `${count + 1} ${shapeType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-primary" >Convert</button>`
  areaCalculation.appendChild(p);
}