// Select the box and the button
const box = document.getElementById("box");
const startButton = document.getElementById("startButton");

// Initialize position
let position = 0;

// Define the function to animate the box
function animateBox() {
  // Clear the interval if the box has reached the end of the screen
  if (position >= window.innerWidth - box.offsetWidth) {
    clearInterval(animationInterval);
  } else {
    position += 5; // Increase the position by 5px
    box.style.left = position + "px"; // Update the box's position
  }
}

// Variable to hold the interval ID
let animationInterval;

// Add an event listener to the button to start the animation
startButton.addEventListener("click", () => {
  // Start the animation with a setInterval
  animationInterval = setInterval(animateBox, 20);
});
