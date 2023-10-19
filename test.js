// let str = "hello world"

// let stri = str.slice(0,8)

// console.log(stri)
// console.log(str);


// array method 
// const fruits = ['apple', 'banana', 'orange'];

// fruits.push('mango');
// console.log(fruits); // Output: ['apple', 'banana', 'orange', 'mango']

// fruits.push('grape', 'pear');
// console.log(fruits); // Output: ['apple', 'banana', 'orange', 'mango', 'grape', 'pear']


// fruits.pop();
// console.log(fruits);


// fruits.unshift('grape')
// fruits.unshift('banana')
// console.log(fruits);


// function divide(a, b) {
//     if (b === 0) {
//       throw new Error('Division by zero is not allowed.');
//     }
//     return a / b;
//   }
  
//   try {
//     const result = divide(10, 0);
//     console.log(result);
//   } catch (error) {
//     console.log('An error occurred:', error);
//   }
  

// const fruits = ['apple', 'banana', 'cherry', 'date'];
// fruits.splice(2, 1); // Removes 'banana' and 'cherry'
// console.log(fruits); // Output: ['apple', 'date']


// let arr = [ 1, 5, 6, 9, 10, 4, 8 ]

// let mid = Math.floor(arr.length / 2)
// console.log(arr[mid])


// Db.

numberOfSteps = function(num) {
    let step = 0
    
    while(num != 0){
      if(num%2==0){
          step++
          num = num/2
          console.log("Step "+step+") is even; divide by 2 and obtained "+num)
      }  else{
          step++
          num = num-1
          console.log("Step "+step+") is odd; subtract 1 and obtained "+num)
      }
    }
    };


    numberOfSteps(123)