/*
	Created by mk7 mario kober
	2019_05_13
	Accordion Function

*/

function addObjectDetailAccordion() {

  $('.container360tour').insertBefore('[data-type="Header"]');

  $(document).on('click', '.mk7accItem h2, .mk7accItem h3', function() {
    $(this).parent().toggleClass('act');
  });

  $('.project-content-elements .textItem').addClass('mk7accItem');

  $('.twoColTextHeadline').parent().parent().addClass('mk7accItem');
  $('.twoColTextHeadline').click(function() {
    $(this).parent().parent().toggleClass('act');
  });

}

jQuery(document).ready(function($) {

  addObjectDetailAccordion();

  if ($('.salesforce-form').length) {
    $('.salesforce-form').submit(function() {
      if ($('input[name="website"]').val().length != 0) {
        return false;
      }
    });
  }

});

/*
	Created by mk7 mario kober
	2019_05_29
	ScrollDownButton
*/

/*
	----------------------------------------------------------------------------------------------------------------
	Add scroll-to-content-button
	---------------------------------------------------------------------------------------------------------------- */
function scrollDown() {

  var $btn = '<div class="scrollDown"><button><span></span></button></div>';

  $('.object-detail .stage-slider-wrapper').prepend($btn);

  $(document).on('click', '.scrollDown, .scrollArrow', function() {
    var $wH = $(window).height();
    $('html, body').animate({
      scrollTop: $wH - 0,
    }, 1500, 'easeInOutExpo');
  });
}

jQuery(document).ready(function($) {
  scrollDown();
});

/*
	Created by mk7 mario kober
	2019_05_13
	Accordion Function

*/

function objectDetailSliderImageType() {

  $('.object-detail .slide-wrapper').each(function() {
    var $this = $(this);
    var $srcText = $this.attr('style');

    if ($srcText.match(/(plan|grundriss)/)) {
      $this.addClass('scaleContain');
    }

  });

}

jQuery(document).ready(function($) {
  objectDetailSliderImageType();
});

/**
 * Created by pavel on 2/14/16.
 */

