$(document).ready(function() {
    $(".news__slider.owl-carousel").owlCarousel({
        dots: true,
        margin: 10,
        center: true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1,
                center: false,
            },
            1000:{
                items:3
            }
        }
    });

    $(".prices__list.owl-carousel").owlCarousel({
        dots: true,
        margin: 10,
        center: true,
        loop: true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1,
                center: false,
            },
            1000:{
                items:3
            }
        }
    });
    
    $('.dir_menu_list').click(function() {
        $('.hide_links').removeClass('hide')
    })

    $('.dir_menu_list').click(function() {
        $('.hide_links').removeClass('hide')
    })

    $(document).mouseup( function(e){ // событие клика по веб-документу
		let menuWrap = $(".hide_links"); // тут указываем ID элемента
		if ( !menuWrap.is(e.target)) { // и не по его дочерним элементам
			menuWrap.addClass('hide') // скрываем его
		}
	});

    $(".menuToggle").click(function() {
        $(this).toggleClass("active");
        $('.header_top__ul').slideToggle(300, function(){
          if($(this).css('display') === "none"){
            $(this).removeAttr('style');
          }
        });
      });

    $('.faq__content_item_showed').click(function () {
        $(this).next().toggleClass('hide');
        $(this).children('img').toggleClass('reverse')
    })

});