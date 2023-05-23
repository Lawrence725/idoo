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

// 商品備註popup
function popItemRemark() { document.getElementById("pop__item-remark").style.display = "flex";}

// 訂單備註popup
function popOrderRemark() { document.getElementById("pop__order-remark").style.display = "flex";}

// 訂單折扣popup
function popDiscount() { document.getElementById("pop__discount").style.display = "flex";}

// 訂單加購popup
function popOrderAddon() { document.getElementById("pop__order-addon").style.display = "flex";}

// 商品加購popup
function popItemAddon() { document.getElementById("pop__item-addon").style.display = "flex";}

// 現金結帳popup
function popCash() { document.getElementById("pop__cash").style.display = "flex";}