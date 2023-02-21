// create a callback function in javascript to find if a number is even or odd.
// Return "even" if number is even else odd.

function printResult(result) {
    function isEvenOdd(number) {
        if(number % 2 === 0){
            result("even");
        // console.log("even");
        }
        else {
           result("odd");
        // console.log("odd");
        }
    }
    console.log("result");
}
isEvenOdd(number, printResult);