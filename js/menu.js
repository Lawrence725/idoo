// Load Header
const xhrCover = new XMLHttpRequest();
xhrCover.open("GET", "./functions.html", true);
xhrCover.send();
xhrCover.onreadystatechange=function(){
    if(xhrCover.readyState == 4 && xhrCover.status == 200){
        document.querySelectorAll("#cover")[0].innerHTML = xhrCover.responseText; }};

// 選擇數量popup
function popItemQuantity() { document.getElementById("pop__quantity").style.display = "flex";}

// 商品備註popup
function popItemRemark() { document.getElementById("pop__item-remark").style.display = "flex";}

// 訂單備註popup
function popOrderRemark() { document.getElementById("pop__order-remark").style.display = "flex";}

// 訂單折扣popup 折扣 幾折
function popDiscount() { document.getElementById("pop__discount").style.display = "flex";}

// 訂單折扣popup 折讓 $ 
function popDiscountCash() { document.getElementById("pop__discount_cash").style.display = "flex";}

// 訂單加購popup
function popOrderAddon() { document.getElementById("pop__order-addon").style.display = "flex";}

// 商品加購popup
function popItemAddon() { document.getElementById("pop__item-addon").style.display = "flex";}

// 現金結帳popup
function popCash() { document.getElementById("pop__cash").style.display = "flex";}

// 結帳popup
function popCheckout() { document.getElementById("pop__checkout").style.display = "flex";}

// 切換付款方式popup
function popCheckoutChange() { document.getElementById("pop__checkout--change").style.display = "flex";}

// 訂單已成立popup
function popCheckoutFinished() { document.getElementById("pop__checkout--finished").style.display = "flex";}

// 開啟dqr popup
function popDqr() { 
    $('#pop__dqr').slideDown(300);
}

$(function(){
    // 關閉滿版popup
    $('.pop__fullscreen__close').click(function(){
        $(this).closest('.pop__fullscreen').slideUp(300);
    });

    //收款模式checked樣式改變
    $('.mc-method input').change(function(){
        $('.mc-method label').addClass('mc-method_label');
    });
    
    /*
    //開頭教學1
    $('.menu .main .addons').addClass('start-step');
    $('.start-step1').show();
    $('.start-step1 .start-step__btn.next').click(function(){
        $(this).hide();
        $('.menu .main .addons').removeClass('start-step');
        $('.footer .cart').addClass('start-step');
        $('.start-step1, .start-step2').slideToggle(500);
    });

    //開頭教學2
    $('.start-step2 .start-step__btn.prev').click(function(){
        $(this).hide();
        $('.start-step1 .start-step__btn.next, .start-step2 .start-step__btn.prev').show();
        $('.footer .cart').removeClass('start-step');
        $('.menu .main .addons').addClass('start-step');
        $('.start-step1, .start-step2').slideToggle(500);
    });
    $('.start-step2 .start-step__btn.next').click(function(){
        $(this).hide();
        $('.footer .cart').removeClass('start-step');
        $('.footer .totals').addClass('start-step');
        $('.start-step2, .start-step3').slideToggle(500);
    });

    //開頭教學3
    $('.start-step3 .start-step__btn.prev').click(function(){
        $(this).hide();
        $('.start-step2 .start-step__btn.next, .start-step3 .start-step__btn.prev').show();
        $('.footer .totals').removeClass('start-step');
        $('.footer .cart').addClass('start-step');
        $('.start-step2, .start-step3').slideToggle(500);
    });
    $('.start-step3 .start-step__btn.next').click(function(){
        $('.start-step-fixed').hide();
        $('.start-step').removeClass('start-step');
    });
    */
});

