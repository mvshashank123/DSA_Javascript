// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2){
    let digits1 = [];
    let digits2 = [];
    
    while(num1 >0){
        let rem = parseInt(num1 %10);
      digits1.push(rem);
        num1 = parseInt(num1/10);
    }
    
    while(num2 >0){
        let rem = parseInt(num2 %10);
      digits2.push(rem);
        num2 = parseInt(num2/10);
    }
   
      
      const checkIfArraysAreSame = () => {
          if(digits2.length !== digits1.length) {
              return false;
          }else{
              for(let digit of digits1){
                  if(!digits2.includes(digit)){
                      return false;
                  }
              }
              return true;
          }
      }
      return checkIfArraysAreSame();
  }
  
  function sameFrequency1(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }