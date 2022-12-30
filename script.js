// 1
// var name = prompt ("Enter your name:");
// alert(name + " is user name.");
// console.log(name);

// 2
// var result = confirm("Do you really want to leave us?");
// if (result == true) {
//     alert ("Thanks for visiting.");
// } else {
//     alert ("Thanks for staying with us!");
// }

// 3
// function test (number) {
//     while (number < 5) {
//         number++;
//     }
//     return number;
// }
// console.log(test (2));

// 4
// function multNmbrs (a, b) {
//     var c = a * b;
// }
// console.log(multNmbrs(2, 6));

// 5
// let el = document.getElementById("test");
// el.addEventListener("click", function() {
//     console.log("ეს არის div ელემენტი.", el);
// })

// 6
// let el = document.getElementById("test");
// el.addEventListener("mouseover", function() {
//     console.log("ეს არის div ელემენტი.", el);
// })

// 7
// let el = document.getElementById("test");
// el.addEventListener("mouseenter", function() {
//     console.log("ეს არის div ელემენტი.", el);
// })

// 8
// let el = document.getElementById("test");
// el.addEventListener("mouseout", function() {
//     console.log("ეს არის div ელემენტი.", el);
// })

// 9 - მაქსიმუმის შერჩევა;
// function max(a, b) {
//     if (a >= b) return a;
//     else return b;
// }
// console.log(max(9, 4));

// 10
// function test (a, b) {
//     if (a > b) {
//         return a * b;
//     } else {
//         return b / a;
//     }
// }
// alert(test(5, 15));

// 11
// let range = document.getElementById("rng");
// let inpBox = document.getElementById("rngVal");

// range.addEventListener("input", function() {

// }) daasrule

var car = document.getElementById("test");

document.addEventListener("keypress", function(event) {
    if (event.key == "w") {
        car.style.top = (car.offsetTop-5) +"px";
        car.style.transform = "rotateZ(270deg)";
    }
    else if (event.key == "s") {
        car.style.top = (car.offsetTop+5) +"px";
        car.style.transform = "rotateZ(90deg)";
    }
    else if (event.key == "a") {
        car.style.left = (car.offsetLeft-5) +"px";
        car.style.transform = "rotateZ(180deg)";
    }
    else if (event.key == "d") {
        car.style.left = (car.offsetLeft+5) +"px";
        car.style.transform = "rotateZ(0deg)";
    }
    
});