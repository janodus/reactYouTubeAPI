// // function reverseText(text) {
// //   text = text.split("");
// //   var newText = []
// //
// //   text.forEach(function(x) {
// //     newText.unshift(x)
// //   });
// //
// //   console.log(newText.join(""))
// // }
// //
// // reverseText("hello all");
// //
// //
// // var a = [
// //   {name: "Jan",
// //   age: 30,
// //   isHappy: true
// //   },
// //
// //   {name: "Sally",
// //   age: 35,
// //   isHappy: false
// // },
// // ]
// //
// // // console.log(a.key) // doesn't work
// //
// // var b = JSON.stringify(a)
// // console.log(b + " from b")
// //
// // var c = JSON.parse(b);
// //
// //
// // // for (var key in c) {
// // //   console.log(key + ": " + c[key] + "( .key doesn't work)")
// // // }
// //
// // c.forEach((x) => {
// //   console.log("=====forEach");
// //   console.log(x);
// // });
// //
// // c.push({
// //   name: "Terry Pushed",
// //   age: 45,
// //   isHappy: true
// // });
// //
// // console.log(c)
// // console.log("\n")
// //
// // c[0].canAdd = true;
// //
// // console.log(c)
// //
// // //============= CREATING CLASSES
// //
// // function Person(name, age) {
// //   this.name = name;
// //   this.age = age;
// // }
// //
// // Person.prototype.sayHi =  function() {
// //   console.log(this.name + " says 'Hello!'");
// // }
// //
// // var jan = new Person("Jan", 30);
// // jan.sayHi()
// //
// //
//
//
// // var string = "Hello this is a test string";
// //
// // console.log("String are immutable- they can't be changed.!!!")
// //
// // string = string.split("")
// // string[0] = "Y";
// //
// // console.log(string.join(""));
// //
// // string[0] = "H";
// //
// // console.log(string);
// //
// // string = string.join("");
// //
// // console.log(string)
//
// /////// TESTING POP AND PUSH
//
// // var myArray = [1, 2, 3, 4, 5];
// //
// // var a = myArray.pop();
// //
// // console.log(a)
// //
// // var b = myArray.pop();
// //
// // console.log(b);
// //
// // console.log(myArray);
// //
// // myArray.push(b);
// //
// // console.log(myArray);
// //
// // myArray.push(a);
// //
// // console.log(myArray);
// //
//
// //PLAYING WITH RETURN
//
// // var aVariable = 1;
// // var b = 2;
// // var c = 3;
// //
// // function setValue(x) {
// //   x = 10;
// // }
// //
// // setValue(aVariable);
//
// // this doesn't work becasue variables are passed by value, not by reference.
//
//
// // var obj = {
// //   a: 1,
// //   b: 2,
// //   c: 3,
// // }
// //
// // function addOne(object) {
// //   for(var x in object) {
// //     object[x] += 1;
// //   }
// // }
// //
// // console.log(obj)
// // addOne(obj);
// // console.log(obj);
//
// // var goodurl = "http://www.linkedin.com/";
// // var badurl = "http://www.pornhub.com";
// //
// // function urlSuggest(goodOrBad) {
// //   if (goodOrBad === "good") {
// //     console.log(goodurl);
// //   }
// //   else {
// //     console.log(badurl);
// //   }
// // }
// //
// // urlSuggest("good");
// // urlSuggest("bad");
//
// // function reverseText(text) {
// //   text = text.split("");
// //   var newText = [];
// //   text.forEach(function(letter) {
// //     newText.unshift(letter);
// //   });
// //   console.log(newText);
// //   return newText.join("");
// //
// // }
// //
// // reverseText("hello")
// //
// // console.log(reverseText("hello") === "olleh")
//
//
// function Car(make, model, year) {
//   this.make = make;
//   this.model - model;
//   this.year = year;
//   this.started = false
// }
//
// Car.prototype.start = function() {
//   if (this.started === false) {
//   this.started = true;
//   console.log("The car has started!");
//   }
//   else {
//     console.log("The car is already on!");
//   }
// }
//
// Car.prototype.turnOff = function() {
//   if (this.started === true) {
//     this.started = false
//     console.log("You turn the car off!");
//   }
//   else {
//     console.log("The car is already off!");
//   }
// }
//
// var jansCar = new Car("Nissan", "Sentra", 2015);
// console.log(jansCar)
//
// jansCar.start();
// jansCar.start();
// jansCar.turnOff();
// jansCar.turnOff();
