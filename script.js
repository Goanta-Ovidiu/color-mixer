function updateColor() {
  let red = document.querySelector(".red").value;
  let green = document.querySelector(".green").value;
  let blue = document.querySelector(".blue").value;
  // let color = "rgb(" + red + "," + green + "," + blue + ")";
  let redStr = parseInt(red);
  redStr = redStr.toString(16);
  let greenStr = parseInt(green);
  greenStr = greenStr.toString(16);
  let blueStr = parseInt(blue);
  blueStr = blueStr.toString(16);
  if (redStr.length == 1) {
    redStr = redStr + "0";
  }
  if (greenStr.length == 1) {
    greenStr = greenStr + "0";
  }
  if (blueStr.length == 1) {
    blueStr = blueStr + "0";
  }
  let color = "#" + redStr + greenStr + blueStr;

  let head = document.querySelector("#header");
  head.style.backgroundColor = color + "75";
  let main = document.querySelector("#main");
  main.style.backgroundColor = color;
  document.querySelector(".rgb-generator").innerHTML = color;
}

updateColor();

document.querySelector(".red").addEventListener("input", updateColor);
document.querySelector(".green").addEventListener("input", updateColor);
document.querySelector(".blue").addEventListener("input", updateColor);
