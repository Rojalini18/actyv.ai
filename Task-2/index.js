//1. Find the target sum from an array---->

var arr = [2, 3, 4, 5, 6, 7];
var target = 9;

for (var i = 0; i <= arr.length; i++) {
  for (var j = 0; j <= arr.length; j++) {
    if (arr[i] + arr[j] == target) {
      console.log([arr[i], arr[j]]);
    }
  }
}

//2. Reverse a number---->

var num = 1234;
var reverse = 0;
var rem;
while (num > 0) {
  rem = num % 10;
  reverse = reverse * 10 + rem;
  num = Math.floor(num / 10);
}
console.log(reverse);

//or---->

var num = 1234;
var str = num.toString();
var bag = "";

for (var i = str.length - 1; i >= 0; i--) {
  bag = bag + str[i];
}
console.log(bag);

//3.Reverse a string by word---->

var line = "My name is Rojalini";
line = line.split(" ");
var reverse = "";
for (var i = line.length - 1; i >= 0; i--) {
  reverse += line[i] + " ";
}
console.log(reverse);

//4.Remove duplicates from an array---->

var arr = [4, 7, 9, 8, 0, 2, 1, 2, 8, 2];
arr.sort();
var bag = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] != arr[i + 1]) {
    bag.push(arr[i]);
  }
}
console.log(bag);
