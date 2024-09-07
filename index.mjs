//const factorial = (n) => {
  //  if (n === 0) return 1; // The base case, to stop recursion
   // return n * factorial(n - 1); // The recursive call
  

  //const facto = (n, a = 1) => {
   // if (n === 0) return a;
    //return () => facto(n - 1, n * a);
  
//
  //const trampoline = (f, ...args) => {
   // let result = f(...args);
   // while (typeof result === "function") {
   //   result = result();
   // }
   // return result;

//console.log(trampoline(facto(10000)))

    //SETtIMEOUT(CALLBACK,DELAY);
    //CLEARTIMEOUT(timeoutId) = can cancel a timeout before it trigger.




   // function startTimer(){
    //    setTimeout(() => window.alert("Hello"), 3000);
   // }}
  
   // function clearTimer{
      //  clearTimeout(timeoutId);
    //
   // }

    //Prime Number use the modulus Reminds me of FizzbUZZ

    //function isPrime(n) {

      //  if (n<2)
           // return '${n} is not a prime'

        //for (let i=2; i<n;i++){
           // if(n%i===0){
           //     return '${n} is not a prime number'  '
        //    }
      //  }
      //  return '${n} is a prime number'
   // }
//console.log(isPrime(29)); //29 is a prime number

function startTimer(){
    setTimeout(()=> window.alert("Hello"),3000);
}