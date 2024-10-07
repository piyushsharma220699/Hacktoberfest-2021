// Two Sum Problem Solution in JavaScript
var twoSum = function(nums, target) {
    const numMap = new Map(); // Create a hashmap to store the numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Find the complement

        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // Return the indices if complement exists in the map
        }

        numMap.set(nums[i], i); // Add the current number and its index to the map
    }

    throw new Error("No two sum solution found!");
};

// Example Usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
