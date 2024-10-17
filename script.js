function convert() {
    let inputTemperature = parseFloat(document.getElementById("input").value);
    let selectedOption = document.getElementById("options").value;
    let output = "";
  
    if (selectedOption === "celsius") {
      let fahrenheit = (inputTemperature * 9) / 5 + 32;
      output = `${inputTemperature}°C is ${fahrenheit.toFixed(2)}°F`;
    } else if (selectedOption === "fahrenheit") {
      let celsius = ((inputTemperature - 32) * 5) / 9;
      output = `${inputTemperature}°F is ${celsius.toFixed(2)}°C`;
    }
      document.getElementById("output").textContent = output;
  }
  