jQuery(document).ready(function($) {
  var isMobile = false; //initiate as false
  // device detection
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          navigator.userAgent.substr(0, 4))) isMobile = true;

  $(document).foundation();
  // Custom handler for the sticky nav
  var $navigationArea = $('.navigation-area');
  if ($navigationArea.length) {
    $navigationArea.on('sticky.zf.stuckto:top', function() {
      $(this).find('.top-bar').addClass('shrink');
    }).on('sticky.zf.unstuckfrom:top', function() {
      $(this).find('.top-bar').removeClass('shrink');
    });
  }

  // Handle custom accordion buttons
  var $accordionButton = $('a.accordion-button');
  if ($accordionButton.length) {
    $accordionButton.click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      var anchor = target.substring(target.indexOf('#') + 1);
      if (anchor.length) {
        var $accordionItem = $('#' + anchor);
        $accordionItem.slideToggle('slow');
      }
    });
  }

  if (!isMobile) {
    $('select').select2({
      containerCssClass: ':all:',
      dropdownCssClass: ':all:',
    });
  }

  // Lazy load images

  var $lazyImages = $('.lazy');
  $lazyImages.lazyLoadXT();

  if ($('.new-detail .history-back').length) {
    if (document.referrer == '' ||
        (document.referrer.indexOf(location.protocol + '//' + location.host) !==
            0) || (history.length <= 1)) {
      $('.history-back').hide();
    } else {
      $('.history-back a').click(function(e) {
        e.preventDefault();
        history.go(-1);
      });
    }
  }
  // load-more for figure elements
  $('.load-more').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    var amount = $this.attr('data-amount');
    var $hiddenItems = $this.parent().parent().find('.hide');
    if ($hiddenItems.length) {
      if (!amount) {
        amount = 1;
      }
      if ($hiddenItems.length < amount) {
        amount = $hiddenItems.length;
      }

      for (var i = 0; i < amount; i++) {
        var $item = $($hiddenItems[i]);
        $item.setVisible();
      }

      $hiddenItems = $this.parent().parent().find('.hide');

      if ($hiddenItems.length < 1) {
        $this.detach();
      }
    } else {
      $this.detach();
    }
    fixBottomBorrderForListItems();
  });

  if ($('.scrool-to-target').length) {
    $('.scrool-to-target').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      target = target.substring(target.indexOf('#'));

      var offset = 0;

      $('html, body').animate({
        scrollTop: $(target).offset().top - offset,
      }, 1000);
    });
  }

  if ($('.scrool-to-target-map').length) {
    $('.scrool-to-target-map').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      if ($(target).is(':visible') == false) {
        target = '#umgebungsplan';
      }

      target = target.substring(target.indexOf('#'));

      var offset = 0;

      $('html, body').animate({
        scrollTop: $(target).offset().top - offset,
      }, 1000);
    });
  }

  if ($('#contact-person').length) {
    $('#contact-person').contents().appendTo('.contact-person');
  }

  if ($('.hide-content').length) {
    $('.hide-content').click(function(e) {
      e.preventDefault();
      $(this).closest('.home-ce').hide('slide', {
        direction: 'right',
      }, 1000);
    });
  }

  if ($('.scroll-to-next').length) {
    var scrollTitle = $('.scroll-to-next').
        closest('section').
        next('section').
        find('h5:first').
        text();
    if (scrollTitle) {
      $('.scroll-to-next').show();
      $('.scroll-to-next .title').text(scrollTitle);
      $('.scroll-to-next a').
          attr('href', '#' + $('.scroll-to-next').
              closest('section').
              next('section').
              attr('id'));
    }
    $('.hide-content').click(function(e) {
      e.preventDefault();
      $(this).closest('.home-ce').hide('slide', {
        direction: 'right',
      }, 1000);
    });
  }

  fixBottomBorrderForListItems();

  if ($('.youtube-video-cover').length) {
    $('.youtube-video-cover').click(function() {
      var videoid = $(this).data('youtubevideo');
      videoid = videoid.split('v=')[1];
      var logo = $(this).closest('.ce-column').next().find('img.slider-logo');
      $('.youtube-video-container').css({
        'height': parseInt(($('.youtube-video-cover').height()) + 'px'),
      });
      $(this).hide();
      $(this).next('.youtube-video-container').show();
      $(this).nextAll().eq(1).hide();
      logo.hide();
      $('<iframe width="560" height="315" id="ik_player_iframe" class="youtube-video" frameborder="0" allowfullscreen></iframe>').
          attr('src', '//www.youtube.com/embed/' + videoid +
              '?rel=0&autoplay=1&enablejsapi=1').
          appendTo('.youtube-video-container');
    });
  }

  if ($('.video-content .video-cover').length) {
    $('.video-content .video-cover').click(function() {
      var videoContainer = $(this).next('.video-container');
      var height = parseInt($(this).height());
      var width = parseInt($(this).width());
      videoContainer.css({
        'height': height + 'px',
      });
      $(this).hide();
      videoContainer.show();
      $(this).nextAll().eq(1).hide();

      var videourl = $(this).data('video');
      videoContainer.html(convertMedia(videourl, width, height));
    });
  }

  if ($('.news-youtube-video-container').length) {
    if (newsItemYoputubeVideoUrl) {
      var videoid = newsItemYoputubeVideoUrl.match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
      if (videoid != null) {
        $('<iframe width="560" height="315" id="ik_player_iframe" class="youtube-video" frameborder="0" allowfullscreen></iframe>').
            attr('src', '//www.youtube.com/embed/' + videoid[1] +
                '?rel=0&autoplay=0&enablejsapi=1').
            appendTo('.news-youtube-video-container');
      } else {
        console.log('The youtube url is not valid.');
      }
    }
  }

  if ($('.no-visible-section').length) {
    $('.no-visible-section').closest('section').hide();
  }

  if ($(
      '.append-contactform .accordion-button, .append-contactform-element .accordion-button').length) {
    $('.append-contactform .accordion-button, .append-contactform-element .accordion-button').
        click(function() {
          $(this).toggleClass('active');
        });
  }

  if ($('footer .column.contact').length) {
    $('footer .column.contact h5 a').contents().unwrap();
  }

  if ($('.form-name').length && $('#powermail_field_betreff').length) {
    $('#powermail_field_betreff').
        val($('.form-name').text().replace(/\s\s+/g, ' '));
  }

  displayProjectOnpageNavigation();
  mainNavigationHandler();
  mobileNavigationHandler();

  initModalAjax();

  var $loading = $('#loading-div').hide();
  $(document).ajaxStart(function() {
    $loading.show();
  }).ajaxStop(function() {
    $loading.hide();
  });

  // FANCYBOX
  $('[data-fancybox]').fancybox({
    loop: true,
    keyboard: true,
    arrows: true,
    infobar: false,
    toolbar: true,
    smallBtn: false,
    animationEffect: 'zoom-in-out',
    animationDuration: 366,
    buttons: [
      'zoom',
      //"share",
      'slideShow',
      'fullScreen',
      //"download",
      'thumbs',
      'close',
    ],
    btnTpl: {
      // Arrows
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
          '<span>' +
          '</span>' +
          '</button>',

      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
          '<span>' +
          '</span>' +
          '</button>',
    },
  });
  let animatedClose = false;
  $('[data-fancybox-services]').fancybox({
    loop: true,
    keyboard: true,
    arrows: true,
    infobar: false,
    toolbar: true,
    smallBtn: false,
    animationEffect: false,
    animationDuration: 366,
    buttons: [],
    hideScrollbar: true,
    afterLoad: function(instance, current) {
      animatedClose = false;

      $('.fancybox-slide--html .custom-content-elements-wrapper').hide();
      $('.fancybox-is-open .custom-content-elements-wrapper').show('slide', {
        direction: 'down',
      }, 600);

      $('.fancybox-is-open .custom-content-elements-wrapper').
          scroll(function() {

            var wintop = $(this).scrollTop();
            var docheight = $(
                '.fancybox-is-open .custom-content-elements-wrapper .custom-content-elements').
                outerHeight();
            var winheight = $(window).height();
            var totalScroll = (wintop / (docheight - winheight)) * 100;

            $('.fancybox-is-open .progress-bar').
                css('width', totalScroll + '%');
          });
    },
    beforeClose: function(instance, current) {
      $('.fancybox-is-open .custom-content-elements-wrapper').hide('slide', {
        direction: 'down',
      }, 600);
      if (animatedClose) {
        return true;
      }
      setTimeout(function() {
        $.fancybox.close();
        animatedClose = true;
      }, 300);
      return false;
    },
  });

  if (window.location.hash) {
    var hash = window.location.hash;
    if ($(window.location.hash + ' a[data-fancybox-services]').length) {
      $(window.location.hash + ' a[data-fancybox-services]').
          first().
          trigger('click');
    }
  }

  $('#project-filter-form').submit(function(e) {
    formName = $(this).attr('name');
    formData = $(this).serialize();

    Cookies.set(formName, formData, {
      expires: 7,
    });
  });

  if ($('#buildingobject-filter-form').length) {

    /*	******************

    Remove filter city options withou results, MK7 Mario Kober 2020_03_04

    ******************
  */
    $('#filter-city option').each(function() {
      var optionValue = $(this).val();

      if ($('.buildingproject-list-project[data-city=\'' + optionValue +
          '\']').length) {
        //console.log('yo');
      } else {
        $(this).remove();
      }

    });

    if (Cookies.get('filter')) {
      formData = Cookies.get('filter');
      data = formData.split('&');

      $(data).each(function(element) {
        inputField = this.split('=');
        $('.object-filter[name="' + inputField[0] + '"]').
            val(decodeURIComponent(inputField[1])).
            trigger('change');
      });
      Cookies.remove('filter');
      filterObjects();
    }
  }

  $('.object-filter').change(function() {
    filterObjects();
  });

  $('#object-sort').change(function() {
    sortObjects($(this).val());
  });

  $('#filter-objects-button').click(function(e) {
    e.preventDefault();
    filterObjects();
  });

  $('.reset-filter').click(function(e) {
    $('#filter-objecttype').val(-1).trigger('change');
    $('#filter-city').val(-1).trigger('change');
    $('#filter-housetype').val(-1).trigger('change');
    $('#filter-livingarea').val('').trigger('change');
    $('#filter-roomsfrom').val('').trigger('change');
    $('#filter-roomsto').val('').trigger('change');

    e.preventDefault();
    filterObjects();
  });

  $('#c318 input.form-control, #c318 textarea.form-control').each(function() {
    checkForInput(this);
  });

  /* CONTACT BUTTON CHANGE START */
  var scrollingIsThrottled = false;
  var $allWhiteSections = $('section.primary-background');
  var $window = $(window);
  var $contactButton = $('.contact-open');

  $(window).scroll(function() {
    if (!scrollingIsThrottled) {
      scrollingIsThrottled = true;

      var $whiteSpaceMatchingExpression = $allWhiteSections.filter(function() {
        var $this = $(this);
        var top_of_element = $this.offset().top;
        var bottom_of_element = $this.offset().top + $this.outerHeight() / 2;
        var bottom_of_screen = $window.scrollTop() + $window.height() / 2;
        var top_of_screen = $window.scrollTop();

        return ((bottom_of_screen > top_of_element) &&
            (top_of_screen < bottom_of_element));
      });

      if ($whiteSpaceMatchingExpression.length) {
        $contactButton.addClass('alt-icon');
      } else {
        $contactButton.removeClass('alt-icon');
      }

      scrollingIsThrottled = false;
    }
  });
  /* CONTACT BUTTON CHANGE END */

});

