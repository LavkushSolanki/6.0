// Array of background images (3 images)
const backgroundImages = [
  '../assets/images/background.png', // Add your image paths
  '../assets/images/background2.png',
  '../assets/images/background3.png', 
  '../assets/images/background4.png', 
  '../assets/images/background5.png', 
];

let currentBackgroundIndex = 0; // Initialize the index

// Function to change the background image every 10 seconds
function changeBackgroundImage() {
  const backImage = document.getElementById('back');

  // Fade out the image
  backImage.style.opacity = '0'; // Set opacity to 0

  // Wait for the fade-out transition to complete before changing the image
  setTimeout(() => {
      currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length; // Loop through images
      backImage.src = backgroundImages[currentBackgroundIndex]; // Change the image source

      // Fade in the new image
      backImage.style.opacity = '0.5'; // Set opacity back to 1
  }, 1500); // Match the timeout duration to the CSS transition duration (1 second)
}

// Start changing the background image
setInterval(changeBackgroundImage, 5000);
// Flip image functionality
const flipImage = document.getElementById("flipImage");
let hasFlipped = false; // A flag to check if the flip has already occurred

flipImage.addEventListener("mouseenter", () => {
  // Flip the image and hide it
  flipImage.classList.add("flipping");

  // Change the image source after a short delay (after the flip starts)
  setTimeout(() => {
      flipImage.src = "../assets/images/img2.jpg"; // Change to the new image
      flipImage.style.opacity = "1"; // Reset opacity once the flip is done
      hasFlipped = true; // Set the flag to true so the flip doesn't repeat during this hover
  }, 250); // Delay in milliseconds (adjust if needed)
});

flipImage.addEventListener("mouseleave", () => {
  // If the image has flipped, revert it
  if (hasFlipped) {
      // Revert the flip and change the image back
      flipImage.classList.remove("flipping");

      setTimeout(() => {
          flipImage.src = "../assets/images/img2.jpg"; // Change back to the original image
          flipImage.style.opacity = "1"; // Reset opacity
          hasFlipped = false; // Reset the flag for the next hover
      }, 250); // Delay in milliseconds (adjust if needed)
  }
});

// Add event listener for the register button
const registerButton = document.getElementById("registerButton");
const redirectUrl = "https://www.google.com"; // Replace with your desired URL

registerButton.addEventListener("click", () => {
  window.location.href = redirectUrl; // Redirect to the specified URL
});

// Start changing the background image immediately
changeBackgroundImage();
