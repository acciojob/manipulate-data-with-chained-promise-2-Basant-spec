// Input array
const inputArray = [1, 2, 3, 4];

// Function to simulate delay using Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to manipulate the array
function processArray(arr) {
  const outputDiv = document.getElementById("output");

  // Step 1: Filter out odd numbers and display
  return delay(1000) // Wait 1 second
    .then(() => {
      const evenNumbers = arr.filter(num => num % 2 === 0);
      outputDiv.innerHTML = evenNumbers.join(","); // Ensure no extra spaces
      return evenNumbers; // Pass the filtered array to the next step
    })
    // Step 2: Multiply even numbers by 2 and display
    .then(evenNumbers => delay(2000).then(() => {
      const multipliedNumbers = evenNumbers.map(num => num * 2);
      outputDiv.innerHTML = multipliedNumbers.join(","); // Ensure no extra spaces
      return multipliedNumbers; // Resolve with final array
    }));
}

// Step 3: Start processing the array
processArray(inputArray)
  .then(finalResult => console.log("Final Result:", finalResult)) // Logs final result
  .catch(error => console.error("Error:", error));
