// DOM - 1 Tasks

// Task 1: Text Change on Button Click
var task1P = document.querySelector("#task-1 p");
var task1Btn = document.querySelector("#task-1 #btn");
var isClicked = false;

task1Btn.addEventListener("click", function () {
  if (!isClicked) {
    task1P.innerHTML = "Welcome";
    isClicked = true;
  } else {
    task1P.innerHTML = "Hello!";
    isClicked = false;
  }
});

// Task 2: Change Box Color on Click
var task2Box = document.querySelector("#task-2 #box");
var task2Btn = document.querySelector("#task-2 #btn");
const bgColors = ["red", "green", "blue", "yellow"];
var idx = 0;

task2Btn.addEventListener("click", function () {
  task2Box.style.background = bgColors[idx];
  idx = (idx + 1) % bgColors.length;
});

// Task 3: Show and Hide a Box
var task3Box = document.querySelector("#task-3 #box");
var task3Btn = document.querySelector("#task-3 #btn");
var isToggle = false;

task3Btn.addEventListener("click", function () {
  if (!isToggle) {
    task3Box.style.display = "none";
    isToggle = true;
  } else {
    task3Box.style.display = "block";
    isToggle = false;
  }
});

// Task 4: Rotate a Box Using Buttons
var task4Box = document.querySelector("#task-4 #box");
var task4BoxVal = document.querySelector("#task-4 #box #val");
var task4BtnLeft = document.querySelector("#task-4 #btn-left");
var task4BtnRight = document.querySelector("#task-4 #btn-right");

var rotateValue = 0;

task4BtnLeft.addEventListener("click", function () {
  rotateValue -= 45;
  task4Box.style.rotate = rotateValue + "deg";
  task4BoxVal.innerHTML = rotateValue + "deg";
});

task4BtnRight.addEventListener("click", function () {
  rotateValue += 45;
  task4Box.style.rotate = rotateValue + "deg";
  task4BoxVal.innerHTML = rotateValue + "deg";
});

// Task 5: Number Increase and Decrease
var task5BtnInc = document.querySelector("#task-5 #btn-inc");
var task5BtnDec = document.querySelector("#task-5 #btn-dec");
var task5H4 = document.querySelector("#task-5 h4#val");
var count = 0;

task5BtnDec.addEventListener("click", function () {
  if (count > 0) {
    count--;
    task5H4.innerHTML = count;
  }
});

task5BtnInc.addEventListener("click", function () {
  count++;
  task5H4.innerHTML = count;
});

// Task 6: Light and Dark Background
var task6Btn = document.querySelector("#task-6 #btn");
var task6Body = document.body;
var task6Button = document.querySelectorAll("button");
var isChanged = false;

task6Btn.addEventListener("click", function () {
  if (!isChanged) {
    task6Body.style.background = "black";
    task6Body.style.color = "white";
    task6Button.forEach((elem) => {
      elem.style.filter = "invert(1)";
    });
    isChanged = true;
  } else {
    task6Body.style.background = "white";
    task6Body.style.color = "black";
    task6Button.forEach((elem) => {
      elem.style.filter = "invert(0)";
    });
    isChanged = false;
  }
});

// Task 7: Show Inuput Text on Screen
var task7Input = document.querySelector("#task-7 input");
var task7P = document.querySelector("#task-7 #content #val");

task7Input.addEventListener("input", function () {
  task7P.innerHTML = task7Input.value;
});

// Task 8: Change Color on Mouse Hover
var task8Box = document.querySelector("#task-8 #box");

task8Box.addEventListener("mouseenter", function () {
  task8Box.style.background = "yellow";
});

task8Box.addEventListener("mouseleave", function () {
  task8Box.style.background = "";
});

// Task 9: Button Works Only Once
var task9Btn = document.querySelector("#task-9 #btn");
var task9P = document.querySelector("#task-9 p");

task9Btn.addEventListener("click", function () {
  task9P.innerHTML = "Button Clicked";
  task9P.style.color = "green";
  task9Btn.disabled = true;
});

// task 10: Traffic Light
var task10RedBox = document.querySelector("#task-10 #boxes #box-red");
var task10YellowBox = document.querySelector("#task-10 #boxes #box-yellow");
var task10GreenBox = document.querySelector("#task-10 #boxes #box-green");

var task10RedBtn = document.querySelector("#task-10 #buttons #btn-red");
var task10YellowBtn = document.querySelector("#task-10 #buttons #btn-yellow");
var task10GreenBtn = document.querySelector("#task-10 #buttons #btn-green");

task10RedBtn.addEventListener("click", function () {
  task10RedBox.style.background = "red";
  task10YellowBox.style.background = "";
  task10GreenBox.style.background = "";
});

task10YellowBtn.addEventListener("click", function () {
  task10RedBox.style.background = "";
  task10YellowBox.style.background = "yellow";
  task10GreenBox.style.background = "";
});

task10GreenBtn.addEventListener("click", function () {
  task10RedBox.style.background = "";
  task10YellowBox.style.background = "";
  task10GreenBox.style.background = "lightgreen";
});
