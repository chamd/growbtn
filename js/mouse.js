function upgradeMouse() {
    document.getElementById("upgrade").style.backgroundColor = "rgb(62, 146, 59)";
}

function upgradeMouseO() {
    document.getElementById("upgrade").style.backgroundColor = "rgb(89, 255, 111)";
}

function upgrade() {
    var upgrade = Math.floor(Math.random() * 100);

    if (mouse == 0 && work3count / 130 >= 3) {
        work3count -= 3 * 130;
        workcount -= 3 * 130;
        document.getElementById("worker3c").textContent = comma(work3count / 130) + `명 ` + comma(work3count) + `c/s`;

        if (0 <= upgrade && upgrade <= 99) {
            document.getElementById("specName").textContent = "거대 마우스";
            document.getElementById("specBreak").textContent = "부서질 확률 : 0.01%";
            document.getElementById("nextCost").textContent = "7명 필요";
            document.getElementById("upgradePer").textContent = "80%";
            document.getElementById("specAddEle").innerHTML = "그냥 &nbsp;&nbsp;&nbsp;버튼 + 1클릭<br>황금 &nbsp;&nbsp;&nbsp;버튼 + 1클릭<br>다이아 버튼 + 1클릭<br>루비 &nbsp;&nbsp;&nbsp;버튼 + 1클릭<br>레전드 버튼 + 10클릭<br>황제의 버튼 + 100클릭<br>어둠의 버튼 + 5,000클릭";
            document.getElementById("mouseIMG").src = "img/mouse/mouse1.png"
            document.getElementById("nowMouse").src = "img/mouse/mouse1.png"
            document.getElementById("nextMouse").src = "img/mouse/mouse2.png"
            mouse += 1;
            upgradeAlert("success");
        } else {
            upgradeAlert("fail");
            work7count += 1700000;
            workcount += 1700000;
            document.getElementById("worker7c").textContent = comma(work7count / 1700000) + `명 ` + comma(work7count) + `c/s`;
            achieve(2);
            achieve(10);
        }
    } else if (mouse == 1 && work3count / 130 >= 7) {
        work3count -= 7 * 130
        workcount -= 7 * 130;
        document.getElementById("worker3c").textContent = comma(work3count / 130) + `명 ` + comma(work3count) + `c/s`;

        if (0 <= upgrade && upgrade <= 80) {
            document.getElementById("specName").textContent = "날카로운 마우스";
            document.getElementById("nextCost").textContent = "20명 필요";
            document.getElementById("upgradePer").textContent = "60%";
            document.getElementById("specAddEle").innerHTML = "그냥 &nbsp;&nbsp;&nbsp;버튼 + 1클릭<br>황금 &nbsp;&nbsp;&nbsp;버튼 + 1클릭<br>다이아 버튼 + 1클릭<br>루비 &nbsp;&nbsp;&nbsp;버튼 + 10클릭<br>레전드 버튼 + 100클릭<br>황제의 버튼 + 1,000클릭<br>어둠의 버튼 + 50,000클릭";
            document.getElementById("mouseIMG").src = "img/mouse/mouse2.png"
            document.getElementById("nowMouse").src = "img/mouse/mouse2.png"
            document.getElementById("nextMouse").src = "img/mouse/mouse3.png"
            mouse += 1;
            upgradeAlert("success");
        } else {
            upgradeAlert("fail");
        }
    } else if (mouse == 2 && work3count / 130 >= 20) {
        work3count -= 20 * 130
        workcount -= 20 * 130;
        document.getElementById("worker3c").textContent = comma(work3count / 130) + `명 ` + comma(work3count) + `c/s`;

        if (0 <= upgrade && upgrade <= 60) {
            document.getElementById("specName").textContent = "검 마우스";
            document.getElementById("nextCost").textContent = "100명 필요";
            document.getElementById("upgradePer").textContent = "40%";
            document.getElementById("specAddEle").innerHTML = "그냥 &nbsp;&nbsp;&nbsp;버튼 + 1클릭<br>황금 &nbsp;&nbsp;&nbsp;버튼 + 2클릭<br>다이아 버튼 + 10클릭<br>루비 &nbsp;&nbsp;&nbsp;버튼 + 50클릭<br>레전드 버튼 + 1,000클릭<br>황제의 버튼 + 10,000클릭<br>어둠의 버튼 + 500,000클릭";
            document.getElementById("mouseIMG").src = "img/mouse/mouse3.png"
            document.getElementById("nowMouse").src = "img/mouse/mouse3.png"
            document.getElementById("nextMouse").src = "img/mouse/mouse4.png"
            mouse += 1;
            upgradeAlert("success");
        } else {
            upgradeAlert("fail");
        }
    } else if (mouse == 3 && work3count / 130 >= 100) {
        work3count -= 100 * 130
        workcount -= 100 * 130;
        document.getElementById("worker3c").textContent = comma(work3count / 130) + `명 ` + comma(work3count) + `c/s`;

        if (0 <= upgrade && upgrade <= 40) {
            document.getElementById("specName").textContent = "빠큐 마우스";
            document.getElementById("nextCost").textContent = "500명 필요";
            document.getElementById("upgradePer").textContent = "20%";
            document.getElementById("specAddEle").innerHTML = "그냥 &nbsp;&nbsp;&nbsp;버튼 + 2클릭<br>황금 &nbsp;&nbsp;&nbsp;버튼 + 5클릭<br>다이아 버튼 + 20클릭<br>루비 &nbsp;&nbsp;&nbsp;버튼 + 100클릭<br>레전드 버튼 + 20,000클릭<br>황제의 버튼 + 100,000클릭<br>어둠의 버튼 + 5,000,000클릭";
            document.getElementById("mouseIMG").src = "img/mouse/mouse4.png"
            document.getElementById("nowMouse").src = "img/mouse/mouse4.png"
            document.getElementById("nextMouse").src = "img/mouse/mouse5.png"
            mouse += 1;
            upgradeAlert("success");
        } else {
            upgradeAlert("fail");
        }
    } else if (mouse == 4 && work3count / 130 >= 500) {
        work3count -= 500 * 130
        workcount -= 500 * 130;
        document.getElementById("worker3c").textContent = comma(work3count / 130) + `명 ` + comma(work3count) + `c/s`;

        if (0 <= upgrade && upgrade <= 20) {
            document.getElementById("specName").textContent = "각성 마우스";
            document.getElementById("nextCost").textContent = "";
            document.getElementById("upgradePer").textContent = "";
            document.getElementById("specAddEle").innerHTML = "그냥 &nbsp;&nbsp;&nbsp;버튼 + 4클릭<br>황금 &nbsp;&nbsp;&nbsp;버튼 + 10클릭<br>다이아 버튼 + 40클릭<br>루비 &nbsp;&nbsp;&nbsp;버튼 + 200클릭<br>레전드 버튼 + 40,000클릭<br>황제의 버튼 + 200,000클릭<br>어둠의 버튼 + 10,000,000클릭";
            document.getElementById("mouseIMG").src = "img/mouse/mouse5.png"
            document.getElementById("nowMouse").src = "img/mouse/mouse5.png"
            document.getElementById("nextMouse").src = "img/mouse/mouse5.png"
            mouse += 1;
            upgradeAlert("success");

            achieve(7);

            achieve(80);
        } else {
            upgradeAlert("fail");
        }
    } else {
        upgradeAlert("cant");
        if (mouse == 0 && work3count / 130 >= 3) {

        } else {

        }
    }
}

