$(document).ready(function () {

    $('.animated').each(function(i) {
        (function(self, j) {
            setTimeout(function() {
                $(self).addClass('fadeIn');
            },(j*100)+100);
        })(this, i);
    });

    var shrinkHeader = 250;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
            $('#header').addClass('sm');
        }
        else {
            $('#header').removeClass('sm');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

});
