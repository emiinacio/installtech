$(document).ready(function () {
    var _containerBtn = $('[data-container="botao-voltar"]');
    var _containerMenu = $('[data-container="menu"]');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 2000) {
            _containerBtn.fadeIn(600);
        } else {
            _containerBtn.fadeOut(0);
        }
    });

    _containerBtn.click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);

        return false;
    });
});