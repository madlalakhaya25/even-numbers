// Function to calculate the sum of even numbers in an array
function sumOfEvenNumbers(arr) {

    // Initialize a variable to store the sum of even numbers
    let sum = 0;

    // Iterate through the elements of the input array
    for (let i = 0; i < arr.length; i++) {

        // Check if the current number is even (divisible by 2 with remainder 0)
        if (arr[i] % 2 === 0) {

            // If the number is even, add it to the sum
            sum += arr[i];
        }
    }

    // Return the final sum of even numbers
    return sum;
}

// Usage of the function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Call the function with the 'numbers' array and store the result
const result = sumOfEvenNumbers(numbers);

// Output the result to the console
console.log("Sum of even numbers in the array:", result);
