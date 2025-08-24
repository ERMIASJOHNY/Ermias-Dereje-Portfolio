/*
   let name = prompt('What is your name?', );

 alert(`Your name is ${name}`); 
*/
//let a = prompt("first number",1);
//let b =prompt("second number",2);
//alert (a+b);
//let year = prompt('In which year was ECMAScript-2015 specification published?', '');

//if (year == 2015) alert( 'You are right!' );
function checkAge(age) {
 if (age > 18) {
   return true;
 } else {
   // ...
   return confirm('Did parents allow you?');
 }
}


