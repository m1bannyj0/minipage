// ==================================================
// fancyBox v3.4.0
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
!function(t, e, n, o) {
  'use strict';

  function a(t, e) {
    var o, a, i, s = [],
        r = 0;
    t && t.isDefaultPrevented() ||
    (t.preventDefault(), e = e || {}, t && t.data &&
    (e = p(t.data.options, e)), o = e.$target ||
        n(t.currentTarget).trigger('blur'), i = n.fancybox.getInstance(), i &&
    i.$trigger && i.$trigger.is(o) ||
    (e.selector ? s = n(e.selector) : (a = o.attr('data-fancybox') || '', a
        ? (s = t.data ? t.data.items : [], s = s.length ? s.filter(
            '[data-fancybox="' + a + '"]') : n('[data-fancybox="' + a + '"]'))
        : s = [o]), r = n(s).index(o), r < 0 && (r = 0), i = n.fancybox.open(s,
        e, r), i.$trigger = o));
  }

  if (t.console = t.console || {
    info: function(t) {},
  }, n) {
    if (n.fn.fancybox) return void console.info('fancyBox already initialized');
    var i = {
          closeExisting: !1,
          loop: !1,
          gutter: 50,
          keyboard: !0,
          arrows: !0,
          infobar: !0,
          smallBtn: 'auto',
          toolbar: 'auto',
          buttons: ['zoom', 'thumbs', 'close'],
          idleTime: 3,
          protect: !1,
          modal: !1,
          image: {
            preload: !1,
          },
          ajax: {
            settings: {
              data: {
                fancybox: !0,
              },
            },
          },
          iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
            preload: !0,
            css: {},
            attr: {
              scrolling: 'auto',
            },
          },
          video: {
            tpl: '<video class="fancybox-video" controls controlsList="nodownload"><source src="{{src}}" type="{{format}}" />Your browser doesn\'t support HTML5 video</video>',
            format: '',
            autoStart: !0,
          },
          defaultType: 'image',
          animationEffect: 'zoom',
          animationDuration: 366,
          zoomOpacity: 'auto',
          transitionEffect: 'fade',
          transitionDuration: 366,
          slideClass: '',
          baseClass: '',
          baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
          spinnerTpl: '<div class="fancybox-loading"></div>',
          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
          btnTpl: {
            download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
            arrowLeft: '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></svg></a>',
            arrowRight: '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></a>',
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
          },
          parentEl: 'body',
          hideScrollbar: !0,
          autoFocus: !0,
          backFocus: !0,
          trapFocus: !0,
          fullScreen: {
            autoStart: !1,
          },
          touch: {
            vertical: !0,
            momentum: !0,
          },
          hash: null,
          media: {},
          slideShow: {
            autoStart: !1,
            speed: 3e3,
          },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: '.fancybox-container',
            axis: 'y',
          },
          wheel: 'auto',
          onInit: n.noop,
          beforeLoad: n.noop,
          afterLoad: n.noop,
          beforeShow: n.noop,
          afterShow: n.noop,
          beforeClose: n.noop,
          afterClose: n.noop,
          onActivate: n.noop,
          onDeactivate: n.noop,
          clickContent: function(t, e) {
            return 'image' === t.type && 'zoom';
          },
          clickSlide: 'close',
          clickOutside: 'close',
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            idleTime: !1,
            clickContent: function(t, e) {
              return 'image' === t.type && 'toggleControls';
            },
            clickSlide: function(t, e) {
              return 'image' === t.type ? 'toggleControls' : 'close';
            },
            dblclickContent: function(t, e) {
              return 'image' === t.type && 'zoom';
            },
            dblclickSlide: function(t, e) {
              return 'image' === t.type && 'zoom';
            },
          },
          lang: 'en',
          i18n: {
            en: {
              CLOSE: 'Close',
              NEXT: 'Next',
              PREV: 'Previous',
              ERROR: 'The requested content cannot be loaded. <br/> Please try again later.',
              PLAY_START: 'Start slideshow',
              PLAY_STOP: 'Pause slideshow',
              FULL_SCREEN: 'Full screen',
              THUMBS: 'Thumbnails',
              DOWNLOAD: 'Download',
              SHARE: 'Share',
              ZOOM: 'Zoom',
            },
            de: {
              CLOSE: 'Schliessen',
              NEXT: 'Weiter',
              PREV: 'Zurück',
              ERROR: 'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',
              PLAY_START: 'Diaschau starten',
              PLAY_STOP: 'Diaschau beenden',
              FULL_SCREEN: 'Vollbild',
              THUMBS: 'Vorschaubilder',
              DOWNLOAD: 'Herunterladen',
              SHARE: 'Teilen',
              ZOOM: 'Maßstab',
            },
          },
        },
        s = n(t),
        r = n(e),
        c = 0,
        l = function(t) {
          return t && t.hasOwnProperty && t instanceof n;
        },
        u = function() {
          return t.requestAnimationFrame || t.webkitRequestAnimationFrame ||
              t.mozRequestAnimationFrame || t.oRequestAnimationFrame ||
              function(e) {
                return t.setTimeout(e, 1e3 / 60);
              };
        }(),
        d = function() {
          var t, n = e.createElement('fakeelement'),
              a = {
                transition: 'transitionend',
                OTransition: 'oTransitionEnd',
                MozTransition: 'transitionend',
                WebkitTransition: 'webkitTransitionEnd',
              };
          for (t in a)
            if (n.style[t] !== o) return a[t];
          return 'transitionend';
        }(),
        f = function(t) {
          return t && t.length && t[0].offsetHeight;
        },
        p = function(t, e) {
          var o = n.extend(!0, {}, t, e);
          return n.each(e, function(t, e) {
            n.isArray(e) && (o[t] = e);
          }), o;
        },
        h = function(t, e, o) {
          var a = this;
          a.opts = p({
            index: o,
          }, n.fancybox.defaults), n.isPlainObject(e) &&
          (a.opts = p(a.opts, e)), n.fancybox.isMobile &&
          (a.opts = p(a.opts, a.opts.mobile)), a.id = a.opts.id ||
              ++c, a.currIndex = parseInt(a.opts.index, 10) ||
              0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = !0, a.group = [], a.slides = {}, a.addContent(
              t), a.group.length && a.init();
        };
    n.extend(h.prototype, {
      init: function() {
        var a, i, s, r = this,
            c = r.group[r.currIndex],
            l = c.opts,
            u = n.fancybox.scrollbarWidth;
        l.closeExisting && n.fancybox.close(!0), n('body').
            addClass('fancybox-active'), !n.fancybox.getInstance() &&
        l.hideScrollbar !== !1 && !n.fancybox.isMobile && e.body.scrollHeight >
        t.innerHeight && (u === o &&
        (a = n('<div style="width:100px;height:100px;overflow:scroll;" />').
            appendTo('body'), u = n.fancybox.scrollbarWidth = a[0].offsetWidth -
            a[0].clientWidth, a.remove()), n('head').
            append(
                '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' +
                u + 'px; }</style>'), n('body').
            addClass('compensate-for-scrollbar')), s = '', n.each(l.buttons,
            function(t, e) {
              s += l.btnTpl[e] || '';
            }), i = n(r.translate(r, l.baseTpl.replace('{{buttons}}', s).
            replace('{{arrows}}', l.btnTpl.arrowLeft + l.btnTpl.arrowRight))).
            attr('id', 'fancybox-container-' + r.id).
            addClass('fancybox-is-hidden').
            addClass(l.baseClass).
            data('FancyBox', r).
            appendTo(l.parentEl), r.$refs = {
          container: i,
        }, [
          'bg',
          'inner',
          'infobar',
          'toolbar',
          'stage',
          'caption',
          'navigation'].forEach(function(t) {
          r.$refs[t] = i.find('.fancybox-' + t);
        }), r.trigger('onInit'), r.activate(), r.jumpTo(r.currIndex);
      },
      translate: function(t, e) {
        var n = t.opts.i18n[t.opts.lang];
        return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
          var a = n[e];
          return a === o ? t : a;
        });
      },
      addContent: function(t) {
        var e, a = this,
            i = n.makeArray(t);
        n.each(i, function(t, e) {
          var i, s, r, c, l, u = {},
              d = {};
          n.isPlainObject(e) ? (u = e, d = e.opts || e) : 'object' ===
          n.type(e) && n(e).length
              ? (i = n(e), d = i.data() || {}, d = n.extend(!0, {}, d,
                  d.options), d.$orig = i, u.src = a.opts.src || d.src ||
                  i.attr('href'), u.type || u.src ||
              (u.type = 'inline', u.src = e))
              : u = {
                type: 'html',
                src: e + '',
              }, u.opts = n.extend(!0, {}, a.opts, d), n.isArray(d.buttons) &&
          (u.opts.buttons = d.buttons), n.fancybox.isMobile && u.opts.mobile &&
          (u.opts = p(u.opts, u.opts.mobile)), s = u.type ||
              u.opts.type, c = u.src || '', !s && c &&
          ((r = c.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
              ? (s = 'video', u.opts.video.format ||
              (u.opts.video.format = 'video/' +
                  ('ogv' === r[1] ? 'ogg' : r[1])))
              : c.match(
                  /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)
                  ? s = 'image'
                  : c.match(/\.(pdf)((\?|#).*)?$/i) ? s = 'iframe' : '#' ===
                      c.charAt(0) && (s = 'inline')), s
              ? u.type = s
              : a.trigger('objectNeedsType', u), u.contentType ||
          (u.contentType = n.inArray(u.type, ['html', 'inline', 'ajax']) > -1
              ? 'html'
              : u.type), u.index = a.group.length, 'auto' == u.opts.smallBtn &&
          (u.opts.smallBtn = n.inArray(u.type, ['html', 'inline', 'ajax']) >
              -1), 'auto' === u.opts.toolbar &&
          (u.opts.toolbar = !u.opts.smallBtn), u.opts.$trigger && u.index ===
          a.opts.index && (u.opts.$thumb = u.opts.$trigger.find(
              'img:first'), u.opts.$thumb.length &&
          (u.opts.$orig = u.opts.$trigger)), u.opts.$thumb &&
          u.opts.$thumb.length || !u.opts.$orig ||
          (u.opts.$thumb = u.opts.$orig.find('img:first')), 'function' ===
          n.type(u.opts.caption) &&
          (u.opts.caption = u.opts.caption.apply(e, [a, u])), 'function' ===
          n.type(a.opts.caption) && (u.opts.caption = a.opts.caption.apply(e,
              [a, u])), u.opts.caption instanceof n ||
          (u.opts.caption = u.opts.caption === o ? '' : u.opts.caption +
              ''), 'ajax' === u.type && (l = c.split(/\s+/, 2), l.length > 1 &&
          (u.src = l.shift(), u.opts.filter = l.shift())), u.opts.modal &&
          (u.opts = n.extend(!0, u.opts, {
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            keyboard: 0,
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            clickContent: !1,
            clickSlide: !1,
            clickOutside: !1,
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
          })), a.group.push(u);
        }), Object.keys(a.slides).length &&
        (a.updateControls(), e = a.Thumbs, e && e.isActive &&
        (e.create(), e.focus()));
      },
      addEvents: function() {
        var o = this;
        o.removeEvents(), o.$refs.container.on('click.fb-close',
            '[data-fancybox-close]', function(t) {
              t.stopPropagation(), t.preventDefault(), o.close(t);
            }).
            on('touchstart.fb-prev click.fb-prev', '[data-fancybox-prev]',
                function(t) {
                  t.stopPropagation(), t.preventDefault(), o.previous();
                }).
            on('touchstart.fb-next click.fb-next', '[data-fancybox-next]',
                function(t) {
                  t.stopPropagation(), t.preventDefault(), o.next();
                }).
            on('click.fb', '[data-fancybox-zoom]', function(t) {
              o[o.isScaledDown() ? 'scaleToActual' : 'scaleToFit']();
            }), s.on('orientationchange.fb resize.fb', function(t) {
          t && t.originalEvent && 'resize' === t.originalEvent.type ? u(
              function() {
                o.update();
              }) : (o.current && 'iframe' === o.current.type &&
          o.$refs.stage.hide(), setTimeout(function() {
            o.$refs.stage.show(), o.update();
          }, n.fancybox.isMobile ? 600 : 250));
        }), r.on('focusin.fb', function(t) {
          var o = n.fancybox ? n.fancybox.getInstance() : null;
          o.isClosing || !o.current || !o.current.opts.trapFocus ||
          n(t.target).hasClass('fancybox-container') || n(t.target).is(e) ||
          o && 'fixed' !== n(t.target).css('position') &&
          !o.$refs.container.has(t.target).length &&
          (t.stopPropagation(), o.focus());
        }), r.on('keydown.fb', function(t) {
          var e = o.current,
              a = t.keyCode || t.which;
          if (e && e.opts.keyboard && !(t.ctrlKey || t.altKey || t.shiftKey ||
              n(t.target).is('input') ||
              n(t.target).is('textarea'))) return 8 === a || 27 === a
              ? (t.preventDefault(), void o.close(t))
              : 37 === a || 38 === a
                  ? (t.preventDefault(), void o.previous())
                  : 39 === a || 40 === a
                      ? (t.preventDefault(), void o.next())
                      : void o.trigger('afterKeydown', t, a);
        }), o.group[o.currIndex].opts.idleTime &&
        (o.idleSecondsCounter = 0, r.on(
            'mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle',
            function(t) {
              o.idleSecondsCounter = 0, o.isIdle &&
              o.showControls(), o.isIdle = !1;
            }), o.idleInterval = t.setInterval(function() {
          o.idleSecondsCounter++, o.idleSecondsCounter >=
          o.group[o.currIndex].opts.idleTime && !o.isDragging &&
          (o.isIdle = !0, o.idleSecondsCounter = 0, o.hideControls());
        }, 1e3));
      },
      removeEvents: function() {
        var e = this;
        s.off('orientationchange.fb resize.fb'), r.off(
            'focusin.fb keydown.fb .fb-idle'), this.$refs.container.off(
            '.fb-close .fb-prev .fb-next'), e.idleInterval &&
        (t.clearInterval(e.idleInterval), e.idleInterval = null);
      },
      previous: function(t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function(t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function(t, e) {
        var a, i, s, r, c, l, u, d = this,
            p = d.group.length;
        if (!(d.isDragging || d.isClosing || d.isAnimating && d.firstRun)) {
          if (t = parseInt(t, 10), s = d.current
              ? d.current.opts.loop
              : d.opts.loop, !s && (t < 0 || t >= p)) return !1;
          if (a = d.firstRun = !Object.keys(d.slides).length, !(p < 2 && !a &&
              d.isDragging)) {
            if (c = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, r = d.createSlide(
                t), p > 1 &&
            ((s || r.index > 0) && d.createSlide(t - 1), (s || r.index < p -
                1) && d.createSlide(t +
                1)), d.current = r, d.currIndex = r.index, d.currPos = r.pos, d.trigger(
                'beforeShow', a), d.updateControls(), i = d.isMoved(
                r), r.forcedDuration = o, n.isNumeric(e)
                ? r.forcedDuration = e
                : e = r.opts[a
                    ? 'animationDuration'
                    : 'transitionDuration'], e = parseInt(e,
                10), a) return r.opts.animationEffect && e &&
            d.$refs.container.css('transition-duration',
                e + 'ms'), d.$refs.container.removeClass(
                'fancybox-is-hidden'), f(
                d.$refs.container), d.$refs.container.addClass(
                'fancybox-is-open'), f(d.$refs.container), r.$slide.addClass(
                'fancybox-slide--previous'), d.loadSlide(
                r), r.$slide.removeClass('fancybox-slide--previous').
                addClass('fancybox-slide--current'), void d.preload('image');
            n.each(d.slides, function(t, e) {
              n.fancybox.stop(e.$slide, !0), e.$slide.removeClass(
                  'fancybox-animated').removeClass(function(t, e) {
                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(' ');
              });
            }), r.$slide.removeClass(
                'fancybox-slide--next fancybox-slide--previous').
                addClass('fancybox-slide--current'), i ? (l = Math.round(
                r.$slide.width()), n.each(d.slides, function(t, o) {
              var a = o.pos - r.pos;
              n.fancybox.animate(o.$slide, {
                top: 0,
                left: a * l + a * o.opts.gutter,
              }, e, function() {
                o.$slide.removeAttr('style').
                    removeClass(
                        'fancybox-slide--next fancybox-slide--previous'), o.pos ===
                d.currPos && d.complete();
              });
            })) : d.$refs.stage.children().removeAttr('style'), r.isLoaded
                ? d.revealContent(r)
                : d.loadSlide(r), d.preload('image'), c.pos !== r.pos &&
            (u = 'fancybox-slide--' +
                (c.pos > r.pos ? 'next' : 'previous'), c.$slide.removeClass(
                'fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous'), c.isComplete = !1, e &&
            (i || r.opts.transitionEffect) &&
            (i ? c.$slide.addClass(u) : (u = 'fancybox-animated ' + u +
                ' fancybox-fx-' + r.opts.transitionEffect, n.fancybox.animate(
                c.$slide, u, e, null, !1))));
          }
        }
      },
      createSlide: function(t) {
        var e, o, a = this;
        return o = t % a.group.length, o = o < 0
            ? a.group.length + o
            : o, !a.slides[t] && a.group[o] &&
        (e = n('<div class="fancybox-slide"></div>').
            appendTo(a.$refs.stage), a.slides[t] = n.extend(!0, {}, a.group[o],
            {
              pos: t,
              $slide: e,
              isLoaded: !1,
            }), a.updateSlide(a.slides[t])), a.slides[t];
      },
      scaleToActual: function(t, e, a) {
        var i, s, r, c, l, u = this,
            d = u.current,
            f = d.$content,
            p = n.fancybox.getTranslate(d.$slide).width,
            h = n.fancybox.getTranslate(d.$slide).height,
            g = d.width,
            b = d.height;
        !u.isAnimating && f && 'image' == d.type && d.isLoaded && !d.hasError &&
        (n.fancybox.stop(f), u.isAnimating = !0, t = t === o
            ? .5 * p
            : t, e = e === o ? .5 * h : e, i = n.fancybox.getTranslate(
            f), i.top -= n.fancybox.getTranslate(
            d.$slide).top, i.left -= n.fancybox.getTranslate(
            d.$slide).left, c = g / i.width, l = b / i.height, s = .5 * p - .5 *
            g, r = .5 * h - .5 * b, g > p &&
        (s = i.left * c - (t * c - t), s > 0 && (s = 0), s < p - g &&
        (s = p - g)), b > h &&
        (r = i.top * l - (e * l - e), r > 0 && (r = 0), r < h - b &&
        (r = h - b)), u.updateCursor(g, b), n.fancybox.animate(f, {
          top: r,
          left: s,
          scaleX: c,
          scaleY: l,
        }, a || 330, function() {
          u.isAnimating = !1;
        }), u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop());
      },
      scaleToFit: function(t) {
        var e, o = this,
            a = o.current,
            i = a.$content;
        !o.isAnimating && i && 'image' == a.type && a.isLoaded && !a.hasError &&
        (n.fancybox.stop(i), o.isAnimating = !0, e = o.getFitPos(
            a), o.updateCursor(e.width, e.height), n.fancybox.animate(i, {
          top: e.top,
          left: e.left,
          scaleX: e.width / i.width(),
          scaleY: e.height / i.height(),
        }, t || 330, function() {
          o.isAnimating = !1;
        }));
      },
      getFitPos: function(t) {
        var e, o, a, i, s = this,
            r = t.$content,
            c = t.$slide,
            l = t.width || t.opts.width,
            u = t.height || t.opts.height,
            d = {};
        return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(
            s.$refs.stage).width, o = n.fancybox.getTranslate(
            s.$refs.stage).height, e -= parseFloat(c.css('paddingLeft')) +
            parseFloat(c.css('paddingRight')) +
            parseFloat(r.css('marginLeft')) +
            parseFloat(r.css('marginRight')), o -= parseFloat(
            c.css('paddingTop')) + parseFloat(c.css('paddingBottom')) +
            parseFloat(r.css('marginTop')) +
            parseFloat(r.css('marginBottom')), l && u ||
        (l = e, u = o), a = Math.min(1, e / l, o / u), l = Math.floor(
            a * l), u = Math.floor(a * u), 'image' === t.type
            ? (d.top = Math.floor(.5 * (o - u)) +
                parseFloat(c.css('paddingTop')), d.left = Math.floor(
                .5 * (e - l)) + parseFloat(c.css('paddingLeft')))
            : 'video' === t.contentType &&
            (i = t.opts.width && t.opts.height ? l / u : t.opts.ratio || 16 /
                9, u > l / i ? u = l / i : l > u * i &&
                (l = u * i)), d.width = l, d.height = u, d);
      },
      update: function() {
        var t = this;
        n.each(t.slides, function(e, n) {
          t.updateSlide(n);
        });
      },
      updateSlide: function(t, e) {
        var o = this,
            a = t && t.$content,
            i = t.width || t.opts.width,
            s = t.height || t.opts.height,
            r = t.$slide;
        a && (i || s || 'video' === t.contentType) && !t.hasError &&
        (n.fancybox.stop(a), n.fancybox.setTranslate(a,
            o.getFitPos(t)), t.pos === o.currPos &&
        (o.isAnimating = !1, o.updateCursor())), r.length &&
        (r.trigger('refresh'), o.$refs.toolbar.toggleClass(
            'compensate-for-scrollbar',
            r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger(
            'onUpdate', t);
      },
      centerSlide: function(t, e) {
        var a, i, s = this;
        s.current && (a = Math.round(t.$slide.width()), i = t.pos -
            s.current.pos, n.fancybox.animate(t.$slide, {
          top: 0,
          left: i * a + i * t.opts.gutter,
          opacity: 1,
        }, e === o ? 0 : e, null, !1));
      },
      isMoved: function(t) {
        var e = t || this.current,
            o = n.fancybox.getTranslate(e.$slide);
        return (0 !== o.left || 0 !== o.top) &&
            !e.$slide.hasClass('fancybox-animated');
      },
      updateCursor: function(t, e) {
        var o, a = this,
            i = a.current,
            s = a.$refs.container.removeClass(
                'fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan');
        i && !a.isClosing &&
        (o = a.isZoomable(), s.toggleClass('fancybox-is-zoomable', o), n(
            '[data-fancybox-zoom]').prop('disabled', !o), n.isFunction(
            i.opts.clickContent) &&
        (i.opts.clickContent = i.opts.clickContent(i)), a.canPan(t, e)
            ? s.addClass('fancybox-can-pan')
            : o && 'zoom' === i.opts.clickContent ? s.addClass(
                'fancybox-can-zoomIn') : i.opts.touch &&
                (i.opts.touch.vertical || a.group.length > 1) && 'video' !==
                i.contentType && s.addClass('fancybox-can-swipe'));
      },
      isZoomable: function() {
        var t, e = this,
            n = e.current;
        if (n && !e.isClosing && 'image' === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;
          if (t = e.getFitPos(n), n.width > t.width || n.height >
          t.height) return !0;
        }
        return !1;
      },
      isScaledDown: function(t, e) {
        var a = this,
            i = !1,
            s = a.current,
            r = s.$content;
        return t !== o && e !== o ? i = t < s.width && e < s.height : r &&
            (i = n.fancybox.getTranslate(r), i = i.width < s.width && i.height <
                s.height), i;
      },
      canPan: function(t, e) {
        var a, i, s = this,
            r = !1,
            c = s.current;
        return 'image' === c.type && (a = c.$content) && !c.hasError &&
        (r = s.getFitPos(c), i = t !== o && e !== o ? {
          width: t,
          height: e,
        } : n.fancybox.getTranslate(a), r = Math.abs(i.width - r.width) > 1.5 ||
            Math.abs(i.height - r.height) > 1.5), r;
      },
      loadSlide: function(t) {
        var e, o, a, i = this;
        if (!t.isLoading && !t.isLoaded) {
          switch (t.isLoading = !0, i.trigger('beforeLoad',
              t), e = t.type, o = t.$slide, o.off('refresh').
              trigger('onReset').
              addClass(t.opts.slideClass), e) {
            case 'image':
              i.setImage(t);
              break;
            case 'iframe':
              i.setIframe(t);
              break;
            case 'html':
              i.setContent(t, t.src || t.content);
              break;
            case 'video':
              i.setContent(t, t.opts.video.tpl.replace('{{src}}', t.src).
                  replace('{{format}}',
                      t.opts.videoFormat || t.opts.video.format));
              break;
            case 'inline':
              n(t.src).length ? i.setContent(t, n(t.src)) : i.setError(t);
              break;
            case 'ajax':
              i.showLoading(t), a = n.ajax(n.extend({}, t.opts.ajax.settings, {
                url: t.src,
                success: function(e, n) {
                  'success' === n && i.setContent(t, e);
                },
                error: function(e, n) {
                  e && 'abort' !== n && i.setError(t);
                },
              })), o.one('onReset', function() {
                a.abort();
              });
              break;
            default:
              i.setError(t);
          }
          return !0;
        }
      },
      setImage: function(e) {
        var o, a, i, s, r, c = this,
            l = e.opts.srcset || e.opts.image.srcset;
        if (e.timouts = setTimeout(function() {
          var t = e.$image;
          !e.isLoading || t && t.length && t[0].complete || e.hasError ||
          c.showLoading(e);
        }, 350), l) {
          s = t.devicePixelRatio || 1, r = t.innerWidth * s, i = l.split(',').
              map(function(t) {
                var e = {};
                return t.trim().split(/\s+/).forEach(function(t, n) {
                  var o = parseInt(t.substring(0, t.length - 1), 10);
                  return 0 === n ? e.url = t : void (o &&
                      (e.value = o, e.postfix = t[t.length - 1]));
                }), e;
              }), i.sort(function(t, e) {
            return t.value - e.value;
          });
          for (var u = 0; u < i.length; u++) {
            var d = i[u];
            if ('w' === d.postfix && d.value >= r || 'x' === d.postfix &&
                d.value >= s) {
              a = d;
              break;
            }
          }
          !a && i.length && (a = i[i.length - 1]), a &&
          (e.src = a.url, e.width && e.height && 'w' == a.postfix &&
          (e.height = e.width / e.height *
              a.value, e.width = a.value), e.opts.srcset = l);
        }
        e.$content = n('<div class="fancybox-content"></div>').
            addClass('fancybox-is-hidden').
            appendTo(
                e.$slide.addClass('fancybox-slide--image')), o = e.opts.thumb ||
            !(!e.opts.$thumb || !e.opts.$thumb.length) &&
            e.opts.$thumb.attr('src'), e.opts.preload !== !1 && e.opts.width &&
        e.opts.height && o &&
        (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n(
            '<img />').
            one('error', function() {
              n(this).remove(), e.$ghost = null;
            }).
            one('load', function() {
              c.afterLoad(e);
            }).
            addClass('fancybox-image').
            appendTo(e.$content).
            attr('src', o)), c.setBigImage(e);
      },
      setBigImage: function(t) {
        var e = this,
            o = n('<img />');
        t.$image = o.one('error', function() {
          e.setError(t);
        }).
            one('load', function() {
              var n;
              t.$ghost || (e.resolveImageSlideSize(t, this.naturalWidth,
                  this.naturalHeight), e.afterLoad(t)), t.timouts &&
              (clearTimeout(t.timouts), t.timouts = null), e.isClosing ||
              (t.opts.srcset && (n = t.opts.sizes, n && 'auto' !== n ||
              (n = (t.width / t.height > 1 && s.width() / s.height() > 1
                  ? '100'
                  : Math.round(t.width / t.height * 100)) + 'vw'), o.attr(
                  'sizes', n).attr('srcset', t.opts.srcset)), t.$ghost &&
              setTimeout(function() {
                t.$ghost && !e.isClosing && t.$ghost.hide();
              }, Math.min(300, Math.max(1e3, t.height / 1600))), e.hideLoading(
                  t));
            }).
            addClass('fancybox-image').
            attr('src', t.src).
            appendTo(t.$content), (o[0].complete || 'complete' ==
            o[0].readyState) && o[0].naturalWidth && o[0].naturalHeight
            ? o.trigger('load')
            : o[0].error && o.trigger('error');
      },
      resolveImageSlideSize: function(t, e, n) {
        var o = parseInt(t.opts.width, 10),
            a = parseInt(t.opts.height, 10);
        t.width = e, t.height = n, o > 0 &&
        (t.width = o, t.height = Math.floor(o * n / e)), a > 0 &&
        (t.width = Math.floor(a * e / n), t.height = a);
      },
      setIframe: function(t) {
        var e, a = this,
            i = t.opts.iframe,
            s = t.$slide;
        t.$content = n('<div class="fancybox-content' +
            (i.preload ? ' fancybox-is-hidden' : '') + '"></div>').
            css(i.css).
            appendTo(s), s.addClass(
            'fancybox-slide--' + t.contentType), t.$iframe = e = n(
            i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).
            attr(i.attr).
            appendTo(t.$content), i.preload ? (a.showLoading(t), e.on(
            'load.fb error.fb', function(e) {
              this.isReady = 1, t.$slide.trigger('refresh'), a.afterLoad(t);
            }), s.on('refresh.fb', function() {
          var n, a, s = t.$content,
              r = i.css.width,
              c = i.css.height;
          if (1 === e[0].isReady) {
            try {
              n = e.contents(), a = n.find('body');
            } catch (t) {}
            a && a.length && a.children().length && (s.css({
              width: '',
              height: '',
            }), r === o &&
            (r = Math.ceil(Math.max(a[0].clientWidth, a.outerWidth(!0)))), r &&
            s.width(r), c === o && (c = Math.ceil(
                Math.max(a[0].clientHeight, a.outerHeight(!0)))), c &&
            s.height(c)), s.removeClass('fancybox-is-hidden');
          }
        })) : this.afterLoad(t), e.attr('src', t.src), s.one('onReset',
            function() {
              try {
                n(this).
                    find('iframe').
                    hide().
                    unbind().
                    attr('src', '//about:blank');
              } catch (t) {}
              n(this).off('refresh.fb').empty(), t.isLoaded = !1;
            });
      },
      setContent: function(t, e) {
        var o = this;
        o.isClosing || (o.hideLoading(t), t.$content &&
        n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length
            ? (e.hasClass('.fancybox-content') &&
            e.parent('.fancybox-slide--html').
                trigger('onReset'), t.$placeholder = n('<div>').
                hide().
                insertAfter(e), e.css('display', 'inline-block'))
            : t.hasError || ('string' === n.type(e) &&
        (e = n('<div>').append(n.trim(e)).contents()), t.opts.filter &&
        (e = n('<div>').html(e).find(t.opts.filter))), t.$slide.one('onReset',
            function() {
              n(this).find('video,audio').trigger('pause'), t.$placeholder &&
              (t.$placeholder.after(e.hide()).
                  remove(), t.$placeholder = null), t.$smallBtn &&
              (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError ||
              (n(this).empty(), t.isLoaded = !1);
            }), n(e).appendTo(t.$slide), n(e).is('video,audio') &&
        (n(e).addClass('fancybox-video'), n(e).
            wrap(
                '<div></div>'), t.contentType = 'video', t.opts.width = t.opts.width ||
            n(e).attr('width'), t.opts.height = t.opts.height ||
            n(e).attr('height')), t.$content = t.$slide.children().
            filter('div,form,main,video,audio,article,.fancybox-content').
            first(), t.$content.siblings().hide(), t.$content.length ||
        (t.$content = t.$slide.wrapInner('<div></div>').
            children().
            first()), t.$content.addClass(
            'fancybox-content'), t.$slide.addClass(
            'fancybox-slide--' + t.contentType), this.afterLoad(t));
      },
      setError: function(t) {
        t.hasError = !0, t.$slide.trigger('onReset').
            removeClass('fancybox-slide--' + t.contentType).
            addClass(
                'fancybox-slide--error'), t.contentType = 'html', this.setContent(
            t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos &&
        (this.isAnimating = !1);
      },
      showLoading: function(t) {
        var e = this;
        t = t || e.current, t && !t.$spinner &&
        (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide));
      },
      hideLoading: function(t) {
        var e = this;
        t = t || e.current, t && t.$spinner &&
        (t.$spinner.remove(), delete t.$spinner);
      },
      afterLoad: function(t) {
        var e = this;
        e.isClosing ||
        (t.isLoading = !1, t.isLoaded = !0, e.trigger('afterLoad',
            t), e.hideLoading(t), t.pos === e.currPos &&
        e.updateCursor(), !t.opts.smallBtn || t.$smallBtn &&
        t.$smallBtn.length ||
        (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).
            appendTo(t.$content)), t.opts.protect && t.$content &&
        !t.hasError && (t.$content.on('contextmenu.fb', function(t) {
          return 2 == t.button && t.preventDefault(), !0;
        }), 'image' === t.type && n('<div class="fancybox-spaceball"></div>').
            appendTo(t.$content)), e.revealContent(t));
      },
      revealContent: function(t) {
        var e, a, i, s, r = this,
            c = t.$slide,
            l = !1,
            u = !1,
            d = r.isMoved(t),
            p = t.isRevealed;
        if (!d || !p) {
          if (t.isRevealed = !0, e = t.opts[r.firstRun
              ? 'animationEffect'
              : 'transitionEffect'], i = t.opts[r.firstRun
              ? 'animationDuration'
              : 'transitionDuration'], i = parseInt(
              t.forcedDuration === o ? i : t.forcedDuration, 10), t.pos ===
          r.currPos && (t.isComplete ? e = !1 : r.isAnimating = !0), !d &&
          t.pos === r.currPos && i || (e = !1), 'zoom' === e &&
          (t.pos === r.currPos && i && 'image' === t.type && !t.hasError &&
          (u = r.getThumbPos(t)) ? l = r.getFitPos(t) : e = 'fade'), 'zoom' ===
          e) return l.scaleX = l.width / u.width, l.scaleY = l.height /
              u.height, s = t.opts.zoomOpacity, 'auto' == s &&
          (s = Math.abs(t.width / t.height - u.width / u.height) > .1), s &&
          (u.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(
              t.$content.removeClass('fancybox-is-hidden'), u), f(
              t.$content), void n.fancybox.animate(t.$content, l, i,
              function() {
                r.isAnimating = !1, r.complete();
              });
          if (r.updateSlide(t), !e) return f(c), p ||
          t.$content.removeClass('fancybox-is-hidden').
              hide().
              fadeIn('fast'), void (t.pos === r.currPos && r.complete());
          n.fancybox.stop(c), a = 'fancybox-animated fancybox-slide--' +
              (t.pos >= r.prevPos ? 'next' : 'previous') + ' fancybox-fx-' +
              e, c.removeAttr('style').
              removeClass(
                  'fancybox-slide--current fancybox-slide--next fancybox-slide--previous').
              addClass(a), t.$content.removeClass('fancybox-is-hidden'), f(
              c), n.fancybox.animate(c, 'fancybox-slide--current', i,
              function() {
                c.removeClass(a).removeAttr('style'), t.pos === r.currPos &&
                r.complete();
              }, !0);
        }
      },
      getThumbPos: function(o) {
        var a, i = this,
            s = !1,
            r = o.opts.$thumb,
            c = r && r.length && r[0].ownerDocument === e ? r.offset() : 0,
            l = function(e) {
              for (var o, a = e[0], i = a.getBoundingClientRect(), s = []; null !==
              a.parentElement;) 'hidden' !==
              n(a.parentElement).css('overflow') && 'auto' !==
              n(a.parentElement).css('overflow') || s.push(
                  a.parentElement.getBoundingClientRect()), a = a.parentElement;
              return o = s.every(function(t) {
                var e = Math.min(i.right, t.right) - Math.max(i.left, t.left),
                    n = Math.min(i.bottom, t.bottom) - Math.max(i.top, t.top);
                return e > 0 && n > 0;
              }), o && i.bottom > 0 && i.right > 0 && i.left < n(t).width() &&
              i.top < n(t).height();
            };
        return c && l(r) && (a = i.$refs.stage.offset(), s = {
          top: c.top - a.top + parseFloat(r.css('border-top-width') || 0),
          left: c.left - a.left + parseFloat(r.css('border-left-width') || 0),
          width: r.width(),
          height: r.height(),
          scaleX: 1,
          scaleY: 1,
        }), s;
      },
      complete: function() {
        var t = this,
            e = t.current,
            o = {};
        !t.isMoved() && e.isLoaded && (e.isComplete ||
        (e.isComplete = !0, e.$slide.siblings().trigger('onReset'), t.preload(
            'inline'), f(e.$slide), e.$slide.addClass(
            'fancybox-slide--complete'), n.each(t.slides, function(e, a) {
          a.pos >= t.currPos - 1 && a.pos <= t.currPos + 1 ? o[a.pos] = a : a &&
              (n.fancybox.stop(a.$slide), a.$slide.off().remove());
        }), t.slides = o), t.isAnimating = !1, t.updateCursor(), t.trigger(
            'afterShow'), e.opts.video.autoStart &&
        e.$slide.find('video,audio').
            filter(':visible:first').
            trigger('play'), e.opts.autoFocus &&
        ('image' !== e.type || t.firstRun) && t.focus(), e.$slide.scrollTop(0).
            scrollLeft(0));
      },
      preload: function(t) {
        var e = this,
            n = e.slides[e.currPos + 1],
            o = e.slides[e.currPos - 1];
        n && n.type === t && e.loadSlide(n), o && o.type === t &&
        e.loadSlide(o);
      },
      focus: function() {
        var t, e = this,
            n = e.current;
        this.isClosing || (n && n.isComplete && n.$content &&
        (t = n.$content.find(
            'input[autofocus]:enabled:visible:first'), t.length ||
        (t = n.$content.find('button,:input,[tabindex],a').
            filter(
                ':not(.fancybox-close-small):enabled:visible:first'))), t = t &&
        t.length ? t : e.$refs.container, t.trigger('focus'));
      },
      activate: function() {
        var t = this;
        n('.fancybox-container').each(function() {
          var e = n(this).data('FancyBox');
          e && e.id !== t.id && !e.isClosing &&
          (e.trigger('onDeactivate'), e.removeEvents(), e.isVisible = !1);
        }), t.isVisible = !0, (t.current || t.isIdle) &&
        (t.update(), t.updateControls()), t.trigger(
            'onActivate'), t.addEvents();
      },
      close: function(t, e) {
        var o, a, i, s, r, c, l, p = this,
            h = p.current,
            g = function() {
              p.cleanUp(t);
            };
        return !p.isClosing &&
            (p.isClosing = !0, p.trigger('beforeClose', t) === !1
                ? (p.isClosing = !1, u(function() {
                  p.update();
                }), !1)
                : (p.removeEvents(), h.timouts && clearTimeout(
                    h.timouts), i = h.$content, o = h.opts.animationEffect, a = n.isNumeric(
                    e) ? e : o ? h.opts.animationDuration : 0, h.$slide.off(d).
                    removeClass(
                        'fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated'), h.$slide.siblings().
                    trigger('onReset').
                    remove(), a &&
                p.$refs.container.removeClass('fancybox-is-open').
                    addClass('fancybox-is-closing'), p.hideLoading(
                    h), p.hideControls(), p.updateCursor(), 'zoom' !== o ||
                t !== !0 && i && a && 'image' === h.type && !h.hasError &&
                (l = p.getThumbPos(h)) || (o = 'fade'), 'zoom' === o
                    ? (n.fancybox.stop(i), s = n.fancybox.getTranslate(i), c = {
                      top: s.top,
                      left: s.left,
                      scaleX: s.width / l.width,
                      scaleY: s.height / l.height,
                      width: l.width,
                      height: l.height,
                    }, r = h.opts.zoomOpacity, 'auto' == r &&
                    (r = Math.abs(h.width / h.height - l.width / l.height) >
                        .1), r && (l.opacity = 0), n.fancybox.setTranslate(i,
                        c), f(i), n.fancybox.animate(i, l, a, g), !0)
                    : (o && a ? t === !0
                        ? setTimeout(g, a)
                        : n.fancybox.animate(
                            h.$slide.removeClass('fancybox-slide--current'),
                            'fancybox-animated fancybox-slide--previous fancybox-fx-' +
                            o, a, g) : g(), !0)));
      },
      cleanUp: function(e) {
        var o, a, i, s = this,
            r = s.current.opts.$orig;
        s.current.$slide.trigger('onReset'), s.$refs.container.empty().
            remove(), s.trigger('afterClose', e), s.current.opts.backFocus &&
        (r && r.length && r.is(':visible') || (r = s.$trigger), r && r.length &&
        (a = t.scrollX, i = t.scrollY, r.trigger('focus'), n('html, body').
            scrollTop(i).
            scrollLeft(a))), s.current = null, o = n.fancybox.getInstance(), o
            ? o.activate()
            : (n('body').
                removeClass('fancybox-active compensate-for-scrollbar'), n(
                '#fancybox-style-noscroll').remove());
      },
      trigger: function(t, e) {
        var o, a = Array.prototype.slice.call(arguments, 1),
            i = this,
            s = e && e.opts ? e : i.current;
        return s ? a.unshift(s) : s = i, a.unshift(i), n.isFunction(
            s.opts[t]) && (o = s.opts[t].apply(s, a)), o === !1
            ? o
            : void ('afterClose' !== t && i.$refs ? i.$refs.container.trigger(
                t + '.fb', a) : r.trigger(t + '.fb', a));
      },
      updateControls: function(t) {
        var e = this,
            n = e.current,
            o = n.index,
            a = n.opts.caption,
            i = e.$refs.container,
            s = e.$refs.caption;
        n.$slide.trigger('refresh'), e.$caption = a && a.length
            ? s.html(a)
            : null, e.isHiddenControls || e.isIdle || e.showControls(), i.find(
            '[data-fancybox-count]').html(e.group.length), i.find(
            '[data-fancybox-index]').html(o + 1), i.find(
            '[data-fancybox-prev]').
            toggleClass('disabled', !n.opts.loop && o <= 0), i.find(
            '[data-fancybox-next]').
            toggleClass('disabled',
                !n.opts.loop && o >= e.group.length - 1), 'image' === n.type
            ? i.find('[data-fancybox-zoom]').
                show().
                end().
                find('[data-fancybox-download]').
                attr('href', n.opts.image.src || n.src).
                show()
            : n.opts.toolbar &&
            i.find('[data-fancybox-download],[data-fancybox-zoom]').hide();
      },
      hideControls: function() {
        this.isHiddenControls = !0, this.$refs.container.removeClass(
            'fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav');
      },
      showControls: function() {
        var t = this,
            e = t.current ? t.current.opts : t.opts,
            n = t.$refs.container;
        t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass(
            'fancybox-show-toolbar', !(!e.toolbar || !e.buttons)).
            toggleClass('fancybox-show-infobar',
                !!(e.infobar && t.group.length > 1)).
            toggleClass('fancybox-show-nav',
                !!(e.arrows && t.group.length > 1)).
            toggleClass('fancybox-is-modal', !!e.modal), t.$caption
            ? n.addClass('fancybox-show-caption ')
            : n.removeClass('fancybox-show-caption');
      },
      toggleControls: function() {
        this.isHiddenControls ? this.showControls() : this.hideControls();
      },
    }), n.fancybox = {
      version: '3.4.0',
      defaults: i,
      getInstance: function(t) {
        var e = n('.fancybox-container:not(".fancybox-is-closing"):last').
                data('FancyBox'),
            o = Array.prototype.slice.call(arguments, 1);
        return e instanceof h &&
            ('string' === n.type(t) ? e[t].apply(e, o) : 'function' ===
                n.type(t) && t.apply(e, o), e);
      },
      open: function(t, e, n) {
        return new h(t, e, n);
      },
      close: function(t) {
        var e = this.getInstance();
        e && (e.close(), t === !0 && this.close(t));
      },
      destroy: function() {
        this.close(!0), r.add('body').off('click.fb-start', '**');
      },
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent),
      use3d: function() {
        var n = e.createElement('div');
        return t.getComputedStyle && t.getComputedStyle(n) &&
            t.getComputedStyle(n).getPropertyValue('transform') &&
            !(e.documentMode && e.documentMode < 11);
      }(),
      getTranslate: function(t) {
        var e;
        return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
          top: e.top || 0,
          left: e.left || 0,
          width: e.width,
          height: e.height,
          opacity: parseFloat(t.css('opacity')),
        });
      },
      setTranslate: function(t, e) {
        var n = '',
            a = {};
        if (t && e) return e.left === o && e.top === o ||
        (n = (e.left === o ? t.position().left : e.left) + 'px, ' +
            (e.top === o ? t.position().top : e.top) + 'px', n = this.use3d
            ? 'translate3d(' + n + ', 0px)'
            : 'translate(' + n + ')'), e.scaleX !== o && e.scaleY !== o &&
        (n = (n.length ? n + ' ' : '') + 'scale(' + e.scaleX + ', ' + e.scaleY +
            ')'), n.length && (a.transform = n), e.opacity !== o &&
        (a.opacity = e.opacity), e.width !== o &&
        (a.width = e.width), e.height !== o && (a.height = e.height), t.css(a);
      },
      animate: function(t, e, a, i, s) {
        var r, c = !1;
        n.isFunction(a) && (i = a, a = null), n.isPlainObject(e) ||
        t.removeAttr('style'), n.fancybox.stop(t), t.on(d, function(o) {
          (!o || !o.originalEvent || t.is(o.originalEvent.target) &&
              'z-index' != o.originalEvent.propertyName) &&
          (n.fancybox.stop(t), c && n.fancybox.setTranslate(t, c), n.isNumeric(
              a) && t.css('transition-duration', ''), n.isPlainObject(e) ? s ===
              !1 && t.removeAttr('style') : s !== !0 &&
              t.removeClass(e), n.isFunction(i) && i(o));
        }), n.isNumeric(a) &&
        t.css('transition-duration', a + 'ms'), n.isPlainObject(e)
            ? (e.scaleX !== o && e.scaleY !== o &&
            (r = n.fancybox.getTranslate(t), c = n.extend({}, e, {
              width: r.width * e.scaleX,
              height: r.height * e.scaleY,
              scaleX: 1,
              scaleY: 1,
            }), delete e.width, delete e.height, t.parent().
                hasClass('fancybox-slide--image') && t.parent().
                addClass('fancybox-is-scaling')), n.fancybox.setTranslate(t, e))
            : t.addClass(e), t.data('timer', setTimeout(function() {
          t.trigger('transitionend');
        }, a + 16));
      },
      stop: function(t, e) {
        t && t.length &&
        (clearTimeout(t.data('timer')), e && t.trigger(d), t.off(d).
            css('transition-duration', ''), t.parent().
            removeClass('fancybox-is-scaling'));
      },
    }, n.fn.fancybox = function(t) {
      var e;
      return t = t || {}, e = t.selector || !1, e ? n('body').
          off('click.fb-start', e).
          on('click.fb-start', e, {
            options: t,
          }, a) : this.off('click.fb-start').on('click.fb-start', {
        items: this,
        options: t,
      }, a), this;
    }, r.on('click.fb-start', '[data-fancybox]', a), r.on('click.fb-start',
        '[data-fancybox-trigger]', function(t) {
          n('[data-fancybox="' + n(this).attr('data-fancybox-trigger') + '"]').
              eq(n(this).attr('data-fancybox-index') || 0).
              trigger('click.fb-start', {
                $trigger: n(this),
              });
        }), r.on('mousedown', '.fancybox-button', function() {
      n(this).data('pressed', 1);
    }).on('mouseup', '.fancybox-button', function() {
      n(this).removeData('pressed');
    }).on('focus', '.fancybox-button', function() {
      n(this).data('pressed') || n(this).addClass('fancybox-focus');
    }).on('blur', '.fancybox-button', function() {
      n(this).removeClass('fancybox-focus');
    });
  }
}(window, document, window.jQuery || jQuery),
    function(t) {
      'use strict';
      var e = function(e, n, o) {
            if (e) return o = o || '', 'object' === t.type(o) &&
            (o = t.param(o, !0)), t.each(n, function(t, n) {
              e = e.replace('$' + t, n || '');
            }), o.length && (e += (e.indexOf('?') > 0 ? '&' : '?') + o), e;
          },
          n = {
            youtube: {
              matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
              params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: 'transparent',
                enablejsapi: 1,
                html5: 1,
              },
              paramPlace: 8,
              type: 'iframe',
              url: '//www.youtube-nocookie.com/embed/$4',
              thumb: '//img.youtube.com/vi/$4/hqdefault.jpg',
            },
            vimeo: {
              matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
              params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1,
                api: 1,
              },
              paramPlace: 3,
              type: 'iframe',
              url: '//player.vimeo.com/video/$2',
            },
            instagram: {
              matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
              type: 'image',
              url: '//$1/p/$2/media/?size=l',
            },
            gmap_place: {
              matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
              type: 'iframe',
              url: function(t) {
                return '//maps.google.' + t[2] + '/?ll=' +
                    (t[9] ? t[9] + '&z=' + Math.floor(t[10]) +
                        (t[12] ? t[12].replace(/^\//, '&') : '') : t[12] +
                        '').replace(/\?/, '&') + '&output=' +
                    (t[12] && t[12].indexOf('layer=c') > 0
                        ? 'svembed'
                        : 'embed');
              },
            },
            gmap_search: {
              matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
              type: 'iframe',
              url: function(t) {
                return '//maps.google.' + t[2] + '/maps?q=' +
                    t[5].replace('query=', 'q=').replace('api=1', '') +
                    '&output=embed';
              },
            },
          };
      t(document).on('objectNeedsType.fb', function(o, a, i) {
        var s, r, c, l, u, d, f, p = i.src || '',
            h = !1;
        s = t.extend(!0, {}, n, i.opts.media), t.each(s, function(n, o) {
          if (c = p.match(o.matcher)) {
            if (h = o.type, f = n, d = {}, o.paramPlace && c[o.paramPlace]) {
              u = c[o.paramPlace], '?' == u[0] &&
              (u = u.substring(1)), u = u.split('&');
              for (var a = 0; a < u.length; ++a) {
                var s = u[a].split('=', 2);
                2 == s.length &&
                (d[s[0]] = decodeURIComponent(s[1].replace(/\+/g, ' ')));
              }
            }
            return l = t.extend(!0, {}, o.params, i.opts[n],
                d), p = 'function' === t.type(o.url)
                ? o.url.call(this, c, l, i)
                : e(o.url, c, l), r = 'function' === t.type(o.thumb)
                ? o.thumb.call(this, c, l, i)
                : e(o.thumb, c), 'youtube' === n ? p = p.replace(
                /&t=((\d+)m)?(\d+)s/, function(t, e, n, o) {
                  return '&start=' +
                      ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10));
                }) : 'vimeo' === n && (p = p.replace('&%23', '#')), !1;
          }
        }), h ? (i.opts.thumb || i.opts.$thumb && i.opts.$thumb.length ||
        (i.opts.thumb = r), 'iframe' === h && (i.opts = t.extend(!0, i.opts, {
          iframe: {
            preload: !1,
            attr: {
              scrolling: 'no',
            },
          },
        })), t.extend(i, {
          type: h,
          src: p,
          origSrc: i.src,
          contentSource: f,
          contentType: 'image' === h ? 'image' : 'gmap_place' == f ||
          'gmap_search' == f ? 'map' : 'video',
        })) : p && (i.type = i.opts.defaultType);
      });
    }(window.jQuery || jQuery),
    function(t, e, n) {
      'use strict';
      var o = function() {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame ||
                t.mozRequestAnimationFrame || t.oRequestAnimationFrame ||
                function(e) {
                  return t.setTimeout(e, 1e3 / 60);
                };
          }(),
          a = function() {
            return t.cancelAnimationFrame || t.webkitCancelAnimationFrame ||
                t.mozCancelAnimationFrame || t.oCancelAnimationFrame ||
                function(e) {
                  t.clearTimeout(e);
                };
          }(),
          i = function(e) {
            var n = [];
            e = e.originalEvent || e || t.e, e = e.touches && e.touches.length
                ? e.touches
                : e.changedTouches && e.changedTouches.length
                    ? e.changedTouches
                    : [e];
            for (var o in e) e[o].pageX ? n.push({
              x: e[o].pageX,
              y: e[o].pageY,
            }) : e[o].clientX && n.push({
              x: e[o].clientX,
              y: e[o].clientY,
            });
            return n;
          },
          s = function(t, e, n) {
            return e && t
                ? 'x' === n ? t.x - e.x : 'y' === n
                    ? t.y - e.y
                    : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                : 0;
          },
          r = function(t) {
            if (t.is(
                'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio') ||
                n.isFunction(t.get(0).onclick) ||
                t.data('selectable')) return !0;
            for (var e = 0, o = t[0].attributes, a = o.length; e < a; e++)
              if ('data-fancybox-' === o[e].nodeName.substr(0, 14)) return !0;
            return !1;
          },
          c = function(e) {
            var n = t.getComputedStyle(e)['overflow-y'],
                o = t.getComputedStyle(e)['overflow-x'],
                a = ('scroll' === n || 'auto' === n) && e.scrollHeight >
                    e.clientHeight,
                i = ('scroll' === o || 'auto' === o) && e.scrollWidth >
                    e.clientWidth;
            return a || i;
          },
          l = function(t) {
            for (var e = !1; ;) {
              if (e = c(t.get(0))) break;
              if (t = t.parent(), !t.length || t.hasClass('fancybox-stage') ||
              t.is('body')) break;
            }
            return e;
          },
          u = function(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on(
                'touchstart.fb.touch mousedown.fb.touch',
                n.proxy(e, 'ontouchstart'));
          };
      u.prototype.destroy = function() {
        this.$container.off('.fb.touch');
      }, u.prototype.ontouchstart = function(o) {
        var a = this,
            c = n(o.target),
            u = a.instance,
            d = u.current,
            f = d.$slide,
            p = d.$content,
            h = 'touchstart' == o.type;
        if (h && a.$container.off('mousedown.fb.touch'), (!o.originalEvent ||
            2 != o.originalEvent.button) && f.length && c.length && !r(c) &&
        !r(c.parent()) && (c.is('img') ||
            !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
          if (!d || u.isAnimating ||
              u.isClosing) return o.stopPropagation(), void o.preventDefault();
          if (a.realPoints = a.startPoints = i(o), a.startPoints.length) {
            if (d.touch &&
            o.stopPropagation(), a.startEvent = o, a.canTap = !0, a.$target = c, a.$content = p, a.opts = d.opts.touch, a.isPanning = !1, a.isSwiping = !1, a.isZooming = !1, a.isScrolling = !1, a.canPan = u.canPan(), a.startTime = (new Date).getTime(), a.distanceX = a.distanceY = a.distance = 0, a.canvasWidth = Math.round(
                f[0].clientWidth), a.canvasHeight = Math.round(
                f[0].clientHeight), a.contentLastPos = null, a.contentStartPos = n.fancybox.getTranslate(
                a.$content) || {
              top: 0,
              left: 0,
            }, a.sliderStartPos = a.sliderLastPos || n.fancybox.getTranslate(
                f), a.stagePos = n.fancybox.getTranslate(
                u.$refs.stage), a.sliderStartPos.top -= a.stagePos.top, a.sliderStartPos.left -= a.stagePos.left, a.contentStartPos.top -= a.stagePos.top, a.contentStartPos.left -= a.stagePos.left, n(
                e).
                off('.fb.touch').
                on(h
                    ? 'touchend.fb.touch touchcancel.fb.touch'
                    : 'mouseup.fb.touch mouseleave.fb.touch',
                    n.proxy(a, 'ontouchend')).
                on(h ? 'touchmove.fb.touch' : 'mousemove.fb.touch',
                    n.proxy(a, 'ontouchmove')), n.fancybox.isMobile &&
            e.addEventListener('scroll', a.onscroll, !0), !a.opts &&
            !a.canPan || !c.is(a.$stage) &&
            !a.$stage.find(c).length) return void (c.is('.fancybox-image') &&
                o.preventDefault());
            a.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile &&
            a.isScrollable || o.preventDefault(), (1 === a.startPoints.length ||
                d.hasError) && (a.canPan
                ? (n.fancybox.stop(a.$content), a.$content.css(
                    'transition-duration', ''), a.isPanning = !0)
                : a.isSwiping = !0, a.$container.addClass(
                'fancybox-is-grabbing')), 2 === a.startPoints.length &&
            'image' === d.type && (d.isLoaded || d.$ghost) &&
            (a.canTap = !1, a.isSwiping = !1, a.isPanning = !1, a.isZooming = !0, n.fancybox.stop(
                a.$content), a.$content.css('transition-duration',
                ''), a.centerPointStartX = .5 *
                (a.startPoints[0].x + a.startPoints[1].x) -
                n(t).scrollLeft(), a.centerPointStartY = .5 *
                (a.startPoints[0].y + a.startPoints[1].y) - n(t).
                    scrollTop(), a.percentageOfImageAtPinchPointX = (a.centerPointStartX -
                a.contentStartPos.left) /
                a.contentStartPos.width, a.percentageOfImageAtPinchPointY = (a.centerPointStartY -
                a.contentStartPos.top) /
                a.contentStartPos.height, a.startDistanceBetweenFingers = s(
                a.startPoints[0], a.startPoints[1]));
          }
        }
      }, u.prototype.onscroll = function(t) {
        var n = this;
        n.isScrolling = !0, e.removeEventListener('scroll', n.onscroll, !0);
      }, u.prototype.ontouchmove = function(t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 ===
        t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling
            ? void (e.canTap = !1)
            : (e.newPoints = i(t), void ((e.opts || e.canPan) &&
                e.newPoints.length && e.newPoints.length &&
                (e.isSwiping && e.isSwiping === !0 ||
                t.preventDefault(), e.distanceX = s(e.newPoints[0],
                    e.startPoints[0], 'x'), e.distanceY = s(e.newPoints[0],
                    e.startPoints[0], 'y'), e.distance = s(e.newPoints[0],
                    e.startPoints[0]), e.distance > 0 &&
                (e.isSwiping ? e.onSwipe(t) : e.isPanning
                    ? e.onPan()
                    : e.isZooming && e.onZoom()))));
      }, u.prototype.onSwipe = function(e) {
        var i, s = this,
            r = s.isSwiping,
            c = s.sliderStartPos.left || 0;
        if (r !== !0) 'x' == r && (s.distanceX > 0 &&
        (s.instance.group.length < 2 || 0 === s.instance.current.index &&
            !s.instance.current.opts.loop)
            ? c += Math.pow(s.distanceX, .8)
            : s.distanceX < 0 &&
            (s.instance.group.length < 2 || s.instance.current.index ===
                s.instance.group.length - 1 && !s.instance.current.opts.loop)
                ? c -= Math.pow(-s.distanceX, .8)
                : c += s.distanceX), s.sliderLastPos = {
          top: 'x' == r ? 0 : s.sliderStartPos.top + s.distanceY,
          left: c,
        }, s.requestId && (a(s.requestId), s.requestId = null), s.requestId = o(
            function() {
              s.sliderLastPos && (n.each(s.instance.slides, function(t, e) {
                var o = e.pos - s.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                  top: s.sliderLastPos.top,
                  left: s.sliderLastPos.left + o * s.canvasWidth + o *
                      e.opts.gutter,
                });
              }), s.$container.addClass('fancybox-is-sliding'));
            });
        else if (Math.abs(s.distance) > 10) {
          if (s.canTap = !1, s.instance.group.length < 2 && s.opts.vertical
              ? s.isSwiping = 'y'
              : s.instance.isDragging || s.opts.vertical === !1 || 'auto' ===
              s.opts.vertical && n(t).width() > 800
                  ? s.isSwiping = 'x'
                  : (i = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) /
                      Math.PI), s.isSwiping = i > 45 && i < 135
                      ? 'y'
                      : 'x'), s.canTap = !1, 'y' === s.isSwiping &&
          n.fancybox.isMobile &&
          s.isScrollable) return void (s.isScrolling = !0);
          s.instance.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(
              s.instance.slides, function(t, e) {
                n.fancybox.stop(e.$slide), e.$slide.css('transition-duration',
                    ''), e.inTransition = !1, e.pos ===
                s.instance.current.pos &&
                (s.sliderStartPos.left = n.fancybox.getTranslate(
                    e.$slide).left -
                    n.fancybox.getTranslate(s.instance.$refs.stage).left);
              }), s.instance.SlideShow && s.instance.SlideShow.isActive &&
          s.instance.SlideShow.stop();
        }
      }, u.prototype.onPan = function() {
        var t = this;
        return s(t.newPoints[0], t.realPoints[0]) <
        (n.fancybox.isMobile ? 10 : 5)
            ? void (t.startPoints = t.newPoints)
            : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId &&
            (a(t.requestId), t.requestId = null), void (t.requestId = o(
                function() {
                  n.fancybox.setTranslate(t.$content, t.contentLastPos);
                })));
      }, u.prototype.limitMovement = function() {
        var t, e, n, o, a, i, s = this,
            r = s.canvasWidth,
            c = s.canvasHeight,
            l = s.distanceX,
            u = s.distanceY,
            d = s.contentStartPos,
            f = d.left,
            p = d.top,
            h = d.width,
            g = d.height;
        return a = h > r ? f + l : f, i = p + u, t = Math.max(0,
            .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(
            r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l >
        0 && a > t && (a = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && a <
        n && (a = n + 1 - Math.pow(n - f - l, .8) || 0), u > 0 && i > e &&
        (i = e - 1 + Math.pow(-e + p + u, .8) || 0), u < 0 && i < o &&
        (i = o + 1 - Math.pow(o - p - u, .8) || 0), {
          top: i,
          left: a,
        };
      }, u.prototype.limitPosition = function(t, e, n, o) {
        var a = this,
            i = a.canvasWidth,
            s = a.canvasHeight;
        return n > i
            ? (t = t > 0 ? 0 : t, t = t < i - n ? i - n : t)
            : t = Math.max(0, i / 2 - n / 2), o > s ? (e = e > 0
            ? 0
            : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
          top: e,
          left: t,
        };
      }, u.prototype.onZoom = function() {
        var e = this,
            i = e.contentStartPos,
            r = i.width,
            c = i.height,
            l = i.left,
            u = i.top,
            d = s(e.newPoints[0], e.newPoints[1]),
            f = d / e.startDistanceBetweenFingers,
            p = Math.floor(r * f),
            h = Math.floor(c * f),
            g = (r - p) * e.percentageOfImageAtPinchPointX,
            b = (c - h) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            y = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            v = m - e.centerPointStartX,
            x = y - e.centerPointStartY,
            w = l + (g + v),
            $ = u + (b + x),
            S = {
              top: $,
              left: w,
              scaleX: f,
              scaleY: f,
            };
        e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId &&
        (a(e.requestId), e.requestId = null), e.requestId = o(function() {
          n.fancybox.setTranslate(e.$content, e.contentLastPos);
        });
      }, u.prototype.ontouchend = function(t) {
        var o = this,
            s = Math.max((new Date).getTime() - o.startTime, 1),
            r = o.isSwiping,
            c = o.isPanning,
            l = o.isZooming,
            u = o.isScrolling;
        return o.endPoints = i(t), o.$container.removeClass(
            'fancybox-is-grabbing'), n(e).
            off('.fb.touch'), e.removeEventListener('scroll', o.onscroll,
            !0), o.requestId &&
        (a(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap
            ? o.onTap(t)
            : (o.speed = 366, o.velocityX = o.distanceX / s *
                .5, o.velocityY = o.distanceY / s * .5, o.speedX = Math.max(
                .5 * o.speed, Math.min(1.5 * o.speed,
                    1 / Math.abs(o.velocityX) * o.speed)), void (c
                ? o.endPanning()
                : l ? o.endZooming() : o.endSwiping(r, u)));
      }, u.prototype.endSwiping = function(t, e) {
        var o = this,
            a = !1,
            i = o.instance.group.length;
        o.sliderLastPos = null, 'y' == t && !e && Math.abs(o.distanceY) > 50
            ? (n.fancybox.animate(o.instance.current.$slide, {
              top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
              opacity: 0,
            }, 200), a = o.instance.close(!0, 200))
            : 'x' == t && o.distanceX > 50 && i > 1 ? a = o.instance.previous(
                o.speedX) : 'x' == t && o.distanceX < -50 && i > 1 &&
                (a = o.instance.next(o.speedX)), a !== !1 || 'x' != t && 'y' !=
        t || (e || i < 2
            ? o.instance.centerSlide(o.instance.current, 150)
            : o.instance.jumpTo(
                o.instance.current.index)), o.$container.removeClass(
            'fancybox-is-sliding');
      }, u.prototype.endPanning = function() {
        var t, e, o, a = this;
        a.contentLastPos && (a.opts.momentum === !1
            ? (t = a.contentLastPos.left, e = a.contentLastPos.top)
            : (t = a.contentLastPos.left + a.velocityX *
                a.speed, e = a.contentLastPos.top + a.velocityY *
                a.speed), o = a.limitPosition(t, e, a.contentStartPos.width,
            a.contentStartPos.height), o.width = a.contentStartPos.width, o.height = a.contentStartPos.height, n.fancybox.animate(
            a.$content, o, 330));
      }, u.prototype.endZooming = function() {
        var t, e, o, a, i = this,
            s = i.instance.current,
            r = i.newWidth,
            c = i.newHeight;
        i.contentLastPos &&
        (t = i.contentLastPos.left, e = i.contentLastPos.top, a = {
          top: e,
          left: t,
          width: r,
          height: c,
          scaleX: 1,
          scaleY: 1,
        }, n.fancybox.setTranslate(i.$content, a), r < i.canvasWidth && c <
        i.canvasHeight ? i.instance.scaleToFit(150) : r > s.width || c >
        s.height ? i.instance.scaleToActual(i.centerPointStartX,
            i.centerPointStartY, 150) : (o = i.limitPosition(t, e, r,
            c), n.fancybox.setTranslate(i.$content,
            n.fancybox.getTranslate(i.$content)), n.fancybox.animate(i.$content,
            o, 150)));
      }, u.prototype.onTap = function(e) {
        var o, a = this,
            s = n(e.target),
            r = a.instance,
            c = r.current,
            l = e && i(e) || a.startPoints,
            u = l[0] ? l[0].x - n(t).scrollLeft() - a.stagePos.left : 0,
            d = l[0] ? l[0].y - n(t).scrollTop() - a.stagePos.top : 0,
            f = function(t) {
              var o = c.opts[t];
              if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
                case 'close':
                  r.close(a.startEvent);
                  break;
                case 'toggleControls':
                  r.toggleControls(!0);
                  break;
                case 'next':
                  r.next();
                  break;
                case 'nextOrClose':
                  r.group.length > 1 ? r.next() : r.close(a.startEvent);
                  break;
                case 'zoom':
                  'image' == c.type && (c.isLoaded || c.$ghost) &&
                  (r.canPan() ? r.scaleToFit() : r.isScaledDown()
                      ? r.scaleToActual(u, d)
                      : r.group.length < 2 && r.close(a.startEvent));
              }
            };
        if ((!e.originalEvent || 2 != e.originalEvent.button) &&
            (s.is('img') || !(u > s[0].clientWidth + s.offset().left))) {
          if (s.is(
              '.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container')) o = 'Outside';
          else if (s.is('.fancybox-slide')) o = 'Slide';
          else {
            if (!r.current.$content ||
                !r.current.$content.find(s).addBack().filter(s).length) return;
            o = 'Content';
          }
          if (a.tapped) {
            if (clearTimeout(a.tapped), a.tapped = null, Math.abs(u - a.tapX) >
            50 || Math.abs(d - a.tapY) > 50) return this;
            f('dblclick' + o);
          } else a.tapX = u, a.tapY = d, c.opts['dblclick' + o] &&
          c.opts['dblclick' + o] !== c.opts['click' + o]
              ? a.tapped = setTimeout(function() {
                a.tapped = null, f('click' + o);
              }, 500)
              : f('click' + o);
          return this;
        }
      }, n(e).on('onActivate.fb', function(t, e) {
        e && !e.Guestures && (e.Guestures = new u(e));
      });
    }(window, document, window.jQuery || jQuery),
    function(t, e) {
      'use strict';
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
        },
        slideShow: {
          autoStart: !1,
          speed: 3e3,
        },
      });
      var n = function(t) {
        this.instance = t, this.init();
      };
      e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
          var t = this;
          t.$button = t.instance.$refs.toolbar.find('[data-fancybox-play]').
              on('click', function() {
                t.toggle();
              }), (t.instance.group.length < 2 ||
              !t.instance.group[t.instance.currIndex].opts.slideShow) &&
          t.$button.hide();
        },
        set: function(t) {
          var e = this;
          e.instance && e.instance.current &&
          (t === !0 || e.instance.current.opts.loop || e.instance.currIndex <
              e.instance.group.length - 1)
              ? e.timer = setTimeout(function() {
                e.isActive && e.instance.jumpTo(
                    (e.instance.currIndex + 1) % e.instance.group.length);
              }, e.instance.current.opts.slideShow.speed)
              : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls());
        },
        clear: function() {
          var t = this;
          clearTimeout(t.timer), t.timer = null;
        },
        start: function() {
          var t = this,
              e = t.instance.current;
          e && (t.$button.attr('title', e.opts.i18n[e.opts.lang].PLAY_STOP).
              removeClass('fancybox-button--play').
              addClass(
                  'fancybox-button--pause'), t.isActive = !0, e.isComplete &&
          t.set(!0), t.instance.trigger('onSlideShowChange', !0));
        },
        stop: function() {
          var t = this,
              e = t.instance.current;
          t.clear(), t.$button.attr('title',
              e.opts.i18n[e.opts.lang].PLAY_START).
              removeClass('fancybox-button--pause').
              addClass(
                  'fancybox-button--play'), t.isActive = !1, t.instance.trigger(
              'onSlideShowChange', !1);
        },
        toggle: function() {
          var t = this;
          t.isActive ? t.stop() : t.start();
        },
      }), e(t).on({
        'onInit.fb': function(t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        'beforeShow.fb': function(t, e, n, o) {
          var a = e && e.SlideShow;
          o ? a && n.opts.slideShow.autoStart && a.start() : a && a.isActive &&
              a.clear();
        },
        'afterShow.fb': function(t, e, n) {
          var o = e && e.SlideShow;
          o && o.isActive && o.set();
        },
        'afterKeydown.fb': function(n, o, a, i, s) {
          var r = o && o.SlideShow;
          !r || !a.opts.slideShow || 80 !== s && 32 !== s ||
          e(t.activeElement).is('button,a,input') ||
          (i.preventDefault(), r.toggle());
        },
        'beforeClose.fb onDeactivate.fb': function(t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        },
      }), e(t).on('visibilitychange', function() {
        var n = e.fancybox.getInstance(),
            o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set());
      });
    }(document, window.jQuery || jQuery),
    function(t, e) {
      'use strict';
      var n = function() {
        for (var e = [
          [
            'requestFullscreen',
            'exitFullscreen',
            'fullscreenElement',
            'fullscreenEnabled',
            'fullscreenchange',
            'fullscreenerror'],
          [
            'webkitRequestFullscreen',
            'webkitExitFullscreen',
            'webkitFullscreenElement',
            'webkitFullscreenEnabled',
            'webkitfullscreenchange',
            'webkitfullscreenerror'],
          [
            'webkitRequestFullScreen',
            'webkitCancelFullScreen',
            'webkitCurrentFullScreenElement',
            'webkitCancelFullScreen',
            'webkitfullscreenchange',
            'webkitfullscreenerror'],
          [
            'mozRequestFullScreen',
            'mozCancelFullScreen',
            'mozFullScreenElement',
            'mozFullScreenEnabled',
            'mozfullscreenchange',
            'mozfullscreenerror'],
          [
            'msRequestFullscreen',
            'msExitFullscreen',
            'msFullscreenElement',
            'msFullscreenEnabled',
            'MSFullscreenChange',
            'MSFullscreenError'],
        ], n = {}, o = 0; o < e.length; o++) {
          var a = e[o];
          if (a && a[1] in t) {
            for (var i = 0; i < a.length; i++) n[e[0][i]] = a[i];
            return n;
          }
        }
        return !1;
      }();
      if (!n) return void (e && e.fancybox &&
          (e.fancybox.defaults.btnTpl.fullScreen = !1));
      var o = {
        request: function(e) {
          e = e || t.documentElement, e[n.requestFullscreen](
              e.ALLOW_KEYBOARD_INPUT);
        },
        exit: function() {
          t[n.exitFullscreen]();
        },
        toggle: function(e) {
          e = e || t.documentElement, this.isFullscreen()
              ? this.exit()
              : this.request(e);
        },
        isFullscreen: function() {
          return Boolean(t[n.fullscreenElement]);
        },
        enabled: function() {
          return Boolean(t[n.fullscreenEnabled]);
        },
      };
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
        },
        fullScreen: {
          autoStart: !1,
        },
      }), e(t).on({
        'onInit.fb': function(t, e) {
          var n;
          e && e.group[e.currIndex].opts.fullScreen
              ? (n = e.$refs.container, n.on('click.fb-fullscreen',
              '[data-fancybox-fullscreen]', function(t) {
                t.stopPropagation(), t.preventDefault(), o.toggle();
              }), e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 &&
              o.request(), e.FullScreen = o)
              : e && e.$refs.toolbar.find('[data-fancybox-fullscreen]').hide();
        },
        'afterKeydown.fb': function(t, e, n, o, a) {
          e && e.FullScreen && 70 === a &&
          (o.preventDefault(), e.FullScreen.toggle());
        },
        'beforeClose.fb': function(t, e) {
          e && e.FullScreen &&
          e.$refs.container.hasClass('fancybox-is-fullscreen') && o.exit();
        },
      }), e(t).on(n.fullscreenchange, function() {
        var t = o.isFullscreen(),
            n = e.fancybox.getInstance();
        n && (n.current && 'image' === n.current.type && n.isAnimating &&
        (n.current.$content.css('transition',
            'none'), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger(
            'onFullscreenChange', t), n.$refs.container.toggleClass(
            'fancybox-is-fullscreen', t), n.$refs.toolbar.find(
            '[data-fancybox-fullscreen]').
            toggleClass('fancybox-button--fsenter', !t).
            toggleClass('fancybox-button--fsexit', t));
      });
    }(document, window.jQuery || jQuery),
    function(t, e) {
      'use strict';
      var n = 'fancybox-thumbs',
          o = n + '-active';
      e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
          thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: '.fancybox-container',
          axis: 'y',
        },
      }, e.fancybox.defaults);
      var a = function(t) {
        this.init(t);
      };
      e.extend(a.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
          var e, n, o = this;
          o.instance = t, t.Thumbs = o, o.opts = t.group[t.currIndex].opts.thumbs, e = t.group[0], e = e.opts.thumb ||
              !(!e.opts.$thumb || !e.opts.$thumb.length) &&
              e.opts.$thumb.attr('src'), t.group.length > 1 &&
          (n = t.group[1], n = n.opts.thumb ||
              !(!n.opts.$thumb || !n.opts.$thumb.length) &&
              n.opts.$thumb.attr('src')), o.$button = t.$refs.toolbar.find(
              '[data-fancybox-thumbs]'), o.opts && e && n ? (o.$button.show().
              on('click', function() {
                o.toggle();
              }), o.isActive = !0) : o.$button.hide();
        },
        create: function() {
          var t, o = this,
              a = o.instance,
              i = o.opts.parentEl,
              s = [];
          o.$grid || (o.$grid = e(
              '<div class="' + n + ' ' + n + '-' + o.opts.axis + '"></div>').
              appendTo(
                  a.$refs.container.find(i).addBack().filter(i)), o.$grid.on(
              'click', 'a', function() {
                a.jumpTo(e(this).attr('data-index'));
              })), o.$list || (o.$list = e('<div class="' + n + '__list">').
              appendTo(o.$grid)), e.each(a.group, function(e, n) {
            t = n.opts.thumb ||
                (n.opts.$thumb ? n.opts.$thumb.attr('src') : null), t ||
            'image' !== n.type || (t = n.src), s.push(
                '<a href="javascript:;" tabindex="0" data-index="' + e + '" ' +
                (t && t.length
                    ? ' style="background-image:url(' + t + ')" />'
                    : '') + '></a>');
          }), o.$list[0].innerHTML = s.join(''), 'x' === o.opts.axis &&
          o.$list.width(
              parseInt(o.$grid.css('padding-right'), 10) + a.group.length *
              o.$list.children().eq(0).outerWidth(!0));
        },
        focus: function(t) {
          var e, n, a = this,
              i = a.$list,
              s = a.$grid;
          a.instance.current && (e = i.children().
              removeClass(o).
              filter('[data-index="' + a.instance.current.index + '"]').
              addClass(o), n = e.position(), 'y' === a.opts.axis &&
          (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().
              animate({
                scrollTop: i.scrollTop() + n.top,
              }, t) : 'x' === a.opts.axis &&
              (n.left < s.scrollLeft() || n.left > s.scrollLeft() +
                  (s.width() - e.outerWidth())) && i.parent().stop().animate({
                scrollLeft: n.left,
              }, t));
        },
        update: function() {
          var t = this;
          t.instance.$refs.container.toggleClass('fancybox-show-thumbs',
              this.isVisible), t.isVisible
              ? (t.$grid || t.create(), t.instance.trigger(
                  'onThumbsShow'), t.focus(0))
              : t.$grid &&
              t.instance.trigger('onThumbsHide'), t.instance.update();
        },
        hide: function() {
          this.isVisible = !1, this.update();
        },
        show: function() {
          this.isVisible = !0, this.update();
        },
        toggle: function() {
          this.isVisible = !this.isVisible, this.update();
        },
      }), e(t).on({
        'onInit.fb': function(t, e) {
          var n;
          e && !e.Thumbs &&
          (n = new a(e), n.isActive && n.opts.autoStart === !0 && n.show());
        },
        'beforeShow.fb': function(t, e, n, o) {
          var a = e && e.Thumbs;
          a && a.isVisible && a.focus(o ? 0 : 250);
        },
        'afterKeydown.fb': function(t, e, n, o, a) {
          var i = e && e.Thumbs;
          i && i.isActive && 71 === a && (o.preventDefault(), i.toggle());
        },
        'beforeClose.fb': function(t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide();
        },
      });
    }(document, window.jQuery || jQuery),
    function(t, e) {
      'use strict';

      function n(t) {
        var e = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          '\'': '&#39;',
          '/': '&#x2F;',
          '`': '&#x60;',
          '=': '&#x3D;',
        };
        return String(t).replace(/[&<>"'`=\/]/g, function(t) {
          return e[t];
        });
      }

      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
        },
        share: {
          url: function(t, e) {
            return !t.currentHash && 'inline' !== e.type && 'html' !== e.type &&
                (e.origSrc || e.src) || window.location;
          },
          tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
        },
      }), e(t).on('click', '[data-fancybox-share]', function() {
        var t, o, a = e.fancybox.getInstance(),
            i = a.current || null;
        i && ('function' === e.type(i.opts.share.url) &&
        (t = i.opts.share.url.apply(i, [a, i])), o = i.opts.share.tpl.replace(
            /\{\{media\}\}/g,
            'image' === i.type ? encodeURIComponent(i.src) : '').
            replace(/\{\{url\}\}/g, encodeURIComponent(t)).
            replace(/\{\{url_raw\}\}/g, n(t)).
            replace(/\{\{descr\}\}/g, a.$caption
                ? encodeURIComponent(a.$caption.text())
                : ''), e.fancybox.open({
          src: a.translate(a, o),
          type: 'html',
          opts: {
            touch: !1,
            animationEffect: !1,
            afterLoad: function(t, e) {
              a.$refs.container.one('beforeClose.fb', function() {
                t.close(null, 0);
              }), e.$content.find('.fancybox-share__button').click(function() {
                return window.open(this.href, 'Share',
                    'width=550, height=450'), !1;
              });
            },
            mobile: {
              autoFocus: !1,
            },
          },
        }));
      });
    }(document, window.jQuery || jQuery),
    function(t, e, n) {
      'use strict';

      function o() {
        var t = e.location.hash.substr(1),
            n = t.split('-'),
            o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(
                n.pop(-1), 10) || 1 : 1,
            a = n.join('-');
        return {
          hash: t,
          index: o < 1 ? 1 : o,
          gallery: a,
        };
      }

      function a(t) {
        '' !== t.gallery &&
        n('[data-fancybox=\'' + n.escapeSelector(t.gallery) + '\']').
            eq(t.index - 1).
            trigger('click.fb-start');
      }

      function i(t) {
        var e, n;
        return !!t && (e = t.current ? t.current.opts : t.opts, n = e.hash ||
            (e.$orig ? e.$orig.data('fancybox') ||
                e.$orig.data('fancybox-trigger') : ''), '' !== n && n);
      }

      n.escapeSelector || (n.escapeSelector = function(t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            n = function(t, e) {
              return e ? '\0' === t ? '�' : t.slice(0, -1) + '\\' +
                  t.charCodeAt(t.length - 1).toString(16) + ' ' : '\\' + t;
            };
        return (t + '').replace(e, n);
      }), n(function() {
        n.fancybox.defaults.hash !== !1 && (n(t).on({
          'onInit.fb': function(t, e) {
            var n, a;
            e.group[e.currIndex].opts.hash !== !1 &&
            (n = o(), a = i(e), a && n.gallery && a == n.gallery &&
            (e.currIndex = n.index - 1));
          },
          'beforeShow.fb': function(n, o, a, s) {
            var r;
            a && a.opts.hash !== !1 && (r = i(o), r && (o.currentHash = r +
                (o.group.length > 1
                    ? '-' + (a.index + 1)
                    : ''), e.location.hash !== '#' + o.currentHash &&
            (o.origHash || (o.origHash = e.location.hash), o.hashTimer &&
            clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function() {
              'replaceState' in e.history
                  ? (e.history[s
                  ? 'pushState'
                  : 'replaceState']({}, t.title,
                  e.location.pathname + e.location.search + '#' +
                  o.currentHash), s && (o.hasCreatedHistory = !0))
                  : e.location.hash = o.currentHash, o.hashTimer = null;
            }, 300))));
          },
          'beforeClose.fb': function(n, o, a) {
            a.opts.hash !== !1 &&
            (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory
                ? e.history.back()
                : o.currentHash && ('replaceState' in e.history
                ? e.history.replaceState({}, t.title,
                    e.location.pathname + e.location.search +
                    (o.origHash || ''))
                : e.location.hash = o.origHash), o.currentHash = null);
          },
        }), n(e).on('hashchange.fb', function() {
          var t = o(),
              e = null;
          n.each(n('.fancybox-container').get().reverse(), function(t, o) {
            var a = n(o).data('FancyBox');
            if (a && a.currentHash) return e = a, !1;
          }), e ? e.currentHash === t.gallery + '-' + t.index || 1 ===
              t.index && e.currentHash == t.gallery ||
              (e.currentHash = null, e.close()) : '' !== t.gallery && a(t);
        }), setTimeout(function() {
          n.fancybox.getInstance() || a(o());
        }, 50));
      });
    }(document, window, window.jQuery || jQuery),
    function(t, e) {
      'use strict';
      var n = (new Date).getTime();
      e(t).on({
        'onInit.fb': function(t, e, o) {
          e.$refs.stage.on(
              'mousewheel DOMMouseScroll wheel MozMousePixelScroll',
              function(t) {
                var o = e.current,
                    a = (new Date).getTime();
                e.group.length < 2 || o.opts.wheel === !1 || 'auto' ===
                o.opts.wheel && 'image' !== o.type ||
                (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass(
                    'fancybox-animated') ||
                (t = t.originalEvent || t, a - n < 250 ||
                (n = a, e[(-t.deltaY || -t.deltaX || t.wheelDelta ||
                    -t.detail) < 0 ? 'next' : 'previous']())));
              });
        },
      });
    }(document, window.jQuery || jQuery);