function convertMedia(html, width, height) {
  var pattern1 = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
  var pattern2 = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;
  var pattern3 = /([-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?(?:jpg|jpeg|gif|png))/gi;

  if (pattern1.test(html)) {
    var replacement = '<iframe width="' + width + '" height="' + height +
        '" src="//player.vimeo.com/video/$1?autoplay=1&color=81004d&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    var html = html.replace(pattern1, replacement);
  }

  if (pattern2.test(html)) {
    var replacement = '<iframe width="' + width + '" height="' + height +
        '" src="//www.youtube.com/embed/$1?rel=0&autoplay=1&enablejsapi=1" class="video" frameborder="0" allowfullscreen></iframe>';
    var html = html.replace(pattern2, replacement);
  }

  if (pattern3.test(html)) {
    var replacement = '<a href="$1" target="_blank"><img class="sml" src="$1" /></a><br />';
    var html = html.replace(pattern3, replacement);
  }

  return $(html);
}

function mainNavigationHandler() {
  if ($('#main-menu .dropdown.menu > li.submenu-item.active').length) {
    var uid = $('#main-menu .dropdown.menu > li.submenu-item.active').
        attr('data-parent');
    $('#main-menu .dropdown.menu > li').not('[data-uid="' + uid + '"]').hide();
    $('#main-menu .dropdown.menu > li[data-parent="' + uid +
        '"], #main-menu .dropdown.menu > li.back').css('display', 'table-cell');
  }

  $('#main-menu .dropdown.menu .dropdown-submenu-parent').click(function(e) {
    e.preventDefault();
    var uid = $(this).attr('data-uid');
    $(this).toggleClass('active');
    if ($('#main-menu .dropdown.menu .dropdown-submenu-parent.active').length) {
      $('#main-menu .dropdown.menu > li').hide();
      $(this).show();
      $('#main-menu .dropdown.menu > li[data-parent="' + uid +
          '"], #main-menu .dropdown.menu > li.back').
          css('display', 'table-cell');
    } else {
      $('#main-menu .dropdown.menu > li.submenu-item').hide();
      $('#main-menu .dropdown.menu > li').not('.submenu-item').show();
    }
  });
  $('#main-menu .dropdown.menu li.back').click(function(e) {
    e.preventDefault();
    $('#main-menu .dropdown.menu > li.submenu-item').hide();
    $('#main-menu .dropdown.menu > li').not('.submenu-item').show();
    $('#main-menu .dropdown.menu .dropdown-submenu-parent').
        removeClass('active');
  });
}

function mobileNavigationHandler() {
  $('#mobile-menu .submenu.is-drilldown-submenu').css({
    'height': ($('.off-canvas-wrapper-inner').height() + 'px'),
  });
  $('.mobile-menu-wrapper .menu-icon').click(function(e) {
    $(this).toggleClass('active');
  });

}

function displayProjectOnpageNavigation() {

  $(document).on('scroll', onScrollOnpageNavigation);

  $('[data-onpagenav]').each(function() {
    //Create the link to remove the item beforehand, and add the onclick event handler.
    var id = $(this).attr('id');
    var title = $(this).attr('data-onpagenav');
    var offset = 150;
    if (id == 'video') {
      offset = 75;
    }
    var navLink = $(
        '<a class="onpagenav-item" href=\'#' + id + '\'> ' + title + '</a>').
        click(function(e) {
          e.preventDefault();

          $('html, body').animate({
            scrollTop: $('#' + id).offset().top - offset,
          }, 1000, 'swing', function() {
            //window.location.hash = $('#' + id);
            $(document).on('scroll', onScrollOnpageNavigation);
          });
        });
    $('#sticky-navigation').append(navLink);
  });

}

function onScrollOnpageNavigation() {
  var scrollPos = $(document).scrollTop();
  $('.onpagenav-item').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr('href'));
    if (refElement.attr('data-section') == 1) {
      refElement = refElement.closest('section');
    }
    if (refElement.position().top <= (scrollPos + 160) &&
        refElement.position().top + refElement.height() > (scrollPos + 160)) {
      $('.onpagenav-item').removeClass('active');
      currLink.addClass('active');
    } else {
      currLink.removeClass('active');
    }
  });
}