function upgradeAlert(stat) {
    if (stat == "success") {
        document.getElementById("clickbtn").style.cursor = `url('./img/mouse/mouse${mouse}.png'), auto`;
        document.getElementById("slideTitle").style.color = "rgb(255, 238, 0)";
        setTimeout(function () {
            document.getElementById("slideTitle").style.color = "white";
        }, 200);
    } else if (stat == "fail") {
        document.getElementById("clickbtn").style.cursor = `pointer`;
        document.getElementById("specName").textContent = "그냥 마우스";
        document.getElementById("specBreak").textContent = "부서질 확률 : 0%";
        document.getElementById("nextCost").textContent = "3명 필요";
        document.getElementById("upgradePer").textContent = "99%";
        document.getElementById("specAddEle").innerHTML = "그냥 &nbsp;&nbsp;&nbsp;버튼 + 0클릭<br>황금 &nbsp;&nbsp;&nbsp;버튼 + 0클릭<br>다이아 버튼 + 0클릭<br>루비 &nbsp;&nbsp;&nbsp;버튼 + 0클릭<br>레전드 버튼 + 0클릭<br>황제의 버튼 + 0클릭<br>어둠의 버튼 + 0클릭";
        document.getElementById("mouseIMG").src = "img/mouse/mouse0.png"
        document.getElementById("nowMouse").src = "img/mouse/mouse0.png"
        document.getElementById("nextMouse").src = "img/mouse/mouse1.png"
        mouse = 0;
        document.getElementById("slideTitle").style.color = "black";
        setTimeout(function () {
            document.getElementById("slideTitle").style.color = "white";
        }, 200);
    } else if (stat == "cant") {
        document.getElementById("slideTitle").style.color = "rgb(255, 0, 0)";
        setTimeout(function () {
            document.getElementById("slideTitle").style.color = "white";
        }, 200);
    }
}

