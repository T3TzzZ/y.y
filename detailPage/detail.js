/**
 * Created by Administrator on 2018/11/3.
 */
var oScreenBanner = document.getElementsByClassName("screen-banner")[0];
var oAllScreen = document.getElementsByClassName("all-screen")[0];
var arrScreen = document.getElementsByClassName("screen-one");
var screenW, screenH;
var page = 0;
var aLisD=document.querySelectorAll("header .nav li");
//console.log(aLisD);
var toNext=document.getElementById('next');
function resize(){
    // 获取屏幕宽高
    screenW = document.documentElement.clientWidth;  /*获取一屏幕宽度*/
    screenH = document.documentElement.clientHeight; /*获取一屏幕高度*/
    // 设置宽高    总轮播图    大盒子    每一屏
    oAllScreen.style.width = oScreenBanner.style.width = screenW + "px";/*给all-screen和screen-banner设置一屏宽度*/
    oScreenBanner.style.height = screenH + "px";/*给all-screen和screen-banner设置一屏高度*/
    oAllScreen.style.height = screenH * arrScreen.length + "px";
    for (var i = 0; i < arrScreen.length; i++) {
        arrScreen[i].style.width = screenW + "px";
        arrScreen[i].style.height = screenH + "px";
    }

    oAllScreen.style.top = -page * screenH + "px";
}
resize();
window.onresize = resize;

var isRunning = false; // 儅isRunning 為true  鼠標滾軸不管事
// 儅isRunning 為false  鼠標滾軸管事
function scrollUp() {
    if(!isRunning){
        isRunning = true;
        // 設置定時器  儅1秒之後  滾軸繼續可以使用
        setTimeout(function(){
            isRunning = false;
        },1000);
        if (page > 0) {
            page--;
            oAllScreen.style.top = -page * screenH + "px";
        }
    }
}
function scrollDown() {
    if(!isRunning) {
        isRunning = true;
        setTimeout(function(){
            isRunning = false;

        },1000);
        if (page < arrScreen.length - 1) {
            page++;

            oAllScreen.style.top = -page * screenH + "px";
        }
    }
}


// chrome   ie
addEvent(window, "mousewheel", mouseWheel);
// ff
addEvent(window, "DOMMouseScroll", mouseWheel);


// 滚轴事件函数
function mouseWheel(ev) {
    var oEvent = window.event || ev;
    if (oEvent.detail) {
        if (oEvent.detail > 0) {
            scrollDown()
        } else {
            scrollUp()
        }
    } else if (oEvent.wheelDelta) {
        if (oEvent.wheelDelta > 0) {
            scrollUp()
        } else {
            scrollDown()
        }
    }
}


function addEvent(ele, type, listener) {
    if (ele.addEventListener) {
        ele.addEventListener(type, listener);
    } else {
        ele.attachEvent("on" + type, listener);
    }
}





var timer;
var index=0;
var box = document.getElementById("box");
var screen = box.children[0];
var ul = screen.children[0];
var ulLis = ul.children;
var ol = screen .children[1];
var arr = document.getElementById("arr");
var left = document.getElementById("left");
var right = document.getElementById("right");
var imgWidth = screen.offsetWidth;
var aLis=document.querySelectorAll('.all_in .tab .list li');
var aPics=document.querySelectorAll('.all_in .pics>li');

function toRight(){
    clearInterval();
    index++;
    if(index>aPics.length-1){
        index=0;
    }
    for (var j = 0; j < aPics.length; j++) {
        aPics[j].classList.remove('now');
        aLis[j].classList.remove('now');
    }
    aPics[index].classList.add('now');
    aLis[index].classList.add('now');
}
//timer=setInterval(toRight,2000);

var square = 0;//记录当前亮起的按钮的索引

right.onclick = function () {
    if (square < aPics.length - 1) {
        square++;
    } else {
        square = 0;
    }
    for (var i = 0; i < aPics.length; i++) {
        aLis[i].classList.remove('now');
        aPics[i].classList.remove('now');
    }
    aLis[square].classList.add('now');
    aPics[square].classList.add('now');
};

left.onclick = function () {
    if (square > 0){
        square--;
    } else {
        square = aPics.length - 1;
    }
    for (var i = 0; i < aLis.length; i++) {
        aLis[i].classList.remove('now');
        aPics[i].classList.remove('now');
    }
    aLis[square].classList.add('now');
    aPics[square].classList.add('now');
};

var oBtn=document.querySelectorAll('.bird .cont .bottom ul li');
console.log(oBtn);
var oBird_cont=document.querySelectorAll('.bird .cont .tab ul');
for (let i=0;i<oBtn.length;i++){
    oBtn[i].onclick = function(){
        for (var j=0;j<oBird_cont.length;j++){
            oBtn[j].classList.remove('now');
            oBird_cont[j].classList.remove('now');
        }
        console.log(aLis[i]);
        oBtn[i].classList.add('now');
        oBird_cont[i].classList.add('now');
    };
}