$(function() {
  $(window).on('scroll', function() {
    var windowHeight = $(window).height(),
        gridTop = windowHeight * .0001,
        gridBottom = windowHeight * .10;

    $('.home-ce').closest('section').each(function() {

      var thisTop = $(this).offset().top - $(window).scrollTop();
      if ((thisTop - gridTop) < 0 && (thisTop + gridBottom) > 0) {
        $('.home-ce').show('slide', {
          direction: 'right',
        }, 1000);
        $(window).off('scroll');
      } else {
        //$('.home-ce').hide("slide", {direction: "right"}, 1000);
      }
    });

  });
  $(window).trigger('scroll');

});

$(function() {
  $(window).scroll(stickyNavigationRelocate);
  stickyNavigationRelocate();
});

function stickyNavigationRelocate() {
  if ($(window).width() > 640) {
    if ($('#sticky-navigation-anchor').length) {
      var windowTop = $(window).scrollTop();
      var divTop = $('#sticky-navigation-anchor').offset().top - 60;
      if (windowTop > divTop) {
        $('#sticky-navigation').addClass('stick');
        $('#sticky-navigation').css('width', $('section.white').outerWidth());
        $('#sticky-navigation-anchor').
            height($('#sticky-navigation').outerHeight());
      } else {
        $('#sticky-navigation').removeClass('stick');
        $('#sticky-navigation').css('width', 'auto');
        $('#sticky-navigation-anchor').height(0);
      }
    }
  }
}

