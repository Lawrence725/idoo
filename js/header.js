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

// 排版設定popup
function popLayouts() { document.getElementById("pop__layouts").style.display = "flex";}

// 收款設定popup
function popMakeCollection() { document.getElementById("pop__makecollection").style.display = "flex";}

// 確定取代綁定popup
function popReplaceConfirm() { document.getElementById("pop__replaceconfirm").style.display = "flex";}

// 櫃位命名popup
function popCounterNaming() { document.getElementById("pop__counternaming").style.display = "flex";}

// 收款模式popup
function popMakeCollections() { document.getElementById("pop__makecollections").style.display = "flex";}

// 收款模式popup2
function popTwoScreenSetting() { document.getElementById("pop_twoscreensetting").style.display = "flex";}

// 靠款設定popup
function popContactless() { document.getElementById("pop__contactless").style.display = "flex";}

// 靠款設定popup2
function popTwoContactless() { document.getElementById("pop_twocontactless").style.display = "flex";}

// 開啟滿版選單popup
function popFullMenu() { 
    document.getElementById("cover").style.display = "flex";
    document.getElementById("cover__functions").style.display = "flex"; }

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

$(function(){
    //收款模式checked樣式改變
    $('.mc-method input').change(function(){
        $('.mc-method label').addClass('mc-method_label');
    });

    //靠卡設定checked樣式改變
    $('.cl-method input').change(function(){
        $('.cl-method label').addClass('cl-method_label');
    });
});