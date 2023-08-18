function calculateTriangleArea(base, height) {
  const baseField = document.getElementById(base);
  const baseValueText = baseField.value;
  const baseValue = parseFloat(baseValueText);

  const heightField = document.getElementById(height);
  const heightValueText = heightField.value;
  const heightValue = parseFloat(heightValueText);
  console.log(baseValue, heightValue);

  const area = 0.5 * baseValue * heightValue;

  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;
}

function calculateRectangleArea() {
  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const widthValue = parseFloat(widthValueText);

  const lengthField = document.getElementById('rectangle-length');
  const lengthValueText = lengthField.value;
  const lengthValue = parseFloat(lengthValueText);
  console.log(widthValue, lengthValue);


  const area = widthValue * lengthValue;

  const areaSpan = document.getElementById("rectangle-area");
  areaSpan.innerText = area;

}
