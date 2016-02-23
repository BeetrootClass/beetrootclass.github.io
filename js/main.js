/**
 * Created by Yegor on 02.02.2016.
 */

    (function($) {
        $(function() {

            $('ul.tabs__caption').each(function() {
                $(this).find('li').each(function(i) {
                    $(this).click(function(){
                        $(this).addClass('active').siblings().removeClass('active')
                            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
                    });
                });
            });

        })
    })(jQuery);

$(window).load(function(){
    $('.modal-bg').click(function(){
        $(this).hide();
    });
});