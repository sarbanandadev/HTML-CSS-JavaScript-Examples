const Feet = document.getElementById("Feet");
const Meters = document.getElementById("Meters");
const Inches = document.getElementById("Inches");
const Centimeters = document.getElementById("Centimeters");
const Yeards = document.getElementById("Yeards");
const Kilometers = document.getElementById("Kilometers");
const Miles = document.getElementById("Miles");


function lengthConverter(source, valNum) {
  valNum = parseFloat(valNum);
  if (source == "Feet") {
    Meters.value = (valNum / 3.2808).toFixed(2);
    Inches.value = (valNum * 12).toFixed(2);
    Centimeters.value = (valNum / 0.032808).toFixed();
    Yeards.value = (valNum * 0.33333).toFixed(2);
    Kilometers.value = (valNum / 3280.8).toFixed(5);
    Miles.value = (valNum * 0.00018939).toFixed(5);
  }
  if (source == "Meters") {
    Feet.value = (valNum * 3.2808).toFixed(2);
    Inches.value = (valNum * 39.370).toFixed(2);
    Centimeters.value = (valNum / 0.01).toFixed();
    Yeards.value = (valNum * 1.0936).toFixed(2);
    Kilometers.value = (valNum / 1000).toFixed(5);
    Miles.value = (valNum * 0.00062137).toFixed(5);
  }
  if (source == "Inches") {
    Feet.value = (valNum * 0.083333).toFixed(3);
    Meters.value = (valNum / 39.370).toFixed(3);
    Centimeters.value = (valNum / 0.39370).toFixed(2);
    Yeards.value = (valNum * 0.027778).toFixed(3);
    Kilometers.value = (valNum / 39370).toFixed(6);
    Miles.value = (valNum * 0.000015783).toFixed(6);
  }
  if (source == "Centimeters") {
    Feet.value = (valNum * 0.032808).toFixed(3);
    Meters.value = (valNum / 100).toFixed(3);
    Inches.value = (valNum * 0.39370).toFixed(2);
    Yeards.value = (valNum * 0.010936).toFixed(3);
    Kilometers.value = (valNum / 100000).toFixed(6);
    Miles.value = (valNum * 0.0000062137).toFixed(6);
  }
  if (source == "Yeards") {
    Feet.value = (valNum * 3).toFixed();
    Meters.value = (valNum / 1.0936).toFixed(2);
    Inches.value = (valNum * 36).toFixed();
    Centimeters.value = (valNum / 0.010936).toFixed();
    Kilometers.value = (valNum / 1093.6).toFixed(5);
    Miles.value = (valNum * 0.00056818).toFixed(5);
  }
  if (source == "Kilometers") {
    Feet.value = (valNum * 3280.8).toFixed();
    Meters.value = (valNum * 1000).toFixed();
    Inches.value = (valNum * 39370).toFixed();
    Centimeters.value = (valNum * 100000).toFixed();
    Yeards.value = (valNum * 1093.6).toFixed();
    Miles.value = (valNum * 0.62137).toFixed(2);
  }
  if (source == "Miles") {
    Feet.value = (valNum * 5280).toFixed();
    Meters.value = (valNum / 0.00062137).toFixed();
    Inches.value = (valNum * 63360).toFixed();
    Centimeters.value = (valNum / 0.0000062137).toFixed();
    Yeards.value = (valNum * 1760).toFixed();
    Kilometers.value = (valNum / 0.62137).toFixed(2);
  }
}