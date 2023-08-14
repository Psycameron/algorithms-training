const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];

  const less = arr.slice(1).filter((el) => el <= pivot);
  const greater = arr.slice(1).filter((el) => el > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

const arr = [4, 3, 6, 1, 8, 2];

console.log(quickSort(arr));
