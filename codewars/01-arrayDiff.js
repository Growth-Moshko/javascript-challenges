// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.
// arrayDiff([1, 2], [1]) == [2];

// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3];

// Solution:
const arrayDiff = (a, b) => a.filter((x) => b.indexOf(x) === -1);
console.log(arrayDiff([1, 2], [1]));

// Explanation:
// We loop through array 'a' with filter
// We then check array b at each element if there is not a matching element at that index using indexOf
// This gives us the difference between the two arrays
