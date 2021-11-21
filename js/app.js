// mobile menu code
$('.mobile-menu').click(function(){
    let has = $('button i').hasClass('fa-bars');
    if(has){
        $('button i').addClass('fa-times').removeClass('fa-bars');
    }else{
        $('button i').addClass('fa-bars').removeClass('fa-times');
    }
})
$('.mobile-menu').click(function(){
    let have = $('#header').hasClass('menuClass');
    if(have){
        $('#header').removeClass('menuClass');
    }else{
        $('header').addClass('menuClass');
    }
})
// 
$('.nav-menu a').on('click',function(){
    $('.nav-menu li').addClass('active');
}).on('click',function(){
    $('.nav-menu li').removeClass('active');
})