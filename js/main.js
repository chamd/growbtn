var a4 = 0;
var clicks = 0;
var btn = 0;
var mouse = 0;
var mouseNum = 0;

var a1F = 0;
var a2F = 0;
var a3F = 0;
var a4F = 0;
var a5F = 0;
var a6F = 0;
var a7F = 0;
var a8F = 0;
var a9F = 0;
var a10F = 0;

function comma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}


function clickbtn() {
    a4 += 10;
    if (btn === 0) {
        clicks += 10000000000000;
        plusClick(0);
    } else if (btn === 1) {
        clicks += 2;
        plusClick(1);
    } else if (btn === 2) {
        clicks += 5;
        plusClick(2);
    } else if (btn === 3) {
        clicks += 20;
        plusClick(3);
    } else if (btn === 4) {
        clicks += 100;
        plusClick(4);
    } else if (btn === 5) {
        clicks += 20000;
        plusClick(5);
    } else if (btn === 6) {
        clicks += 100000;
        plusClick(6);
    } else if (btn === 7) {
        clicks += 5000000;
        plusClick(7);
    }
    document.getElementById("click").textContent = '클릭 ' + comma(clicks);

    achieve(4);
}

function clickbtnMouse() {
    if (btn === 0) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(70, 37, 16)";
    } else if (btn === 1) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(62, 146, 59)";
    } else if (btn === 2) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(175, 185, 37";
    } else if (btn === 3) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(26, 134, 153)";
    } else if (btn === 4) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(94, 20, 20)";
    } else if (btn === 5) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(102, 31, 150)";
    } else if (btn === 6) {
        document.getElementById("clickbtn").style.backgroundImage = "linear-gradient(to left, rgb(44, 0, 75), rgb(0, 0, 110), rgb(0, 70, 0), rgb(124, 124, 0), rgb(117, 76, 0), rgb(136, 0, 0))";
    } else if (btn === 7) {
        document.getElementById("clickbtn").style.backgroundImage = "url(\"./img/btn7dark.png\")";
    }
}

function clickbtnMouseO() {
    if (btn === 0) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(150, 74, 23)";
    } else if (btn === 1) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(118, 255, 113)";
    } else if (btn === 2) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(243, 255, 71)";
    } else if (btn === 3) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(22, 220, 255)";
    } else if (btn === 4) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(255, 22, 22)";
    } else if (btn === 5) {
        document.getElementById("clickbtn").style.backgroundColor = "rgb(192, 98, 255)";
    } else if (btn === 6) {
        document.getElementById("clickbtn").style.backgroundImage = "linear-gradient(to left, indigo, blue, green, yellow, orange, red)";
    } else if (btn === 7) {
        document.getElementById("clickbtn").style.backgroundImage = "url(\"./img/btn7.png\")";
    }

}

function calert(msg) {
    document.getElementById("alert").style.backgroundColor = "rgb(251, 255, 0)";
    document.getElementById("alert").style.border = "5px solid rgb(160, 172, 0)";
    document.getElementById("alert").style.width = "80%";
    document.getElementById("alert").style.height = "50px";
    setTimeout(function () {
        document.getElementById("alert").style.backgroundColor = "rgb(159, 255, 146)";
        document.getElementById("alert").style.border = "5px solid rgb(20, 122, 28)";
        document.getElementById("alert").textContent = msg;
        document.getElementById("alert").style.width = "90%";
        document.getElementById("alert").style.height = "50px";
    }, 200);
}

function nope(msg) {
    document.getElementById("alert").style.backgroundColor = "rgb(255, 0, 0)";
    document.getElementById("alert").style.border = "5px solid rgb(129, 0, 0)";
    document.getElementById("alert").style.width = "80%";
    document.getElementById("alert").style.height = "50px";
    setTimeout(function () {
        document.getElementById("alert").style.backgroundColor = "rgb(159, 255, 146)";
        document.getElementById("alert").style.border = "5px solid rgb(20, 122, 28)";
        document.getElementById("alert").textContent = msg;
        document.getElementById("alert").style.width = "90%";
        document.getElementById("alert").style.height = "50px";
    }, 200);
}

function mouseChange(num) {
    document.getElementById("clickbtn").style.cursor = `url(\"./img/mouse/mouse${num}.png\"), auto`;
    document.getElementById("showM").style.cursor = `url(\"./img/mouse/mouse${num}.png\"), auto`;

    var menubars = document.getElementsByClassName("menubar");
    var shopss = document.getElementsByClassName("shops");
    var workss = document.getElementsByClassName("works");

    for (var i = 0; i < menubars.length; i++) {
        menubars.item(i).style.cursor = `url(\"./img/mouse/mouse${num}.png\"), auto`;
    }
    for (var i = 0; i < shopss.length; i++) {
        shopss.item(i).style.cursor = `url(\"./img/mouse/mouse${num}.png\"), auto`;
    }
    for (var i = 0; i < workss.length; i++) {
        workss.item(i).style.cursor = `url(\"./img/mouse/mouse${num}.png\"), auto`;
    }

    document.getElementById("findegg").style.cursor = `url(\"./img/mouse/mouse${num}.png\"), auto`;

}