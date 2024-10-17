function findMaxElement(arr) {
    if (arr.length === 0) {
      return null; // Handle the case for an empty array
    }
    
    let maxElement = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
  
    return maxElement;
  }
  
  // Example usage:
  const arr = [5, 8, 12, 7, 3, 15, 10];
  console.log(findMaxElement(arr)); // Output: 15