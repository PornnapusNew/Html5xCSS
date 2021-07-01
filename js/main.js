//alert("Hello Newwy!")

var x = 10;
let y;
const z = 15;
x = 10;
y = x;
console.log(x, " ", y, " ", z);
x = 20;

console.log(x);
console.log(z);

var name = "John";
var lastName = "Dou";
var a = "20";
var b = "10";
console.log(name + lastName);
console.log(name + x);
console.log(a + b);
console.log(parseInt(a) + parseInt(b));
console.log(parseInt(a) * parseInt(b));
console.log(parseInt(a) / parseInt(b));
console.log(parseInt(a) - parseInt(b));
x++;
x = x + 1;
x--;
x = x - 1;
console.log(x);
console.log(x % 3);
x += x;
x = x + x;
console.log(x);

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Data Type///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
var xx = 123;
var yy = "Hello";
var zz = xx == yy; //true or false
var ar = ["red", "green", "blue"];
console.log(typeof xx);
console.log(typeof yy);
console.log(typeof zz);
console.log(typeof ar);
console.log(ar[1]);
console.log(ar.length);
ar.push("black");
console.log(ar);
var obj = {
  name: "New",
  lastname: "Mummum"
};
console.log(obj, obj.lastName);
console.log(obj["name"]);
obj.age = 20;
console.log(obj);

var un = undefined;
var nu = null;
console.log(typeof un);
console.log(typeof nu);
console.log(un == nu);
/////////////////////////////////////////////////////////
////////////////////Function/////////////////////////////
/////////////////////////////////////////////////////////
function plus(x, y) {
  return x + y;
}
var r = plus(10, 20);
console.log("Result is", r);

function log(data) {
  console.log(data);
  return;
}
function plus2(x, y) {
  return plus(x, y);
}
function area(w, h, t) {
  if ((t = "square")) return w * h;
  else return Math.PI * x * x;
}
log(plus2(3, 4));
log(area(10, 10, "square"));
log(area(10));

////////////////////////////////////////////////////////////
///////////////////////////Array////////////////////////////
////////////////////////////////////////////////////////////
var myArr = ["string", 123, { text: "test" }, ["test"], true];
var myArr2 = new Array("string", 123, { text: "test" });
console.log(myArr2);

console.log(myArr[0]);
for (let i = 0; i < myArr.length; i++) {
  console.log("Index: " + i, myArr[i]);
}
myArr[5] = "test test";
console.log(myArr);

myArr.push("test index 5");
//log(myArr);

myArr.pop();

myArr.unshift("text add 0 index"); //add new one at index0 and index shifted by 1 like index 0 to 1

myArr.shift(); //reduce index by 1 like index 3 to 2
//log(myArr);

myArr.map((myVal, index) => {
  console.log("This is index " + index, " = ", myVal);
});

myArr3 = [
  { name: "Test1" },
  { name: "Test2" },
  { name: "Test3" },
  { name: "Test4" },
  { name: "Test5" }
];

var myNewArr3 = myArr3.map(function (val, ind) {
  return val.name;
});
console.log(myNewArr3);

myArr3.forEach((val, ind) => {
  console.log(ind, " =", val);
});

///////////////////////////////////////////
///////////////Object/////////////////////
///////////////////////////////////////////
var myObj = {};
var myobj2 = new Object();
console.log("Type of my obj", typeof myObj);

myObj.name = "GOOGLE";
myObj.lastname = "Google.com";
myObj.lastname = "30";
myObj.name = "John";
console.log("myObj.name: ", myObj.name);
console.log("myObj[name]:", myObj["name"]);

myObj.nameLength = function () {
  return this.name.length;
};
myObj.name = "Jenny";
myObj["name"] = "Jackkkk";
myObj["age"] = 23;

console.log(myObj.nameLength());

//console.log("Before: ", myObj);
delete myObj.lastname;
delete myObj["age"];
console.log("After: ", myObj);

///////////////////////////////////////////
///////////////If Else For/////////////////////
///////////////////////////////////////////

var test1 = [
  { x: 13, y: 14 },
  { x: 23, y: 9 },
  { x: 87, y: 62 },
  { x: 57, y: 27 }
];
test1.forEach((val) => {
  if (val.x > 50) console.log("X equal to ", val.x);
  else if (val.x == 57) console.log("X equal to ", val.x);
  else console.log("Y equal to ", val.y);
});

if (test1[0].y > 0) console.log("test1[0].y", test1[0].y);

///////////////////////////////////////////
///////////////Switch/////////////////////
///////////////////////////////////////////
var mySwitch = "two";
switch (mySwitch) {
  case "one":
    console.log("mySwitch equal to 1");
    break;
  case "two":
    console.log("mySwitch equal to 2");
    break;
  case "three":
    console.log("mySwitch equal to 3");
    break;
}

///////////////////////////////////////////
///////////////Loop/////////////////////
///////////////////////////////////////////
for (let x = 1; x <= 20; x++) {
  console.log("X = ", x);
}
/*let aaa = 0;
while (aaa <= 50) {
  console.log("A is equal to ", aaa);
  a += 5;
}*/

////////////////////Dom: Document Object Model/////////////////////////////
var myDiv = document.getElementById("myDiv");
myDiv.style.width = "200px";
myDiv.style.height = "200px";
myDiv.style.backgroundColor = "red";
myDiv.innerHTML = "<h1>Hello World!</h1>";

var elements = document.getElementsByClassName("myClassName");
//elements.innerHTML = "my class name";

for (let e = 0; e < elements.length; e++) {
  elements[e].innerHTML = "my class name " + e;
}

var myBody = document.getElementsByTagName("body");
var myh1 = document.createElement("h1");
var textNode = document.createTextNode("THIS IS A BODY");
myh1.appendChild(textNode);
myBody[0].appendChild(myh1);
