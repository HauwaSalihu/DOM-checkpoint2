// Wait for the DOMContentLoaded event to fire
document.addEventListener("DOMContentLoaded", function () {
  // This code will run once the DOM is fully loaded
  const demoElement = document.getElementsByClassName("container");

  const colorBox = document.getElementById("color-box");
  const changeColor = document.getElementById("change-color-btn");

  changeColor.addEventListener("click", function getRandomColor() {
    const min = 100000; // Smallest 6-digit number
    const max = 999999; // Largest 6-digit number

    // Generate a random integer between min and max (inclusive)

    const colorPicker = Math.floor(Math.random() * (max - min + 1)) + min;
    colorBox.style.backgroundColor = "#" + colorPicker;
  });
});
