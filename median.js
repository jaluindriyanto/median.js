// Rumus Median
function median(arr) {
  const arrSorted = arr.sort((a, b) => a - b);
  return arrSorted.length % 2 === 0 ? (arrSorted[arrSorted.length/2 - 1] + arrSorted[arrSorted.length/2]) / 2 : arrSorted[Math.floor(arrSorted.length/2)];
}

// input
const input = [8, 7, 7, 9, 5, 4, 2, 9];

console.log(`Median: ${median(input)}`);