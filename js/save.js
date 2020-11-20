function save() {
    if (confirm("정말로 저장하시겠습니까?")) {
        localStorage.setItem('clicks', JSON.stringify(clicks));
        localStorage.setItem('btn', JSON.stringify(btn));
        localStorage.setItem('gift', JSON.stringify(gift));
        localStorage.setItem('workcount', JSON.stringify(workcount));
        localStorage.setItem('work1count', JSON.stringify(work1count));
        localStorage.setItem('work2count', JSON.stringify(work2count));
        localStorage.setItem('work3count', JSON.stringify(work3count));
        localStorage.setItem('work4count', JSON.stringify(work4count));
        localStorage.setItem('work5count', JSON.stringify(work5count));
        localStorage.setItem('work6count', JSON.stringify(work6count));
        localStorage.setItem('workfirst', JSON.stringify(workfirst));
        localStorage.setItem('egg', JSON.stringify(egg));
        localStorage.setItem('mouse', JSON.stringify(mouse));
        localStorage.setItem('loveOK', JSON.stringify(loveOK));
        localStorage.setItem('cashNO', JSON.stringify(cashNO));
        localStorage.setItem('a1F', JSON.stringify(a1F));
        localStorage.setItem('a2F', JSON.stringify(a2F));
        localStorage.setItem('a3F', JSON.stringify(a3F));
        localStorage.setItem('a4F', JSON.stringify(a4F));
        localStorage.setItem('a5F', JSON.stringify(a5F));
        localStorage.setItem('a6F', JSON.stringify(a6F));
        localStorage.setItem('a7F', JSON.stringify(a7F));
        localStorage.setItem('a8F', JSON.stringify(a8F));
        localStorage.setItem('a9F', JSON.stringify(a9F));
        localStorage.setItem('a10F', JSON.stringify(a10F));
        calert("데이터가 저장되었습니다");
    } else { }
}

