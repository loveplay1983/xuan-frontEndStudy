"use strict";

// define the input, output, clear, result, etc...
var input = document.getElementById("input"),
    number = document.querySelectorAll(".nums div"),
    operator = document.querySelectorAll(".ops div"),
    clear = document.getElementById("clear"),
    result = document.getElementById("result"),
    resultDisplayed = false; // flag to keep an eye on what is displayed


// adding click handlers to number buttons
// adding numbers and operator
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {
        var currentString = input.innerHTML;
        // num of the input chars - 1 => the index of last char since 
        // the list starts from 0 in computer programming
        var lastChar = currentString[currentString.length - 1];

        // if result is not displayed, just keep adding
        // since the default value of resultDisplayed is false
        if (resultDisplayed === false) {
            // e.target -> the event target, i.e. the field(key) clicked
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true &&
            lastChar === "+" || lastChar === "-" ||
            lastChar === "x" || lastChar === "÷") {
            // if result is currently displayed and user passed an 
            // operator and we need to keep on adding to the string 
            // for next operation or input

            // this situation is often when you have clicked the `equal`
            // and you want to keep the result and continue to calculate
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            // if result is currently displayed and user passed a 
            // number we need to clear the input string and add the
            // new input to start the new operation

            // i.e. the flag is false
            // if the user input is not in the list of (+-*/)
            // then the next operation will be new input 
            // instead of doing the continue calculation
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    });
}

// adding click handlers to number buttons
// extract the number we entered, 
// i.e. if the last input is an operator, 
// store the previous input to a new variable
for (var i = 0; i < operator.length; i++) {
    // for continuous calculating
    // e.g. 1+2+3
    operator[i].addEventListener("click", function (e) {
        // storing current input string and its 
        // last char in variables for later use
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        // if last char entered is an operator, and now the 
        // result button is about to hit, we need to get rid 
        // of the last operator 
        // e.g. 1+2- and now we hit =, then the complete 
        // calculation aught to be 1+2 instead of 1+2-
        if (lastChar === "+" || lastChar === "-" ||
            lastChar === "x" || lastChar === "÷") {
            var newString = currentString.substring(0,
                currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
            console.log(newString);

        } else if (currentString.length === 0) {
            // if the first pressed key is an operator, do nothing!
            // console.log("Enter a number first");
            alert("Enter a number please!");
        
        } else {
            // else just add the operator pressed to the input
            input.innerHTML += e.target.innerHTML;
        }
    });
}


// on click of "result" button
result.addEventListener("click", function(){
// because the result button is just one click single button
// therefore no need for function(e), the event.target

    // input data, e.g. 1+2-9
    var inputStr = input.innerHTML;
    
    // forming an array of numbers, 
    // e.g. for above string it will be 
    // nums = ["1", "2", "9"]
    // regEx with g modifier for global search
    var nums = inputStr.split(/\+|\-|\×|\÷/g);

    // forming an array of operators. for above string it wil be 
    // ops = ["+", "-", "×", "÷"]
    // replace all the nums and dots with empty string then split
    var operators = inputStr.replace(/[0-9]|\./g, "").split("");

    // console.log(inputStr);
    // console.log(operators);
    // console.log(nums);
    // console.log("-------------------------------");


    // looping through the arry and doing one operation at a time
    // first divide, then multiply, then subtraction and then addition
    // then altering the originla nums and operators array
    // the final element remaining in the arry will be the output

    var divide = operators.indexOf("÷");
    while(divide != -1) {
        // splice removes, adds existing item to/from an array
        // https://www.w3schools.com/jsref/jsref_splice.asp

        // remove the data after the divide symbol and add the result of the division
        nums.splice(divide, 2, nums[divide]/nums[divide+1]);
        operators.splice(divide, 1);  // remove the divide symbol
        divide = operators.indexOf("÷");  // find the next divide symbol
    }

    var multiply = operators.indexOf("×");
    while(multiply != -1){
        nums.splice(multiply, 2, nums[multiply] * nums[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    var subtract = operators.indexOf("-");
    while(subtract != -1){
        nums.splice(subtract, 2, nums[subtract] - nums[subtract+1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while(add != -1) {
        // call parseFloat or it will result in string concatenation
        nums.splice(add, 2, parseFloat(nums[add]) + parseFloat(nums[add+1]));
        operators.splice(add, 1);
        add = operators.indexOf("+")
    }

    input.innerHTML = nums[0];  // display the output

    resultDisplayed = true;   // turning on the flag after result is disped
})

// clearing the input on press of clear
clear.addEventListener("click", function() {
    input.innerHTML = "";   // set the input text to empty string
})


/*   DEMO code for splice function 
<!DOCTYPE html>
<html>
<body>

<p>Click the button to add elements to the array.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var fruits = ["1", "2", "3", "6", "2"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.splice(3, 2, 3);
  document.getElementById("demo").innerHTML = fruits;
}
</script>

</body>
</html>

Click the button to add elements to the array.

Try it
1,2,3,3

*/