$(document).ajaxStop(refreshMobileCart);
$(document).ready(refreshMobileCart);

function refreshMobileCart() {
    var $mobileCartEmptyClass = 'mobile-cart-empty';
    var $productCountInCart = $('span.mobile-cart-product-count').html();
    var $mobileMenuProductCountElement = $('div.mobile-cart-product-count');

    if ($mobileMenuProductCountElement.length && $productCountInCart != undefined) {
        $mobileMenuProductCountElement.html($productCountInCart);
        if ($productCountInCart == 0) {
            $mobileMenuProductCountElement.addClass($mobileCartEmptyClass);
        } else {
            $mobileMenuProductCountElement.removeClass($mobileCartEmptyClass);
        }
    }
}