function fixBottomBorrderForListItems() {
  var $items = $('.table-list > .medium-6').not('.hide');
  if ($items.length) {
    $items.removeClass('no-bottom-border');
    if (isEven($items.length)) {
      $items.slice(-2).addClass('no-bottom-border');
    } else {
      $items.slice(-1).addClass('no-bottom-border');
    }
  }
}

function isEven(n) {
  return n % 2 == 0;
}

(function($) {
  $.fn.setVisible = function() {
    var $this = $(this);
    $this.removeClass('hide');

    if ($this.hasClass('slick-slider')) {
      $this.slick('setPosition');
    }

    if ($this.attr('data-equalizer')) {
      Foundation.reInit($this);
    }
  };

  $.fn.lazyInterchange = function() {
    var selectors = this.each(function() {
      if ($(this).attr('data-src')) {
        $(this).attr('data-interchange', $(this).attr('data-src'));
        $(this).removeAttr('data-src');
        $(this).foundation();
        $(document).resize();
      }
    });
    return selectors;
  };

}(jQuery));

/* Lazy Load XT customization */
(function($, dpr) {
  //  if (dpr>1)
  //    $.lazyLoadXT.srcAttr = 'data-src-' + (dpr > 2 ? '3x' : (dpr > 1.5 ? '2x' : '1.5x'));
  $.extend($.lazyLoadXT, {
    edgeY: 200,
    srcAttr: 'data-src',
    onshow: function() {
      $(this).addClass('lazy-hidden');
      $(this).lazyInterchange();
      var $collapse = $(this).closest('.equalized');

      if ($collapse.length) {
        Foundation.reInit($collapse);
      }
      if ($(this).hasClass('background-image') || $(this).hasClass('pattern')) {
        $(this).removeClass('lazy-hidden');
        $(this).addClass('lazy-loaded');
      }
    },
    onload: function() {
      $(this).removeClass('lazy-hidden');
      $(this).addClass('lazy-loaded');

      var $slick = $(this).closest('.slick-content');
      if ($slick.length) {
        $slick.get(0).slick.setPosition();
      }

    },
  });
})(jQuery, window.devicePixelRatio || 1);

