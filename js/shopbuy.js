function shop1() {
    if (btn === 0) {
        if (clicks >= 100) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco2.png\")";
            document.getElementById("btnName").textContent = "그냥 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(118, 255, 113)";
            clicks -= 100;
            document.getElementById("click").textContent = '클릭 ' + comma(clicks);
            btn += 1;
            calert("[그냥 버튼]을 구입했습니다 ( - 100c )");
        } else {
            nope("클릭 부족");
        }
    } else {
        if (btn < 0) {
            nope("[] 이 필요합니다!");
        } else {
            nope("이미 구매한 항목입니다!");
        }
    }
}

function shop2() {
    if (btn === 1) {
        if (clicks >= 400) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco3.png\")";
            document.getElementById("btnName").textContent = "황금 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(243, 255, 71)";
            clicks -= 400;
            document.getElementById("click").textContent = '클릭 ' + comma(clicks);
            btn += 1;
            calert("[황금 버튼]을 구입했습니다 ( - 400c )");
        } else {
            nope("클릭 부족");
        }
    } else {
        if (btn < 1) {
            nope("[그냥 버튼] 이 필요합니다!");
        } else {
            nope("이미 구매한 항목입니다!");
        }
    }
}

function shop3() {
    if (btn === 2) {
        if (clicks >= 5000) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco4.png\")";
            document.getElementById("btnName").textContent = "다이아 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(22, 220, 255)";
            clicks -= 5000;
            document.getElementById("click").textContent = '클릭 ' + comma(clicks);
            btn += 1;
            calert("[다이아 버튼]을 구입했습니다 ( - 5,000c )");
        } else {
            nope("클릭 부족");
        }
    } else {
        if (btn < 2) {
            nope("[황금 버튼] 이 필요합니다!");
        } else {
            nope("이미 구매한 항목입니다!");
        }
    }
}

function shop4() {
    if (btn === 3) {
        if (clicks >= 300000) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco5.png\")";
            document.getElementById("btnName").textContent = "루비 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(255, 22, 22)";
            clicks -= 300000;
            document.getElementById("click").textContent = '클릭 ' + comma(clicks);
            btn += 1;
            calert("[루비 버튼]을 구입했습니다 ( - 300,000c )");
        } else {
            nope("클릭 부족");
        }
    } else {
        if (btn < 3) {
            nope("[다이아 버튼] 이 필요합니다!");
        } else {
            nope("이미 구매한 항목입니다!");
        }
    }
}

function shop5() {
    if (btn === 4) {
        if (clicks >= 60000000) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco6.png\")";
            document.getElementById("btnName").textContent = "레전드 버튼";
            document.getElementById("clickbtn").style.backgroundColor = "rgb(192, 98, 255)";
            clicks -= 60000000;
            document.getElementById("click").textContent = '클릭 ' + comma(clicks);
            btn += 1;
            calert("[레전드 버튼]을 구입했습니다 ( - 60,000,000c )");
        } else {
            nope("클릭 부족");
        }
    } else {
        if (btn < 4) {
            nope("[루비 버튼] 이 필요합니다!");
        } else {
            nope("이미 구매한 항목입니다!");
        }
    }
}

function shop6() {
    if (btn === 5) {
        if (clicks >= 15000000000) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco7.png\")";
            document.getElementById("btnName").textContent = "황제의 버튼";
            document.getElementById("clickbtn").style.backgroundImage = "linear-gradient(to left, indigo, blue, green, yellow, orange, red)";
            clicks -= 15000000000;
            document.getElementById("click").textContent = '클릭 ' + comma(clicks);
            btn += 1;
            calert("[황제의 버튼]을 구입했습니다 ( - 15,000,000,000c )");
        } else {
            nope("클릭 부족");
        }
    } else {
        if (btn < 5) {
            nope("[레전드 버튼] 이 필요합니다!");
        } else {
            nope("이미 구매한 항목입니다!");
        }
    }
}

function shop7() {
    if (btn === 6) {
        if (clicks >= 900000000000) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco8.png\")";
            document.getElementById("btnName").textContent = "어둠의 버튼";
            document.getElementById("btnName").style.color = "black";
            document.getElementById("btnName").style.textShadow = "1.5px -1.5px white, 1.5px 1.5px white, -1.5px 1.5px white, -1.5px -1.5px white";
            document.getElementById("clickbtn").style.backgroundColor = "black";
            document.getElementById("clickbtn").style.backgroundImage = "url(\"./img/btn7.png\")";
            document.body.style.backgroundColor = "rgb(73, 73, 73)";
            document.getElementById("findegg").style.backgroundColor = "rgb(73, 73, 73)";
            if (egg === 1) {
                document.getElementById("egg").style.color = "red";
            } else {
                document.getElementById("egg").style.color = "rgb(73, 73, 73)";
            }
            clicks -= 900000000000;
            document.getElementById("click").textContent = '클릭 ' + comma(clicks);
            btn += 1;
            calert("[어둠의 버튼]을 구입했습니다 ( - 900,000,000,000c )");

            achieve(6);
            
            achieve(8);
        } else {
            nope("클릭 부족");
        }
    } else {
        if (btn < 6) {
            nope("[황제의 버튼] 이 필요합니다!");
        } else {
            nope("이미 구매한 항목입니다!");
        }
    }
}




function shopcost(num) {
    document.getElementById("shop" + num + "cost").style.display = "block";
}

function shopcostO(num) {
    document.getElementById("shop" + num + "cost").style.display = "none";
}