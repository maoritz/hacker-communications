$( document ).ready(function() {
    $('.menu-button').click(function(){
        const navList = $('.main-nav')
        if(navList.css('display') == 'none'){
            navList.css('display','flex')
        }else{
            navList.removeAttr('style')
        }
    })
});