function initAjaxForms() {
  $('form[data-ajaxuri]').each(function() {
    var form = $(this);
    var form_id = '#' + form.attr('id');
    var ajaxuri = form.attr('data-ajaxuri');
    var wrapper_id = form.attr('id').replace('contactform-', '');
    var curSite = window.location.href;
    var hiddenProjectField = $('input[id$=\'-current-url\']');

    var options = {
      //target: form_id,
      url: ajaxuri,
      success: function(data, textStatus, jqXHR) {
        var out = $(data).find('#c' + wrapper_id);
        $('#c' + wrapper_id).
            html('<div class="contact-message-wrapper">' + out.html() +
                '</div>');

        initAjaxForms();
      },
    };
    form.ajaxForm(options);
    $('#contact-form-wrapper input.form-control, #contact-form-wrapper textarea.form-control').
        each(function() {
          checkForInput(this);
        });

    hiddenProjectField.val(curSite);
    console.log('hidden filled with' + curSite);
  });
}

function initModalAjax() {
  $('#offCanvasRight').on('opened.zf.offcanvas', function(e) {
    // reset previously set content
    var modal = $(this);
    var button = $(event.relatedTarget); // Button that triggered the modal
  });

  function loadContent(trigger) {
    $(trigger.data('target')).load(
        trigger.attr('data-ajaxuri'),
        function() {
          // other functions to call after the content has been loaded
          // ajaxify the just loaded form
          initAjaxForms();
        },
    );
  }

  $('body').on('click', '.contact-open', function(e) {
    loadContent($(this));
    e.preventDefault();
  });
}

function checkForInput(element) {
  const $label = $(element).closest('.form-group').find('label');
  // Check this on load too
  if ($(element).val().length > 0) {
    $label.css('visibility', 'visible');
  } else {
    $label.css('visibility', 'hidden');
  }

  const placeholder = $(element).attr('placeholder');

  $(element).on('focusin', function() {
    $label.css('visibility', 'visible');
    $(element).attr('placeholder', '');
  });

  $(element).on('focusout', function() {
    if ($(element).val().length > 0) {
      $label.css('visibility', 'visible');
      $(element).attr('placeholder', placeholder);
    } else {
      $label.css('visibility', 'hidden');
      $(element).attr('placeholder', placeholder);
    }
  });
}

function sortObjects(sortString) {
  var sortParameters = sortString.split('-');
  var sortParameter = sortParameters[0];
  var order = sortParameters[1];
  var objectList = $('.object-item');

  objectList.sort(function(a, b) {
    if (order == 'asc') {
      if (isNaN(a)) {
        var tA = $(a).data(sortParameter);
        var tB = $(b).data(sortParameter);
        if (tA < tB) {
          return -1;
        }
        if (tA > tB) {
          return 1;
        }
        return 0;
      } else {
        return $(a).data(sortParameter) - $(b).data(sortParameter);
      }
    } else {
      if (isNaN(a)) {
        var tA = $(a).data(sortParameter);
        var tB = $(b).data(sortParameter);
        if (tB < tA) {
          return -1;
        }
        if (tB > tA) {
          return 1;
        }
        return 0;

      } else {
        return $(b).data(sortParameter) - $(a).data(sortParameter);
      }
    }
  });

  $('.object-list').html(objectList);
}

function filterObjects() {
  var filterFields = {
    'objecttype': '==',
    'city': '==',
    'housetype': '==',
    'livingarea': '>=',
    'roomsfrom': '>=',
    'roomsto': '<=',
  };
  var operators = {
    '==': function(a, b) {
      return a == b;
    },
    '<=': function(a, b) {
      return a <= b;
    },
    '>=': function(a, b) {
      return a >= b;
    },
  };

  $('.object-item').hide().filter(function() {
    //var conditions = [true];
    var matchedElement = true;
    for (var field in filterFields) {
      // -1 is default empty value, so we do not use this into accoutn
      if ($('#filter-' + field).val() && $('#filter-' + field).val() != '-1') {
        //conditions.push(operators[filterFields[field]]($(this).data(field), $('#filter-' + field).val()));
        if (!(operators[filterFields[field]]($(this).data(field),
            $('#filter-' + field).val()))) {
          matchedElement = false;
        }
      }
    }

    //return conditions.every(element => element === true);
    return matchedElement;
  }).show();
}

