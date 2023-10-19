// let x = {a:1,b:2}
// let y = x
// y.a = 5
// console.log(x.a+y.a) 


// function outerFunction() {
//     let outerVariable = 'I am in the outer function';
  
//     function innerFunction() {
//       console.log(outerVariable);
//     }
  
//     return innerFunction;
//   }
  
//   const innerFunc = outerFunction();
//   innerFunc(); // Output: "I am in the outer function"
  

// let array = [1333,35,56565,657,57534]

//  let newArray = array.reverse()

// console.log(array);
// console.log(newArray);

// console.log(a);
// let a = 6

// function test(){
//     const a = 6
    
// }
// console.log(a)

// function test(){
//     console.log("TEST");
//     return test()
// }

// test()

let n = 19
    let sum = 0 
    while(sum!=1){
         let num=toString(n)
        let num1 = num[0]*num[0]
    let num2 = num[1]*num[1]
     let sum = num1 + num2
     if(sum!=1){
         break;

     }else{
         console.log("happy number")
     }
    }
    
    