function load() {
    if (confirm("정말로 불러오시겠습니까?")) {
        clicks = JSON.parse(localStorage.getItem('clicks'));
        btn = JSON.parse(localStorage.getItem('btn'));
        gift = JSON.parse(localStorage.getItem('gift'));
        workcount = JSON.parse(localStorage.getItem('workcount'));
        work1count = JSON.parse(localStorage.getItem('work1count'));
        work2count = JSON.parse(localStorage.getItem('work2count'));
        work3count = JSON.parse(localStorage.getItem('work3count'));
        work4count = JSON.parse(localStorage.getItem('work4count'));
        work5count = JSON.parse(localStorage.getItem('work5count'));
        work6count = JSON.parse(localStorage.getItem('work6count'));
        workfirst = JSON.parse(localStorage.getItem('workfirst'));
        if (workfirst == 1) {
            if (workload != 1) {
                workstart();
            } else { }
        } else { }
        egg = JSON.parse(localStorage.getItem('egg'));
        mouse = JSON.parse(localStorage.getItem('mouse'));
        loveOK = JSON.parse(localStorage.getItem('loveOK'));
        cashNO = JSON.parse(localStorage.getItem('cashNO'));
        a1F = JSON.parse(localStorage.getItem('a1F'));
        a2F = JSON.parse(localStorage.getItem('a2F'));
        a3F = JSON.parse(localStorage.getItem('a3F'));
        a4F = JSON.parse(localStorage.getItem('a4F'));
        a5F = JSON.parse(localStorage.getItem('a5F'));
        a6F = JSON.parse(localStorage.getItem('a6F'));
        a7F = JSON.parse(localStorage.getItem('a7F'));
        a8F = JSON.parse(localStorage.getItem('a8F'));
        a9F = JSON.parse(localStorage.getItem('a9F'));
        a10F = JSON.parse(localStorage.getItem('a10F'));
        document.getElementById("click").textContent = '클릭 ' + comma(clicks);

        if (btn === 0) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco1.png\")";
            document.getElementById("btnName").textContent = "낡은 버튼";
            document.getElementById("clickbtn").style.background = "none rgb(150, 74, 23)";
        }
        if (btn === 1) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco2.png\")";
            document.getElementById("btnName").textContent = "그냥 버튼";
            document.getElementById("clickbtn").style.background = "none rgb(118, 255, 113)";
        }
        if (btn === 2) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco3.png\")";
            document.getElementById("btnName").textContent = "황금 버튼";
            document.getElementById("clickbtn").style.background = "none rgb(243, 255, 71)";
        }
        if (btn === 3) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco4.png\")";
            document.getElementById("btnName").textContent = "다이아 버튼";
            document.getElementById("clickbtn").style.background = "none rgb(22, 220, 255)";
        }
        if (btn === 4) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco5.png\")";
            document.getElementById("btnName").textContent = "루비 버튼";
            document.getElementById("clickbtn").style.background = "none rgb(255, 22, 22)";
        }
        if (btn === 5) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco6.png\")";
            document.getElementById("btnName").textContent = "레전드 버튼";
            document.getElementById("clickbtn").style.background = "none rgb(192, 98, 255)";
        }
        if (btn === 6) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco7.png\")";
            document.getElementById("btnName").textContent = "황제의 버튼";
            document.getElementById("clickbtn").style.backgroundImage = "linear-gradient(to left, indigo, blue, green, yellow, orange, red)";
        }
        if (btn === 7) {
            document.getElementById("btndeco").style.backgroundImage = "url(\"./img/deco8.png\")";
            document.getElementById("btnName").textContent = "어둠의 버튼";
            document.getElementById("clickbtn").style.backgroundImage = "url(\"./img/btn7.png\")";
            document.body.style.backgroundColor = "rgb(73, 73, 73)";
            document.getElementById("findegg").style.backgroundColor = "rgb(73, 73, 73)";
            if (egg === 1) { } else {
                document.getElementById("egg").style.color = "rgb(73, 73, 73)";
            }
        } else {
            document.body.style.backgroundColor = "white";
            document.getElementById("findegg").style.backgroundColor = "white";
            if (egg === 1) { } else {
                document.getElementById("egg").style.color = "white";
            }
        }
        document.getElementById("worker1c").textContent = `${work1count / 1}명 ${work1count}c/s`;
        document.getElementById("worker2c").textContent = `${work2count / 12}명 ${work2count}c/s`;
        document.getElementById("worker3c").textContent = `${work3count / 130}명 ${work3count}c/s`;
        document.getElementById("worker4c").textContent = `${work4count / 1400}명 ${work4count}c/s`;
        document.getElementById("worker5c").textContent = `${work5count / 15000}명 ${work5count}c/s`;
        document.getElementById("worker6c").textContent = `${work6count / 5}명 ${work6count}c/s`;
        document.getElementById("namesName").textContent = `c : click 클릭 | s : second 초 | ${workcount}c/s`;
        if (egg === 1) {
            document.getElementById("egg").style.color = "red";
        }
        if (a1F == 1) {
            document.getElementById("achieve1").src = "./img/achievelist/a1.png";
        } else {
            document.getElementById("achieve1").src = "./img/achievelist/na1.png";
        }
        if (a2F == 1) {
            document.getElementById("achieve2").src = "./img/achievelist/a2.png";
        } else {
            document.getElementById("achieve2").src = "./img/achievelist/na2.png";
        }
        if (a3F == 1) {
            document.getElementById("achieve3").src = "./img/achievelist/a3.png";
        } else {
            document.getElementById("achieve3").src = "./img/achievelist/na3.png";
        }
        if (a4F == 1) {
            document.getElementById("achieve4").src = "./img/achievelist/a4.png";
        } else {
            document.getElementById("achieve4").src = "./img/achievelist/na4.png";
        }
        if (a5F == 1) {
            document.getElementById("achieve5").src = "./img/achievelist/a5.png";
        } else {
            document.getElementById("achieve5").src = "./img/achievelist/na5.png";
        }
        if (a6F == 1) {
            document.getElementById("achieve6").src = "./img/achievelist/a6.png";
        } else {
            document.getElementById("achieve6").src = "./img/achievelist/na6.png";
        }
        if (a7F == 1) {
            document.getElementById("achieve7").src = "./img/achievelist/a7.png";
        } else {
            document.getElementById("achieve7").src = "./img/achievelist/na7.png";
        }
        if (a8F == 1) {
            document.getElementById("achieve8").src = "./img/achievelist/a8.png";
        } else {
            document.getElementById("achieve8").src = "./img/achievelist/na8.png";
        }
        if (a9F == 1) {
            document.getElementById("achieve9").src = "./img/achievelist/a9.png";
        } else {
            document.getElementById("achieve9").src = "./img/achievelist/na9.png";
        }
        if (a10F == 1) {
            document.getElementById("achieve10").src = "./img/achievelist/a10.png";
        } else {
            document.getElementById("achieve10").src = "./img/achievelist/na10.png";
        }
        calert("데이터를 불러왔습니다");
    } else { }
}