/*
	Just a comment to check bitbucket functionality
*/
jQuery(document).ready(function($) {

  var isMobile = false; //initiate as false
  // device detection
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          navigator.userAgent.substr(0, 4))) isMobile = true;

  var $sliderSection = $('.slider-section');
  if ($sliderSection.length) {

    var firstCellOffset = parseFloat(
        $('.top.grid-container > .grid-x > .cell:nth-child(1)').
            css('margin-left'));

    var padding = ($('.top.grid-container').innerWidth() -
        $('.top.grid-container').width()) / 2;
    var margin = ($('.top.grid-container').outerWidth(true) -
        $('.top.grid-container').outerWidth()) / 2;

    padding = firstCellOffset;

    $('.slider-section .slide-description, .slider-section .slide-title').
        css('margin-left', padding + 'px');
    $('.slider-section .slide-description, .slider-section .slide-title').
        css('padding-left', margin + 'px');

    $(window).on('resize', function() {
      var firstCellOffset = parseFloat(
          $('.top.grid-container > .grid-x > .cell:nth-child(1)').
              css('margin-left'));

      var padding = ($('.top.grid-container').innerWidth() -
          $('.top.grid-container').width()) / 2;
      var margin = ($('.top.grid-container').outerWidth(true) -
          $('.top.grid-container').outerWidth()) / 2;

      padding = firstCellOffset;

      $('.slider-section .slide-description, .slider-section .slide-title').
          css('margin-left', padding + 'px');
      $('.slider-section .slide-description, .slider-section .slide-title').
          css('padding-left', margin + 'px');
    });

    var navigationContainer = $sliderSection.attr('data-navigation-container');
    $sliderSection.slick({
      speed: 1200,
      autoplaySpeed: 5000,
      autoplay: true,
      appendArrows: navigationContainer,
      appendDots: navigationContainer,
      dots: true,
      arrows: true,
      pauseOnHover: true,
      pauseOnFocus: true,
      pauseOnDotsHover: true,
      lazyLoad: 'ondemand',
      infinite: true,
    });

    if (isMobile) {
      $('.slide-title-wrapper .slide-title h3').click(function(e) {
        e.preventDefault();
        $(this).closest('.slide-title-wrapper').hide('slide', {
          direction: 'left',
        }, 500, function() {
          $(this).
              closest('.slide-title-wrapper').
              prev('.slide-description-wrapper').
              show('slide', {
                direction: 'left',
              }, 500);
        });
        $sliderSection.slick('slickPause');
      });
      $('.close-slide-description').click(function(e) {
        e.preventDefault();
        $(this).closest('.slide-description-wrapper').hide('slide', {
          direction: 'left',
        }, 500, function() {
          $(this).nextAll('.slide-title-wrapper').first().show('slide', {
            direction: 'left',
          }, 500);
        });
        $sliderSection.slick('slickPlay');
      });
    } else {

      $('.slide-title-wrapper .slide-title h3').hover(function(e) {
        e.preventDefault();
        $(this).closest('.slide-title-wrapper').hide('slide', {
          direction: 'left',
        }, 500, function() {
          $(this).
              closest('.slide-title-wrapper').
              prev('.slide-description-wrapper').
              show('slide', {
                direction: 'left',
              }, 500);
        });
        $sliderSection.slick('slickPause');
      });
      $('.close-slide-description').click(function(e) {
        e.preventDefault();
        $(this).closest('.slide-description-wrapper').hide('slide', {
          direction: 'left',
        }, 500, function() {
          $(this).nextAll('.slide-title-wrapper').first().show('slide', {
            direction: 'left',
          }, 500);
        });
        $sliderSection.slick('slickPlay');
      });
    }
    // On before slide change
    $sliderSection.on('beforeChange',
        function(event, slick, currentSlide, nextSlide) {
          $sliderSection.find('.slide-description-wrapper').hide();
          $sliderSection.find('.slide-title-wrapper').show();
        });

  }

  var $sliderContent = $('.slider-content');
  if ($sliderContent.length) {
    $.each($sliderContent, function(i, slider) {
      var navigationContainer = $(this).attr('data-navigation-container');
      var dots = true;
      if ($(this).attr('data-dots') == 0) {
        dots = false;
      }
      var autoplay = $(this).attr('data-autoplay') == '1' || false;
      $(this).slick({
        speed: 2000,
        autoplaySpeed: 5000,
        autoplay: autoplay,
        appendArrows: navigationContainer,
        appendDots: navigationContainer,
        dots: dots,
        arrows: true,
        lazyLoad: 'ondemand',
        infinite: true,
      });
    });

  }

  // Slick for textmedia picture gallery
  var $slick = $('.slick');

  if ($slick.length) {

    var $gallery = $slick.find('.ce-gallery');

    if ($gallery.length) {
      var variableWidth = $slick.attr('data-variable-width') == '1' || false;
      var arrows = $slick.attr('data-arrows') == '0' || true;
      var autoplay = $slick.attr('data-autoplay') == '1' || false;
      var adaptiveHeight = $slick.attr('data-adaptive-height') == '1' || false;
      var slidesToShow = parseInt($slick.attr('data-slides-to-show')) || 1;
      var slidesToScroll = parseInt($slick.attr('data-slides-to-scroll')) || 1;
      var speed = parseInt($slick.attr('data-speed')) || 2000;
      $gallery.slick({
        autoplaySpeed: 5000,
        dots: false,
        variableWidth: variableWidth,
        speed: speed,
        arrows: arrows,
        autoplay: autoplay,
        adaptiveHeight: adaptiveHeight,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
      });
    }
  }

  // Custom button navigation for the slider
  var $navigation = $('.slider-navigation');
  if ($navigation.length) {
    var sliderFor = $navigation.attr('data-slider');
    var $destinationSlider = $('#' + sliderFor);

    $navigation.find('a').click(function(e) {
      if ($destinationSlider.length) {
        $destinationSlider[0].slick.slickGoTo(
            parseInt($(this).attr('data-index')));
      }
    });

  }

  // Content slider (from gridelements layout)
  var $slickContent = $('.slick-content');
  if ($slickContent.length) {

    $slickContent.each(function() {
      var variableWidth = $(this).attr('data-variable-width') == '1' || false;
      var arrows = $(this).attr('data-arrows') == '1' || false;
      var autoplay = $(this).attr('data-autoplay') == '1' || false;
      var adaptiveHeight = $(this).attr('data-adaptive-height') == '1' || false;
      var slidesToShow = parseInt($(this).attr('data-slides-to-show')) || 1;
      var slidesToScroll = parseInt($(this).attr('data-slides-to-scroll')) || 1;
      var speed = parseInt($(this).attr('data-speed')) || 300;
      var height = $slickContent.height();
      var centerMode = $(this).attr('data-centermode') == '1' || false;
      var centerPadding = 0;
      var dots = $(this).attr('data-dots') == '1' || false;
      var responsive = $(this).attr('data-responsive') ? JSON.parse(
          $(this).attr('data-responsive')) : false;

      if ($(this).attr('data-prevarrow')) {
        var prevArrow = '<button type="button" class="slick-prev in-text">' +
            $(this).attr('data-prevarrow') + '</button>';
      }
      if ($(this).attr('data-nextarrow')) {
        var nextArrow = '<button type="button" class="slick-next in-text">' +
            $(this).attr('data-nextarrow') + '</button>';
      }

      var $splittedText = $(this).find('.text-split');

      if ($splittedText.length &&
          !($splittedText.hasClass('no-split-mobile') && $(window).width() <
              640)) {
        // Here we'll use the modified columnizer jQuery plugin to split a textmedia container (of Layout "Splitted text") into separated slick slides
        $splittedText.columnize({
          width: 400,
          height: 450,
          lastNeverTallest: true,
          doneFunc: function() {
            $splittedText.children().reverse().each(function() {

              if ($(this).html() != '') {
                $splittedText.after($(this));
              }
            });
            //$splittedText.children().insertAfter($splittedText);
            $splittedText.remove();
          },
        });
      }

      $(this).slick({
        infinite: true,
        variableWidth: variableWidth,
        speed: speed,
        arrows: arrows,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        dots: dots,
        autoplay: autoplay,
        adaptiveHeight: adaptiveHeight,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        centerMode: centerMode,
        centerPadding: centerPadding,
        responsive: responsive,
      });

    });
  }
});

jQuery.fn.reverse = [].reverse;
