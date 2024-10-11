const flipImage = document.getElementById("flipImage");
let hasFlipped = false;  // A flag to check if the flip has already occurred

flipImage.addEventListener("mouseenter", () => {
  // Flip the image and hide it
  flipImage.classList.add("flipping");

  // Change the image source after a short delay (after the flip starts)
  setTimeout(() => {
    flipImage.src = "../images/img2.jpg"; // Change to the new image
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
      flipImage.src = "../images/img2.jpg"; // Change back to the original image
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
