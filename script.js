// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Get the output element
    const outputElement = document.getElementById("output");
  
    // Define a function to format a number with leading zeros
    function formatNumberWithLeadingZeros(number, length) {
      return number.toString().padStart(length, '0');
    }
  
    // Example usage
    const originalNumber = 7;
    const formattedNumber = formatNumberWithLeadingZeros(originalNumber, 3);
  
    // Display the result
    outputElement.textContent = `Formatted number: ${formattedNumber}`;
  });
  