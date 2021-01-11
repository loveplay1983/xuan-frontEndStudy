/*
 In this javascript file, I have done some of the studies from cleaver programme tutorial, 
 the following lines of code are the most useful javascript usage.

 Javascript is a programming langauge which serves for web development purpose with a mixed coding style in which 
 it is someabout a dynamic programming inclined as well as strong-type-like sometimes.
*/


// console.log('hello world');
// alert('o ha yo');

// function changeText() {
//     document.getElementById("text1").innerHTML = "hello world";
// }

// function restoreText() {
//     document.getElementById("text1").innerHTML = "To use JavaScript Standard Style please install \
//     JavaScript Standard Style by running \'npm install standard\' in the workspace folder jsStudy \
//     or globally using \'npm install -g standard\'. You need to reopen the workspace after installing JavaScript Standard Style.";
// }


// get age
// function getAge() {
//     document.getElementById("showAge").innerHTML = prompt("Tell me your age?");
// }


// get info
// function showInfo() {
//     var name = prompt("What is your name?");
//     var result = "My name is " + name;
//     document.getElementById("showInfo").innerHTML = result;
// }


// function with args
// function greeting(name) {
//     var name = prompt('tell me your name');
//     alert("hello world, this is " + name + "!!!");
// }

// greeting();


// loop
// var num = 0;
// while (num < 100) {
//     num++;
// }
// console.log(num)


//  sum 1 to 100
// function totalNum(n) {
//     var total = 0;
//     for(var each = 1; each <= n; each++)
//     {   
//         total += each;
//     }
//     console.log(total);
// }

// totalNum(100);


// javascript string
// let myStr = "hello world, javascript is the most useful web development language and it is fun.";

// console.log(myStr.length);
// console.log(myStr.indexOf("javascript"));
// console.log(myStr.toLowerCase());
// console.log(myStr.toUpperCase());
// console.log(myStr.replace("javascript", "html5"));
// console.log(myStr.split(","));


// array
// let fruits = ['banana', 'orange', 'pear', 'apple', 'pineapple'];
// fruits = new Array('banana', 'apple', 'orange', 'pineapple');

// console.log(typeof(fruits));
// console.log(fruits[2]);

// fruits[0] = 'pear';
// console.log(fruits[0]);

// array loop
// for(let index = 0; index < fruits.length; index++)
// {
//     console.log(fruits[index]);
// }

// array common methods
// console.log('to string', fruits.toString());
// console.log(fruits.join('**'));
// console.log(fruits, fruits.pop(), fruits);                                // remove the last item
// console.log(fruits.push('new_fruit'));                                    // append
// fruits.shift(); console.log(fruits);                                       // remove the first element from array
// fruits.unshift('add new item again'); console.log(fruits);                // add first element to an array again

// let vegetables = ['tomato', 'potato', 'broccoli', 'asparagus'];
// let allGroceries = fruits.concat(vegetables);
// console.log(allGroceries);getables);
// console.log(allGroceries);


// sort array
// let someNum = [1,31,3,131,542,11,33,555,33,22];
// someNum.sort();
// console.log(someNum);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://stackoverflow.com/questions/24768492/why-does-points-sortfunctiona-breturn-a-b-return-1-0-or-1#:~:text=Note%20that%20a%2Db%20returns%20a,leads%20to%20an%20ascending%20order.&text=If%20Function(a%2C%20b),b%20%2C%20i.e.%20a%20comes%20first.&text=Function(a%2C%20b)%20must,b%20as%20its%20two%20arguments.
// console.log(someNum.sort(function(a, b) { return a-b}));                      // ascending order, negative number goes fist, i.e. ascending
// console.log(someNum.sort(function(a, b) { return b-a}));                      // descending order, negative number goes after, i.e. descending

// create an empty Aarry and push data into it
// let emptyArr = new Array();
// for(let num = 0; num <= 10; num++)
// {
    // emptyArr.push(num);
// }

// console.log(emptyArr);


// object in javascript with dictionary style like
// let student = {
    // first : "Michael", 
    // second : "Xuan",
    // studentInfo: function() {
        // return this.first  + " " + this.second;
    // }
// }; 

// let studenT = {
//     "first" : "Michael", 
//     "second" :  "Xuan"
// };
// console.log(studenT["second"]);

// console.log("original first name -> " + student.first);
// student.first = "Chen";                                                    // change object value
// console.log("current name after modification -> " + student.studentInfo());

// JSON