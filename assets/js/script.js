(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  // Btn top
  $(document).ready(function(){


  })

  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: '<div class="slick-control-prev"><i class="ti-arrow-left"></i></div>',
    nextArrow: '<div class="slick-control-next"><i class="ti-arrow-right"></i></div>'
  });


  // Count Down JS
  var Year = $('#simple-timer').attr('data-year');
  var Month = $('#simple-timer').attr('data-month');
  var Day = $('#simple-timer').attr('data-day');
  var Hour = $('#simple-timer').attr('data-hour');
  $('#simple-timer').syotimer({
    year: Year,
    month: Month,
    day: Day,
    hour: Hour,
    minute: 0
  });

  // overlay search
  $('.search_toggle').on('click', function (e) {
    e.preventDefault();
    $('.search_toggle').toggleClass('active');
    $('.overlay').toggleClass('open');
    setTimeout(function () {
      $('.search-form .form-control').focus();
    }, 400);
  });

  // product Slider
  $('.single-product-slider').slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      var image = $(slider.$slides[i]).data('image');
      return '<img class="img-fluid" src="' + image + '" alt="product-img">';
    }
  });


  // instafeed
  if (($('#instafeed').length) !== 0) {
    var userId = $('#instafeed').attr('data-userId');
    var accessToken = $('#instafeed').attr('data-accessToken');
    var userFeed = new Instafeed({
      get: 'user',
      userId: userId,
      resolution: 'low_resolution',
      accessToken: accessToken,
      limit: 6,
      template: '<div class="col-lg-2 col-md-3 col-sm-4 col-6 px-0 mb-4"><div class="instagram-post mx-2"><img class="img-fluid w-100" src="{{image}}" alt="instagram-image"><ul class="list-inline text-center"><li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="ti-heart mr-2"></i>{{likes}}</a></li><li class="list-inline-item"><a href="{{link}}" target="_blank" class="text-white"><i class="ti-comments mr-2"></i>{{comments}}</a></li></ul></div></div>'
    });
    userFeed.run();
  }






})(jQuery);

// gmap
function initMap() {
  var pos = {lat: 51.5172306, lng: -0.1050751};
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: pos,
          zoom: 16,
          styles: [
          {
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#f5f5f5"
            }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#616161"
            }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
            {
              "color": "#f5f5f5"
            }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#bdbdbd"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#eeeeee"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#757575"
            }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#e5e5e5"
            }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#9e9e9e"
            }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#ffffff"
            }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#757575"
            }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#dadada"
            }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#616161"
            }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#9e9e9e"
            }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#e5e5e5"
            }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#eeeeee"
            }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#c9c9c9"
            }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#9e9e9e"
            }
            ]
          }
          ]
        });
        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: pos,
          title: 'Talbot Hughes McKillop Llp, 6 Snow Hill, Farringdon, London, EC1A 2AY',

        });
      }


// sliders
$(document).ready(function(){ 

 $('.slider-revenue').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows: false,
  centerMode: false,
  variableWidth: false,
  responsive: [
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
  ]
});


 $('.slider-casinos-big').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: false,
  arrows: false,
  centerMode: false,
  variableWidth: false,
  responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
  ]
});

 $('[class*="slider-bonuses-all"]').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows: false,
  centerMode: false,
  variableWidth: false,
  responsive: [
  {
    breakpoint: 1300,
    settings: {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 650,
    settings: {
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,

    }
  },
  ]


});

 $('.slider-bonuses').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows: false,
  centerMode: false,
  responsive: [
  {
    breakpoint: 992,
    settings: {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,

    }
  },
  ]
});


 $('.slider-games').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  dots: false,
  arrows: false,
  centerMode: false,
  responsive: [
  {
    breakpoint: 992,
    settings: {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 468,
    settings: {
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,

    }
  },
  ]
});


 $('.slider-games-cat').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  dots: false,
  arrows: false,
  centerMode: false,
  responsive: [
  {
    breakpoint: 992,
    settings: {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 468,
    settings: {
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,

    }
  },
  ]

  // prevArrow: $(this).parent().find('.prev'),
  // nextArrow: $(this).parent().find('.next'),
});

 $('.slider-related').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  dots: false,
  arrows: false,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
    }
  },
  {
    breakpoint: 968,
    settings: {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 520,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  ]
});

 $('.slider-related-bonus').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows: false,
  responsive: [
  {
    breakpoint: 968,
    settings: {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 520,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  ]
});

 $('.slider-related-casinos').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: false,
  arrows: false,
  responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 520,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  ]
});

 $('[class*="slider-games-all"]').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  arrows: false,
  centerMode: false,
    //variableWidth: true,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 468,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    },
    ]

  });

 $('.prev').click(function(){
  $(this).parents('.slider-wrap').find('.slider-games, .slider-games-cat, [class*="slider-related"], .slider-bonuses, [class*="slider-casinos"], [class*="slider-games-all"], [class*="slider-bonuses-all"], .slider-revenue').slick('slickPrev');
})

 $('.next').click(function(){
  $(this).parents('.slider-wrap').find('.slider-games, .slider-games-cat, [class*="slider-related"], .slider-bonuses, [class*="slider-casinos"], [class*="slider-games-all"], [class*="slider-bonuses-all"], .slider-revenue').slick('slickNext');
})
// 

$('.show-more-toggle').click(function(){
  $(this).find('span').toggleClass('d-none');
  $(this).parent('.show-more-block').find('.show-more-less').toggleClass('d-none');
  $(this).parent('.show-more-block').find('.show-more-all').toggleClass('d-none');
});

$('#navbar').click(function(){
  $(this).find('.ti-close').toggleClass('d-none');
  $(this).find('.ti-menu').toggleClass('d-none');
});


document.addEventListener("DOMContentLoaded", function(event) {
  var shareItems = document.querySelectorAll('.social_share');
  var isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isAndroid = /(android)/i.test(navigator.userAgent);
  var options = {};
  if (isIOS || isAndroid) {
    options.link_telegram = 'tg://msg';
    options.link_whatsapp = 'whatsapp://send';
  }
  for (var i = 0; i < shareItems.length; i += 1) {
    shareItems[i].addEventListener('click', function share(e) {
      console.log(this);
      return JSShare.go(this, options);
    });
  }
});

});


$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $(".header").addClass("header-sticky")
  } else {
    $(".header").removeClass("header-sticky")
  }
});

