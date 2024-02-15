
// Function to find the next non-null item from the given index in the array
export const findNextNonNullItem = (array, startIndex) => {
    for (let i = startIndex + 1; i < array.length; i++) {
      if (array[i] !== null) {
        return array[i];
      }
    }
    return null;
  };
  
  // Function to find the previous non-null item from the given index in the array
  export const findPreviousNonNullItem = (array, startIndex) => {
    for (let i = startIndex - 1; i >= 0; i--) {
      if (array[i] !== null) {
        return array[i];
      }
    }
    return null;
  };
  