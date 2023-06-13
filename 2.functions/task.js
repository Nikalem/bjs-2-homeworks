"use strict";

function getArrayParams(...arr) {
  let avg, min, max, sum;
  sum = 0;
  let arrLength = arr.length;

  /*for(let i = 0; i < arrLength; i++) {
    if(arr[i] < min) { 
      min = arr[i];
    }
    if(arr[i] > max) { 
      max = arr[i];
    }
    sum += arr[i]; 
  }*/
  min = Math.min(...arr);
  max = Math.max(...arr);

  sum = arr.reduce((total, currentItem) => {
    total += currentItem;
    return total;
  }, 0) 

  avg = (sum / arrLength).toFixed(2); 

  return { min: min, max: max, avg: +avg };
}
  

function summElementsWorker(...arr) {
  if(arr.length == 0) return 0;
  let sum = arr.reduce((total, currentItem) => {
    total += currentItem;
    return total;
  },0) 

  let x =sum;
  return x;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length == 0) return 0;

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length == 0) return 0;
  
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let arrOf of arr){
    if((arrOf % 2) === 0){
      sumEvenElement += arrOf;
    }else{
      sumOddElement += arrOf;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length == 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let arrOf of arr) {
    if((arrOf % 2) === 0){
      sumEvenElement += arrOf;
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let resultFunc = 0;

  for(let index in arrOfArr){
    resultFunc = func(...arrOfArr[index]);
    
    if(resultFunc>maxWorkerResult){
      maxWorkerResult = resultFunc;
    }
  }
  return maxWorkerResult;
}
