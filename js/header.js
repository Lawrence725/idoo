// Load Header
const xhr = new XMLHttpRequest();
xhr.open("GET", "./header.html", true);
xhr.send();
xhr.onreadystatechange=function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        document.querySelectorAll("#header")[0].innerHTML = xhr.responseText; }};

// Popup close
function popClose(e) {
    if (e.classList.contains('pop'))
        window.onclick  = function(event) {
            if (event.target == e) {
                e.children[0].style.animationName = "popdown";
                setTimeout(function(){
                    e.style.display = "none";
                    e.children[0].style.animationName = "popup";
                }, 500); }}
    else if (!(e.classList.contains('pop__body'))) {
        e.closest('.pop').children[0].style.animationName = "popdown";
        setTimeout(function(){
            e.closest('.pop').style.display = "none";
            e.closest('.pop').children[0].style.animationName = "popup";
        }, 500); }}

// 桌號popup
function popTable() { document.getElementById("pop__table").style.display = "flex";}

// 更多選單popup
function popMore() { document.getElementById("pop__more").style.display = "flex";}

// 登出popup
function popLogout() { document.getElementById("pop__logout").style.display = "flex";}

// 選擇語言popup
function popLanguage() { document.getElementById("pop__language").style.display = "flex";}

// 收款模式popup
function popMakeCollections() { document.getElementById("pop__makecollections").style.display = "flex";}

// 收款模式popup2
function popTwoScreenSetting() { document.getElementById("pop_twoscreensetting").style.display = "flex";}

// 更多選單popup close
function popMoreClose(e) {
    if (e.classList.contains('pop'))
        window.onclick  = function(event) {
            if (event.target == e) {
                e.children[0].style.animationName = "popleft";
                setTimeout(function(){
                    e.style.display = "none";
                    e.children[0].style.animationName = "popright";
                }, 500); }}
    else if (!(e.classList.contains('pop__body'))) {
        e.closest('.pop').children[0].style.animationName = "popleft";
        setTimeout(function(){
            e.closest('.pop').style.display = "none";
            e.closest('.pop').children[0].style.animationName = "popright";
        }, 500); }}