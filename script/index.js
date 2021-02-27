$( document ).ready(function() {
    $('.js--menu-button').click(function(){
        const navList = $('.js--main-nav')
        const icon = $('.menu-icon')

        if(navList.css('display') == 'none'){
            navList.css('display','flex')
            icon.attr('name','close') 
        }else{
            navList.removeAttr('style')
            icon.attr('name','menu')
        }
    })

});