function plusClick(num) {
    var breakM = Math.floor(Math.random() * 10000);
    if (mouse == 1) {
        if (num >= 1 && 4 >= num) {
            clicks += 1;
        } else if (num == 5) {
            clicks += 10;
        } else if (num == 6) {
            clicks += 100;
        } else if (num == 7) {
            clicks += 5000;
        }
        if (0 <= breakM && breakM <= 1) {
            achieve(9);
            mouse -= 1;
            document.getElementById("clickbtn").style.cursor = `pointer`;
            document.getElementById("specName").textContent = "그냥 마우스";
            document.getElementById("specBreak").textContent = "부서질 확률 : 0%";
            document.getElementById("nextCost").textContent = "3명 필요";
            document.getElementById("upgradePer").textContent = "99%";
            document.getElementById("specAddEle").innerHTML = "그냥 &nbsp;&nbsp;&nbsp;버튼 + 0클릭<br>황금 &nbsp;&nbsp;&nbsp;버튼 + 0클릭<br>다이아 버튼 + 0클릭<br>루비 &nbsp;&nbsp;&nbsp;버튼 + 0클릭<br>레전드 버튼 + 0클릭<br>황제의 버튼 + 0클릭<br>어둠의 버튼 + 0클릭";
            document.getElementById("mouseIMG").src = "img/mouse/mouse0.png"
            document.getElementById("nowMouse").src = "img/mouse/mouse0.png"
            document.getElementById("nextMouse").src = "img/mouse/mouse1.png"
        } else { }
    } else if (mouse == 2) {
        if (num >= 1 && 3 >= num) {
            clicks += 1;
        } else if (num == 4) {
            clicks += 10;
        } else if (num == 5) {
            clicks += 100;
        } else if (num == 6) {
            clicks += 1000;
        } else if (num == 7) {
            clicks += 50000;
        }
        if (0 <= breakM && breakM <= 1) {
            achieve(9);
            mouse -= 1;
            document.getElementById("clickbtn").style.cursor = `url('./img/mouse/mouse${mouse}.png'), auto`;
            document.getElementById("specName").textContent = "거대 마우스";
            document.getElementById("nextCost").textContent = "7명 필요";
            document.getElementById("upgradePer").textContent = "80%";
            document.getElementById("specAddEle").innerHTML = "그냥 &nbsp;&nbsp;&nbsp;버튼 + 1클릭<br>황금 &nbsp;&nbsp;&nbsp;버튼 + 1클릭<br>다이아 버튼 + 1클릭<br>루비 &nbsp;&nbsp;&nbsp;버튼 + 1클릭<br>레전드 버튼 + 10클릭<br>황제의 버튼 + 100클릭<br>어둠의 버튼 + 5,000클릭";
            document.getElementById("mouseIMG").src = "img/mouse/mouse1.png"
            document.getElementById("nowMouse").src = "img/mouse/mouse1.png"
            document.getElementById("nextMouse").src = "img/mouse/mouse2.png"
        } else { }
    } else if (mouse == 3) {
        if (num >= 1 && 1 >= num) {
            clicks += 1;
        } else if (num == 2) {
            clicks += 2;
        } else if (num == 3) {
            clicks += 10;
        } else if (num == 4) {
            clicks += 50;
        } else if (num == 5) {
            clicks += 1000;
        } else if (num == 6) {
            clicks += 10000;
        } else if (num == 7) {
            clicks += 500000;
        }
        if (0 <= breakM && breakM <= 1) {
            achieve(9);
            mouse -= 1;
            document.getElementById("clickbtn").style.cursor = `url('./img/mouse/mouse${mouse}.png'), auto`;
            document.getElementById("specName").textContent = "날카로운 마우스";
            document.getElementById("nextCost").textContent = "20명 필요";
            document.getElementById("upgradePer").textContent = "60%";
            document.getElementById("specAddEle").innerHTML = "그냥 &nbsp;&nbsp;&nbsp;버튼 + 1클릭<br>황금 &nbsp;&nbsp;&nbsp;버튼 + 1클릭<br>다이아 버튼 + 1클릭<br>루비 &nbsp;&nbsp;&nbsp;버튼 + 10클릭<br>레전드 버튼 + 100클릭<br>황제의 버튼 + 1,000클릭<br>어둠의 버튼 + 50,000클릭";
            document.getElementById("mouseIMG").src = "img/mouse/mouse2.png"
            document.getElementById("nowMouse").src = "img/mouse/mouse2.png"
            document.getElementById("nextMouse").src = "img/mouse/mouse3.png"
        } else { }
    } else if (mouse == 4) {
        if (num == 1) {
            clicks += 2;
        } else if (num == 2) {
            clicks += 5;
        } else if (num == 3) {
            clicks += 20;
        } else if (num == 4) {
            clicks += 100;
        } else if (num == 5) {
            clicks += 20000;
        } else if (num == 6) {
            clicks += 100000;
        } else if (num == 7) {
            clicks += 5000000;
        }
        if (0 <= breakM && breakM <= 1) {
            achieve(9);
            mouse -= 1;
            document.getElementById("clickbtn").style.cursor = `url('./img/mouse/mouse${mouse}.png'), auto`;
            document.getElementById("specName").textContent = "검 마우스";
            document.getElementById("nextCost").textContent = "100명 필요";
            document.getElementById("upgradePer").textContent = "40%";
            document.getElementById("specAddEle").innerHTML = "그냥 &nbsp;&nbsp;&nbsp;버튼 + 1클릭<br>황금 &nbsp;&nbsp;&nbsp;버튼 + 2클릭<br>다이아 버튼 + 10클릭<br>루비 &nbsp;&nbsp;&nbsp;버튼 + 50클릭<br>레전드 버튼 + 1,000클릭<br>황제의 버튼 + 10,000클릭<br>어둠의 버튼 + 500,000클릭";
            document.getElementById("mouseIMG").src = "img/mouse/mouse3.png"
            document.getElementById("nowMouse").src = "img/mouse/mouse3.png"
            document.getElementById("nextMouse").src = "img/mouse/mouse4.png"
        } else { }
    } else if (mouse == 5) {
        if (num == 1) {
            clicks += 4;
        } else if (num == 2) {
            clicks += 10;
        } else if (num == 3) {
            clicks += 40;
        } else if (num == 4) {
            clicks += 200;
        } else if (num == 5) {
            clicks += 40000;
        } else if (num == 6) {
            clicks += 200000;
        } else if (num == 7) {
            clicks += 10000000;
        }
        if (0 <= breakM && breakM <= 1) {
            achieve(9);
            mouse -= 1;
            document.getElementById("clickbtn").style.cursor = `url('./img/mouse/mouse${mouse}.png'), auto`;
            document.getElementById("specName").textContent = "빠큐 마우스";
            document.getElementById("nextCost").textContent = "500명 필요";
            document.getElementById("upgradePer").textContent = "20%";
            document.getElementById("specAddEle").innerHTML = "그냥 &nbsp;&nbsp;&nbsp;버튼 + 2클릭<br>황금 &nbsp;&nbsp;&nbsp;버튼 + 5클릭<br>다이아 버튼 + 20클릭<br>루비 &nbsp;&nbsp;&nbsp;버튼 + 100클릭<br>레전드 버튼 + 20,000클릭<br>황제의 버튼 + 100,000클릭<br>어둠의 버튼 + 5,000,000클릭";
            document.getElementById("mouseIMG").src = "img/mouse/mouse4.png"
            document.getElementById("nowMouse").src = "img/mouse/mouse4.png"
            document.getElementById("nextMouse").src = "img/mouse/mouse5.png"
        } else { }
    }
}

function resetM() {
    if (confirm("정말로 마우스를 초기화하시겠습니까?")) {
        mouse = 0;
        document.getElementById("clickbtn").style.cursor = `pointer`;
        document.getElementById("specName").textContent = "그냥 마우스";
        document.getElementById("specBreak").textContent = "부서질 확률 : 0%";
        document.getElementById("nextCost").textContent = "3명 필요";
        document.getElementById("upgradePer").textContent = "99%";
        document.getElementById("specAddEle").innerHTML = "그냥 &nbsp;&nbsp;&nbsp;버튼 + 0클릭<br>황금 &nbsp;&nbsp;&nbsp;버튼 + 0클릭<br>다이아 버튼 + 0클릭<br>루비 &nbsp;&nbsp;&nbsp;버튼 + 0클릭<br>레전드 버튼 + 0클릭<br>황제의 버튼 + 0클릭<br>어둠의 버튼 + 0클릭";
        document.getElementById("mouseIMG").src = "img/mouse/mouse0.png"
        document.getElementById("nowMouse").src = "img/mouse/mouse0.png"
        document.getElementById("nextMouse").src = "img/mouse/mouse1.png"
    } else { }
}