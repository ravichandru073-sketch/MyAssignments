
function checkNumberType(number) {
    
  

    if (number > 0) {
  
        return "The number is positive.";
    } 
    else if (number < 0) {

        return "The number is negative.";
    } 
    else {

        return "The number is neutral (zero).";
    }
}


// let testValue = 10;
// let result = checkNumberType(testValue);
// console.log(result); 


console.log(checkNumberType(515)); 
//console.log(checkNumberType(0));  