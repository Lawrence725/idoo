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

// 發送電子簽單popup
function popSendEorder(id) { 
    document.getElementById('pop__send-eorder').style.display = "flex"; 
    var x = document.getElementsByClassName('pop__tabs__a');
    var y = document.getElementsByClassName('pop__pane');
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].className = ('pop__tabs__a');
        y[i].style.display = 'none';
    }
    document.getElementById(id).style.display = "block";  
    document.getElementById(id+'-tab').className = "pop__tabs__a current";  
}

$(function(){
    // 發送電子簽單popup 切換tabs
    $('.pop__tabs a').click(function(){
        var id = $(this).attr('rel');

        $('.pop__tabs a').removeClass('current');
        $(this).addClass('current');
        $('.pop__pane').css('display', 'none');
        $('#'+id).css('display', 'block');
    });
});

// 電子簽單傳送成功popup
function popSendEorderMsg() {
    document.getElementById('pop__order--send').style.display = "flex"; 
}