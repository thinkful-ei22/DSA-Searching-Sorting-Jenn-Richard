// QuickSort
// Write a function qSort that sorts a dataset using the quicksort algorithm. The dataset to to sort is 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5

const main = () => {

  let data = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

  let numArray = data.split(' ').map(char => parseInt(char,10));
  let qArray = numArray.slice();
  let mArray = numArray.slice();
  let bArray = numArray.slice();

  let test = [3,2,32,123,213];
  let qSortCounter = 0;
  let mSortCounter = 0;
  

  function qSort(array, start=0, end=array.length, count=0) {
    qSortCounter++;
    if (start >= end) {
      return array;
    }
    
    const middle = partition(array, start, end);
    array = qSort(array, start, middle, count++);
    array = qSort(array, middle + 1, end, count++);
    // console.log(count);
    return array;
  }

  function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    
    for (let i=start; i<end - 1; i++) {
      if (array[i] <= pivot) {
        swap(array, i, j);
        j++;
      }
    }
    swap(array, end-1, j);
    return j;
  }

  function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  
  let sorted = qSort(qArray);
  console.log('quick sort ', qSortCounter);


  //   MergeSort
  // Write a function mSort that sorts the dataset above using the mergesort algorithm.

  // Add functionality to both the qSort and mSort programs so that the programs shows how many operations it took to sort the same dataset

  function mSort(array) {
    mSortCounter++;
    if (array.length <= 1) {
      return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);
    return merge(left, right, array);
  }

  function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        array[outputIndex++] = left[leftIndex++];
      }
      else {
        array[outputIndex++] = right[rightIndex++];
      }
    }

    for (let i=leftIndex; i<left.length; i++) {
      array[outputIndex++] = left[i];
    }

    for (let i=rightIndex; i<right.length; i++) {
      array[outputIndex++] = right[i];
    }
    return array;
  }

  mSort(mArray);
  console.log('merge sort ', mSortCounter);

  // Bucket sort
  // Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.

  let low = 1;
  let high = 98;
  function bucketSort(arr, n) {
    if (arr.length ===0) {
      return arr;
    }
    let minValue = low;
    let maxValue = high;
    let bucketSize = n || 5;

    let bucketCount = Math.floor((maxValue-minValue)/bucketSize) + 1;
    let allBuckets = new Array(bucketCount);

    for (let i =0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
    }

    arr.forEach(currentValue => {
      allBuckets[Math.floor((currentValue-minValue)/bucketSize)].push(currentValue);
    });

    

    allBuckets.forEach(bucket => mSort(bucket));
    let result = [];
    for (let i = 0; i < allBuckets.length; i++ ) {
      result = [...result, ...allBuckets[i]];
    }

    return result;

  }

  // bucketSort(numArray);
  
  //98+1/n 10 
  // Import some type of insertion sort to use in bucket sort function Create bucketSort function (array, bucket size) Create vars for i, min, max, and bucket size Find min and max value Create amount of buckets Push values to correct buckets Sort buckets

  //testing bubble sort run time
  let bSortCounter = 0;
  function bubbleSort(array) {
    
    let swaps = 0;
    for (let i=0; i<array.length - 1; i++) {
      bSortCounter++;
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swaps++;
      }
    }

    if (swaps > 0) {
      return bubbleSort(array);
    }
    return array;
  }

  bubbleSort(bArray);
  console.log('bubble sort', bSortCounter);


  //   Sort in place
// Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array). O(n);

  function random(arr) {
    
    for (let i = 0; i < arr.length; i++) {
      let random = Math.floor(Math.random()*arr.length);

      swap(arr, i, random);
    }

    return arr;
  }

  console.log(random(sorted));
};

main();









