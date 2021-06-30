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
