var a5 = 0;
var gift = 0;
var cashNO = 0;

function shopClose() {
    document.getElementById("shopOpen").style.display = "inline";
    document.getElementById("shopClose").style.display = "none";
    document.getElementById("shop1").style.display = "none";
    document.getElementById("shop2").style.display = "none";
    document.getElementById("shop3").style.display = "none";
    document.getElementById("shop4").style.display = "none";
    document.getElementById("shop5").style.display = "none";
    document.getElementById("shop6").style.display = "none";
    document.getElementById("shop7").style.display = "none";
    document.getElementById("brshopclose").style.lineHeight = "0px";
    gift += 1;
    if (gift === 20) {
        gift == 21;
        clicks += 10000;
        alert("\"상점 강탈\" [히든]도전과제를 달성했습니다! (보상 : 10,000c)");
        document.getElementById("click").textContent = '클릭 ' + comma(clicks);
    }
    if (gift === 200) {
        gift == 201;
        clicks += 100000;
        alert("\"상점 파괴\" [히든]도전과제를 달성했습니다! (보상 : 100,000c)");
        document.getElementById("click").textContent = '클릭 ' + comma(clicks);
    }
    if (gift === 2000) {
        gift == 2001;
        clicks += 1000000;
        alert("\"상점 멸망\" [히든]도전과제를 달성했습니다! (보상 : 1,000,000c)");
        document.getElementById("click").textContent = '클릭 ' + comma(clicks);
    }
}

function shopOpen() {
    document.getElementById("shopOpen").style.display = "none";
    document.getElementById("shopClose").style.display = "inline";
    document.getElementById("shop1").style.display = "inline";
    document.getElementById("shop2").style.display = "inline";
    document.getElementById("shop3").style.display = "inline";
    document.getElementById("shop4").style.display = "inline";
    document.getElementById("shop5").style.display = "inline";
    document.getElementById("shop6").style.display = "inline";
    document.getElementById("shop7").style.display = "inline";
    document.getElementById("brshopclose").style.lineHeight = "21px";
    gift += 1;
    if (gift === 20) {
        gift == 21;
        clicks += 10000;
        alert("\"상점 강탈\" [히든]도전과제를 달성했습니다! (보상 : 10,000c)");
        document.getElementById("click").textContent = '클릭 ' + comma(clicks);
    }
    if (gift === 200) {
        gift == 201;
        clicks += 100000;
        alert("\"상점 파괴\" [히든]도전과제를 달성했습니다! (보상 : 100,000c)");
        document.getElementById("click").textContent = '클릭 ' + comma(clicks);
    }
    if (gift === 2000) {
        gift == 2001;
        clicks += 1000000;
        alert("\"상점 멸망\" [히든]도전과제를 달성했습니다! (보상 : 1,000,000c)");
        document.getElementById("click").textContent = '클릭 ' + comma(clicks);
    }
}

function workClose() {
    document.getElementById("workOpen").style.display = "inline";
    document.getElementById("workClose").style.display = "none";
    document.getElementById("work1").style.display = "none";
    document.getElementById("work2").style.display = "none";
    document.getElementById("work3").style.display = "none";
    document.getElementById("work4").style.display = "none";
    document.getElementById("work5").style.display = "none";
    document.getElementById("work6").style.display = "none";
    document.getElementById("work7").style.display = "none";
    document.getElementById("brworkclose").style.lineHeight = "0px";
}

function workOpen() {
    document.getElementById("workOpen").style.display = "none";
    document.getElementById("workClose").style.display = "inline";
    document.getElementById("work1").style.display = "inline";
    document.getElementById("work2").style.display = "inline";
    document.getElementById("work3").style.display = "inline";
    document.getElementById("work4").style.display = "inline";
    document.getElementById("work5").style.display = "inline";
    document.getElementById("work6").style.display = "inline";
    document.getElementById("work7").style.display = "inline";
    document.getElementById("brworkclose").style.lineHeight = "21px";
}

function nameClose() {
    document.getElementById("nameOpen").style.display = "inline";
    document.getElementById("nameClose").style.display = "none";
    document.getElementById("names").style.display = "none";
    document.getElementById("brnameclose").style.lineHeight = "0px";
}

function nameOpen() {
    document.getElementById("nameOpen").style.display = "none";
    document.getElementById("nameClose").style.display = "inline";
    document.getElementById("names").style.display = "block";
    document.getElementById("brnameclose").style.lineHeight = "21px";
}

function cash() {
    alert("나오는 클릭 확률\n28% | 10c\n19% | 100c\n19% | 1,000c\n19% | 10,000c\n10% | 100,000c\n3%   | 1,000,000c\n1%   | 10,000,000c\n1%   | 100,000,000c");
    if (confirm("도박을 하시겠습니까? [1,000,000c 필요]")) {
        if (clicks >= 1000000) {
            clicks -= 1000000;
            cashGo();
            document.getElementById("click").textContent = '클릭 ' + comma(clicks);
        } else {
            nope("클릭 부족");
        }
    } else { 
        cashNO += 1;
        if (cashNO == 100) {
            clicks += 1000000;
            alert("\"100번 참았다\" [히든]도전과제를 달성했습니다! (보상 : 1,000,000c)");
            document.getElementById("click").textContent = '클릭 ' + comma(clicks);
        }
    }
}

function cashGo() {
    a5 += 1;

    var cash = Math.floor(Math.random() * 100);

    if (0 <= cash && cash <= 27) {
        calert("+ 10c ( - 1,000,000c )");
        clicks += 10;
    } else if (28 <= cash && cash <= 46) {
        calert("+ 100c ( - 1,000,000c )");
        clicks += 100;
    } else if (47 <= cash && cash <= 65) {
        calert("+ 1,000c ( - 1,000,000c )");
        clicks += 1000;
    } else if (66 <= cash && cash <= 84) {
        calert("+ 10,000c ( - 1,000,000c )");
        clicks += 10000;
    } else if (85 <= cash && cash <= 94) {
        calert("+ 100,000c ( - 1,000,000c )");
        clicks += 100000;
    } else if (95 <= cash && cash <= 97) {
        calert("+ 1,000,000c ( - 1,000,000c )");
        clicks += 1000000;
    } else if (98 <= cash && cash <= 98) {
        calert("+ 10,000,000c ( - 1,000,000c )");
        clicks += 10000000;
    } else if (99 <= cash && cash <= 99) {
        calert("+ 100,000,000c ( - 1,000,000c )");
        clicks += 100000000;
        achieve(3);
    }
    achieve(5);
}

var egg = 0;

function findegg() {
    if (egg == 0) {
        alert("\"운동좀 해볼까?\" [히든]도전과제를 달성했습니다! (보상 : [헬창] x 2)");
        work3count += 260;
        workcount += 260;
        document.getElementById("click").textContent = '클릭 ' + comma(clicks);
        document.getElementById("worker3c").textContent = `${work3count / 130}명 ${work3count}c/s`;
        if (workfirst == 0) {
            workstart();
            workfirst += 1;
        }
        document.getElementById("egg").style.color = "red";
        egg += 1;
    } else { }
}