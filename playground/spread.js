function add(a, b) {
  return a + b;
}
// console.log(add(3, 1));

//arguments in the array
var toAdd = [9, 5];
console.log('apply ',add.apply(this, toAdd));
console.log('spread ', add(...toAdd));

var groupA = ['Tom', 'Jerry'];
var groupB = ['Anita'];
var final = [...groupB, 3, ...groupA];
console.log('final', final);

console.log('--------------');
var person = ['Alan', 24];
var personTwo = ['Jen', 29];

//Hi alan , you are 25
function greet(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);
var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach((name) => {
  console.log(name);
})
