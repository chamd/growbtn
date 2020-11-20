var loveOK = 0;

function openMenu() {
    document.getElementById("Slidebar").style.transition = "1s";
    document.getElementById("Slidebar").style.marginLeft = "0px";
}

function closeMenu() {
    document.getElementById("Slidebar").style.transition = "1s";
    document.getElementById("Slidebar").style.marginLeft = "-800px";
}

function openNotice() {
    document.getElementById("slideNotice").style.transition = "0s";
    document.getElementById("slideNotice").style.marginLeft = "0px";
    document.getElementById("Slidebar").style.marginLeft = "-800px";
    document.getElementById("slideAchieve").style.marginLeft = "-800px";
}

function closeNotice() {
    document.getElementById("slideNotice").style.transition = "1s";
    document.getElementById("slideNotice").style.marginLeft = "-800px";
}

function openUpgrade() {
    document.getElementById("Slidebar").style.transition = "0s";
    document.getElementById("Slidebar").style.marginLeft = "0px";
    document.getElementById("slideNotice").style.marginLeft = "-800px";
    document.getElementById("slideAchieve").style.marginLeft = "-800px";
}

function openAchieve() {
    document.getElementById("slideAchieve").style.transition = "0s";
    document.getElementById("slideAchieve").style.marginLeft = "0px";
    document.getElementById("Slidebar").style.marginLeft = "-800px";
    document.getElementById("slideNotice").style.marginLeft = "-800px";
}

function closeAchieve() {
    document.getElementById("slideAchieve").style.transition = "1s";
    document.getElementById("slideAchieve").style.marginLeft = "-800px";
}

function love() {
    if (loveOK != 1) {
        var love = prompt("암호를 입력해줭(한글만)", "")

        if (love == "사랑해") {
            clicks += 10000000;
            alert("\"나도 사랑해\" [히든]도전과제를 달성했습니다! (보상 : 10,000,000c)");
            document.getElementById("click").textContent = '클릭 ' + comma(clicks);
            loveOK += 1;
        } else { }
    }
}