/*! jQuery UI - v1.12.1 - 2016-09-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t) {
  'function' == typeof define && define.amd ? define(['jquery'], t) : t(jQuery);
})(function(t) {
  function e(t) {
    for (var e = t.css('visibility');
        "inherit" === e;) t = t.parent(), e = t.css('visibility');
    return 'hidden' !== e;
  }

  function i(t) {
    for (var e, i; t.length && t[0] !== document;) {
      if (e = t.css('position'), ('absolute' === e || 'relative' === e ||
          'fixed' === e) &&
      (i = parseInt(t.css('zIndex'), 10), !isNaN(i) && 0 !== i)) return i;
      t = t.parent();
    }
    return 0;
  }

  function s() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = 'ui-datepicker-div', this._inlineClass = 'ui-datepicker-inline', this._appendClass = 'ui-datepicker-append', this._triggerClass = 'ui-datepicker-trigger', this._dialogClass = 'ui-datepicker-dialog', this._disableClass = 'ui-datepicker-disabled', this._unselectableClass = 'ui-datepicker-unselectable', this._currentClass = 'ui-datepicker-current-day', this._dayOverClass = 'ui-datepicker-days-cell-over', this.regional = [], this.regional[''] = {
      closeText: 'Done',
      prevText: 'Prev',
      nextText: 'Next',
      currentText: 'Today',
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'],
      monthNamesShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'],
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      weekHeader: 'Wk',
      dateFormat: 'mm/dd/yy',
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: '',
    }, this._defaults = {
      showOn: 'focus',
      showAnim: 'fadeIn',
      showOptions: {},
      defaultDate: null,
      appendText: '',
      buttonText: '...',
      buttonImage: '',
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: 'c-10:c+10',
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: '+10',
      minDate: null,
      maxDate: null,
      duration: 'fast',
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: '',
      altFormat: '',
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1,
    }, t.extend(this._defaults, this.regional['']), this.regional.en = t.extend(
        !0, {}, this.regional['']), this.regional['en-US'] = t.extend(!0, {},
        this.regional.en), this.dpDiv = n(t('<div id=\'' + this._mainDivId +
        '\' class=\'ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>'));
  }

  function n(e) {
    var i = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
    return e.on('mouseout', i, function() {
      t(this).removeClass('ui-state-hover'), -1 !==
      this.className.indexOf('ui-datepicker-prev') &&
      t(this).removeClass('ui-datepicker-prev-hover'), -1 !==
      this.className.indexOf('ui-datepicker-next') &&
      t(this).removeClass('ui-datepicker-next-hover');
    }).on('mouseover', i, o);
  }

  function o() {
    t.datepicker._isDisabledDatepicker(
        m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).
        parents('.ui-datepicker-calendar').
        find('a').
        removeClass('ui-state-hover'), t(this).
        addClass('ui-state-hover'), -1 !==
    this.className.indexOf('ui-datepicker-prev') &&
    t(this).addClass('ui-datepicker-prev-hover'), -1 !==
    this.className.indexOf('ui-datepicker-next') &&
    t(this).addClass('ui-datepicker-next-hover'));
  }

  function a(e, i) {
    t.extend(e, i);
    for (var s in i) null == i[s] && (e[s] = i[s]);
    return e;
  }

  function r(t) {
    return function() {
      var e = this.element.val();
      t.apply(this, arguments), this._refresh(), e !== this.element.val() &&
      this._trigger('change');
    };
  }

  t.ui = t.ui || {}, t.ui.version = '1.12.1';
  var h = 0,
      l = Array.prototype.slice;
  t.cleanData = function(e) {
    return function(i) {
      var s, n, o;
      for (o = 0; null != (n = i[o]); o++) try {
        s = t._data(n, 'events'), s && s.remove &&
        t(n).triggerHandler('remove');
      } catch (a) {}
      e(i);
    };
  }(t.cleanData), t.widget = function(e, i, s) {
    var n, o, a, r = {},
        h = e.split('.')[0];
    e = e.split('.')[1];
    var l = h + '-' + e;
    return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null,
        [{}].concat(s))), t.expr[':'][l.toLowerCase()] = function(e) {
      return !!t.data(e, l);
    }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function(t, e) {
      return this._createWidget ? (arguments.length &&
      this._createWidget(t, e), void 0) : new o(t, e);
    }, t.extend(o, n, {
      version: s.version,
      _proto: t.extend({}, s),
      _childConstructors: [],
    }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s,
        function(e, s) {
          return t.isFunction(s) ? (r[e] = function() {
            function t() {
              return i.prototype[e].apply(this, arguments);
            }

            function n(t) {
              return i.prototype[e].apply(this, t);
            }

            return function() {
              var e, i = this._super,
                  o = this._superApply;
              return this._super = t, this._superApply = n, e = s.apply(this,
                  arguments), this._super = i, this._superApply = o, e;
            };
          }(), void 0) : (r[e] = s, void 0);
        }), o.prototype = t.widget.extend(a, {
      widgetEventPrefix: n ? a.widgetEventPrefix || e : e,
    }, r, {
      constructor: o,
      namespace: h,
      widgetName: e,
      widgetFullName: l,
    }), n ? (t.each(n._childConstructors, function(e, i) {
      var s = i.prototype;
      t.widget(s.namespace + '.' + s.widgetName, o, i._proto);
    }), delete n._childConstructors) : i._childConstructors.push(
        o), t.widget.bridge(e, o), o;
  }, t.widget.extend = function(e) {
    for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++)
      for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s &&
      (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({},
          e[i], s) : t.widget.extend({}, s) : s);
    return e;
  }, t.widget.bridge = function(e, i) {
    var s = i.prototype.widgetFullName || e;
    t.fn[e] = function(n) {
      var o = 'string' == typeof n,
          a = l.call(arguments, 1),
          r = this;
      return o ? this.length || 'instance' !== n ? this.each(function() {
        var i, o = t.data(this, s);
        return 'instance' === n ? (r = o, !1) : o
            ? t.isFunction(o[n]) && '_' !== n.charAt(0) ? (i = o[n].apply(o,
                a), i !== o && void 0 !== i
                ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1)
                : void 0) : t.error(
                'no such method \'' + n + '\' for ' + e + ' widget instance')
            : t.error(
                'cannot call methods on ' + e + ' prior to initialization; ' +
                'attempted to call method \'' + n + '\'');
      }) : r = void 0 : (a.length &&
      (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function() {
        var e = t.data(this, s);
        e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s,
            new i(n, this));
      })), r;
    };
  }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
    widgetName: 'widget',
    widgetEventPrefix: '',
    defaultElement: '<div>',
    options: {
      classes: {},
      disabled: !1,
      create: null,
    },
    _createWidget: function(e, i) {
      i = t(i || this.defaultElement || this)[0], this.element = t(
          i), this.uuid = h++, this.eventNamespace = '.' + this.widgetName +
          this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !==
      this &&
      (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function(t) {
          t.target === i && this.destroy();
        },
      }), this.document = t(
          i.style ? i.ownerDocument : i.document || i), this.window = t(
          this.document[0].defaultView ||
          this.document[0].parentWindow)), this.options = t.widget.extend({},
          this.options, this._getCreateOptions(),
          e), this._create(), this.options.disabled &&
      this._setOptionDisabled(this.options.disabled), this._trigger('create',
          null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: function() {
      return {};
    },
    _getCreateEventData: t.noop,
    _create: t.noop,
    _init: t.noop,
    destroy: function() {
      var e = this;
      this._destroy(), t.each(this.classesElementLookup, function(t, i) {
        e._removeClass(i, t);
      }), this.element.off(this.eventNamespace).
          removeData(this.widgetFullName), this.widget().
          off(this.eventNamespace).
          removeAttr('aria-disabled'), this.bindings.off(this.eventNamespace);
    },
    _destroy: t.noop,
    widget: function() {
      return this.element;
    },
    option: function(e, i) {
      var s, n, o, a = e;
      if (0 === arguments.length) return t.widget.extend({}, this.options);
      if ('string' == typeof e)
        if (a = {}, s = e.split('.'), e = s.shift(), s.length) {
          for (n = a[e] = t.widget.extend({},
              this.options[e]), o = 0; s.length - 1 >
          o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
          if (e = s.pop(), 1 === arguments.length) return void 0 === n[e]
              ? null
              : n[e];
          n[e] = i;
        } else {
          if (1 === arguments.length) return void 0 === this.options[e]
              ? null
              : this.options[e];
          a[e] = i;
        }
      return this._setOptions(a), this;
    },
    _setOptions: function(t) {
      var e;
      for (e in t) this._setOption(e, t[e]);
      return this;
    },
    _setOption: function(t, e) {
      return 'classes' === t &&
      this._setOptionClasses(e), this.options[t] = e, 'disabled' === t &&
      this._setOptionDisabled(e), this;
    },
    _setOptionClasses: function(e) {
      var i, s, n;
      for (i in e) n = this.classesElementLookup[i], e[i] !==
      this.options.classes[i] && n && n.length &&
      (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
        element: s,
        keys: i,
        classes: e,
        add: !0,
      })));
    },
    _setOptionDisabled: function(t) {
      this._toggleClass(this.widget(), this.widgetFullName + '-disabled', null,
          !!t), t && (this._removeClass(this.hoverable, null,
          'ui-state-hover'), this._removeClass(this.focusable, null,
          'ui-state-focus'));
    },
    enable: function() {
      return this._setOptions({
        disabled: !1,
      });
    },
    disable: function() {
      return this._setOptions({
        disabled: !0,
      });
    },
    _classes: function(e) {
      function i(i, o) {
        var a, r;
        for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] ||
            t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(
            a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(
            i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
      }

      var s = [],
          n = this;
      return e = t.extend({
        element: this.element,
        classes: this.options.classes || {},
      }, e), this._on(e.element, {
        remove: '_untrackClassesElement',
      }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra &&
      i(e.extra.match(/\S+/g) || []), s.join(' ');
    },
    _untrackClassesElement: function(e) {
      var i = this;
      t.each(i.classesElementLookup, function(s, n) {
        -1 !== t.inArray(e.target, n) &&
        (i.classesElementLookup[s] = t(n.not(e.target).get()));
      });
    },
    _removeClass: function(t, e, i) {
      return this._toggleClass(t, e, i, !1);
    },
    _addClass: function(t, e, i) {
      return this._toggleClass(t, e, i, !0);
    },
    _toggleClass: function(t, e, i, s) {
      s = 'boolean' == typeof s ? s : i;
      var n = 'string' == typeof t || null === t,
          o = {
            extra: n ? e : i,
            keys: n ? t : e,
            element: n ? this.element : t,
            add: s,
          };
      return o.element.toggleClass(this._classes(o), s), this;
    },
    _on: function(e, i, s) {
      var n, o = this;
      'boolean' != typeof e && (s = i, i = e, e = !1), s
          ? (i = n = t(i), this.bindings = this.bindings.add(i))
          : (s = i, i = this.element, n = this.widget()), t.each(s,
          function(s, a) {
            function r() {
              return e || o.options.disabled !== !0 &&
              !t(this).hasClass('ui-state-disabled') ? ('string' == typeof a
                  ? o[a]
                  : a).apply(o, arguments) : void 0;
            }

            'string' != typeof a &&
            (r.guid = a.guid = a.guid || r.guid || t.guid++);
            var h = s.match(/^([\w:-]*)\s*(.*)$/),
                l = h[1] + o.eventNamespace,
                c = h[2];
            c ? n.on(l, c, r) : i.on(l, r);
          });
    },
    _off: function(e, i) {
      i = (i || '').split(' ').join(this.eventNamespace + ' ') +
          this.eventNamespace, e.off(i).off(i), this.bindings = t(
          this.bindings.not(e).get()), this.focusable = t(
          this.focusable.not(e).get()), this.hoverable = t(
          this.hoverable.not(e).get());
    },
    _delay: function(t, e) {
      function i() {
        return ('string' == typeof t ? s[t] : t).apply(s, arguments);
      }

      var s = this;
      return setTimeout(i, e || 0);
    },
    _hoverable: function(e) {
      this.hoverable = this.hoverable.add(e), this._on(e, {
        mouseenter: function(e) {
          this._addClass(t(e.currentTarget), null, 'ui-state-hover');
        },
        mouseleave: function(e) {
          this._removeClass(t(e.currentTarget), null, 'ui-state-hover');
        },
      });
    },
    _focusable: function(e) {
      this.focusable = this.focusable.add(e), this._on(e, {
        focusin: function(e) {
          this._addClass(t(e.currentTarget), null, 'ui-state-focus');
        },
        focusout: function(e) {
          this._removeClass(t(e.currentTarget), null, 'ui-state-focus');
        },
      });
    },
    _trigger: function(e, i, s) {
      var n, o, a = this.options[e];
      if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix
          ? e
          : this.widgetEventPrefix +
          e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
        for (n in o) n in i || (i[n] = o[n]);
      return this.element.trigger(i, s), !(t.isFunction(a) &&
          a.apply(this.element[0], [i].concat(s)) === !1 ||
          i.isDefaultPrevented());
    },
  }, t.each({
    show: 'fadeIn',
    hide: 'fadeOut',
  }, function(e, i) {
    t.Widget.prototype['_' + e] = function(s, n, o) {
      'string' == typeof n && (n = {
        effect: n,
      });
      var a, r = n ? n === !0 || 'number' == typeof n ? i : n.effect || i : e;
      n = n || {}, 'number' == typeof n && (n = {
        duration: n,
      }), a = !t.isEmptyObject(n), n.complete = o, n.delay &&
      s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !==
      e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
        t(this)[e](), o && o.call(s[0]), i();
      });
    };
  }), t.widget,
      function() {
        function e(t, e, i) {
          return [
            parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1),
            parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)];
        }

        function i(e, i) {
          return parseInt(t.css(e, i), 10) || 0;
        }

        function s(e) {
          var i = e[0];
          return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
              top: 0,
              left: 0,
            },
          } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
              top: e.scrollTop(),
              left: e.scrollLeft(),
            },
          } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
              top: i.pageY,
              left: i.pageX,
            },
          } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset(),
          };
        }

        var n, o = Math.max,
            a = Math.abs,
            r = /left|center|right/,
            h = /top|center|bottom/,
            l = /[\+\-]\d+(\.[\d]+)?%?/,
            c = /^\w+/,
            u = /%$/,
            d = t.fn.position;
        t.position = {
          scrollbarWidth: function() {
            if (void 0 !== n) return n;
            var e, i, s = t(
                '<div style=\'display:block;position:absolute;width:50px;height:50px;overflow:hidden;\'><div style=\'height:100px;width:auto;\'></div></div>'),
                o = s.children()[0];
            return t('body').append(s), e = o.offsetWidth, s.css('overflow',
                'scroll'), i = o.offsetWidth, e === i &&
            (i = s[0].clientWidth), s.remove(), n = e - i;
          },
          getScrollInfo: function(e) {
            var i = e.isWindow || e.isDocument ? '' : e.element.css(
                'overflow-x'),
                s = e.isWindow || e.isDocument ? '' : e.element.css(
                    'overflow-y'),
                n = 'scroll' === i || 'auto' === i && e.width <
                    e.element[0].scrollWidth,
                o = 'scroll' === s || 'auto' === s && e.height <
                    e.element[0].scrollHeight;
            return {
              width: o ? t.position.scrollbarWidth() : 0,
              height: n ? t.position.scrollbarWidth() : 0,
            };
          },
          getWithinInfo: function(e) {
            var i = t(e || window),
                s = t.isWindow(i[0]),
                n = !!i[0] && 9 === i[0].nodeType,
                o = !s && !n;
            return {
              element: i,
              isWindow: s,
              isDocument: n,
              offset: o ? t(e).offset() : {
                left: 0,
                top: 0,
              },
              scrollLeft: i.scrollLeft(),
              scrollTop: i.scrollTop(),
              width: i.outerWidth(),
              height: i.outerHeight(),
            };
          },
        }, t.fn.position = function(n) {
          if (!n || !n.of) return d.apply(this, arguments);
          n = t.extend({}, n);
          var u, p, f, g, m, _, v = t(n.of),
              b = t.position.getWithinInfo(n.within),
              y = t.position.getScrollInfo(b),
              w = (n.collision || 'flip').split(' '),
              k = {};
          return _ = s(v), v[0].preventDefault &&
          (n.at = 'left top'), p = _.width, f = _.height, g = _.offset, m = t.extend(
              {}, g), t.each(['my', 'at'], function() {
            var t, e, i = (n[this] || '').split(' ');
            1 === i.length &&
            (i = r.test(i[0]) ? i.concat(['center']) : h.test(i[0])
                ? ['center'].concat(i)
                : ['center', 'center']), i[0] = r.test(i[0])
                ? i[0]
                : 'center', i[1] = h.test(i[1]) ? i[1] : 'center', t = l.exec(
                i[0]), e = l.exec(i[1]), k[this] = [
              t ? t[0] : 0,
              e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]];
          }), 1 === w.length && (w[1] = w[0]), 'right' === n.at[0]
              ? m.left += p
              : 'center' === n.at[0] && (m.left += p / 2), 'bottom' === n.at[1]
              ? m.top += f
              : 'center' === n.at[1] && (m.top += f / 2), u = e(k.at, p,
              f), m.left += u[0], m.top += u[1], this.each(function() {
            var s, r, h = t(this),
                l = h.outerWidth(),
                c = h.outerHeight(),
                d = i(this, 'marginLeft'),
                _ = i(this, 'marginTop'),
                x = l + d + i(this, 'marginRight') + y.width,
                C = c + _ + i(this, 'marginBottom') + y.height,
                D = t.extend({}, m),
                I = e(k.my, h.outerWidth(), h.outerHeight());
            'right' === n.my[0] ? D.left -= l : 'center' === n.my[0] &&
                (D.left -= l / 2), 'bottom' === n.my[1]
                ? D.top -= c
                : 'center' === n.my[1] &&
                (D.top -= c / 2), D.left += I[0], D.top += I[1], s = {
              marginLeft: d,
              marginTop: _,
            }, t.each(['left', 'top'], function(e, i) {
              t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
                targetWidth: p,
                targetHeight: f,
                elemWidth: l,
                elemHeight: c,
                collisionPosition: s,
                collisionWidth: x,
                collisionHeight: C,
                offset: [u[0] + I[0], u[1] + I[1]],
                my: n.my,
                at: n.at,
                within: b,
                elem: h,
              });
            }), n.using && (r = function(t) {
              var e = g.left - D.left,
                  i = e + p - l,
                  s = g.top - D.top,
                  r = s + f - c,
                  u = {
                    target: {
                      element: v,
                      left: g.left,
                      top: g.top,
                      width: p,
                      height: f,
                    },
                    element: {
                      element: h,
                      left: D.left,
                      top: D.top,
                      width: l,
                      height: c,
                    },
                    horizontal: 0 > i ? 'left' : e > 0 ? 'right' : 'center',
                    vertical: 0 > r ? 'top' : s > 0 ? 'bottom' : 'middle',
                  };
              l > p && p > a(e + i) && (u.horizontal = 'center'), c > f && f >
              a(s + r) && (u.vertical = 'middle'), u.important = o(a(e), a(i)) >
              o(a(s), a(r)) ? 'horizontal' : 'vertical', n.using.call(this, t,
                  u);
            }), h.offset(t.extend(D, {
              using: r,
            }));
          });
        }, t.ui.position = {
          fit: {
            left: function(t, e) {
              var i, s = e.within,
                  n = s.isWindow ? s.scrollLeft : s.offset.left,
                  a = s.width,
                  r = t.left - e.collisionPosition.marginLeft,
                  h = n - r,
                  l = r + e.collisionWidth - a - n;
              e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h +
                  e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 &&
              0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0
                  ? t.left += h
                  : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left);
            },
            top: function(t, e) {
              var i, s = e.within,
                  n = s.isWindow ? s.scrollTop : s.offset.top,
                  a = e.within.height,
                  r = t.top - e.collisionPosition.marginTop,
                  h = n - r,
                  l = r + e.collisionHeight - a - n;
              e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h +
                  e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 &&
              0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0
                  ? t.top += h
                  : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top);
            },
          },
          flip: {
            left: function(t, e) {
              var i, s, n = e.within,
                  o = n.offset.left + n.scrollLeft,
                  r = n.width,
                  h = n.isWindow ? n.scrollLeft : n.offset.left,
                  l = t.left - e.collisionPosition.marginLeft,
                  c = l - h,
                  u = l + e.collisionWidth - r - h,
                  d = 'left' === e.my[0] ? -e.elemWidth : 'right' === e.my[0]
                      ? e.elemWidth
                      : 0,
                  p = 'left' === e.at[0] ? e.targetWidth : 'right' === e.at[0]
                      ? -e.targetWidth
                      : 0,
                  f = -2 * e.offset[0];
              0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 >
                  i || a(c) > i) && (t.left += d + p + f)) : u > 0 &&
                  (s = t.left - e.collisionPosition.marginLeft + d + p + f -
                      h, (s > 0 || u > a(s)) && (t.left += d + p + f));
            },
            top: function(t, e) {
              var i, s, n = e.within,
                  o = n.offset.top + n.scrollTop,
                  r = n.height,
                  h = n.isWindow ? n.scrollTop : n.offset.top,
                  l = t.top - e.collisionPosition.marginTop,
                  c = l - h,
                  u = l + e.collisionHeight - r - h,
                  d = 'top' === e.my[1],
                  p = d ? -e.elemHeight : 'bottom' === e.my[1]
                      ? e.elemHeight
                      : 0,
                  f = 'top' === e.at[1] ? e.targetHeight : 'bottom' === e.at[1]
                      ? -e.targetHeight
                      : 0,
                  g = -2 * e.offset[1];
              0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 >
                  s || a(c) > s) && (t.top += p + f + g)) : u > 0 &&
                  (i = t.top - e.collisionPosition.marginTop + p + f + g -
                      h, (i > 0 || u > a(i)) && (t.top += p + f + g));
            },
          },
          flipfit: {
            left: function() {
              t.ui.position.flip.left.apply(this,
                  arguments), t.ui.position.fit.left.apply(this, arguments);
            },
            top: function() {
              t.ui.position.flip.top.apply(this,
                  arguments), t.ui.position.fit.top.apply(this, arguments);
            },
          },
        };
      }(), t.ui.position, t.extend(t.expr[':'], {
    data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
      return function(i) {
        return !!t.data(i, e);
      };
    }) : function(e, i, s) {
      return !!t.data(e, s[3]);
    },
  }), t.fn.extend({
    disableSelection: function() {
      var t = 'onselectstart' in document.createElement('div')
          ? 'selectstart'
          : 'mousedown';
      return function() {
        return this.on(t + '.ui-disableSelection', function(t) {
          t.preventDefault();
        });
      };
    }(),
    enableSelection: function() {
      return this.off('.ui-disableSelection');
    },
  });
  var c = 'ui-effects-',
      u = 'ui-effects-style',
      d = 'ui-effects-animated',
      p = t;
  t.effects = {
    effect: {},
  },
      function(t, e) {
        function i(t, e, i) {
          var s = u[e.type] || {};
          return null == t ? i || !e.def ? null : e.def : (t = s.floor
              ? ~~t
              : parseFloat(t), isNaN(t) ? e.def : s.mod
              ? (t + s.mod) % s.mod
              : 0 > t ? 0 : t > s.max ? s.max : t);
        }

        function s(i) {
          var s = l(),
              n = s._rgba = [];
          return i = i.toLowerCase(), f(h, function(t, o) {
            var a, r = o.re.exec(i),
                h = r && o.parse(r),
                l = o.space || 'rgba';
            return h
                ? (a = s[l](
                    h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1)
                : e;
          }), n.length ? ('0,0,0,0' === n.join() &&
          t.extend(n, o.transparent), s) : o[i];
        }

        function n(t, e, i) {
          return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i
              ? e
              : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t;
        }

        var o,
            a = 'backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor',
            r = /^([\-+])=\s*(\d+\.?\d*)/,
            h = [
              {
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(t) {
                  return [t[1], t[2], t[3], t[4]];
                },
              }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(t) {
                  return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
                },
              }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(t) {
                  return [
                    parseInt(t[1], 16),
                    parseInt(t[2], 16),
                    parseInt(t[3], 16)];
                },
              }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(t) {
                  return [
                    parseInt(t[1] + t[1], 16),
                    parseInt(t[2] + t[2], 16),
                    parseInt(t[3] + t[3], 16)];
                },
              }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: 'hsla',
                parse: function(t) {
                  return [t[1], t[2] / 100, t[3] / 100, t[4]];
                },
              }],
            l = t.Color = function(e, i, s, n) {
              return new t.Color.fn.parse(e, i, s, n);
            },
            c = {
              rgba: {
                props: {
                  red: {
                    idx: 0,
                    type: 'byte',
                  },
                  green: {
                    idx: 1,
                    type: 'byte',
                  },
                  blue: {
                    idx: 2,
                    type: 'byte',
                  },
                },
              },
              hsla: {
                props: {
                  hue: {
                    idx: 0,
                    type: 'degrees',
                  },
                  saturation: {
                    idx: 1,
                    type: 'percent',
                  },
                  lightness: {
                    idx: 2,
                    type: 'percent',
                  },
                },
              },
            },
            u = {
              'byte': {
                floor: !0,
                max: 255,
              },
              percent: {
                max: 1,
              },
              degrees: {
                mod: 360,
                floor: !0,
              },
            },
            d = l.support = {},
            p = t('<p>')[0],
            f = t.each;
        p.style.cssText = 'background-color:rgba(1,1,1,.5)', d.rgba = p.style.backgroundColor.indexOf(
            'rgba') > -1, f(c, function(t, e) {
          e.cache = '_' + t, e.props.alpha = {
            idx: 3,
            type: 'percent',
            def: 1,
          };
        }), l.fn = t.extend(l.prototype, {
          parse: function(n, a, r, h) {
            if (n === e) return this._rgba = [null, null, null, null], this;
            (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
            var u = this,
                d = t.type(n),
                p = this._rgba = [];
            return a !== e && (n = [n, a, r, h], d = 'array'), 'string' === d
                ? this.parse(s(n) || o._default)
                : 'array' === d ? (f(c.rgba.props, function(t, e) {
                  p[e.idx] = i(n[e.idx], e);
                }), this) : 'object' === d ? (n instanceof l ? f(c,
                    function(t, e) {
                      n[e.cache] && (u[e.cache] = n[e.cache].slice());
                    }) : f(c, function(e, s) {
                  var o = s.cache;
                  f(s.props, function(t, e) {
                    if (!u[o] && s.to) {
                      if ('alpha' === t || null == n[t]) return;
                      u[o] = s.to(u._rgba);
                    }
                    u[o][e.idx] = i(n[t], e, !0);
                  }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) &&
                  (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])));
                }), this) : e;
          },
          is: function(t) {
            var i = l(t),
                s = !0,
                n = this;
            return f(c, function(t, o) {
              var a, r = i[o.cache];
              return r &&
              (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props,
                  function(t, i) {
                    return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e;
                  })), s;
            }), s;
          },
          _space: function() {
            var t = [],
                e = this;
            return f(c, function(i, s) {
              e[s.cache] && t.push(i);
            }), t.pop();
          },
          transition: function(t, e) {
            var s = l(t),
                n = s._space(),
                o = c[n],
                a = 0 === this.alpha() ? l('transparent') : this,
                r = a[o.cache] || o.to(a._rgba),
                h = r.slice();
            return s = s[o.cache], f(o.props, function(t, n) {
              var o = n.idx,
                  a = r[o],
                  l = s[o],
                  c = u[n.type] || {};
              null !== l && (null === a ? h[o] = l : (c.mod &&
              (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 &&
                  (a -= c.mod)), h[o] = i((l - a) * e + a, n)));
            }), this[n](h);
          },
          blend: function(e) {
            if (1 === this._rgba[3]) return this;
            var i = this._rgba.slice(),
                s = i.pop(),
                n = l(e)._rgba;
            return l(t.map(i, function(t, e) {
              return (1 - s) * n[e] + s * t;
            }));
          },
          toRgbaString: function() {
            var e = 'rgba(',
                i = t.map(this._rgba, function(t, e) {
                  return null == t ? e > 2 ? 1 : 0 : t;
                });
            return 1 === i[3] && (i.pop(), e = 'rgb('), e + i.join() + ')';
          },
          toHslaString: function() {
            var e = 'hsla(',
                i = t.map(this.hsla(), function(t, e) {
                  return null == t && (t = e > 2 ? 1 : 0), e && 3 > e &&
                  (t = Math.round(100 * t) + '%'), t;
                });
            return 1 === i[3] && (i.pop(), e = 'hsl('), e + i.join() + ')';
          },
          toHexString: function(e) {
            var i = this._rgba.slice(),
                s = i.pop();
            return e && i.push(~~(255 * s)), '#' + t.map(i, function(t) {
              return t = (t || 0).toString(16), 1 === t.length ? '0' + t : t;
            }).join('');
          },
          toString: function() {
            return 0 === this._rgba[3] ? 'transparent' : this.toRgbaString();
          },
        }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
          if (null == t[0] || null == t[1] || null == t[2]) return [
            null,
            null,
            null,
            t[3]];
          var e, i, s = t[0] / 255,
              n = t[1] / 255,
              o = t[2] / 255,
              a = t[3],
              r = Math.max(s, n, o),
              h = Math.min(s, n, o),
              l = r - h,
              c = r + h,
              u = .5 * c;
          return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r
              ? 60 * (o - s) / l + 120
              : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l /
              (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a];
        }, c.hsla.from = function(t) {
          if (null == t[0] || null == t[1] || null == t[2]) return [
            null,
            null,
            null,
            t[3]];
          var e = t[0] / 360,
              i = t[1],
              s = t[2],
              o = t[3],
              a = .5 >= s ? s * (1 + i) : s + i - s * i,
              r = 2 * s - a;
          return [
            Math.round(255 * n(r, a, e + 1 / 3)),
            Math.round(255 * n(r, a, e)),
            Math.round(255 * n(r, a, e - 1 / 3)),
            o];
        }, f(c, function(s, n) {
          var o = n.props,
              a = n.cache,
              h = n.to,
              c = n.from;
          l.fn[s] = function(s) {
            if (h && !this[a] && (this[a] = h(this._rgba)), s ===
            e) return this[a].slice();
            var n, r = t.type(s),
                u = 'array' === r || 'object' === r ? s : arguments,
                d = this[a].slice();
            return f(o, function(t, e) {
              var s = u['object' === r ? t : e.idx];
              null == s && (s = d[e.idx]), d[e.idx] = i(s, e);
            }), c ? (n = l(c(d)), n[a] = d, n) : l(d);
          }, f(o, function(e, i) {
            l.fn[e] || (l.fn[e] = function(n) {
              var o, a = t.type(n),
                  h = 'alpha' === e ? this._hsla ? 'hsla' : 'rgba' : s,
                  l = this[h](),
                  c = l[i.idx];
              return 'undefined' === a ? c : ('function' === a &&
              (n = n.call(this, c), a = t.type(n)), null == n && i.empty
                  ? this
                  : ('string' === a && (o = r.exec(n), o &&
                  (n = c + parseFloat(o[2]) *
                      ('+' === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)));
            });
          });
        }), l.hook = function(e) {
          var i = e.split(' ');
          f(i, function(e, i) {
            t.cssHooks[i] = {
              set: function(e, n) {
                var o, a, r = '';
                if ('transparent' !== n &&
                    ('string' !== t.type(n) || (o = s(n)))) {
                  if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
                    for (a = 'backgroundColor' === i ? e.parentNode : e;
                        ("" === r || "transparent" === r) && a &&
                        a.style;) try {
                      r = t.css(a, 'backgroundColor'), a = a.parentNode;
                    } catch (h) {}
                    n = n.blend(r && 'transparent' !== r ? r : '_default');
                  }
                  n = n.toRgbaString();
                }
                try {
                  e.style[i] = n;
                } catch (h) {}
              },
            }, t.fx.step[i] = function(e) {
              e.colorInit || (e.start = l(e.elem, i), e.end = l(
                  e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem,
                  e.start.transition(e.end, e.pos));
            };
          });
        }, l.hook(a), t.cssHooks.borderColor = {
          expand: function(t) {
            var e = {};
            return f(['Top', 'Right', 'Bottom', 'Left'], function(i, s) {
              e['border' + s + 'Color'] = t;
            }), e;
          },
        }, o = t.Color.names = {
          aqua: '#00ffff',
          black: '#000000',
          blue: '#0000ff',
          fuchsia: '#ff00ff',
          gray: '#808080',
          green: '#008000',
          lime: '#00ff00',
          maroon: '#800000',
          navy: '#000080',
          olive: '#808000',
          purple: '#800080',
          red: '#ff0000',
          silver: '#c0c0c0',
          teal: '#008080',
          white: '#ffffff',
          yellow: '#ffff00',
          transparent: [null, null, null, 0],
          _default: '#ffffff',
        };
      }(p),
      function() {
        function e(e) {
          var i, s, n = e.ownerDocument.defaultView
              ? e.ownerDocument.defaultView.getComputedStyle(e, null)
              : e.currentStyle,
              o = {};
          if (n && n.length && n[0] && n[n[0]])
            for (s = n.length; s--;) i = n[s], 'string' == typeof n[i] &&
            (o[t.camelCase(i)] = n[i]);
          else
            for (i in n) 'string' == typeof n[i] && (o[i] = n[i]);
          return o;
        }

        function i(e, i) {
          var s, o, a = {};
          for (s in i) o = i[s], e[s] !== o &&
          (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
          return a;
        }

        var s = ['add', 'remove', 'toggle'],
            n = {
              border: 1,
              borderBottom: 1,
              borderColor: 1,
              borderLeft: 1,
              borderRight: 1,
              borderTop: 1,
              borderWidth: 1,
              margin: 1,
              padding: 1,
            };
        t.each([
          'borderLeftStyle',
          'borderRightStyle',
          'borderBottomStyle',
          'borderTopStyle'], function(e, i) {
          t.fx.step[i] = function(t) {
            ('none' !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) &&
            (p.style(t.elem, i, t.end), t.setAttr = !0);
          };
        }), t.fn.addBack || (t.fn.addBack = function(t) {
          return this.add(
              null == t ? this.prevObject : this.prevObject.filter(t));
        }), t.effects.animateClass = function(n, o, a, r) {
          var h = t.speed(o, a, r);
          return this.queue(function() {
            var o, a = t(this),
                r = a.attr('class') || '',
                l = h.children ? a.find('*').addBack() : a;
            l = l.map(function() {
              var i = t(this);
              return {
                el: i,
                start: e(this),
              };
            }), o = function() {
              t.each(s, function(t, e) {
                n[e] && a[e + 'Class'](n[e]);
              });
            }, o(), l = l.map(function() {
              return this.end = e(this.el[0]), this.diff = i(this.start,
                  this.end), this;
            }), a.attr('class', r), l = l.map(function() {
              var e = this,
                  i = t.Deferred(),
                  s = t.extend({}, h, {
                    queue: !1,
                    complete: function() {
                      i.resolve(e);
                    },
                  });
              return this.el.animate(this.diff, s), i.promise();
            }), t.when.apply(t, l.get()).done(function() {
              o(), t.each(arguments, function() {
                var e = this.el;
                t.each(this.diff, function(t) {
                  e.css(t, '');
                });
              }), h.complete.call(a[0]);
            });
          });
        }, t.fn.extend({
          addClass: function(e) {
            return function(i, s, n, o) {
              return s ? t.effects.animateClass.call(this, {
                add: i,
              }, s, n, o) : e.apply(this, arguments);
            };
          }(t.fn.addClass),
          removeClass: function(e) {
            return function(i, s, n, o) {
              return arguments.length > 1 ? t.effects.animateClass.call(this, {
                remove: i,
              }, s, n, o) : e.apply(this, arguments);
            };
          }(t.fn.removeClass),
          toggleClass: function(e) {
            return function(i, s, n, o, a) {
              return 'boolean' == typeof s || void 0 === s ? n
                  ? t.effects.animateClass.call(this, s ? {
                    add: i,
                  } : {
                    remove: i,
                  }, n, o, a)
                  : e.apply(this, arguments) : t.effects.animateClass.call(this,
                  {
                    toggle: i,
                  }, s, n, o);
            };
          }(t.fn.toggleClass),
          switchClass: function(e, i, s, n, o) {
            return t.effects.animateClass.call(this, {
              add: i,
              remove: e,
            }, s, n, o);
          },
        });
      }(),
      function() {
        function e(e, i, s, n) {
          return t.isPlainObject(e) && (i = e, e = e.effect), e = {
            effect: e,
          }, null == i && (i = {}), t.isFunction(i) &&
          (n = i, s = null, i = {}), ('number' == typeof i || t.fx.speeds[i]) &&
          (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i &&
          t.extend(e, i), s = s || i.duration, e.duration = t.fx.off
              ? 0
              : 'number' == typeof s ? s : s in t.fx.speeds
                  ? t.fx.speeds[s]
                  : t.fx.speeds._default, e.complete = n || i.complete, e;
        }

        function i(e) {
          return !e || 'number' == typeof e || t.fx.speeds[e] ? !0 : 'string' !=
          typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : 'object' !=
          typeof e || e.effect ? !1 : !0 : !0;
        }

        function s(t, e) {
          var i = e.outerWidth(),
              s = e.outerHeight(),
              n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
              o = n.exec(t) || ['', 0, i, s, 0];
          return {
            top: parseFloat(o[1]) || 0,
            right: 'auto' === o[2] ? i : parseFloat(o[2]),
            bottom: 'auto' === o[3] ? s : parseFloat(o[3]),
            left: parseFloat(o[4]) || 0,
          };
        }

        t.expr && t.expr.filters && t.expr.filters.animated &&
        (t.expr.filters.animated = function(e) {
          return function(i) {
            return !!t(i).data(d) || e(i);
          };
        }(t.expr.filters.animated)), t.uiBackCompat !== !1 &&
        t.extend(t.effects, {
          save: function(t, e) {
            for (var i = 0, s = e.length; s > i; i++) null !== e[i] &&
            t.data(c + e[i], t[0].style[e[i]]);
          },
          restore: function(t, e) {
            for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] &&
            (i = t.data(c + e[s]), t.css(e[s], i));
          },
          setMode: function(t, e) {
            return 'toggle' === e && (e = t.is(':hidden') ? 'show' : 'hide'), e;
          },
          createWrapper: function(e) {
            if (e.parent().is('.ui-effects-wrapper')) return e.parent();
            var i = {
                  width: e.outerWidth(!0),
                  height: e.outerHeight(!0),
                  'float': e.css('float'),
                },
                s = t('<div></div>').addClass('ui-effects-wrapper').css({
                  fontSize: '100%',
                  background: 'transparent',
                  border: 'none',
                  margin: 0,
                  padding: 0,
                }),
                n = {
                  width: e.width(),
                  height: e.height(),
                },
                o = document.activeElement;
            try {
              o.id;
            } catch (a) {
              o = document.body;
            }
            return e.wrap(s), (e[0] === o || t.contains(e[0], o)) &&
            t(o).trigger('focus'), s = e.parent(), 'static' ===
            e.css('position') ? (s.css({
              position: 'relative',
            }), e.css({
              position: 'relative',
            })) : (t.extend(i, {
              position: e.css('position'),
              zIndex: e.css('z-index'),
            }), t.each(['top', 'left', 'bottom', 'right'], function(t, s) {
              i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = 'auto');
            }), e.css({
              position: 'relative',
              top: 0,
              left: 0,
              right: 'auto',
              bottom: 'auto',
            })), e.css(n), s.css(i).show();
          },
          removeWrapper: function(e) {
            var i = document.activeElement;
            return e.parent().is('.ui-effects-wrapper') &&
            (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) &&
            t(i).trigger('focus')), e;
          },
        }), t.extend(t.effects, {
          version: '1.12.1',
          define: function(e, i, s) {
            return s ||
            (s = i, i = 'effect'), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s;
          },
          scaledDimensions: function(t, e, i) {
            if (0 === e) return {
              height: 0,
              width: 0,
              outerHeight: 0,
              outerWidth: 0,
            };
            var s = 'horizontal' !== i ? (e || 100) / 100 : 1,
                n = 'vertical' !== i ? (e || 100) / 100 : 1;
            return {
              height: t.height() * n,
              width: t.width() * s,
              outerHeight: t.outerHeight() * n,
              outerWidth: t.outerWidth() * s,
            };
          },
          clipToBox: function(t) {
            return {
              width: t.clip.right - t.clip.left,
              height: t.clip.bottom - t.clip.top,
              left: t.clip.left,
              top: t.clip.top,
            };
          },
          unshift: function(t, e, i) {
            var s = t.queue();
            e > 1 &&
            s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue();
          },
          saveStyle: function(t) {
            t.data(u, t[0].style.cssText);
          },
          restoreStyle: function(t) {
            t[0].style.cssText = t.data(u) || '', t.removeData(u);
          },
          mode: function(t, e) {
            var i = t.is(':hidden');
            return 'toggle' === e && (e = i ? 'show' : 'hide'), (i ? 'hide' ===
                e : 'show' === e) && (e = 'none'), e;
          },
          getBaseline: function(t, e) {
            var i, s;
            switch (t[0]) {
              case 'top':
                i = 0;
                break;
              case 'middle':
                i = .5;
                break;
              case 'bottom':
                i = 1;
                break;
              default:
                i = t[0] / e.height;
            }
            switch (t[1]) {
              case 'left':
                s = 0;
                break;
              case 'center':
                s = .5;
                break;
              case 'right':
                s = 1;
                break;
              default:
                s = t[1] / e.width;
            }
            return {
              x: s,
              y: i,
            };
          },
          createPlaceholder: function(e) {
            var i, s = e.css('position'),
                n = e.position();
            return e.css({
              marginTop: e.css('marginTop'),
              marginBottom: e.css('marginBottom'),
              marginLeft: e.css('marginLeft'),
              marginRight: e.css('marginRight'),
            }).
                outerWidth(e.outerWidth()).
                outerHeight(e.outerHeight()), /^(static|relative)/.test(s) &&
            (s = 'absolute', i = t('<' + e[0].nodeName + '>').
                insertAfter(e).
                css({
                  display: /^(inline|ruby)/.test(e.css('display'))
                      ? 'inline-block'
                      : 'block',
                  visibility: 'hidden',
                  marginTop: e.css('marginTop'),
                  marginBottom: e.css('marginBottom'),
                  marginLeft: e.css('marginLeft'),
                  marginRight: e.css('marginRight'),
                  'float': e.css('float'),
                }).
                outerWidth(e.outerWidth()).
                outerHeight(e.outerHeight()).
                addClass('ui-effects-placeholder'), e.data(c + 'placeholder',
                i)), e.css({
              position: s,
              left: n.left,
              top: n.top,
            }), i;
          },
          removePlaceholder: function(t) {
            var e = c + 'placeholder',
                i = t.data(e);
            i && (i.remove(), t.removeData(e));
          },
          cleanUp: function(e) {
            t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
          },
          setTransition: function(e, i, s, n) {
            return n = n || {}, t.each(i, function(t, i) {
              var o = e.cssUnit(i);
              o[0] > 0 && (n[i] = o[0] * s + o[1]);
            }), n;
          },
        }), t.fn.extend({
          effect: function() {
            function i(e) {
              function i() {
                r.removeData(d), t.effects.cleanUp(r), 'hide' === s.mode &&
                r.hide(), a();
              }

              function a() {
                t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e();
              }

              var r = t(this);
              s.mode = c.shift(), t.uiBackCompat === !1 || o ? 'none' === s.mode
                  ? (r[l](), a())
                  : n.call(r[0], s, i) : (r.is(':hidden')
                  ? 'hide' === l
                  : 'show' === l) ? (r[l](), a()) : n.call(r[0], s, a);
            }

            var s = e.apply(this, arguments),
                n = t.effects.effect[s.effect],
                o = n.mode,
                a = s.queue,
                r = a || 'fx',
                h = s.complete,
                l = s.mode,
                c = [],
                u = function(e) {
                  var i = t(this),
                      s = t.effects.mode(i, l) || o;
                  i.data(d, !0), c.push(s), o &&
                  ('show' === s || s === o && 'hide' === s) && i.show(), o &&
                  'none' === s || t.effects.saveStyle(i), t.isFunction(e) &&
                  e();
                };
            return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(
                function() {
                  h && h.call(this);
                }) : a === !1 ? this.each(u).each(i) : this.queue(r, u).
                queue(r, i);
          },
          show: function(t) {
            return function(s) {
              if (i(s)) return t.apply(this, arguments);
              var n = e.apply(this, arguments);
              return n.mode = 'show', this.effect.call(this, n);
            };
          }(t.fn.show),
          hide: function(t) {
            return function(s) {
              if (i(s)) return t.apply(this, arguments);
              var n = e.apply(this, arguments);
              return n.mode = 'hide', this.effect.call(this, n);
            };
          }(t.fn.hide),
          toggle: function(t) {
            return function(s) {
              if (i(s) || 'boolean' == typeof s) return t.apply(this,
                  arguments);
              var n = e.apply(this, arguments);
              return n.mode = 'toggle', this.effect.call(this, n);
            };
          }(t.fn.toggle),
          cssUnit: function(e) {
            var i = this.css(e),
                s = [];
            return t.each(['em', 'px', '%', 'pt'], function(t, e) {
              i.indexOf(e) > 0 && (s = [parseFloat(i), e]);
            }), s;
          },
          cssClip: function(t) {
            return t ? this.css('clip',
                'rect(' + t.top + 'px ' + t.right + 'px ' + t.bottom + 'px ' +
                t.left + 'px)') : s(this.css('clip'), this);
          },
          transfer: function(e, i) {
            var s = t(this),
                n = t(e.to),
                o = 'fixed' === n.css('position'),
                a = t('body'),
                r = o ? a.scrollTop() : 0,
                h = o ? a.scrollLeft() : 0,
                l = n.offset(),
                c = {
                  top: l.top - r,
                  left: l.left - h,
                  height: n.innerHeight(),
                  width: n.innerWidth(),
                },
                u = s.offset(),
                d = t('<div class=\'ui-effects-transfer\'></div>').
                    appendTo('body').
                    addClass(e.className).
                    css({
                      top: u.top - r,
                      left: u.left - h,
                      height: s.innerHeight(),
                      width: s.innerWidth(),
                      position: o ? 'fixed' : 'absolute',
                    }).
                    animate(c, e.duration, e.easing, function() {
                      d.remove(), t.isFunction(i) && i();
                    });
          },
        }), t.fx.step.clip = function(e) {
          e.clipInit ||
          (e.start = t(e.elem).cssClip(), 'string' == typeof e.end &&
          (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
            top: e.pos * (e.end.top - e.start.top) + e.start.top,
            right: e.pos * (e.end.right - e.start.right) + e.start.right,
            bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
            left: e.pos * (e.end.left - e.start.left) + e.start.left,
          });
        };
      }(),
      function() {
        var e = {};
        t.each(['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'], function(t, i) {
          e[i] = function(e) {
            return Math.pow(e, t + 2);
          };
        }), t.extend(e, {
          Sine: function(t) {
            return 1 - Math.cos(t * Math.PI / 2);
          },
          Circ: function(t) {
            return 1 - Math.sqrt(1 - t * t);
          },
          Elastic: function(t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) *
                Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
          },
          Back: function(t) {
            return t * t * (3 * t - 2);
          },
          Bounce: function(t) {
            for (var e, i = 4;
                ((e = Math.pow(2, --i)) - 1) / 11 > t;) ;
            return 1 / Math.pow(4, 3 - i) - 7.5625 *
                Math.pow((3 * e - 2) / 22 - t, 2);
          },
        }), t.each(e, function(e, i) {
          t.easing['easeIn' + e] = i, t.easing['easeOut' + e] = function(t) {
            return 1 - i(1 - t);
          }, t.easing['easeInOut' + e] = function(t) {
            return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
          };
        });
      }();
  var f = t.effects;
  t.effects.define('blind', 'hide', function(e, i) {
    var s = {
          up: ['bottom', 'top'],
          vertical: ['bottom', 'top'],
          down: ['top', 'bottom'],
          left: ['right', 'left'],
          horizontal: ['right', 'left'],
          right: ['left', 'right'],
        },
        n = t(this),
        o = e.direction || 'up',
        a = n.cssClip(),
        r = {
          clip: t.extend({}, a),
        },
        h = t.effects.createPlaceholder(n);
    r.clip[s[o][0]] = r.clip[s[o][1]], 'show' === e.mode &&
    (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h &&
    h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i,
    });
  }), t.effects.define('bounce', function(e, i) {
    var s, n, o, a = t(this),
        r = e.mode,
        h = 'hide' === r,
        l = 'show' === r,
        c = e.direction || 'up',
        u = e.distance,
        d = e.times || 5,
        p = 2 * d + (l || h ? 1 : 0),
        f = e.duration / p,
        g = e.easing,
        m = 'up' === c || 'down' === c ? 'top' : 'left',
        _ = 'up' === c || 'left' === c,
        v = 0,
        b = a.queue().length;
    for (t.effects.createPlaceholder(a), o = a.css(m), u ||
    (u = a['top' === m ? 'outerHeight' : 'outerWidth']() / 3), l && (n = {
      opacity: 1,
    }, n[m] = o, a.css('opacity', 0).
        css(m, _ ? 2 * -u : 2 * u).
        animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; d >
    v; v++) s = {}, s[m] = (_ ? '-=' : '+=') + u, a.animate(s, f, g).
        animate(n, f, g), u = h ? 2 * u : u / 2;
    h && (s = {
      opacity: 0,
    }, s[m] = (_ ? '-=' : '+=') + u, a.animate(s, f, g)), a.queue(
        i), t.effects.unshift(a, b, p + 1);
  }), t.effects.define('clip', 'hide', function(e, i) {
    var s, n = {},
        o = t(this),
        a = e.direction || 'vertical',
        r = 'both' === a,
        h = r || 'horizontal' === a,
        l = r || 'vertical' === a;
    s = o.cssClip(), n.clip = {
      top: l ? (s.bottom - s.top) / 2 : s.top,
      right: h ? (s.right - s.left) / 2 : s.right,
      bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
      left: h ? (s.right - s.left) / 2 : s.left,
    }, t.effects.createPlaceholder(o), 'show' === e.mode &&
    (o.cssClip(n.clip), n.clip = s), o.animate(n, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i,
    });
  }), t.effects.define('drop', 'hide', function(e, i) {
    var s, n = t(this),
        o = e.mode,
        a = 'show' === o,
        r = e.direction || 'left',
        h = 'up' === r || 'down' === r ? 'top' : 'left',
        l = 'up' === r || 'left' === r ? '-=' : '+=',
        c = '+=' === l ? '-=' : '+=',
        u = {
          opacity: 0,
        };
    t.effects.createPlaceholder(n), s = e.distance ||
        n['top' === h ? 'outerHeight' : 'outerWidth'](!0) / 2, u[h] = l +
        s, a && (n.css(u), u[h] = c + s, u.opacity = 1), n.animate(u, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i,
    });
  }), t.effects.define('explode', 'hide', function(e, i) {
    function s() {
      b.push(this), b.length === u * d && n();
    }

    function n() {
      p.css({
        visibility: 'visible',
      }), t(b).remove(), i();
    }

    var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
        d = u,
        p = t(this),
        f = e.mode,
        g = 'show' === f,
        m = p.show().css('visibility', 'hidden').offset(),
        _ = Math.ceil(p.outerWidth() / d),
        v = Math.ceil(p.outerHeight() / u),
        b = [];
    for (o = 0; u > o; o++)
      for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; d >
      a; a++) r = m.left + a * _, l = a - (d - 1) / 2, p.clone().
          appendTo('body').
          wrap('<div></div>').
          css({
            position: 'absolute',
            visibility: 'visible',
            left: -a * _,
            top: -o * v,
          }).
          parent().
          addClass('ui-effects-explode').
          css({
            position: 'absolute',
            overflow: 'hidden',
            width: _,
            height: v,
            left: r + (g ? l * _ : 0),
            top: h + (g ? c * v : 0),
            opacity: g ? 0 : 1,
          }).
          animate({
            left: r + (g ? 0 : l * _),
            top: h + (g ? 0 : c * v),
            opacity: g ? 1 : 0,
          }, e.duration || 500, e.easing, s);
  }), t.effects.define('fade', 'toggle', function(e, i) {
    var s = 'show' === e.mode;
    t(this).css('opacity', s ? 0 : 1).animate({
      opacity: s ? 1 : 0,
    }, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i,
    });
  }), t.effects.define('fold', 'hide', function(e, i) {
    var s = t(this),
        n = e.mode,
        o = 'show' === n,
        a = 'hide' === n,
        r = e.size || 15,
        h = /([0-9]+)%/.exec(r),
        l = !!e.horizFirst,
        c = l ? ['right', 'bottom'] : ['bottom', 'right'],
        u = e.duration / 2,
        d = t.effects.createPlaceholder(s),
        p = s.cssClip(),
        f = {
          clip: t.extend({}, p),
        },
        g = {
          clip: t.extend({}, p),
        },
        m = [p[c[0]], p[c[1]]],
        _ = s.queue().length;
    h && (r = parseInt(h[1], 10) / 100 * m[a
        ? 0
        : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o &&
    (s.cssClip(g.clip), d &&
    d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function(i) {
      d && d.animate(t.effects.clipToBox(f), u, e.easing).
          animate(t.effects.clipToBox(g), u, e.easing), i();
    }).
        animate(f, u, e.easing).
        animate(g, u, e.easing).
        queue(i), t.effects.unshift(s, _, 4);
  }), t.effects.define('highlight', 'show', function(e, i) {
    var s = t(this),
        n = {
          backgroundColor: s.css('backgroundColor'),
        };
    'hide' === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
      backgroundImage: 'none',
      backgroundColor: e.color || '#ffff99',
    }).animate(n, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i,
    });
  }), t.effects.define('size', function(e, i) {
    var s, n, o, a = t(this),
        r = ['fontSize'],
        h = [
          'borderTopWidth',
          'borderBottomWidth',
          'paddingTop',
          'paddingBottom'],
        l = [
          'borderLeftWidth',
          'borderRightWidth',
          'paddingLeft',
          'paddingRight'],
        c = e.mode,
        u = 'effect' !== c,
        d = e.scale || 'both',
        p = e.origin || ['middle', 'center'],
        f = a.css('position'),
        g = a.position(),
        m = t.effects.scaledDimensions(a),
        _ = e.from || m,
        v = e.to || t.effects.scaledDimensions(a, 0);
    t.effects.createPlaceholder(a), 'show' === c && (o = _, _ = v, v = o), n = {
      from: {
        y: _.height / m.height,
        x: _.width / m.width,
      },
      to: {
        y: v.height / m.height,
        x: v.width / m.width,
      },
    }, ('box' === d || 'both' === d) && (n.from.y !== n.to.y &&
    (_ = t.effects.setTransition(a, h, n.from.y,
        _), v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !==
    n.to.x && (_ = t.effects.setTransition(a, l, n.from.x,
        _), v = t.effects.setTransition(a, l, n.to.x, v))), ('content' === d ||
        'both' === d) && n.from.y !== n.to.y &&
    (_ = t.effects.setTransition(a, r, n.from.y,
        _), v = t.effects.setTransition(a, r, n.to.y, v)), p &&
    (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) *
        s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x +
        g.left, v.top = (m.outerHeight - v.outerHeight) * s.y +
        g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(
        _), ('content' === d || 'both' === d) &&
    (h = h.concat(['marginTop', 'marginBottom']).concat(r), l = l.concat(
        ['marginLeft', 'marginRight']), a.find('*[width]').each(function() {
      var i = t(this),
          s = t.effects.scaledDimensions(i),
          o = {
            height: s.height * n.from.y,
            width: s.width * n.from.x,
            outerHeight: s.outerHeight * n.from.y,
            outerWidth: s.outerWidth * n.from.x,
          },
          a = {
            height: s.height * n.to.y,
            width: s.width * n.to.x,
            outerHeight: s.height * n.to.y,
            outerWidth: s.width * n.to.x,
          };
      n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y,
          o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !==
      n.to.x && (o = t.effects.setTransition(i, l, n.from.x,
          o), a = t.effects.setTransition(i, l, n.to.x, a)), u &&
      t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing,
          function() {
            u && t.effects.restoreStyle(i);
          });
    })), a.animate(v, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: function() {
        var e = a.offset();
        0 === v.opacity && a.css('opacity', _.opacity), u ||
        (a.css('position', 'static' === f ? 'relative' : f).
            offset(e), t.effects.saveStyle(a)), i();
      },
    });
  }), t.effects.define('scale', function(e, i) {
    var s = t(this),
        n = e.mode,
        o = parseInt(e.percent, 10) ||
            (0 === parseInt(e.percent, 10) ? 0 : 'effect' !== n ? 0 : 100),
        a = t.extend(!0, {
          from: t.effects.scaledDimensions(s),
          to: t.effects.scaledDimensions(s, o, e.direction || 'both'),
          origin: e.origin || ['middle', 'center'],
        }, e);
    e.fade &&
    (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a,
        i);
  }), t.effects.define('puff', 'hide', function(e, i) {
    var s = t.extend(!0, {}, e, {
      fade: !0,
      percent: parseInt(e.percent, 10) || 150,
    });
    t.effects.effect.scale.call(this, s, i);
  }), t.effects.define('pulsate', 'show', function(e, i) {
    var s = t(this),
        n = e.mode,
        o = 'show' === n,
        a = 'hide' === n,
        r = o || a,
        h = 2 * (e.times || 5) + (r ? 1 : 0),
        l = e.duration / h,
        c = 0,
        u = 1,
        d = s.queue().length;
    for ((o || !s.is(':visible')) && (s.css('opacity', 0).show(), c = 1); h >
    u; u++) s.animate({
      opacity: c,
    }, l, e.easing), c = 1 - c;
    s.animate({
      opacity: c,
    }, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1);
  }), t.effects.define('shake', function(e, i) {
    var s = 1,
        n = t(this),
        o = e.direction || 'left',
        a = e.distance || 20,
        r = e.times || 3,
        h = 2 * r + 1,
        l = Math.round(e.duration / h),
        c = 'up' === o || 'down' === o ? 'top' : 'left',
        u = 'up' === o || 'left' === o,
        d = {},
        p = {},
        f = {},
        g = n.queue().length;
    for (t.effects.createPlaceholder(n), d[c] = (u ? '-=' : '+=') + a, p[c] = (u
        ? '+='
        : '-=') + 2 * a, f[c] = (u ? '-=' : '+=') + 2 * a, n.animate(d, l,
        e.easing); r > s; s++) n.animate(p, l, e.easing).
        animate(f, l, e.easing);
    n.animate(p, l, e.easing).
        animate(d, l / 2, e.easing).
        queue(i), t.effects.unshift(n, g, h + 1);
  }), t.effects.define('slide', 'show', function(e, i) {
    var s, n, o = t(this),
        a = {
          up: ['bottom', 'top'],
          down: ['top', 'bottom'],
          left: ['right', 'left'],
          right: ['left', 'right'],
        },
        r = e.mode,
        h = e.direction || 'left',
        l = 'up' === h || 'down' === h ? 'top' : 'left',
        c = 'up' === h || 'left' === h,
        u = e.distance || o['top' === l ? 'outerHeight' : 'outerWidth'](!0),
        d = {};
    t.effects.createPlaceholder(
        o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u +
        n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], 'show' ===
    r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d,
        {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: i,
        });
  });
  var f;
  t.uiBackCompat !== !1 && (f = t.effects.define('transfer', function(e, i) {
    t(this).transfer(e, i);
  })), t.ui.focusable = function(i, s) {
    var n, o, a, r, h, l = i.nodeName.toLowerCase();
    return 'area' === l
        ? (n = i.parentNode, o = n.name, i.href && o && 'map' ===
        n.nodeName.toLowerCase()
            ? (a = t(
                'img[usemap=\'#' + o + '\']'), a.length > 0 && a.is(':visible'))
            : !1)
        : (/^(input|select|textarea|button|object)$/.test(l)
            ? (r = !i.disabled, r &&
            (h = t(i).closest('fieldset')[0], h && (r = !h.disabled)))
            : r = 'a' === l ? i.href || s : s, r && t(i).is(':visible') &&
        e(t(i)));
  }, t.extend(t.expr[':'], {
    focusable: function(e) {
      return t.ui.focusable(e, null != t.attr(e, 'tabindex'));
    },
  }), t.ui.focusable, t.fn.form = function() {
    return 'string' == typeof this[0].form ? this.closest('form') : t(
        this[0].form);
  }, t.ui.formResetMixin = {
    _formResetHandler: function() {
      var e = t(this);
      setTimeout(function() {
        var i = e.data('ui-form-reset-instances');
        t.each(i, function() {
          this.refresh();
        });
      });
    },
    _bindFormResetHandler: function() {
      if (this.form = this.element.form(), this.form.length) {
        var t = this.form.data('ui-form-reset-instances') || [];
        t.length ||
        this.form.on('reset.ui-form-reset', this._formResetHandler), t.push(
            this), this.form.data('ui-form-reset-instances', t);
      }
    },
    _unbindFormResetHandler: function() {
      if (this.form.length) {
        var e = this.form.data('ui-form-reset-instances');
        e.splice(t.inArray(this, e), 1), e.length ? this.form.data(
            'ui-form-reset-instances', e) : this.form.removeData(
            'ui-form-reset-instances').off('reset.ui-form-reset');
      }
    },
  }, '1.7' === t.fn.jquery.substring(0, 3) &&
  (t.each(['Width', 'Height'], function(e, i) {
    function s(e, i, s, o) {
      return t.each(n, function() {
        i -= parseFloat(t.css(e, 'padding' + this)) || 0, s &&
        (i -= parseFloat(t.css(e, 'border' + this + 'Width')) || 0), o &&
        (i -= parseFloat(t.css(e, 'margin' + this)) || 0);
      }), i;
    }

    var n = 'Width' === i ? ['Left', 'Right'] : ['Top', 'Bottom'],
        o = i.toLowerCase(),
        a = {
          innerWidth: t.fn.innerWidth,
          innerHeight: t.fn.innerHeight,
          outerWidth: t.fn.outerWidth,
          outerHeight: t.fn.outerHeight,
        };
    t.fn['inner' + i] = function(e) {
      return void 0 === e ? a['inner' + i].call(this) : this.each(function() {
        t(this).css(o, s(this, e) + 'px');
      });
    }, t.fn['outer' + i] = function(e, n) {
      return 'number' != typeof e ? a['outer' + i].call(this, e) : this.each(
          function() {
            t(this).css(o, s(this, e, !0, n) + 'px');
          });
    };
  }), t.fn.addBack = function(t) {
    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
  }), t.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38,
  }, t.ui.escapeSelector = function() {
    var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
    return function(e) {
      return e.replace(t, '\\$1');
    };
  }(), t.fn.labels = function() {
    var e, i, s, n, o;
    return this[0].labels && this[0].labels.length ? this.pushStack(
        this[0].labels) : (n = this.eq(0).parents('label'), s = this.attr(
        'id'), s && (e = this.eq(0).parents().last(), o = e.add(
        e.length ? e.siblings() : this.siblings()), i = 'label[for=\'' +
        t.ui.escapeSelector(s) + '\']', n = n.add(
        o.find(i).addBack(i))), this.pushStack(n));
  }, t.fn.scrollParent = function(e) {
    var i = this.css('position'),
        s = 'absolute' === i,
        n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        o = this.parents().filter(function() {
          var e = t(this);
          return s && 'static' === e.css('position') ? !1 : n.test(
              e.css('overflow') + e.css('overflow-y') + e.css('overflow-x'));
        }).eq(0);
    return 'fixed' !== i && o.length ? o : t(this[0].ownerDocument || document);
  }, t.extend(t.expr[':'], {
    tabbable: function(e) {
      var i = t.attr(e, 'tabindex'),
          s = null != i;
      return (!s || i >= 0) && t.ui.focusable(e, s);
    },
  }), t.fn.extend({
    uniqueId: function() {
      var t = 0;
      return function() {
        return this.each(function() {
          this.id || (this.id = 'ui-id-' + ++t);
        });
      };
    }(),
    removeUniqueId: function() {
      return this.each(function() {
        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr('id');
      });
    },
  }), t.widget('ui.accordion', {
    version: '1.12.1',
    options: {
      active: 0,
      animate: {},
      classes: {
        'ui-accordion-header': 'ui-corner-top',
        'ui-accordion-header-collapsed': 'ui-corner-all',
        'ui-accordion-content': 'ui-corner-bottom',
      },
      collapsible: !1,
      event: 'click',
      header: '> li > :first-child, > :not(li):even',
      heightStyle: 'auto',
      icons: {
        activeHeader: 'ui-icon-triangle-1-s',
        header: 'ui-icon-triangle-1-e',
      },
      activate: null,
      beforeActivate: null,
    },
    hideProps: {
      borderTopWidth: 'hide',
      borderBottomWidth: 'hide',
      paddingTop: 'hide',
      paddingBottom: 'hide',
      height: 'hide',
    },
    showProps: {
      borderTopWidth: 'show',
      borderBottomWidth: 'show',
      paddingTop: 'show',
      paddingBottom: 'show',
      height: 'show',
    },
    _create: function() {
      var e = this.options;
      this.prevShow = this.prevHide = t(), this._addClass('ui-accordion',
          'ui-widget ui-helper-reset'), this.element.attr('role',
          'tablist'), e.collapsible || e.active !== !1 && null != e.active ||
      (e.active = 0), this._processPanels(), 0 > e.active &&
      (e.active += this.headers.length), this._refresh();
    },
    _getCreateEventData: function() {
      return {
        header: this.active,
        panel: this.active.length ? this.active.next() : t(),
      };
    },
    _createIcons: function() {
      var e, i, s = this.options.icons;
      s && (e = t('<span>'), this._addClass(e, 'ui-accordion-header-icon',
          'ui-icon ' + s.header), e.prependTo(
          this.headers), i = this.active.children(
          '.ui-accordion-header-icon'), this._removeClass(i, s.header).
          _addClass(i, null, s.activeHeader).
          _addClass(this.headers, 'ui-accordion-icons'));
    },
    _destroyIcons: function() {
      this._removeClass(this.headers,
          'ui-accordion-icons'), this.headers.children(
          '.ui-accordion-header-icon').remove();
    },
    _destroy: function() {
      var t;
      this.element.removeAttr('role'), this.headers.removeAttr(
          'role aria-expanded aria-selected aria-controls tabIndex').
          removeUniqueId(), this._destroyIcons(), t = this.headers.next().
          css('display', '').
          removeAttr('role aria-hidden aria-labelledby').
          removeUniqueId(), 'content' !== this.options.heightStyle &&
      t.css('height', '');
    },
    _setOption: function(t, e) {
      return 'active' === t ? (this._activate(e), void 0) : ('event' === t &&
      (this.options.event &&
      this._off(this.headers, this.options.event), this._setupEvents(
          e)), this._super(t, e), 'collapsible' !== t || e ||
      this.options.active !== !1 || this._activate(0), 'icons' === t &&
      (this._destroyIcons(), e && this._createIcons()), void 0);
    },
    _setOptionDisabled: function(t) {
      this._super(t), this.element.attr('aria-disabled', t), this._toggleClass(
          null, 'ui-state-disabled', !!t), this._toggleClass(
          this.headers.add(this.headers.next()), null, 'ui-state-disabled',
          !!t);
    },
    _keydown: function(e) {
      if (!e.altKey && !e.ctrlKey) {
        var i = t.ui.keyCode,
            s = this.headers.length,
            n = this.headers.index(e.target),
            o = !1;
        switch (e.keyCode) {
          case i.RIGHT:
          case i.DOWN:
            o = this.headers[(n + 1) % s];
            break;
          case i.LEFT:
          case i.UP:
            o = this.headers[(n - 1 + s) % s];
            break;
          case i.SPACE:
          case i.ENTER:
            this._eventHandler(e);
            break;
          case i.HOME:
            o = this.headers[0];
            break;
          case i.END:
            o = this.headers[s - 1];
        }
        o && (t(e.target).attr('tabIndex', -1), t(o).attr('tabIndex', 0), t(o).
            trigger('focus'), e.preventDefault());
      }
    },
    _panelKeyDown: function(e) {
      e.keyCode === t.ui.keyCode.UP && e.ctrlKey &&
      t(e.currentTarget).prev().trigger('focus');
    },
    refresh: function() {
      var e = this.options;
      this._processPanels(), e.active === !1 && e.collapsible === !0 ||
      !this.headers.length ? (e.active = !1, this.active = t()) : e.active ===
      !1 ? this._activate(0) : this.active.length &&
      !t.contains(this.element[0], this.active[0])
          ? this.headers.length ===
          this.headers.find('.ui-state-disabled').length
              ? (e.active = !1, this.active = t())
              : this._activate(Math.max(0, e.active - 1))
          : e.active = this.headers.index(
              this.active), this._destroyIcons(), this._refresh();
    },
    _processPanels: function() {
      var t = this.headers,
          e = this.panels;
      this.headers = this.element.find(this.options.header), this._addClass(
          this.headers, 'ui-accordion-header ui-accordion-header-collapsed',
          'ui-state-default'), this.panels = this.headers.next().
          filter(':not(.ui-accordion-content-active)').
          hide(), this._addClass(this.panels, 'ui-accordion-content',
          'ui-helper-reset ui-widget-content'), e &&
      (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
    },
    _refresh: function() {
      var e, i = this.options,
          s = i.heightStyle,
          n = this.element.parent();
      this.active = this._findActive(i.active), this._addClass(this.active,
          'ui-accordion-header-active', 'ui-state-active').
          _removeClass(this.active,
              'ui-accordion-header-collapsed'), this._addClass(
          this.active.next(),
          'ui-accordion-content-active'), this.active.next().
          show(), this.headers.attr('role', 'tab').each(function() {
        var e = t(this),
            i = e.uniqueId().attr('id'),
            s = e.next(),
            n = s.uniqueId().attr('id');
        e.attr('aria-controls', n), s.attr('aria-labelledby', i);
      }).next().attr('role', 'tabpanel'), this.headers.not(this.active).attr({
        'aria-selected': 'false',
        'aria-expanded': 'false',
        tabIndex: -1,
      }).next().attr({
        'aria-hidden': 'true',
      }).hide(), this.active.length ? this.active.attr({
        'aria-selected': 'true',
        'aria-expanded': 'true',
        tabIndex: 0,
      }).next().attr({
        'aria-hidden': 'false',
      }) : this.headers.eq(0).
          attr('tabIndex', 0), this._createIcons(), this._setupEvents(
          i.event), 'fill' === s ? (e = n.height(), this.element.siblings(
          ':visible').each(function() {
        var i = t(this),
            s = i.css('position');
        'absolute' !== s && 'fixed' !== s && (e -= i.outerHeight(!0));
      }), this.headers.each(function() {
        e -= t(this).outerHeight(!0);
      }), this.headers.next().each(function() {
        t(this).
            height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
      }).css('overflow', 'auto')) : 'auto' === s &&
          (e = 0, this.headers.next().each(function() {
            var i = t(this).is(':visible');
            i || t(this).show(), e = Math.max(e,
                t(this).css('height', '').height()), i || t(this).hide();
          }).height(e));
    },
    _activate: function(e) {
      var i = this._findActive(e)[0];
      i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: t.noop,
      }));
    },
    _findActive: function(e) {
      return 'number' == typeof e ? this.headers.eq(e) : t();
    },
    _setupEvents: function(e) {
      var i = {
        keydown: '_keydown',
      };
      e && t.each(e.split(' '), function(t, e) {
        i[e] = '_eventHandler';
      }), this._off(this.headers.add(this.headers.next())), this._on(
          this.headers, i), this._on(this.headers.next(), {
        keydown: '_panelKeyDown',
      }), this._hoverable(this.headers), this._focusable(this.headers);
    },
    _eventHandler: function(e) {
      var i, s, n = this.options,
          o = this.active,
          a = t(e.currentTarget),
          r = a[0] === o[0],
          h = r && n.collapsible,
          l = h ? t() : a.next(),
          c = o.next(),
          u = {
            oldHeader: o,
            oldPanel: c,
            newHeader: h ? t() : a,
            newPanel: l,
          };
      e.preventDefault(), r && !n.collapsible ||
      this._trigger('beforeActivate', e, u) === !1 ||
      (n.active = h ? !1 : this.headers.index(a), this.active = r
          ? t()
          : a, this._toggle(u), this._removeClass(o,
          'ui-accordion-header-active', 'ui-state-active'), n.icons &&
      (i = o.children('.ui-accordion-header-icon'), this._removeClass(i, null,
          n.icons.activeHeader)._addClass(i, null, n.icons.header)), r ||
      (this._removeClass(a, 'ui-accordion-header-collapsed').
          _addClass(a, 'ui-accordion-header-active',
              'ui-state-active'), n.icons &&
      (s = a.children('.ui-accordion-header-icon'), this._removeClass(s, null,
          n.icons.header).
          _addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(),
          'ui-accordion-content-active')));
    },
    _toggle: function(e) {
      var i = e.newPanel,
          s = this.prevShow.length ? this.prevShow : e.oldPanel;
      this.prevShow.add(this.prevHide).
          stop(!0,
              !0), this.prevShow = i, this.prevHide = s, this.options.animate
          ? this._animate(i, s, e)
          : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
        'aria-hidden': 'true',
      }), s.prev().attr({
        'aria-selected': 'false',
        'aria-expanded': 'false',
      }), i.length && s.length ? s.prev().attr({
        tabIndex: -1,
        'aria-expanded': 'false',
      }) : i.length && this.headers.filter(function() {
        return 0 === parseInt(t(this).attr('tabIndex'), 10);
      }).attr('tabIndex', -1), i.attr('aria-hidden', 'false').prev().attr({
        'aria-selected': 'true',
        'aria-expanded': 'true',
        tabIndex: 0,
      });
    },
    _animate: function(t, e, i) {
      var s, n, o, a = this,
          r = 0,
          h = t.css('box-sizing'),
          l = t.length && (!e.length || t.index() < e.index()),
          c = this.options.animate || {},
          u = l && c.down || c,
          d = function() {
            a._toggleComplete(i);
          };
      return 'number' == typeof u && (o = u), 'string' == typeof u &&
      (n = u), n = n || u.easing || c.easing, o = o || u.duration ||
          c.duration, e.length ? t.length ? (s = t.show().
          outerHeight(), e.animate(this.hideProps, {
        duration: o,
        easing: n,
        step: function(t, e) {
          e.now = Math.round(t);
        },
      }), t.hide().animate(this.showProps, {
        duration: o,
        easing: n,
        complete: d,
        step: function(t, i) {
          i.now = Math.round(t), 'height' !== i.prop ? 'content-box' === h &&
              (r += i.now) : 'content' !== a.options.heightStyle &&
              (i.now = Math.round(s - e.outerHeight() - r), r = 0);
        },
      }), void 0) : e.animate(this.hideProps, o, n, d) : t.animate(
          this.showProps, o, n, d);
    },
    _toggleComplete: function(t) {
      var e = t.oldPanel,
          i = e.prev();
      this._removeClass(e, 'ui-accordion-content-active'), this._removeClass(i,
          'ui-accordion-header-active').
          _addClass(i, 'ui-accordion-header-collapsed'), e.length &&
      (e.parent()[0].className = e.parent()[0].className), this._trigger(
          'activate', null, t);
    },
  }), t.ui.safeActiveElement = function(t) {
    var e;
    try {
      e = t.activeElement;
    } catch (i) {
      e = t.body;
    }
    return e || (e = t.body), e.nodeName || (e = t.body), e;
  }, t.widget('ui.menu', {
    version: '1.12.1',
    defaultElement: '<ul>',
    delay: 300,
    options: {
      icons: {
        submenu: 'ui-icon-caret-1-e',
      },
      items: '> *',
      menus: 'ul',
      position: {
        my: 'left top',
        at: 'right top',
      },
      role: 'menu',
      blur: null,
      focus: null,
      select: null,
    },
    _create: function() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().
          attr({
            role: this.options.role,
            tabIndex: 0,
          }), this._addClass('ui-menu',
          'ui-widget ui-widget-content'), this._on({
        'mousedown .ui-menu-item': function(t) {
          t.preventDefault();
        },
        'click .ui-menu-item': function(e) {
          var i = t(e.target),
              s = t(t.ui.safeActiveElement(this.document[0]));
          !this.mouseHandled && i.not('.ui-state-disabled').length &&
          (this.select(e), e.isPropagationStopped() ||
          (this.mouseHandled = !0), i.has('.ui-menu').length
              ? this.expand(e)
              : !this.element.is(':focus') && s.closest('.ui-menu').length &&
              (this.element.trigger('focus', [!0]), this.active && 1 ===
              this.active.parents('.ui-menu').length &&
              clearTimeout(this.timer)));
        },
        'mouseenter .ui-menu-item': function(e) {
          if (!this.previousFilter) {
            var i = t(e.target).closest('.ui-menu-item'),
                s = t(e.currentTarget);
            i[0] === s[0] &&
            (this._removeClass(s.siblings().children('.ui-state-active'), null,
                'ui-state-active'), this.focus(e, s));
          }
        },
        mouseleave: 'collapseAll',
        'mouseleave .ui-menu': 'collapseAll',
        focus: function(t, e) {
          var i = this.active || this.element.find(this.options.items).eq(0);
          e || this.focus(t, i);
        },
        blur: function(e) {
          this._delay(function() {
            var i = !t.contains(this.element[0],
                t.ui.safeActiveElement(this.document[0]));
            i && this.collapseAll(e);
          });
        },
        keydown: '_keydown',
      }), this.refresh(), this._on(this.document, {
        click: function(t) {
          this._closeOnDocumentClick(t) &&
          this.collapseAll(t), this.mouseHandled = !1;
        },
      });
    },
    _destroy: function() {
      var e = this.element.find('.ui-menu-item').
              removeAttr('role aria-disabled'),
          i = e.children('.ui-menu-item-wrapper').
              removeUniqueId().
              removeAttr('tabIndex role aria-haspopup');
      this.element.removeAttr('aria-activedescendant').
          find('.ui-menu').
          addBack().
          removeAttr(
              'role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex').
          removeUniqueId().
          show(), i.children().each(function() {
        var e = t(this);
        e.data('ui-menu-submenu-caret') && e.remove();
      });
    },
    _keydown: function(e) {
      var i, s, n, o, a = !0;
      switch (e.keyCode) {
        case t.ui.keyCode.PAGE_UP:
          this.previousPage(e);
          break;
        case t.ui.keyCode.PAGE_DOWN:
          this.nextPage(e);
          break;
        case t.ui.keyCode.HOME:
          this._move('first', 'first', e);
          break;
        case t.ui.keyCode.END:
          this._move('last', 'last', e);
          break;
        case t.ui.keyCode.UP:
          this.previous(e);
          break;
        case t.ui.keyCode.DOWN:
          this.next(e);
          break;
        case t.ui.keyCode.LEFT:
          this.collapse(e);
          break;
        case t.ui.keyCode.RIGHT:
          this.active && !this.active.is('.ui-state-disabled') &&
          this.expand(e);
          break;
        case t.ui.keyCode.ENTER:
        case t.ui.keyCode.SPACE:
          this._activate(e);
          break;
        case t.ui.keyCode.ESCAPE:
          this.collapse(e);
          break;
        default:
          a = !1, s = this.previousFilter || '', o = !1, n = e.keyCode >= 96 &&
          105 >= e.keyCode ? '' + (e.keyCode - 96) : String.fromCharCode(
              e.keyCode), clearTimeout(this.filterTimer), n === s
              ? o = !0
              : n = s + n, i = this._filterMenuItems(n), i = o && -1 !==
          i.index(this.active.next())
              ? this.active.nextAll('.ui-menu-item')
              : i, i.length ||
          (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(
              n)), i.length ? (this.focus(e,
              i), this.previousFilter = n, this.filterTimer = this._delay(
              function() {
                delete this.previousFilter;
              }, 1e3)) : delete this.previousFilter;
      }
      a && e.preventDefault();
    },
    _activate: function(t) {
      this.active && !this.active.is('.ui-state-disabled') &&
      (this.active.children('[aria-haspopup=\'true\']').length
          ? this.expand(t)
          : this.select(t));
    },
    refresh: function() {
      var e, i, s, n, o, a = this,
          r = this.options.icons.submenu,
          h = this.element.find(this.options.menus);
      this._toggleClass('ui-menu-icons', null,
          !!this.element.find('.ui-icon').length), s = h.filter(
          ':not(.ui-menu)').hide().attr({
        role: this.options.role,
        'aria-hidden': 'true',
        'aria-expanded': 'false',
      }).each(function() {
        var e = t(this),
            i = e.prev(),
            s = t('<span>').data('ui-menu-submenu-caret', !0);
        a._addClass(s, 'ui-menu-icon', 'ui-icon ' + r), i.attr('aria-haspopup',
            'true').prepend(s), e.attr('aria-labelledby', i.attr('id'));
      }), this._addClass(s, 'ui-menu',
          'ui-widget ui-widget-content ui-front'), e = h.add(
          this.element), i = e.find(this.options.items), i.not('.ui-menu-item').
          each(function() {
            var e = t(this);
            a._isDivider(e) &&
            a._addClass(e, 'ui-menu-divider', 'ui-widget-content');
          }), n = i.not('.ui-menu-item, .ui-menu-divider'), o = n.children().
          not('.ui-menu').
          uniqueId().
          attr({
            tabIndex: -1,
            role: this._itemRole(),
          }), this._addClass(n, 'ui-menu-item').
          _addClass(o, 'ui-menu-item-wrapper'), i.filter('.ui-state-disabled').
          attr('aria-disabled', 'true'), this.active &&
      !t.contains(this.element[0], this.active[0]) && this.blur();
    },
    _itemRole: function() {
      return {
        menu: 'menuitem',
        listbox: 'option',
      }[this.options.role];
    },
    _setOption: function(t, e) {
      if ('icons' === t) {
        var i = this.element.find('.ui-menu-icon');
        this._removeClass(i, null, this.options.icons.submenu).
            _addClass(i, null, e.submenu);
      }
      this._super(t, e);
    },
    _setOptionDisabled: function(t) {
      this._super(t), this.element.attr('aria-disabled',
          t + ''), this._toggleClass(null, 'ui-state-disabled', !!t);
    },
    focus: function(t, e) {
      var i, s, n;
      this.blur(t, t && 'focus' === t.type), this._scrollIntoView(
          e), this.active = e.first(), s = this.active.children(
          '.ui-menu-item-wrapper'), this._addClass(s, null,
          'ui-state-active'), this.options.role &&
      this.element.attr('aria-activedescendant',
          s.attr('id')), n = this.active.parent().
          closest('.ui-menu-item').
          children('.ui-menu-item-wrapper'), this._addClass(n, null,
          'ui-state-active'), t && 'keydown' === t.type
          ? this._close()
          : this.timer = this._delay(function() {
            this._close();
          }, this.delay), i = e.children('.ui-menu'), i.length && t &&
      /^mouse/.test(t.type) &&
      this._startOpening(i), this.activeMenu = e.parent(), this._trigger(
          'focus', t, {
            item: e,
          });
    },
    _scrollIntoView: function(e) {
      var i, s, n, o, a, r;
      this._hasScroll() &&
      (i = parseFloat(t.css(this.activeMenu[0], 'borderTopWidth')) ||
          0, s = parseFloat(t.css(this.activeMenu[0], 'paddingTop')) ||
          0, n = e.offset().top - this.activeMenu.offset().top - i -
          s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 >
      n ? this.activeMenu.scrollTop(o + n) : n + r > a &&
          this.activeMenu.scrollTop(o + n - a + r));
    },
    blur: function(t, e) {
      e || clearTimeout(this.timer), this.active &&
      (this._removeClass(this.active.children('.ui-menu-item-wrapper'), null,
          'ui-state-active'), this._trigger('blur', t, {
        item: this.active,
      }), this.active = null);
    },
    _startOpening: function(t) {
      clearTimeout(this.timer), 'true' === t.attr('aria-hidden') &&
      (this.timer = this._delay(function() {
        this._close(), this._open(t);
      }, this.delay));
    },
    _open: function(e) {
      var i = t.extend({
        of: this.active,
      }, this.options.position);
      clearTimeout(this.timer), this.element.find('.ui-menu').
          not(e.parents('.ui-menu')).
          hide().
          attr('aria-hidden', 'true'), e.show().
          removeAttr('aria-hidden').
          attr('aria-expanded', 'true').
          position(i);
    },
    collapseAll: function(e, i) {
      clearTimeout(this.timer), this.timer = this._delay(function() {
        var s = i ? this.element : t(e && e.target).
            closest(this.element.find('.ui-menu'));
        s.length || (s = this.element), this._close(s), this.blur(
            e), this._removeClass(s.find('.ui-state-active'), null,
            'ui-state-active'), this.activeMenu = s;
      }, this.delay);
    },
    _close: function(t) {
      t || (t = this.active ? this.active.parent() : this.element), t.find(
          '.ui-menu').
          hide().
          attr('aria-hidden', 'true').
          attr('aria-expanded', 'false');
    },
    _closeOnDocumentClick: function(e) {
      return !t(e.target).closest('.ui-menu').length;
    },
    _isDivider: function(t) {
      return !/[^\-\u2014\u2013\s]/.test(t.text());
    },
    collapse: function(t) {
      var e = this.active &&
          this.active.parent().closest('.ui-menu-item', this.element);
      e && e.length && (this._close(), this.focus(t, e));
    },
    expand: function(t) {
      var e = this.active &&
          this.active.children('.ui-menu ').find(this.options.items).first();
      e && e.length && (this._open(e.parent()), this._delay(function() {
        this.focus(t, e);
      }));
    },
    next: function(t) {
      this._move('next', 'first', t);
    },
    previous: function(t) {
      this._move('prev', 'last', t);
    },
    isFirstItem: function() {
      return this.active && !this.active.prevAll('.ui-menu-item').length;
    },
    isLastItem: function() {
      return this.active && !this.active.nextAll('.ui-menu-item').length;
    },
    _move: function(t, e, i) {
      var s;
      this.active &&
      (s = 'first' === t || 'last' === t ? this.active['first' === t
          ? 'prevAll'
          : 'nextAll']('.ui-menu-item').eq(-1) : this.active[t + 'All'](
          '.ui-menu-item').eq(0)), s && s.length && this.active ||
      (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s);
    },
    nextPage: function(e) {
      var i, s, n;
      return this.active ? (this.isLastItem() || (this._hasScroll()
          ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(
              '.ui-menu-item').each(function() {
            return i = t(this), 0 > i.offset().top - s - n;
          }), this.focus(e, i))
          : this.focus(e, this.activeMenu.find(this.options.items)[this.active
              ? 'last'
              : 'first']())), void 0) : (this.next(e), void 0);
    },
    previousPage: function(e) {
      var i, s, n;
      return this.active
          ? (this.isFirstItem() || (this._hasScroll()
              ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(
                  '.ui-menu-item').each(function() {
                return i = t(this), i.offset().top - s + n > 0;
              }), this.focus(e, i))
              : this.focus(e,
                  this.activeMenu.find(this.options.items).first())), void 0)
          : (this.next(e), void 0);
    },
    _hasScroll: function() {
      return this.element.outerHeight() < this.element.prop('scrollHeight');
    },
    select: function(e) {
      this.active = this.active || t(e.target).closest('.ui-menu-item');
      var i = {
        item: this.active,
      };
      this.active.has('.ui-menu').length ||
      this.collapseAll(e, !0), this._trigger('select', e, i);
    },
    _filterMenuItems: function(e) {
      var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&'),
          s = RegExp('^' + i, 'i');
      return this.activeMenu.find(this.options.items).
          filter('.ui-menu-item').
          filter(function() {
            return s.test(
                t.trim(t(this).children('.ui-menu-item-wrapper').text()));
          });
    },
  }), t.widget('ui.autocomplete', {
    version: '1.12.1',
    defaultElement: '<input>',
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: 'left top',
        at: 'left bottom',
        collision: 'none',
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null,
    },
    requestIndex: 0,
    pending: 0,
    _create: function() {
      var e, i, s, n = this.element[0].nodeName.toLowerCase(),
          o = 'textarea' === n,
          a = 'input' === n;
      this.isMultiLine = o || !a && this._isContentEditable(
          this.element), this.valueMethod = this.element[o || a
          ? 'val'
          : 'text'], this.isNewMenu = !0, this._addClass(
          'ui-autocomplete-input'), this.element.attr('autocomplete',
          'off'), this._on(this.element, {
        keydown: function(n) {
          if (this.element.prop(
              'readOnly')) return e = !0, s = !0, i = !0, void 0;
          e = !1, s = !1, i = !1;
          var o = t.ui.keyCode;
          switch (n.keyCode) {
            case o.PAGE_UP:
              e = !0, this._move('previousPage', n);
              break;
            case o.PAGE_DOWN:
              e = !0, this._move('nextPage', n);
              break;
            case o.UP:
              e = !0, this._keyEvent('previous', n);
              break;
            case o.DOWN:
              e = !0, this._keyEvent('next', n);
              break;
            case o.ENTER:
              this.menu.active &&
              (e = !0, n.preventDefault(), this.menu.select(n));
              break;
            case o.TAB:
              this.menu.active && this.menu.select(n);
              break;
            case o.ESCAPE:
              this.menu.element.is(':visible') &&
              (this.isMultiLine || this._value(this.term), this.close(
                  n), n.preventDefault());
              break;
            default:
              i = !0, this._searchTimeout(n);
          }
        },
        keypress: function(s) {
          if (e) return e = !1, (!this.isMultiLine ||
              this.menu.element.is(':visible')) && s.preventDefault(), void 0;
          if (!i) {
            var n = t.ui.keyCode;
            switch (s.keyCode) {
              case n.PAGE_UP:
                this._move('previousPage', s);
                break;
              case n.PAGE_DOWN:
                this._move('nextPage', s);
                break;
              case n.UP:
                this._keyEvent('previous', s);
                break;
              case n.DOWN:
                this._keyEvent('next', s);
            }
          }
        },
        input: function(t) {
          return s
              ? (s = !1, t.preventDefault(), void 0)
              : (this._searchTimeout(t), void 0);
        },
        focus: function() {
          this.selectedItem = null, this.previous = this._value();
        },
        blur: function(t) {
          return this.cancelBlur
              ? (delete this.cancelBlur, void 0)
              : (clearTimeout(this.searching), this.close(t), this._change(
                  t), void 0);
        },
      }), this._initSource(), this.menu = t('<ul>').
          appendTo(this._appendTo()).
          menu({
            role: null,
          }).
          hide().
          menu('instance'), this._addClass(this.menu.element, 'ui-autocomplete',
          'ui-front'), this._on(this.menu.element, {
        mousedown: function(e) {
          e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
            delete this.cancelBlur, this.element[0] !==
            t.ui.safeActiveElement(this.document[0]) &&
            this.element.trigger('focus');
          });
        },
        menufocus: function(e, i) {
          var s, n;
          return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent &&
          /^mouse/.test(e.originalEvent.type))
              ? (this.menu.blur(), this.document.one('mousemove', function() {
                t(e.target).trigger(e.originalEvent);
              }), void 0)
              : (n = i.item.data('ui-autocomplete-item'), !1 !==
              this._trigger('focus', e, {
                item: n,
              }) && e.originalEvent && /^key/.test(e.originalEvent.type) &&
              this._value(n.value), s = i.item.attr('aria-label') ||
                  n.value, s && t.trim(s).length &&
              (this.liveRegion.children().hide(), t('<div>').
                  text(s).
                  appendTo(this.liveRegion)), void 0);
        },
        menuselect: function(e, i) {
          var s = i.item.data('ui-autocomplete-item'),
              n = this.previous;
          this.element[0] !== t.ui.safeActiveElement(this.document[0]) &&
          (this.element.trigger('focus'), this.previous = n, this._delay(
              function() {
                this.previous = n, this.selectedItem = s;
              })), !1 !== this._trigger('select', e, {
            item: s,
          }) && this._value(s.value), this.term = this._value(), this.close(
              e), this.selectedItem = s;
        },
      }), this.liveRegion = t('<div>', {
        role: 'status',
        'aria-live': 'assertive',
        'aria-relevant': 'additions',
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null,
          'ui-helper-hidden-accessible'), this._on(this.window, {
        beforeunload: function() {
          this.element.removeAttr('autocomplete');
        },
      });
    },
    _destroy: function() {
      clearTimeout(this.searching), this.element.removeAttr(
          'autocomplete'), this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption: function(t, e) {
      this._super(t, e), 'source' === t && this._initSource(), 'appendTo' ===
      t && this.menu.element.appendTo(this._appendTo()), 'disabled' === t &&
      e && this.xhr && this.xhr.abort();
    },
    _isEventTargetInWidget: function(e) {
      var i = this.menu.element[0];
      return e.target === this.element[0] || e.target === i ||
          t.contains(i, e.target);
    },
    _closeOnClickOutside: function(t) {
      this._isEventTargetInWidget(t) || this.close();
    },
    _appendTo: function() {
      var e = this.options.appendTo;
      return e &&
      (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e &&
      e[0] || (e = this.element.closest('.ui-front, dialog')), e.length ||
      (e = this.document[0].body), e;
    },
    _initSource: function() {
      var e, i, s = this;
      t.isArray(this.options.source)
          ? (e = this.options.source, this.source = function(i, s) {
            s(t.ui.autocomplete.filter(e, i.term));
          })
          : 'string' == typeof this.options.source
          ? (i = this.options.source, this.source = function(e, n) {
            s.xhr && s.xhr.abort(), s.xhr = t.ajax({
              url: i,
              data: e,
              dataType: 'json',
              success: function(t) {
                n(t);
              },
              error: function() {
                n([]);
              },
            });
          })
          : this.source = this.options.source;
    },
    _searchTimeout: function(t) {
      clearTimeout(this.searching), this.searching = this._delay(function() {
        var e = this.term === this._value(),
            i = this.menu.element.is(':visible'),
            s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
        (!e || e && !i && !s) &&
        (this.selectedItem = null, this.search(null, t));
      }, this.options.delay);
    },
    search: function(t, e) {
      return t = null != t
          ? t
          : this._value(), this.term = this._value(), t.length <
      this.options.minLength ? this.close(e) : this._trigger('search', e) !== !1
          ? this._search(t)
          : void 0;
    },
    _search: function(t) {
      this.pending++, this._addClass(
          'ui-autocomplete-loading'), this.cancelSearch = !1, this.source({
        term: t,
      }, this._response());
    },
    _response: function() {
      var e = ++this.requestIndex;
      return t.proxy(function(t) {
        e === this.requestIndex &&
        this.__response(t), this.pending--, this.pending ||
        this._removeClass('ui-autocomplete-loading');
      }, this);
    },
    __response: function(t) {
      t && (t = this._normalize(t)), this._trigger('response', null, {
        content: t,
      }), !this.options.disabled && t && t.length && !this.cancelSearch
          ? (this._suggest(t), this._trigger('open'))
          : this._close();
    },
    close: function(t) {
      this.cancelSearch = !0, this._close(t);
    },
    _close: function(t) {
      this._off(this.document, 'mousedown'), this.menu.element.is(':visible') &&
      (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger(
          'close', t));
    },
    _change: function(t) {
      this.previous !== this._value() && this._trigger('change', t, {
        item: this.selectedItem,
      });
    },
    _normalize: function(e) {
      return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
        return 'string' == typeof e ? {
          label: e,
          value: e,
        } : t.extend({}, e, {
          label: e.label || e.value,
          value: e.value || e.label,
        });
      });
    },
    _suggest: function(e) {
      var i = this.menu.element.empty();
      this._renderMenu(i,
          e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(
          t.extend({
            of: this.element,
          }, this.options.position)), this.options.autoFocus &&
      this.menu.next(), this._on(this.document, {
        mousedown: '_closeOnClickOutside',
      });
    },
    _resizeMenu: function() {
      var t = this.menu.element;
      t.outerWidth(
          Math.max(t.width('').outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function(e, i) {
      var s = this;
      t.each(i, function(t, i) {
        s._renderItemData(e, i);
      });
    },
    _renderItemData: function(t, e) {
      return this._renderItem(t, e).data('ui-autocomplete-item', e);
    },
    _renderItem: function(e, i) {
      return t('<li>').append(t('<div>').text(i.label)).appendTo(e);
    },
    _move: function(t, e) {
      return this.menu.element.is(':visible') ? this.menu.isFirstItem() &&
      /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t)
          ? (this.isMultiLine ||
          this._value(this.term), this.menu.blur(), void 0)
          : (this.menu[t](e), void 0) : (this.search(null, e), void 0);
    },
    widget: function() {
      return this.menu.element;
    },
    _value: function() {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function(t, e) {
      (!this.isMultiLine || this.menu.element.is(':visible')) &&
      (this._move(t, e), e.preventDefault());
    },
    _isContentEditable: function(t) {
      if (!t.length) return !1;
      var e = t.prop('contentEditable');
      return 'inherit' === e ? this._isContentEditable(t.parent()) : 'true' ===
          e;
    },
  }), t.extend(t.ui.autocomplete, {
    escapeRegex: function(t) {
      return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
    },
    filter: function(e, i) {
      var s = RegExp(t.ui.autocomplete.escapeRegex(i), 'i');
      return t.grep(e, function(t) {
        return s.test(t.label || t.value || t);
      });
    },
  }), t.widget('ui.autocomplete', t.ui.autocomplete, {
    options: {
      messages: {
        noResults: 'No search results.',
        results: function(t) {
          return t + (t > 1 ? ' results are' : ' result is') +
              ' available, use up and down arrow keys to navigate.';
        },
      },
    },
    __response: function(e) {
      var i;
      this._superApply(arguments), this.options.disabled || this.cancelSearch ||
      (i = e && e.length
          ? this.options.messages.results(e.length)
          : this.options.messages.noResults, this.liveRegion.children().
          hide(), t('<div>').text(i).appendTo(this.liveRegion));
    },
  }), t.ui.autocomplete;
  var g = /ui-corner-([a-z]){2,6}/g;
  t.widget('ui.controlgroup', {
    version: '1.12.1',
    defaultElement: '<div>',
    options: {
      direction: 'horizontal',
      disabled: null,
      onlyVisible: !0,
      items: {
        button: 'input[type=button], input[type=submit], input[type=reset], button, a',
        controlgroupLabel: '.ui-controlgroup-label',
        checkboxradio: 'input[type=\'checkbox\'], input[type=\'radio\']',
        selectmenu: 'select',
        spinner: '.ui-spinner-input',
      },
    },
    _create: function() {
      this._enhance();
    },
    _enhance: function() {
      this.element.attr('role', 'toolbar'), this.refresh();
    },
    _destroy: function() {
      this._callChildMethod('destroy'), this.childWidgets.removeData(
          'ui-controlgroup-data'), this.element.removeAttr(
          'role'), this.options.items.controlgroupLabel &&
      this.element.find(this.options.items.controlgroupLabel).
          find('.ui-controlgroup-label-contents').
          contents().
          unwrap();
    },
    _initWidgets: function() {
      var e = this,
          i = [];
      t.each(this.options.items, function(s, n) {
        var o, a = {};
        return n ? 'controlgroupLabel' === s ? (o = e.element.find(n), o.each(
            function() {
              var e = t(this);
              e.children('.ui-controlgroup-label-contents').length ||
              e.contents().
                  wrapAll(
                      '<span class=\'ui-controlgroup-label-contents\'></span>');
            }), e._addClass(o, null,
            'ui-widget ui-widget-content ui-state-default'), i = i.concat(
            o.get()), void 0) : (t.fn[s] &&
        (a = e['_' + s + 'Options'] ? e['_' + s + 'Options']('middle') : {
          classes: {},
        }, e.element.find(n).each(function() {
          var n = t(this),
              o = n[s]('instance'),
              r = t.widget.extend({}, a);
          if ('button' !== s || !n.parent('.ui-spinner').length) {
            o || (o = n[s]()[s]('instance')), o &&
            (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
            var h = n[s]('widget');
            t.data(h[0], 'ui-controlgroup-data',
                o ? o : n[s]('instance')), i.push(h[0]);
          }
        })), void 0) : void 0;
      }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets,
          'ui-controlgroup-item');
    },
    _callChildMethod: function(e) {
      this.childWidgets.each(function() {
        var i = t(this),
            s = i.data('ui-controlgroup-data');
        s && s[e] && s[e]();
      });
    },
    _updateCornerClass: function(t, e) {
      var i = 'ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all',
          s = this._buildSimpleOptions(e, 'label').classes.label;
      this._removeClass(t, null, i), this._addClass(t, null, s);
    },
    _buildSimpleOptions: function(t, e) {
      var i = 'vertical' === this.options.direction,
          s = {
            classes: {},
          };
      return s.classes[e] = {
        middle: '',
        first: 'ui-corner-' + (i ? 'top' : 'left'),
        last: 'ui-corner-' + (i ? 'bottom' : 'right'),
        only: 'ui-corner-all',
      }[t], s;
    },
    _spinnerOptions: function(t) {
      var e = this._buildSimpleOptions(t, 'ui-spinner');
      return e.classes['ui-spinner-up'] = '', e.classes['ui-spinner-down'] = '', e;
    },
    _buttonOptions: function(t) {
      return this._buildSimpleOptions(t, 'ui-button');
    },
    _checkboxradioOptions: function(t) {
      return this._buildSimpleOptions(t, 'ui-checkboxradio-label');
    },
    _selectmenuOptions: function(t) {
      var e = 'vertical' === this.options.direction;
      return {
        width: e ? 'auto' : !1,
        classes: {
          middle: {
            'ui-selectmenu-button-open': '',
            'ui-selectmenu-button-closed': '',
          },
          first: {
            'ui-selectmenu-button-open': 'ui-corner-' + (e ? 'top' : 'tl'),
            'ui-selectmenu-button-closed': 'ui-corner-' + (e ? 'top' : 'left'),
          },
          last: {
            'ui-selectmenu-button-open': e ? '' : 'ui-corner-tr',
            'ui-selectmenu-button-closed': 'ui-corner-' +
                (e ? 'bottom' : 'right'),
          },
          only: {
            'ui-selectmenu-button-open': 'ui-corner-top',
            'ui-selectmenu-button-closed': 'ui-corner-all',
          },
        }[t],
      };
    },
    _resolveClassesValues: function(e, i) {
      var s = {};
      return t.each(e, function(n) {
        var o = i.options.classes[n] || '';
        o = t.trim(o.replace(g, '')), s[n] = (o + ' ' + e[n]).replace(/\s+/g,
            ' ');
      }), s;
    },
    _setOption: function(t, e) {
      return 'direction' === t && this._removeClass(
          'ui-controlgroup-' + this.options.direction), this._super(t,
          e), 'disabled' === t ? (this._callChildMethod(
          e ? 'disable' : 'enable'), void 0) : (this.refresh(), void 0);
    },
    refresh: function() {
      var e, i = this;
      this._addClass('ui-controlgroup ui-controlgroup-' +
          this.options.direction), 'horizontal' === this.options.direction &&
      this._addClass(null,
          'ui-helper-clearfix'), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible &&
      (e = e.filter(':visible')), e.length &&
      (t.each(['first', 'last'], function(t, s) {
        var n = e[s]().data('ui-controlgroup-data');
        if (n && i['_' + n.widgetName + 'Options']) {
          var o = i['_' + n.widgetName + 'Options'](
              1 === e.length ? 'only' : s);
          o.classes = i._resolveClassesValues(o.classes,
              n), n.element[n.widgetName](o);
        } else i._updateCornerClass(e[s](), s);
      }), this._callChildMethod('refresh'));
    },
  }), t.widget('ui.checkboxradio', [
    t.ui.formResetMixin, {
      version: '1.12.1',
      options: {
        disabled: null,
        label: null,
        icon: !0,
        classes: {
          'ui-checkboxradio-label': 'ui-corner-all',
          'ui-checkboxradio-icon': 'ui-corner-all',
        },
      },
      _getCreateOptions: function() {
        var e, i, s = this,
            n = this._super() || {};
        return this._readType(), i = this.element.labels(), this.label = t(
            i[i.length - 1]), this.label.length || t.error(
            'No label found for checkboxradio widget'), this.originalLabel = '', this.label.contents().
            not(this.element[0]).
            each(function() {
              s.originalLabel += 3 === this.nodeType
                  ? t(this).text()
                  : this.outerHTML;
            }), this.originalLabel &&
        (n.label = this.originalLabel), e = this.element[0].disabled, null !=
        e && (n.disabled = e), n;
      },
      _create: function() {
        var t = this.element[0].checked;
        this._bindFormResetHandler(), null == this.options.disabled &&
        (this.options.disabled = this.element[0].disabled), this._setOption(
            'disabled', this.options.disabled), this._addClass(
            'ui-checkboxradio', 'ui-helper-hidden-accessible'), this._addClass(
            this.label, 'ui-checkboxradio-label',
            'ui-button ui-widget'), 'radio' === this.type &&
        this._addClass(this.label,
            'ui-checkboxradio-radio-label'), this.options.label &&
        this.options.label !== this.originalLabel
            ? this._updateLabel()
            : this.originalLabel &&
            (this.options.label = this.originalLabel), this._enhance(), t &&
        (this._addClass(this.label, 'ui-checkboxradio-checked',
            'ui-state-active'), this.icon &&
        this._addClass(this.icon, null, 'ui-state-hover')), this._on({
          change: '_toggleClasses',
          focus: function() {
            this._addClass(this.label, null, 'ui-state-focus ui-visual-focus');
          },
          blur: function() {
            this._removeClass(this.label, null,
                'ui-state-focus ui-visual-focus');
          },
        });
      },
      _readType: function() {
        var e = this.element[0].nodeName.toLowerCase();
        this.type = this.element[0].type, 'input' === e &&
        /radio|checkbox/.test(this.type) || t.error(
            'Can\'t create checkboxradio on element.nodeName=' + e +
            ' and element.type=' + this.type);
      },
      _enhance: function() {
        this._updateIcon(this.element[0].checked);
      },
      widget: function() {
        return this.label;
      },
      _getRadioGroup: function() {
        var e, i = this.element[0].name,
            s = 'input[name=\'' + t.ui.escapeSelector(i) + '\']';
        return i ? (e = this.form.length
            ? t(this.form[0].elements).filter(s)
            : t(s).filter(function() {
              return 0 === t(this).form().length;
            }), e.not(this.element)) : t([]);
      },
      _toggleClasses: function() {
        var e = this.element[0].checked;
        this._toggleClass(this.label, 'ui-checkboxradio-checked',
            'ui-state-active', e), this.options.icon && 'checkbox' ===
        this.type &&
        this._toggleClass(this.icon, null, 'ui-icon-check ui-state-checked', e).
            _toggleClass(this.icon, null, 'ui-icon-blank', !e), 'radio' ===
        this.type && this._getRadioGroup().each(function() {
          var e = t(this).checkboxradio('instance');
          e &&
          e._removeClass(e.label, 'ui-checkboxradio-checked',
              'ui-state-active');
        });
      },
      _destroy: function() {
        this._unbindFormResetHandler(), this.icon &&
        (this.icon.remove(), this.iconSpace.remove());
      },
      _setOption: function(t, e) {
        return 'label' !== t || e ? (this._super(t, e), 'disabled' === t
            ? (this._toggleClass(this.label, null, 'ui-state-disabled',
                e), this.element[0].disabled = e, void 0)
            : (this.refresh(), void 0)) : void 0;
      },
      _updateIcon: function(e) {
        var i = 'ui-icon ui-icon-background ';
        this.options.icon ? (this.icon ||
        (this.icon = t('<span>'), this.iconSpace = t(
            '<span> </span>'), this._addClass(this.iconSpace,
            'ui-checkboxradio-icon-space')), 'checkbox' === this.type
            ? (i += e
                ? 'ui-icon-check ui-state-checked'
                : 'ui-icon-blank', this._removeClass(this.icon, null,
                e ? 'ui-icon-blank' : 'ui-icon-check'))
            : i += 'ui-icon-blank', this._addClass(this.icon,
            'ui-checkboxradio-icon', i), e || this._removeClass(this.icon, null,
            'ui-icon-check ui-state-checked'), this.icon.prependTo(this.label).
            after(this.iconSpace)) : void 0 !== this.icon &&
            (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
      },
      _updateLabel: function() {
        var t = this.label.contents().not(this.element[0]);
        this.icon && (t = t.not(this.icon[0])), this.iconSpace &&
        (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(
            this.options.label);
      },
      refresh: function() {
        var t = this.element[0].checked,
            e = this.element[0].disabled;
        this._updateIcon(t), this._toggleClass(this.label,
            'ui-checkboxradio-checked', 'ui-state-active', t), null !==
        this.options.label && this._updateLabel(), e !==
        this.options.disabled && this._setOptions({
          disabled: e,
        });
      },
    }]), t.ui.checkboxradio, t.widget('ui.button', {
    version: '1.12.1',
    defaultElement: '<button>',
    options: {
      classes: {
        'ui-button': 'ui-corner-all',
      },
      disabled: null,
      icon: null,
      iconPosition: 'beginning',
      label: null,
      showLabel: !0,
    },
    _getCreateOptions: function() {
      var t, e = this._super() || {};
      return this.isInput = this.element.is(
          'input'), t = this.element[0].disabled, null != t &&
      (e.disabled = t), this.originalLabel = this.isInput
          ? this.element.val()
          : this.element.html(), this.originalLabel &&
      (e.label = this.originalLabel), e;
    },
    _create: function() {
      !this.option.showLabel & !this.options.icon &&
      (this.options.showLabel = !0), null == this.options.disabled &&
      (this.options.disabled = this.element[0].disabled ||
          !1), this.hasTitle = !!this.element.attr(
          'title'), this.options.label && this.options.label !==
      this.originalLabel &&
      (this.isInput ? this.element.val(this.options.label) : this.element.html(
          this.options.label)), this._addClass('ui-button',
          'ui-widget'), this._setOption('disabled',
          this.options.disabled), this._enhance(), this.element.is('a') &&
      this._on({
        keyup: function(e) {
          e.keyCode === t.ui.keyCode.SPACE &&
          (e.preventDefault(), this.element[0].click
              ? this.element[0].click()
              : this.element.trigger('click'));
        },
      });
    },
    _enhance: function() {
      this.element.is('button') ||
      this.element.attr('role', 'button'), this.options.icon &&
      (this._updateIcon('icon', this.options.icon), this._updateTooltip());
    },
    _updateTooltip: function() {
      this.title = this.element.attr('title'), this.options.showLabel ||
      this.title || this.element.attr('title', this.options.label);
    },
    _updateIcon: function(e, i) {
      var s = 'iconPosition' !== e,
          n = s ? this.options.iconPosition : i,
          o = 'top' === n || 'bottom' === n;
      this.icon
          ? s && this._removeClass(this.icon, null, this.options.icon)
          : (this.icon = t('<span>'), this._addClass(this.icon,
          'ui-button-icon', 'ui-icon'), this.options.showLabel ||
          this._addClass('ui-button-icon-only')), s &&
      this._addClass(this.icon, null, i), this._attachIcon(n), o
          ? (this._addClass(this.icon, null,
              'ui-widget-icon-block'), this.iconSpace &&
          this.iconSpace.remove())
          : (this.iconSpace ||
          (this.iconSpace = t('<span> </span>'), this._addClass(this.iconSpace,
              'ui-button-icon-space')), this._removeClass(this.icon, null,
              'ui-wiget-icon-block'), this._attachIconSpace(n));
    },
    _destroy: function() {
      this.element.removeAttr('role'), this.icon &&
      this.icon.remove(), this.iconSpace &&
      this.iconSpace.remove(), this.hasTitle ||
      this.element.removeAttr('title');
    },
    _attachIconSpace: function(t) {
      this.icon[/^(?:end|bottom)/.test(t) ? 'before' : 'after'](this.iconSpace);
    },
    _attachIcon: function(t) {
      this.element[/^(?:end|bottom)/.test(t) ? 'append' : 'prepend'](this.icon);
    },
    _setOptions: function(t) {
      var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
          i = void 0 === t.icon ? this.options.icon : t.icon;
      e || i || (t.showLabel = !0), this._super(t);
    },
    _setOption: function(t, e) {
      'icon' === t && (e ? this._updateIcon(t, e) : this.icon &&
          (this.icon.remove(), this.iconSpace &&
          this.iconSpace.remove())), 'iconPosition' === t &&
      this._updateIcon(t, e), 'showLabel' === t &&
      (this._toggleClass('ui-button-icon-only', null,
          !e), this._updateTooltip()), 'label' === t &&
      (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon &&
      (this._attachIcon(this.options.iconPosition), this._attachIconSpace(
          this.options.iconPosition)))), this._super(t, e), 'disabled' === t &&
      (this._toggleClass(null, 'ui-state-disabled',
          e), this.element[0].disabled = e, e && this.element.blur());
    },
    refresh: function() {
      var t = this.element.is('input, button')
          ? this.element[0].disabled
          : this.element.hasClass('ui-button-disabled');
      t !== this.options.disabled && this._setOptions({
        disabled: t,
      }), this._updateTooltip();
    },
  }), t.uiBackCompat !== !1 && (t.widget('ui.button', t.ui.button, {
    options: {
      text: !0,
      icons: {
        primary: null,
        secondary: null,
      },
    },
    _create: function() {
      this.options.showLabel && !this.options.text &&
      (this.options.showLabel = this.options.text), !this.options.showLabel &&
      this.options.text &&
      (this.options.text = this.options.showLabel), this.options.icon ||
      !this.options.icons.primary && !this.options.icons.secondary
          ? this.options.icon &&
          (this.options.icons.primary = this.options.icon)
          : this.options.icons.primary
              ? this.options.icon = this.options.icons.primary
              : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = 'end'), this._super();
    },
    _setOption: function(t, e) {
      return 'text' === t
          ? (this._super('showLabel', e), void 0)
          : ('showLabel' === t && (this.options.text = e), 'icon' === t &&
          (this.options.icons.primary = e), 'icons' === t &&
          (e.primary ? (this._super('icon', e.primary), this._super(
              'iconPosition', 'beginning')) : e.secondary &&
              (this._super('icon', e.secondary), this._super('iconPosition',
                  'end'))), this._superApply(arguments), void 0);
    },
  }), t.fn.button = function(e) {
    return function() {
      return !this.length || this.length && 'INPUT' !== this[0].tagName ||
      this.length && 'INPUT' === this[0].tagName && 'checkbox' !==
      this.attr('type') && 'radio' !== this.attr('type') ? e.apply(this,
          arguments) : (t.ui.checkboxradio ||
      t.error('Checkboxradio widget missing'), 0 === arguments.length
          ? this.checkboxradio({
            icon: !1,
          })
          : this.checkboxradio.apply(this, arguments));
    };
  }(t.fn.button), t.fn.buttonset = function() {
    return t.ui.controlgroup ||
    t.error('Controlgroup widget missing'), 'option' === arguments[0] &&
    'items' === arguments[1] && arguments[2] ? this.controlgroup.apply(this,
        [arguments[0], 'items.button', arguments[2]]) : 'option' ===
    arguments[0] && 'items' === arguments[1] ? this.controlgroup.apply(this,
        [arguments[0], 'items.button']) : ('object' == typeof arguments[0] &&
    arguments[0].items && (arguments[0].items = {
      button: arguments[0].items,
    }), this.controlgroup.apply(this, arguments));
  }), t.ui.button, t.extend(t.ui, {
    datepicker: {
      version: '1.12.1',
    },
  });
  var m;
  t.extend(s.prototype, {
    markerClassName: 'hasDatepicker',
    maxRows: 4,
    _widgetDatepicker: function() {
      return this.dpDiv;
    },
    setDefaults: function(t) {
      return a(this._defaults, t || {}), this;
    },
    _attachDatepicker: function(e, i) {
      var s, n, o;
      s = e.nodeName.toLowerCase(), n = 'div' === s || 'span' === s, e.id ||
      (this.uuid += 1, e.id = 'dp' + this.uuid), o = this._newInst(t(e),
          n), o.settings = t.extend({}, i || {}), 'input' === s
          ? this._connectDatepicker(e, o)
          : n && this._inlineDatepicker(e, o);
    },
    _newInst: function(e, i) {
      var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1');
      return {
        id: s,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i
            ? n(t('<div class=\'' + this._inlineClass +
                ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>'))
            : this.dpDiv,
      };
    },
    _connectDatepicker: function(e, i) {
      var s = t(e);
      i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) ||
      (this._attachments(s, i), s.addClass(this.markerClassName).
          on('keydown', this._doKeyDown).
          on('keypress', this._doKeyPress).
          on('keyup', this._doKeyUp), this._autoSize(i), t.data(e, 'datepicker',
          i), i.settings.disabled && this._disableDatepicker(e));
    },
    _attachments: function(e, i) {
      var s, n, o, a = this._get(i, 'appendText'),
          r = this._get(i, 'isRTL');
      i.append && i.append.remove(), a && (i.append = t(
          '<span class=\'' + this._appendClass + '\'>' + a + '</span>'), e[r
          ? 'before'
          : 'after'](i.append)), e.off('focus',
          this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(
          i, 'showOn'), ('focus' === s || 'both' === s) &&
      e.on('focus', this._showDatepicker), ('button' === s || 'both' === s) &&
      (n = this._get(i, 'buttonText'), o = this._get(i,
          'buttonImage'), i.trigger = t(
          this._get(i, 'buttonImageOnly') ? t('<img/>').
              addClass(this._triggerClass).
              attr({
                src: o,
                alt: n,
                title: n,
              }) : t('<button type=\'button\'></button>').
              addClass(this._triggerClass).
              html(o ? t('<img/>').attr({
                src: o,
                alt: n,
                title: n,
              }) : n)), e[r ? 'before' : 'after'](i.trigger), i.trigger.on(
          'click', function() {
            return t.datepicker._datepickerShowing &&
            t.datepicker._lastInput === e[0]
                ? t.datepicker._hideDatepicker()
                : t.datepicker._datepickerShowing && t.datepicker._lastInput !==
                e[0]
                    ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(
                        e[0]))
                    : t.datepicker._showDatepicker(e[0]), !1;
          }));
    },
    _autoSize: function(t) {
      if (this._get(t, 'autoSize') && !t.inline) {
        var e, i, s, n, o = new Date(2009, 11, 20),
            a = this._get(t, 'dateFormat');
        a.match(/[DM]/) && (e = function(t) {
          for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i &&
          (i = t[n].length, s = n);
          return s;
        }, o.setMonth(e(this._get(t,
            a.match(/MM/) ? 'monthNames' : 'monthNamesShort'))), o.setDate(
            e(this._get(t, a.match(/DD/) ? 'dayNames' : 'dayNamesShort')) + 20 -
            o.getDay())), t.input.attr('size', this._formatDate(t, o).length);
      }
    },
    _inlineDatepicker: function(e, i) {
      var s = t(e);
      s.hasClass(this.markerClassName) ||
      (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, 'datepicker',
          i), this._setDate(i, this._getDefaultDate(i),
          !0), this._updateDatepicker(i), this._updateAlternate(
          i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css(
          'display', 'block'));
    },
    _dialogDatepicker: function(e, i, s, n, o) {
      var r, h, l, c, u, d = this._dialogInst;
      return d || (this.uuid += 1, r = 'dp' + this.uuid, this._dialogInput = t(
          '<input type=\'text\' id=\'' + r +
          '\' style=\'position: absolute; top: -100px; width: 0px;\'/>'), this._dialogInput.on(
          'keydown', this._doKeyDown), t('body').
          append(this._dialogInput), d = this._dialogInst = this._newInst(
          this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0],
          'datepicker', d)), a(d.settings, n || {}), i = i && i.constructor ===
      Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o
          ? o.length ? o : [o.pageX, o.pageY]
          : null, this._pos ||
      (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft ||
          document.body.scrollLeft, u = document.documentElement.scrollTop ||
          document.body.scrollTop, this._pos = [
        h / 2 - 100 + c,
        l / 2 - 150 + u]), this._dialogInput.css('left',
          this._pos[0] + 20 + 'px').
          css('top', this._pos[1] +
              'px'), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(
          this._dialogClass), this._showDatepicker(
          this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(
          this._dialogInput[0], 'datepicker', d), this;
    },
    _destroyDatepicker: function(e) {
      var i, s = t(e),
          n = t.data(e, 'datepicker');
      s.hasClass(this.markerClassName) &&
      (i = e.nodeName.toLowerCase(), t.removeData(e, 'datepicker'), 'input' ===
      i ? (n.append.remove(), n.trigger.remove(), s.removeClass(
          this.markerClassName).
          off('focus', this._showDatepicker).
          off('keydown', this._doKeyDown).
          off('keypress', this._doKeyPress).
          off('keyup', this._doKeyUp)) : ('div' === i || 'span' === i) &&
          s.removeClass(this.markerClassName).empty(), m === n && (m = null));
    },
    _enableDatepicker: function(e) {
      var i, s, n = t(e),
          o = t.data(e, 'datepicker');
      n.hasClass(this.markerClassName) &&
      (i = e.nodeName.toLowerCase(), 'input' === i
          ? (e.disabled = !1, o.trigger.filter('button').each(function() {
            this.disabled = !1;
          }).end().filter('img').css({
            opacity: '1.0',
            cursor: '',
          }))
          : ('div' === i || 'span' === i) &&
          (s = n.children('.' + this._inlineClass), s.children().
              removeClass('ui-state-disabled'), s.find(
              'select.ui-datepicker-month, select.ui-datepicker-year').
              prop('disabled', !1)), this._disabledInputs = t.map(
          this._disabledInputs, function(t) {
            return t === e ? null : t;
          }));
    },
    _disableDatepicker: function(e) {
      var i, s, n = t(e),
          o = t.data(e, 'datepicker');
      n.hasClass(this.markerClassName) &&
      (i = e.nodeName.toLowerCase(), 'input' === i
          ? (e.disabled = !0, o.trigger.filter('button').each(function() {
            this.disabled = !0;
          }).end().filter('img').css({
            opacity: '0.5',
            cursor: 'default',
          }))
          : ('div' === i || 'span' === i) &&
          (s = n.children('.' + this._inlineClass), s.children().
              addClass('ui-state-disabled'), s.find(
              'select.ui-datepicker-month, select.ui-datepicker-year').
              prop('disabled', !0)), this._disabledInputs = t.map(
          this._disabledInputs, function(t) {
            return t === e ? null : t;
          }), this._disabledInputs[this._disabledInputs.length] = e);
    },
    _isDisabledDatepicker: function(t) {
      if (!t) return !1;
      for (var e = 0; this._disabledInputs.length > e; e++)
        if (this._disabledInputs[e] === t) return !0;
      return !1;
    },
    _getInst: function(e) {
      try {
        return t.data(e, 'datepicker');
      } catch (i) {
        throw 'Missing instance data for this datepicker';
      }
    },
    _optionDatepicker: function(e, i, s) {
      var n, o, r, h, l = this._getInst(e);
      return 2 === arguments.length && 'string' == typeof i
          ? 'defaults' === i
              ? t.extend({}, t.datepicker._defaults)
              : l
                  ? 'all' === i ? t.extend({}, l.settings) : this._get(l, i)
                  : null
          : (n = i || {}, 'string' == typeof i && (n = {}, n[i] = s), l &&
          (this._curInst === l &&
          this._hideDatepicker(), o = this._getDateDatepicker(e,
              !0), r = this._getMinMaxDate(l, 'min'), h = this._getMinMaxDate(l,
              'max'), a(l.settings, n), null !== r && void 0 !== n.dateFormat &&
          void 0 === n.minDate &&
          (l.settings.minDate = this._formatDate(l, r)), null !== h &&
          void 0 !== n.dateFormat && void 0 === n.maxDate &&
          (l.settings.maxDate = this._formatDate(l, h)), 'disabled' in n &&
          (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(
              e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(
              l, o), this._updateAlternate(l), this._updateDatepicker(
              l)), void 0);
    },
    _changeDatepicker: function(t, e, i) {
      this._optionDatepicker(t, e, i);
    },
    _refreshDatepicker: function(t) {
      var e = this._getInst(t);
      e && this._updateDatepicker(e);
    },
    _setDateDatepicker: function(t, e) {
      var i = this._getInst(t);
      i &&
      (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(
          i));
    },
    _getDateDatepicker: function(t, e) {
      var i = this._getInst(t);
      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(
          i) : null;
    },
    _doKeyDown: function(e) {
      var i, s, n, o = t.datepicker._getInst(e.target),
          a = !0,
          r = o.dpDiv.is('.ui-datepicker-rtl');
      if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
        case 9:
          t.datepicker._hideDatepicker(), a = !1;
          break;
        case 13:
          return n = t('td.' + t.datepicker._dayOverClass + ':not(.' +
              t.datepicker._currentClass + ')', o.dpDiv), n[0] &&
          t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear,
              n[0]), i = t.datepicker._get(o, 'onSelect'), i
              ? (s = t.datepicker._formatDate(o), i.apply(
                  o.input ? o.input[0] : null, [s, o]))
              : t.datepicker._hideDatepicker(), !1;
        case 27:
          t.datepicker._hideDatepicker();
          break;
        case 33:
          t.datepicker._adjustDate(e.target, e.ctrlKey
              ? -t.datepicker._get(o, 'stepBigMonths')
              : -t.datepicker._get(o, 'stepMonths'), 'M');
          break;
        case 34:
          t.datepicker._adjustDate(e.target, e.ctrlKey
              ? +t.datepicker._get(o, 'stepBigMonths')
              : +t.datepicker._get(o, 'stepMonths'), 'M');
          break;
        case 35:
          (e.ctrlKey || e.metaKey) &&
          t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
          break;
        case 36:
          (e.ctrlKey || e.metaKey) &&
          t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
          break;
        case 37:
          (e.ctrlKey || e.metaKey) &&
          t.datepicker._adjustDate(e.target, r ? 1 : -1, 'D'), a = e.ctrlKey ||
              e.metaKey, e.originalEvent.altKey &&
          t.datepicker._adjustDate(e.target, e.ctrlKey
              ? -t.datepicker._get(o, 'stepBigMonths')
              : -t.datepicker._get(o, 'stepMonths'), 'M');
          break;
        case 38:
          (e.ctrlKey || e.metaKey) &&
          t.datepicker._adjustDate(e.target, -7, 'D'), a = e.ctrlKey ||
              e.metaKey;
          break;
        case 39:
          (e.ctrlKey || e.metaKey) &&
          t.datepicker._adjustDate(e.target, r ? -1 : 1, 'D'), a = e.ctrlKey ||
              e.metaKey, e.originalEvent.altKey &&
          t.datepicker._adjustDate(e.target, e.ctrlKey
              ? +t.datepicker._get(o, 'stepBigMonths')
              : +t.datepicker._get(o, 'stepMonths'), 'M');
          break;
        case 40:
          (e.ctrlKey || e.metaKey) &&
          t.datepicker._adjustDate(e.target, 7, 'D'), a = e.ctrlKey ||
              e.metaKey;
          break;
        default:
          a = !1;
      } else 36 === e.keyCode && e.ctrlKey
          ? t.datepicker._showDatepicker(this)
          : a = !1;
      a && (e.preventDefault(), e.stopPropagation());
    },
    _doKeyPress: function(e) {
      var i, s, n = t.datepicker._getInst(e.target);
      return t.datepicker._get(n, 'constrainInput')
          ? (i = t.datepicker._possibleChars(
              t.datepicker._get(n, 'dateFormat')), s = String.fromCharCode(
              null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey ||
          e.metaKey || ' ' > s || !i || i.indexOf(s) > -1)
          : void 0;
    },
    _doKeyUp: function(e) {
      var i, s = t.datepicker._getInst(e.target);
      if (s.input.val() !== s.lastVal) try {
        i = t.datepicker.parseDate(t.datepicker._get(s, 'dateFormat'),
            s.input ? s.input.val() : null,
            t.datepicker._getFormatConfig(s)), i &&
        (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(
            s), t.datepicker._updateDatepicker(s));
      } catch (n) {}
      return !0;
    },
    _showDatepicker: function(e) {
      if (e = e.target || e, 'input' !== e.nodeName.toLowerCase() &&
      (e = t('input', e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(
          e) && t.datepicker._lastInput !== e) {
        var s, n, o, r, h, l, c;
        s = t.datepicker._getInst(e), t.datepicker._curInst &&
        t.datepicker._curInst !== s &&
        (t.datepicker._curInst.dpDiv.stop(!0, !0), s &&
        t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(
            t.datepicker._curInst.input[0])), n = t.datepicker._get(s,
            'beforeShow'), o = n ? n.apply(e, [e, s]) : {}, o !== !1 &&
        (a(s.settings,
            o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(
            s), t.datepicker._inDialog && (e.value = ''), t.datepicker._pos ||
        (t.datepicker._pos = t.datepicker._findPos(
            e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).
            parents().
            each(function() {
              return r |= 'fixed' === t(this).css('position'), !r;
            }), h = {
          left: t.datepicker._pos[0],
          top: t.datepicker._pos[1],
        }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
          position: 'absolute',
          display: 'block',
          top: '-1000px',
        }), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s,
            h, r), s.dpDiv.css({
          position: t.datepicker._inDialog && t.blockUI ? 'static' : r
              ? 'fixed'
              : 'absolute',
          display: 'none',
          left: h.left + 'px',
          top: h.top + 'px',
        }), s.inline ||
        (l = t.datepicker._get(s, 'showAnim'), c = t.datepicker._get(s,
            'duration'), s.dpDiv.css('z-index',
            i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects &&
        t.effects.effect[l] ? s.dpDiv.show(l,
            t.datepicker._get(s, 'showOptions'), c) : s.dpDiv[l || 'show'](
            l ? c : null), t.datepicker._shouldFocusInput(s) &&
        s.input.trigger('focus'), t.datepicker._curInst = s));
      }
    },
    _updateDatepicker: function(e) {
      this.maxRows = 4, m = e, e.dpDiv.empty().
          append(this._generateHTML(e)), this._attachHandlers(e);
      var i, s = this._getNumberOfMonths(e),
          n = s[1],
          a = 17,
          r = e.dpDiv.find('.' + this._dayOverClass + ' a');
      r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass(
          'ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').
          width(''), n > 1 && e.dpDiv.addClass('ui-datepicker-multi-' + n).
          css('width', a * n + 'em'), e.dpDiv[(1 !== s[0] || 1 !== s[1]
          ? 'add'
          : 'remove') + 'Class']('ui-datepicker-multi'), e.dpDiv[(this._get(e,
          'isRTL') ? 'add' : 'remove') + 'Class']('ui-datepicker-rtl'), e ===
      t.datepicker._curInst && t.datepicker._datepickerShowing &&
      t.datepicker._shouldFocusInput(e) &&
      e.input.trigger('focus'), e.yearshtml &&
      (i = e.yearshtml, setTimeout(function() {
        i === e.yearshtml && e.yearshtml &&
        e.dpDiv.find('select.ui-datepicker-year:first').
            replaceWith(e.yearshtml), i = e.yearshtml = null;
      }, 0));
    },
    _shouldFocusInput: function(t) {
      return t.input && t.input.is(':visible') && !t.input.is(':disabled') &&
          !t.input.is(':focus');
    },
    _checkOffset: function(e, i, s) {
      var n = e.dpDiv.outerWidth(),
          o = e.dpDiv.outerHeight(),
          a = e.input ? e.input.outerWidth() : 0,
          r = e.input ? e.input.outerHeight() : 0,
          h = document.documentElement.clientWidth +
              (s ? 0 : t(document).scrollLeft()),
          l = document.documentElement.clientHeight +
              (s ? 0 : t(document).scrollTop());
      return i.left -= this._get(e, 'isRTL') ? n - a : 0, i.left -= s &&
      i.left === e.input.offset().left
          ? t(document).scrollLeft()
          : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).
          scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n
          ? Math.abs(i.left + n - h)
          : 0), i.top -= Math.min(i.top,
          i.top + o > l && l > o ? Math.abs(o + r) : 0), i;
    },
    _findPos: function(e) {
      for (var i, s = this._getInst(e), n = this._get(s, 'isRTL'); e &&
      ("hidden" === e.type || 1 !== e.nodeType ||
          t.expr.filters.hidden(e));) e = e[n
          ? 'previousSibling'
          : 'nextSibling'];
      return i = t(e).offset(), [i.left, i.top];
    },
    _hideDatepicker: function(e) {
      var i, s, n, o, a = this._curInst;
      !a || e && a !== t.data(e, 'datepicker') || this._datepickerShowing &&
      (i = this._get(a, 'showAnim'), s = this._get(a,
          'duration'), n = function() {
        t.datepicker._tidyDialog(a);
      }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i,
          t.datepicker._get(a, 'showOptions'), s, n) : a.dpDiv['slideDown' === i
          ? 'slideUp'
          : 'fadeIn' === i ? 'fadeOut' : 'hide'](i ? s : null, n), i ||
      n(), this._datepickerShowing = !1, o = this._get(a, 'onClose'), o &&
      o.apply(a.input ? a.input[0] : null, [
        a.input ? a.input.val() : '',
        a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: 'absolute',
        left: '0',
        top: '-100px',
      }), t.blockUI &&
      (t.unblockUI(), t('body').append(this.dpDiv))), this._inDialog = !1);
    },
    _tidyDialog: function(t) {
      t.dpDiv.removeClass(this._dialogClass).off('.ui-datepicker-calendar');
    },
    _checkExternalClick: function(e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
            s = t.datepicker._getInst(i[0]);
        (i[0].id !== t.datepicker._mainDivId && 0 ===
            i.parents('#' + t.datepicker._mainDivId).length &&
            !i.hasClass(t.datepicker.markerClassName) &&
            !i.closest('.' + t.datepicker._triggerClass).length &&
            t.datepicker._datepickerShowing &&
            (!t.datepicker._inDialog || !t.blockUI) ||
            i.hasClass(t.datepicker.markerClassName) &&
            t.datepicker._curInst !== s) && t.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function(e, i, s) {
      var n = t(e),
          o = this._getInst(n[0]);
      this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o,
          i + ('M' === s ? this._get(o, 'showCurrentAtPos') : 0),
          s), this._updateDatepicker(o));
    },
    _gotoToday: function(e) {
      var i, s = t(e),
          n = this._getInst(s[0]);
      this._get(n, 'gotoCurrent') && n.currentDay
          ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear)
          : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(
          n), this._adjustDate(s);
    },
    _selectMonthYear: function(e, i, s) {
      var n = t(e),
          o = this._getInst(n[0]);
      o['selected' + ('M' === s ? 'Month' : 'Year')] = o['draw' +
      ('M' === s ? 'Month' : 'Year')] = parseInt(
          i.options[i.selectedIndex].value, 10), this._notifyChange(
          o), this._adjustDate(n);
    },
    _selectDay: function(e, i, s, n) {
      var o, a = t(e);
      t(n).hasClass(this._unselectableClass) ||
      this._isDisabledDatepicker(a[0]) ||
      (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t('a', n).
          html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(
          e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
    },
    _clearDate: function(e) {
      var i = t(e);
      this._selectDate(i, '');
    },
    _selectDate: function(e, i) {
      var s, n = t(e),
          o = this._getInst(n[0]);
      i = null != i ? i : this._formatDate(o), o.input &&
      o.input.val(i), this._updateAlternate(o), s = this._get(o, 'onSelect'), s
          ? s.apply(o.input ? o.input[0] : null, [i, o])
          : o.input && o.input.trigger('change'), o.inline
          ? this._updateDatepicker(o)
          : (this._hideDatepicker(), this._lastInput = o.input[0], 'object' !=
          typeof o.input[0] &&
          o.input.trigger('focus'), this._lastInput = null);
    },
    _updateAlternate: function(e) {
      var i, s, n, o = this._get(e, 'altField');
      o && (i = this._get(e, 'altFormat') ||
          this._get(e, 'dateFormat'), s = this._getDate(e), n = this.formatDate(
          i, s, this._getFormatConfig(e)), t(o).val(n));
    },
    noWeekends: function(t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ''];
    },
    iso8601Week: function(t) {
      var e, i = new Date(t.getTime());
      return i.setDate(
          i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(
          0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
    },
    parseDate: function(e, i, s) {
      if (null == e || null == i) throw 'Invalid arguments';
      if (i = 'object' == typeof i ? '' + i : i + '', '' === i) return null;
      var n, o, a, r, h = 0,
          l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          c = 'string' != typeof l ? l : (new Date).getFullYear() % 100 +
              parseInt(l, 10),
          u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
          d = (s ? s.dayNames : null) || this._defaults.dayNames,
          p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
          f = (s ? s.monthNames : null) || this._defaults.monthNames,
          g = -1,
          m = -1,
          _ = -1,
          v = -1,
          b = !1,
          y = function(t) {
            var i = e.length > n + 1 && e.charAt(n + 1) === t;
            return i && n++, i;
          },
          w = function(t) {
            var e = y(t),
                s = '@' === t ? 14 : '!' === t ? 20 : 'y' === t && e
                    ? 4
                    : 'o' === t ? 3 : 2,
                n = 'y' === t ? s : 1,
                o = RegExp('^\\d{' + n + ',' + s + '}'),
                a = i.substring(h).match(o);
            if (!a) throw 'Missing number at position ' + h;
            return h += a[0].length, parseInt(a[0], 10);
          },
          k = function(e, s, n) {
            var o = -1,
                a = t.map(y(e) ? n : s, function(t, e) {
                  return [
                    [e, t],
                  ];
                }).sort(function(t, e) {
                  return -(t[1].length - e[1].length);
                });
            if (t.each(a, function(t, e) {
              var s = e[1];
              return i.substr(h, s.length).toLowerCase() === s.toLowerCase()
                  ? (o = e[0], h += s.length, !1)
                  : void 0;
            }), -1 !== o) return o + 1;
            throw 'Unknown name at position ' + h;
          },
          x = function() {
            if (i.charAt(h) !==
                e.charAt(n)) throw 'Unexpected literal at position ' + h;
            h++;
          };
      for (n = 0; e.length > n; n++)
        if (b) '\'' !== e.charAt(n) || y('\'') ? x() : b = !1;
        else switch (e.charAt(n)) {
          case 'd':
            _ = w('d');
            break;
          case 'D':
            k('D', u, d);
            break;
          case 'o':
            v = w('o');
            break;
          case 'm':
            m = w('m');
            break;
          case 'M':
            m = k('M', p, f);
            break;
          case 'y':
            g = w('y');
            break;
          case '@':
            r = new Date(w('@')), g = r.getFullYear(), m = r.getMonth() +
                1, _ = r.getDate();
            break;
          case '!':
            r = new Date((w('!') - this._ticksTo1970) /
                1e4), g = r.getFullYear(), m = r.getMonth() +
                1, _ = r.getDate();
            break;
          case '\'':
            y('\'') ? x() : b = !0;
            break;
          default:
            x();
        }
      if (i.length > h && (a = i.substr(h), !/^\s+/.test(
          a))) throw 'Extra/unparsed characters found in date: ' + a;
      if (-1 === g ? g = (new Date).getFullYear() : 100 > g &&
          (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 +
              (c >= g ? 0 : -100)), v > -1)
        for (m = 1, _ = v; ;) {
          if (o = this._getDaysInMonth(g, m - 1), o >= _) break;
          m++, _ -= o;
        }
      if (r = this._daylightSavingAdjust(
          new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !==
      m || r.getDate() !== _) throw 'Invalid date';
      return r;
    },
    ATOM: 'yy-mm-dd',
    COOKIE: 'D, dd M yy',
    ISO_8601: 'yy-mm-dd',
    RFC_822: 'D, d M y',
    RFC_850: 'DD, dd-M-y',
    RFC_1036: 'D, d M y',
    RFC_1123: 'D, d M yy',
    RFC_2822: 'D, d M yy',
    RSS: 'D, d M y',
    TICKS: '!',
    TIMESTAMP: '@',
    W3C: 'yy-mm-dd',
    _ticksTo1970: 1e7 * 60 * 60 * 24 *
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function(t, e, i) {
      if (!e) return '';
      var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          o = (i ? i.dayNames : null) || this._defaults.dayNames,
          a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          r = (i ? i.monthNames : null) || this._defaults.monthNames,
          h = function(e) {
            var i = t.length > s + 1 && t.charAt(s + 1) === e;
            return i && s++, i;
          },
          l = function(t, e, i) {
            var s = '' + e;
            if (h(t))
              for (; i > s.length;) s = '0' + s;
            return s;
          },
          c = function(t, e, i, s) {
            return h(t) ? s[e] : i[e];
          },
          u = '',
          d = !1;
      if (e)
        for (s = 0; t.length > s; s++)
          if (d) '\'' !== t.charAt(s) || h('\'') ? u += t.charAt(s) : d = !1;
          else switch (t.charAt(s)) {
            case 'd':
              u += l('d', e.getDate(), 2);
              break;
            case 'D':
              u += c('D', e.getDay(), n, o);
              break;
            case 'o':
              u += l('o', Math.round((new Date(e.getFullYear(), e.getMonth(),
                  e.getDate()).getTime() -
                  new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case 'm':
              u += l('m', e.getMonth() + 1, 2);
              break;
            case 'M':
              u += c('M', e.getMonth(), a, r);
              break;
            case 'y':
              u += h('y') ? e.getFullYear() : (10 > e.getFullYear() % 100
                  ? '0'
                  : '') + e.getFullYear() % 100;
              break;
            case '@':
              u += e.getTime();
              break;
            case '!':
              u += 1e4 * e.getTime() + this._ticksTo1970;
              break;
            case '\'':
              h('\'') ? u += '\'' : d = !0;
              break;
            default:
              u += t.charAt(s);
          }
      return u;
    },
    _possibleChars: function(t) {
      var e, i = '',
          s = !1,
          n = function(i) {
            var s = t.length > e + 1 && t.charAt(e + 1) === i;
            return s && e++, s;
          };
      for (e = 0; t.length > e; e++)
        if (s) '\'' !== t.charAt(e) || n('\'') ? i += t.charAt(e) : s = !1;
        else switch (t.charAt(e)) {
          case 'd':
          case 'm':
          case 'y':
          case '@':
            i += '0123456789';
            break;
          case 'D':
          case 'M':
            return null;
          case '\'':
            n('\'') ? i += '\'' : s = !0;
            break;
          default:
            i += t.charAt(e);
        }
      return i;
    },
    _get: function(t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
    },
    _setDateFromField: function(t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, 'dateFormat'),
            s = t.lastVal = t.input ? t.input.val() : null,
            n = this._getDefaultDate(t),
            o = n,
            a = this._getFormatConfig(t);
        try {
          o = this.parseDate(i, s, a) || n;
        } catch (r) {
          s = e ? '' : s;
        }
        t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s
            ? o.getDate()
            : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s
            ? o.getFullYear()
            : 0, this._adjustInstDate(t);
      }
    },
    _getDefaultDate: function(t) {
      return this._restrictMinMax(t,
          this._determineDate(t, this._get(t, 'defaultDate'), new Date));
    },
    _determineDate: function(e, i, s) {
      var n = function(t) {
            var e = new Date;
            return e.setDate(e.getDate() + t), e;
          },
          o = function(i) {
            try {
              return t.datepicker.parseDate(t.datepicker._get(e, 'dateFormat'),
                  i, t.datepicker._getFormatConfig(e));
            } catch (s) {}
            for (var n = (i.toLowerCase().match(/^c/)
                ? t.datepicker._getDate(e)
                : null) ||
                new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(
                i); l;) {
              switch (l[2] || 'd') {
                case 'd':
                case 'D':
                  r += parseInt(l[1], 10);
                  break;
                case 'w':
                case 'W':
                  r += 7 * parseInt(l[1], 10);
                  break;
                case 'm':
                case 'M':
                  a += parseInt(l[1], 10), r = Math.min(r,
                      t.datepicker._getDaysInMonth(o, a));
                  break;
                case 'y':
                case 'Y':
                  o += parseInt(l[1], 10), r = Math.min(r,
                      t.datepicker._getDaysInMonth(o, a));
              }
              l = h.exec(i);
            }
            return new Date(o, a, r);
          },
          a = null == i || '' === i ? s : 'string' == typeof i
              ? o(i)
              : 'number' == typeof i ? isNaN(i) ? s : n(i) : new Date(
                  i.getTime());
      return a = a && 'Invalid Date' == '' + a ? s : a, a &&
      (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(
          0)), this._daylightSavingAdjust(a);
    },
    _daylightSavingAdjust: function(t) {
      return t
          ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
          : null;
    },
    _setDate: function(t, e, i) {
      var s = !e,
          n = t.selectedMonth,
          o = t.selectedYear,
          a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
      t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n ===
      t.selectedMonth && o === t.selectedYear || i ||
      this._notifyChange(t), this._adjustInstDate(t), t.input &&
      t.input.val(s ? '' : this._formatDate(t));
    },
    _getDate: function(t) {
      var e = !t.currentYear || t.input && '' === t.input.val()
          ? null
          : this._daylightSavingAdjust(
              new Date(t.currentYear, t.currentMonth, t.currentDay));
      return e;
    },
    _attachHandlers: function(e) {
      var i = this._get(e, 'stepMonths'),
          s = '#' + e.id.replace(/\\\\/g, '\\');
      e.dpDiv.find('[data-handler]').map(function() {
        var e = {
          prev: function() {
            t.datepicker._adjustDate(s, -i, 'M');
          },
          next: function() {
            t.datepicker._adjustDate(s, +i, 'M');
          },
          hide: function() {
            t.datepicker._hideDatepicker();
          },
          today: function() {
            t.datepicker._gotoToday(s);
          },
          selectDay: function() {
            return t.datepicker._selectDay(s, +this.getAttribute('data-month'),
                +this.getAttribute('data-year'), this), !1;
          },
          selectMonth: function() {
            return t.datepicker._selectMonthYear(s, this, 'M'), !1;
          },
          selectYear: function() {
            return t.datepicker._selectMonthYear(s, this, 'Y'), !1;
          },
        };
        t(this).
            on(this.getAttribute('data-event'),
                e[this.getAttribute('data-handler')]);
      });
    },
    _generateHTML: function(t) {
      var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x,
          C, D, I, T, P, M, S, H, z, O, A, N, W, E, F, L, R = new Date,
          B = this._daylightSavingAdjust(
              new Date(R.getFullYear(), R.getMonth(), R.getDate())),
          Y = this._get(t, 'isRTL'),
          j = this._get(t, 'showButtonPanel'),
          q = this._get(t, 'hideIfNoPrevNext'),
          K = this._get(t, 'navigationAsDateFormat'),
          U = this._getNumberOfMonths(t),
          V = this._get(t, 'showCurrentAtPos'),
          $ = this._get(t, 'stepMonths'),
          X = 1 !== U[0] || 1 !== U[1],
          G = this._daylightSavingAdjust(
              t.currentDay ? new Date(t.currentYear, t.currentMonth,
                  t.currentDay) : new Date(9999, 9, 9)),
          Q = this._getMinMaxDate(t, 'min'),
          J = this._getMinMaxDate(t, 'max'),
          Z = t.drawMonth - V,
          te = t.drawYear;
      if (0 > Z && (Z += 12, te--), J)
        for (e = this._daylightSavingAdjust(
            new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1,
                J.getDate())), e = Q && Q > e
            ? Q
            : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 >
        Z && (Z = 11, te--);
      for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, 'prevText'), i = K
          ? this.formatDate(i,
              this._daylightSavingAdjust(new Date(te, Z - $, 1)),
              this._getFormatConfig(t))
          : i, s = this._canAdjustMonth(t, -1, te, Z)
          ? '<a class=\'ui-datepicker-prev ui-corner-all\' data-handler=\'prev\' data-event=\'click\' title=\'' +
          i + '\'><span class=\'ui-icon ui-icon-circle-triangle-' +
          (Y ? 'e' : 'w') + '\'>' + i + '</span></a>'
          : q
              ? ''
              : '<a class=\'ui-datepicker-prev ui-corner-all ui-state-disabled\' title=\'' +
              i + '\'><span class=\'ui-icon ui-icon-circle-triangle-' +
              (Y ? 'e' : 'w') + '\'>' + i + '</span></a>', n = this._get(t,
          'nextText'), n = K ? this.formatDate(n,
          this._daylightSavingAdjust(new Date(te, Z + $, 1)),
          this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z)
          ? '<a class=\'ui-datepicker-next ui-corner-all\' data-handler=\'next\' data-event=\'click\' title=\'' +
          n + '\'><span class=\'ui-icon ui-icon-circle-triangle-' +
          (Y ? 'w' : 'e') + '\'>' + n + '</span></a>'
          : q
              ? ''
              : '<a class=\'ui-datepicker-next ui-corner-all ui-state-disabled\' title=\'' +
              n + '\'><span class=\'ui-icon ui-icon-circle-triangle-' +
              (Y ? 'w' : 'e') + '\'>' + n + '</span></a>', a = this._get(t,
          'currentText'), r = this._get(t, 'gotoCurrent') && t.currentDay
          ? G
          : B, a = K
          ? this.formatDate(a, r, this._getFormatConfig(t))
          : a, h = t.inline
          ? ''
          : '<button type=\'button\' class=\'ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all\' data-handler=\'hide\' data-event=\'click\'>' +
          this._get(t, 'closeText') + '</button>', l = j
          ? '<div class=\'ui-datepicker-buttonpane ui-widget-content\'>' +
          (Y ? h : '') + (this._isInRange(t, r)
              ? '<button type=\'button\' class=\'ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all\' data-handler=\'today\' data-event=\'click\'>' +
              a + '</button>'
              : '') + (Y ? '' : h) + '</div>'
          : '', c = parseInt(this._get(t, 'firstDay'), 10), c = isNaN(c)
          ? 0
          : c, u = this._get(t, 'showWeek'), d = this._get(t,
          'dayNames'), p = this._get(t, 'dayNamesMin'), f = this._get(t,
          'monthNames'), g = this._get(t, 'monthNamesShort'), m = this._get(t,
          'beforeShowDay'), _ = this._get(t, 'showOtherMonths'), v = this._get(
          t, 'selectOtherMonths'), b = this._getDefaultDate(
          t), y = '', k = 0; U[0] > k; k++) {
        for (x = '', this.maxRows = 4, C = 0; U[1] > C; C++) {
          if (D = this._daylightSavingAdjust(new Date(te, Z,
              t.selectedDay)), I = ' ui-corner-all', T = '', X) {
            if (T += '<div class=\'ui-datepicker-group', U[1] > 1) switch (C) {
              case 0:
                T += ' ui-datepicker-group-first', I = ' ui-corner-' +
                    (Y ? 'right' : 'left');
                break;
              case U[1] - 1:
                T += ' ui-datepicker-group-last', I = ' ui-corner-' +
                    (Y ? 'left' : 'right');
                break;
              default:
                T += ' ui-datepicker-group-middle', I = '';
            }
            T += '\'>';
          }
          for (T += '<div class=\'ui-datepicker-header ui-widget-header ui-helper-clearfix' +
              I + '\'>' + (/all|left/.test(I) && 0 === k ? Y ? o : s : '') +
              (/all|right/.test(I) && 0 === k ? Y ? s : o : '') +
              this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f,
                  g) + '</div><table class=\'ui-datepicker-calendar\'><thead>' +
              '<tr>', P = u ? '<th class=\'ui-datepicker-week-col\'>' +
              this._get(t, 'weekHeader') + '</th>' : '', w = 0; 7 >
          w; w++) M = (w + c) % 7, P += '<th scope=\'col\'' +
              ((w + c + 6) % 7 >= 5
                  ? ' class=\'ui-datepicker-week-end\''
                  : '') +
              '>' + '<span title=\'' + d[M] + '\'>' + p[M] + '</span></th>';
          for (T += P + '</tr></thead><tbody>', S = this._getDaysInMonth(te,
              Z), te === t.selectedYear && Z === t.selectedMonth &&
          (t.selectedDay = Math.min(t.selectedDay,
              S)), H = (this._getFirstDayOfMonth(te, Z) - c + 7) %
              7, z = Math.ceil((H + S) / 7), O = X ? this.maxRows > z
              ? this.maxRows
              : z : z, this.maxRows = O, A = this._daylightSavingAdjust(
              new Date(te, Z, 1 - H)), N = 0; O > N; N++) {
            for (T += '<tr>', W = u ? '<td class=\'ui-datepicker-week-col\'>' +
                this._get(t, 'calculateWeek')(A) + '</td>' : '', w = 0; 7 >
            w; w++) E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [
              !0,
              ''], F = A.getMonth() !== Z, L = F && !v || !E[0] || Q && Q > A ||
                J && A > J, W += '<td class=\'' +
                ((w + c + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') +
                (F ? ' ui-datepicker-other-month' : '') +
                (A.getTime() === D.getTime() && Z === t.selectedMonth &&
                t._keyEvent || b.getTime() === A.getTime() && b.getTime() ===
                D.getTime() ? ' ' + this._dayOverClass : '') + (L
                    ? ' ' + this._unselectableClass + ' ui-state-disabled'
                    : '') + (F && !_ ? '' : ' ' + E[1] +
                    (A.getTime() === G.getTime()
                        ? ' ' + this._currentClass
                        : '') + (A.getTime() === B.getTime()
                        ? ' ui-datepicker-today'
                        : '')) + '\'' + (F && !_ || !E[2] ? '' : ' title=\'' +
                    E[2].replace(/'/g, '&#39;') + '\'') + (L
                    ? ''
                    : ' data-handler=\'selectDay\' data-event=\'click\' data-month=\'' +
                    A.getMonth() + '\' data-year=\'' + A.getFullYear() + '\'') +
                '>' +
                (F && !_ ? '&#xa0;' : L ? '<span class=\'ui-state-default\'>' +
                    A.getDate() + '</span>' : '<a class=\'ui-state-default' +
                    (A.getTime() === B.getTime() ? ' ui-state-highlight' : '') +
                    (A.getTime() === G.getTime() ? ' ui-state-active' : '') +
                    (F ? ' ui-priority-secondary' : '') + '\' href=\'#\'>' +
                    A.getDate() + '</a>') + '</td>', A.setDate(
                A.getDate() + 1), A = this._daylightSavingAdjust(A);
            T += W + '</tr>';
          }
          Z++, Z > 11 && (Z = 0, te++), T += '</tbody></table>' +
              (X ? '</div>' + (U[0] > 0 && C === U[1] - 1
                  ? '<div class=\'ui-datepicker-row-break\'></div>'
                  : '') : ''), x += T;
        }
        y += x;
      }
      return y += l, t._keyEvent = !1, y;
    },
    _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
      var h, l, c, u, d, p, f, g, m = this._get(t, 'changeMonth'),
          _ = this._get(t, 'changeYear'),
          v = this._get(t, 'showMonthAfterYear'),
          b = '<div class=\'ui-datepicker-title\'>',
          y = '';
      if (o || !m) y += '<span class=\'ui-datepicker-month\'>' + a[e] +
          '</span>';
      else {
        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() ===
            i, y += '<select class=\'ui-datepicker-month\' data-handler=\'selectMonth\' data-event=\'change\'>', c = 0; 12 >
        c; c++) (!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) &&
        (y += '<option value=\'' + c + '\'' +
            (c === e ? ' selected=\'selected\'' : '') + '>' + r[c] +
            '</option>');
        y += '</select>';
      }
      if (v || (b += y + (!o && m && _ ? '' : '&#xa0;')), !t.yearshtml)
        if (t.yearshtml = '', o ||
        !_) b += '<span class=\'ui-datepicker-year\'>' + i + '</span>';
        else {
          for (u = this._get(t, 'yearRange').
              split(':'), d = (new Date).getFullYear(), p = function(t) {
            var e = t.match(/c[+\-].*/)
                ? i + parseInt(t.substring(1), 10)
                : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
            return isNaN(e) ? d : e;
          }, f = p(u[0]), g = Math.max(f, p(u[1] || '')), f = s ? Math.max(f,
              s.getFullYear()) : f, g = n
              ? Math.min(g, n.getFullYear())
              : g, t.yearshtml += '<select class=\'ui-datepicker-year\' data-handler=\'selectYear\' data-event=\'change\'>'; g >=
          f; f++) t.yearshtml += '<option value=\'' + f + '\'' +
              (f === i ? ' selected=\'selected\'' : '') + '>' + f + '</option>';
          t.yearshtml += '</select>', b += t.yearshtml, t.yearshtml = null;
        }
      return b += this._get(t, 'yearSuffix'), v &&
      (b += (!o && m && _ ? '' : '&#xa0;') + y), b += '</div>';
    },
    _adjustInstDate: function(t, e, i) {
      var s = t.selectedYear + ('Y' === i ? e : 0),
          n = t.selectedMonth + ('M' === i ? e : 0),
          o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) +
              ('D' === i ? e : 0),
          a = this._restrictMinMax(t,
              this._daylightSavingAdjust(new Date(s, n, o)));
      t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ('M' ===
          i || 'Y' === i) && this._notifyChange(t);
    },
    _restrictMinMax: function(t, e) {
      var i = this._getMinMaxDate(t, 'min'),
          s = this._getMinMaxDate(t, 'max'),
          n = i && i > e ? i : e;
      return s && n > s ? s : n;
    },
    _notifyChange: function(t) {
      var e = this._get(t, 'onChangeMonthYear');
      e && e.apply(t.input ? t.input[0] : null,
          [t.selectedYear, t.selectedMonth + 1, t]);
    },
    _getNumberOfMonths: function(t) {
      var e = this._get(t, 'numberOfMonths');
      return null == e ? [1, 1] : 'number' == typeof e ? [1, e] : e;
    },
    _getMinMaxDate: function(t, e) {
      return this._determineDate(t, this._get(t, e + 'Date'), null);
    },
    _getDaysInMonth: function(t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
    },
    _getFirstDayOfMonth: function(t, e) {
      return new Date(t, e, 1).getDay();
    },
    _canAdjustMonth: function(t, e, i, s) {
      var n = this._getNumberOfMonths(t),
          o = this._daylightSavingAdjust(
              new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
      return 0 > e && o.setDate(
          this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(
          t, o);
    },
    _isInRange: function(t, e) {
      var i, s, n = this._getMinMaxDate(t, 'min'),
          o = this._getMinMaxDate(t, 'max'),
          a = null,
          r = null,
          h = this._get(t, 'yearRange');
      return h &&
      (i = h.split(':'), s = (new Date).getFullYear(), a = parseInt(i[0],
          10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) &&
      (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >=
          n.getTime()) && (!o || e.getTime() <= o.getTime()) &&
      (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear());
    },
    _getFormatConfig: function(t) {
      var e = this._get(t, 'shortYearCutoff');
      return e = 'string' != typeof e ? e : (new Date).getFullYear() % 100 +
          parseInt(e, 10), {
        shortYearCutoff: e,
        dayNamesShort: this._get(t, 'dayNamesShort'),
        dayNames: this._get(t, 'dayNames'),
        monthNamesShort: this._get(t, 'monthNamesShort'),
        monthNames: this._get(t, 'monthNames'),
      };
    },
    _formatDate: function(t, e, i, s) {
      e ||
      (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
      var n = e ? 'object' == typeof e ? e : this._daylightSavingAdjust(
          new Date(s, i, e)) : this._daylightSavingAdjust(
          new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, 'dateFormat'), n,
          this._getFormatConfig(t));
    },
  }), t.fn.datepicker = function(e) {
    if (!this.length) return this;
    t.datepicker.initialized || (t(document).
        on('mousedown',
            t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 ===
    t('#' + t.datepicker._mainDivId).length &&
    t('body').append(t.datepicker.dpDiv);
    var i = Array.prototype.slice.call(arguments, 1);
    return 'string' != typeof e || 'isDisabled' !== e && 'getDate' !== e &&
    'widget' !== e ? 'option' === e && 2 === arguments.length && 'string' ==
    typeof arguments[1] ? t.datepicker['_' + e + 'Datepicker'].apply(
        t.datepicker, [this[0]].concat(i)) : this.each(function() {
      'string' == typeof e ? t.datepicker['_' + e + 'Datepicker'].apply(
          t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this,
          e);
    }) : t.datepicker['_' + e + 'Datepicker'].apply(t.datepicker,
        [this[0]].concat(i));
  }, t.datepicker = new s, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = '1.12.1', t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(
      navigator.userAgent.toLowerCase());
  var _ = !1;
  t(document).on('mouseup', function() {
    _ = !1;
  }), t.widget('ui.mouse', {
    version: '1.12.1',
    options: {
      cancel: 'input, textarea, button, select, option',
      distance: 1,
      delay: 0,
    },
    _mouseInit: function() {
      var e = this;
      this.element.on('mousedown.' + this.widgetName, function(t) {
        return e._mouseDown(t);
      }).on('click.' + this.widgetName, function(i) {
        return !0 === t.data(i.target, e.widgetName + '.preventClickEvent')
            ? (t.removeData(i.target, e.widgetName +
                '.preventClickEvent'), i.stopImmediatePropagation(), !1)
            : void 0;
      }), this.started = !1;
    },
    _mouseDestroy: function() {
      this.element.off('.' + this.widgetName), this._mouseMoveDelegate &&
      this.document.off('mousemove.' + this.widgetName,
          this._mouseMoveDelegate).
          off('mouseup.' + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function(e) {
      if (!_) {
        this._mouseMoved = !1, this._mouseStarted &&
        this._mouseUp(e), this._mouseDownEvent = e;
        var i = this,
            s = 1 === e.which,
            n = 'string' == typeof this.options.cancel && e.target.nodeName ? t(
                e.target).closest(this.options.cancel).length : !1;
        return s && !n && this._mouseCapture(e)
            ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet ||
            (this._mouseDelayTimer = setTimeout(function() {
              i.mouseDelayMet = !0;
            }, this.options.delay)), this._mouseDistanceMet(e) &&
            this._mouseDelayMet(e) &&
            (this._mouseStarted = this._mouseStart(e) !==
                !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 ===
            t.data(e.target, this.widgetName + '.preventClickEvent') &&
            t.removeData(e.target, this.widgetName +
                '.preventClickEvent'), this._mouseMoveDelegate = function(t) {
              return i._mouseMove(t);
            }, this._mouseUpDelegate = function(t) {
              return i._mouseUp(t);
            }, this.document.on('mousemove.' + this.widgetName,
                this._mouseMoveDelegate).
                on('mouseup.' + this.widgetName,
                    this._mouseUpDelegate), e.preventDefault(), _ = !0, !0))
            : !0;
      }
    },
    _mouseMove: function(e) {
      if (this._mouseMoved) {
        if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) &&
            !e.button) return this._mouseUp(e);
        if (!e.which)
          if (e.originalEvent.altKey || e.originalEvent.ctrlKey ||
              e.originalEvent.metaKey ||
              e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
          else if (!this.ignoreMissingWhich) return this._mouseUp(e);
      }
      return (e.which || e.button) &&
      (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(
          e), e.preventDefault()) : (this._mouseDistanceMet(e) &&
      this._mouseDelayMet(e) &&
      (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !==
          !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(
          e)), !this._mouseStarted);
    },
    _mouseUp: function(e) {
      this.document.off('mousemove.' + this.widgetName,
          this._mouseMoveDelegate).
          off('mouseup.' + this.widgetName,
              this._mouseUpDelegate), this._mouseStarted &&
      (this._mouseStarted = !1, e.target === this._mouseDownEvent.target &&
      t.data(e.target, this.widgetName + '.preventClickEvent',
          !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(
          this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, _ = !1, e.preventDefault();
    },
    _mouseDistanceMet: function(t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX),
          Math.abs(this._mouseDownEvent.pageY - t.pageY)) >=
          this.options.distance;
    },
    _mouseDelayMet: function() {
      return this.mouseDelayMet;
    },
    _mouseStart: function() {},
    _mouseDrag: function() {},
    _mouseStop: function() {},
    _mouseCapture: function() {
      return !0;
    },
  }), t.ui.plugin = {
    add: function(e, i, s) {
      var n, o = t.ui[e].prototype;
      for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push(
          [i, s[n]]);
    },
    call: function(t, e, i, s) {
      var n, o = t.plugins[e];
      if (o && (s || t.element[0].parentNode && 11 !==
          t.element[0].parentNode.nodeType))
        for (n = 0; o.length > n; n++) t.options[o[n][0]] &&
        o[n][1].apply(t.element, i);
    },
  }, t.ui.safeBlur = function(e) {
    e && 'body' !== e.nodeName.toLowerCase() && t(e).trigger('blur');
  }, t.widget('ui.draggable', t.ui.mouse, {
    version: '1.12.1',
    widgetEventPrefix: 'drag',
    options: {
      addClasses: !0,
      appendTo: 'parent',
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: 'auto',
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: 'original',
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: 'default',
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: 'both',
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null,
    },
    _create: function() {
      'original' === this.options.helper &&
      this._setPositionRelative(), this.options.addClasses && this._addClass(
          'ui-draggable'), this._setHandleClassName(), this._mouseInit();
    },
    _setOption: function(t, e) {
      this._super(t, e), 'handle' === t &&
      (this._removeHandleClassName(), this._setHandleClassName());
    },
    _destroy: function() {
      return (this.helper || this.element).is('.ui-draggable-dragging')
          ? (this.destroyOnClear = !0, void 0)
          : (this._removeHandleClassName(), this._mouseDestroy(), void 0);
    },
    _mouseCapture: function(e) {
      var i = this.options;
      return this.helper || i.disabled ||
      t(e.target).closest('.ui-resizable-handle').length > 0
          ? !1
          : (this.handle = this._getHandle(e), this.handle
              ? (this._blurActiveElement(e), this._blockFrames(
                  i.iframeFix === !0 ? 'iframe' : i.iframeFix), !0)
              : !1);
    },
    _blockFrames: function(e) {
      this.iframeBlocks = this.document.find(e).map(function() {
        var e = t(this);
        return t('<div>').
            css('position', 'absolute').
            appendTo(e.parent()).
            outerWidth(e.outerWidth()).
            outerHeight(e.outerHeight()).
            offset(e.offset())[0];
      });
    },
    _unblockFrames: function() {
      this.iframeBlocks &&
      (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _blurActiveElement: function(e) {
      var i = t.ui.safeActiveElement(this.document[0]),
          s = t(e.target);
      s.closest(i).length || t.ui.safeBlur(i);
    },
    _mouseStart: function(e) {
      var i = this.options;
      return this.helper = this._createHelper(e), this._addClass(this.helper,
          'ui-draggable-dragging'), this._cacheHelperProportions(), t.ui.ddmanager &&
      (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css(
          'position'), this.scrollParent = this.helper.scrollParent(
          !0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().
              filter(function() {
                return 'fixed' === t(this).css('position');
              }).length >
          0, this.positionAbs = this.element.offset(), this._refreshOffsets(
          e), this.originalPosition = this.position = this._generatePosition(e,
          !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt &&
      this._adjustOffsetFromHelper(
          i.cursorAt), this._setContainment(), this._trigger('start', e) === !1
          ? (this._clear(), !1)
          : (this._cacheHelperProportions(), t.ui.ddmanager &&
          !i.dropBehaviour &&
          t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e,
              !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0);
    },
    _refreshOffsets: function(t) {
      this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset(),
      }, this.offset.click = {
        left: t.pageX - this.offset.left,
        top: t.pageY - this.offset.top,
      };
    },
    _mouseDrag: function(e, i) {
      if (this.hasFixedAncestor &&
      (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(
          e, !0), this.positionAbs = this._convertPositionTo('absolute'), !i) {
        var s = this._uiHash();
        if (this._trigger('drag', e, s) === !1) return this._mouseUp(
            new t.Event('mouseup', e)), !1;
        this.position = s.position;
      }
      return this.helper[0].style.left = this.position.left +
          'px', this.helper[0].style.top = this.position.top +
          'px', t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1;
    },
    _mouseStop: function(e) {
      var i = this,
          s = !1;
      return t.ui.ddmanager && !this.options.dropBehaviour &&
      (s = t.ui.ddmanager.drop(this, e)), this.dropped &&
      (s = this.dropped, this.dropped = !1), 'invalid' ===
      this.options.revert && !s || 'valid' === this.options.revert && s ||
      this.options.revert === !0 || t.isFunction(this.options.revert) &&
      this.options.revert.call(this.element, s) ? t(this.helper).
          animate(this.originalPosition,
              parseInt(this.options.revertDuration, 10), function() {
                i._trigger('stop', e) !== !1 && i._clear();
              }) : this._trigger('stop', e) !== !1 && this._clear(), !1;
    },
    _mouseUp: function(e) {
      return this._unblockFrames(), t.ui.ddmanager &&
      t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) &&
      this.element.trigger('focus'), t.ui.mouse.prototype._mouseUp.call(this,
          e);
    },
    cancel: function() {
      return this.helper.is('.ui-draggable-dragging') ? this._mouseUp(
          new t.Event('mouseup', {
            target: this.element[0],
          })) : this._clear(), this;
    },
    _getHandle: function(e) {
      return this.options.handle ? !!t(e.target).
          closest(this.element.find(this.options.handle)).length : !0;
    },
    _setHandleClassName: function() {
      this.handleElement = this.options.handle ? this.element.find(
          this.options.handle) : this.element, this._addClass(
          this.handleElement, 'ui-draggable-handle');
    },
    _removeHandleClassName: function() {
      this._removeClass(this.handleElement, 'ui-draggable-handle');
    },
    _createHelper: function(e) {
      var i = this.options,
          s = t.isFunction(i.helper),
          n = s ? t(i.helper.apply(this.element[0], [e])) : 'clone' === i.helper
              ? this.element.clone().removeAttr('id')
              : this.element;
      return n.parents('body').length || n.appendTo('parent' === i.appendTo
          ? this.element[0].parentNode
          : i.appendTo), s && n[0] === this.element[0] &&
      this._setPositionRelative(), n[0] === this.element[0] ||
      /(fixed|absolute)/.test(n.css('position')) ||
      n.css('position', 'absolute'), n;
    },
    _setPositionRelative: function() {
      /^(?:r|a|f)/.test(this.element.css('position')) ||
      (this.element[0].style.position = 'relative');
    },
    _adjustOffsetFromHelper: function(e) {
      'string' == typeof e && (e = e.split(' ')), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0,
      }), 'left' in e &&
      (this.offset.click.left = e.left + this.margins.left), 'right' in e &&
      (this.offset.click.left = this.helperProportions.width - e.right +
          this.margins.left), 'top' in e &&
      (this.offset.click.top = e.top + this.margins.top), 'bottom' in e &&
      (this.offset.click.top = this.helperProportions.height - e.bottom +
          this.margins.top);
    },
    _isRootNode: function(t) {
      return /(html|body)/i.test(t.tagName) || t === this.document[0];
    },
    _getParentOffset: function() {
      var e = this.offsetParent.offset(),
          i = this.document[0];
      return 'absolute' === this.cssPosition && this.scrollParent[0] !== i &&
      t.contains(this.scrollParent[0], this.offsetParent[0]) &&
      (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(
          this.offsetParent[0]) && (e = {
        top: 0,
        left: 0,
      }), {
        top: e.top +
            (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
        left: e.left +
            (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0),
      };
    },
    _getRelativeOffset: function() {
      if ('relative' !== this.cssPosition) return {
        top: 0,
        left: 0,
      };
      var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0]);
      return {
        top: t.top - (parseInt(this.helper.css('top'), 10) || 0) +
            (e ? 0 : this.scrollParent.scrollTop()),
        left: t.left - (parseInt(this.helper.css('left'), 10) || 0) +
            (e ? 0 : this.scrollParent.scrollLeft()),
      };
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.element.css('marginLeft'), 10) || 0,
        top: parseInt(this.element.css('marginTop'), 10) || 0,
        right: parseInt(this.element.css('marginRight'), 10) || 0,
        bottom: parseInt(this.element.css('marginBottom'), 10) || 0,
      };
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight(),
      };
    },
    _setContainment: function() {
      var e, i, s, n = this.options,
          o = this.document[0];
      return this.relativeContainer = null, n.containment
          ? 'window' === n.containment
              ? (this.containment = [
                t(window).scrollLeft() - this.offset.relative.left -
                this.offset.parent.left,
                t(window).scrollTop() - this.offset.relative.top -
                this.offset.parent.top,
                t(window).scrollLeft() + t(window).width() -
                this.helperProportions.width - this.margins.left,
                t(window).scrollTop() +
                (t(window).height() || o.body.parentNode.scrollHeight) -
                this.helperProportions.height - this.margins.top], void 0)
              : 'document' === n.containment
                  ? (this.containment = [
                    0,
                    0,
                    t(o).width() - this.helperProportions.width -
                    this.margins.left,
                    (t(o).height() || o.body.parentNode.scrollHeight) -
                    this.helperProportions.height - this.margins.top], void 0)
                  : n.containment.constructor === Array
                      ? (this.containment = n.containment, void 0)
                      : ('parent' === n.containment &&
                      (n.containment = this.helper[0].parentNode), i = t(
                          n.containment), s = i[0], s &&
                      (e = /(scroll|auto)/.test(
                          i.css('overflow')), this.containment = [
                        (parseInt(i.css('borderLeftWidth'), 10) || 0) +
                        (parseInt(i.css('paddingLeft'), 10) || 0),
                        (parseInt(i.css('borderTopWidth'), 10) || 0) +
                        (parseInt(i.css('paddingTop'), 10) || 0),
                        (e
                            ? Math.max(s.scrollWidth, s.offsetWidth)
                            : s.offsetWidth) -
                        (parseInt(i.css('borderRightWidth'), 10) || 0) -
                        (parseInt(i.css('paddingRight'), 10) || 0) -
                        this.helperProportions.width - this.margins.left -
                        this.margins.right,
                        (e
                            ? Math.max(s.scrollHeight, s.offsetHeight)
                            : s.offsetHeight) -
                        (parseInt(i.css('borderBottomWidth'), 10) || 0) -
                        (parseInt(i.css('paddingBottom'), 10) || 0) -
                        this.helperProportions.height - this.margins.top -
                        this.margins.bottom], this.relativeContainer = i), void 0)
          : (this.containment = null, void 0);
    },
    _convertPositionTo: function(t, e) {
      e || (e = this.position);
      var i = 'absolute' === t ? 1 : -1,
          s = this._isRootNode(this.scrollParent[0]);
      return {
        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i -
            ('fixed' === this.cssPosition ? -this.offset.scroll.top : s
                ? 0
                : this.offset.scroll.top) * i,
        left: e.left + this.offset.relative.left * i + this.offset.parent.left *
            i - ('fixed' === this.cssPosition ? -this.offset.scroll.left : s
                ? 0
                : this.offset.scroll.left) * i,
      };
    },
    _generatePosition: function(t, e) {
      var i, s, n, o, a = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          h = t.pageX,
          l = t.pageY;
      return r && this.offset.scroll || (this.offset.scroll = {
        top: this.scrollParent.scrollTop(),
        left: this.scrollParent.scrollLeft(),
      }), e && (this.containment && (this.relativeContainer
          ? (s = this.relativeContainer.offset(), i = [
            this.containment[0] + s.left,
            this.containment[1] + s.top,
            this.containment[2] + s.left,
            this.containment[3] + s.top])
          : i = this.containment, t.pageX - this.offset.click.left < i[0] &&
      (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top <
      i[1] && (l = i[1] + this.offset.click.top), t.pageX -
      this.offset.click.left > i[2] &&
      (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top >
      i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1]
          ? this.originalPageY +
          Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1]
          : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n -
      this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n -
          a.grid[1] : n + a.grid[1] : n, o = a.grid[0]
          ? this.originalPageX +
          Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0]
          : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] ||
      o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0]
          ? o - a.grid[0]
          : o + a.grid[0] : o), 'y' === a.axis &&
      (h = this.originalPageX), 'x' === a.axis && (l = this.originalPageY)), {
        top: l - this.offset.click.top - this.offset.relative.top -
            this.offset.parent.top +
            ('fixed' === this.cssPosition ? -this.offset.scroll.top : r
                ? 0
                : this.offset.scroll.top),
        left: h - this.offset.click.left - this.offset.relative.left -
            this.offset.parent.left +
            ('fixed' === this.cssPosition ? -this.offset.scroll.left : r
                ? 0
                : this.offset.scroll.left),
      };
    },
    _clear: function() {
      this._removeClass(this.helper,
          'ui-draggable-dragging'), this.helper[0] === this.element[0] ||
      this.cancelHelperRemoval ||
      this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear &&
      this.destroy();
    },
    _trigger: function(e, i, s) {
      return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this],
          !0), /^(drag|start|stop)/.test(e) &&
      (this.positionAbs = this._convertPositionTo(
          'absolute'), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(
          this, e, i, s);
    },
    plugins: {},
    _uiHash: function() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs,
      };
    },
  }), t.ui.plugin.add('draggable', 'connectToSortable', {
    start: function(e, i, s) {
      var n = t.extend({}, i, {
        item: s.element,
      });
      s.sortables = [], t(s.options.connectToSortable).each(function() {
        var i = t(this).sortable('instance');
        i && !i.options.disabled &&
        (s.sortables.push(i), i.refreshPositions(), i._trigger('activate', e,
            n));
      });
    },
    stop: function(e, i, s) {
      var n = t.extend({}, i, {
        item: s.element,
      });
      s.cancelHelperRemoval = !1, t.each(s.sortables, function() {
        var t = this;
        t.isOver
            ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
              position: t.placeholder.css('position'),
              top: t.placeholder.css('top'),
              left: t.placeholder.css('left'),
            }, t._mouseStop(e), t.options.helper = t.options._helper)
            : (t.cancelHelperRemoval = !0, t._trigger('deactivate', e, n));
      });
    },
    drag: function(e, i, s) {
      t.each(s.sortables, function() {
        var n = !1,
            o = this;
        o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(
            o.containerCache) && (n = !0, t.each(s.sortables, function() {
          return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !==
          o && this._intersectsWith(this.containerCache) &&
          t.contains(o.element[0], this.element[0]) && (n = !1), n;
        })), n ? (o.isOver ||
        (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(
            o.element).
            data('ui-sortable-item',
                !0), o.options._helper = o.options.helper, o.options.helper = function() {
          return i.helper[0];
        }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e,
            !0,
            !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left -
            o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top -
            o.offset.parent.top, s._trigger('toSortable',
            e), s.dropped = o.element, t.each(s.sortables, function() {
          this.refreshPositions();
        }), s.currentItem = s.element, o.fromOutside = s), o.currentItem &&
        (o._mouseDrag(e), i.position = o.position)) : o.isOver &&
            (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger(
                'out', e, o._uiHash(o)), o._mouseStop(e,
                !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder &&
            o.placeholder.remove(), i.helper.appendTo(
                s._parent), s._refreshOffsets(
                e), i.position = s._generatePosition(e, !0), s._trigger(
                'fromSortable', e), s.dropped = !1, t.each(s.sortables,
                function() {
                  this.refreshPositions();
                }));
      });
    },
  }), t.ui.plugin.add('draggable', 'cursor', {
    start: function(e, i, s) {
      var n = t('body'),
          o = s.options;
      n.css('cursor') && (o._cursor = n.css('cursor')), n.css('cursor',
          o.cursor);
    },
    stop: function(e, i, s) {
      var n = s.options;
      n._cursor && t('body').css('cursor', n._cursor);
    },
  }), t.ui.plugin.add('draggable', 'opacity', {
    start: function(e, i, s) {
      var n = t(i.helper),
          o = s.options;
      n.css('opacity') && (o._opacity = n.css('opacity')), n.css('opacity',
          o.opacity);
    },
    stop: function(e, i, s) {
      var n = s.options;
      n._opacity && t(i.helper).css('opacity', n._opacity);
    },
  }), t.ui.plugin.add('draggable', 'scroll', {
    start: function(t, e, i) {
      i.scrollParentNotHidden ||
      (i.scrollParentNotHidden = i.helper.scrollParent(
          !1)), i.scrollParentNotHidden[0] !== i.document[0] && 'HTML' !==
      i.scrollParentNotHidden[0].tagName &&
      (i.overflowOffset = i.scrollParentNotHidden.offset());
    },
    drag: function(e, i, s) {
      var n = s.options,
          o = !1,
          a = s.scrollParentNotHidden[0],
          r = s.document[0];
      a !== r && 'HTML' !== a.tagName ? (n.axis && 'x' === n.axis ||
      (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity
          ? a.scrollTop = o = a.scrollTop + n.scrollSpeed
          : e.pageY - s.overflowOffset.top < n.scrollSensitivity &&
          (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && 'y' ===
      n.axis ||
      (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity
          ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed
          : e.pageX - s.overflowOffset.left < n.scrollSensitivity &&
          (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis &&
      'x' === n.axis ||
      (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).
          scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() -
          (e.pageY - t(r).scrollTop()) < n.scrollSensitivity &&
          (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis &&
      'y' === n.axis ||
      (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).
          scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() -
          (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity &&
          (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !==
      !1 && t.ui.ddmanager && !n.dropBehaviour &&
      t.ui.ddmanager.prepareOffsets(s, e);
    },
  }), t.ui.plugin.add('draggable', 'snap', {
    start: function(e, i, s) {
      var n = s.options;
      s.snapElements = [], t(n.snap.constructor !== String
          ? n.snap.items || ':data(ui-draggable)'
          : n.snap).each(function() {
        var e = t(this),
            i = e.offset();
        this !== s.element[0] && s.snapElements.push({
          item: this,
          width: e.outerWidth(),
          height: e.outerHeight(),
          top: i.top,
          left: i.left,
        });
      });
    },
    drag: function(e, i, s) {
      var n, o, a, r, h, l, c, u, d, p, f = s.options,
          g = f.snapTolerance,
          m = i.offset.left,
          _ = m + s.helperProportions.width,
          v = i.offset.top,
          b = v + s.helperProportions.height;
      for (d = s.snapElements.length - 1; d >=
      0; d--) h = s.snapElements[d].left - s.margins.left, l = h +
          s.snapElements[d].width, c = s.snapElements[d].top -
          s.margins.top, u = c + s.snapElements[d].height, h - g > _ || m > l +
      g || c - g > b || v > u + g ||
      !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item)
          ? (s.snapElements[d].snapping && s.options.snap.release &&
          s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
            snapItem: s.snapElements[d].item,
          })), s.snapElements[d].snapping = !1)
          : ('inner' !== f.snapMode &&
          (n = g >= Math.abs(c - b), o = g >= Math.abs(u - v), a = g >=
              Math.abs(h - _), r = g >= Math.abs(l - m), n &&
          (i.position.top = s._convertPositionTo('relative', {
            top: c - s.helperProportions.height,
            left: 0,
          }).top), o && (i.position.top = s._convertPositionTo('relative', {
            top: u,
            left: 0,
          }).top), a && (i.position.left = s._convertPositionTo('relative', {
            top: 0,
            left: h - s.helperProportions.width,
          }).left), r && (i.position.left = s._convertPositionTo('relative', {
            top: 0,
            left: l,
          }).left)), p = n || o || a || r, 'outer' !== f.snapMode &&
          (n = g >= Math.abs(c - v), o = g >= Math.abs(u - b), a = g >=
              Math.abs(h - m), r = g >= Math.abs(l - _), n &&
          (i.position.top = s._convertPositionTo('relative', {
            top: c,
            left: 0,
          }).top), o && (i.position.top = s._convertPositionTo('relative', {
            top: u - s.helperProportions.height,
            left: 0,
          }).top), a && (i.position.left = s._convertPositionTo('relative', {
            top: 0,
            left: h,
          }).left), r && (i.position.left = s._convertPositionTo('relative', {
            top: 0,
            left: l - s.helperProportions.width,
          }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) &&
          s.options.snap.snap &&
          s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
            snapItem: s.snapElements[d].item,
          })), s.snapElements[d].snapping = n || o || a || r || p);
    },
  }), t.ui.plugin.add('draggable', 'stack', {
    start: function(e, i, s) {
      var n, o = s.options,
          a = t.makeArray(t(o.stack)).sort(function(e, i) {
            return (parseInt(t(e).css('zIndex'), 10) || 0) -
                (parseInt(t(i).css('zIndex'), 10) || 0);
          });
      a.length &&
      (n = parseInt(t(a[0]).css('zIndex'), 10) || 0, t(a).each(function(e) {
        t(this).css('zIndex', n + e);
      }), this.css('zIndex', n + a.length));
    },
  }), t.ui.plugin.add('draggable', 'zIndex', {
    start: function(e, i, s) {
      var n = t(i.helper),
          o = s.options;
      n.css('zIndex') && (o._zIndex = n.css('zIndex')), n.css('zIndex',
          o.zIndex);
    },
    stop: function(e, i, s) {
      var n = s.options;
      n._zIndex && t(i.helper).css('zIndex', n._zIndex);
    },
  }), t.ui.draggable, t.widget('ui.resizable', t.ui.mouse, {
    version: '1.12.1',
    widgetEventPrefix: 'resize',
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: 'slow',
      animateEasing: 'swing',
      aspectRatio: !1,
      autoHide: !1,
      classes: {
        'ui-resizable-se': 'ui-icon ui-icon-gripsmall-diagonal-se',
      },
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: 'e,s,se',
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null,
    },
    _num: function(t) {
      return parseFloat(t) || 0;
    },
    _isNumber: function(t) {
      return !isNaN(parseFloat(t));
    },
    _hasScroll: function(e, i) {
      if ('hidden' === t(e).css('overflow')) return !1;
      var s = i && 'left' === i ? 'scrollLeft' : 'scrollTop',
          n = !1;
      return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n);
    },
    _create: function() {
      var e, i = this.options,
          s = this;
      this._addClass('ui-resizable'), t.extend(this, {
        _aspectRatio: !!i.aspectRatio,
        aspectRatio: i.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: i.helper || i.ghost || i.animate ? i.helper ||
            'ui-resizable-helper' : null,
      }), this.element[0].nodeName.match(
          /^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(
          t('<div class=\'ui-wrapper\' style=\'overflow: hidden;\'></div>').
              css({
                position: this.element.css('position'),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css('top'),
                left: this.element.css('left'),
              })), this.element = this.element.parent().
          data('ui-resizable', this.element.resizable(
              'instance')), this.elementIsWrapper = !0, e = {
        marginTop: this.originalElement.css('marginTop'),
        marginRight: this.originalElement.css('marginRight'),
        marginBottom: this.originalElement.css('marginBottom'),
        marginLeft: this.originalElement.css('marginLeft'),
      }, this.element.css(e), this.originalElement.css('margin',
          0), this.originalResizeStyle = this.originalElement.css(
          'resize'), this.originalElement.css('resize',
          'none'), this._proportionallyResizeElements.push(
          this.originalElement.css({
            position: 'static',
            zoom: 1,
            display: 'block',
          })), this.originalElement.css(
          e), this._proportionallyResize()), this._setupHandles(), i.autoHide &&
      t(this.element).on('mouseenter', function() {
        i.disabled ||
        (s._removeClass('ui-resizable-autohide'), s._handles.show());
      }).on('mouseleave', function() {
        i.disabled || s.resizing ||
        (s._addClass('ui-resizable-autohide'), s._handles.hide());
      }), this._mouseInit();
    },
    _destroy: function() {
      this._mouseDestroy();
      var e, i = function(e) {
        t(e).
            removeData('resizable').
            removeData('ui-resizable').
            off('.resizable').
            find('.ui-resizable-handle').
            remove();
      };
      return this.elementIsWrapper &&
      (i(this.element), e = this.element, this.originalElement.css({
        position: e.css('position'),
        width: e.outerWidth(),
        height: e.outerHeight(),
        top: e.css('top'),
        left: e.css('left'),
      }).insertAfter(e), e.remove()), this.originalElement.css('resize',
          this.originalResizeStyle), i(this.originalElement), this;
    },
    _setOption: function(t, e) {
      switch (this._super(t, e), t) {
        case 'handles':
          this._removeHandles(), this._setupHandles();
          break;
        default:
      }
    },
    _setupHandles: function() {
      var e, i, s, n, o, a = this.options,
          r = this;
      if (this.handles = a.handles ||
          (t('.ui-resizable-handle', this.element).length ? {
            n: '.ui-resizable-n',
            e: '.ui-resizable-e',
            s: '.ui-resizable-s',
            w: '.ui-resizable-w',
            se: '.ui-resizable-se',
            sw: '.ui-resizable-sw',
            ne: '.ui-resizable-ne',
            nw: '.ui-resizable-nw',
          } : 'e,s,se'), this._handles = t(), this.handles.constructor ===
      String)
        for ('all' === this.handles &&
        (this.handles = 'n,e,s,w,se,sw,ne,nw'), s = this.handles.split(
            ','), this.handles = {}, i = 0; s.length > i; i++) e = t.trim(
            s[i]), n = 'ui-resizable-' + e, o = t('<div>'), this._addClass(o,
            'ui-resizable-handle ' + n), o.css({
          zIndex: a.zIndex,
        }), this.handles[e] = '.ui-resizable-' + e, this.element.append(o);
      this._renderAxis = function(e) {
        var i, s, n, o;
        e = e || this.element;
        for (i in this.handles) this.handles[i].constructor === String
            ? this.handles[i] = this.element.children(this.handles[i]).
                first().
                show()
            : (this.handles[i].jquery || this.handles[i].nodeType) &&
            (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
              mousedown: r._mouseDown,
            })), this.elementIsWrapper &&
        this.originalElement[0].nodeName.match(
            /^(textarea|input|select|button)$/i) &&
        (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i)
            ? s.outerHeight()
            : s.outerWidth(), n = [
          'padding',
          /ne|nw|n/.test(i) ? 'Top' : /se|sw|s/.test(i) ? 'Bottom' : /^e$/.test(
              i) ? 'Right' : 'Left'].join(''), e.css(n,
            o), this._proportionallyResize()), this._handles = this._handles.add(
            this.handles[i]);
      }, this._renderAxis(this.element), this._handles = this._handles.add(
          this.element.find(
              '.ui-resizable-handle')), this._handles.disableSelection(), this._handles.on(
          'mouseover', function() {
            r.resizing || (this.className && (o = this.className.match(
                /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1]
                ? o[1]
                : 'se');
          }), a.autoHide &&
      (this._handles.hide(), this._addClass('ui-resizable-autohide'));
    },
    _removeHandles: function() {
      this._handles.remove();
    },
    _mouseCapture: function(e) {
      var i, s, n = !1;
      for (i in this.handles) s = t(this.handles[i])[0], (s === e.target ||
          t.contains(s, e.target)) && (n = !0);
      return !this.options.disabled && n;
    },
    _mouseStart: function(e) {
      var i, s, n, o = this.options,
          a = this.element;
      return this.resizing = !0, this._renderProxy(), i = this._num(
          this.helper.css('left')), s = this._num(
          this.helper.css('top')), o.containment &&
      (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).
              scrollTop() ||
          0), this.offset = this.helper.offset(), this.position = {
        left: i,
        top: s,
      }, this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height(),
      } : {
        width: a.width(),
        height: a.height(),
      }, this.originalSize = this._helper ? {
        width: a.outerWidth(),
        height: a.outerHeight(),
      } : {
        width: a.width(),
        height: a.height(),
      }, this.sizeDiff = {
        width: a.outerWidth() - a.width(),
        height: a.outerHeight() - a.height(),
      }, this.originalPosition = {
        left: i,
        top: s,
      }, this.originalMousePosition = {
        left: e.pageX,
        top: e.pageY,
      }, this.aspectRatio = 'number' == typeof o.aspectRatio
          ? o.aspectRatio
          : this.originalSize.width / this.originalSize.height || 1, n = t(
          '.ui-resizable-' + this.axis).css('cursor'), t('body').
          css('cursor',
              'auto' === n ? this.axis + '-resize' : n), this._addClass(
          'ui-resizable-resizing'), this._propagate('start', e), !0;
    },
    _mouseDrag: function(e) {
      var i, s, n = this.originalMousePosition,
          o = this.axis,
          a = e.pageX - n.left || 0,
          r = e.pageY - n.top || 0,
          h = this._change[o];
      return this._updatePrevProperties(), h ? (i = h.apply(this,
          [e, a, r]), this._updateVirtualBoundaries(
          e.shiftKey), (this._aspectRatio || e.shiftKey) &&
      (i = this._updateRatio(i, e)), i = this._respectSize(i,
          e), this._updateCache(i), this._propagate('resize',
          e), s = this._applyChanges(), !this._helper &&
      this._proportionallyResizeElements.length &&
      this._proportionallyResize(), t.isEmptyObject(s) ||
      (this._updatePrevProperties(), this._trigger('resize', e,
          this.ui()), this._applyChanges()), !1) : !1;
    },
    _mouseStop: function(e) {
      this.resizing = !1;
      var i, s, n, o, a, r, h, l = this.options,
          c = this;
      return this._helper &&
      (i = this._proportionallyResizeElements, s = i.length &&
          /textarea/i.test(i[0].nodeName), n = s &&
      this._hasScroll(i[0], 'left') ? 0 : c.sizeDiff.height, o = s
          ? 0
          : c.sizeDiff.width, a = {
        width: c.helper.width() - o,
        height: c.helper.height() - n,
      }, r = parseFloat(c.element.css('left')) +
          (c.position.left - c.originalPosition.left) || null, h = parseFloat(
          c.element.css('top')) + (c.position.top - c.originalPosition.top) ||
          null, l.animate || this.element.css(t.extend(a, {
        top: h,
        left: r,
      })), c.helper.height(c.size.height), c.helper.width(
          c.size.width), this._helper && !l.animate &&
      this._proportionallyResize()), t('body').
          css('cursor', 'auto'), this._removeClass(
          'ui-resizable-resizing'), this._propagate('stop', e), this._helper &&
      this.helper.remove(), !1;
    },
    _updatePrevProperties: function() {
      this.prevPosition = {
        top: this.position.top,
        left: this.position.left,
      }, this.prevSize = {
        width: this.size.width,
        height: this.size.height,
      };
    },
    _applyChanges: function() {
      var t = {};
      return this.position.top !== this.prevPosition.top &&
      (t.top = this.position.top + 'px'), this.position.left !==
      this.prevPosition.left &&
      (t.left = this.position.left + 'px'), this.size.width !==
      this.prevSize.width &&
      (t.width = this.size.width + 'px'), this.size.height !==
      this.prevSize.height &&
      (t.height = this.size.height + 'px'), this.helper.css(t), t;
    },
    _updateVirtualBoundaries: function(t) {
      var e, i, s, n, o, a = this.options;
      o = {
        minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
        maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
        minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
        maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0,
      }, (this._aspectRatio || t) &&
      (e = o.minHeight * this.aspectRatio, s = o.minWidth /
          this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth /
          this.aspectRatio, e > o.minWidth && (o.minWidth = e), s >
      o.minHeight && (o.minHeight = s), o.maxWidth > i &&
      (o.maxWidth = i), o.maxHeight > n &&
      (o.maxHeight = n)), this._vBoundaries = o;
    },
    _updateCache: function(t) {
      this.offset = this.helper.offset(), this._isNumber(t.left) &&
      (this.position.left = t.left), this._isNumber(t.top) &&
      (this.position.top = t.top), this._isNumber(t.height) &&
      (this.size.height = t.height), this._isNumber(t.width) &&
      (this.size.width = t.width);
    },
    _updateRatio: function(t) {
      var e = this.position,
          i = this.size,
          s = this.axis;
      return this._isNumber(t.height)
          ? t.width = t.height * this.aspectRatio
          : this._isNumber(t.width) &&
          (t.height = t.width / this.aspectRatio), 'sw' === s &&
      (t.left = e.left + (i.width - t.width), t.top = null), 'nw' === s &&
      (t.top = e.top + (i.height - t.height), t.left = e.left +
          (i.width - t.width)), t;
    },
    _respectSize: function(t) {
      var e = this._vBoundaries,
          i = this.axis,
          s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
          n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
          o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
          a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
          r = this.originalPosition.left + this.originalSize.width,
          h = this.originalPosition.top + this.originalSize.height,
          l = /sw|nw|w/.test(i),
          c = /nw|ne|n/.test(i);
      return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s &&
      (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l &&
      (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c &&
      (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width ||
      t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left ||
          (t.left = null) : t.top = null, t;
    },
    _getPaddingPlusBorderDimensions: function(t) {
      for (var e = 0, i = [], s = [
        t.css('borderTopWidth'),
        t.css('borderRightWidth'),
        t.css('borderBottomWidth'),
        t.css('borderLeftWidth')], n = [
        t.css('paddingTop'),
        t.css('paddingRight'),
        t.css('paddingBottom'),
        t.css('paddingLeft')]; 4 > e; e++) i[e] = parseFloat(s[e]) ||
          0, i[e] += parseFloat(n[e]) || 0;
      return {
        height: i[0] + i[2],
        width: i[1] + i[3],
      };
    },
    _proportionallyResize: function() {
      if (this._proportionallyResizeElements.length)
        for (var t, e = 0, i = this.helper ||
            this.element; this._proportionallyResizeElements.length >
        e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions ||
        (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css(
            {
              height: i.height() - this.outerDimensions.height || 0,
              width: i.width() - this.outerDimensions.width || 0,
            });
    },
    _renderProxy: function() {
      var e = this.element,
          i = this.options;
      this.elementOffset = e.offset(), this._helper
          ? (this.helper = this.helper ||
              t('<div style=\'overflow:hidden;\'></div>'), this._addClass(
              this.helper, this._helper), this.helper.css({
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
            position: 'absolute',
            left: this.elementOffset.left + 'px',
            top: this.elementOffset.top + 'px',
            zIndex: ++i.zIndex,
          }), this.helper.appendTo('body').disableSelection())
          : this.helper = this.element;
    },
    _change: {
      e: function(t, e) {
        return {
          width: this.originalSize.width + e,
        };
      },
      w: function(t, e) {
        var i = this.originalSize,
            s = this.originalPosition;
        return {
          left: s.left + e,
          width: i.width - e,
        };
      },
      n: function(t, e, i) {
        var s = this.originalSize,
            n = this.originalPosition;
        return {
          top: n.top + i,
          height: s.height - i,
        };
      },
      s: function(t, e, i) {
        return {
          height: this.originalSize.height + i,
        };
      },
      se: function(e, i, s) {
        return t.extend(this._change.s.apply(this, arguments),
            this._change.e.apply(this, [e, i, s]));
      },
      sw: function(e, i, s) {
        return t.extend(this._change.s.apply(this, arguments),
            this._change.w.apply(this, [e, i, s]));
      },
      ne: function(e, i, s) {
        return t.extend(this._change.n.apply(this, arguments),
            this._change.e.apply(this, [e, i, s]));
      },
      nw: function(e, i, s) {
        return t.extend(this._change.n.apply(this, arguments),
            this._change.w.apply(this, [e, i, s]));
      },
    },
    _propagate: function(e, i) {
      t.ui.plugin.call(this, e, [i, this.ui()]), 'resize' !== e &&
      this._trigger(e, i, this.ui());
    },
    plugins: {},
    ui: function() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition,
      };
    },
  }), t.ui.plugin.add('resizable', 'animate', {
    stop: function(e) {
      var i = t(this).resizable('instance'),
          s = i.options,
          n = i._proportionallyResizeElements,
          o = n.length && /textarea/i.test(n[0].nodeName),
          a = o && i._hasScroll(n[0], 'left') ? 0 : i.sizeDiff.height,
          r = o ? 0 : i.sizeDiff.width,
          h = {
            width: i.size.width - r,
            height: i.size.height - a,
          },
          l = parseFloat(i.element.css('left')) +
              (i.position.left - i.originalPosition.left) || null,
          c = parseFloat(i.element.css('top')) +
              (i.position.top - i.originalPosition.top) || null;
      i.element.animate(t.extend(h, c && l ? {
        top: c,
        left: l,
      } : {}), {
        duration: s.animateDuration,
        easing: s.animateEasing,
        step: function() {
          var s = {
            width: parseFloat(i.element.css('width')),
            height: parseFloat(i.element.css('height')),
            top: parseFloat(i.element.css('top')),
            left: parseFloat(i.element.css('left')),
          };
          n && n.length && t(n[0]).css({
            width: s.width,
            height: s.height,
          }), i._updateCache(s), i._propagate('resize', e);
        },
      });
    },
  }), t.ui.plugin.add('resizable', 'containment', {
    start: function() {
      var e, i, s, n, o, a, r, h = t(this).resizable('instance'),
          l = h.options,
          c = h.element,
          u = l.containment,
          d = u instanceof t ? u.get(0) : /parent/.test(u)
              ? c.parent().get(0)
              : u;
      d && (h.containerElement = t(d), /document/.test(u) || u === document
          ? (h.containerOffset = {
            left: 0,
            top: 0,
          }, h.containerPosition = {
            left: 0,
            top: 0,
          }, h.parentData = {
            element: t(document),
            left: 0,
            top: 0,
            width: t(document).width(),
            height: t(document).height() ||
                document.body.parentNode.scrollHeight,
          })
          : (e = t(d), i = [], t(['Top', 'Right', 'Left', 'Bottom']).
              each(function(t, s) {
                i[t] = h._num(e.css('padding' + s));
              }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
            height: e.innerHeight() - i[3],
            width: e.innerWidth() - i[1],
          }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(
              d, 'left') ? d.scrollWidth : o, r = h._hasScroll(d)
              ? d.scrollHeight
              : n, h.parentData = {
            element: d,
            left: s.left,
            top: s.top,
            width: a,
            height: r,
          }));
    },
    resize: function(e) {
      var i, s, n, o, a = t(this).resizable('instance'),
          r = a.options,
          h = a.containerOffset,
          l = a.position,
          c = a._aspectRatio || e.shiftKey,
          u = {
            top: 0,
            left: 0,
          },
          d = a.containerElement,
          p = !0;
      d[0] !== document && /static/.test(d.css('position')) && (u = h), l.left <
      (a._helper ? h.left : 0) && (a.size.width = a.size.width +
          (a._helper ? a.position.left - h.left : a.position.left -
              u.left), c && (a.size.height = a.size.width /
          a.aspectRatio, p = !1), a.position.left = r.helper
          ? h.left
          : 0), l.top < (a._helper ? h.top : 0) &&
      (a.size.height = a.size.height +
          (a._helper ? a.position.top - h.top : a.position.top), c &&
      (a.size.width = a.size.height *
          a.aspectRatio, p = !1), a.position.top = a._helper
          ? h.top
          : 0), n = a.containerElement.get(0) ===
          a.element.parent().get(0), o = /relative|absolute/.test(
          a.containerElement.css('position')), n && o
          ? (a.offset.left = a.parentData.left +
              a.position.left, a.offset.top = a.parentData.top + a.position.top)
          : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(
          a.sizeDiff.width +
          (a._helper ? a.offset.left - u.left : a.offset.left -
              h.left)), s = Math.abs(a.sizeDiff.height +
          (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i +
      a.size.width >= a.parentData.width &&
      (a.size.width = a.parentData.width - i, c &&
      (a.size.height = a.size.width / a.aspectRatio, p = !1)), s +
      a.size.height >= a.parentData.height &&
      (a.size.height = a.parentData.height - s, c &&
      (a.size.width = a.size.height * a.aspectRatio, p = !1)), p ||
      (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height);
    },
    stop: function() {
      var e = t(this).resizable('instance'),
          i = e.options,
          s = e.containerOffset,
          n = e.containerPosition,
          o = e.containerElement,
          a = t(e.helper),
          r = a.offset(),
          h = a.outerWidth() - e.sizeDiff.width,
          l = a.outerHeight() - e.sizeDiff.height;
      e._helper && !i.animate && /relative/.test(o.css('position')) &&
      t(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l,
      }), e._helper && !i.animate && /static/.test(o.css('position')) &&
      t(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l,
      });
    },
  }), t.ui.plugin.add('resizable', 'alsoResize', {
    start: function() {
      var e = t(this).resizable('instance'),
          i = e.options;
      t(i.alsoResize).each(function() {
        var e = t(this);
        e.data('ui-resizable-alsoresize', {
          width: parseFloat(e.width()),
          height: parseFloat(e.height()),
          left: parseFloat(e.css('left')),
          top: parseFloat(e.css('top')),
        });
      });
    },
    resize: function(e, i) {
      var s = t(this).resizable('instance'),
          n = s.options,
          o = s.originalSize,
          a = s.originalPosition,
          r = {
            height: s.size.height - o.height || 0,
            width: s.size.width - o.width || 0,
            top: s.position.top - a.top || 0,
            left: s.position.left - a.left || 0,
          };
      t(n.alsoResize).each(function() {
        var e = t(this),
            s = t(this).data('ui-resizable-alsoresize'),
            n = {},
            o = e.parents(i.originalElement[0]).length
                ? ['width', 'height']
                : ['width', 'height', 'top', 'left'];
        t.each(o, function(t, e) {
          var i = (s[e] || 0) + (r[e] || 0);
          i && i >= 0 && (n[e] = i || null);
        }), e.css(n);
      });
    },
    stop: function() {
      t(this).removeData('ui-resizable-alsoresize');
    },
  }), t.ui.plugin.add('resizable', 'ghost', {
    start: function() {
      var e = t(this).resizable('instance'),
          i = e.size;
      e.ghost = e.originalElement.clone(), e.ghost.css({
        opacity: .25,
        display: 'block',
        position: 'relative',
        height: i.height,
        width: i.width,
        margin: 0,
        left: 0,
        top: 0,
      }), e._addClass(e.ghost, 'ui-resizable-ghost'), t.uiBackCompat !== !1 &&
      'string' == typeof e.options.ghost &&
      e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper);
    },
    resize: function() {
      var e = t(this).resizable('instance');
      e.ghost && e.ghost.css({
        position: 'relative',
        height: e.size.height,
        width: e.size.width,
      });
    },
    stop: function() {
      var e = t(this).resizable('instance');
      e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
    },
  }), t.ui.plugin.add('resizable', 'grid', {
    resize: function() {
      var e, i = t(this).resizable('instance'),
          s = i.options,
          n = i.size,
          o = i.originalSize,
          a = i.originalPosition,
          r = i.axis,
          h = 'number' == typeof s.grid ? [s.grid, s.grid] : s.grid,
          l = h[0] || 1,
          c = h[1] || 1,
          u = Math.round((n.width - o.width) / l) * l,
          d = Math.round((n.height - o.height) / c) * c,
          p = o.width + u,
          f = o.height + d,
          g = s.maxWidth && p > s.maxWidth,
          m = s.maxHeight && f > s.maxHeight,
          _ = s.minWidth && s.minWidth > p,
          v = s.minHeight && s.minHeight > f;
      s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m &&
      (f -= c), /^(se|s|e)$/.test(r)
          ? (i.size.width = p, i.size.height = f)
          : /^(ne)$/.test(r)
              ? (i.size.width = p, i.size.height = f, i.position.top = a.top -
                  d)
              : /^(sw)$/.test(r)
                  ? (i.size.width = p, i.size.height = f, i.position.left = a.left -
                      u)
                  : ((0 >= f - c || 0 >= p - l) &&
                  (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0
                      ? (i.size.height = f, i.position.top = a.top - d)
                      : (f = c -
                          e.height, i.size.height = f, i.position.top = a.top +
                          o.height - f), p - l > 0
                      ? (i.size.width = p, i.position.left = a.left - u)
                      : (p = l -
                          e.width, i.size.width = p, i.position.left = a.left +
                          o.width - p));
    },
  }), t.ui.resizable, t.widget('ui.dialog', {
    version: '1.12.1',
    options: {
      appendTo: 'body',
      autoOpen: !0,
      buttons: [],
      classes: {
        'ui-dialog': 'ui-corner-all',
        'ui-dialog-titlebar': 'ui-corner-all',
      },
      closeOnEscape: !0,
      closeText: 'Close',
      draggable: !0,
      hide: null,
      height: 'auto',
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: 'center',
        at: 'center',
        of: window,
        collision: 'fit',
        using: function(e) {
          var i = t(this).css(e).offset().top;
          0 > i && t(this).css('top', e.top - i);
        },
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null,
    },
    sizeRelatedOptions: {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0,
    },
    resizableRelatedOptions: {
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
    },
    _create: function() {
      this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height,
      }, this.originalPosition = {
        parent: this.element.parent(),
        index: this.element.parent().children().index(this.element),
      }, this.originalTitle = this.element.attr('title'), null ==
      this.options.title && null != this.originalTitle &&
      (this.options.title = this.originalTitle), this.options.disabled &&
      (this.options.disabled = !1), this._createWrapper(), this.element.show().
          removeAttr('title').
          appendTo(this.uiDialog), this._addClass('ui-dialog-content',
          'ui-widget-content'), this._createTitlebar(), this._createButtonPane(), this.options.draggable &&
      t.fn.draggable && this._makeDraggable(), this.options.resizable &&
      t.fn.resizable &&
      this._makeResizable(), this._isOpen = !1, this._trackFocus();
    },
    _init: function() {
      this.options.autoOpen && this.open();
    },
    _appendTo: function() {
      var e = this.options.appendTo;
      return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(
          e || 'body').eq(0);
    },
    _destroy: function() {
      var t, e = this.originalPosition;
      this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().
          css(this.originalCss).
          detach(), this.uiDialog.remove(), this.originalTitle &&
      this.element.attr('title', this.originalTitle), t = e.parent.children().
          eq(e.index), t.length && t[0] !== this.element[0] ? t.before(
          this.element) : e.parent.append(this.element);
    },
    widget: function() {
      return this.uiDialog;
    },
    disable: t.noop,
    enable: t.noop,
    close: function(e) {
      var i = this;
      this._isOpen && this._trigger('beforeClose', e) !== !1 &&
      (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(
          ':focusable').trigger('focus').length ||
      t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(
          this.uiDialog, this.options.hide, function() {
            i._trigger('close', e);
          }));
    },
    isOpen: function() {
      return this._isOpen;
    },
    moveToTop: function() {
      this._moveToTop();
    },
    _moveToTop: function(e, i) {
      var s = !1,
          n = this.uiDialog.siblings('.ui-front:visible').map(function() {
            return +t(this).css('z-index');
          }).get(),
          o = Math.max.apply(null, n);
      return o >= +this.uiDialog.css('z-index') &&
      (this.uiDialog.css('z-index', o + 1), s = !0), s && !i &&
      this._trigger('focus', e), s;
    },
    open: function() {
      var e = this;
      return this._isOpen
          ? (this._moveToTop() && this._focusTabbable(), void 0)
          : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(
              this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(
              null, !0), this.overlay && this.overlay.css('z-index',
              this.uiDialog.css('z-index') - 1), this._show(this.uiDialog,
              this.options.show, function() {
                e._focusTabbable(), e._trigger('focus');
              }), this._makeFocusTarget(), this._trigger('open'), void 0);
    },
    _focusTabbable: function() {
      var t = this._focusedElement;
      t || (t = this.element.find('[autofocus]')), t.length ||
      (t = this.element.find(':tabbable')), t.length ||
      (t = this.uiDialogButtonPane.find(':tabbable')), t.length ||
      (t = this.uiDialogTitlebarClose.filter(':tabbable')), t.length ||
      (t = this.uiDialog), t.eq(0).trigger('focus');
    },
    _keepFocus: function(e) {
      function i() {
        var e = t.ui.safeActiveElement(this.document[0]),
            i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
        i || this._focusTabbable();
      }

      e.preventDefault(), i.call(this), this._delay(i);
    },
    _createWrapper: function() {
      this.uiDialog = t('<div>').hide().attr({
        tabIndex: -1,
        role: 'dialog',
      }).appendTo(this._appendTo()), this._addClass(this.uiDialog, 'ui-dialog',
          'ui-widget ui-widget-content ui-front'), this._on(this.uiDialog, {
        keydown: function(e) {
          if (this.options.closeOnEscape && !e.isDefaultPrevented() &&
              e.keyCode && e.keyCode ===
              t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(
              e), void 0;
          if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
            var i = this.uiDialog.find(':tabbable'),
                s = i.filter(':first'),
                n = i.filter(':last');
            e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey
                ? e.target !== s[0] && e.target !== this.uiDialog[0] ||
                !e.shiftKey || (this._delay(function() {
                  n.trigger('focus');
                }), e.preventDefault())
                : (this._delay(function() {
                  s.trigger('focus');
                }), e.preventDefault());
          }
        },
        mousedown: function(t) {
          this._moveToTop(t) && this._focusTabbable();
        },
      }), this.element.find('[aria-describedby]').length || this.uiDialog.attr({
        'aria-describedby': this.element.uniqueId().attr('id'),
      });
    },
    _createTitlebar: function() {
      var e;
      this.uiDialogTitlebar = t('<div>'), this._addClass(this.uiDialogTitlebar,
          'ui-dialog-titlebar',
          'ui-widget-header ui-helper-clearfix'), this._on(
          this.uiDialogTitlebar, {
            mousedown: function(e) {
              t(e.target).closest('.ui-dialog-titlebar-close') ||
              this.uiDialog.trigger('focus');
            },
          }), this.uiDialogTitlebarClose = t(
          '<button type=\'button\'></button>').
          button({
            label: t('<a>').text(this.options.closeText).html(),
            icon: 'ui-icon-closethick',
            showLabel: !1,
          }).
          appendTo(this.uiDialogTitlebar), this._addClass(
          this.uiDialogTitlebarClose, 'ui-dialog-titlebar-close'), this._on(
          this.uiDialogTitlebarClose, {
            click: function(t) {
              t.preventDefault(), this.close(t);
            },
          }), e = t('<span>').
          uniqueId().
          prependTo(this.uiDialogTitlebar), this._addClass(e,
          'ui-dialog-title'), this._title(e), this.uiDialogTitlebar.prependTo(
          this.uiDialog), this.uiDialog.attr({
        'aria-labelledby': e.attr('id'),
      });
    },
    _title: function(t) {
      this.options.title ? t.text(this.options.title) : t.html('&#160;');
    },
    _createButtonPane: function() {
      this.uiDialogButtonPane = t('<div>'), this._addClass(
          this.uiDialogButtonPane, 'ui-dialog-buttonpane',
          'ui-widget-content ui-helper-clearfix'), this.uiButtonSet = t(
          '<div>').appendTo(this.uiDialogButtonPane), this._addClass(
          this.uiButtonSet, 'ui-dialog-buttonset'), this._createButtons();
    },
    _createButtons: function() {
      var e = this,
          i = this.options.buttons;
      return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(
          i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog,
          'ui-dialog-buttons'), void 0) : (t.each(i, function(i, s) {
        var n, o;
        s = t.isFunction(s) ? {
          click: s,
          text: i,
        } : s, s = t.extend({
          type: 'button',
        }, s), n = s.click, o = {
          icon: s.icon,
          iconPosition: s.iconPosition,
          showLabel: s.showLabel,
          icons: s.icons,
          text: s.text,
        }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, 'boolean' ==
        typeof s.text && delete s.text, t('<button></button>', s).
            button(o).
            appendTo(e.uiButtonSet).
            on('click', function() {
              n.apply(e.element[0], arguments);
            });
      }), this._addClass(this.uiDialog,
          'ui-dialog-buttons'), this.uiDialogButtonPane.appendTo(
          this.uiDialog), void 0);
    },
    _makeDraggable: function() {
      function e(t) {
        return {
          position: t.position,
          offset: t.offset,
        };
      }

      var i = this,
          s = this.options;
      this.uiDialog.draggable({
        cancel: '.ui-dialog-content, .ui-dialog-titlebar-close',
        handle: '.ui-dialog-titlebar',
        containment: 'document',
        start: function(s, n) {
          i._addClass(t(this),
              'ui-dialog-dragging'), i._blockFrames(), i._trigger('dragStart',
              s, e(n));
        },
        drag: function(t, s) {
          i._trigger('drag', t, e(s));
        },
        stop: function(n, o) {
          var a = o.offset.left - i.document.scrollLeft(),
              r = o.offset.top - i.document.scrollTop();
          s.position = {
            my: 'left top',
            at: 'left' + (a >= 0 ? '+' : '') + a + ' ' + 'top' +
                (r >= 0 ? '+' : '') + r,
            of: i.window,
          }, i._removeClass(t(this),
              'ui-dialog-dragging'), i._unblockFrames(), i._trigger('dragStop',
              n, e(o));
        },
      });
    },
    _makeResizable: function() {
      function e(t) {
        return {
          originalPosition: t.originalPosition,
          originalSize: t.originalSize,
          position: t.position,
          size: t.size,
        };
      }

      var i = this,
          s = this.options,
          n = s.resizable,
          o = this.uiDialog.css('position'),
          a = 'string' == typeof n ? n : 'n,e,s,w,se,sw,ne,nw';
      this.uiDialog.resizable({
        cancel: '.ui-dialog-content',
        containment: 'document',
        alsoResize: this.element,
        maxWidth: s.maxWidth,
        maxHeight: s.maxHeight,
        minWidth: s.minWidth,
        minHeight: this._minHeight(),
        handles: a,
        start: function(s, n) {
          i._addClass(t(this),
              'ui-dialog-resizing'), i._blockFrames(), i._trigger('resizeStart',
              s, e(n));
        },
        resize: function(t, s) {
          i._trigger('resize', t, e(s));
        },
        stop: function(n, o) {
          var a = i.uiDialog.offset(),
              r = a.left - i.document.scrollLeft(),
              h = a.top - i.document.scrollTop();
          s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
            my: 'left top',
            at: 'left' + (r >= 0 ? '+' : '') + r + ' ' + 'top' +
                (h >= 0 ? '+' : '') + h,
            of: i.window,
          }, i._removeClass(t(this),
              'ui-dialog-resizing'), i._unblockFrames(), i._trigger(
              'resizeStop', n, e(o));
        },
      }).css('position', o);
    },
    _trackFocus: function() {
      this._on(this.widget(), {
        focusin: function(e) {
          this._makeFocusTarget(), this._focusedElement = t(e.target);
        },
      });
    },
    _makeFocusTarget: function() {
      this._untrackInstance(), this._trackingInstances().unshift(this);
    },
    _untrackInstance: function() {
      var e = this._trackingInstances(),
          i = t.inArray(this, e);
      -1 !== i && e.splice(i, 1);
    },
    _trackingInstances: function() {
      var t = this.document.data('ui-dialog-instances');
      return t || (t = [], this.document.data('ui-dialog-instances', t)), t;
    },
    _minHeight: function() {
      var t = this.options;
      return 'auto' === t.height ? t.minHeight : Math.min(t.minHeight,
          t.height);
    },
    _position: function() {
      var t = this.uiDialog.is(':visible');
      t || this.uiDialog.show(), this.uiDialog.position(
          this.options.position), t || this.uiDialog.hide();
    },
    _setOptions: function(e) {
      var i = this,
          s = !1,
          n = {};
      t.each(e, function(t, e) {
        i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in
        i.resizableRelatedOptions && (n[t] = e);
      }), s && (this._size(), this._position()), this.uiDialog.is(
          ':data(ui-resizable)') && this.uiDialog.resizable('option', n);
    },
    _setOption: function(e, i) {
      var s, n, o = this.uiDialog;
      'disabled' !== e && (this._super(e, i), 'appendTo' === e &&
      this.uiDialog.appendTo(this._appendTo()), 'buttons' === e &&
      this._createButtons(), 'closeText' === e &&
      this.uiDialogTitlebarClose.button({
        label: t('<a>').text('' + this.options.closeText).html(),
      }), 'draggable' === e &&
      (s = o.is(':data(ui-draggable)'), s && !i && o.draggable('destroy'), !s &&
      i && this._makeDraggable()), 'position' === e &&
      this._position(), 'resizable' === e &&
      (n = o.is(':data(ui-resizable)'), n && !i && o.resizable('destroy'), n &&
      'string' == typeof i && o.resizable('option', 'handles', i), n || i ===
      !1 || this._makeResizable()), 'title' === e &&
      this._title(this.uiDialogTitlebar.find('.ui-dialog-title')));
    },
    _size: function() {
      var t, e, i, s = this.options;
      this.element.show().css({
        width: 'auto',
        minHeight: 0,
        maxHeight: 'none',
        height: 0,
      }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css(
          {
            height: 'auto',
            width: s.width,
          }).outerHeight(), e = Math.max(0, s.minHeight - t), i = 'number' ==
      typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : 'none', 'auto' ===
      s.height ? this.element.css({
        minHeight: e,
        maxHeight: i,
        height: 'auto',
      }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(
          ':data(ui-resizable)') &&
      this.uiDialog.resizable('option', 'minHeight', this._minHeight());
    },
    _blockFrames: function() {
      this.iframeBlocks = this.document.find('iframe').map(function() {
        var e = t(this);
        return t('<div>').css({
          position: 'absolute',
          width: e.outerWidth(),
          height: e.outerHeight(),
        }).appendTo(e.parent()).offset(e.offset())[0];
      });
    },
    _unblockFrames: function() {
      this.iframeBlocks &&
      (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _allowInteraction: function(e) {
      return t(e.target).closest('.ui-dialog').length ? !0 : !!t(e.target).
          closest('.ui-datepicker').length;
    },
    _createOverlay: function() {
      if (this.options.modal) {
        var e = !0;
        this._delay(function() {
          e = !1;
        }), this.document.data('ui-dialog-overlays') ||
        this._on(this.document, {
          focusin: function(t) {
            e || this._allowInteraction(t) ||
            (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
          },
        }), this.overlay = t('<div>').
            appendTo(this._appendTo()), this._addClass(this.overlay, null,
            'ui-widget-overlay ui-front'), this._on(this.overlay, {
          mousedown: '_keepFocus',
        }), this.document.data('ui-dialog-overlays',
            (this.document.data('ui-dialog-overlays') || 0) + 1);
      }
    },
    _destroyOverlay: function() {
      if (this.options.modal && this.overlay) {
        var t = this.document.data('ui-dialog-overlays') - 1;
        t ? this.document.data('ui-dialog-overlays', t) : (this._off(
            this.document, 'focusin'), this.document.removeData(
            'ui-dialog-overlays')), this.overlay.remove(), this.overlay = null;
      }
    },
  }), t.uiBackCompat !== !1 && t.widget('ui.dialog', t.ui.dialog, {
    options: {
      dialogClass: '',
    },
    _createWrapper: function() {
      this._super(), this.uiDialog.addClass(this.options.dialogClass);
    },
    _setOption: function(t, e) {
      'dialogClass' === t &&
      this.uiDialog.removeClass(this.options.dialogClass).
          addClass(e), this._superApply(arguments);
    },
  }), t.ui.dialog, t.widget('ui.droppable', {
    version: '1.12.1',
    widgetEventPrefix: 'drop',
    options: {
      accept: '*',
      addClasses: !0,
      greedy: !1,
      scope: 'default',
      tolerance: 'intersect',
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null,
    },
    _create: function() {
      var e, i = this.options,
          s = i.accept;
      this.isover = !1, this.isout = !0, this.accept = t.isFunction(s)
          ? s
          : function(t) {
            return t.is(s);
          }, this.proportions = function() {
        return arguments.length ? (e = arguments[0], void 0) : e ? e : e = {
          width: this.element[0].offsetWidth,
          height: this.element[0].offsetHeight,
        };
      }, this._addToManager(i.scope), i.addClasses &&
      this._addClass('ui-droppable');
    },
    _addToManager: function(e) {
      t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] ||
          [], t.ui.ddmanager.droppables[e].push(this);
    },
    _splice: function(t) {
      for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
    },
    _destroy: function() {
      var e = t.ui.ddmanager.droppables[this.options.scope];
      this._splice(e);
    },
    _setOption: function(e, i) {
      if ('accept' === e) this.accept = t.isFunction(i) ? i : function(t) {
        return t.is(i);
      };
      else if ('scope' === e) {
        var s = t.ui.ddmanager.droppables[this.options.scope];
        this._splice(s), this._addToManager(i);
      }
      this._super(e, i);
    },
    _activate: function(e) {
      var i = t.ui.ddmanager.current;
      this._addActiveClass(), i && this._trigger('activate', e, this.ui(i));
    },
    _deactivate: function(e) {
      var i = t.ui.ddmanager.current;
      this._removeActiveClass(), i &&
      this._trigger('deactivate', e, this.ui(i));
    },
    _over: function(e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] &&
      this.accept.call(this.element[0], i.currentItem || i.element) &&
      (this._addHoverClass(), this._trigger('over', e, this.ui(i)));
    },
    _out: function(e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] &&
      this.accept.call(this.element[0], i.currentItem || i.element) &&
      (this._removeHoverClass(), this._trigger('out', e, this.ui(i)));
    },
    _drop: function(e, i) {
      var s = i || t.ui.ddmanager.current,
          n = !1;
      return s && (s.currentItem || s.element)[0] !== this.element[0]
          ? (this.element.find(':data(ui-droppable)').
              not('.ui-draggable-dragging').
              each(function() {
                var i = t(this).droppable('instance');
                return i.options.greedy && !i.options.disabled &&
                i.options.scope === s.options.scope &&
                i.accept.call(i.element[0], s.currentItem || s.element) &&
                v(s, t.extend(i, {
                  offset: i.element.offset(),
                }), i.options.tolerance, e) ? (n = !0, !1) : void 0;
              }), n ? !1 : this.accept.call(this.element[0],
              s.currentItem || s.element)
              ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger(
                  'drop', e, this.ui(s)), this.element)
              : !1)
          : !1;
    },
    ui: function(t) {
      return {
        draggable: t.currentItem || t.element,
        helper: t.helper,
        position: t.position,
        offset: t.positionAbs,
      };
    },
    _addHoverClass: function() {
      this._addClass('ui-droppable-hover');
    },
    _removeHoverClass: function() {
      this._removeClass('ui-droppable-hover');
    },
    _addActiveClass: function() {
      this._addClass('ui-droppable-active');
    },
    _removeActiveClass: function() {
      this._removeClass('ui-droppable-active');
    },
  });
  var v = t.ui.intersect = function() {
    function t(t, e, i) {
      return t >= e && e + i > t;
    }

    return function(e, i, s, n) {
      if (!i.offset) return !1;
      var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
          a = (e.positionAbs || e.position.absolute).top + e.margins.top,
          r = o + e.helperProportions.width,
          h = a + e.helperProportions.height,
          l = i.offset.left,
          c = i.offset.top,
          u = l + i.proportions().width,
          d = c + i.proportions().height;
      switch (s) {
        case 'fit':
          return o >= l && u >= r && a >= c && d >= h;
        case 'intersect':
          return o + e.helperProportions.width / 2 > l && u > r -
              e.helperProportions.width / 2 && a + e.helperProportions.height /
              2 > c && d > h - e.helperProportions.height / 2;
        case 'pointer':
          return t(n.pageY, c, i.proportions().height) &&
              t(n.pageX, l, i.proportions().width);
        case 'touch':
          return (a >= c && d >= a || h >= c && d >= h || c > a && h > d) &&
              (o >= l && u >= o || r >= l && u >= r || l > o && r > u);
        default:
          return !1;
      }
    };
  }();
  t.ui.ddmanager = {
    current: null,
    droppables: {
      'default': [],
    },
    prepareOffsets: function(e, i) {
      var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
          a = i ? i.type : null,
          r = (e.currentItem || e.element).find(':data(ui-droppable)').
              addBack();
      t: for (s = 0; o.length > s; s++)
        if (!(o[s].options.disabled || e &&
            !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
          for (n = 0; r.length > n; n++)
            if (r[n] === o[s].element[0]) {
              o[s].proportions().height = 0;
              continue t;
            }
          o[s].visible = 'none' !== o[s].element.css('display'), o[s].visible &&
          ('mousedown' === a && o[s]._activate.call(o[s],
              i), o[s].offset = o[s].element.offset(), o[s].proportions({
            width: o[s].element[0].offsetWidth,
            height: o[s].element[0].offsetHeight,
          }));
        }
    },
    drop: function(e, i) {
      var s = !1;
      return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
          function() {
            this.options && (!this.options.disabled && this.visible &&
            v(e, this, this.options.tolerance, i) &&
            (s = this._drop.call(this, i) || s), !this.options.disabled &&
            this.visible &&
            this.accept.call(this.element[0], e.currentItem || e.element) &&
            (this.isout = !0, this.isover = !1, this._deactivate.call(this,
                i)));
          }), s;
    },
    dragStart: function(e, i) {
      e.element.parentsUntil('body').on('scroll.droppable', function() {
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
      });
    },
    drag: function(e, i) {
      e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(
          t.ui.ddmanager.droppables[e.options.scope] || [], function() {
            if (!this.options.disabled && !this.greedyChild && this.visible) {
              var s, n, o, a = v(e, this, this.options.tolerance, i),
                  r = !a && this.isover ? 'isout' : a && !this.isover
                      ? 'isover'
                      : null;
              r && (this.options.greedy &&
              (n = this.options.scope, o = this.element.parents(
                  ':data(ui-droppable)').filter(function() {
                return t(this).droppable('instance').options.scope === n;
              }), o.length &&
              (s = t(o[0]).droppable('instance'), s.greedyChild = 'isover' ===
                  r)), s && 'isover' === r &&
              (s.isover = !1, s.isout = !0, s._out.call(s,
                  i)), this[r] = !0, this['isout' === r
                  ? 'isover'
                  : 'isout'] = !1, this['isover' === r ? '_over' : '_out'].call(
                  this, i), s && 'isout' === r &&
              (s.isout = !1, s.isover = !0, s._over.call(s, i)));
            }
          });
    },
    dragStop: function(e, i) {
      e.element.parentsUntil('body').
          off('scroll.droppable'), e.options.refreshPositions ||
      t.ui.ddmanager.prepareOffsets(e, i);
    },
  }, t.uiBackCompat !== !1 && t.widget('ui.droppable', t.ui.droppable, {
    options: {
      hoverClass: !1,
      activeClass: !1,
    },
    _addActiveClass: function() {
      this._super(), this.options.activeClass &&
      this.element.addClass(this.options.activeClass);
    },
    _removeActiveClass: function() {
      this._super(), this.options.activeClass &&
      this.element.removeClass(this.options.activeClass);
    },
    _addHoverClass: function() {
      this._super(), this.options.hoverClass &&
      this.element.addClass(this.options.hoverClass);
    },
    _removeHoverClass: function() {
      this._super(), this.options.hoverClass &&
      this.element.removeClass(this.options.hoverClass);
    },
  }), t.ui.droppable, t.widget('ui.progressbar', {
    version: '1.12.1',
    options: {
      classes: {
        'ui-progressbar': 'ui-corner-all',
        'ui-progressbar-value': 'ui-corner-left',
        'ui-progressbar-complete': 'ui-corner-right',
      },
      max: 100,
      value: 0,
      change: null,
      complete: null,
    },
    min: 0,
    _create: function() {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.attr(
          {
            role: 'progressbar',
            'aria-valuemin': this.min,
          }), this._addClass('ui-progressbar',
          'ui-widget ui-widget-content'), this.valueDiv = t('<div>').
          appendTo(this.element), this._addClass(this.valueDiv,
          'ui-progressbar-value', 'ui-widget-header'), this._refreshValue();
    },
    _destroy: function() {
      this.element.removeAttr(
          'role aria-valuemin aria-valuemax aria-valuenow'), this.valueDiv.remove();
    },
    value: function(t) {
      return void 0 === t
          ? this.options.value
          : (this.options.value = this._constrainedValue(
              t), this._refreshValue(), void 0);
    },
    _constrainedValue: function(t) {
      return void 0 === t &&
      (t = this.options.value), this.indeterminate = t === !1, 'number' !=
      typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max,
          Math.max(this.min, t));
    },
    _setOptions: function(t) {
      var e = t.value;
      delete t.value, this._super(
          t), this.options.value = this._constrainedValue(
          e), this._refreshValue();
    },
    _setOption: function(t, e) {
      'max' === t && (e = Math.max(this.min, e)), this._super(t, e);
    },
    _setOptionDisabled: function(t) {
      this._super(t), this.element.attr('aria-disabled', t), this._toggleClass(
          null, 'ui-state-disabled', !!t);
    },
    _percentage: function() {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) /
          (this.options.max - this.min);
    },
    _refreshValue: function() {
      var e = this.options.value,
          i = this._percentage();
      this.valueDiv.toggle(this.indeterminate || e > this.min).
          width(i.toFixed(0) + '%'), this._toggleClass(this.valueDiv,
          'ui-progressbar-complete', null, e === this.options.max).
          _toggleClass('ui-progressbar-indeterminate', null,
              this.indeterminate), this.indeterminate
          ? (this.element.removeAttr('aria-valuenow'), this.overlayDiv ||
          (this.overlayDiv = t('<div>').appendTo(this.valueDiv), this._addClass(
              this.overlayDiv, 'ui-progressbar-overlay')))
          : (this.element.attr({
            'aria-valuemax': this.options.max,
            'aria-valuenow': e,
          }), this.overlayDiv &&
          (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !==
      e && (this.oldValue = e, this._trigger('change')), e ===
      this.options.max && this._trigger('complete');
    },
  }), t.widget('ui.selectable', t.ui.mouse, {
    version: '1.12.1',
    options: {
      appendTo: 'body',
      autoRefresh: !0,
      distance: 0,
      filter: '*',
      tolerance: 'touch',
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null,
    },
    _create: function() {
      var e = this;
      this._addClass(
          'ui-selectable'), this.dragged = !1, this.refresh = function() {
        e.elementPos = t(e.element[0]).offset(), e.selectees = t(
            e.options.filter, e.element[0]), e._addClass(e.selectees,
            'ui-selectee'), e.selectees.each(function() {
          var i = t(this),
              s = i.offset(),
              n = {
                left: s.left - e.elementPos.left,
                top: s.top - e.elementPos.top,
              };
          t.data(this, 'selectable-item', {
            element: this,
            $element: i,
            left: n.left,
            top: n.top,
            right: n.left + i.outerWidth(),
            bottom: n.top + i.outerHeight(),
            startselected: !1,
            selected: i.hasClass('ui-selected'),
            selecting: i.hasClass('ui-selecting'),
            unselecting: i.hasClass('ui-unselecting'),
          });
        });
      }, this.refresh(), this._mouseInit(), this.helper = t(
          '<div>'), this._addClass(this.helper, 'ui-selectable-helper');
    },
    _destroy: function() {
      this.selectees.removeData('selectable-item'), this._mouseDestroy();
    },
    _mouseStart: function(e) {
      var i = this,
          s = this.options;
      this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).
          offset(), this.options.disabled ||
      (this.selectees = t(s.filter, this.element[0]), this._trigger('start',
          e), t(s.appendTo).append(this.helper), this.helper.css({
        left: e.pageX,
        top: e.pageY,
        width: 0,
        height: 0,
      }), s.autoRefresh && this.refresh(), this.selectees.filter(
          '.ui-selected').each(function() {
        var s = t.data(this, 'selectable-item');
        s.startselected = !0, e.metaKey || e.ctrlKey ||
        (i._removeClass(s.$element,
            'ui-selected'), s.selected = !1, i._addClass(s.$element,
            'ui-unselecting'), s.unselecting = !0, i._trigger('unselecting', e,
            {
              unselecting: s.element,
            }));
      }), t(e.target).parents().addBack().each(function() {
        var s, n = t.data(this, 'selectable-item');
        return n ? (s = !e.metaKey && !e.ctrlKey ||
            !n.$element.hasClass('ui-selected'), i._removeClass(n.$element,
            s ? 'ui-unselecting' : 'ui-selected').
            _addClass(n.$element, s
                ? 'ui-selecting'
                : 'ui-unselecting'), n.unselecting = !s, n.selecting = s, n.selected = s, s
            ? i._trigger('selecting', e, {
              selecting: n.element,
            })
            : i._trigger('unselecting', e, {
              unselecting: n.element,
            }), !1) : void 0;
      }));
    },
    _mouseDrag: function(e) {
      if (this.dragged = !0, !this.options.disabled) {
        var i, s = this,
            n = this.options,
            o = this.opos[0],
            a = this.opos[1],
            r = e.pageX,
            h = e.pageY;
        return o > r && (i = r, r = o, o = i), a > h &&
        (i = h, h = a, a = i), this.helper.css({
          left: o,
          top: a,
          width: r - o,
          height: h - a,
        }), this.selectees.each(function() {
          var i = t.data(this, 'selectable-item'),
              l = !1,
              c = {};
          i && i.element !== s.element[0] &&
          (c.left = i.left + s.elementPos.left, c.right = i.right +
              s.elementPos.left, c.top = i.top +
              s.elementPos.top, c.bottom = i.bottom +
              s.elementPos.top, 'touch' === n.tolerance ? l = !(c.left > r ||
              o > c.right || c.top > h || a > c.bottom) : 'fit' ===
              n.tolerance &&
              (l = c.left > o && r > c.right && c.top > a && h > c.bottom), l
              ? (i.selected && (s._removeClass(i.$element,
                  'ui-selected'), i.selected = !1), i.unselecting &&
              (s._removeClass(i.$element,
                  'ui-unselecting'), i.unselecting = !1), i.selecting ||
              (s._addClass(i.$element,
                  'ui-selecting'), i.selecting = !0, s._trigger('selecting', e,
                  {
                    selecting: i.element,
                  })))
              : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected
                  ? (s._removeClass(i.$element,
                      'ui-selecting'), i.selecting = !1, s._addClass(i.$element,
                      'ui-selected'), i.selected = !0)
                  : (s._removeClass(i.$element,
                      'ui-selecting'), i.selecting = !1, i.startselected &&
                  (s._addClass(i.$element,
                      'ui-unselecting'), i.unselecting = !0), s._trigger(
                      'unselecting', e, {
                        unselecting: i.element,
                      }))), i.selected &&
              (e.metaKey || e.ctrlKey || i.startselected ||
                  (s._removeClass(i.$element,
                      'ui-selected'), i.selected = !1, s._addClass(i.$element,
                      'ui-unselecting'), i.unselecting = !0, s._trigger(
                      'unselecting', e, {
                        unselecting: i.element,
                      })))));
        }), !1;
      }
    },
    _mouseStop: function(e) {
      var i = this;
      return this.dragged = !1, t('.ui-unselecting', this.element[0]).
          each(function() {
            var s = t.data(this, 'selectable-item');
            i._removeClass(s.$element,
                'ui-unselecting'), s.unselecting = !1, s.startselected = !1, i._trigger(
                'unselected', e, {
                  unselected: s.element,
                });
          }), t('.ui-selecting', this.element[0]).each(function() {
        var s = t.data(this, 'selectable-item');
        i._removeClass(s.$element, 'ui-selecting').
            _addClass(s.$element,
                'ui-selected'), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger(
            'selected', e, {
              selected: s.element,
            });
      }), this._trigger('stop', e), this.helper.remove(), !1;
    },
  }), t.widget('ui.selectmenu', [
    t.ui.formResetMixin, {
      version: '1.12.1',
      defaultElement: '<select>',
      options: {
        appendTo: null,
        classes: {
          'ui-selectmenu-button-open': 'ui-corner-top',
          'ui-selectmenu-button-closed': 'ui-corner-all',
        },
        disabled: null,
        icons: {
          button: 'ui-icon-triangle-1-s',
        },
        position: {
          my: 'left top',
          at: 'left bottom',
          collision: 'none',
        },
        width: !1,
        change: null,
        close: null,
        focus: null,
        open: null,
        select: null,
      },
      _create: function() {
        var e = this.element.uniqueId().attr('id');
        this.ids = {
          element: e,
          button: e + '-button',
          menu: e + '-menu',
        }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t();
      },
      _drawButton: function() {
        var e, i = this,
            s = this._parseOption(this.element.find('option:selected'),
                this.element[0].selectedIndex);
        this.labels = this.element.labels().
            attr('for', this.ids.button), this._on(this.labels, {
          click: function(t) {
            this.button.focus(), t.preventDefault();
          },
        }), this.element.hide(), this.button = t('<span>', {
          tabindex: this.options.disabled ? -1 : 0,
          id: this.ids.button,
          role: 'combobox',
          'aria-expanded': 'false',
          'aria-autocomplete': 'list',
          'aria-owns': this.ids.menu,
          'aria-haspopup': 'true',
          title: this.element.attr('title'),
        }).insertAfter(this.element), this._addClass(this.button,
            'ui-selectmenu-button ui-selectmenu-button-closed',
            'ui-button ui-widget'), e = t('<span>').
            appendTo(this.button), this._addClass(e, 'ui-selectmenu-icon',
            'ui-icon ' +
            this.options.icons.button), this.buttonItem = this._renderButtonItem(
            s).appendTo(this.button), this.options.width !== !1 &&
        this._resizeButton(), this._on(this.button,
            this._buttonEvents), this.button.one('focusin', function() {
          i._rendered || i._refreshMenu();
        });
      },
      _drawMenu: function() {
        var e = this;
        this.menu = t('<ul>', {
          'aria-hidden': 'true',
          'aria-labelledby': this.ids.button,
          id: this.ids.menu,
        }), this.menuWrap = t('<div>').append(this.menu), this._addClass(
            this.menuWrap, 'ui-selectmenu-menu',
            'ui-front'), this.menuWrap.appendTo(
            this._appendTo()), this.menuInstance = this.menu.menu({
          classes: {
            'ui-menu': 'ui-corner-bottom',
          },
          role: 'listbox',
          select: function(t, i) {
            t.preventDefault(), e._setSelection(), e._select(
                i.item.data('ui-selectmenu-item'), t);
          },
          focus: function(t, i) {
            var s = i.item.data('ui-selectmenu-item');
            null != e.focusIndex && s.index !== e.focusIndex &&
            (e._trigger('focus', t, {
              item: s,
            }), e.isOpen ||
            e._select(s, t)), e.focusIndex = s.index, e.button.attr(
                'aria-activedescendant', e.menuItems.eq(s.index).attr('id'));
          },
        }).menu('instance'), this.menuInstance._off(this.menu,
            'mouseleave'), this.menuInstance._closeOnDocumentClick = function() {
          return !1;
        }, this.menuInstance._isDivider = function() {
          return !1;
        };
      },
      refresh: function() {
        this._refreshMenu(), this.buttonItem.replaceWith(
            this.buttonItem = this._renderButtonItem(
                this._getSelectedItem().data('ui-selectmenu-item') ||
                {})), null === this.options.width && this._resizeButton();
      },
      _refreshMenu: function() {
        var t, e = this.element.find('option');
        this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu,
            this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find(
            'li').
            not('.ui-selectmenu-optgroup').
            find('.ui-menu-item-wrapper'), this._rendered = !0, e.length &&
        (t = this._getSelectedItem(), this.menuInstance.focus(null,
            t), this._setAria(t.data('ui-selectmenu-item')), this._setOption(
            'disabled', this.element.prop('disabled')));
      },
      open: function(t) {
        this.options.disabled || (this._rendered
            ? (this._removeClass(this.menu.find('.ui-state-active'), null,
                'ui-state-active'), this.menuInstance.focus(null,
                this._getSelectedItem()))
            : this._refreshMenu(), this.menuItems.length &&
        (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(
            this.document, this._documentClick), this._trigger('open', t)));
      },
      _position: function() {
        this.menuWrap.position(t.extend({
          of: this.button,
        }, this.options.position));
      },
      close: function(t) {
        this.isOpen &&
        (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(
            this.document), this._trigger('close', t));
      },
      widget: function() {
        return this.button;
      },
      menuWidget: function() {
        return this.menu;
      },
      _renderButtonItem: function(e) {
        var i = t('<span>');
        return this._setText(i, e.label), this._addClass(i,
            'ui-selectmenu-text'), i;
      },
      _renderMenu: function(e, i) {
        var s = this,
            n = '';
        t.each(i, function(i, o) {
          var a;
          o.optgroup !== n && (a = t('<li>', {
            text: o.optgroup,
          }), s._addClass(a, 'ui-selectmenu-optgroup', 'ui-menu-divider' +
              (o.element.parent('optgroup').prop('disabled')
                  ? ' ui-state-disabled'
                  : '')), a.appendTo(e), n = o.optgroup), s._renderItemData(e,
              o);
        });
      },
      _renderItemData: function(t, e) {
        return this._renderItem(t, e).data('ui-selectmenu-item', e);
      },
      _renderItem: function(e, i) {
        var s = t('<li>'),
            n = t('<div>', {
              title: i.element.attr('title'),
            });
        return i.disabled &&
        this._addClass(s, null, 'ui-state-disabled'), this._setText(n,
            i.label), s.append(n).appendTo(e);
      },
      _setText: function(t, e) {
        e ? t.text(e) : t.html('&#160;');
      },
      _move: function(t, e) {
        var i, s, n = '.ui-menu-item';
        this.isOpen
            ? i = this.menuItems.eq(this.focusIndex).parent('li')
            : (i = this.menuItems.eq(this.element[0].selectedIndex).
                parent('li'), n += ':not(.ui-state-disabled)'), s = 'first' === t ||
        'last' === t
            ? i['first' === t ? 'prevAll' : 'nextAll'](n).eq(-1)
            : i[t + 'All'](n).eq(0), s.length && this.menuInstance.focus(e, s);
      },
      _getSelectedItem: function() {
        return this.menuItems.eq(this.element[0].selectedIndex).parent('li');
      },
      _toggle: function(t) {
        this[this.isOpen ? 'close' : 'open'](t);
      },
      _setSelection: function() {
        var t;
        this.range && (window.getSelection
            ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(
                this.range))
            : this.range.select(), this.button.focus());
      },
      _documentClick: {
        mousedown: function(e) {
          this.isOpen && (t(e.target).
                  closest('.ui-selectmenu-menu, #' +
                      t.ui.escapeSelector(this.ids.button)).length ||
              this.close(e));
        },
      },
      _buttonEvents: {
        mousedown: function() {
          var t;
          window.getSelection
              ? (t = window.getSelection(), t.rangeCount &&
              (this.range = t.getRangeAt(0)))
              : this.range = document.selection.createRange();
        },
        click: function(t) {
          this._setSelection(), this._toggle(t);
        },
        keydown: function(e) {
          var i = !0;
          switch (e.keyCode) {
            case t.ui.keyCode.TAB:
            case t.ui.keyCode.ESCAPE:
              this.close(e), i = !1;
              break;
            case t.ui.keyCode.ENTER:
              this.isOpen && this._selectFocusedItem(e);
              break;
            case t.ui.keyCode.UP:
              e.altKey ? this._toggle(e) : this._move('prev', e);
              break;
            case t.ui.keyCode.DOWN:
              e.altKey ? this._toggle(e) : this._move('next', e);
              break;
            case t.ui.keyCode.SPACE:
              this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
              break;
            case t.ui.keyCode.LEFT:
              this._move('prev', e);
              break;
            case t.ui.keyCode.RIGHT:
              this._move('next', e);
              break;
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.PAGE_UP:
              this._move('first', e);
              break;
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_DOWN:
              this._move('last', e);
              break;
            default:
              this.menu.trigger(e), i = !1;
          }
          i && e.preventDefault();
        },
      },
      _selectFocusedItem: function(t) {
        var e = this.menuItems.eq(this.focusIndex).parent('li');
        e.hasClass('ui-state-disabled') ||
        this._select(e.data('ui-selectmenu-item'), t);
      },
      _select: function(t, e) {
        var i = this.element[0].selectedIndex;
        this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(
            this.buttonItem = this._renderButtonItem(t)), this._setAria(
            t), this._trigger('select', e, {
          item: t,
        }), t.index !== i && this._trigger('change', e, {
          item: t,
        }), this.close(e);
      },
      _setAria: function(t) {
        var e = this.menuItems.eq(t.index).attr('id');
        this.button.attr({
          'aria-labelledby': e,
          'aria-activedescendant': e,
        }), this.menu.attr('aria-activedescendant', e);
      },
      _setOption: function(t, e) {
        if ('icons' === t) {
          var i = this.button.find('span.ui-icon');
          this._removeClass(i, null, this.options.icons.button).
              _addClass(i, null, e.button);
        }
        this._super(t, e), 'appendTo' === t &&
        this.menuWrap.appendTo(this._appendTo()), 'width' === t &&
        this._resizeButton();
      },
      _setOptionDisabled: function(t) {
        this._super(t), this.menuInstance.option('disabled',
            t), this.button.attr('aria-disabled', t), this._toggleClass(
            this.button, null, 'ui-state-disabled', t), this.element.prop(
            'disabled', t), t
            ? (this.button.attr('tabindex', -1), this.close())
            : this.button.attr('tabindex', 0);
      },
      _appendTo: function() {
        var e = this.options.appendTo;
        return e &&
        (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e &&
        e[0] || (e = this.element.closest('.ui-front, dialog')), e.length ||
        (e = this.document[0].body), e;
      },
      _toggleAttr: function() {
        this.button.attr('aria-expanded', this.isOpen), this._removeClass(
            this.button,
            'ui-selectmenu-button-' + (this.isOpen ? 'closed' : 'open')).
            _addClass(this.button,
                'ui-selectmenu-button-' + (this.isOpen ? 'open' : 'closed')).
            _toggleClass(this.menuWrap, 'ui-selectmenu-open', null,
                this.isOpen), this.menu.attr('aria-hidden', !this.isOpen);
      },
      _resizeButton: function() {
        var t = this.options.width;
        return t === !1 ? (this.button.css('width', ''), void 0) : (null ===
        t && (t = this.element.show().
            outerWidth(), this.element.hide()), this.button.outerWidth(
            t), void 0);
      },
      _resizeMenu: function() {
        this.menu.outerWidth(Math.max(this.button.outerWidth(),
            this.menu.width('').outerWidth() + 1));
      },
      _getCreateOptions: function() {
        var t = this._super();
        return t.disabled = this.element.prop('disabled'), t;
      },
      _parseOptions: function(e) {
        var i = this,
            s = [];
        e.each(function(e, n) {
          s.push(i._parseOption(t(n), e));
        }), this.items = s;
      },
      _parseOption: function(t, e) {
        var i = t.parent('optgroup');
        return {
          element: t,
          index: e,
          value: t.val(),
          label: t.text(),
          optgroup: i.attr('label') || '',
          disabled: i.prop('disabled') || t.prop('disabled'),
        };
      },
      _destroy: function() {
        this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr(
            'for', this.ids.element);
      },
    }]), t.widget('ui.slider', t.ui.mouse, {
    version: '1.12.1',
    widgetEventPrefix: 'slide',
    options: {
      animate: !1,
      classes: {
        'ui-slider': 'ui-corner-all',
        'ui-slider-handle': 'ui-corner-all',
        'ui-slider-range': 'ui-corner-all ui-widget-header',
      },
      distance: 0,
      max: 100,
      min: 0,
      orientation: 'horizontal',
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null,
    },
    numPages: 5,
    _create: function() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass(
          'ui-slider ui-slider-' + this.orientation,
          'ui-widget ui-widget-content'), this._refresh(), this._animateOff = !1;
    },
    _refresh: function() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    },
    _createHandles: function() {
      var e, i, s = this.options,
          n = this.element.find('.ui-slider-handle'),
          o = '<span tabindex=\'0\'></span>',
          a = [];
      for (i = s.values && s.values.length || 1, n.length > i &&
      (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i >
      e; e++) a.push(o);
      this.handles = n.add(
          t(a.join('')).appendTo(this.element)), this._addClass(this.handles,
          'ui-slider-handle',
          'ui-state-default'), this.handle = this.handles.eq(
          0), this.handles.each(function(e) {
        t(this).data('ui-slider-handle-index', e).attr('tabIndex', 0);
      });
    },
    _createRange: function() {
      var e = this.options;
      e.range
          ? (e.range === !0 && (e.values
          ? e.values.length && 2 !== e.values.length
              ? e.values = [e.values[0], e.values[0]]
              : t.isArray(e.values) && (e.values = e.values.slice(0))
          : e.values = [this._valueMin(), this._valueMin()]), this.range &&
          this.range.length ? (this._removeClass(this.range,
          'ui-slider-range-min ui-slider-range-max'), this.range.css({
            left: '',
            bottom: '',
          })) : (this.range = t('<div>').appendTo(this.element), this._addClass(
          this.range, 'ui-slider-range')), ('min' === e.range || 'max' ===
          e.range) && this._addClass(this.range, 'ui-slider-range-' + e.range))
          : (this.range && this.range.remove(), this.range = null);
    },
    _setupEvents: function() {
      this._off(this.handles), this._on(this.handles,
          this._handleEvents), this._hoverable(this.handles), this._focusable(
          this.handles);
    },
    _destroy: function() {
      this.handles.remove(), this.range &&
      this.range.remove(), this._mouseDestroy();
    },
    _mouseCapture: function(e) {
      var i, s, n, o, a, r, h, l, c = this,
          u = this.options;
      return u.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
      }, this.elementOffset = this.element.offset(), i = {
        x: e.pageX,
        y: e.pageY,
      }, s = this._normValueFromMouse(i), n = this._valueMax() -
          this._valueMin() + 1, this.handles.each(function(e) {
        var i = Math.abs(s - c.values(e));
        (n > i || n === i &&
            (e === c._lastChangedValue || c.values(e) === u.min)) &&
        (n = i, o = t(this), a = e);
      }), r = this._start(e, a), r === !1
          ? !1
          : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o,
              null, 'ui-state-active'), o.trigger(
              'focus'), h = o.offset(), l = !t(e.target).
              parents().
              addBack().
              is('.ui-slider-handle'), this._clickOffset = l ? {
            left: 0,
            top: 0,
          } : {
            left: e.pageX - h.left - o.width() / 2,
            top: e.pageY - h.top - o.height() / 2 -
                (parseInt(o.css('borderTopWidth'), 10) || 0) -
                (parseInt(o.css('borderBottomWidth'), 10) || 0) +
                (parseInt(o.css('marginTop'), 10) || 0),
          }, this.handles.hasClass('ui-state-hover') ||
          this._slide(e, a, s), this._animateOff = !0, !0));
    },
    _mouseStart: function() {
      return !0;
    },
    _mouseDrag: function(t) {
      var e = {
            x: t.pageX,
            y: t.pageY,
          },
          i = this._normValueFromMouse(e);
      return this._slide(t, this._handleIndex, i), !1;
    },
    _mouseStop: function(t) {
      return this._removeClass(this.handles, null,
          'ui-state-active'), this._mouseSliding = !1, this._stop(t,
          this._handleIndex), this._change(t,
          this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
    },
    _detectOrientation: function() {
      this.orientation = 'vertical' === this.options.orientation
          ? 'vertical'
          : 'horizontal';
    },
    _normValueFromMouse: function(t) {
      var e, i, s, n, o;
      return 'horizontal' === this.orientation
          ? (e = this.elementSize.width, i = t.x - this.elementOffset.left -
              (this._clickOffset ? this._clickOffset.left : 0))
          : (e = this.elementSize.height, i = t.y - this.elementOffset.top -
              (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s >
      1 && (s = 1), 0 > s && (s = 0), 'vertical' === this.orientation &&
      (s = 1 - s), n = this._valueMax() -
          this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(
          o);
    },
    _uiHash: function(t, e, i) {
      var s = {
        handle: this.handles[t],
        handleIndex: t,
        value: void 0 !== e ? e : this.value(),
      };
      return this._hasMultipleValues() &&
      (s.value = void 0 !== e ? e : this.values(t), s.values = i ||
          this.values()), s;
    },
    _hasMultipleValues: function() {
      return this.options.values && this.options.values.length;
    },
    _start: function(t, e) {
      return this._trigger('start', t, this._uiHash(e));
    },
    _slide: function(t, e, i) {
      var s, n, o = this.value(),
          a = this.values();
      this._hasMultipleValues() &&
      (n = this.values(e ? 0 : 1), o = this.values(e), 2 ===
      this.options.values.length && this.options.range === !0 &&
      (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o &&
      (s = this._trigger('slide', t, this._uiHash(e, i, a)), s !== !1 &&
      (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
    },
    _stop: function(t, e) {
      this._trigger('stop', t, this._uiHash(e));
    },
    _change: function(t, e) {
      this._keySliding || this._mouseSliding ||
      (this._lastChangedValue = e, this._trigger('change', t, this._uiHash(e)));
    },
    value: function(t) {
      return arguments.length
          ? (this.options.value = this._trimAlignValue(
              t), this._refreshValue(), this._change(null, 0), void 0)
          : this._value();
    },
    values: function(e, i) {
      var s, n, o;
      if (arguments.length >
          1) return this.options.values[e] = this._trimAlignValue(
          i), this._refreshValue(), this._change(null, e), void 0;
      if (!arguments.length) return this._values();
      if (!t.isArray(arguments[0])) return this._hasMultipleValues()
          ? this._values(e)
          : this.value();
      for (s = this.options.values, n = arguments[0], o = 0; s.length >
      o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
      this._refreshValue();
    },
    _setOption: function(e, i) {
      var s, n = 0;
      switch ('range' === e && this.options.range === !0 &&
      ('min' === i ? (this.options.value = this._values(
          0), this.options.values = null) : 'max' === i &&
          (this.options.value = this._values(this.options.values.length -
              1), this.options.values = null)), t.isArray(
          this.options.values) && (n = this.options.values.length), this._super(
          e, i), e) {
        case 'orientation':
          this._detectOrientation(), this._removeClass(
              'ui-slider-horizontal ui-slider-vertical').
              _addClass('ui-slider-' +
                  this.orientation), this._refreshValue(), this.options.range &&
          this._refreshRange(i), this.handles.css(
              'horizontal' === i ? 'bottom' : 'left', '');
          break;
        case 'value':
          this._animateOff = !0, this._refreshValue(), this._change(null,
              0), this._animateOff = !1;
          break;
        case 'values':
          for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >=
          0; s--) this._change(null, s);
          this._animateOff = !1;
          break;
        case 'step':
        case 'min':
        case 'max':
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;
        case 'range':
          this._animateOff = !0, this._refresh(), this._animateOff = !1;
      }
    },
    _setOptionDisabled: function(t) {
      this._super(t), this._toggleClass(null, 'ui-state-disabled', !!t);
    },
    _value: function() {
      var t = this.options.value;
      return t = this._trimAlignValue(t);
    },
    _values: function(t) {
      var e, i, s;
      if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(
          e);
      if (this._hasMultipleValues()) {
        for (i = this.options.values.slice(), s = 0; i.length >
        s; s += 1) i[s] = this._trimAlignValue(i[s]);
        return i;
      }
      return [];
    },
    _trimAlignValue: function(t) {
      if (this._valueMin() >= t) return this._valueMin();
      if (t >= this._valueMax()) return this._valueMax();
      var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;
      return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(
          s.toFixed(5));
    },
    _calculateNewMax: function() {
      var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step,
          s = Math.round((t - e) / i) * i;
      t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(
          t.toFixed(this._precision()));
    },
    _precision: function() {
      var t = this._precisionOf(this.options.step);
      return null !== this.options.min &&
      (t = Math.max(t, this._precisionOf(this.options.min))), t;
    },
    _precisionOf: function(t) {
      var e = '' + t,
          i = e.indexOf('.');
      return -1 === i ? 0 : e.length - i - 1;
    },
    _valueMin: function() {
      return this.options.min;
    },
    _valueMax: function() {
      return this.max;
    },
    _refreshRange: function(t) {
      'vertical' === t && this.range.css({
        width: '',
        left: '',
      }), 'horizontal' === t && this.range.css({
        height: '',
        bottom: '',
      });
    },
    _refreshValue: function() {
      var e, i, s, n, o, a = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          c = {};
      this._hasMultipleValues()
          ? this.handles.each(function(s) {
            i = 100 * ((h.values(s) - h._valueMin()) /
                (h._valueMax() - h._valueMin())), c['horizontal' === h.orientation
                ? 'left'
                : 'bottom'] = i + '%', t(this).stop(1, 1)[l ? 'animate' : 'css'](c,
                r.animate), h.options.range === !0 &&
            ('horizontal' === h.orientation ? (0 === s &&
            h.range.stop(1, 1)[l ? 'animate' : 'css']({
              left: i + '%',
            }, r.animate), 1 === s && h.range[l ? 'animate' : 'css']({
              width: i - e + '%',
            }, {
              queue: !1,
              duration: r.animate,
            })) : (0 === s && h.range.stop(1, 1)[l ? 'animate' : 'css']({
              bottom: i + '%',
            }, r.animate), 1 === s && h.range[l ? 'animate' : 'css']({
              height: i - e + '%',
            }, {
              queue: !1,
              duration: r.animate,
            }))), e = i;
          })
          : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !==
          n ? 100 * ((s - n) / (o - n)) : 0, c['horizontal' === this.orientation
          ? 'left'
          : 'bottom'] = i + '%', this.handle.stop(1, 1)[l ? 'animate' : 'css'](
          c, r.animate), 'min' === a && 'horizontal' === this.orientation &&
          this.range.stop(1, 1)[l ? 'animate' : 'css']({
            width: i + '%',
          }, r.animate), 'max' === a && 'horizontal' === this.orientation &&
          this.range.stop(1, 1)[l ? 'animate' : 'css']({
            width: 100 - i + '%',
          }, r.animate), 'min' === a && 'vertical' === this.orientation &&
          this.range.stop(1, 1)[l ? 'animate' : 'css']({
            height: i + '%',
          }, r.animate), 'max' === a && 'vertical' === this.orientation &&
          this.range.stop(1, 1)[l ? 'animate' : 'css']({
            height: 100 - i + '%',
          }, r.animate));
    },
    _handleEvents: {
      keydown: function(e) {
        var i, s, n, o, a = t(e.target).data('ui-slider-handle-index');
        switch (e.keyCode) {
          case t.ui.keyCode.HOME:
          case t.ui.keyCode.END:
          case t.ui.keyCode.PAGE_UP:
          case t.ui.keyCode.PAGE_DOWN:
          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (e.preventDefault(), !this._keySliding &&
            (this._keySliding = !0, this._addClass(t(e.target), null,
                'ui-state-active'), i = this._start(e, a), i === !1)) return;
        }
        switch (o = this.options.step, s = n = this._hasMultipleValues()
            ? this.values(a)
            : this.value(), e.keyCode) {
          case t.ui.keyCode.HOME:
            n = this._valueMin();
            break;
          case t.ui.keyCode.END:
            n = this._valueMax();
            break;
          case t.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(
                s + (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case t.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(
                s - (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;
            n = this._trimAlignValue(s + o);
            break;
          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;
            n = this._trimAlignValue(s - o);
        }
        this._slide(e, a, n);
      },
      keyup: function(e) {
        var i = t(e.target).data('ui-slider-handle-index');
        this._keySliding &&
        (this._keySliding = !1, this._stop(e, i), this._change(e,
            i), this._removeClass(t(e.target), null, 'ui-state-active'));
      },
    },
  }), t.widget('ui.sortable', t.ui.mouse, {
    version: '1.12.1',
    widgetEventPrefix: 'sort',
    ready: !1,
    options: {
      appendTo: 'parent',
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: 'auto',
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: 'original',
      items: '> *',
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: 'default',
      tolerance: 'intersect',
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null,
    },
    _isOverAxis: function(t, e, i) {
      return t >= e && e + i > t;
    },
    _isFloating: function(t) {
      return /left|right/.test(t.css('float')) ||
          /inline|table-cell/.test(t.css('display'));
    },
    _create: function() {
      this.containerCache = {}, this._addClass(
          'ui-sortable'), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0;
    },
    _setOption: function(t, e) {
      this._super(t, e), 'handle' === t && this._setHandleClassName();
    },
    _setHandleClassName: function() {
      var e = this;
      this._removeClass(this.element.find('.ui-sortable-handle'),
          'ui-sortable-handle'), t.each(this.items, function() {
        e._addClass(this.instance.options.handle ? this.item.find(
            this.instance.options.handle) : this.item, 'ui-sortable-handle');
      });
    },
    _destroy: function() {
      this._mouseDestroy();
      for (var t = this.items.length - 1; t >=
      0; t--) this.items[t].item.removeData(this.widgetName + '-item');
      return this;
    },
    _mouseCapture: function(e, i) {
      var s = null,
          n = !1,
          o = this;
      return this.reverting ? !1 : this.options.disabled || 'static' ===
      this.options.type ? !1 : (this._refreshItems(e), t(e.target).
          parents().
          each(function() {
            return t.data(this, o.widgetName + '-item') === o ? (s = t(
                this), !1) : void 0;
          }), t.data(e.target, o.widgetName + '-item') === o &&
      (s = t(e.target)), s
          ? !this.options.handle || i ||
          (t(this.options.handle, s).find('*').addBack().each(function() {
            this === e.target && (n = !0);
          }), n)
              ? (this.currentItem = s, this._removeCurrentsFromItems(), !0)
              : !1
          : !1);
    },
    _mouseStart: function(e, i, s) {
      var n, o, a = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(
          e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left,
      }, t.extend(this.offset, {
        click: {
          left: e.pageX - this.offset.left,
          top: e.pageY - this.offset.top,
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset(),
      }), this.helper.css('position',
          'absolute'), this.cssPosition = this.helper.css(
          'position'), this.originalPosition = this._generatePosition(
          e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt &&
      this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0],
      }, this.helper[0] !== this.currentItem[0] &&
      this.currentItem.hide(), this._createPlaceholder(), a.containment &&
      this._setContainment(), a.cursor && 'auto' !== a.cursor &&
      (o = this.document.find('body'), this.storedCursor = o.css(
          'cursor'), o.css('cursor', a.cursor), this.storedStylesheet = t(
          '<style>*{ cursor: ' + a.cursor + ' !important; }</style>').
          appendTo(o)), a.opacity && (this.helper.css('opacity') &&
      (this._storedOpacity = this.helper.css('opacity')), this.helper.css(
          'opacity', a.opacity)), a.zIndex && (this.helper.css('zIndex') &&
      (this._storedZIndex = this.helper.css('zIndex')), this.helper.css(
          'zIndex', a.zIndex)), this.scrollParent[0] !== this.document[0] &&
      'HTML' !== this.scrollParent[0].tagName &&
      (this.overflowOffset = this.scrollParent.offset()), this._trigger('start',
          e, this._uiHash()), this._preserveHelperProportions ||
      this._cacheHelperProportions(), !s)
        for (n = this.containers.length - 1; n >=
        0; n--) this.containers[n]._trigger('activate', e, this._uiHash(this));
      return t.ui.ddmanager &&
      (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour &&
      t.ui.ddmanager.prepareOffsets(this,
          e), this.dragging = !0, this._addClass(this.helper,
          'ui-sortable-helper'), this._mouseDrag(e), !0;
    },
    _mouseDrag: function(e) {
      var i, s, n, o, a = this.options,
          r = !1;
      for (this.position = this._generatePosition(
          e), this.positionAbs = this._convertPositionTo(
          'absolute'), this.lastPositionAbs ||
      (this.lastPositionAbs = this.positionAbs), this.options.scroll &&
      (this.scrollParent[0] !== this.document[0] && 'HTML' !==
      this.scrollParent[0].tagName ? (this.overflowOffset.top +
      this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity
          ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop +
              a.scrollSpeed
          : e.pageY - this.overflowOffset.top < a.scrollSensitivity &&
          (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop -
              a.scrollSpeed), this.overflowOffset.left +
      this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity
          ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft +
              a.scrollSpeed
          : e.pageX - this.overflowOffset.left < a.scrollSensitivity &&
          (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft -
              a.scrollSpeed)) : (e.pageY - this.document.scrollTop() <
      a.scrollSensitivity ? r = this.document.scrollTop(
          this.document.scrollTop() - a.scrollSpeed) : this.window.height() -
          (e.pageY - this.document.scrollTop()) < a.scrollSensitivity &&
          (r = this.document.scrollTop(
              this.document.scrollTop() + a.scrollSpeed)), e.pageX -
      this.document.scrollLeft() < a.scrollSensitivity
          ? r = this.document.scrollLeft(
              this.document.scrollLeft() - a.scrollSpeed)
          : this.window.width() - (e.pageX - this.document.scrollLeft()) <
          a.scrollSensitivity && (r = this.document.scrollLeft(
              this.document.scrollLeft() + a.scrollSpeed))), r !== !1 &&
      t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this,
          e)), this.positionAbs = this._convertPositionTo(
          'absolute'), this.options.axis && 'y' === this.options.axis ||
      (this.helper[0].style.left = this.position.left +
          'px'), this.options.axis && 'x' === this.options.axis ||
      (this.helper[0].style.top = this.position.top +
          'px'), i = this.items.length - 1; i >= 0; i--)
        if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(
            s), o && s.instance === this.currentContainer && n !==
        this.currentItem[0] &&
        this.placeholder[1 === o ? 'next' : 'prev']()[0] !== n &&
        !t.contains(this.placeholder[0], n) &&
        ('semi-dynamic' === this.options.type
            ? !t.contains(this.element[0], n)
            : !0)) {
          if (this.direction = 1 === o ? 'down' : 'up', 'pointer' !==
          this.options.tolerance && !this._intersectsWithSides(s)) break;
          this._rearrange(e, s), this._trigger('change', e, this._uiHash());
          break;
        }
      return this._contactContainers(e), t.ui.ddmanager &&
      t.ui.ddmanager.drag(this, e), this._trigger('sort', e,
          this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
    },
    _mouseStop: function(e, i) {
      if (e) {
        if (t.ui.ddmanager && !this.options.dropBehaviour &&
        t.ui.ddmanager.drop(this, e), this.options.revert) {
          var s = this,
              n = this.placeholder.offset(),
              o = this.options.axis,
              a = {};
          o && 'x' !== o ||
          (a.left = n.left - this.offset.parent.left - this.margins.left +
              (this.offsetParent[0] === this.document[0].body
                  ? 0
                  : this.offsetParent[0].scrollLeft)), o && 'y' !== o ||
          (a.top = n.top - this.offset.parent.top - this.margins.top +
              (this.offsetParent[0] === this.document[0].body
                  ? 0
                  : this.offsetParent[0].scrollTop)), this.reverting = !0, t(
              this.helper).
              animate(a, parseInt(this.options.revert, 10) || 500, function() {
                s._clear(e);
              });
        } else this._clear(e, i);
        return !1;
      }
    },
    cancel: function() {
      if (this.dragging) {
        this._mouseUp(new t.Event('mouseup', {
          target: null,
        })), 'original' === this.options.helper ? (this.currentItem.css(
            this._storedCSS), this._removeClass(this.currentItem,
            'ui-sortable-helper')) : this.currentItem.show();
        for (var e = this.containers.length - 1; e >=
        0; e--) this.containers[e]._trigger('deactivate', null,
            this._uiHash(this)), this.containers[e].containerCache.over &&
        (this.containers[e]._trigger('out', null,
            this._uiHash(this)), this.containers[e].containerCache.over = 0);
      }
      return this.placeholder && (this.placeholder[0].parentNode &&
      this.placeholder[0].parentNode.removeChild(
          this.placeholder[0]), 'original' !== this.options.helper &&
      this.helper && this.helper[0].parentNode &&
      this.helper.remove(), t.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null,
      }), this.domPosition.prev ? t(this.domPosition.prev).
          after(this.currentItem) : t(this.domPosition.parent).
          prepend(this.currentItem)), this;
    },
    serialize: function(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
          s = [];
      return e = e || {}, t(i).each(function() {
        var i = (t(e.item || this).attr(e.attribute || 'id') || '').match(
            e.expression || /(.+)[\-=_](.+)/);
        i && s.push((e.key || i[1] + '[]') + '=' +
            (e.key && e.expression ? i[1] : i[2]));
      }), !s.length && e.key && s.push(e.key + '='), s.join('&');
    },
    toArray: function(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
          s = [];
      return e = e || {}, i.each(function() {
        s.push(t(e.item || this).attr(e.attribute || 'id') || '');
      }), s;
    },
    _intersectsWith: function(t) {
      var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          h = r + t.height,
          l = this.offset.click.top,
          c = this.offset.click.left,
          u = 'x' === this.options.axis || s + l > r && h > s + l,
          d = 'y' === this.options.axis || e + c > o && a > e + c,
          p = u && d;
      return 'pointer' === this.options.tolerance ||
      this.options.forcePointerForContainers || 'pointer' !==
      this.options.tolerance &&
      this.helperProportions[this.floating ? 'width' : 'height'] >
      t[this.floating ? 'width' : 'height'] ? p : e +
          this.helperProportions.width / 2 > o && a > i -
          this.helperProportions.width / 2 && s +
          this.helperProportions.height / 2 > r && h > n -
          this.helperProportions.height / 2;
    },
    _intersectsWithPointer: function(t) {
      var e, i, s = 'x' === this.options.axis ||
          this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top,
              t.height),
          n = 'y' === this.options.axis ||
              this._isOverAxis(this.positionAbs.left + this.offset.click.left,
                  t.left, t.width),
          o = s && n;
      return o
          ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating
              ? 'right' === i || 'down' === e ? 2 : 1
              : e && ('down' === e ? 2 : 1))
          : !1;
    },
    _intersectsWithSides: function(t) {
      var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top,
          t.top + t.height / 2, t.height),
          i = this._isOverAxis(this.positionAbs.left + this.offset.click.left,
              t.left + t.width / 2, t.width),
          s = this._getDragVerticalDirection(),
          n = this._getDragHorizontalDirection();
      return this.floating && n
          ? 'right' === n && i || 'left' === n && !i
          : s && ('down' === s && e || 'up' === s && !e);
    },
    _getDragVerticalDirection: function() {
      var t = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== t && (t > 0 ? 'down' : 'up');
    },
    _getDragHorizontalDirection: function() {
      var t = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== t && (t > 0 ? 'right' : 'left');
    },
    refresh: function(t) {
      return this._refreshItems(
          t), this._setHandleClassName(), this.refreshPositions(), this;
    },
    _connectWith: function() {
      var t = this.options;
      return t.connectWith.constructor === String
          ? [t.connectWith]
          : t.connectWith;
    },
    _getItemsAsjQuery: function(e) {
      function i() {
        r.push(this);
      }

      var s, n, o, a, r = [],
          h = [],
          l = this._connectWith();
      if (l && e)
        for (s = l.length - 1; s >= 0; s--)
          for (o = t(l[s], this.document[0]), n = o.length - 1; n >=
          0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this &&
          !a.options.disabled && h.push([
            t.isFunction(a.options.items)
                ? a.options.items.call(a.element)
                : t(a.options.items, a.element).
                    not('.ui-sortable-helper').
                    not('.ui-sortable-placeholder'), a]);
      for (h.push([
        t.isFunction(this.options.items) ? this.options.items.call(this.element,
            null, {
              options: this.options,
              item: this.currentItem,
            }) : t(this.options.items, this.element).
            not('.ui-sortable-helper').
            not('.ui-sortable-placeholder'), this]), s = h.length - 1; s >=
      0; s--) h[s][0].each(i);
      return t(r);
    },
    _removeCurrentsFromItems: function() {
      var e = this.currentItem.find(':data(' + this.widgetName + '-item)');
      this.items = t.grep(this.items, function(t) {
        for (var i = 0; e.length > i; i++)
          if (e[i] === t.item[0]) return !1;
        return !0;
      });
    },
    _refreshItems: function(e) {
      this.items = [], this.containers = [this];
      var i, s, n, o, a, r, h, l, c = this.items,
          u = [
            [
              t.isFunction(this.options.items) ? this.options.items.call(
                  this.element[0], e, {
                    item: this.currentItem,
                  }) : t(this.options.items, this.element), this],
          ],
          d = this._connectWith();
      if (d && this.ready)
        for (i = d.length - 1; i >= 0; i--)
          for (n = t(d[i], this.document[0]), s = n.length - 1; s >=
          0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this &&
          !o.options.disabled && (u.push([
            t.isFunction(o.options.items) ? o.options.items.call(o.element[0],
                e, {
                  item: this.currentItem,
                }) : t(o.options.items, o.element), o]), this.containers.push(
              o));
      for (i = u.length - 1; i >= 0; i--)
        for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(
            r[s]), h.data(this.widgetName + '-item', a), c.push({
          item: h,
          instance: a,
          width: 0,
          height: 0,
          left: 0,
          top: 0,
        });
    },
    refreshPositions: function(e) {
      this.floating = this.items.length ? 'x' === this.options.axis ||
          this._isFloating(this.items[0].item) : !1, this.offsetParent &&
      this.helper && (this.offset.parent = this._getParentOffset());
      var i, s, n, o;
      for (i = this.items.length - 1; i >=
      0; i--) s = this.items[i], s.instance !== this.currentContainer &&
      this.currentContainer && s.item[0] !== this.currentItem[0] ||
      (n = this.options.toleranceElement ? t(this.options.toleranceElement,
          s.item) : s.item, e ||
      (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
      if (this.options.custom &&
          this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(
          this);
      else
        for (i = this.containers.length - 1; i >=
        0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      return this;
    },
    _createPlaceholder: function(e) {
      e = e || this;
      var i, s = e.options;
      s.placeholder && s.placeholder.constructor !== String ||
      (i = s.placeholder, s.placeholder = {
        element: function() {
          var s = e.currentItem[0].nodeName.toLowerCase(),
              n = t('<' + s + '>', e.document[0]);
          return e._addClass(n, 'ui-sortable-placeholder',
              i || e.currentItem[0].className).
              _removeClass(n, 'ui-sortable-helper'), 'tbody' === s
              ? e._createTrPlaceholder(e.currentItem.find('tr').eq(0),
                  t('<tr>', e.document[0]).appendTo(n))
              : 'tr' === s
                  ? e._createTrPlaceholder(e.currentItem, n)
                  : 'img' === s &&
                  n.attr('src', e.currentItem.attr('src')), i ||
          n.css('visibility', 'hidden'), n;
        },
        update: function(t, n) {
          (!i || s.forcePlaceholderSize) && (n.height() || n.height(
              e.currentItem.innerHeight() -
              parseInt(e.currentItem.css('paddingTop') || 0, 10) -
              parseInt(e.currentItem.css('paddingBottom') || 0,
                  10)), n.width() || n.width(e.currentItem.innerWidth() -
              parseInt(e.currentItem.css('paddingLeft') || 0, 10) -
              parseInt(e.currentItem.css('paddingRight') || 0, 10)));
        },
      }), e.placeholder = t(s.placeholder.element.call(e.element,
          e.currentItem)), e.currentItem.after(
          e.placeholder), s.placeholder.update(e, e.placeholder);
    },
    _createTrPlaceholder: function(e, i) {
      var s = this;
      e.children().each(function() {
        t('<td>&#160;</td>', s.document[0]).
            attr('colspan', t(this).attr('colspan') || 1).
            appendTo(i);
      });
    },
    _contactContainers: function(e) {
      var i, s, n, o, a, r, h, l, c, u, d = null,
          p = null;
      for (i = this.containers.length - 1; i >= 0; i--)
        if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
          if (this._intersectsWith(this.containers[i].containerCache)) {
            if (d && t.contains(this.containers[i].element[0],
                d.element[0])) continue;
            d = this.containers[i], p = i;
          } else this.containers[i].containerCache.over &&
          (this.containers[i]._trigger('out', e,
              this._uiHash(this)), this.containers[i].containerCache.over = 0);
      if (d)
        if (1 ===
            this.containers.length) this.containers[p].containerCache.over ||
        (this.containers[p]._trigger('over', e,
            this._uiHash(this)), this.containers[p].containerCache.over = 1);
        else {
          for (n = 1e4, o = null, c = d.floating ||
              this._isFloating(this.currentItem), a = c ? 'left' : 'top', r = c
              ? 'width'
              : 'height', u = c ? 'pageX' : 'pageY', s = this.items.length -
              1; s >= 0; s--) t.contains(this.containers[p].element[0],
              this.items[s].item[0]) && this.items[s].item[0] !==
          this.currentItem[0] &&
          (h = this.items[s].item.offset()[a], l = !1, e[u] - h >
          this.items[s][r] / 2 && (l = !0), n > Math.abs(e[u] - h) &&
          (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l
              ? 'up'
              : 'down'));
          if (!o && !this.options.dropOnEmpty) return;
          if (this.currentContainer ===
              this.containers[p]) return this.currentContainer.containerCache.over ||
          (this.containers[p]._trigger('over', e,
              this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
          o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null,
              this.containers[p].element, !0), this._trigger('change', e,
              this._uiHash()), this.containers[p]._trigger('change', e,
              this._uiHash(
                  this)), this.currentContainer = this.containers[p], this.options.placeholder.update(
              this.currentContainer,
              this.placeholder), this.containers[p]._trigger('over', e,
              this._uiHash(this)), this.containers[p].containerCache.over = 1;
        }
    },
    _createHelper: function(e) {
      var i = this.options,
          s = t.isFunction(i.helper)
              ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
              : 'clone' === i.helper
                  ? this.currentItem.clone()
                  : this.currentItem;
      return s.parents('body').length || t('parent' !== i.appendTo
          ? i.appendTo
          : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] ===
      this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css('position'),
        top: this.currentItem.css('top'),
        left: this.currentItem.css('left'),
      }), (!s[0].style.width || i.forceHelperSize) &&
      s.width(this.currentItem.width()), (!s[0].style.height ||
          i.forceHelperSize) && s.height(this.currentItem.height()), s;
    },
    _adjustOffsetFromHelper: function(e) {
      'string' == typeof e && (e = e.split(' ')), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0,
      }), 'left' in e &&
      (this.offset.click.left = e.left + this.margins.left), 'right' in e &&
      (this.offset.click.left = this.helperProportions.width - e.right +
          this.margins.left), 'top' in e &&
      (this.offset.click.top = e.top + this.margins.top), 'bottom' in e &&
      (this.offset.click.top = this.helperProportions.height - e.bottom +
          this.margins.top);
    },
    _getParentOffset: function() {
      this.offsetParent = this.helper.offsetParent();
      var e = this.offsetParent.offset();
      return 'absolute' === this.cssPosition && this.scrollParent[0] !==
      this.document[0] &&
      t.contains(this.scrollParent[0], this.offsetParent[0]) &&
      (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] ===
          this.document[0].body || this.offsetParent[0].tagName && 'html' ===
          this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
        top: 0,
        left: 0,
      }), {
        top: e.top +
            (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
        left: e.left +
            (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0),
      };
    },
    _getRelativeOffset: function() {
      if ('relative' === this.cssPosition) {
        var t = this.currentItem.position();
        return {
          top: t.top - (parseInt(this.helper.css('top'), 10) || 0) +
              this.scrollParent.scrollTop(),
          left: t.left - (parseInt(this.helper.css('left'), 10) || 0) +
              this.scrollParent.scrollLeft(),
        };
      }
      return {
        top: 0,
        left: 0,
      };
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.currentItem.css('marginLeft'), 10) || 0,
        top: parseInt(this.currentItem.css('marginTop'), 10) || 0,
      };
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight(),
      };
    },
    _setContainment: function() {
      var e, i, s, n = this.options;
      'parent' === n.containment &&
      (n.containment = this.helper[0].parentNode), ('document' ===
          n.containment || 'window' === n.containment) && (this.containment = [
        0 - this.offset.relative.left - this.offset.parent.left,
        0 - this.offset.relative.top - this.offset.parent.top,
        'document' === n.containment
            ? this.document.width()
            : this.window.width() - this.helperProportions.width -
            this.margins.left,
        ('document' === n.containment ? this.document.height() ||
            document.body.parentNode.scrollHeight : this.window.height() ||
            this.document[0].body.parentNode.scrollHeight) -
        this.helperProportions.height -
        this.margins.top]), /^(document|window|parent)$/.test(n.containment) ||
      (e = t(n.containment)[0], i = t(n.containment).offset(), s = 'hidden' !==
          t(e).css('overflow'), this.containment = [
        i.left + (parseInt(t(e).css('borderLeftWidth'), 10) || 0) +
        (parseInt(t(e).css('paddingLeft'), 10) || 0) - this.margins.left,
        i.top + (parseInt(t(e).css('borderTopWidth'), 10) || 0) +
        (parseInt(t(e).css('paddingTop'), 10) || 0) - this.margins.top,
        i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
        (parseInt(t(e).css('borderLeftWidth'), 10) || 0) -
        (parseInt(t(e).css('paddingRight'), 10) || 0) -
        this.helperProportions.width - this.margins.left,
        i.top +
        (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) -
        (parseInt(t(e).css('borderTopWidth'), 10) || 0) -
        (parseInt(t(e).css('paddingBottom'), 10) || 0) -
        this.helperProportions.height - this.margins.top]);
    },
    _convertPositionTo: function(e, i) {
      i || (i = this.position);
      var s = 'absolute' === e ? 1 : -1,
          n = 'absolute' !== this.cssPosition || this.scrollParent[0] !==
          this.document[0] &&
          t.contains(this.scrollParent[0], this.offsetParent[0])
              ? this.scrollParent
              : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName);
      return {
        top: i.top + this.offset.relative.top * s + this.offset.parent.top * s -
            ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : o
                ? 0
                : n.scrollTop()) * s,
        left: i.left + this.offset.relative.left * s + this.offset.parent.left *
            s -
            ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : o
                ? 0
                : n.scrollLeft()) * s,
      };
    },
    _generatePosition: function(e) {
      var i, s, n = this.options,
          o = e.pageX,
          a = e.pageY,
          r = 'absolute' !== this.cssPosition || this.scrollParent[0] !==
          this.document[0] &&
          t.contains(this.scrollParent[0], this.offsetParent[0])
              ? this.scrollParent
              : this.offsetParent,
          h = /(html|body)/i.test(r[0].tagName);
      return 'relative' !== this.cssPosition || this.scrollParent[0] !==
      this.document[0] && this.scrollParent[0] !== this.offsetParent[0] ||
      (this.offset.relative = this._getRelativeOffset()), this.originalPosition &&
      (this.containment &&
      (e.pageX - this.offset.click.left < this.containment[0] &&
      (o = this.containment[0] + this.offset.click.left), e.pageY -
      this.offset.click.top < this.containment[1] &&
      (a = this.containment[1] + this.offset.click.top), e.pageX -
      this.offset.click.left > this.containment[2] &&
      (o = this.containment[2] + this.offset.click.left), e.pageY -
      this.offset.click.top > this.containment[3] &&
      (a = this.containment[3] + this.offset.click.top)), n.grid &&
      (i = this.originalPageY +
          Math.round((a - this.originalPageY) / n.grid[1]) *
          n.grid[1], a = this.containment ? i - this.offset.click.top >=
      this.containment[1] && i - this.offset.click.top <= this.containment[3]
          ? i
          : i - this.offset.click.top >= this.containment[1]
              ? i - n.grid[1]
              : i + n.grid[1] : i, s = this.originalPageX +
          Math.round((o - this.originalPageX) / n.grid[0]) *
          n.grid[0], o = this.containment ? s - this.offset.click.left >=
      this.containment[0] && s - this.offset.click.left <= this.containment[2]
          ? s
          : s - this.offset.click.left >= this.containment[0]
              ? s - n.grid[0]
              : s + n.grid[0] : s)), {
        top: a - this.offset.click.top - this.offset.relative.top -
            this.offset.parent.top +
            ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : h
                ? 0
                : r.scrollTop()),
        left: o - this.offset.click.left - this.offset.relative.left -
            this.offset.parent.left +
            ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : h
                ? 0
                : r.scrollLeft()),
      };
    },
    _rearrange: function(t, e, i, s) {
      i
          ? i[0].appendChild(this.placeholder[0])
          : e.item[0].parentNode.insertBefore(this.placeholder[0],
          'down' === this.direction
              ? e.item[0]
              : e.item[0].nextSibling), this.counter = this.counter
          ? ++this.counter
          : 1;
      var n = this.counter;
      this._delay(function() {
        n === this.counter && this.refreshPositions(!s);
      });
    },
    _clear: function(t, e) {
      function i(t, e, i) {
        return function(s) {
          i._trigger(t, s, e._uiHash(e));
        };
      }

      this.reverting = !1;
      var s, n = [];
      if (!this._noFinalSort && this.currentItem.parent().length &&
      this.placeholder.before(
          this.currentItem), this._noFinalSort = null, this.helper[0] ===
      this.currentItem[0]) {
        for (s in this._storedCSS) ('auto' === this._storedCSS[s] ||
            'static' === this._storedCSS[s]) && (this._storedCSS[s] = '');
        this.currentItem.css(this._storedCSS), this._removeClass(
            this.currentItem, 'ui-sortable-helper');
      } else this.currentItem.show();
      for (this.fromOutside && !e && n.push(function(t) {
        this._trigger('receive', t, this._uiHash(this.fromOutside));
      }), !this.fromOutside && this.domPosition.prev ===
      this.currentItem.prev().not('.ui-sortable-helper')[0] &&
      this.domPosition.parent === this.currentItem.parent()[0] || e ||
      n.push(function(t) {
        this._trigger('update', t, this._uiHash());
      }), this !== this.currentContainer && (e || (n.push(function(t) {
        this._trigger('remove', t, this._uiHash());
      }), n.push(function(t) {
        return function(e) {
          t._trigger('receive', e, this._uiHash(this));
        };
      }.call(this, this.currentContainer)), n.push(function(t) {
        return function(e) {
          t._trigger('update', e, this._uiHash(this));
        };
      }.call(this, this.currentContainer)))), s = this.containers.length -
          1; s >= 0; s--) e || n.push(i('deactivate', this,
          this.containers[s])), this.containers[s].containerCache.over &&
      (n.push(i('out', this,
          this.containers[s])), this.containers[s].containerCache.over = 0);
      if (this.storedCursor && (this.document.find('body').
          css('cursor',
              this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity &&
      this.helper.css('opacity', this._storedOpacity), this._storedZIndex &&
      this.helper.css('zIndex', 'auto' === this._storedZIndex
          ? ''
          : this._storedZIndex), this.dragging = !1, e ||
      this._trigger('beforeStop', t,
          this._uiHash()), this.placeholder[0].parentNode.removeChild(
          this.placeholder[0]), this.cancelHelperRemoval ||
      (this.helper[0] !== this.currentItem[0] &&
      this.helper.remove(), this.helper = null), !e) {
        for (s = 0; n.length > s; s++) n[s].call(this, t);
        this._trigger('stop', t, this._uiHash());
      }
      return this.fromOutside = !1, !this.cancelHelperRemoval;
    },
    _trigger: function() {
      t.Widget.prototype._trigger.apply(this, arguments) === !1 &&
      this.cancel();
    },
    _uiHash: function(e) {
      var i = e || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || t([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: e ? e.element : null,
      };
    },
  }), t.widget('ui.spinner', {
    version: '1.12.1',
    defaultElement: '<input>',
    widgetEventPrefix: 'spin',
    options: {
      classes: {
        'ui-spinner': 'ui-corner-all',
        'ui-spinner-down': 'ui-corner-br',
        'ui-spinner-up': 'ui-corner-tr',
      },
      culture: null,
      icons: {
        down: 'ui-icon-triangle-1-s',
        up: 'ui-icon-triangle-1-n',
      },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null,
    },
    _create: function() {
      this._setOption('max', this.options.max), this._setOption('min',
          this.options.min), this._setOption('step', this.options.step), '' !==
      this.value() &&
      this._value(this.element.val(), !0), this._draw(), this._on(
          this._events), this._refresh(), this._on(this.window, {
        beforeunload: function() {
          this.element.removeAttr('autocomplete');
        },
      });
    },
    _getCreateOptions: function() {
      var e = this._super(),
          i = this.element;
      return t.each(['min', 'max', 'step'], function(t, s) {
        var n = i.attr(s);
        null != n && n.length && (e[s] = n);
      }), e;
    },
    _events: {
      keydown: function(t) {
        this._start(t) && this._keydown(t) && t.preventDefault();
      },
      keyup: '_stop',
      focus: function() {
        this.previous = this.element.val();
      },
      blur: function(t) {
        return this.cancelBlur
            ? (delete this.cancelBlur, void 0)
            : (this._stop(), this._refresh(), this.previous !==
            this.element.val() && this._trigger('change', t), void 0);
      },
      mousewheel: function(t, e) {
        if (e) {
          if (!this.spinning && !this._start(t)) return !1;
          this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(
              this.mousewheelTimer), this.mousewheelTimer = this._delay(
              function() {
                this.spinning && this._stop(t);
              }, 100), t.preventDefault();
        }
      },
      'mousedown .ui-spinner-button': function(e) {
        function i() {
          var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
          e || (this.element.trigger('focus'), this.previous = s, this._delay(
              function() {
                this.previous = s;
              }));
        }

        var s;
        s = this.element[0] === t.ui.safeActiveElement(this.document[0])
            ? this.previous
            : this.element.val(), e.preventDefault(), i.call(
            this), this.cancelBlur = !0, this._delay(function() {
          delete this.cancelBlur, i.call(this);
        }), this._start(e) !== !1 && this._repeat(null,
            t(e.currentTarget).hasClass('ui-spinner-up') ? 1 : -1, e);
      },
      'mouseup .ui-spinner-button': '_stop',
      'mouseenter .ui-spinner-button': function(e) {
        return t(e.currentTarget).hasClass('ui-state-active')
            ? this._start(e) === !1 ? !1 : (this._repeat(null,
                t(e.currentTarget).hasClass('ui-spinner-up') ? 1 : -1,
                e), void 0)
            : void 0;
      },
      'mouseleave .ui-spinner-button': '_stop',
    },
    _enhance: function() {
      this.uiSpinner = this.element.attr('autocomplete', 'off').
          wrap('<span>').
          parent().
          append('<a></a><a></a>');
    },
    _draw: function() {
      this._enhance(), this._addClass(this.uiSpinner, 'ui-spinner',
          'ui-widget ui-widget-content'), this._addClass(
          'ui-spinner-input'), this.element.attr('role',
          'spinbutton'), this.buttons = this.uiSpinner.children('a').
          attr('tabIndex', -1).
          attr('aria-hidden', !0).
          button({
            classes: {
              'ui-button': '',
            },
          }), this._removeClass(this.buttons, 'ui-corner-all'), this._addClass(
          this.buttons.first(),
          'ui-spinner-button ui-spinner-up'), this._addClass(
          this.buttons.last(),
          'ui-spinner-button ui-spinner-down'), this.buttons.first().button({
        icon: this.options.icons.up,
        showLabel: !1,
      }), this.buttons.last().button({
        icon: this.options.icons.down,
        showLabel: !1,
      }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) &&
      this.uiSpinner.height() > 0 &&
      this.uiSpinner.height(this.uiSpinner.height());
    },
    _keydown: function(e) {
      var i = this.options,
          s = t.ui.keyCode;
      switch (e.keyCode) {
        case s.UP:
          return this._repeat(null, 1, e), !0;
        case s.DOWN:
          return this._repeat(null, -1, e), !0;
        case s.PAGE_UP:
          return this._repeat(null, i.page, e), !0;
        case s.PAGE_DOWN:
          return this._repeat(null, -i.page, e), !0;
      }
      return !1;
    },
    _start: function(t) {
      return this.spinning || this._trigger('start', t) !== !1
          ? (this.counter || (this.counter = 1), this.spinning = !0, !0)
          : !1;
    },
    _repeat: function(t, e, i) {
      t = t || 500, clearTimeout(this.timer), this.timer = this._delay(
          function() {
            this._repeat(40, e, i);
          }, t), this._spin(e * this.options.step, i);
    },
    _spin: function(t, e) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1), i = this._adjustValue(
          i + t * this._increment(this.counter)), this.spinning &&
      this._trigger('spin', e, {
        value: i,
      }) === !1 || (this._value(i), this.counter++);
    },
    _increment: function(e) {
      var i = this.options.incremental;
      return i ? t.isFunction(i) ? i(e) : Math.floor(
          e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1;
    },
    _precision: function() {
      var t = this._precisionOf(this.options.step);
      return null !== this.options.min &&
      (t = Math.max(t, this._precisionOf(this.options.min))), t;
    },
    _precisionOf: function(t) {
      var e = '' + t,
          i = e.indexOf('.');
      return -1 === i ? 0 : e.length - i - 1;
    },
    _adjustValue: function(t) {
      var e, i, s = this.options;
      return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(
          i / s.step) * s.step, t = e + i, t = parseFloat(
          t.toFixed(this._precision())), null !== s.max && t > s.max
          ? s.max
          : null !== s.min && s.min > t ? s.min : t;
    },
    _stop: function(t) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(
          this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger(
          'stop', t));
    },
    _setOption: function(t, e) {
      var i, s, n;
      return 'culture' === t || 'numberFormat' === t ? (i = this._parse(
          this.element.val()), this.options[t] = e, this.element.val(
          this._format(i)), void 0) : (('max' === t || 'min' === t || 'step' ===
          t) && 'string' == typeof e && (e = this._parse(e)), 'icons' === t &&
      (s = this.buttons.first().find('.ui-icon'), this._removeClass(s, null,
          this.options.icons.up), this._addClass(s, null,
          e.up), n = this.buttons.last().find('.ui-icon'), this._removeClass(n,
          null, this.options.icons.down), this._addClass(n, null,
          e.down)), this._super(t, e), void 0);
    },
    _setOptionDisabled: function(t) {
      this._super(t), this._toggleClass(this.uiSpinner, null,
          'ui-state-disabled', !!t), this.element.prop('disabled',
          !!t), this.buttons.button(t ? 'disable' : 'enable');
    },
    _setOptions: r(function(t) {
      this._super(t);
    }),
    _parse: function(t) {
      return 'string' == typeof t && '' !== t &&
      (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(
          t, 10, this.options.culture) : +t), '' === t || isNaN(t) ? null : t;
    },
    _format: function(t) {
      return '' === t ? '' : window.Globalize && this.options.numberFormat
          ? Globalize.format(t, this.options.numberFormat, this.options.culture)
          : t;
    },
    _refresh: function() {
      this.element.attr({
        'aria-valuemin': this.options.min,
        'aria-valuemax': this.options.max,
        'aria-valuenow': this._parse(this.element.val()),
      });
    },
    isValid: function() {
      var t = this.value();
      return null === t ? !1 : t === this._adjustValue(t);
    },
    _value: function(t, e) {
      var i;
      '' !== t && (i = this._parse(t), null !== i &&
      (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(
          t), this._refresh();
    },
    _destroy: function() {
      this.element.prop('disabled', !1).
          removeAttr(
              'autocomplete role aria-valuemin aria-valuemax aria-valuenow'), this.uiSpinner.replaceWith(
          this.element);
    },
    stepUp: r(function(t) {
      this._stepUp(t);
    }),
    _stepUp: function(t) {
      this._start() && (this._spin((t || 1) * this.options.step), this._stop());
    },
    stepDown: r(function(t) {
      this._stepDown(t);
    }),
    _stepDown: function(t) {
      this._start() &&
      (this._spin((t || 1) * -this.options.step), this._stop());
    },
    pageUp: r(function(t) {
      this._stepUp((t || 1) * this.options.page);
    }),
    pageDown: r(function(t) {
      this._stepDown((t || 1) * this.options.page);
    }),
    value: function(t) {
      return arguments.length
          ? (r(this._value).call(this, t), void 0)
          : this._parse(this.element.val());
    },
    widget: function() {
      return this.uiSpinner;
    },
  }), t.uiBackCompat !== !1 && t.widget('ui.spinner', t.ui.spinner, {
    _enhance: function() {
      this.uiSpinner = this.element.attr('autocomplete', 'off').
          wrap(this._uiSpinnerHtml()).
          parent().
          append(this._buttonHtml());
    },
    _uiSpinnerHtml: function() {
      return '<span>';
    },
    _buttonHtml: function() {
      return '<a></a><a></a>';
    },
  }), t.ui.spinner, t.widget('ui.tabs', {
    version: '1.12.1',
    delay: 300,
    options: {
      active: null,
      classes: {
        'ui-tabs': 'ui-corner-all',
        'ui-tabs-nav': 'ui-corner-all',
        'ui-tabs-panel': 'ui-corner-bottom',
        'ui-tabs-tab': 'ui-corner-top',
      },
      collapsible: !1,
      event: 'click',
      heightStyle: 'content',
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null,
    },
    _isLocal: function() {
      var t = /#.*$/;
      return function(e) {
        var i, s;
        i = e.href.replace(t, ''), s = location.href.replace(t, '');
        try {
          i = decodeURIComponent(i);
        } catch (n) {}
        try {
          s = decodeURIComponent(s);
        } catch (n) {}
        return e.hash.length > 1 && i === s;
      };
    }(),
    _create: function() {
      var e = this,
          i = this.options;
      this.running = !1, this._addClass('ui-tabs',
          'ui-widget ui-widget-content'), this._toggleClass(
          'ui-tabs-collapsible', null,
          i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(
          i.disabled) && (i.disabled = t.unique(i.disabled.concat(
          t.map(this.tabs.filter('.ui-state-disabled'), function(t) {
            return e.tabs.index(t);
          }))).sort()), this.active = this.options.active !== !1 &&
      this.anchors.length
          ? this._findActive(i.active)
          : t(), this._refresh(), this.active.length && this.load(i.active);
    },
    _initialActive: function() {
      var e = this.options.active,
          i = this.options.collapsible,
          s = location.hash.substring(1);
      return null === e && (s && this.tabs.each(function(i, n) {
        return t(n).attr('aria-controls') === s ? (e = i, !1) : void 0;
      }), null === e &&
      (e = this.tabs.index(this.tabs.filter('.ui-tabs-active'))), (null === e ||
          -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 &&
      (e = this.tabs.index(this.tabs.eq(e)), -1 === e &&
      (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e;
    },
    _getCreateEventData: function() {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : t(),
      };
    },
    _tabKeydown: function(e) {
      var i = t(t.ui.safeActiveElement(this.document[0])).closest('li'),
          s = this.tabs.index(i),
          n = !0;
      if (!this._handlePageNav(e)) {
        switch (e.keyCode) {
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
            s++;
            break;
          case t.ui.keyCode.UP:
          case t.ui.keyCode.LEFT:
            n = !1, s--;
            break;
          case t.ui.keyCode.END:
            s = this.anchors.length - 1;
            break;
          case t.ui.keyCode.HOME:
            s = 0;
            break;
          case t.ui.keyCode.SPACE:
            return e.preventDefault(), clearTimeout(
                this.activating), this._activate(s), void 0;
          case t.ui.keyCode.ENTER:
            return e.preventDefault(), clearTimeout(
                this.activating), this._activate(
                s === this.options.active ? !1 : s), void 0;
          default:
            return;
        }
        e.preventDefault(), clearTimeout(
            this.activating), s = this._focusNextTab(s, n), e.ctrlKey ||
        e.metaKey || (i.attr('aria-selected', 'false'), this.tabs.eq(s).
            attr('aria-selected', 'true'), this.activating = this._delay(
            function() {
              this.option('active', s);
            }, this.delay));
      }
    },
    _panelKeydown: function(e) {
      this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP &&
      (e.preventDefault(), this.active.trigger('focus'));
    },
    _handlePageNav: function(e) {
      return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(
          this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey &&
      e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(
          this._focusNextTab(this.options.active + 1, !0)), !0) : void 0;
    },
    _findNextTab: function(e, i) {
      function s() {
        return e > n && (e = 0), 0 > e && (e = n), e;
      }

      for (var n = this.tabs.length - 1; -1 !==
      t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
      return e;
    },
    _focusNextTab: function(t, e) {
      return t = this._findNextTab(t, e), this.tabs.eq(t).trigger('focus'), t;
    },
    _setOption: function(t, e) {
      return 'active' === t ? (this._activate(e), void 0) : (this._super(t,
          e), 'collapsible' === t &&
      (this._toggleClass('ui-tabs-collapsible', null, e), e ||
      this.options.active !== !1 || this._activate(0)), 'event' === t &&
      this._setupEvents(e), 'heightStyle' === t &&
      this._setupHeightStyle(e), void 0);
    },
    _sanitizeSelector: function(t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, '\\$&') : '';
    },
    refresh: function() {
      var e = this.options,
          i = this.tablist.children(':has(a[href])');
      e.disabled = t.map(i.filter('.ui-state-disabled'), function(t) {
        return i.index(t);
      }), this._processTabs(), e.active !== !1 && this.anchors.length
          ? this.active.length && !t.contains(this.tablist[0], this.active[0])
              ? this.tabs.length === e.disabled.length
                  ? (e.active = !1, this.active = t())
                  : this._activate(
                      this._findNextTab(Math.max(0, e.active - 1), !1))
              : e.active = this.tabs.index(this.active)
          : (e.active = !1, this.active = t()), this._refresh();
    },
    _refresh: function() {
      this._setOptionDisabled(this.options.disabled), this._setupEvents(
          this.options.event), this._setupHeightStyle(
          this.options.heightStyle), this.tabs.not(this.active).attr({
        'aria-selected': 'false',
        'aria-expanded': 'false',
        tabIndex: -1,
      }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
        'aria-hidden': 'true',
      }), this.active.length ? (this.active.attr({
        'aria-selected': 'true',
        'aria-expanded': 'true',
        tabIndex: 0,
      }), this._addClass(this.active, 'ui-tabs-active',
          'ui-state-active'), this._getPanelForTab(this.active).show().attr({
        'aria-hidden': 'false',
      })) : this.tabs.eq(0).attr('tabIndex', 0);
    },
    _processTabs: function() {
      var e = this,
          i = this.tabs,
          s = this.anchors,
          n = this.panels;
      this.tablist = this._getList().attr('role', 'tablist'), this._addClass(
          this.tablist, 'ui-tabs-nav',
          'ui-helper-reset ui-helper-clearfix ui-widget-header'), this.tablist.on(
          'mousedown' + this.eventNamespace, '> li', function(e) {
            t(this).is('.ui-state-disabled') && e.preventDefault();
          }).on('focus' + this.eventNamespace, '.ui-tabs-anchor', function() {
        t(this).closest('li').is('.ui-state-disabled') && this.blur();
      }), this.tabs = this.tablist.find('> li:has(a[href])').attr({
        role: 'tab',
        tabIndex: -1,
      }), this._addClass(this.tabs, 'ui-tabs-tab',
          'ui-state-default'), this.anchors = this.tabs.map(function() {
        return t('a', this)[0];
      }).attr({
        role: 'presentation',
        tabIndex: -1,
      }), this._addClass(this.anchors,
          'ui-tabs-anchor'), this.panels = t(), this.anchors.each(
          function(i, s) {
            var n, o, a, r = t(s).uniqueId().attr('id'),
                h = t(s).closest('li'),
                l = h.attr('aria-controls');
            e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(
                e._sanitizeSelector(n))) : (a = h.attr('aria-controls') ||
                t({}).uniqueId()[0].id, n = '#' + a, o = e.element.find(
                n), o.length || (o = e._createPanel(a), o.insertAfter(
                e.panels[i - 1] || e.tablist)), o.attr('aria-live',
                'polite')), o.length && (e.panels = e.panels.add(o)), l &&
            h.data('ui-tabs-aria-controls', l), h.attr({
              'aria-controls': a,
              'aria-labelledby': r,
            }), o.attr('aria-labelledby', r);
          }), this.panels.attr('role', 'tabpanel'), this._addClass(this.panels,
          'ui-tabs-panel', 'ui-widget-content'), i &&
      (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(
          n.not(this.panels)));
    },
    _getList: function() {
      return this.tablist || this.element.find('ol, ul').eq(0);
    },
    _createPanel: function(e) {
      return t('<div>').attr('id', e).data('ui-tabs-destroy', !0);
    },
    _setOptionDisabled: function(e) {
      var i, s, n;
      for (t.isArray(e) && (e.length
          ? e.length === this.anchors.length && (e = !0)
          : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), e === !0 || -1 !==
      t.inArray(n, e) ? (i.attr('aria-disabled', 'true'), this._addClass(i,
          null, 'ui-state-disabled')) : (i.removeAttr(
          'aria-disabled'), this._removeClass(i, null, 'ui-state-disabled'));
      this.options.disabled = e, this._toggleClass(this.widget(),
          this.widgetFullName + '-disabled', null, e === !0);
    },
    _setupEvents: function(e) {
      var i = {};
      e && t.each(e.split(' '), function(t, e) {
        i[e] = '_eventHandler';
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0,
          this.anchors, {
            click: function(t) {
              t.preventDefault();
            },
          }), this._on(this.anchors, i), this._on(this.tabs, {
        keydown: '_tabKeydown',
      }), this._on(this.panels, {
        keydown: '_panelKeydown',
      }), this._focusable(this.tabs), this._hoverable(this.tabs);
    },
    _setupHeightStyle: function(e) {
      var i, s = this.element.parent();
      'fill' === e ? (i = s.height(), i -= this.element.outerHeight() -
          this.element.height(), this.element.siblings(':visible').
          each(function() {
            var e = t(this),
                s = e.css('position');
            'absolute' !== s && 'fixed' !== s && (i -= e.outerHeight(!0));
          }), this.element.children().not(this.panels).each(function() {
        i -= t(this).outerHeight(!0);
      }), this.panels.each(function() {
        t(this).
            height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
      }).css('overflow', 'auto')) : 'auto' === e &&
          (i = 0, this.panels.each(function() {
            i = Math.max(i, t(this).height('').height());
          }).height(i));
    },
    _eventHandler: function(e) {
      var i = this.options,
          s = this.active,
          n = t(e.currentTarget),
          o = n.closest('li'),
          a = o[0] === s[0],
          r = a && i.collapsible,
          h = r ? t() : this._getPanelForTab(o),
          l = s.length ? this._getPanelForTab(s) : t(),
          c = {
            oldTab: s,
            oldPanel: l,
            newTab: r ? t() : o,
            newPanel: h,
          };
      e.preventDefault(), o.hasClass('ui-state-disabled') ||
      o.hasClass('ui-tabs-loading') || this.running || a && !i.collapsible ||
      this._trigger('beforeActivate', e, c) === !1 ||
      (i.active = r ? !1 : this.tabs.index(o), this.active = a
          ? t()
          : o, this.xhr && this.xhr.abort(), l.length || h.length ||
      t.error('jQuery UI Tabs: Mismatching fragment identifier.'), h.length &&
      this.load(this.tabs.index(o), e), this._toggle(e, c));
    },
    _toggle: function(e, i) {
      function s() {
        o.running = !1, o._trigger('activate', e, i);
      }

      function n() {
        o._addClass(i.newTab.closest('li'), 'ui-tabs-active',
            'ui-state-active'), a.length && o.options.show ? o._show(a,
            o.options.show, s) : (a.show(), s());
      }

      var o = this,
          a = i.newPanel,
          r = i.oldPanel;
      this.running = !0, r.length && this.options.hide ? this._hide(r,
          this.options.hide, function() {
            o._removeClass(i.oldTab.closest('li'), 'ui-tabs-active',
                'ui-state-active'), n();
          }) : (this._removeClass(i.oldTab.closest('li'), 'ui-tabs-active',
          'ui-state-active'), r.hide(), n()), r.attr('aria-hidden',
          'true'), i.oldTab.attr({
        'aria-selected': 'false',
        'aria-expanded': 'false',
      }), a.length && r.length ? i.oldTab.attr('tabIndex', -1) : a.length &&
          this.tabs.filter(function() {
            return 0 === t(this).attr('tabIndex');
          }).attr('tabIndex', -1), a.attr('aria-hidden',
          'false'), i.newTab.attr({
        'aria-selected': 'true',
        'aria-expanded': 'true',
        tabIndex: 0,
      });
    },
    _activate: function(e) {
      var i, s = this._findActive(e);
      s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(
          '.ui-tabs-anchor')[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: t.noop,
      }));
    },
    _findActive: function(e) {
      return e === !1 ? t() : this.tabs.eq(e);
    },
    _getIndex: function(e) {
      return 'string' == typeof e && (e = this.anchors.index(
          this.anchors.filter(
              '[href$=\'' + t.ui.escapeSelector(e) + '\']'))), e;
    },
    _destroy: function() {
      this.xhr && this.xhr.abort(), this.tablist.removeAttr('role').
          off(this.eventNamespace), this.anchors.removeAttr('role tabIndex').
          removeUniqueId(), this.tabs.add(this.panels).each(function() {
        t.data(this, 'ui-tabs-destroy') ? t(this).remove() : t(this).
            removeAttr(
                'role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded');
      }), this.tabs.each(function() {
        var e = t(this),
            i = e.data('ui-tabs-aria-controls');
        i
            ? e.attr('aria-controls', i).removeData('ui-tabs-aria-controls')
            : e.removeAttr('aria-controls');
      }), this.panels.show(), 'content' !== this.options.heightStyle &&
      this.panels.css('height', '');
    },
    enable: function(e) {
      var i = this.options.disabled;
      i !== !1 &&
      (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(
          i, function(t) {
            return t !== e ? t : null;
          }) : t.map(this.tabs, function(t, i) {
        return i !== e ? i : null;
      })), this._setOptionDisabled(i));
    },
    disable: function(e) {
      var i = this.options.disabled;
      if (i !== !0) {
        if (void 0 === e) i = !0;
        else {
          if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
          i = t.isArray(i) ? t.merge([e], i).sort() : [e];
        }
        this._setOptionDisabled(i);
      }
    },
    load: function(e, i) {
      e = this._getIndex(e);
      var s = this,
          n = this.tabs.eq(e),
          o = n.find('.ui-tabs-anchor'),
          a = this._getPanelForTab(n),
          r = {
            tab: n,
            panel: a,
          },
          h = function(t, e) {
            'abort' === e && s.panels.stop(!1, !0), s._removeClass(n,
                'ui-tabs-loading'), a.removeAttr('aria-busy'), t === s.xhr &&
            delete s.xhr;
          };
      this._isLocal(o[0]) ||
      (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr &&
      'canceled' !== this.xhr.statusText &&
      (this._addClass(n, 'ui-tabs-loading'), a.attr('aria-busy',
          'true'), this.xhr.done(function(t, e, n) {
        setTimeout(function() {
          a.html(t), s._trigger('load', i, r), h(n, e);
        }, 1);
      }).fail(function(t, e) {
        setTimeout(function() {
          h(t, e);
        }, 1);
      })));
    },
    _ajaxSettings: function(e, i, s) {
      var n = this;
      return {
        url: e.attr('href').replace(/#.*$/, ''),
        beforeSend: function(e, o) {
          return n._trigger('beforeLoad', i, t.extend({
            jqXHR: e,
            ajaxSettings: o,
          }, s));
        },
      };
    },
    _getPanelForTab: function(e) {
      var i = t(e).attr('aria-controls');
      return this.element.find(this._sanitizeSelector('#' + i));
    },
  }), t.uiBackCompat !== !1 && t.widget('ui.tabs', t.ui.tabs, {
    _processTabs: function() {
      this._superApply(arguments), this._addClass(this.tabs, 'ui-tab');
    },
  }), t.ui.tabs, t.widget('ui.tooltip', {
    version: '1.12.1',
    options: {
      classes: {
        'ui-tooltip': 'ui-corner-all ui-widget-shadow',
      },
      content: function() {
        var e = t(this).attr('title') || '';
        return t('<a>').text(e).html();
      },
      hide: !0,
      items: '[title]:not([disabled])',
      position: {
        my: 'left top+15',
        at: 'left bottom',
        collision: 'flipfit flip',
      },
      show: !0,
      track: !1,
      close: null,
      open: null,
    },
    _addDescribedBy: function(e, i) {
      var s = (e.attr('aria-describedby') || '').split(/\s+/);
      s.push(i), e.data('ui-tooltip-id', i).
          attr('aria-describedby', t.trim(s.join(' ')));
    },
    _removeDescribedBy: function(e) {
      var i = e.data('ui-tooltip-id'),
          s = (e.attr('aria-describedby') || '').split(/\s+/),
          n = t.inArray(i, s);
      -1 !== n && s.splice(n, 1), e.removeData('ui-tooltip-id'), s = t.trim(
          s.join(' ')), s ? e.attr('aria-describedby', s) : e.removeAttr(
          'aria-describedby');
    },
    _create: function() {
      this._on({
        mouseover: 'open',
        focusin: 'open',
      }), this.tooltips = {}, this.parents = {}, this.liveRegion = t('<div>').
          attr({
            role: 'log',
            'aria-live': 'assertive',
            'aria-relevant': 'additions',
          }).
          appendTo(this.document[0].body), this._addClass(this.liveRegion, null,
          'ui-helper-hidden-accessible'), this.disabledTitles = t([]);
    },
    _setOption: function(e, i) {
      var s = this;
      this._super(e, i), 'content' === e &&
      t.each(this.tooltips, function(t, e) {
        s._updateContent(e.element);
      });
    },
    _setOptionDisabled: function(t) {
      this[t ? '_disable' : '_enable']();
    },
    _disable: function() {
      var e = this;
      t.each(this.tooltips, function(i, s) {
        var n = t.Event('blur');
        n.target = n.currentTarget = s.element[0], e.close(n, !0);
      }), this.disabledTitles = this.disabledTitles.add(
          this.element.find(this.options.items).addBack().filter(function() {
            var e = t(this);
            return e.is('[title]') ? e.data('ui-tooltip-title',
                e.attr('title')).removeAttr('title') : void 0;
          }));
    },
    _enable: function() {
      this.disabledTitles.each(function() {
        var e = t(this);
        e.data('ui-tooltip-title') &&
        e.attr('title', e.data('ui-tooltip-title'));
      }), this.disabledTitles = t([]);
    },
    open: function(e) {
      var i = this,
          s = t(e ? e.target : this.element).closest(this.options.items);
      s.length && !s.data('ui-tooltip-id') &&
      (s.attr('title') && s.data('ui-tooltip-title', s.attr('title')), s.data(
          'ui-tooltip-open', !0), e && 'mouseover' === e.type &&
      s.parents().each(function() {
        var e, s = t(this);
        s.data('ui-tooltip-open') &&
        (e = t.Event('blur'), e.target = e.currentTarget = this, i.close(e,
            !0)), s.attr('title') && (s.uniqueId(), i.parents[this.id] = {
          element: this,
          title: s.attr('title'),
        }, s.attr('title', ''));
      }), this._registerCloseHandlers(e, s), this._updateContent(s, e));
    },
    _updateContent: function(t, e) {
      var i, s = this.options.content,
          n = this,
          o = e ? e.type : null;
      return 'string' == typeof s || s.nodeType || s.jquery ? this._open(e, t,
          s) : (i = s.call(t[0], function(i) {
        n._delay(function() {
          t.data('ui-tooltip-open') && (e && (e.type = o), this._open(e, t, i));
        });
      }), i && this._open(e, t, i), void 0);
    },
    _open: function(e, i, s) {
      function n(t) {
        l.of = t, a.is(':hidden') || a.position(l);
      }

      var o, a, r, h, l = t.extend({}, this.options.position);
      if (s) {
        if (o = this._find(i)) return o.tooltip.find('.ui-tooltip-content').
            html(s), void 0;
        i.is('[title]') &&
        (e && 'mouseover' === e.type ? i.attr('title', '') : i.removeAttr(
            'title')), o = this._tooltip(
            i), a = o.tooltip, this._addDescribedBy(i, a.attr('id')), a.find(
            '.ui-tooltip-content').html(s), this.liveRegion.children().
            hide(), h = t('<div>').
            html(a.find('.ui-tooltip-content').html()), h.removeAttr('name').
            find('[name]').
            removeAttr('name'), h.removeAttr('id').
            find('[id]').
            removeAttr('id'), h.appendTo(this.liveRegion), this.options.track &&
        e && /^mouse/.test(e.type) ? (this._on(this.document, {
          mousemove: n,
        }), n(e)) : a.position(t.extend({
          of: i,
        }, this.options.position)), a.hide(), this._show(a,
            this.options.show), this.options.track && this.options.show &&
        this.options.show.delay &&
        (r = this.delayedShow = setInterval(function() {
          a.is(':visible') && (n(l.of), clearInterval(r));
        }, t.fx.interval)), this._trigger('open', e, {
          tooltip: a,
        });
      }
    },
    _registerCloseHandlers: function(e, i) {
      var s = {
        keyup: function(e) {
          if (e.keyCode === t.ui.keyCode.ESCAPE) {
            var s = t.Event(e);
            s.currentTarget = i[0], this.close(s, !0);
          }
        },
      };
      i[0] !== this.element[0] && (s.remove = function() {
        this._removeTooltip(this._find(i).tooltip);
      }), e && 'mouseover' !== e.type || (s.mouseleave = 'close'), e &&
      'focusin' !== e.type || (s.focusout = 'close'), this._on(!0, i, s);
    },
    close: function(e) {
      var i, s = this,
          n = t(e ? e.currentTarget : this.element),
          o = this._find(n);
      return o ? (i = o.tooltip, o.closing ||
      (clearInterval(this.delayedShow), n.data('ui-tooltip-title') &&
      !n.attr('title') &&
      n.attr('title', n.data('ui-tooltip-title')), this._removeDescribedBy(
          n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide,
          function() {
            s._removeTooltip(t(this));
          }), n.removeData('ui-tooltip-open'), this._off(n,
          'mouseleave focusout keyup'), n[0] !== this.element[0] &&
      this._off(n, 'remove'), this._off(this.document, 'mousemove'), e &&
      'mouseleave' === e.type && t.each(this.parents, function(e, i) {
        t(i.element).attr('title', i.title), delete s.parents[e];
      }), o.closing = !0, this._trigger('close', e, {
        tooltip: i,
      }), o.hiding || (o.closing = !1)), void 0) : (n.removeData(
          'ui-tooltip-open'), void 0);
    },
    _tooltip: function(e) {
      var i = t('<div>').attr('role', 'tooltip'),
          s = t('<div>').appendTo(i),
          n = i.uniqueId().attr('id');
      return this._addClass(s, 'ui-tooltip-content'), this._addClass(i,
          'ui-tooltip', 'ui-widget ui-widget-content'), i.appendTo(
          this._appendTo(e)), this.tooltips[n] = {
        element: e,
        tooltip: i,
      };
    },
    _find: function(t) {
      var e = t.data('ui-tooltip-id');
      return e ? this.tooltips[e] : null;
    },
    _removeTooltip: function(t) {
      t.remove(), delete this.tooltips[t.attr('id')];
    },
    _appendTo: function(t) {
      var e = t.closest('.ui-front, dialog');
      return e.length || (e = this.document[0].body), e;
    },
    _destroy: function() {
      var e = this;
      t.each(this.tooltips, function(i, s) {
        var n = t.Event('blur'),
            o = s.element;
        n.target = n.currentTarget = o[0], e.close(n, !0), t('#' + i).
            remove(), o.data('ui-tooltip-title') && (o.attr('title') ||
        o.attr('title', o.data('ui-tooltip-title')), o.removeData(
            'ui-tooltip-title'));
      }), this.liveRegion.remove();
    },
  }), t.uiBackCompat !== !1 && t.widget('ui.tooltip', t.ui.tooltip, {
    options: {
      tooltipClass: null,
    },
    _tooltip: function() {
      var t = this._superApply(arguments);
      return this.options.tooltipClass &&
      t.tooltip.addClass(this.options.tooltipClass), t;
    },
  }), t.ui.tooltip;
});
/* Lazy Load XT 1.1.0 | MIT License */
!function(a, b, c, d) {
  function e(a, b) {
    return a[b] === d ? t[b] : a[b];
  }

  function f() {
    var a = b.pageYOffset;
    return a === d ? r.scrollTop : a;
  }

  function g(a, b) {
    var c = t['on' + a];
    c && (w(c) ? c.call(b[0]) : (c.addClass &&
    b.addClass(c.addClass), c.removeClass &&
    b.removeClass(c.removeClass))), b.trigger('lazy' + a, [b]), k();
  }

  function h(b) {
    g(b.type, a(this).off(p, h));
  }

  function i(c) {
    if (z.length) {
      c = c || t.forceLoad, A = 1 / 0;
      var d, e, i = f(),
          j = b.innerHeight || r.clientHeight,
          k = b.innerWidth || r.clientWidth;
      for (d = 0, e = z.length; e > d; d++) {
        var l, m = z[d],
            q = m[0],
            s = m[n],
            u = !1,
            v = c || y(q, o) < 0;
        if (a.contains(r, q)) {
          if (c || !s.visibleOnly || q.offsetWidth || q.offsetHeight) {
            if (!v) {
              var x = q.getBoundingClientRect(),
                  B = s.edgeX,
                  C = s.edgeY;
              l = x.top + i - C - j, v = i >= l && x.bottom > -C && x.left <=
                  k + B && x.right > -B;
            }
            if (v) {
              m.on(p, h), g('show', m);
              var D = s.srcAttr,
                  E = w(D) ? D(m) : q.getAttribute(D);
              E && (q.src = E), u = !0;
            } else A > l && (A = l);
          }
        } else u = !0;
        u && (y(q, o, 0), z.splice(d--, 1), e--);
      }
      e || g('complete', a(r));
    }
  }

  function j() {
    B > 1 ? (B = 1, i(), setTimeout(j, t.throttle)) : B = 0;
  }

  function k(a) {
    z.length &&
    (a && 'scroll' === a.type && a.currentTarget === b && A >= f() ||
        (B || setTimeout(j, 0), B = 2));
  }

  function l() {
    v.lazyLoadXT();
  }

  function m() {
    i(!0);
  }

  var n = 'lazyLoadXT',
      o = 'lazied',
      p = 'load error',
      q = 'lazy-hidden',
      r = c.documentElement || c.body,
      s = b.onscroll === d || !!b.operamini || !r.getBoundingClientRect,
      t = {
        autoInit: !0,
        selector: 'img[data-src]',
        blankImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        throttle: 99,
        forceLoad: s,
        loadEvent: 'pageshow',
        updateEvent: 'load orientationchange resize scroll touchmove focus',
        forceEvent: 'lazyloadall',
        oninit: {
          removeClass: 'lazy',
        },
        onshow: {
          addClass: q,
        },
        onload: {
          removeClass: q,
          addClass: 'lazy-loaded',
        },
        onerror: {
          removeClass: q,
        },
        checkDuplicates: !0,
      },
      u = {
        srcAttr: 'data-src',
        edgeX: 0,
        edgeY: 0,
        visibleOnly: !0,
      },
      v = a(b),
      w = a.isFunction,
      x = a.extend,
      y = a.data || function(b, c) {
        return a(b).data(c);
      },
      z = [],
      A = 0,
      B = 0;
  a[n] = x(t, u, a[n]), a.fn[n] = function(c) {
    c = c || {};
    var d, f = e(c, 'blankImage'),
        h = e(c, 'checkDuplicates'),
        i = e(c, 'scrollContainer'),
        j = e(c, 'show'),
        l = {};
    a(i).on('scroll', k);
    for (d in u) l[d] = e(c, d);
    return this.each(function(d, e) {
      if (e === b) a(t.selector).lazyLoadXT(c);
      else {
        var i = h && y(e, o),
            m = a(e).data(o, j ? -1 : 1);
        if (i) return void k();
        f && 'IMG' === e.tagName && !e.src && (e.src = f), m[n] = x({}, l), g(
            'init', m), z.push(m), k();
      }
    });
  }, a(c).ready(function() {
    g('start', v), v.on(t.updateEvent, k).on(t.forceEvent, m), a(c).
        on(t.updateEvent, k), t.autoInit && (v.on(t.loadEvent, l), l());
  });
}(window.jQuery || window.Zepto || window.$, window, document),
    function(a) {
      var b = a.lazyLoadXT;
      b.selector += ',video,iframe[data-src]', b.videoPoster = 'data-poster', a(
          document).on('lazyshow', 'video', function(c, d) {
        var e = d.lazyLoadXT.srcAttr,
            f = a.isFunction(e),
            g = !1;
        d.attr('poster', d.attr(b.videoPoster)), d.children('source,track').
            each(function(b, c) {
              var d = a(c),
                  h = f ? e(d) : d.attr(e);
              h && (d.attr('src', h), g = !0);
            }), g && this.load();
      });
    }(window.jQuery || window.Zepto || window.$);
!function(t) {
  function e(n) {
    if (i[n]) return i[n].exports;
    var s = i[n] = {
      i: n,
      l: !1,
      exports: {},
    };
    return t[n].call(s.exports, s, s.exports, e), s.l = !0, s.exports;
  }

  var i = {};
  e.m = t, e.c = i, e.i = function(t) {
    return t;
  }, e.d = function(t, i, n) {
    e.o(t, i) || Object.defineProperty(t, i, {
      configurable: !1,
      enumerable: !0,
      get: n,
    });
  }, e.n = function(t) {
    var i = t && t.__esModule ? function() {
      return t.default;
    } : function() {
      return t;
    };
    return e.d(i, 'a', i), i;
  }, e.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = '', e(e.s = 36);
}([
  function(t, e) {
    t.exports = jQuery;
  }, function(t, e, i) {
    'use strict';

    function n() {
      return 'rtl' === r()('html').attr('dir');
    }

    function s(t, e) {
      return t = t || 6, Math.round(
          Math.pow(36, t + 1) - Math.random() * Math.pow(36, t)).
          toString(36).
          slice(1) + (e ? '-' + e : '');
    }

    function o(t) {
      var e, i = {
            transition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'otransitionend',
          },
          n = document.createElement('div');
      for (var s in i) void 0 !== n.style[s] && (e = i[s]);
      return e || (e = setTimeout(function() {
        t.triggerHandler('transitionend', [t]);
      }, 1), 'transitionend');
    }

    i.d(e, 'a', function() {
      return n;
    }), i.d(e, 'b', function() {
      return s;
    }), i.d(e, 'c', function() {
      return o;
    });
    var a = i(0),
        r = i.n(a);
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t) {
      return t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    function o(t) {
      return s(
          void 0 !== t.constructor.name ? t.constructor.name : t.className);
    }

    i.d(e, 'a', function() {
      return u;
    });
    var a = i(0),
        r = (i.n(a), i(1)),
        l = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        u = function() {
          function t(e, s) {
            n(this, t), this._setup(e, s);
            var a = o(this);
            this.uuid = i.i(r.b)(6, a), this.$element.attr('data-' + a) ||
            this.$element.attr('data-' + a, this.uuid), this.$element.data(
                'zfPlugin') ||
            this.$element.data('zfPlugin', this), this.$element.trigger(
                'init.zf.' + a);
          }

          return l(t, [
            {
              key: 'destroy',
              value: function() {
                this._destroy();
                var t = o(this);
                this.$element.removeAttr('data-' + t).
                    removeData('zfPlugin').
                    trigger('destroyed.zf.' + t);
                for (var e in this) this[e] = null;
              },
            }]), t;
        }();
  }, function(t, e, i) {
    'use strict';

    function n(t) {
      return !!t && t.find(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').
          filter(function() {
            return !(!a()(this).is(':visible') || a()(this).attr('tabindex') <
                0);
          });
    }

    function s(t) {
      var e = l[t.which || t.keyCode] ||
          String.fromCharCode(t.which).toUpperCase();
      return e = e.replace(/\W+/, ''), t.shiftKey &&
      (e = 'SHIFT_' + e), t.ctrlKey && (e = 'CTRL_' + e), t.altKey &&
      (e = 'ALT_' + e), e = e.replace(/_$/, '');
    }

    i.d(e, 'a', function() {
      return c;
    });
    var o = i(0),
        a = i.n(o),
        r = i(1),
        l = {
          9: 'TAB',
          13: 'ENTER',
          27: 'ESCAPE',
          32: 'SPACE',
          35: 'END',
          36: 'HOME',
          37: 'ARROW_LEFT',
          38: 'ARROW_UP',
          39: 'ARROW_RIGHT',
          40: 'ARROW_DOWN',
        },
        u = {},
        c = {
          keys: function(t) {
            var e = {};
            for (var i in t) e[t[i]] = t[i];
            return e;
          }(l),
          parseKey: s,
          handleKey: function(t, e, n) {
            var s, o, l, c = u[e],
                h = this.parseKey(t);
            if (!c) return console.warn('Component not defined!');
            if (s = void 0 === c.ltr ? c : i.i(r.a)() ? a.a.extend({}, c.ltr,
                c.rtl) : a.a.extend({}, c.rtl, c.ltr), o = s[h], (l = n[o]) &&
            'function' == typeof l) {
              var d = l.apply();
              (n.handled || 'function' == typeof n.handled) && n.handled(d);
            } else (n.unhandled || 'function' == typeof n.unhandled) &&
            n.unhandled();
          },
          findFocusable: n,
          register: function(t, e) {
            u[t] = e;
          },
          trapFocus: function(t) {
            var e = n(t),
                i = e.eq(0),
                o = e.eq(-1);
            t.on('keydown.zf.trapfocus', function(t) {
              t.target === o[0] && 'TAB' === s(t)
                  ? (t.preventDefault(), i.focus())
                  : t.target === i[0] && 'SHIFT_TAB' === s(t) &&
                  (t.preventDefault(), o.focus());
            });
          },
          releaseFocus: function(t) {
            t.off('keydown.zf.trapfocus');
          },
        };
  }, function(t, e, i) {
    'use strict';

    function n(t) {
      var e = {};
      return 'string' != typeof t ? e : (t = t.trim().slice(1, -1))
          ? e = t.split('&').reduce(function(t, e) {
            var i = e.replace(/\+/g, ' ').split('='),
                n = i[0],
                s = i[1];
            return n = decodeURIComponent(n), s = void 0 === s
                ? null
                : decodeURIComponent(s), t.hasOwnProperty(n) ? Array.isArray(
                t[n]) ? t[n].push(s) : t[n] = [t[n], s] : t[n] = s, t;
          }, {})
          : e;
    }

    i.d(e, 'a', function() {
      return r;
    });
    var s = i(0),
        o = i.n(s),
        a = window.matchMedia || function() {
          var t = window.styleMedia || window.media;
          if (!t) {
            var e = document.createElement('style'),
                i = document.getElementsByTagName('script')[0],
                n = null;
            e.type = 'text/css', e.id = 'matchmediajs-test', i &&
            i.parentNode &&
            i.parentNode.insertBefore(e, i), n = 'getComputedStyle' in window &&
                window.getComputedStyle(e, null) || e.currentStyle, t = {
              matchMedium: function(t) {
                var i = '@media ' + t +
                    '{ #matchmediajs-test { width: 1px; } }';
                return e.styleSheet
                    ? e.styleSheet.cssText = i
                    : e.textContent = i, '1px' === n.width;
              },
            };
          }
          return function(e) {
            return {
              matches: t.matchMedium(e || 'all'),
              media: e || 'all',
            };
          };
        }(),
        r = {
          queries: [],
          current: '',
          _init: function() {
            var t = this;
            o()('meta.foundation-mq').length ||
            o()('<meta class="foundation-mq">').appendTo(document.head);
            var e, i = o()('.foundation-mq').css('font-family');
            e = n(i);
            for (var s in e) e.hasOwnProperty(s) && t.queries.push({
              name: s,
              value: 'only screen and (min-width: ' + e[s] + ')',
            });
            this.current = this._getCurrentSize(), this._watcher();
          },
          atLeast: function(t) {
            var e = this.get(t);
            return !!e && a(e).matches;
          },
          is: function(t) {
            return t = t.trim().split(' '), t.length > 1 && 'only' === t[1]
                ? t[0] === this._getCurrentSize()
                : this.atLeast(t[0]);
          },
          get: function(t) {
            for (var e in this.queries)
              if (this.queries.hasOwnProperty(e)) {
                var i = this.queries[e];
                if (t === i.name) return i.value;
              }
            return null;
          },
          _getCurrentSize: function() {
            for (var t, e = 0; e < this.queries.length; e++) {
              var i = this.queries[e];
              a(i.value).matches && (t = i);
            }
            return 'object' == typeof t ? t.name : t;
          },
          _watcher: function() {
            var t = this;
            o()(window).
                off('resize.zf.mediaquery').
                on('resize.zf.mediaquery', function() {
                  var e = t._getCurrentSize(),
                      i = t.current;
                  e !== i && (t.current = e, o()(window).
                      trigger('changed.zf.mediaquery', [e, i]));
                });
          },
        };
  }, function(t, e, i) {
    'use strict';

    function n(t, e, i) {
      var n = void 0,
          s = Array.prototype.slice.call(arguments, 3);
      o()(window).off(e).on(e, function(e) {
        n && clearTimeout(n), n = setTimeout(function() {
          i.apply(null, s);
        }, t || 10);
      });
    }

    i.d(e, 'a', function() {
      return u;
    });
    var s = i(0),
        o = i.n(s),
        a = i(6),
        r = function() {
          for (var t = ['WebKit', 'Moz', 'O', 'Ms', ''], e = 0; e <
          t.length; e++)
            if (t[e] + 'MutationObserver' in window) return window[t[e] +
            'MutationObserver'];
          return !1;
        }(),
        l = function(t, e) {
          t.data(e).split(' ').forEach(function(i) {
            o()('#' + i)['close' === e ? 'trigger' : 'triggerHandler'](
                e + '.zf.trigger', [t]);
          });
        },
        u = {
          Listeners: {
            Basic: {},
            Global: {},
          },
          Initializers: {},
        };
    u.Listeners.Basic = {
      openListener: function() {
        l(o()(this), 'open');
      },
      closeListener: function() {
        o()(this).data('close') ? l(o()(this), 'close') : o()(this).
            trigger('close.zf.trigger');
      },
      toggleListener: function() {
        o()(this).data('toggle') ? l(o()(this), 'toggle') : o()(this).
            trigger('toggle.zf.trigger');
      },
      closeableListener: function(t) {
        t.stopPropagation();
        var e = o()(this).data('closable');
        '' !== e ? a.a.animateOut(o()(this), e, function() {
          o()(this).trigger('closed.zf');
        }) : o()(this).fadeOut().trigger('closed.zf');
      },
      toggleFocusListener: function() {
        var t = o()(this).data('toggle-focus');
        o()('#' + t).triggerHandler('toggle.zf.trigger', [o()(this)]);
      },
    }, u.Initializers.addOpenListener = function(t) {
      t.off('click.zf.trigger', u.Listeners.Basic.openListener), t.on(
          'click.zf.trigger', '[data-open]', u.Listeners.Basic.openListener);
    }, u.Initializers.addCloseListener = function(t) {
      t.off('click.zf.trigger', u.Listeners.Basic.closeListener), t.on(
          'click.zf.trigger', '[data-close]', u.Listeners.Basic.closeListener);
    }, u.Initializers.addToggleListener = function(t) {
      t.off('click.zf.trigger', u.Listeners.Basic.toggleListener), t.on(
          'click.zf.trigger', '[data-toggle]',
          u.Listeners.Basic.toggleListener);
    }, u.Initializers.addCloseableListener = function(t) {
      t.off('close.zf.trigger', u.Listeners.Basic.closeableListener), t.on(
          'close.zf.trigger', '[data-closeable], [data-closable]',
          u.Listeners.Basic.closeableListener);
    }, u.Initializers.addToggleFocusListener = function(t) {
      t.off('focus.zf.trigger blur.zf.trigger',
          u.Listeners.Basic.toggleFocusListener), t.on(
          'focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]',
          u.Listeners.Basic.toggleFocusListener);
    }, u.Listeners.Global = {
      resizeListener: function(t) {
        r || t.each(function() {
          o()(this).triggerHandler('resizeme.zf.trigger');
        }), t.attr('data-events', 'resize');
      },
      scrollListener: function(t) {
        r || t.each(function() {
          o()(this).triggerHandler('scrollme.zf.trigger');
        }), t.attr('data-events', 'scroll');
      },
      closeMeListener: function(t, e) {
        var i = t.namespace.split('.')[0];
        o()('[data-' + i + ']').
            not('[data-yeti-box="' + e + '"]').
            each(function() {
              var t = o()(this);
              t.triggerHandler('close.zf.trigger', [t]);
            });
      },
    }, u.Initializers.addClosemeListener = function(t) {
      var e = o()('[data-yeti-box]'),
          i = ['dropdown', 'tooltip', 'reveal'];
      if (t &&
      ('string' == typeof t ? i.push(t) : 'object' == typeof t && 'string' ==
      typeof t[0] ? i.concat(t) : console.error(
          'Plugin names must be strings')), e.length) {
        var n = i.map(function(t) {
          return 'closeme.zf.' + t;
        }).join(' ');
        o()(window).off(n).on(n, u.Listeners.Global.closeMeListener);
      }
    }, u.Initializers.addResizeListener = function(t) {
      var e = o()('[data-resize]');
      e.length &&
      n(t, 'resize.zf.trigger', u.Listeners.Global.resizeListener, e);
    }, u.Initializers.addScrollListener = function(t) {
      var e = o()('[data-scroll]');
      e.length &&
      n(t, 'scroll.zf.trigger', u.Listeners.Global.scrollListener, e);
    }, u.Initializers.addMutationEventsListener = function(t) {
      if (!r) return !1;
      var e = t.find('[data-resize], [data-scroll], [data-mutate]'),
          i = function(t) {
            var e = o()(t[0].target);
            switch (t[0].type) {
              case 'attributes':
                'scroll' === e.attr('data-events') && 'data-events' ===
                t[0].attributeName && e.triggerHandler('scrollme.zf.trigger',
                    [e, window.pageYOffset]), 'resize' ===
                e.attr('data-events') && 'data-events' === t[0].attributeName &&
                e.triggerHandler('resizeme.zf.trigger', [e]), 'style' ===
                t[0].attributeName && (e.closest('[data-mutate]').
                    attr('data-events', 'mutate'), e.closest('[data-mutate]').
                    triggerHandler('mutateme.zf.trigger',
                        [e.closest('[data-mutate]')]));
                break;
              case 'childList':
                e.closest('[data-mutate]').
                    attr('data-events', 'mutate'), e.closest('[data-mutate]').
                    triggerHandler('mutateme.zf.trigger',
                        [e.closest('[data-mutate]')]);
                break;
              default:
                return !1;
            }
          };
      if (e.length)
        for (var n = 0; n <= e.length - 1; n++) {
          var s = new r(i);
          s.observe(e[n], {
            attributes: !0,
            childList: !0,
            characterData: !1,
            subtree: !0,
            attributeFilter: ['data-events', 'style'],
          });
        }
    }, u.Initializers.addSimpleListeners = function() {
      var t = o()(document);
      u.Initializers.addOpenListener(t), u.Initializers.addCloseListener(
          t), u.Initializers.addToggleListener(
          t), u.Initializers.addCloseableListener(
          t), u.Initializers.addToggleFocusListener(t);
    }, u.Initializers.addGlobalListeners = function() {
      var t = o()(document);
      u.Initializers.addMutationEventsListener(
          t), u.Initializers.addResizeListener(), u.Initializers.addScrollListener(), u.Initializers.addClosemeListener();
    }, u.init = function(t, e) {
      if (void 0 === t.triggersInitialized) {
        t(document);
        'complete' === document.readyState
            ? (u.Initializers.addSimpleListeners(), u.Initializers.addGlobalListeners())
            : t(window).on('load', function() {
              u.Initializers.addSimpleListeners(), u.Initializers.addGlobalListeners();
            }), t.triggersInitialized = !0;
      }
      e && (e.Triggers = u, e.IHearYou = u.Initializers.addGlobalListeners);
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e, i) {
      function n(r) {
        a || (a = r), o = r - a, i.apply(e), o < t
            ? s = window.requestAnimationFrame(n, e)
            : (window.cancelAnimationFrame(s), e.trigger('finished.zf.animate',
                [e]).triggerHandler('finished.zf.animate', [e]));
      }

      var s, o, a = null;
      if (0 === t) return i.apply(e), void e.trigger('finished.zf.animate',
          [e]).triggerHandler('finished.zf.animate', [e]);
      s = window.requestAnimationFrame(n);
    }

    function s(t, e, n, s) {
      function o() {
        t || e.hide(), c(), s && s.apply(e);
      }

      function c() {
        e[0].style.transitionDuration = 0, e.removeClass(h + ' ' + d + ' ' + n);
      }

      if (e = a()(e).eq(0), e.length) {
        var h = t ? l[0] : l[1],
            d = t ? u[0] : u[1];
        c(), e.addClass(n).css('transition', 'none'), requestAnimationFrame(
            function() {
              e.addClass(h), t && e.show();
            }), requestAnimationFrame(function() {
          e[0].offsetWidth, e.css('transition', '').addClass(d);
        }), e.one(i.i(r.c)(e), o);
      }
    }

    i.d(e, 'b', function() {
      return n;
    }), i.d(e, 'a', function() {
      return c;
    });
    var o = i(0),
        a = i.n(o),
        r = i(1),
        l = ['mui-enter', 'mui-leave'],
        u = ['mui-enter-active', 'mui-leave-active'],
        c = {
          animateIn: function(t, e, i) {
            s(!0, t, e, i);
          },
          animateOut: function(t, e, i) {
            s(!1, t, e, i);
          },
        };
  }, function(t, e, i) {
    'use strict';

    function n(t, e, i, n, o) {
      return 0 === s(t, e, i, n, o);
    }

    function s(t, e, i, n, s) {
      var a, r, l, u, c = o(t);
      if (e) {
        var h = o(e);
        r = h.height + h.offset.top -
            (c.offset.top + c.height), a = c.offset.top -
            h.offset.top, l = c.offset.left - h.offset.left, u = h.width +
            h.offset.left - (c.offset.left + c.width);
      } else r = c.windowDims.height + c.windowDims.offset.top -
          (c.offset.top + c.height), a = c.offset.top -
          c.windowDims.offset.top, l = c.offset.left -
          c.windowDims.offset.left, u = c.windowDims.width -
          (c.offset.left + c.width);
      return r = s ? 0 : Math.min(r, 0), a = Math.min(a, 0), l = Math.min(l,
          0), u = Math.min(u, 0), i ? l + u : n ? a + r : Math.sqrt(
          a * a + r * r + l * l + u * u);
    }

    function o(t) {
      if ((t = t.length ? t[0] : t) === window || t ===
          document) throw new Error(
          'I\'m sorry, Dave. I\'m afraid I can\'t do that.');
      var e = t.getBoundingClientRect(),
          i = t.parentNode.getBoundingClientRect(),
          n = document.body.getBoundingClientRect(),
          s = window.pageYOffset,
          o = window.pageXOffset;
      return {
        width: e.width,
        height: e.height,
        offset: {
          top: e.top + s,
          left: e.left + o,
        },
        parentDims: {
          width: i.width,
          height: i.height,
          offset: {
            top: i.top + s,
            left: i.left + o,
          },
        },
        windowDims: {
          width: n.width,
          height: n.height,
          offset: {
            top: s,
            left: o,
          },
        },
      };
    }

    function a(t, e, n, s, o, a) {
      switch (console.log(
          'NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5'), n) {
        case 'top':
          return i.i(l.a)() ? r(t, e, 'top', 'left', s, o, a) : r(t, e, 'top',
              'right', s, o, a);
        case 'bottom':
          return i.i(l.a)() ? r(t, e, 'bottom', 'left', s, o, a) : r(t, e,
              'bottom', 'right', s, o, a);
        case 'center top':
          return r(t, e, 'top', 'center', s, o, a);
        case 'center bottom':
          return r(t, e, 'bottom', 'center', s, o, a);
        case 'center left':
          return r(t, e, 'left', 'center', s, o, a);
        case 'center right':
          return r(t, e, 'right', 'center', s, o, a);
        case 'left bottom':
          return r(t, e, 'bottom', 'left', s, o, a);
        case 'right bottom':
          return r(t, e, 'bottom', 'right', s, o, a);
        case 'center':
          return {
            left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width /
                2 - $eleDims.width / 2 + o,
            top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height /
                2 - ($eleDims.height / 2 + s),
          };
        case 'reveal':
          return {
            left: ($eleDims.windowDims.width - $eleDims.width) / 2 + o,
            top: $eleDims.windowDims.offset.top + s,
          };
        case 'reveal full':
          return {
            left: $eleDims.windowDims.offset.left,
            top: $eleDims.windowDims.offset.top,
          };
        default:
          return {
            left: i.i(l.a)() ? $anchorDims.offset.left - $eleDims.width +
                $anchorDims.width - o : $anchorDims.offset.left + o,
            top: $anchorDims.offset.top + $anchorDims.height + s,
          };
      }
    }

    function r(t, e, i, n, s, a, r) {
      var l, u, c = o(t),
          h = e ? o(e) : null;
      switch (i) {
        case 'top':
          l = h.offset.top - (c.height + s);
          break;
        case 'bottom':
          l = h.offset.top + h.height + s;
          break;
        case 'left':
          u = h.offset.left - (c.width + a);
          break;
        case 'right':
          u = h.offset.left + h.width + a;
      }
      switch (i) {
        case 'top':
        case 'bottom':
          switch (n) {
            case 'left':
              u = h.offset.left + a;
              break;
            case 'right':
              u = h.offset.left - c.width + h.width - a;
              break;
            case 'center':
              u = r ? a : h.offset.left + h.width / 2 - c.width / 2 + a;
          }
          break;
        case 'right':
        case 'left':
          switch (n) {
            case 'bottom':
              l = h.offset.top - s + h.height - c.height;
              break;
            case 'top':
              l = h.offset.top + s;
              break;
            case 'center':
              l = h.offset.top + s + h.height / 2 - c.height / 2;
          }
      }
      return {
        top: l,
        left: u,
      };
    }

    i.d(e, 'a', function() {
      return u;
    });
    var l = i(1),
        u = {
          ImNotTouchingYou: n,
          OverlapArea: s,
          GetDimensions: o,
          GetOffsets: a,
          GetExplicitOffsets: r,
        };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      function i() {
        0 === --n && e();
      }

      var n = t.length;
      0 === n && e(), t.each(function() {
        if (this.complete && void 0 !== this.naturalWidth) i();
        else {
          var t = new Image,
              e = 'load.zf.images error.zf.images';
          o()(t).one(e, function t(n) {
            o()(this).off(e, t), i();
          }), t.src = o()(this).attr('src');
        }
      });
    }

    i.d(e, 'a', function() {
      return n;
    });
    var s = i(0),
        o = i.n(s);
  }, function(t, e, i) {
    'use strict';
    i.d(e, 'a', function() {
      return o;
    });
    var n = i(0),
        s = i.n(n),
        o = {
          Feather: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'zf';
            t.attr('role', 'menubar');
            var i = t.find('li').attr({
                  role: 'menuitem',
                }),
                n = 'is-' + e + '-submenu',
                o = n + '-item',
                a = 'is-' + e + '-submenu-parent',
                r = 'accordion' !== e;
            i.each(function() {
              var t = s()(this),
                  i = t.children('ul');
              i.length && (t.addClass(a), i.addClass('submenu ' + n).attr({
                'data-submenu': '',
              }), r && (t.attr({
                'aria-haspopup': !0,
                'aria-label': t.children('a:first').text(),
              }), 'drilldown' === e && t.attr({
                'aria-expanded': !1,
              })), i.addClass('submenu ' + n).attr({
                'data-submenu': '',
                role: 'menu',
              }), 'drilldown' === e && i.attr({
                'aria-hidden': !0,
              })), t.parent('[data-submenu]').length &&
              t.addClass('is-submenu-item ' + o);
            });
          },
          Burn: function(t, e) {
            var i = 'is-' + e + '-submenu',
                n = i + '-item',
                s = 'is-' + e + '-submenu-parent';
            t.find('>li, .menu, .menu > li').
                removeClass(i + ' ' + n + ' ' + s +
                    ' is-submenu-item submenu is-active').
                removeAttr('data-submenu').
                css('display', '');
          },
        };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s() {
      this.removeEventListener('touchmove', o), this.removeEventListener(
          'touchend', s), g = !1;
    }

    function o(t) {
      if (f.a.spotSwipe.preventDefault && t.preventDefault(), g) {
        var e, i = t.touches[0].pageX,
            n = (t.touches[0].pageY, l - i);
        h = (new Date).getTime() - c, Math.abs(n) >=
        f.a.spotSwipe.moveThreshold && h <= f.a.spotSwipe.timeThreshold &&
        (e = n > 0 ? 'left' : 'right'), e &&
        (t.preventDefault(), s.call(this), f()(this).
            trigger('swipe', e).
            trigger('swipe' + e));
      }
    }

    function a(t) {
      1 == t.touches.length &&
      (l = t.touches[0].pageX, u = t.touches[0].pageY, g = !0, c = (new Date).getTime(), this.addEventListener(
          'touchmove', o, !1), this.addEventListener('touchend', s, !1));
    }

    function r() {
      this.addEventListener && this.addEventListener('touchstart', a, !1);
    }

    i.d(e, 'a', function() {
      return m;
    });
    var l, u, c, h, d = i(0),
        f = i.n(d),
        p = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        m = {},
        g = !1,
        v = function() {
          function t(e) {
            n(this, t), this.version = '1.0.0', this.enabled = 'ontouchstart' in
                document.documentElement, this.preventDefault = !1, this.moveThreshold = 75, this.timeThreshold = 200, this.$ = e, this._init();
          }

          return p(t, [
            {
              key: '_init',
              value: function() {
                var t = this.$;
                t.event.special.swipe = {
                  setup: r,
                }, t.each(['left', 'up', 'down', 'right'], function() {
                  t.event.special['swipe' + this] = {
                    setup: function() {
                      t(this).on('swipe', t.noop);
                    },
                  };
                });
              },
            }]), t;
        }();
    m.setupSpotSwipe = function(t) {
      t.spotSwipe = new v(t);
    }, m.setupTouchHandler = function(t) {
      t.fn.addTouch = function() {
        this.each(function(i, n) {
          t(n).bind('touchstart touchmove touchend touchcancel', function() {
            e(event);
          });
        });
        var e = function(t) {
          var e, i = t.changedTouches,
              n = i[0],
              s = {
                touchstart: 'mousedown',
                touchmove: 'mousemove',
                touchend: 'mouseup',
              },
              o = s[t.type];
          'MouseEvent' in window && 'function' == typeof window.MouseEvent
              ? e = new window.MouseEvent(o, {
                bubbles: !0,
                cancelable: !0,
                screenX: n.screenX,
                screenY: n.screenY,
                clientX: n.clientX,
                clientY: n.clientY,
              })
              : (e = document.createEvent('MouseEvent'), e.initMouseEvent(o, !0,
              !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1,
              !1, !1, 0, null)), n.target.dispatchEvent(e);
        };
      };
    }, m.init = function(t) {
      void 0 === t.spotSwipe && (m.setupSpotSwipe(t), m.setupTouchHandler(t));
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return d;
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(1),
        c = i(2),
        h = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        d = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), h(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = r.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'Accordion', this._init(), l.a.register(
                    'Accordion', {
                      ENTER: 'toggle',
                      SPACE: 'toggle',
                      ARROW_DOWN: 'next',
                      ARROW_UP: 'previous',
                    });
              },
            }, {
              key: '_init',
              value: function() {
                var t = this;
                this.$element.attr('role',
                    'tablist'), this.$tabs = this.$element.children(
                    '[data-accordion-item]'), this.$tabs.each(function(t, e) {
                  var n = r()(e),
                      s = n.children('[data-tab-content]'),
                      o = s[0].id || i.i(u.b)(6, 'accordion'),
                      a = e.id || o + '-label';
                  n.find('a:first').attr({
                    'aria-controls': o,
                    role: 'tab',
                    id: a,
                    'aria-expanded': !1,
                    'aria-selected': !1,
                  }), s.attr({
                    role: 'tabpanel',
                    'aria-labelledby': a,
                    'aria-hidden': !0,
                    id: o,
                  });
                });
                var e = this.$element.find('.is-active').
                    children('[data-tab-content]');
                this.firstTimeInit = !0, e.length && (this.down(e,
                    this.firstTimeInit), this.firstTimeInit = !1), this._checkDeepLink = function() {
                  var e = window.location.hash;
                  if (e.length) {
                    var i = t.$element.find('[href$="' + e + '"]'),
                        n = r()(e);
                    if (i.length && n) {
                      if (i.parent('[data-accordion-item]').
                          hasClass('is-active') || (t.down(n,
                          t.firstTimeInit), t.firstTimeInit = !1), t.options.deepLinkSmudge) {
                        var s = t;
                        r()(window).load(function() {
                          var t = s.$element.offset();
                          r()('html, body').animate({
                            scrollTop: t.top,
                          }, s.options.deepLinkSmudgeDelay);
                        });
                      }
                      t.$element.trigger('deeplink.zf.accordion', [i, n]);
                    }
                  }
                }, this.options.deepLink &&
                this._checkDeepLink(), this._events();
              },
            }, {
              key: '_events',
              value: function() {
                var t = this;
                this.$tabs.each(function() {
                  var e = r()(this),
                      i = e.children('[data-tab-content]');
                  i.length && e.children('a').
                      off('click.zf.accordion keydown.zf.accordion').
                      on('click.zf.accordion', function(e) {
                        e.preventDefault(), t.toggle(i);
                      }).
                      on('keydown.zf.accordion', function(n) {
                        l.a.handleKey(n, 'Accordion', {
                          toggle: function() {
                            t.toggle(i);
                          },
                          next: function() {
                            var i = e.next().find('a').focus();
                            t.options.multiExpand ||
                            i.trigger('click.zf.accordion');
                          },
                          previous: function() {
                            var i = e.prev().find('a').focus();
                            t.options.multiExpand ||
                            i.trigger('click.zf.accordion');
                          },
                          handled: function() {
                            n.preventDefault(), n.stopPropagation();
                          },
                        });
                      });
                }), this.options.deepLink &&
                r()(window).on('popstate', this._checkDeepLink);
              },
            }, {
              key: 'toggle',
              value: function(t) {
                if (t.closest('[data-accordion]').
                    is('[disabled]')) return void console.info(
                    'Cannot toggle an accordion that is disabled.');
                if (t.parent().hasClass('is-active') ? this.up(t) : this.down(
                    t), this.options.deepLink) {
                  var e = t.prev('a').attr('href');
                  this.options.updateHistory
                      ? history.pushState({}, '', e)
                      : history.replaceState({}, '', e);
                }
              },
            }, {
              key: 'down',
              value: function(t, e) {
                var i = this;
                if (t.closest('[data-accordion]').is('[disabled]') &&
                    !e) return void console.info(
                    'Cannot call down on an accordion that is disabled.');
                if (t.attr('aria-hidden', !1).
                    parent('[data-tab-content]').
                    addBack().
                    parent().
                    addClass('is-active'), !this.options.multiExpand && !e) {
                  var n = this.$element.children('.is-active').
                      children('[data-tab-content]');
                  n.length && this.up(n.not(t));
                }
                t.slideDown(this.options.slideSpeed, function() {
                  i.$element.trigger('down.zf.accordion', [t]);
                }), r()('#' + t.attr('aria-labelledby')).attr({
                  'aria-expanded': !0,
                  'aria-selected': !0,
                });
              },
            }, {
              key: 'up',
              value: function(t) {
                if (t.closest('[data-accordion]').
                    is('[disabled]')) return void console.info(
                    'Cannot call up on an accordion that is disabled.');
                var e = t.parent().siblings(),
                    i = this;
                (this.options.allowAllClosed || e.hasClass('is-active')) &&
                t.parent().hasClass('is-active') &&
                (t.slideUp(i.options.slideSpeed, function() {
                  i.$element.trigger('up.zf.accordion', [t]);
                }), t.attr('aria-hidden', !0).
                    parent().
                    removeClass('is-active'), r()(
                    '#' + t.attr('aria-labelledby')).attr({
                  'aria-expanded': !1,
                  'aria-selected': !1,
                }));
              },
            }, {
              key: '_destroy',
              value: function() {
                this.$element.find('[data-tab-content]').
                    stop(!0).
                    slideUp(0).
                    css('display', ''), this.$element.find('a').
                    off('.zf.accordion'), this.options.deepLink &&
                r()(window).off('popstate', this._checkDeepLink);
              },
            }]), e;
        }(c.a);
    d.defaults = {
      slideSpeed: 250,
      multiExpand: !1,
      allowAllClosed: !1,
      deepLink: !1,
      deepLinkSmudge: !1,
      deepLinkSmudgeDelay: 300,
      updateHistory: !1,
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return f;
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(9),
        c = i(1),
        h = i(2),
        d = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        f = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), d(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = r.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'AccordionMenu', this._init(), l.a.register(
                    'AccordionMenu', {
                      ENTER: 'toggle',
                      SPACE: 'toggle',
                      ARROW_RIGHT: 'open',
                      ARROW_UP: 'up',
                      ARROW_DOWN: 'down',
                      ARROW_LEFT: 'close',
                      ESCAPE: 'closeAll',
                    });
              },
            }, {
              key: '_init',
              value: function() {
                u.a.Feather(this.$element, 'accordion');
                var t = this;
                this.$element.find('[data-submenu]').
                    not('.is-active').
                    slideUp(0), this.$element.attr({
                  role: 'tree',
                  'aria-multiselectable': this.options.multiOpen,
                }), this.$menuLinks = this.$element.find(
                    '.is-accordion-submenu-parent'), this.$menuLinks.each(
                    function() {
                      var e = this.id || i.i(c.b)(6, 'acc-menu-link'),
                          n = r()(this),
                          s = n.children('[data-submenu]'),
                          o = s[0].id || i.i(c.b)(6, 'acc-menu'),
                          a = s.hasClass('is-active');
                      t.options.submenuToggle
                          ? (n.addClass('has-submenu-toggle'), n.children('a').
                              after('<button id="' + e +
                                  '" class="submenu-toggle" aria-controls="' + o +
                                  '" aria-expanded="' + a + '" title="' +
                                  t.options.submenuToggleText +
                                  '"><span class="submenu-toggle-text">' +
                                  t.options.submenuToggleText + '</span></button>'))
                          : n.attr({
                            'aria-controls': o,
                            'aria-expanded': a,
                            id: e,
                          }), s.attr({
                        'aria-labelledby': e,
                        'aria-hidden': !a,
                        role: 'group',
                        id: o,
                      });
                    }), this.$element.find('li').attr({
                  role: 'treeitem',
                });
                var e = this.$element.find('.is-active');
                if (e.length) {
                  var t = this;
                  e.each(function() {
                    t.down(r()(this));
                  });
                }
                this._events();
              },
            }, {
              key: '_events',
              value: function() {
                var t = this;
                this.$element.find('li').each(function() {
                  var e = r()(this).children('[data-submenu]');
                  e.length && (t.options.submenuToggle ? r()(this).
                      children('.submenu-toggle').
                      off('click.zf.accordionMenu').
                      on('click.zf.accordionMenu', function(i) {
                        t.toggle(e);
                      }) : r()(this).
                      children('a').
                      off('click.zf.accordionMenu').
                      on('click.zf.accordionMenu', function(i) {
                        i.preventDefault(), t.toggle(e);
                      }));
                }).on('keydown.zf.accordionmenu', function(e) {
                  var i, n, s = r()(this),
                      o = s.parent('ul').children('li'),
                      a = s.children('[data-submenu]');
                  o.each(function(t) {
                    if (r()(this).is(s)) return i = o.eq(Math.max(0, t - 1)).
                        find('a').
                        first(), n = o.eq(Math.min(t + 1, o.length - 1)).
                        find('a').
                        first(), r()(this).
                        children('[data-submenu]:visible').length &&
                    (n = s.find('li:first-child').find('a').first()), r()(this).
                        is(':first-child') ? i = s.parents('li').
                        first().
                        find('a').
                        first() : i.parents('li').
                            first().
                            children('[data-submenu]:visible').length &&
                        (i = i.parents('li').
                            find('li:last-child').
                            find('a').
                            first()), void (r()(this).is(':last-child') &&
                        (n = s.parents('li').
                            first().
                            next('li').
                            find('a').
                            first()));
                  }), l.a.handleKey(e, 'AccordionMenu', {
                    open: function() {
                      a.is(':hidden') && (t.down(a), a.find('li').
                          first().
                          find('a').
                          first().
                          focus());
                    },
                    close: function() {
                      a.length && !a.is(':hidden') ? t.up(a) : s.parent(
                          '[data-submenu]').length &&
                          (t.up(s.parent('[data-submenu]')), s.parents('li').
                              first().
                              find('a').
                              first().
                              focus());
                    },
                    up: function() {
                      return i.focus(), !0;
                    },
                    down: function() {
                      return n.focus(), !0;
                    },
                    toggle: function() {
                      return !t.options.submenuToggle &&
                          (s.children('[data-submenu]').length ? (t.toggle(
                              s.children('[data-submenu]')), !0) : void 0);
                    },
                    closeAll: function() {
                      t.hideAll();
                    },
                    handled: function(t) {
                      t && e.preventDefault(), e.stopImmediatePropagation();
                    },
                  });
                });
              },
            }, {
              key: 'hideAll',
              value: function() {
                this.up(this.$element.find('[data-submenu]'));
              },
            }, {
              key: 'showAll',
              value: function() {
                this.down(this.$element.find('[data-submenu]'));
              },
            }, {
              key: 'toggle',
              value: function(t) {
                t.is(':animated') ||
                (t.is(':hidden') ? this.down(t) : this.up(t));
              },
            }, {
              key: 'down',
              value: function(t) {
                var e = this;
                this.options.multiOpen || this.up(
                    this.$element.find('.is-active').
                        not(t.parentsUntil(this.$element).add(t))), t.addClass(
                    'is-active').attr({
                  'aria-hidden': !1,
                }), this.options.submenuToggle ? t.prev('.submenu-toggle').
                    attr({
                      'aria-expanded': !0,
                    }) : t.parent('.is-accordion-submenu-parent').attr({
                  'aria-expanded': !0,
                }), t.slideDown(e.options.slideSpeed, function() {
                  e.$element.trigger('down.zf.accordionMenu', [t]);
                });
              },
            }, {
              key: 'up',
              value: function(t) {
                var e = this;
                t.slideUp(e.options.slideSpeed, function() {
                  e.$element.trigger('up.zf.accordionMenu', [t]);
                });
                var i = t.find('[data-submenu]').
                    slideUp(0).
                    addBack().
                    attr('aria-hidden', !0);
                this.options.submenuToggle ? i.prev('.submenu-toggle').
                    attr('aria-expanded', !1) : i.parent(
                    '.is-accordion-submenu-parent').attr('aria-expanded', !1);
              },
            }, {
              key: '_destroy',
              value: function() {
                this.$element.find('[data-submenu]').
                    slideDown(0).
                    css('display', ''), this.$element.find('a').
                    off('click.zf.accordionMenu'), this.options.submenuToggle &&
                (this.$element.find('.has-submenu-toggle').
                    removeClass('has-submenu-toggle'), this.$element.find(
                    '.submenu-toggle').remove()), u.a.Burn(this.$element,
                    'accordion');
              },
            }]), e;
        }(h.a);
    f.defaults = {
      slideSpeed: 250,
      submenuToggle: !1,
      submenuToggleText: 'Toggle menu',
      multiOpen: !0,
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return p;
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(9),
        c = i(1),
        h = i(7),
        d = i(2),
        f = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        p = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), f(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = r.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'Drilldown', this._init(), l.a.register(
                    'Drilldown', {
                      ENTER: 'open',
                      SPACE: 'open',
                      ARROW_RIGHT: 'next',
                      ARROW_UP: 'up',
                      ARROW_DOWN: 'down',
                      ARROW_LEFT: 'previous',
                      ESCAPE: 'close',
                      TAB: 'down',
                      SHIFT_TAB: 'up',
                    });
              },
            }, {
              key: '_init',
              value: function() {
                u.a.Feather(this.$element,
                    'drilldown'), this.options.autoApplyClass &&
                this.$element.addClass('drilldown'), this.$element.attr({
                  role: 'tree',
                  'aria-multiselectable': !1,
                }), this.$submenuAnchors = this.$element.find(
                    'li.is-drilldown-submenu-parent').
                    children('a'), this.$submenus = this.$submenuAnchors.parent(
                    'li').
                    children('[data-submenu]').
                    attr('role', 'group'), this.$menuItems = this.$element.find(
                    'li').
                    not('.js-drilldown-back').
                    attr('role', 'treeitem').
                    find('a'), this.$element.attr('data-mutate',
                    this.$element.attr('data-drilldown') || i.i(c.b)(6,
                    'drilldown')), this._prepareMenu(), this._registerEvents(), this._keyboardEvents();
              },
            }, {
              key: '_prepareMenu',
              value: function() {
                var t = this;
                this.$submenuAnchors.each(function() {
                  var e = r()(this),
                      i = e.parent();
                  t.options.parentLink && e.clone().
                      prependTo(i.children('[data-submenu]')).
                      wrap(
                          '<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>'), e.data(
                      'savedHref', e.attr('href')).
                      removeAttr('href').
                      attr('tabindex', 0), e.children('[data-submenu]').attr({
                    'aria-hidden': !0,
                    tabindex: 0,
                    role: 'group',
                  }), t._events(e);
                }), this.$submenus.each(function() {
                  var e = r()(this);
                  if (!e.find(
                      '.js-drilldown-back').length) switch (t.options.backButtonPosition) {
                    case 'bottom':
                      e.append(t.options.backButton);
                      break;
                    case 'top':
                      e.prepend(t.options.backButton);
                      break;
                    default:
                      console.error('Unsupported backButtonPosition value \'' +
                          t.options.backButtonPosition + '\'');
                  }
                  t._back(e);
                }), this.$submenus.addClass(
                    'invisible'), this.options.autoHeight ||
                this.$submenus.addClass(
                    'drilldown-submenu-cover-previous'), this.$element.parent().
                    hasClass('is-drilldown') ||
                (this.$wrapper = r()(this.options.wrapper).
                    addClass('is-drilldown'), this.options.animateHeight &&
                this.$wrapper.addClass('animate-height'), this.$element.wrap(
                    this.$wrapper)), this.$wrapper = this.$element.parent(), this.$wrapper.css(
                    this._getMaxDims());
              },
            }, {
              key: '_resize',
              value: function() {
                this.$wrapper.css({
                  'max-width': 'none',
                  'min-height': 'none',
                }), this.$wrapper.css(this._getMaxDims());
              },
            }, {
              key: '_events',
              value: function(t) {
                var e = this;
                t.off('click.zf.drilldown').
                    on('click.zf.drilldown', function(i) {
                      if (r()(i.target).
                          parentsUntil('ul', 'li').
                          hasClass('is-drilldown-submenu-parent') &&
                      (i.stopImmediatePropagation(), i.preventDefault()), e._show(
                          t.parent('li')), e.options.closeOnClick) {
                        var n = r()('body');
                        n.off('.zf.drilldown').
                            on('click.zf.drilldown', function(t) {
                              t.target === e.$element[0] ||
                              r.a.contains(e.$element[0], t.target) ||
                              (t.preventDefault(), e._hideAll(), n.off(
                                  '.zf.drilldown'));
                            });
                      }
                    });
              },
            }, {
              key: '_registerEvents',
              value: function() {
                this.options.scrollTop &&
                (this._bindHandler = this._scrollTop.bind(
                    this), this.$element.on(
                    'open.zf.drilldown hide.zf.drilldown closed.zf.drilldown',
                    this._bindHandler)), this.$element.on('mutateme.zf.trigger',
                    this._resize.bind(this));
              },
            }, {
              key: '_scrollTop',
              value: function() {
                var t = this,
                    e = '' != t.options.scrollTopElement ? r()(
                        t.options.scrollTopElement) : t.$element,
                    i = parseInt(e.offset().top + t.options.scrollTopOffset,
                        10);
                r()('html, body').stop(!0).animate({
                      scrollTop: i,
                    }, t.options.animationDuration, t.options.animationEasing,
                    function() {
                      this === r()('html')[0] &&
                      t.$element.trigger('scrollme.zf.drilldown');
                    });
              },
            }, {
              key: '_keyboardEvents',
              value: function() {
                var t = this;
                this.$menuItems.add(this.$element.find(
                    '.js-drilldown-back > a, .is-submenu-parent-item > a')).
                    on('keydown.zf.drilldown', function(e) {
                      var n, s, o = r()(this),
                          a = o.parent('li').
                              parent('ul').
                              children('li').
                              children('a');
                      a.each(function(t) {
                        if (r()(this).is(o)) return n = a.eq(
                            Math.max(0, t - 1)), void (s = a.eq(
                            Math.min(t + 1, a.length - 1)));
                      }), l.a.handleKey(e, 'Drilldown', {
                        next: function() {
                          if (o.is(t.$submenuAnchors)) return t._show(
                              o.parent('li')), o.parent('li').
                              one(i.i(c.c)(o), function() {
                                o.parent('li').
                                    find('ul li a').
                                    filter(t.$menuItems).
                                    first().
                                    focus();
                              }), !0;
                        },
                        previous: function() {
                          return t._hide(o.parent('li').parent('ul')), o.parent(
                              'li').parent('ul').one(i.i(c.c)(o), function() {
                            setTimeout(function() {
                              o.parent('li').
                                  parent('ul').
                                  parent('li').
                                  children('a').
                                  first().
                                  focus();
                            }, 1);
                          }), !0;
                        },
                        up: function() {
                          return n.focus(), !o.is(
                              t.$element.find('> li:first-child > a'));
                        },
                        down: function() {
                          return s.focus(), !o.is(
                              t.$element.find('> li:last-child > a'));
                        },
                        close: function() {
                          o.is(t.$element.find('> li > a')) ||
                          (t._hide(o.parent().parent()), o.parent().
                              parent().
                              siblings('a').
                              focus());
                        },
                        open: function() {
                          return o.is(t.$menuItems) ? o.is(t.$submenuAnchors)
                              ? (t._show(o.parent('li')), o.parent('li').
                                  one(i.i(c.c)(o), function() {
                                    o.parent('li').
                                        find('ul li a').
                                        filter(t.$menuItems).
                                        first().
                                        focus();
                                  }), !0)
                              : void 0 : (t._hide(
                              o.parent('li').parent('ul')), o.parent('li').
                              parent('ul').
                              one(i.i(c.c)(o), function() {
                                setTimeout(function() {
                                  o.parent('li').
                                      parent('ul').
                                      parent('li').
                                      children('a').
                                      first().
                                      focus();
                                }, 1);
                              }), !0);
                        },
                        handled: function(t) {
                          t && e.preventDefault(), e.stopImmediatePropagation();
                        },
                      });
                    });
              },
            }, {
              key: '_hideAll',
              value: function() {
                var t = this.$element.find('.is-drilldown-submenu.is-active').
                    addClass('is-closing');
                this.options.autoHeight && this.$wrapper.css({
                  height: t.parent().closest('ul').data('calcHeight'),
                }), t.one(i.i(c.c)(t), function(e) {
                  t.removeClass('is-active is-closing');
                }), this.$element.trigger('closed.zf.drilldown');
              },
            }, {
              key: '_back',
              value: function(t) {
                var e = this;
                t.off('click.zf.drilldown'), t.children('.js-drilldown-back').
                    on('click.zf.drilldown', function(i) {
                      i.stopImmediatePropagation(), e._hide(t);
                      var n = t.parent('li').parent('ul').parent('li');
                      n.length && e._show(n);
                    });
              },
            }, {
              key: '_menuLinkEvents',
              value: function() {
                var t = this;
                this.$menuItems.not('.is-drilldown-submenu-parent').
                    off('click.zf.drilldown').
                    on('click.zf.drilldown', function(e) {
                      setTimeout(function() {
                        t._hideAll();
                      }, 0);
                    });
              },
            }, {
              key: '_show',
              value: function(t) {
                this.options.autoHeight && this.$wrapper.css({
                  height: t.children('[data-submenu]').data('calcHeight'),
                }), t.attr('aria-expanded', !0), t.children('[data-submenu]').
                    addClass('is-active').
                    removeClass('invisible').
                    attr('aria-hidden', !1), this.$element.trigger(
                    'open.zf.drilldown', [t]);
              },
            }, {
              key: '_hide',
              value: function(t) {
                this.options.autoHeight && this.$wrapper.css({
                  height: t.parent().closest('ul').data('calcHeight'),
                });
                t.parent('li').attr('aria-expanded', !1), t.attr('aria-hidden',
                    !0).addClass('is-closing'), t.addClass('is-closing').
                    one(i.i(c.c)(t), function() {
                      t.removeClass('is-active is-closing'), t.blur().
                          addClass('invisible');
                    }), t.trigger('hide.zf.drilldown', [t]);
              },
            }, {
              key: '_getMaxDims',
              value: function() {
                var t = 0,
                    e = {},
                    i = this;
                return this.$submenus.add(this.$element).each(function() {
                  var n = (r()(this).children('li').length, h.a.GetDimensions(
                      this).height);
                  t = n > t ? n : t, i.options.autoHeight &&
                  (r()(this).data('calcHeight', n), r()(this).
                      hasClass('is-drilldown-submenu') || (e.height = n));
                }), this.options.autoHeight || (e['min-height'] = t +
                    'px'), e['max-width'] = this.$element[0].getBoundingClientRect().width +
                    'px', e;
              },
            }, {
              key: '_destroy',
              value: function() {
                this.options.scrollTop && this.$element.off('.zf.drilldown',
                    this._bindHandler), this._hideAll(), this.$element.off(
                    'mutateme.zf.trigger'), u.a.Burn(this.$element,
                    'drilldown'), this.$element.unwrap().
                    find('.js-drilldown-back, .is-submenu-parent-item').
                    remove().
                    end().
                    find('.is-active, .is-closing, .is-drilldown-submenu').
                    removeClass('is-active is-closing is-drilldown-submenu').
                    end().
                    find('[data-submenu]').
                    removeAttr(
                        'aria-hidden tabindex role'), this.$submenuAnchors.each(
                    function() {
                      r()(this).off('.zf.drilldown');
                    }), this.$submenus.removeClass(
                    'drilldown-submenu-cover-previous invisible'), this.$element.find(
                    'a').each(function() {
                  var t = r()(this);
                  t.removeAttr('tabindex'), t.data('savedHref') &&
                  t.attr('href', t.data('savedHref')).removeData('savedHref');
                });
              },
            }]), e;
        }(d.a);
    p.defaults = {
      autoApplyClass: !0,
      backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
      backButtonPosition: 'top',
      wrapper: '<div></div>',
      parentLink: !1,
      closeOnClick: !1,
      autoHeight: !1,
      animateHeight: !1,
      scrollTop: !1,
      scrollTopElement: '',
      scrollTopOffset: 0,
      animationDuration: 500,
      animationEasing: 'swing',
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return p;
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(9),
        c = i(7),
        h = i(1),
        d = i(2),
        f = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        p = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), f(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = r.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'DropdownMenu', this._init(), l.a.register(
                    'DropdownMenu', {
                      ENTER: 'open',
                      SPACE: 'open',
                      ARROW_RIGHT: 'next',
                      ARROW_UP: 'up',
                      ARROW_DOWN: 'down',
                      ARROW_LEFT: 'previous',
                      ESCAPE: 'close',
                    });
              },
            }, {
              key: '_init',
              value: function() {
                u.a.Feather(this.$element, 'dropdown');
                var t = this.$element.find('li.is-dropdown-submenu-parent');
                this.$element.children('.is-dropdown-submenu-parent').
                    children('.is-dropdown-submenu').
                    addClass('first-sub'), this.$menuItems = this.$element.find(
                    '[role="menuitem"]'), this.$tabs = this.$element.children(
                    '[role="menuitem"]'), this.$tabs.find(
                    'ul.is-dropdown-submenu').
                    addClass(this.options.verticalClass), 'auto' ===
                this.options.alignment ? this.$element.hasClass(
                    this.options.rightClass) || i.i(h.a)() ||
                this.$element.parents('.top-bar-right').is('*')
                    ? (this.options.alignment = 'right', t.addClass(
                        'opens-left'))
                    : (this.options.alignment = 'left', t.addClass(
                        'opens-right')) : 'right' === this.options.alignment
                    ? t.addClass('opens-left')
                    : t.addClass(
                        'opens-right'), this.changed = !1, this._events();
              },
            }, {
              key: '_isVertical',
              value: function() {
                return 'block' === this.$tabs.css('display') || 'column' ===
                    this.$element.css('flex-direction');
              },
            }, {
              key: '_isRtl',
              value: function() {
                return this.$element.hasClass('align-right') || i.i(h.a)() &&
                    !this.$element.hasClass('align-left');
              },
            }, {
              key: '_events',
              value: function() {
                var t = this,
                    e = 'ontouchstart' in window || void 0 !==
                        window.ontouchstart,
                    i = 'is-dropdown-submenu-parent',
                    n = function(n) {
                      var s = r()(n.target).parentsUntil('ul', '.' + i),
                          o = s.hasClass(i),
                          a = 'true' === s.attr('data-is-click'),
                          l = s.children('.is-dropdown-submenu');
                      if (o)
                        if (a) {
                          if (!t.options.closeOnClick || !t.options.clickOpen &&
                              !e || t.options.forceFollow && e) return;
                          n.stopImmediatePropagation(), n.preventDefault(), t._hide(
                              s);
                        } else n.preventDefault(), n.stopImmediatePropagation(), t._show(
                            l), s.add(s.parentsUntil(t.$element, '.' + i)).
                            attr('data-is-click', !0);
                    };
                (this.options.clickOpen || e) && this.$menuItems.on(
                    'click.zf.dropdownmenu touchstart.zf.dropdownmenu',
                    n), t.options.closeOnClickInside &&
                this.$menuItems.on('click.zf.dropdownmenu', function(e) {
                  r()(this).hasClass(i) || t._hide();
                }), this.options.disableHover ||
                this.$menuItems.on('mouseenter.zf.dropdownmenu', function(e) {
                  var n = r()(this);
                  n.hasClass(i) &&
                  (clearTimeout(n.data('_delay')), n.data('_delay',
                      setTimeout(function() {
                        t._show(n.children('.is-dropdown-submenu'));
                      }, t.options.hoverDelay)));
                }).on('mouseleave.zf.dropdownmenu', function(e) {
                  var n = r()(this);
                  if (n.hasClass(i) && t.options.autoclose) {
                    if ('true' === n.attr('data-is-click') &&
                        t.options.clickOpen) return !1;
                    clearTimeout(n.data('_delay')), n.data('_delay',
                        setTimeout(function() {
                          t._hide(n);
                        }, t.options.closingTime));
                  }
                }), this.$menuItems.on('keydown.zf.dropdownmenu', function(e) {
                  var i, n,
                      s = r()(e.target).parentsUntil('ul', '[role="menuitem"]'),
                      o = t.$tabs.index(s) > -1,
                      a = o ? t.$tabs : s.siblings('li').add(s);
                  a.each(function(t) {
                    if (r()(this).is(s)) return i = a.eq(t - 1), void (n = a.eq(
                        t + 1));
                  });
                  var u = function() {
                        n.children('a:first').focus(), e.preventDefault();
                      },
                      c = function() {
                        i.children('a:first').focus(), e.preventDefault();
                      },
                      h = function() {
                        var i = s.children('ul.is-dropdown-submenu');
                        i.length && (t._show(i), s.find('li > a:first').
                            focus(), e.preventDefault());
                      },
                      d = function() {
                        var i = s.parent('ul').parent('li');
                        i.children('a:first').focus(), t._hide(
                            i), e.preventDefault();
                      },
                      f = {
                        open: h,
                        close: function() {
                          t._hide(t.$element), t.$menuItems.eq(0).
                              children('a').
                              focus(), e.preventDefault();
                        },
                        handled: function() {
                          e.stopImmediatePropagation();
                        },
                      };
                  o ? t._isVertical() ? t._isRtl() ? r.a.extend(f, {
                    down: u,
                    up: c,
                    next: d,
                    previous: h,
                  }) : r.a.extend(f, {
                    down: u,
                    up: c,
                    next: h,
                    previous: d,
                  }) : t._isRtl() ? r.a.extend(f, {
                    next: c,
                    previous: u,
                    down: h,
                    up: d,
                  }) : r.a.extend(f, {
                    next: u,
                    previous: c,
                    down: h,
                    up: d,
                  }) : t._isRtl() ? r.a.extend(f, {
                    next: d,
                    previous: h,
                    down: u,
                    up: c,
                  }) : r.a.extend(f, {
                    next: h,
                    previous: d,
                    down: u,
                    up: c,
                  }), l.a.handleKey(e, 'DropdownMenu', f);
                });
              },
            }, {
              key: '_addBodyHandler',
              value: function() {
                var t = r()(document.body),
                    e = this;
                t.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu').
                    on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu',
                        function(i) {
                          e.$element.find(i.target).length || (e._hide(), t.off(
                              'mouseup.zf.dropdownmenu touchend.zf.dropdownmenu'));
                        });
              },
            }, {
              key: '_show',
              value: function(t) {
                var e = this.$tabs.index(this.$tabs.filter(function(e, i) {
                      return r()(i).find(t).length > 0;
                    })),
                    i = t.parent('li.is-dropdown-submenu-parent').
                        siblings('li.is-dropdown-submenu-parent');
                this._hide(i, e), t.css('visibility', 'hidden').
                    addClass('js-dropdown-active').
                    parent('li.is-dropdown-submenu-parent').
                    addClass('is-active');
                var n = c.a.ImNotTouchingYou(t, null, !0);
                if (!n) {
                  var s = 'left' === this.options.alignment
                      ? '-right'
                      : '-left',
                      o = t.parent('.is-dropdown-submenu-parent');
                  o.removeClass('opens' + s).
                      addClass('opens-' +
                          this.options.alignment), n = c.a.ImNotTouchingYou(t,
                      null, !0), n ||
                  o.removeClass('opens-' + this.options.alignment).
                      addClass('opens-inner'), this.changed = !0;
                }
                t.css('visibility', ''), this.options.closeOnClick &&
                this._addBodyHandler(), this.$element.trigger(
                    'show.zf.dropdownmenu', [t]);
              },
            }, {
              key: '_hide',
              value: function(t, e) {
                var i;
                if (i = t && t.length ? t : void 0 !== e ? this.$tabs.not(
                    function(t, i) {
                      return t === e;
                    }) : this.$element, i.hasClass('is-active') ||
                i.find('.is-active').length > 0) {
                  if (i.find('li.is-active').add(i).attr({
                    'data-is-click': !1,
                  }).removeClass('is-active'), i.find('ul.js-dropdown-active').
                      removeClass('js-dropdown-active'), this.changed ||
                  i.find('opens-inner').length) {
                    var n = 'left' === this.options.alignment
                        ? 'right'
                        : 'left';
                    i.find('li.is-dropdown-submenu-parent').
                        add(i).
                        removeClass(
                            'opens-inner opens-' + this.options.alignment).
                        addClass('opens-' + n), this.changed = !1;
                  }
                  this.$element.trigger('hide.zf.dropdownmenu', [i]);
                }
              },
            }, {
              key: '_destroy',
              value: function() {
                this.$menuItems.off('.zf.dropdownmenu').
                    removeAttr('data-is-click').
                    removeClass(
                        'is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner'), r()(
                    document.body).off('.zf.dropdownmenu'), u.a.Burn(
                    this.$element, 'dropdown');
              },
            }]), e;
        }(d.a);
    p.defaults = {
      disableHover: !1,
      autoclose: !0,
      hoverDelay: 50,
      clickOpen: !1,
      closingTime: 500,
      alignment: 'auto',
      closeOnClick: !0,
      closeOnClickInside: !0,
      verticalClass: 'vertical',
      rightClass: 'align-right',
      forceFollow: !0,
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    function a(t, e) {
      var i = e.indexOf(t);
      return i === e.length - 1 ? e[0] : e[i + 1];
    }

    i.d(e, 'a', function() {
      return m;
    });
    var r = i(7),
        l = i(2),
        u = i(1),
        c = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        h = ['left', 'right', 'top', 'bottom'],
        d = ['top', 'bottom', 'center'],
        f = ['left', 'right', 'center'],
        p = {
          left: d,
          right: d,
          top: f,
          bottom: f,
        },
        m = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), c(e, [
            {
              key: '_init',
              value: function() {
                this.triedPositions = {}, this.position = 'auto' ===
                this.options.position
                    ? this._getDefaultPosition()
                    : this.options.position, this.alignment = 'auto' ===
                this.options.alignment
                    ? this._getDefaultAlignment()
                    : this.options.alignment;
              },
            }, {
              key: '_getDefaultPosition',
              value: function() {
                return 'bottom';
              },
            }, {
              key: '_getDefaultAlignment',
              value: function() {
                switch (this.position) {
                  case 'bottom':
                  case 'top':
                    return i.i(u.a)() ? 'right' : 'left';
                  case 'left':
                  case 'right':
                    return 'bottom';
                }
              },
            }, {
              key: '_reposition',
              value: function() {
                this._alignmentsExhausted(this.position)
                    ? (this.position = a(this.position,
                    h), this.alignment = p[this.position][0])
                    : this._realign();
              },
            }, {
              key: '_realign',
              value: function() {
                this._addTriedPosition(this.position,
                    this.alignment), this.alignment = a(this.alignment,
                    p[this.position]);
              },
            }, {
              key: '_addTriedPosition',
              value: function(t, e) {
                this.triedPositions[t] = this.triedPositions[t] ||
                    [], this.triedPositions[t].push(e);
              },
            }, {
              key: '_positionsExhausted',
              value: function() {
                for (var t = !0, e = 0; e < h.length; e++) t = t &&
                    this._alignmentsExhausted(h[e]);
                return t;
              },
            }, {
              key: '_alignmentsExhausted',
              value: function(t) {
                return this.triedPositions[t] &&
                    this.triedPositions[t].length == p[t].length;
              },
            }, {
              key: '_getVOffset',
              value: function() {
                return this.options.vOffset;
              },
            }, {
              key: '_getHOffset',
              value: function() {
                return this.options.hOffset;
              },
            }, {
              key: '_setPosition',
              value: function(t, e, i) {
                if ('false' === t.attr('aria-expanded')) return !1;
                r.a.GetDimensions(e), r.a.GetDimensions(t);
                if (e.offset(
                    r.a.GetExplicitOffsets(e, t, this.position, this.alignment,
                        this._getVOffset(),
                        this._getHOffset())), !this.options.allowOverlap) {
                  for (var n = 1e8, s = {
                    position: this.position,
                    alignment: this.alignment,
                  }; !this._positionsExhausted();) {
                    var o = r.a.OverlapArea(e, i, !1, !1,
                        this.options.allowBottomOverlap);
                    if (0 === o) return;
                    o < n && (n = o, s = {
                      position: this.position,
                      alignment: this.alignment,
                    }), this._reposition(), e.offset(
                        r.a.GetExplicitOffsets(e, t, this.position,
                            this.alignment, this._getVOffset(),
                            this._getHOffset()));
                  }
                  this.position = s.position, this.alignment = s.alignment, e.offset(
                      r.a.GetExplicitOffsets(e, t, this.position,
                          this.alignment, this._getVOffset(),
                          this._getHOffset()));
                }
              },
            }]), e;
        }(l.a);
    m.defaults = {
      position: 'auto',
      alignment: 'auto',
      allowOverlap: !1,
      allowBottomOverlap: !0,
      vOffset: 0,
      hOffset: 0,
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return h;
    });
    var a = i(0),
        r = i.n(a),
        l = i(1),
        u = i(2),
        c = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        h = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), c(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = r.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'SmoothScroll', this._init();
              },
            }, {
              key: '_init',
              value: function() {
                var t = this.$element[0].id || i.i(l.b)(6, 'smooth-scroll');
                this.$element.attr({
                  id: t,
                }), this._events();
              },
            }, {
              key: '_events',
              value: function() {
                var t = this,
                    i = function(i) {
                      if (!r()(this).is('a[href^="#"]')) return !1;
                      var n = this.getAttribute('href');
                      t._inTransition = !0, e.scrollToLoc(n, t.options,
                          function() {
                            t._inTransition = !1;
                          }), i.preventDefault();
                    };
                this.$element.on('click.zf.smoothScroll', i), this.$element.on(
                    'click.zf.smoothScroll', 'a[href^="#"]', i);
              },
            }], [
            {
              key: 'scrollToLoc',
              value: function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : e.defaults,
                    n = arguments[2];
                if (!r()(t).length) return !1;
                var s = Math.round(
                    r()(t).offset().top - i.threshold / 2 - i.offset);
                r()('html, body').stop(!0).animate({
                  scrollTop: s,
                }, i.animationDuration, i.animationEasing, function() {
                  n && 'function' == typeof n && n();
                });
              },
            }]), e;
        }(u.a);
    h.defaults = {
      animationDuration: 500,
      animationEasing: 'linear',
      threshold: 50,
      offset: 0,
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return d;
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(8),
        c = i(2),
        h = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        d = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), h(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = r.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'Tabs', this._init(), l.a.register(
                    'Tabs', {
                      ENTER: 'open',
                      SPACE: 'open',
                      ARROW_RIGHT: 'next',
                      ARROW_UP: 'previous',
                      ARROW_DOWN: 'next',
                      ARROW_LEFT: 'previous',
                    });
              },
            }, {
              key: '_init',
              value: function() {
                var t = this,
                    e = this;
                if (this.$element.attr({
                  role: 'tablist',
                }), this.$tabTitles = this.$element.find(
                    '.' + this.options.linkClass), this.$tabContent = r()(
                    '[data-tabs-content="' + this.$element[0].id +
                    '"]'), this.$tabTitles.each(function() {
                  var t = r()(this),
                      i = t.find('a'),
                      n = t.hasClass('' + e.options.linkActiveClass),
                      s = i.attr('data-tabs-target') || i[0].hash.slice(1),
                      o = i[0].id ? i[0].id : s + '-label',
                      a = r()('#' + s);
                  t.attr({
                    role: 'presentation',
                  }), i.attr({
                    role: 'tab',
                    'aria-controls': s,
                    'aria-selected': n,
                    id: o,
                    tabindex: n ? '0' : '-1',
                  }), a.attr({
                    role: 'tabpanel',
                    'aria-labelledby': o,
                  }), n || a.attr('aria-hidden', 'true'), n &&
                  e.options.autoFocus && r()(window).load(function() {
                    r()('html, body').animate({
                      scrollTop: t.offset().top,
                    }, e.options.deepLinkSmudgeDelay, function() {
                      i.focus();
                    });
                  });
                }), this.options.matchHeight) {
                  var n = this.$tabContent.find('img');
                  n.length
                      ? i.i(u.a)(n, this._setHeight.bind(this))
                      : this._setHeight();
                }
                this._checkDeepLink = function() {
                  var e = window.location.hash;
                  if (e.length) {
                    var i = t.$element.find('[href$="' + e + '"]');
                    if (i.length) {
                      if (t.selectTab(r()(e), !0), t.options.deepLinkSmudge) {
                        var n = t.$element.offset();
                        r()('html, body').animate({
                          scrollTop: n.top,
                        }, t.options.deepLinkSmudgeDelay);
                      }
                      t.$element.trigger('deeplink.zf.tabs', [i, r()(e)]);
                    }
                  }
                }, this.options.deepLink &&
                this._checkDeepLink(), this._events();
              },
            }, {
              key: '_events',
              value: function() {
                this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, this.options.matchHeight &&
                (this._setHeightMqHandler = this._setHeight.bind(this), r()(
                    window).
                    on('changed.zf.mediaquery',
                        this._setHeightMqHandler)), this.options.deepLink &&
                r()(window).on('popstate', this._checkDeepLink);
              },
            }, {
              key: '_addClickHandler',
              value: function() {
                var t = this;
                this.$element.off('click.zf.tabs').
                    on('click.zf.tabs', '.' + this.options.linkClass,
                        function(e) {
                          e.preventDefault(), e.stopPropagation(), t._handleTabChange(
                              r()(this));
                        });
              },
            }, {
              key: '_addKeyHandler',
              value: function() {
                var t = this;
                this.$tabTitles.off('keydown.zf.tabs').
                    on('keydown.zf.tabs', function(e) {
                      if (9 !== e.which) {
                        var i, n, s = r()(this),
                            o = s.parent('ul').children('li');
                        o.each(function(e) {
                          if (r()(this).is(s)) return void (t.options.wrapOnKeys
                              ? (i = 0 === e ? o.last() : o.eq(e - 1), n = e ===
                              o.length - 1 ? o.first() : o.eq(e + 1))
                              : (i = o.eq(Math.max(0, e - 1)), n = o.eq(
                                  Math.min(e + 1, o.length - 1))));
                        }), l.a.handleKey(e, 'Tabs', {
                          open: function() {
                            s.find('[role="tab"]').focus(), t._handleTabChange(
                                s);
                          },
                          previous: function() {
                            i.find('[role="tab"]').focus(), t._handleTabChange(
                                i);
                          },
                          next: function() {
                            n.find('[role="tab"]').focus(), t._handleTabChange(
                                n);
                          },
                          handled: function() {
                            e.stopPropagation(), e.preventDefault();
                          },
                        });
                      }
                    });
              },
            }, {
              key: '_handleTabChange',
              value: function(t, e) {
                if (t.hasClass('' +
                    this.options.linkActiveClass)) return void (this.options.activeCollapse &&
                    (this._collapseTab(t), this.$element.trigger(
                        'collapse.zf.tabs', [t])));
                var i = this.$element.find('.' + this.options.linkClass + '.' +
                    this.options.linkActiveClass),
                    n = t.find('[role="tab"]'),
                    s = n.attr('data-tabs-target') || n[0].hash.slice(1),
                    o = this.$tabContent.find('#' + s);
                if (this._collapseTab(i), this._openTab(
                    t), this.options.deepLink && !e) {
                  var a = t.find('a').attr('href');
                  this.options.updateHistory
                      ? history.pushState({}, '', a)
                      : history.replaceState({}, '', a);
                }
                this.$element.trigger('change.zf.tabs', [t, o]), o.find(
                    '[data-mutate]').trigger('mutateme.zf.trigger');
              },
            }, {
              key: '_openTab',
              value: function(t) {
                var e = t.find('[role="tab"]'),
                    i = e.attr('data-tabs-target') || e[0].hash.slice(1),
                    n = this.$tabContent.find('#' + i);
                t.addClass('' + this.options.linkActiveClass), e.attr({
                  'aria-selected': 'true',
                  tabindex: '0',
                }), n.addClass('' + this.options.panelActiveClass).
                    removeAttr('aria-hidden');
              },
            }, {
              key: '_collapseTab',
              value: function(t) {
                var e = t.removeClass('' + this.options.linkActiveClass).
                    find('[role="tab"]').
                    attr({
                      'aria-selected': 'false',
                      tabindex: -1,
                    });
                r()('#' + e.attr('aria-controls')).
                    removeClass('' + this.options.panelActiveClass).
                    attr({
                      'aria-hidden': 'true',
                    });
              },
            }, {
              key: 'selectTab',
              value: function(t, e) {
                var i;
                i = 'object' == typeof t ? t[0].id : t, i.indexOf('#') < 0 &&
                (i = '#' + i);
                var n = this.$tabTitles.find('[href$="' + i + '"]').
                    parent('.' + this.options.linkClass);
                this._handleTabChange(n, e);
              },
            }, {
              key: '_setHeight',
              value: function() {
                var t = 0,
                    e = this;
                this.$tabContent.find('.' + this.options.panelClass).
                    css('height', '').
                    each(function() {
                      var i = r()(this),
                          n = i.hasClass('' + e.options.panelActiveClass);
                      n || i.css({
                        visibility: 'hidden',
                        display: 'block',
                      });
                      var s = this.getBoundingClientRect().height;
                      n || i.css({
                        visibility: '',
                        display: '',
                      }), t = s > t ? s : t;
                    }).
                    css('height', t + 'px');
              },
            }, {
              key: '_destroy',
              value: function() {
                this.$element.find('.' + this.options.linkClass).
                    off('.zf.tabs').
                    hide().
                    end().
                    find('.' + this.options.panelClass).
                    hide(), this.options.matchHeight && null !=
                this._setHeightMqHandler && r()(window).
                    off('changed.zf.mediaquery',
                        this._setHeightMqHandler), this.options.deepLink &&
                r()(window).off('popstate', this._checkDeepLink);
              },
            }]), e;
        }(c.a);
    d.defaults = {
      deepLink: !1,
      deepLinkSmudge: !1,
      deepLinkSmudgeDelay: 300,
      updateHistory: !1,
      autoFocus: !1,
      wrapOnKeys: !0,
      matchHeight: !1,
      activeCollapse: !1,
      linkClass: 'tabs-title',
      linkActiveClass: 'is-active',
      panelClass: 'tabs-panel',
      panelActiveClass: 'is-active',
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e, i) {
      var n, s, o = this,
          a = e.duration,
          r = Object.keys(t.data())[0] || 'timer',
          l = -1;
      this.isPaused = !1, this.restart = function() {
        l = -1, clearTimeout(s), this.start();
      }, this.start = function() {
        this.isPaused = !1, clearTimeout(s), l = l <= 0 ? a : l, t.data(
            'paused', !1), n = Date.now(), s = setTimeout(function() {
          e.infinite && o.restart(), i && 'function' == typeof i && i();
        }, l), t.trigger('timerstart.zf.' + r);
      }, this.pause = function() {
        this.isPaused = !0, clearTimeout(s), t.data('paused', !0);
        var e = Date.now();
        l -= e - n, t.trigger('timerpaused.zf.' + r);
      };
    }

    i.d(e, 'a', function() {
      return n;
    });
    var s = i(0);
    i.n(s);
  }, function(t, e, i) {
    'use strict';
    Object.defineProperty(e, '__esModule', {
      value: !0,
    });
    var n = i(0),
        s = i.n(n),
        o = i(21),
        a = i(1),
        r = i(7),
        l = i(8),
        u = i(3),
        c = i(4),
        h = i(6),
        d = i(9),
        f = i(18),
        p = i(10),
        m = i(5),
        g = i(20),
        v = i(11),
        b = i(12),
        y = i(13),
        w = i(22),
        _ = i(14),
        $ = i(23),
        k = i(24),
        C = i(25),
        z = i(26),
        O = i(27),
        T = i(29),
        E = i(30),
        P = i(31),
        A = i(32),
        F = i(16),
        x = i(33),
        D = i(17),
        S = i(34),
        R = i(35),
        H = i(28);
    o.a.addToJquery(
        s.a), o.a.rtl = a.a, o.a.GetYoDigits = a.b, o.a.transitionend = a.c, o.a.Box = r.a, o.a.onImagesLoaded = l.a, o.a.Keyboard = u.a, o.a.MediaQuery = c.a, o.a.Motion = h.a, o.a.Move = h.b, o.a.Nest = d.a, o.a.Timer = f.a, p.a.init(
        s.a), m.a.init(s.a, o.a), o.a.plugin(g.a, 'Abide'), o.a.plugin(v.a,
        'Accordion'), o.a.plugin(b.a, 'AccordionMenu'), o.a.plugin(y.a,
        'Drilldown'), o.a.plugin(w.a, 'Dropdown'), o.a.plugin(_.a,
        'DropdownMenu'), o.a.plugin($.a, 'Equalizer'), o.a.plugin(k.a,
        'Interchange'), o.a.plugin(C.a, 'Magellan'), o.a.plugin(z.a,
        'OffCanvas'), o.a.plugin(O.a, 'Orbit'), o.a.plugin(T.a,
        'ResponsiveMenu'), o.a.plugin(E.a, 'ResponsiveToggle'), o.a.plugin(P.a,
        'Reveal'), o.a.plugin(A.a, 'Slider'), o.a.plugin(F.a,
        'SmoothScroll'), o.a.plugin(x.a, 'Sticky'), o.a.plugin(D.a,
        'Tabs'), o.a.plugin(S.a, 'Toggler'), o.a.plugin(R.a,
        'Tooltip'), o.a.plugin(H.a, 'ResponsiveAccordionTabs');
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return c;
    });
    var a = i(0),
        r = i.n(a),
        l = i(2),
        u = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        c = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), u(e, [
            {
              key: '_setup',
              value: function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                this.$element = t, this.options = r.a.extend(!0, {}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'Abide', this._init();
              },
            }, {
              key: '_init',
              value: function() {
                this.$inputs = this.$element.find(
                    'input, textarea, select'), this._events();
              },
            }, {
              key: '_events',
              value: function() {
                var t = this;
                this.$element.off('.abide').on('reset.zf.abide', function() {
                  t.resetForm();
                }).on('submit.zf.abide', function() {
                  return t.validateForm();
                }), 'fieldChange' === this.options.validateOn &&
                this.$inputs.off('change.zf.abide').
                    on('change.zf.abide', function(e) {
                      t.validateInput(r()(e.target));
                    }), this.options.liveValidate &&
                this.$inputs.off('input.zf.abide').
                    on('input.zf.abide', function(e) {
                      t.validateInput(r()(e.target));
                    }), this.options.validateOnBlur &&
                this.$inputs.off('blur.zf.abide').
                    on('blur.zf.abide', function(e) {
                      t.validateInput(r()(e.target));
                    });
              },
            }, {
              key: '_reflow',
              value: function() {
                this._init();
              },
            }, {
              key: 'requiredCheck',
              value: function(t) {
                if (!t.attr('required')) return !0;
                var e = !0;
                switch (t[0].type) {
                  case 'checkbox':
                    e = t[0].checked;
                    break;
                  case 'select':
                  case 'select-one':
                  case 'select-multiple':
                    var i = t.find('option:selected');
                    i.length && i.val() || (e = !1);
                    break;
                  default:
                    t.val() && t.val().length || (e = !1);
                }
                return e;
              },
            }, {
              key: 'findFormError',
              value: function(t) {
                var e = t[0].id,
                    i = t.siblings(this.options.formErrorSelector);
                return i.length || (i = t.parent().
                    find(this.options.formErrorSelector)), i = i.add(
                    this.$element.find('[data-form-error-for="' + e + '"]'));
              },
            }, {
              key: 'findLabel',
              value: function(t) {
                var e = t[0].id,
                    i = this.$element.find('label[for="' + e + '"]');
                return i.length ? i : t.closest('label');
              },
            }, {
              key: 'findRadioLabels',
              value: function(t) {
                var e = this,
                    i = t.map(function(t, i) {
                      var n = i.id,
                          s = e.$element.find('label[for="' + n + '"]');
                      return s.length || (s = r()(i).closest('label')), s[0];
                    });
                return r()(i);
              },
            }, {
              key: 'addErrorClasses',
              value: function(t) {
                var e = this.findLabel(t),
                    i = this.findFormError(t);
                e.length &&
                e.addClass(this.options.labelErrorClass), i.length &&
                i.addClass(this.options.formErrorClass), t.addClass(
                    this.options.inputErrorClass).attr('data-invalid', '');
              },
            }, {
              key: 'removeRadioErrorClasses',
              value: function(t) {
                var e = this.$element.find(':radio[name="' + t + '"]'),
                    i = this.findRadioLabels(e),
                    n = this.findFormError(e);
                i.length &&
                i.removeClass(this.options.labelErrorClass), n.length &&
                n.removeClass(this.options.formErrorClass), e.removeClass(
                    this.options.inputErrorClass).removeAttr('data-invalid');
              },
            }, {
              key: 'removeErrorClasses',
              value: function(t) {
                if ('radio' == t[0].type) return this.removeRadioErrorClasses(
                    t.attr('name'));
                var e = this.findLabel(t),
                    i = this.findFormError(t);
                e.length &&
                e.removeClass(this.options.labelErrorClass), i.length &&
                i.removeClass(this.options.formErrorClass), t.removeClass(
                    this.options.inputErrorClass).removeAttr('data-invalid');
              },
            }, {
              key: 'validateInput',
              value: function(t) {
                var e = this.requiredCheck(t),
                    i = !1,
                    n = !0,
                    s = t.attr('data-validator'),
                    o = !0;
                if (t.is('[data-abide-ignore]') || t.is('[type="hidden"]') ||
                    t.is('[disabled]')) return !0;
                switch (t[0].type) {
                  case 'radio':
                    i = this.validateRadio(t.attr('name'));
                    break;
                  case 'checkbox':
                    i = e;
                    break;
                  case 'select':
                  case 'select-one':
                  case 'select-multiple':
                    i = e;
                    break;
                  default:
                    i = this.validateText(t);
                }
                s &&
                (n = this.matchValidation(t, s, t.attr('required'))), t.attr(
                    'data-equalto') && (o = this.options.validators.equalTo(t));
                var a = -1 === [e, i, n, o].indexOf(!1),
                    l = (a ? 'valid' : 'invalid') + '.zf.abide';
                if (a) {
                  var u = this.$element.find(
                      '[data-equalto="' + t.attr('id') + '"]');
                  if (u.length) {
                    var c = this;
                    u.each(function() {
                      r()(this).val() && c.validateInput(r()(this));
                    });
                  }
                }
                return this[a ? 'removeErrorClasses' : 'addErrorClasses'](
                    t), t.trigger(l, [t]), a;
              },
            }, {
              key: 'validateForm',
              value: function() {
                var t = [],
                    e = this;
                this.$inputs.each(function() {
                  t.push(e.validateInput(r()(this)));
                });
                var i = -1 === t.indexOf(!1);
                return this.$element.find('[data-abide-error]').
                    css('display', i ? 'none' : 'block'), this.$element.trigger(
                    (i ? 'formvalid' : 'forminvalid') + '.zf.abide',
                    [this.$element]), i;
              },
            }, {
              key: 'validateText',
              value: function(t, e) {
                e = e || t.attr('pattern') || t.attr('type');
                var i = t.val(),
                    n = !1;
                return i.length ? n = this.options.patterns.hasOwnProperty(e)
                    ? this.options.patterns[e].test(i)
                    : e === t.attr('type') || new RegExp(e).test(i) : t.prop(
                    'required') || (n = !0), n;
              },
            }, {
              key: 'validateRadio',
              value: function(t) {
                var e = this.$element.find(':radio[name="' + t + '"]'),
                    i = !1,
                    n = !1;
                return e.each(function(t, e) {
                  r()(e).attr('required') && (n = !0);
                }), n || (i = !0), i || e.each(function(t, e) {
                  r()(e).prop('checked') && (i = !0);
                }), i;
              },
            }, {
              key: 'matchValidation',
              value: function(t, e, i) {
                var n = this;
                return i = !!i, -1 === e.split(' ').map(function(e) {
                  return n.options.validators[e](t, i, t.parent());
                }).indexOf(!1);
              },
            }, {
              key: 'resetForm',
              value: function() {
                var t = this.$element,
                    e = this.options;
                r()('.' + e.labelErrorClass, t).
                    not('small').
                    removeClass(e.labelErrorClass), r()('.' + e.inputErrorClass,
                    t).not('small').removeClass(e.inputErrorClass), r()(
                    e.formErrorSelector + '.' + e.formErrorClass).
                    removeClass(e.formErrorClass), t.find('[data-abide-error]').
                    css('display', 'none'), r()(':input', t).
                    not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').
                    val('').
                    removeAttr('data-invalid'), r()(':input:radio', t).
                    not('[data-abide-ignore]').
                    prop('checked', !1).
                    removeAttr('data-invalid'), r()(':input:checkbox', t).
                    not('[data-abide-ignore]').
                    prop('checked', !1).
                    removeAttr('data-invalid'), t.trigger('formreset.zf.abide',
                    [t]);
              },
            }, {
              key: '_destroy',
              value: function() {
                var t = this;
                this.$element.off('.abide').
                    find('[data-abide-error]').
                    css('display', 'none'), this.$inputs.off('.abide').
                    each(function() {
                      t.removeErrorClasses(r()(this));
                    });
              },
            }]), e;
        }(l.a);
    c.defaults = {
      validateOn: 'fieldChange',
      labelErrorClass: 'is-invalid-label',
      inputErrorClass: 'is-invalid-input',
      formErrorSelector: '.form-error',
      formErrorClass: 'is-visible',
      liveValidate: !1,
      validateOnBlur: !1,
      patterns: {
        alpha: /^[a-zA-Z]+$/,
        alpha_numeric: /^[a-zA-Z0-9]+$/,
        integer: /^[-+]?\d+$/,
        number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
        card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        cvv: /^([0-9]){3,4}$/,
        email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
        url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
        domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
        datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
        date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
        time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
        dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
        month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
        day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
        color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        website: {
          test: function(t) {
            return c.defaults.patterns.domain.test(t) ||
                c.defaults.patterns.url.test(t);
          },
        },
      },
      validators: {
        equalTo: function(t, e, i) {
          return r()('#' + t.attr('data-equalto')).val() === t.val();
        },
      },
    };
  }, function(t, e, i) {
    'use strict';

    function n(t) {
      if (void 0 === Function.prototype.name) {
        var e = /function\s([^(]{1,})\(/,
            i = e.exec(t.toString());
        return i && i.length > 1 ? i[1].trim() : '';
      }
      return void 0 === t.prototype
          ? t.constructor.name
          : t.prototype.constructor.name;
    }

    function s(t) {
      return 'true' === t || 'false' !== t &&
          (isNaN(1 * t) ? t : parseFloat(t));
    }

    function o(t) {
      return t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    i.d(e, 'a', function() {
      return c;
    });
    var a = i(0),
        r = i.n(a),
        l = i(1),
        u = i(4),
        c = {
          version: '6.4.3',
          _plugins: {},
          _uuids: [],
          plugin: function(t, e) {
            var i = e || n(t),
                s = o(i);
            this._plugins[s] = this[i] = t;
          },
          registerPlugin: function(t, e) {
            var s = e ? o(e) : n(t.constructor).toLowerCase();
            t.uuid = i.i(l.b)(6, s), t.$element.attr('data-' + s) ||
            t.$element.attr('data-' + s, t.uuid), t.$element.data('zfPlugin') ||
            t.$element.data('zfPlugin', t), t.$element.trigger(
                'init.zf.' + s), this._uuids.push(t.uuid);
          },
          unregisterPlugin: function(t) {
            var e = o(n(t.$element.data('zfPlugin').constructor));
            this._uuids.splice(this._uuids.indexOf(t.uuid),
                1), t.$element.removeAttr('data-' + e).
                removeData('zfPlugin').
                trigger('destroyed.zf.' + e);
            for (var i in t) t[i] = null;
          },
          reInit: function(t) {
            var e = t instanceof r.a;
            try {
              if (e) t.each(function() {
                r()(this).data('zfPlugin')._init();
              });
              else {
                var i = typeof t,
                    n = this;
                ({
                  object: function(t) {
                    t.forEach(function(t) {
                      t = o(t), r()('[data-' + t + ']').foundation('_init');
                    });
                  },
                  string: function() {
                    t = o(t), r()('[data-' + t + ']').foundation('_init');
                  },
                  undefined: function() {
                    this.object(Object.keys(n._plugins));
                  },
                })[i](t);
              }
            } catch (t) {
              console.error(t);
            } finally {
              return t;
            }
          },
          reflow: function(t, e) {
            void 0 === e ? e = Object.keys(this._plugins) : 'string' ==
                typeof e && (e = [e]);
            var i = this;
            r.a.each(e, function(e, n) {
              var o = i._plugins[n];
              r()(t).
                  find('[data-' + n + ']').
                  addBack('[data-' + n + ']').
                  each(function() {
                    var t = r()(this),
                        e = {};
                    if (t.data('zfPlugin')) return void console.warn(
                        'Tried to initialize ' + n +
                        ' on an element that already has a Foundation plugin.');
                    t.attr('data-options') &&
                    t.attr('data-options').split(';').forEach(function(t, i) {
                      var n = t.split(':').map(function(t) {
                        return t.trim();
                      });
                      n[0] && (e[n[0]] = s(n[1]));
                    });
                    try {
                      t.data('zfPlugin', new o(r()(this), e));
                    } catch (t) {
                      console.error(t);
                    } finally {

                    }
                  });
            });
          },
          getFnName: n,
          addToJquery: function(t) {
            var e = function(e) {
              var i = typeof e,
                  s = t('.no-js');
              if (s.length && s.removeClass('no-js'), 'undefined' ===
              i) u.a._init(), c.reflow(this);
              else {
                if ('string' !== i) throw new TypeError('We\'re sorry, ' + i +
                    ' is not a valid parameter. You must use a string representing the method you wish to invoke.');
                var o = Array.prototype.slice.call(arguments, 1),
                    a = this.data('zfPlugin');
                if (void 0 === a || void 0 === a[e]) throw new ReferenceError(
                    'We\'re sorry, \'' + e +
                    '\' is not an available method for ' +
                    (a ? n(a) : 'this element') + '.');
                1 === this.length ? a[e].apply(a, o) : this.each(
                    function(i, n) {
                      a[e].apply(t(n).data('zfPlugin'), o);
                    });
              }
              return this;
            };
            return t.fn.foundation = e, t;
          },
        };
    c.util = {
      throttle: function(t, e) {
        var i = null;
        return function() {
          var n = this,
              s = arguments;
          null === i && (i = setTimeout(function() {
            t.apply(n, s), i = null;
          }, e));
        };
      },
    }, window.Foundation = c,
        function() {
          Date.now && window.Date.now ||
          (window.Date.now = Date.now = function() {
            return (new Date).getTime();
          });
          for (var t = ['webkit', 'moz'], e = 0; e < t.length &&
          !window.requestAnimationFrame; ++e) {
            var i = t[e];
            window.requestAnimationFrame = window[i +
            'RequestAnimationFrame'], window.cancelAnimationFrame = window[i +
                'CancelAnimationFrame'] ||
                window[i + 'CancelRequestAnimationFrame'];
          }
          if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) ||
              !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var n = 0;
            window.requestAnimationFrame = function(t) {
              var e = Date.now(),
                  i = Math.max(n + 16, e);
              return setTimeout(function() {
                t(n = i);
              }, i - e);
            }, window.cancelAnimationFrame = clearTimeout;
          }
          window.performance && window.performance.now ||
          (window.performance = {
            start: Date.now(),
            now: function() {
              return Date.now() - this.start;
            },
          });
        }(), Function.prototype.bind || (Function.prototype.bind = function(t) {
      if ('function' != typeof this) throw new TypeError(
          'Function.prototype.bind - what is trying to be bound is not callable');
      var e = Array.prototype.slice.call(arguments, 1),
          i = this,
          n = function() {},
          s = function() {
            return i.apply(this instanceof n ? this : t,
                e.concat(Array.prototype.slice.call(arguments)));
          };
      return this.prototype &&
      (n.prototype = this.prototype), s.prototype = new n, s;
    });
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return p;
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(1),
        c = i(15),
        h = i(5),
        d = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        f = function t(e, i, n) {
          null === e && (e = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(e, i);
          if (void 0 === s) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : t(o, i, n);
          }
          if ('value' in s) return s.value;
          var a = s.get;
          if (void 0 !== a) return a.call(n);
        },
        p = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), d(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = r.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'Dropdown', h.a.init(
                    r.a), this._init(), l.a.register('Dropdown', {
                  ENTER: 'open',
                  SPACE: 'open',
                  ESCAPE: 'close',
                });
              },
            }, {
              key: '_init',
              value: function() {
                var t = this.$element.attr('id');
                this.$anchors = r()('[data-toggle="' + t + '"]').length ? r()(
                    '[data-toggle="' + t + '"]') : r()(
                    '[data-open="' + t + '"]'), this.$anchors.attr({
                  'aria-controls': t,
                  'data-is-focus': !1,
                  'data-yeti-box': t,
                  'aria-haspopup': !0,
                  'aria-expanded': !1,
                }), this._setCurrentAnchor(
                    this.$anchors.first()), this.options.parentClass
                    ? this.$parent = this.$element.parents(
                        '.' + this.options.parentClass)
                    : this.$parent = null, this.$element.attr({
                  'aria-hidden': 'true',
                  'data-yeti-box': t,
                  'data-resize': t,
                  'aria-labelledby': this.$currentAnchor.id ||
                      i.i(u.b)(6, 'dd-anchor'),
                }), f(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    '_init', this).call(this), this._events();
              },
            }, {
              key: '_getDefaultPosition',
              value: function() {
                var t = this.$element[0].className.match(
                    /(top|left|right|bottom)/g);
                return t ? t[0] : 'bottom';
              },
            }, {
              key: '_getDefaultAlignment',
              value: function() {
                var t = /float-(\S+)/.exec(this.$currentAnchor.className);
                return t ? t[1] : f(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    '_getDefaultAlignment', this).call(this);
              },
            }, {
              key: '_setPosition',
              value: function() {
                f(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    '_setPosition', this).
                    call(this, this.$currentAnchor, this.$element,
                        this.$parent);
              },
            }, {
              key: '_setCurrentAnchor',
              value: function(t) {
                this.$currentAnchor = r()(t);
              },
            }, {
              key: '_events',
              value: function() {
                var t = this;
                this.$element.on({
                  'open.zf.trigger': this.open.bind(this),
                  'close.zf.trigger': this.close.bind(this),
                  'toggle.zf.trigger': this.toggle.bind(this),
                  'resizeme.zf.trigger': this._setPosition.bind(this),
                }), this.$anchors.off('click.zf.trigger').
                    on('click.zf.trigger', function() {
                      t._setCurrentAnchor(this);
                    }), this.options.hover && (this.$anchors.off(
                    'mouseenter.zf.dropdown mouseleave.zf.dropdown').
                    on('mouseenter.zf.dropdown', function() {
                      t._setCurrentAnchor(this);
                      var e = r()('body').data();
                      void 0 !== e.whatinput && 'mouse' !== e.whatinput ||
                      (clearTimeout(t.timeout), t.timeout = setTimeout(
                          function() {
                            t.open(), t.$anchors.data('hover', !0);
                          }, t.options.hoverDelay));
                    }).
                    on('mouseleave.zf.dropdown', function() {
                      clearTimeout(t.timeout), t.timeout = setTimeout(
                          function() {
                            t.close(), t.$anchors.data('hover', !1);
                          }, t.options.hoverDelay);
                    }), this.options.hoverPane && this.$element.off(
                    'mouseenter.zf.dropdown mouseleave.zf.dropdown').
                    on('mouseenter.zf.dropdown', function() {
                      clearTimeout(t.timeout);
                    }).
                    on('mouseleave.zf.dropdown', function() {
                      clearTimeout(t.timeout), t.timeout = setTimeout(
                          function() {
                            t.close(), t.$anchors.data('hover', !1);
                          }, t.options.hoverDelay);
                    })), this.$anchors.add(this.$element).
                    on('keydown.zf.dropdown', function(e) {
                      var i = r()(this);
                      l.a.findFocusable(t.$element);
                      l.a.handleKey(e, 'Dropdown', {
                        open: function() {
                          i.is(t.$anchors) &&
                          (t.open(), t.$element.attr('tabindex', -1).
                              focus(), e.preventDefault());
                        },
                        close: function() {
                          t.close(), t.$anchors.focus();
                        },
                      });
                    });
              },
            }, {
              key: '_addBodyHandler',
              value: function() {
                var t = r()(document.body).not(this.$element),
                    e = this;
                t.off('click.zf.dropdown').on('click.zf.dropdown', function(i) {
                  e.$anchors.is(i.target) || e.$anchors.find(i.target).length ||
                  e.$element.find(i.target).length ||
                  (e.close(), t.off('click.zf.dropdown'));
                });
              },
            }, {
              key: 'open',
              value: function() {
                if (this.$element.trigger('closeme.zf.dropdown',
                    this.$element.attr('id')), this.$anchors.addClass('hover').
                    attr({
                      'aria-expanded': !0,
                    }), this.$element.addClass(
                    'is-opening'), this._setPosition(), this.$element.removeClass(
                    'is-opening').addClass('is-open').attr({
                  'aria-hidden': !1,
                }), this.options.autoFocus) {
                  var t = l.a.findFocusable(this.$element);
                  t.length && t.eq(0).focus();
                }
                this.options.closeOnClick &&
                this._addBodyHandler(), this.options.trapFocus &&
                l.a.trapFocus(this.$element), this.$element.trigger(
                    'show.zf.dropdown', [this.$element]);
              },
            }, {
              key: 'close',
              value: function() {
                if (!this.$element.hasClass('is-open')) return !1;
                this.$element.removeClass('is-open').attr({
                  'aria-hidden': !0,
                }), this.$anchors.removeClass('hover').
                    attr('aria-expanded', !1), this.$element.trigger(
                    'hide.zf.dropdown',
                    [this.$element]), this.options.trapFocus &&
                l.a.releaseFocus(this.$element);
              },
            }, {
              key: 'toggle',
              value: function() {
                if (this.$element.hasClass('is-open')) {
                  if (this.$anchors.data('hover')) return;
                  this.close();
                } else this.open();
              },
            }, {
              key: '_destroy',
              value: function() {
                this.$element.off('.zf.trigger').hide(), this.$anchors.off(
                    '.zf.dropdown'), r()(document.body).
                    off('click.zf.dropdown');
              },
            }]), e;
        }(c.a);
    p.defaults = {
      parentClass: null,
      hoverDelay: 250,
      hover: !1,
      hoverPane: !1,
      vOffset: 0,
      hOffset: 0,
      positionClass: '',
      position: 'auto',
      alignment: 'auto',
      allowOverlap: !1,
      allowBottomOverlap: !0,
      trapFocus: !1,
      autoFocus: !1,
      closeOnClick: !1,
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return f;
    });
    var a = i(0),
        r = i.n(a),
        l = i(4),
        u = i(8),
        c = i(1),
        h = i(2),
        d = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        f = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), d(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = r.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'Equalizer', this._init();
              },
            }, {
              key: '_init',
              value: function() {
                var t = this.$element.attr('data-equalizer') || '',
                    e = this.$element.find(
                        '[data-equalizer-watch="' + t + '"]');
                l.a._init(), this.$watched = e.length ? e : this.$element.find(
                    '[data-equalizer-watch]'), this.$element.attr('data-resize',
                    t || i.i(c.b)(6, 'eq')), this.$element.attr('data-mutate',
                    t ||
                    i.i(c.b)(6, 'eq')), this.hasNested = this.$element.find(
                    '[data-equalizer]').length >
                    0, this.isNested = this.$element.parentsUntil(document.body,
                    '[data-equalizer]').length >
                    0, this.isOn = !1, this._bindHandler = {
                  onResizeMeBound: this._onResizeMe.bind(this),
                  onPostEqualizedBound: this._onPostEqualized.bind(this),
                };
                var n, s = this.$element.find('img');
                this.options.equalizeOn
                    ? (n = this._checkMQ(), r()(window).
                        on('changed.zf.mediaquery', this._checkMQ.bind(this)))
                    : this._events(), (void 0 !== n && !1 === n || void 0 ===
                    n) && (s.length
                    ? i.i(u.a)(s, this._reflow.bind(this))
                    : this._reflow());
              },
            }, {
              key: '_pauseEvents',
              value: function() {
                this.isOn = !1, this.$element.off({
                  '.zf.equalizer': this._bindHandler.onPostEqualizedBound,
                  'resizeme.zf.trigger': this._bindHandler.onResizeMeBound,
                  'mutateme.zf.trigger': this._bindHandler.onResizeMeBound,
                });
              },
            }, {
              key: '_onResizeMe',
              value: function(t) {
                this._reflow();
              },
            }, {
              key: '_onPostEqualized',
              value: function(t) {
                t.target !== this.$element[0] && this._reflow();
              },
            }, {
              key: '_events',
              value: function() {
                this._pauseEvents(), this.hasNested ? this.$element.on(
                    'postequalized.zf.equalizer',
                    this._bindHandler.onPostEqualizedBound) : (this.$element.on(
                    'resizeme.zf.trigger',
                    this._bindHandler.onResizeMeBound), this.$element.on(
                    'mutateme.zf.trigger',
                    this._bindHandler.onResizeMeBound)), this.isOn = !0;
              },
            }, {
              key: '_checkMQ',
              value: function() {
                var t = !l.a.is(this.options.equalizeOn);
                return t
                    ? this.isOn &&
                    (this._pauseEvents(), this.$watched.css('height', 'auto'))
                    : this.isOn || this._events(), t;
              },
            }, {
              key: '_killswitch',
              value: function() {},
            }, {
              key: '_reflow',
              value: function() {
                if (!this.options.equalizeOnStack &&
                    this._isStacked()) return this.$watched.css('height',
                    'auto'), !1;
                this.options.equalizeByRow ? this.getHeightsByRow(
                    this.applyHeightByRow.bind(this)) : this.getHeights(
                    this.applyHeight.bind(this));
              },
            }, {
              key: '_isStacked',
              value: function() {
                return !this.$watched[0] || !this.$watched[1] ||
                    this.$watched[0].getBoundingClientRect().top !==
                    this.$watched[1].getBoundingClientRect().top;
              },
            }, {
              key: 'getHeights',
              value: function(t) {
                for (var e = [], i = 0, n = this.$watched.length; i <
                n; i++) this.$watched[i].style.height = 'auto', e.push(
                    this.$watched[i].offsetHeight);
                t(e);
              },
            }, {
              key: 'getHeightsByRow',
              value: function(t) {
                var e = this.$watched.length ? this.$watched.first().
                        offset().top : 0,
                    i = [],
                    n = 0;
                i[n] = [];
                for (var s = 0, o = this.$watched.length; s < o; s++) {
                  this.$watched[s].style.height = 'auto';
                  var a = r()(this.$watched[s]).offset().top;
                  a != e && (n++, i[n] = [], e = a), i[n].push(
                      [this.$watched[s], this.$watched[s].offsetHeight]);
                }
                for (var l = 0, u = i.length; l < u; l++) {
                  var c = r()(i[l]).map(function() {
                        return this[1];
                      }).get(),
                      h = Math.max.apply(null, c);
                  i[l].push(h);
                }
                t(i);
              },
            }, {
              key: 'applyHeight',
              value: function(t) {
                var e = Math.max.apply(null, t);
                this.$element.trigger(
                    'preequalized.zf.equalizer'), this.$watched.css('height',
                    e), this.$element.trigger('postequalized.zf.equalizer');
              },
            }, {
              key: 'applyHeightByRow',
              value: function(t) {
                this.$element.trigger('preequalized.zf.equalizer');
                for (var e = 0, i = t.length; e < i; e++) {
                  var n = t[e].length,
                      s = t[e][n - 1];
                  if (n <= 2) r()(t[e][0][0]).css({
                    height: 'auto',
                  });
                  else {
                    this.$element.trigger('preequalizedrow.zf.equalizer');
                    for (var o = 0, a = n - 1; o < a; o++) r()(t[e][o][0]).css({
                      height: s,
                    });
                    this.$element.trigger('postequalizedrow.zf.equalizer');
                  }
                }
                this.$element.trigger('postequalized.zf.equalizer');
              },
            }, {
              key: '_destroy',
              value: function() {
                this._pauseEvents(), this.$watched.css('height', 'auto');
              },
            }]), e;
        }(h.a);
    f.defaults = {
      equalizeOnStack: !1,
      equalizeByRow: !1,
      equalizeOn: '',
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return d;
    });
    var a = i(0),
        r = i.n(a),
        l = i(4),
        u = i(2),
        c = i(1),
        h = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        d = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), h(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = r.a.extend({}, e.defaults,
                    i), this.rules = [], this.currentPath = '', this.className = 'Interchange', this._init(), this._events();
              },
            }, {
              key: '_init',
              value: function() {
                l.a._init();
                var t = this.$element[0].id || i.i(c.b)(6, 'interchange');
                this.$element.attr({
                  'data-resize': t,
                  id: t,
                }), this._addBreakpoints(), this._generateRules(), this._reflow();
              },
            }, {
              key: '_events',
              value: function() {
                var t = this;
                this.$element.off('resizeme.zf.trigger').
                    on('resizeme.zf.trigger', function() {
                      return t._reflow();
                    });
              },
            }, {
              key: '_reflow',
              value: function() {
                var t;
                for (var e in this.rules)
                  if (this.rules.hasOwnProperty(e)) {
                    var i = this.rules[e];
                    window.matchMedia(i.query).matches && (t = i);
                  }
                t && this.replace(t.path);
              },
            }, {
              key: '_addBreakpoints',
              value: function() {
                for (var t in l.a.queries)
                  if (l.a.queries.hasOwnProperty(t)) {
                    var i = l.a.queries[t];
                    e.SPECIAL_QUERIES[i.name] = i.value;
                  }
              },
            }, {
              key: '_generateRules',
              value: function(t) {
                var i, n = [];
                i = this.options.rules
                    ? this.options.rules
                    : this.$element.data('interchange'), i = 'string' ==
                typeof i ? i.match(/\[.*?\]/g) : i;
                for (var s in i)
                  if (i.hasOwnProperty(s)) {
                    var o = i[s].slice(1, -1).split(', '),
                        a = o.slice(0, -1).join(''),
                        r = o[o.length - 1];
                    e.SPECIAL_QUERIES[r] && (r = e.SPECIAL_QUERIES[r]), n.push({
                      path: a,
                      query: r,
                    });
                  }
                this.rules = n;
              },
            }, {
              key: 'replace',
              value: function(t) {
                if (this.currentPath !== t) {
                  var e = this,
                      i = 'replaced.zf.interchange';
                  'IMG' === this.$element[0].nodeName ? this.$element.attr(
                      'src', t).on('load', function() {
                    e.currentPath = t;
                  }).trigger(i) : t.match(
                      /\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)
                      ? (t = t.replace(/\(/g, '%28').
                          replace(/\)/g, '%29'), this.$element.css({
                        'background-image': 'url(' + t + ')',
                      }).trigger(i))
                      : r.a.get(t, function(n) {
                        e.$element.html(n).trigger(i), r()(n).
                            foundation(), e.currentPath = t;
                      });
                }
              },
            }, {
              key: '_destroy',
              value: function() {
                this.$element.off('resizeme.zf.trigger');
              },
            }]), e;
        }(u.a);
    d.defaults = {
      rules: null,
    }, d.SPECIAL_QUERIES = {
      landscape: 'screen and (orientation: landscape)',
      portrait: 'screen and (orientation: portrait)',
      retina: 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)',
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return d;
    });
    var a = i(0),
        r = i.n(a),
        l = i(1),
        u = i(2),
        c = i(16),
        h = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        d = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), h(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = r.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'Magellan', this._init(), this.calcPoints();
              },
            }, {
              key: '_init',
              value: function() {
                var t = this.$element[0].id || i.i(l.b)(6, 'magellan');
                this.$targets = r()(
                    '[data-magellan-target]'), this.$links = this.$element.find(
                    'a'), this.$element.attr({
                  'data-resize': t,
                  'data-scroll': t,
                  id: t,
                }), this.$active = r()(), this.scrollPos = parseInt(
                    window.pageYOffset, 10), this._events();
              },
            }, {
              key: 'calcPoints',
              value: function() {
                var t = this,
                    e = document.body,
                    i = document.documentElement;
                this.points = [], this.winHeight = Math.round(
                    Math.max(window.innerHeight,
                        i.clientHeight)), this.docHeight = Math.round(
                    Math.max(e.scrollHeight, e.offsetHeight, i.clientHeight,
                        i.scrollHeight, i.offsetHeight)), this.$targets.each(
                    function() {
                      var e = r()(this),
                          i = Math.round(e.offset().top - t.options.threshold);
                      e.targetPoint = i, t.points.push(i);
                    });
              },
            }, {
              key: '_events',
              value: function() {
                var t = this;
                r()('html, body'), t.options.animationDuration, t.options.animationEasing;
                r()(window).one('load', function() {
                  t.options.deepLinking && location.hash && t.scrollToLoc(
                      location.hash), t.calcPoints(), t._updateActive();
                }), this.$element.on({
                  'resizeme.zf.trigger': this.reflow.bind(this),
                  'scrollme.zf.trigger': this._updateActive.bind(this),
                }).on('click.zf.magellan', 'a[href^="#"]', function(e) {
                  e.preventDefault();
                  var i = this.getAttribute('href');
                  t.scrollToLoc(i);
                }), this._deepLinkScroll = function(e) {
                  t.options.deepLinking && t.scrollToLoc(window.location.hash);
                }, r()(window).on('popstate', this._deepLinkScroll);
              },
            }, {
              key: 'scrollToLoc',
              value: function(t) {
                this._inTransition = !0;
                var e = this,
                    i = {
                      animationEasing: this.options.animationEasing,
                      animationDuration: this.options.animationDuration,
                      threshold: this.options.threshold,
                      offset: this.options.offset,
                    };
                c.a.scrollToLoc(t, i, function() {
                  e._inTransition = !1, e._updateActive();
                });
              },
            }, {
              key: 'reflow',
              value: function() {
                this.calcPoints(), this._updateActive();
              },
            }, {
              key: '_updateActive',
              value: function() {
                if (!this._inTransition) {
                  var t, e = parseInt(window.pageYOffset, 10);
                  if (e + this.winHeight ===
                      this.docHeight) t = this.points.length - 1;
                  else if (e < this.points[0]) t = void 0;
                  else {
                    var i = this.scrollPos < e,
                        n = this,
                        s = this.points.filter(function(t, s) {
                          return i ? t - n.options.offset <= e : t -
                              n.options.offset - n.options.threshold <= e;
                        });
                    t = s.length ? s.length - 1 : 0;
                  }
                  if (this.$active.removeClass(
                      this.options.activeClass), this.$active = this.$links.filter(
                      '[href="#' + this.$targets.eq(t).data('magellan-target') +
                      '"]').
                      addClass(
                          this.options.activeClass), this.options.deepLinking) {
                    var o = '';
                    void 0 != t &&
                    (o = this.$active[0].getAttribute('href')), o !==
                    window.location.hash &&
                    (window.history.pushState ? window.history.pushState(null,
                        null, o) : window.location.hash = o);
                  }
                  this.scrollPos = e, this.$element.trigger(
                      'update.zf.magellan', [this.$active]);
                }
              },
            }, {
              key: '_destroy',
              value: function() {
                if (this.$element.off('.zf.trigger .zf.magellan').
                    find('.' + this.options.activeClass).
                    removeClass(
                        this.options.activeClass), this.options.deepLinking) {
                  var t = this.$active[0].getAttribute('href');
                  window.location.hash.replace(t, '');
                }
                r()(window).off('popstate', this._deepLinkScroll);
              },
            }]), e;
        }(u.a);
    d.defaults = {
      animationDuration: 500,
      animationEasing: 'linear',
      threshold: 50,
      activeClass: 'is-active',
      deepLinking: !1,
      offset: 0,
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return p;
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(4),
        c = i(1),
        h = i(2),
        d = i(5),
        f = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        p = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), f(e, [
            {
              key: '_setup',
              value: function(t, i) {
                var n = this;
                this.className = 'OffCanvas', this.$element = t, this.options = r.a.extend(
                    {}, e.defaults, this.$element.data(),
                    i), this.contentClasses = {
                  base: [],
                  reveal: [],
                }, this.$lastTrigger = r()(), this.$triggers = r()(), this.position = 'left', this.$content = r()(), this.nested = !!this.options.nested, r()(
                    ['push', 'overlap']).each(function(t, e) {
                  n.contentClasses.base.push('has-transition-' + e);
                }), r()(['left', 'right', 'top', 'bottom']).
                    each(function(t, e) {
                      n.contentClasses.base.push(
                          'has-position-' + e), n.contentClasses.reveal.push(
                          'has-reveal-' + e);
                    }), d.a.init(
                    r.a), u.a._init(), this._init(), this._events(), l.a.register(
                    'OffCanvas', {
                      ESCAPE: 'close',
                    });
              },
            }, {
              key: '_init',
              value: function() {
                var t = this.$element.attr('id');
                if (this.$element.attr('aria-hidden',
                    'true'), this.options.contentId ? this.$content = r()(
                    '#' + this.options.contentId) : this.$element.siblings(
                    '[data-off-canvas-content]').length
                    ? this.$content = this.$element.siblings(
                        '[data-off-canvas-content]').first()
                    : this.$content = this.$element.closest(
                        '[data-off-canvas-content]').
                        first(), this.options.contentId
                    ? this.options.contentId && null === this.options.nested &&
                    console.warn(
                        'Remember to use the nested option if using the content ID option!')
                    : this.nested = 0 === this.$element.siblings(
                        '[data-off-canvas-content]').length, !0 ===
                this.nested &&
                (this.options.transition = 'overlap', this.$element.removeClass(
                    'is-transition-push')), this.$element.addClass(
                    'is-transition-' + this.options.transition +
                    ' is-closed'), this.$triggers = r()(document).
                    find('[data-open="' + t + '"], [data-close="' + t +
                        '"], [data-toggle="' + t + '"]').
                    attr('aria-expanded', 'false').
                    attr('aria-controls', t), this.position = this.$element.is(
                    '.position-left, .position-top, .position-right, .position-bottom')
                    ? this.$element.attr('class').
                        match(/position\-(left|top|right|bottom)/)[1]
                    : this.position, !0 === this.options.contentOverlay) {
                  var e = document.createElement('div'),
                      i = 'fixed' === r()(this.$element).css('position')
                          ? 'is-overlay-fixed'
                          : 'is-overlay-absolute';
                  e.setAttribute('class',
                      'js-off-canvas-overlay ' + i), this.$overlay = r()(
                      e), 'is-overlay-fixed' === i ? r()(this.$overlay).
                      insertAfter(this.$element) : this.$content.append(
                      this.$overlay);
                }
                this.options.isRevealed = this.options.isRevealed ||
                    new RegExp(this.options.revealClass, 'g').test(
                        this.$element[0].className), !0 ===
                this.options.isRevealed &&
                (this.options.revealOn = this.options.revealOn ||
                    this.$element[0].className.match(
                        /(reveal-for-medium|reveal-for-large)/g)[0].split(
                        '-')[2], this._setMQChecker()), this.options.transitionTime &&
                this.$element.css('transition-duration',
                    this.options.transitionTime), this._removeContentClasses();
              },
            }, {
              key: '_events',
              value: function() {
                if (this.$element.off('.zf.trigger .zf.offcanvas').on({
                  'open.zf.trigger': this.open.bind(this),
                  'close.zf.trigger': this.close.bind(this),
                  'toggle.zf.trigger': this.toggle.bind(this),
                  'keydown.zf.offcanvas': this._handleKeyboard.bind(this),
                }), !0 === this.options.closeOnClick) {
                  (this.options.contentOverlay
                      ? this.$overlay
                      : this.$content).on({
                    'click.zf.offcanvas': this.close.bind(this),
                  });
                }
              },
            }, {
              key: '_setMQChecker',
              value: function() {
                var t = this;
                r()(window).on('changed.zf.mediaquery', function() {
                  u.a.atLeast(t.options.revealOn) ? t.reveal(!0) : t.reveal(!1);
                }).one('load.zf.offcanvas', function() {
                  u.a.atLeast(t.options.revealOn) && t.reveal(!0);
                });
              },
            }, {
              key: '_removeContentClasses',
              value: function(t) {
                'boolean' != typeof t ? this.$content.removeClass(
                    this.contentClasses.base.join(' ')) : !1 === t &&
                    this.$content.removeClass('has-reveal-' + this.position);
              },
            }, {
              key: '_addContentClasses',
              value: function(t) {
                this._removeContentClasses(t), 'boolean' != typeof t
                    ? this.$content.addClass(
                        'has-transition-' + this.options.transition +
                        ' has-position-' + this.position)
                    : !0 === t &&
                    this.$content.addClass('has-reveal-' + this.position);
              },
            }, {
              key: 'reveal',
              value: function(t) {
                t ? (this.close(), this.isRevealed = !0, this.$element.attr(
                    'aria-hidden', 'false'), this.$element.off(
                    'open.zf.trigger toggle.zf.trigger'), this.$element.removeClass(
                    'is-closed')) : (this.isRevealed = !1, this.$element.attr(
                    'aria-hidden', 'true'), this.$element.off(
                    'open.zf.trigger toggle.zf.trigger').on({
                  'open.zf.trigger': this.open.bind(this),
                  'toggle.zf.trigger': this.toggle.bind(this),
                }), this.$element.addClass(
                    'is-closed')), this._addContentClasses(t);
              },
            }, {
              key: '_stopScrolling',
              value: function(t) {
                return !1;
              },
            }, {
              key: '_recordScrollable',
              value: function(t) {
                var e = this;
                e.scrollHeight !== e.clientHeight &&
                (0 === e.scrollTop && (e.scrollTop = 1), e.scrollTop ===
                e.scrollHeight - e.clientHeight &&
                (e.scrollTop = e.scrollHeight - e.clientHeight -
                    1)), e.allowUp = e.scrollTop >
                    0, e.allowDown = e.scrollTop < e.scrollHeight -
                    e.clientHeight, e.lastY = t.originalEvent.pageY;
              },
            }, {
              key: '_stopScrollPropagation',
              value: function(t) {
                var e = this,
                    i = t.pageY < e.lastY,
                    n = !i;
                e.lastY = t.pageY, i && e.allowUp || n && e.allowDown
                    ? t.stopPropagation()
                    : t.preventDefault();
              },
            }, {
              key: 'open',
              value: function(t, e) {
                if (!this.$element.hasClass('is-open') && !this.isRevealed) {
                  var n = this;
                  e && (this.$lastTrigger = e), 'top' === this.options.forceTo
                      ? window.scrollTo(0, 0)
                      : 'bottom' === this.options.forceTo && window.scrollTo(0,
                      document.body.scrollHeight), this.options.transitionTime &&
                  'overlap' !== this.options.transition
                      ? this.$element.siblings('[data-off-canvas-content]').
                          css('transition-duration',
                              this.options.transitionTime)
                      : this.$element.siblings('[data-off-canvas-content]').
                          css('transition-duration',
                              ''), this.$element.addClass('is-open').
                      removeClass('is-closed'), this.$triggers.attr(
                      'aria-expanded', 'true'), this.$element.attr(
                      'aria-hidden', 'false').
                      trigger('opened.zf.offcanvas'), this.$content.addClass(
                      'is-open-' + this.position), !1 ===
                  this.options.contentScroll && (r()('body').
                      addClass('is-off-canvas-open').
                      on('touchmove', this._stopScrolling), this.$element.on(
                      'touchstart', this._recordScrollable), this.$element.on(
                      'touchmove', this._stopScrollPropagation)), !0 ===
                  this.options.contentOverlay &&
                  this.$overlay.addClass('is-visible'), !0 ===
                  this.options.closeOnClick && !0 ===
                  this.options.contentOverlay &&
                  this.$overlay.addClass('is-closable'), !0 ===
                  this.options.autoFocus &&
                  this.$element.one(i.i(c.c)(this.$element), function() {
                    if (n.$element.hasClass('is-open')) {
                      var t = n.$element.find('[data-autofocus]');
                      t.length ? t.eq(0).focus() : n.$element.find('a, button').
                          eq(0).
                          focus();
                    }
                  }), !0 === this.options.trapFocus &&
                  (this.$content.attr('tabindex', '-1'), l.a.trapFocus(
                      this.$element)), this._addContentClasses();
                }
              },
            }, {
              key: 'close',
              value: function(t) {
                if (this.$element.hasClass('is-open') && !this.isRevealed) {
                  var e = this;
                  this.$element.removeClass('is-open'), this.$element.attr(
                      'aria-hidden', 'true').
                      trigger('closed.zf.offcanvas'), this.$content.removeClass(
                      'is-open-left is-open-top is-open-right is-open-bottom'), !1 ===
                  this.options.contentScroll && (r()('body').
                      removeClass('is-off-canvas-open').
                      off('touchmove', this._stopScrolling), this.$element.off(
                      'touchstart', this._recordScrollable), this.$element.off(
                      'touchmove', this._stopScrollPropagation)), !0 ===
                  this.options.contentOverlay &&
                  this.$overlay.removeClass('is-visible'), !0 ===
                  this.options.closeOnClick && !0 ===
                  this.options.contentOverlay &&
                  this.$overlay.removeClass('is-closable'), this.$triggers.attr(
                      'aria-expanded', 'false'), !0 ===
                  this.options.trapFocus &&
                  (this.$content.removeAttr('tabindex'), l.a.releaseFocus(
                      this.$element)), this.$element.one(
                      i.i(c.c)(this.$element), function(t) {
                        e.$element.addClass(
                            'is-closed'), e._removeContentClasses();
                      });
                }
              },
            }, {
              key: 'toggle',
              value: function(t, e) {
                this.$element.hasClass('is-open')
                    ? this.close(t, e)
                    : this.open(t, e);
              },
            }, {
              key: '_handleKeyboard',
              value: function(t) {
                var e = this;
                l.a.handleKey(t, 'OffCanvas', {
                  close: function() {
                    return e.close(), e.$lastTrigger.focus(), !0;
                  },
                  handled: function() {
                    t.stopPropagation(), t.preventDefault();
                  },
                });
              },
            }, {
              key: '_destroy',
              value: function() {
                this.close(), this.$element.off(
                    '.zf.trigger .zf.offcanvas'), this.$overlay.off(
                    '.zf.offcanvas');
              },
            }]), e;
        }(h.a);
    p.defaults = {
      closeOnClick: !0,
      contentOverlay: !0,
      contentId: null,
      nested: null,
      contentScroll: !0,
      transitionTime: null,
      transition: 'push',
      forceTo: null,
      isRevealed: !1,
      revealOn: null,
      autoFocus: !0,
      revealClass: 'reveal-for-',
      trapFocus: !1,
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return g;
    });
    var a = i(0),
        r = i.n(a),
        l = i(3),
        u = i(6),
        c = i(18),
        h = i(8),
        d = i(1),
        f = i(2),
        p = i(10),
        m = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        g = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), m(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = r.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'Orbit', p.a.init(
                    r.a), this._init(), l.a.register('Orbit', {
                  ltr: {
                    ARROW_RIGHT: 'next',
                    ARROW_LEFT: 'previous',
                  },
                  rtl: {
                    ARROW_LEFT: 'next',
                    ARROW_RIGHT: 'previous',
                  },
                });
              },
            }, {
              key: '_init',
              value: function() {
                this._reset(), this.$wrapper = this.$element.find('.' +
                    this.options.containerClass), this.$slides = this.$element.find(
                    '.' + this.options.slideClass);
                var t = this.$element.find('img'),
                    e = this.$slides.filter('.is-active'),
                    n = this.$element[0].id || i.i(d.b)(6, 'orbit');
                this.$element.attr({
                  'data-resize': n,
                  id: n,
                }), e.length ||
                this.$slides.eq(0).addClass('is-active'), this.options.useMUI ||
                this.$slides.addClass('no-motionui'), t.length
                    ? i.i(h.a)(t, this._prepareForOrbit.bind(this))
                    : this._prepareForOrbit(), this.options.bullets &&
                this._loadBullets(), this._events(), this.options.autoPlay &&
                this.$slides.length > 1 &&
                this.geoSync(), this.options.accessible &&
                this.$wrapper.attr('tabindex', 0);
              },
            }, {
              key: '_loadBullets',
              value: function() {
                this.$bullets = this.$element.find(
                    '.' + this.options.boxOfBullets).find('button');
              },
            }, {
              key: 'geoSync',
              value: function() {
                var t = this;
                this.timer = new c.a(this.$element, {
                  duration: this.options.timerDelay,
                  infinite: !1,
                }, function() {
                  t.changeSlide(!0);
                }), this.timer.start();
              },
            }, {
              key: '_prepareForOrbit',
              value: function() {
                this._setWrapperHeight();
              },
            }, {
              key: '_setWrapperHeight',
              value: function(t) {
                var e, i = 0,
                    n = 0,
                    s = this;
                this.$slides.each(function() {
                  e = this.getBoundingClientRect().height, r()(this).
                      attr('data-slide', n), /mui/g.test(
                      r()(this)[0].className) ||
                  s.$slides.filter('.is-active')[0] === s.$slides.eq(n)[0] ||
                  r()(this).css({
                    position: 'relative',
                    display: 'none',
                  }), i = e > i ? e : i, n++;
                }), n === this.$slides.length && (this.$wrapper.css({
                  height: i,
                }), t && t(i));
              },
            }, {
              key: '_setSlideHeight',
              value: function(t) {
                this.$slides.each(function() {
                  r()(this).css('max-height', t);
                });
              },
            }, {
              key: '_events',
              value: function() {
                var t = this;
                if (this.$element.off('.resizeme.zf.trigger').on({
                  'resizeme.zf.trigger': this._prepareForOrbit.bind(this),
                }), this.$slides.length > 1) {
                  if (this.options.swipe &&
                  this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit').
                      on('swipeleft.zf.orbit', function(e) {
                        e.preventDefault(), t.changeSlide(!0);
                      }).
                      on('swiperight.zf.orbit', function(e) {
                        e.preventDefault(), t.changeSlide(!1);
                      }), this.options.autoPlay &&
                  (this.$slides.on('click.zf.orbit', function() {
                    t.$element.data('clickedOn',
                        !t.$element.data('clickedOn')), t.timer[t.$element.data(
                        'clickedOn') ? 'pause' : 'start']();
                  }), this.options.pauseOnHover &&
                  this.$element.on('mouseenter.zf.orbit', function() {
                    t.timer.pause();
                  }).on('mouseleave.zf.orbit', function() {
                    t.$element.data('clickedOn') || t.timer.start();
                  })), this.options.navButtons) {
                    this.$element.find('.' + this.options.nextClass + ', .' +
                        this.options.prevClass).
                        attr('tabindex', 0).
                        on('click.zf.orbit touchend.zf.orbit', function(e) {
                          e.preventDefault(), t.changeSlide(
                              r()(this).hasClass(t.options.nextClass));
                        });
                  }
                  this.options.bullets &&
                  this.$bullets.on('click.zf.orbit touchend.zf.orbit',
                      function() {
                        if (/is-active/g.test(this.className)) return !1;
                        var e = r()(this).data('slide'),
                            i = e >
                                t.$slides.filter('.is-active').data('slide'),
                            n = t.$slides.eq(e);
                        t.changeSlide(i, n, e);
                      }), this.options.accessible &&
                  this.$wrapper.add(this.$bullets).
                      on('keydown.zf.orbit', function(e) {
                        l.a.handleKey(e, 'Orbit', {
                          next: function() {
                            t.changeSlide(!0);
                          },
                          previous: function() {
                            t.changeSlide(!1);
                          },
                          handled: function() {
                            r()(e.target).is(t.$bullets) &&
                            t.$bullets.filter('.is-active').focus();
                          },
                        });
                      });
                }
              },
            }, {
              key: '_reset',
              value: function() {
                void 0 !== this.$slides && this.$slides.length > 1 &&
                (this.$element.off('.zf.orbit').
                    find('*').
                    off('.zf.orbit'), this.options.autoPlay &&
                this.timer.restart(), this.$slides.each(function(t) {
                  r()(t).
                      removeClass('is-active is-active is-in').
                      removeAttr('aria-live').
                      hide();
                }), this.$slides.first().
                    addClass('is-active').
                    show(), this.$element.trigger('slidechange.zf.orbit',
                    [this.$slides.first()]), this.options.bullets &&
                this._updateBullets(0));
              },
            }, {
              key: 'changeSlide',
              value: function(t, e, i) {
                if (this.$slides) {
                  var n = this.$slides.filter('.is-active').eq(0);
                  if (/mui/g.test(n[0].className)) return !1;
                  var s, o = this.$slides.first(),
                      a = this.$slides.last(),
                      r = t ? 'Right' : 'Left',
                      l = t ? 'Left' : 'Right',
                      c = this;
                  s = e || (t ? this.options.infiniteWrap ? n.next(
                      '.' + this.options.slideClass).length ? n.next(
                      '.' + this.options.slideClass) : o : n.next(
                      '.' + this.options.slideClass) : this.options.infiniteWrap
                      ? n.prev('.' + this.options.slideClass).length ? n.prev(
                          '.' + this.options.slideClass) : a
                      : n.prev('.' + this.options.slideClass)), s.length &&
                  (this.$element.trigger('beforeslidechange.zf.orbit',
                      [n, s]), this.options.bullets &&
                  (i = i || this.$slides.index(s), this._updateBullets(
                      i)), this.options.useMUI && !this.$element.is(':hidden')
                      ? (u.a.animateIn(s.addClass('is-active').css({
                        position: 'absolute',
                        top: 0,
                      }), this.options['animInFrom' + r], function() {
                        s.css({
                          position: 'relative',
                          display: 'block',
                        }).attr('aria-live', 'polite');
                      }), u.a.animateOut(n.removeClass('is-active'),
                          this.options['animOutTo' + l], function() {
                            n.removeAttr('aria-live'), c.options.autoPlay &&
                            !c.timer.isPaused && c.timer.restart();
                          }))
                      : (n.removeClass('is-active is-in').
                          removeAttr('aria-live').
                          hide(), s.addClass('is-active is-in').
                          attr('aria-live', 'polite').
                          show(), this.options.autoPlay &&
                      !this.timer.isPaused &&
                      this.timer.restart()), this.$element.trigger(
                      'slidechange.zf.orbit', [s]));
                }
              },
            }, {
              key: '_updateBullets',
              value: function(t) {
                var e = this.$element.find('.' + this.options.boxOfBullets).
                        find('.is-active').
                        removeClass('is-active').
                        blur(),
                    i = e.find('span:last').detach();
                this.$bullets.eq(t).addClass('is-active').append(i);
              },
            }, {
              key: '_destroy',
              value: function() {
                this.$element.off('.zf.orbit').
                    find('*').
                    off('.zf.orbit').
                    end().
                    hide();
              },
            }]), e;
        }(f.a);
    g.defaults = {
      bullets: !0,
      navButtons: !0,
      animInFromRight: 'slide-in-right',
      animOutToRight: 'slide-out-right',
      animInFromLeft: 'slide-in-left',
      animOutToLeft: 'slide-out-left',
      autoPlay: !0,
      timerDelay: 5e3,
      infiniteWrap: !0,
      swipe: !0,
      pauseOnHover: !0,
      accessible: !0,
      containerClass: 'orbit-container',
      slideClass: 'orbit-slide',
      boxOfBullets: 'orbit-bullets',
      nextClass: 'orbit-next',
      prevClass: 'orbit-previous',
      useMUI: !0,
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return m;
    });
    var a = i(0),
        r = i.n(a),
        l = i(4),
        u = i(1),
        c = i(2),
        h = i(11),
        d = i(17),
        f = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        p = {
          tabs: {
            cssClass: 'tabs',
            plugin: d.a,
          },
          accordion: {
            cssClass: 'accordion',
            plugin: h.a,
          },
        },
        m = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), f(e, [
            {
              key: '_setup',
              value: function(t, e) {
                this.$element = r()(t), this.options = r.a.extend({},
                    this.$element.data(), e), this.rules = this.$element.data(
                    'responsive-accordion-tabs'), this.currentMq = null, this.currentPlugin = null, this.className = 'ResponsiveAccordionTabs', this.$element.attr(
                    'id') || this.$element.attr('id', i.i(u.b)(6,
                    'responsiveaccordiontabs')), this._init(), this._events();
              },
            }, {
              key: '_init',
              value: function() {
                if (l.a._init(), 'string' == typeof this.rules) {
                  for (var t = {}, e = this.rules.split(' '), i = 0; i <
                  e.length; i++) {
                    var n = e[i].split('-'),
                        s = n.length > 1 ? n[0] : 'small',
                        o = n.length > 1 ? n[1] : n[0];
                    null !== p[o] && (t[s] = p[o]);
                  }
                  this.rules = t;
                }
                this._getAllOptions(), r.a.isEmptyObject(this.rules) ||
                this._checkMediaQueries();
              },
            }, {
              key: '_getAllOptions',
              value: function() {
                var t = this;
                t.allOptions = {};
                for (var e in p)
                  if (p.hasOwnProperty(e)) {
                    var i = p[e];
                    try {
                      var n = r()('<ul></ul>'),
                          s = new i.plugin(n, t.options);
                      for (var o in s.options)
                        if (s.options.hasOwnProperty(o) && 'zfPlugin' !== o) {
                          var a = s.options[o];
                          t.allOptions[o] = a;
                        }
                      s.destroy();
                    } catch (t) {}
                  }
              },
            }, {
              key: '_events',
              value: function() {
                var t = this;
                r()(window).on('changed.zf.mediaquery', function() {
                  t._checkMediaQueries();
                });
              },
            }, {
              key: '_checkMediaQueries',
              value: function() {
                var t, e = this;
                r.a.each(this.rules, function(e) {
                  l.a.atLeast(e) && (t = e);
                }), t && (this.currentPlugin instanceof this.rules[t].plugin ||
                    (r.a.each(p, function(t, i) {
                      e.$element.removeClass(i.cssClass);
                    }), this.$element.addClass(
                        this.rules[t].cssClass), this.currentPlugin &&
                    (!this.currentPlugin.$element.data('zfPlugin') &&
                    this.storezfData &&
                    this.currentPlugin.$element.data('zfPlugin',
                        this.storezfData), this.currentPlugin.destroy()), this._handleMarkup(
                        this.rules[t].cssClass), this.currentPlugin = new this.rules[t].plugin(
                        this.$element,
                        {}), this.storezfData = this.currentPlugin.$element.data(
                        'zfPlugin')));
              },
            }, {
              key: '_handleMarkup',
              value: function(t) {
                var e = this,
                    n = 'accordion',
                    s = r()(
                        '[data-tabs-content=' + this.$element.attr('id') + ']');
                if (s.length && (n = 'tabs'), n !== t) {
                  var o = e.allOptions.linkClass
                      ? e.allOptions.linkClass
                      : 'tabs-title',
                      a = e.allOptions.panelClass
                          ? e.allOptions.panelClass
                          : 'tabs-panel';
                  this.$element.removeAttr('role');
                  var l = this.$element.children(
                      '.' + o + ',[data-accordion-item]').
                          removeClass(o).
                          removeClass('accordion-item').
                          removeAttr('data-accordion-item'),
                      c = l.children('a').removeClass('accordion-title');
                  if ('tabs' === n ? (s = s.children('.' + a).
                      removeClass(a).
                      removeAttr('role').
                      removeAttr('aria-hidden').
                      removeAttr('aria-labelledby'), s.children('a').
                      removeAttr('role').
                      removeAttr('aria-controls').
                      removeAttr('aria-selected')) : s = l.children(
                      '[data-tab-content]').
                      removeClass('accordion-content'), s.css({
                    display: '',
                    visibility: '',
                  }), l.css({
                    display: '',
                    visibility: '',
                  }), 'accordion' === t) s.each(function(t, i) {
                    r()(i).
                        appendTo(l.get(t)).
                        addClass('accordion-content').
                        attr('data-tab-content', '').
                        removeClass('is-active').
                        css({
                          height: '',
                        }), r()(
                        '[data-tabs-content=' + e.$element.attr('id') + ']').
                        after('<div id="tabs-placeholder-' +
                            e.$element.attr('id') + '"></div>').
                        detach(), l.addClass('accordion-item').
                        attr('data-accordion-item', ''), c.addClass(
                        'accordion-title');
                  });
                  else if ('tabs' === t) {
                    var h = r()(
                        '[data-tabs-content=' + e.$element.attr('id') + ']'),
                        d = r()('#tabs-placeholder-' + e.$element.attr('id'));
                    d.length ? (h = r()('<div class="tabs-content"></div>').
                        insertAfter(d).
                        attr('data-tabs-content',
                            e.$element.attr('id')), d.remove()) : h = r()(
                        '<div class="tabs-content"></div>').
                        insertAfter(e.$element).
                        attr('data-tabs-content',
                            e.$element.attr('id')), s.each(function(t, e) {
                      var n = r()(e).appendTo(h).addClass(a),
                          s = c.get(t).hash.slice(1),
                          o = r()(e).attr('id') || i.i(u.b)(6, 'accordion');
                      s !== o &&
                      ('' !== s ? r()(e).attr('id', s) : (s = o, r()(e).
                          attr('id', s), r()(c.get(t)).
                          attr('href',
                              r()(c.get(t)).attr('href').replace('#', '') +
                              '#' + s))), r()(l.get(t)).hasClass('is-active') &&
                      n.addClass('is-active');
                    }), l.addClass(o);
                  }
                }
              },
            }, {
              key: '_destroy',
              value: function() {
                this.currentPlugin && this.currentPlugin.destroy(), r()(window).
                    off('.zf.ResponsiveAccordionTabs');
              },
            }]), e;
        }(c.a);
    m.defaults = {};
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return g;
    });
    var a = i(0),
        r = i.n(a),
        l = i(4),
        u = i(1),
        c = i(2),
        h = i(14),
        d = i(13),
        f = i(12),
        p = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        m = {
          dropdown: {
            cssClass: 'dropdown',
            plugin: h.a,
          },
          drilldown: {
            cssClass: 'drilldown',
            plugin: d.a,
          },
          accordion: {
            cssClass: 'accordion-menu',
            plugin: f.a,
          },
        },
        g = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), p(e, [
            {
              key: '_setup',
              value: function(t, e) {
                this.$element = r()(t), this.rules = this.$element.data(
                    'responsive-menu'), this.currentMq = null, this.currentPlugin = null, this.className = 'ResponsiveMenu', this._init(), this._events();
              },
            }, {
              key: '_init',
              value: function() {
                if (l.a._init(), 'string' == typeof this.rules) {
                  for (var t = {}, e = this.rules.split(' '), n = 0; n <
                  e.length; n++) {
                    var s = e[n].split('-'),
                        o = s.length > 1 ? s[0] : 'small',
                        a = s.length > 1 ? s[1] : s[0];
                    null !== m[a] && (t[o] = m[a]);
                  }
                  this.rules = t;
                }
                r.a.isEmptyObject(this.rules) ||
                this._checkMediaQueries(), this.$element.attr('data-mutate',
                    this.$element.attr('data-mutate') ||
                    i.i(u.b)(6, 'responsive-menu'));
              },
            }, {
              key: '_events',
              value: function() {
                var t = this;
                r()(window).on('changed.zf.mediaquery', function() {
                  t._checkMediaQueries();
                });
              },
            }, {
              key: '_checkMediaQueries',
              value: function() {
                var t, e = this;
                r.a.each(this.rules, function(e) {
                  l.a.atLeast(e) && (t = e);
                }), t && (this.currentPlugin instanceof this.rules[t].plugin ||
                    (r.a.each(m, function(t, i) {
                      e.$element.removeClass(i.cssClass);
                    }), this.$element.addClass(
                        this.rules[t].cssClass), this.currentPlugin &&
                    this.currentPlugin.destroy(), this.currentPlugin = new this.rules[t].plugin(
                        this.$element, {})));
              },
            }, {
              key: '_destroy',
              value: function() {
                this.currentPlugin.destroy(), r()(window).
                    off('.zf.ResponsiveMenu');
              },
            }]), e;
        }(c.a);
    g.defaults = {};
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return d;
    });
    var a = i(0),
        r = i.n(a),
        l = i(4),
        u = i(6),
        c = i(2),
        h = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        d = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), h(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = r()(t), this.options = r.a.extend({},
                    e.defaults, this.$element.data(),
                    i), this.className = 'ResponsiveToggle', this._init(), this._events();
              },
            }, {
              key: '_init',
              value: function() {
                l.a._init();
                var t = this.$element.data('responsive-toggle');
                if (t || console.error(
                    'Your tab bar needs an ID of a Menu as the value of data-tab-bar.'), this.$targetMenu = r()(
                    '#' + t), this.$toggler = this.$element.find(
                    '[data-toggle]').filter(function() {
                  var e = r()(this).data('toggle');
                  return e === t || '' === e;
                }), this.options = r.a.extend({}, this.options,
                    this.$targetMenu.data()), this.options.animate) {
                  var e = this.options.animate.split(' ');
                  this.animationIn = e[0], this.animationOut = e[1] || null;
                }
                this._update();
              },
            }, {
              key: '_events',
              value: function() {
                this._updateMqHandler = this._update.bind(this), r()(window).
                    on('changed.zf.mediaquery',
                        this._updateMqHandler), this.$toggler.on(
                    'click.zf.responsiveToggle', this.toggleMenu.bind(this));
              },
            }, {
              key: '_update',
              value: function() {
                l.a.atLeast(this.options.hideFor)
                    ? (this.$element.hide(), this.$targetMenu.show())
                    : (this.$element.show(), this.$targetMenu.hide());
              },
            }, {
              key: 'toggleMenu',
              value: function() {
                var t = this;
                l.a.atLeast(this.options.hideFor) ||
                (this.options.animate ? this.$targetMenu.is(':hidden')
                    ? u.a.animateIn(this.$targetMenu, this.animationIn,
                        function() {
                          t.$element.trigger(
                              'toggled.zf.responsiveToggle'), t.$targetMenu.find(
                              '[data-mutate]').
                              triggerHandler('mutateme.zf.trigger');
                        })
                    : u.a.animateOut(this.$targetMenu, this.animationOut,
                        function() {
                          t.$element.trigger('toggled.zf.responsiveToggle');
                        }) : (this.$targetMenu.toggle(0), this.$targetMenu.find(
                    '[data-mutate]').
                    trigger('mutateme.zf.trigger'), this.$element.trigger(
                    'toggled.zf.responsiveToggle')));
              },
            }, {
              key: '_destroy',
              value: function() {
                this.$element.off('.zf.responsiveToggle'), this.$toggler.off(
                    '.zf.responsiveToggle'), r()(window).
                    off('changed.zf.mediaquery', this._updateMqHandler);
              },
            }]), e;
        }(c.a);
    d.defaults = {
      hideFor: 'medium',
      animate: !1,
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    function a() {
      return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent);
    }

    function r() {
      return /Android/.test(window.navigator.userAgent);
    }

    function l() {
      return a() || r();
    }

    i.d(e, 'a', function() {
      return v;
    });
    var u = i(0),
        c = i.n(u),
        h = i(3),
        d = i(4),
        f = i(6),
        p = i(2),
        m = i(5),
        g = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        v = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), g(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = c.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'Reveal', this._init(), m.a.init(
                    c.a), h.a.register('Reveal', {
                  ESCAPE: 'close',
                });
              },
            }, {
              key: '_init',
              value: function() {
                d.a._init(), this.id = this.$element.attr(
                    'id'), this.isActive = !1, this.cached = {
                  mq: d.a.current,
                }, this.isMobile = l(), this.$anchor = c()(
                    '[data-open="' + this.id + '"]').length ? c()(
                    '[data-open="' + this.id + '"]') : c()(
                    '[data-toggle="' + this.id + '"]'), this.$anchor.attr({
                  'aria-controls': this.id,
                  'aria-haspopup': !0,
                  tabindex: 0,
                }), (this.options.fullScreen ||
                    this.$element.hasClass('full')) &&
                (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay &&
                !this.$overlay && (this.$overlay = this._makeOverlay(
                    this.id)), this.$element.attr({
                  role: 'dialog',
                  'aria-hidden': !0,
                  'data-yeti-box': this.id,
                  'data-resize': this.id,
                }), this.$overlay ? this.$element.detach().
                    appendTo(this.$overlay) : (this.$element.detach().
                    appendTo(
                        c()(this.options.appendTo)), this.$element.addClass(
                    'without-overlay')), this._events(), this.options.deepLink &&
                window.location.hash === '#' + this.id &&
                c()(window).one('load.zf.reveal', this.open.bind(this));
              },
            }, {
              key: '_makeOverlay',
              value: function() {
                var t = '';
                return this.options.additionalOverlayClasses &&
                (t = ' ' + this.options.additionalOverlayClasses), c()(
                    '<div></div>').
                    addClass('reveal-overlay' + t).
                    appendTo(this.options.appendTo);
              },
            }, {
              key: '_updatePosition',
              value: function() {
                var t, e, i = this.$element.outerWidth(),
                    n = c()(window).width(),
                    s = this.$element.outerHeight(),
                    o = c()(window).height();
                t = 'auto' === this.options.hOffset
                    ? parseInt((n - i) / 2, 10)
                    : parseInt(this.options.hOffset, 10), e = 'auto' ===
                this.options.vOffset ? s > o ? parseInt(Math.min(100, o / 10),
                    10) : parseInt((o - s) / 4, 10) : parseInt(
                    this.options.vOffset, 10), this.$element.css({
                  top: e + 'px',
                }), this.$overlay && 'auto' === this.options.hOffset ||
                (this.$element.css({
                  left: t + 'px',
                }), this.$element.css({
                  margin: '0px',
                }));
              },
            }, {
              key: '_events',
              value: function() {
                var t = this,
                    e = this;
                this.$element.on({
                  'open.zf.trigger': this.open.bind(this),
                  'close.zf.trigger': function(i, n) {
                    if (i.target === e.$element[0] ||
                        c()(i.target).parents('[data-closable]')[0] ===
                        n) return t.close.apply(t);
                  },
                  'toggle.zf.trigger': this.toggle.bind(this),
                  'resizeme.zf.trigger': function() {
                    e._updatePosition();
                  },
                }), this.options.closeOnClick && this.options.overlay &&
                this.$overlay.off('.zf.reveal').
                    on('click.zf.reveal', function(t) {
                      t.target !== e.$element[0] &&
                      !c.a.contains(e.$element[0], t.target) &&
                      c.a.contains(document, t.target) && e.close();
                    }), this.options.deepLink && c()(window).
                    on('popstate.zf.reveal:' + this.id,
                        this._handleState.bind(this));
              },
            }, {
              key: '_handleState',
              value: function(t) {
                window.location.hash !== '#' + this.id || this.isActive
                    ? this.close()
                    : this.open();
              },
            }, {
              key: 'open',
              value: function() {
                function t() {
                  n.isMobile ? (n.originalScrollPos ||
                  (n.originalScrollPos = window.pageYOffset), c()('html, body').
                      addClass('is-reveal-open')) : c()('body').
                      addClass('is-reveal-open');
                }

                var e = this;
                if (this.options.deepLink) {
                  var i = '#' + this.id;
                  window.history.pushState
                      ? this.options.updateHistory
                      ? window.history.pushState({}, '', i)
                      : window.history.replaceState({}, '', i)
                      : window.location.hash = i;
                }
                this.isActive = !0, this.$element.css({
                  visibility: 'hidden',
                }).show().scrollTop(0), this.options.overlay &&
                this.$overlay.css({
                  visibility: 'hidden',
                }).show(), this._updatePosition(), this.$element.hide().css({
                  visibility: '',
                }), this.$overlay && (this.$overlay.css({
                  visibility: '',
                }).hide(), this.$element.hasClass('fast')
                    ? this.$overlay.addClass('fast')
                    : this.$element.hasClass('slow') && this.$overlay.addClass(
                    'slow')), this.options.multipleOpened ||
                this.$element.trigger('closeme.zf.reveal', this.id);
                var n = this;
                if (this.options.animationIn) {
                  var s = function() {
                    n.$element.attr({
                      'aria-hidden': !1,
                      tabindex: -1,
                    }).focus(), t(), h.a.trapFocus(n.$element);
                  };
                  this.options.overlay &&
                  f.a.animateIn(this.$overlay, 'fade-in'), f.a.animateIn(
                      this.$element, this.options.animationIn, function() {
                        e.$element && (e.focusableElements = h.a.findFocusable(
                            e.$element), s());
                      });
                } else this.options.overlay &&
                this.$overlay.show(0), this.$element.show(
                    this.options.showDelay);
                this.$element.attr({
                  'aria-hidden': !1,
                  tabindex: -1,
                }).focus(), h.a.trapFocus(
                    this.$element), t(), this._extraHandlers(), this.$element.trigger(
                    'open.zf.reveal');
              },
            }, {
              key: '_extraHandlers',
              value: function() {
                var t = this;
                this.$element && (this.focusableElements = h.a.findFocusable(
                    this.$element), this.options.overlay ||
                !this.options.closeOnClick || this.options.fullScreen ||
                c()('body').on('click.zf.reveal', function(e) {
                  e.target !== t.$element[0] &&
                  !c.a.contains(t.$element[0], e.target) &&
                  c.a.contains(document, e.target) && t.close();
                }), this.options.closeOnEsc &&
                c()(window).on('keydown.zf.reveal', function(e) {
                  h.a.handleKey(e, 'Reveal', {
                    close: function() {
                      t.options.closeOnEsc && t.close();
                    },
                  });
                }));
              },
            }, {
              key: 'close',
              value: function() {
                function t() {
                  e.isMobile
                      ? (0 === c()('.reveal:visible').length &&
                      c()('html, body').
                          removeClass('is-reveal-open'), e.originalScrollPos &&
                      (c()('body').
                          scrollTop(
                              e.originalScrollPos), e.originalScrollPos = null))
                      : 0 === c()('.reveal:visible').length && c()('body').
                      removeClass('is-reveal-open'), h.a.releaseFocus(
                      e.$element), e.$element.attr('aria-hidden',
                      !0), e.$element.trigger('closed.zf.reveal');
                }

                if (!this.isActive || !this.$element.is(':visible')) return !1;
                var e = this;
                this.options.animationOut
                    ? (this.options.overlay &&
                    f.a.animateOut(this.$overlay, 'fade-out'), f.a.animateOut(
                    this.$element, this.options.animationOut, t))
                    : (this.$element.hide(
                    this.options.hideDelay), this.options.overlay
                    ? this.$overlay.hide(0, t)
                    : t()), this.options.closeOnEsc &&
                c()(window).off('keydown.zf.reveal'), !this.options.overlay &&
                this.options.closeOnClick &&
                c()('body').off('click.zf.reveal'), this.$element.off(
                    'keydown.zf.reveal'), this.options.resetOnClose &&
                this.$element.html(
                    this.$element.html()), this.isActive = !1, e.options.deepLink &&
                (window.history.replaceState
                    ? window.history.replaceState('', document.title,
                        window.location.href.replace('#' + this.id, ''))
                    : window.location.hash = ''), this.$anchor.focus();
              },
            }, {
              key: 'toggle',
              value: function() {
                this.isActive ? this.close() : this.open();
              },
            }, {
              key: '_destroy',
              value: function() {
                this.options.overlay && (this.$element.appendTo(
                    c()(this.options.appendTo)), this.$overlay.hide().
                    off().
                    remove()), this.$element.hide().off(), this.$anchor.off(
                    '.zf'), c()(window).off('.zf.reveal:' + this.id);
              },
            }]), e;
        }(p.a);
    v.defaults = {
      animationIn: '',
      animationOut: '',
      showDelay: 0,
      hideDelay: 0,
      closeOnClick: !0,
      closeOnEsc: !0,
      multipleOpened: !1,
      vOffset: 'auto',
      hOffset: 'auto',
      fullScreen: !1,
      btmOffsetPct: 10,
      overlay: !0,
      resetOnClose: !1,
      deepLink: !1,
      updateHistory: !1,
      appendTo: 'body',
      additionalOverlayClasses: '',
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    function a(t, e) {
      return t / e;
    }

    function r(t, e, i, n) {
      return Math.abs(t.position()[e] + t[n]() / 2 - i);
    }

    function l(t, e) {
      return Math.log(e) / Math.log(t);
    }

    i.d(e, 'a', function() {
      return b;
    });
    var u = i(0),
        c = i.n(u),
        h = i(3),
        d = i(6),
        f = i(1),
        p = i(2),
        m = i(10),
        g = i(5),
        v = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        b = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), v(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = c.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'Slider', m.a.init(c.a), g.a.init(
                    c.a), this._init(), h.a.register('Slider', {
                  ltr: {
                    ARROW_RIGHT: 'increase',
                    ARROW_UP: 'increase',
                    ARROW_DOWN: 'decrease',
                    ARROW_LEFT: 'decrease',
                    SHIFT_ARROW_RIGHT: 'increase_fast',
                    SHIFT_ARROW_UP: 'increase_fast',
                    SHIFT_ARROW_DOWN: 'decrease_fast',
                    SHIFT_ARROW_LEFT: 'decrease_fast',
                    HOME: 'min',
                    END: 'max',
                  },
                  rtl: {
                    ARROW_LEFT: 'increase',
                    ARROW_RIGHT: 'decrease',
                    SHIFT_ARROW_LEFT: 'increase_fast',
                    SHIFT_ARROW_RIGHT: 'decrease_fast',
                  },
                });
              },
            }, {
              key: '_init',
              value: function() {
                this.inputs = this.$element.find(
                    'input'), this.handles = this.$element.find(
                    '[data-slider-handle]'), this.$handle = this.handles.eq(
                    0), this.$input = this.inputs.length
                    ? this.inputs.eq(0)
                    : c()('#' + this.$handle.attr(
                        'aria-controls')), this.$fill = this.$element.find(
                    '[data-slider-fill]').
                    css(this.options.vertical ? 'height' : 'width', 0);
                (this.options.disabled ||
                    this.$element.hasClass(this.options.disabledClass)) &&
                (this.options.disabled = !0, this.$element.addClass(
                    this.options.disabledClass)), this.inputs.length ||
                (this.inputs = c()().
                    add(this.$input), this.options.binding = !0), this._setInitAttr(
                    0), this.handles[1] &&
                (this.options.doubleSided = !0, this.$handle2 = this.handles.eq(
                    1), this.$input2 = this.inputs.length > 1 ? this.inputs.eq(
                    1) : c()('#' +
                    this.$handle2.attr('aria-controls')), this.inputs[1] ||
                (this.inputs = this.inputs.add(
                    this.$input2)), !0, this._setInitAttr(
                    1)), this.setHandles(), this._events();
              },
            }, {
              key: 'setHandles',
              value: function() {
                var t = this;
                this.handles[1] ? this._setHandlePos(this.$handle,
                    this.inputs.eq(0).val(), !0, function() {
                      t._setHandlePos(t.$handle2, t.inputs.eq(1).val(), !0);
                    }) : this._setHandlePos(this.$handle,
                    this.inputs.eq(0).val(), !0);
              },
            }, {
              key: '_reflow',
              value: function() {
                this.setHandles();
              },
            }, {
              key: '_pctOfBar',
              value: function(t) {
                var e = a(t - this.options.start,
                    this.options.end - this.options.start);
                switch (this.options.positionValueFunction) {
                  case 'pow':
                    e = this._logTransform(e);
                    break;
                  case 'log':
                    e = this._powTransform(e);
                }
                return e.toFixed(2);
              },
            }, {
              key: '_value',
              value: function(t) {
                switch (this.options.positionValueFunction) {
                  case 'pow':
                    t = this._powTransform(t);
                    break;
                  case 'log':
                    t = this._logTransform(t);
                }
                return (this.options.end - this.options.start) * t +
                    this.options.start;
              },
            }, {
              key: '_logTransform',
              value: function(t) {
                return l(this.options.nonLinearBase,
                    t * (this.options.nonLinearBase - 1) + 1);
              },
            }, {
              key: '_powTransform',
              value: function(t) {
                return (Math.pow(this.options.nonLinearBase, t) - 1) /
                    (this.options.nonLinearBase - 1);
              },
            }, {
              key: '_setHandlePos',
              value: function(t, e, n, s) {
                if (!this.$element.hasClass(this.options.disabledClass)) {
                  e = parseFloat(e), e < this.options.start
                      ? e = this.options.start
                      : e > this.options.end && (e = this.options.end);
                  var o = this.options.doubleSided;
                  if (this.options.vertical && !n &&
                  (e = this.options.end - e), o)
                    if (0 === this.handles.index(t)) {
                      var r = parseFloat(this.$handle2.attr('aria-valuenow'));
                      e = e >= r ? r - this.options.step : e;
                    } else {
                      var l = parseFloat(this.$handle.attr('aria-valuenow'));
                      e = e <= l ? l + this.options.step : e;
                    }
                  var u = this,
                      c = this.options.vertical,
                      h = c ? 'height' : 'width',
                      f = c ? 'top' : 'left',
                      p = t[0].getBoundingClientRect()[h],
                      m = this.$element[0].getBoundingClientRect()[h],
                      g = this._pctOfBar(e),
                      v = (m - p) * g,
                      b = (100 * a(v, m)).toFixed(this.options.decimal);
                  e = parseFloat(e.toFixed(this.options.decimal));
                  var y = {};
                  if (this._setValues(t, e), o) {
                    var w, _ = 0 === this.handles.index(t),
                        $ = ~~(100 * a(p, m));
                    if (_) y[f] = b + '%', w = parseFloat(
                        this.$handle2[0].style[f]) - b + $, s && 'function' ==
                    typeof s && s();
                    else {
                      var k = parseFloat(this.$handle[0].style[f]);
                      w = b - (isNaN(k) ? (this.options.initialStart -
                          this.options.start) /
                          ((this.options.end - this.options.start) / 100) : k) +
                          $;
                    }
                    y['min-' + h] = w + '%';
                  }
                  this.$element.one('finished.zf.animate', function() {
                    u.$element.trigger('moved.zf.slider', [t]);
                  });
                  var C = this.$element.data('dragging')
                      ? 1e3 / 60
                      : this.options.moveTime;
                  i.i(d.b)(C, t, function() {
                    isNaN(b) ? t.css(f, 100 * g + '%') : t.css(f,
                        b + '%'), u.options.doubleSided
                        ? u.$fill.css(y)
                        : u.$fill.css(h, 100 * g + '%');
                  }), clearTimeout(u.timeout), u.timeout = setTimeout(
                      function() {
                        u.$element.trigger('changed.zf.slider', [t]);
                      }, u.options.changedDelay);
                }
              },
            }, {
              key: '_setInitAttr',
              value: function(t) {
                var e = 0 === t
                    ? this.options.initialStart
                    : this.options.initialEnd,
                    n = this.inputs.eq(t).attr('id') || i.i(f.b)(6, 'slider');
                this.inputs.eq(t).attr({
                  id: n,
                  max: this.options.end,
                  min: this.options.start,
                  step: this.options.step,
                }), this.inputs.eq(t).val(e), this.handles.eq(t).attr({
                  role: 'slider',
                  'aria-controls': n,
                  'aria-valuemax': this.options.end,
                  'aria-valuemin': this.options.start,
                  'aria-valuenow': e,
                  'aria-orientation': this.options.vertical
                      ? 'vertical'
                      : 'horizontal',
                  tabindex: 0,
                });
              },
            }, {
              key: '_setValues',
              value: function(t, e) {
                var i = this.options.doubleSided ? this.handles.index(t) : 0;
                this.inputs.eq(i).val(e), t.attr('aria-valuenow', e);
              },
            }, {
              key: '_handleEvent',
              value: function(t, e, n) {
                var s, o;
                if (n) s = this._adjustValue(null, n), o = !0;
                else {
                  t.preventDefault();
                  var l = this,
                      u = this.options.vertical,
                      h = u ? 'height' : 'width',
                      d = u ? 'top' : 'left',
                      p = u ? t.pageY : t.pageX,
                      m = (this.$handle[0].getBoundingClientRect()[h], this.$element[0].getBoundingClientRect()[h]),
                      g = u ? c()(window).scrollTop() : c()(window).
                          scrollLeft(),
                      v = this.$element.offset()[d];
                  t.clientY === t.pageY && (p += g);
                  var b, y = p - v;
                  b = y < 0 ? 0 : y > m ? m : y;
                  var w = a(b, m);
                  if (s = this._value(w), i.i(f.a)() &&
                  !this.options.vertical &&
                  (s = this.options.end - s), s = l._adjustValue(null,
                      s), o = !1, !e) {
                    e = r(this.$handle, d, b, h) <= r(this.$handle2, d, b, h)
                        ? this.$handle
                        : this.$handle2;
                  }
                }
                this._setHandlePos(e, s, o);
              },
            }, {
              key: '_adjustValue',
              value: function(t, e) {
                var i, n, s, o, a = this.options.step,
                    r = parseFloat(a / 2);
                return i = t ? parseFloat(t.attr('aria-valuenow')) : e, n = i %
                    a, s = i - n, o = s + a, 0 === n ? i : i = i >= s + r
                    ? o
                    : s;
              },
            }, {
              key: '_events',
              value: function() {
                this._eventsForHandle(this.$handle), this.handles[1] &&
                this._eventsForHandle(this.$handle2);
              },
            }, {
              key: '_eventsForHandle',
              value: function(t) {
                var e, i = this;
                if (this.inputs.off('change.zf.slider').
                    on('change.zf.slider', function(t) {
                      var e = i.inputs.index(c()(this));
                      i._handleEvent(t, i.handles.eq(e), c()(this).val());
                    }), this.options.clickSelect &&
                this.$element.off('click.zf.slider').
                    on('click.zf.slider', function(t) {
                      if (i.$element.data('dragging')) return !1;
                      c()(t.target).is('[data-slider-handle]') ||
                      (i.options.doubleSided
                          ? i._handleEvent(t)
                          : i._handleEvent(t, i.$handle));
                    }), this.options.draggable) {
                  this.handles.addTouch();
                  var n = c()('body');
                  t.off('mousedown.zf.slider').
                      on('mousedown.zf.slider', function(s) {
                        t.addClass('is-dragging'), i.$fill.addClass(
                            'is-dragging'), i.$element.data('dragging',
                            !0), e = c()(s.currentTarget), n.on(
                            'mousemove.zf.slider', function(t) {
                              t.preventDefault(), i._handleEvent(t, e);
                            }).on('mouseup.zf.slider', function(s) {
                          i._handleEvent(s, e), t.removeClass(
                              'is-dragging'), i.$fill.removeClass(
                              'is-dragging'), i.$element.data('dragging',
                              !1), n.off(
                              'mousemove.zf.slider mouseup.zf.slider');
                        });
                      }).
                      on('selectstart.zf.slider touchmove.zf.slider',
                          function(t) {
                            t.preventDefault();
                          });
                }
                t.off('keydown.zf.slider').on('keydown.zf.slider', function(t) {
                  var e, n = c()(this),
                      s = i.options.doubleSided ? i.handles.index(n) : 0,
                      o = parseFloat(i.inputs.eq(s).val());
                  h.a.handleKey(t, 'Slider', {
                    decrease: function() {
                      e = o - i.options.step;
                    },
                    increase: function() {
                      e = o + i.options.step;
                    },
                    decrease_fast: function() {
                      e = o - 10 * i.options.step;
                    },
                    increase_fast: function() {
                      e = o + 10 * i.options.step;
                    },
                    min: function() {
                      e = i.options.start;
                    },
                    max: function() {
                      e = i.options.end;
                    },
                    handled: function() {
                      t.preventDefault(), i._setHandlePos(n, e, !0);
                    },
                  });
                });
              },
            }, {
              key: '_destroy',
              value: function() {
                this.handles.off('.zf.slider'), this.inputs.off(
                    '.zf.slider'), this.$element.off(
                    '.zf.slider'), clearTimeout(this.timeout);
              },
            }]), e;
        }(p.a);
    b.defaults = {
      start: 0,
      end: 100,
      step: 1,
      initialStart: 0,
      initialEnd: 100,
      binding: !1,
      clickSelect: !0,
      vertical: !1,
      draggable: !0,
      disabled: !1,
      doubleSided: !1,
      decimal: 2,
      moveTime: 200,
      disabledClass: 'disabled',
      invertVertical: !1,
      changedDelay: 500,
      nonLinearBase: 5,
      positionValueFunction: 'linear',
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    function a(t) {
      return parseInt(window.getComputedStyle(document.body, null).fontSize,
          10) * t;
    }

    i.d(e, 'a', function() {
      return p;
    });
    var r = i(0),
        l = i.n(r),
        u = i(1),
        c = i(4),
        h = i(2),
        d = i(5),
        f = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        p = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), f(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = l.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'Sticky', d.a.init(l.a), this._init();
              },
            }, {
              key: '_init',
              value: function() {
                c.a._init();
                var t = this.$element.parent('[data-sticky-container]'),
                    e = this.$element[0].id || i.i(u.b)(6, 'sticky'),
                    n = this;
                t.length
                    ? this.$container = t
                    : (this.wasWrapped = !0, this.$element.wrap(
                    this.options.container), this.$container = this.$element.parent()), this.$container.addClass(
                    this.options.containerClass), this.$element.addClass(
                    this.options.stickyClass).attr({
                  'data-resize': e,
                  'data-mutate': e,
                }), '' !== this.options.anchor &&
                l()('#' + n.options.anchor).attr({
                  'data-mutate': e,
                }), this.scrollCount = this.options.checkEvery, this.isStuck = !1, l()(
                    window).one('load.zf.sticky', function() {
                  n.containerHeight = 'none' == n.$element.css('display')
                      ? 0
                      : n.$element[0].getBoundingClientRect().height, n.$container.css(
                      'height',
                      n.containerHeight), n.elemHeight = n.containerHeight, '' !==
                  n.options.anchor
                      ? n.$anchor = l()('#' + n.options.anchor)
                      : n._parsePoints(), n._setSizes(function() {
                    var t = window.pageYOffset;
                    n._calc(!1, t), n.isStuck ||
                    n._removeSticky(!(t >= n.topPoint));
                  }), n._events(e.split('-').reverse().join('-'));
                });
              },
            }, {
              key: '_parsePoints',
              value: function() {
                for (var t = '' == this.options.topAnchor
                    ? 1
                    : this.options.topAnchor, e = '' == this.options.btmAnchor
                    ? document.documentElement.scrollHeight
                    : this.options.btmAnchor, i = [
                  t,
                  e], n = {}, s = 0, o = i.length; s < o && i[s]; s++) {
                  var a;
                  if ('number' == typeof i[s]) a = i[s];
                  else {
                    var r = i[s].split(':'),
                        u = l()('#' + r[0]);
                    a = u.offset().top, r[1] && 'bottom' ===
                    r[1].toLowerCase() &&
                    (a += u[0].getBoundingClientRect().height);
                  }
                  n[s] = a;
                }
                this.points = n;
              },
            }, {
              key: '_events',
              value: function(t) {
                var e = this,
                    i = this.scrollListener = 'scroll.zf.' + t;
                this.isOn || (this.canStick &&
                (this.isOn = !0, l()(window).off(i).on(i, function(t) {
                  0 === e.scrollCount
                      ? (e.scrollCount = e.options.checkEvery, e._setSizes(
                      function() {
                        e._calc(!1, window.pageYOffset);
                      }))
                      : (e.scrollCount--, e._calc(!1, window.pageYOffset));
                })), this.$element.off('resizeme.zf.trigger').
                    on('resizeme.zf.trigger', function(i, n) {
                      e._eventsHandler(t);
                    }), this.$element.on('mutateme.zf.trigger', function(i, n) {
                  e._eventsHandler(t);
                }), this.$anchor &&
                this.$anchor.on('mutateme.zf.trigger', function(i, n) {
                  e._eventsHandler(t);
                }));
              },
            }, {
              key: '_eventsHandler',
              value: function(t) {
                var e = this,
                    i = this.scrollListener = 'scroll.zf.' + t;
                e._setSizes(function() {
                  e._calc(!1), e.canStick ? e.isOn || e._events(t) : e.isOn &&
                      e._pauseListeners(i);
                });
              },
            }, {
              key: '_pauseListeners',
              value: function(t) {
                this.isOn = !1, l()(window).off(t), this.$element.trigger(
                    'pause.zf.sticky');
              },
            }, {
              key: '_calc',
              value: function(t, e) {
                if (t &&
                this._setSizes(), !this.canStick) return this.isStuck &&
                this._removeSticky(!0), !1;
                e || (e = window.pageYOffset), e >= this.topPoint ? e <=
                this.bottomPoint
                    ? this.isStuck || this._setSticky()
                    : this.isStuck && this._removeSticky(!1) : this.isStuck &&
                    this._removeSticky(!0);
              },
            }, {
              key: '_setSticky',
              value: function() {
                var t = this,
                    e = this.options.stickTo,
                    i = 'top' === e ? 'marginTop' : 'marginBottom',
                    n = 'top' === e ? 'bottom' : 'top',
                    s = {};
                s[i] = this.options[i] +
                    'em', s[e] = 0, s[n] = 'auto', this.isStuck = !0, this.$element.removeClass(
                    'is-anchored is-at-' + n).
                    addClass('is-stuck is-at-' + e).
                    css(s).
                    trigger('sticky.zf.stuckto:' + e), this.$element.on(
                    'transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
                    function() {
                      t._setSizes();
                    });
              },
            }, {
              key: '_removeSticky',
              value: function(t) {
                var e = this.options.stickTo,
                    i = 'top' === e,
                    n = {},
                    s = (this.points
                        ? this.points[1] - this.points[0]
                        : this.anchorHeight) - this.elemHeight,
                    o = i ? 'marginTop' : 'marginBottom',
                    a = t ? 'top' : 'bottom';
                n[o] = 0, n.bottom = 'auto', n.top = t
                    ? 0
                    : s, this.isStuck = !1, this.$element.removeClass(
                    'is-stuck is-at-' + e).
                    addClass('is-anchored is-at-' + a).
                    css(n).
                    trigger('sticky.zf.unstuckfrom:' + a);
              },
            }, {
              key: '_setSizes',
              value: function(t) {
                this.canStick = c.a.is(this.options.stickyOn), this.canStick ||
                t && 'function' == typeof t && t();
                var e = this.$container[0].getBoundingClientRect().width,
                    i = window.getComputedStyle(this.$container[0]),
                    n = parseInt(i['padding-left'], 10),
                    s = parseInt(i['padding-right'], 10);
                this.$anchor && this.$anchor.length
                    ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height
                    : this._parsePoints(), this.$element.css({
                  'max-width': e - n - s + 'px',
                });
                var o = this.$element[0].getBoundingClientRect().height ||
                    this.containerHeight;
                if ('none' == this.$element.css('display') &&
                (o = 0), this.containerHeight = o, this.$container.css({
                  height: o,
                }), this.elemHeight = o, !this.isStuck &&
                this.$element.hasClass('is-at-bottom')) {
                  var a = (this.points ? this.points[1] -
                      this.$container.offset().top : this.anchorHeight) -
                      this.elemHeight;
                  this.$element.css('top', a);
                }
                this._setBreakPoints(o, function() {
                  t && 'function' == typeof t && t();
                });
              },
            }, {
              key: '_setBreakPoints',
              value: function(t, e) {
                if (!this.canStick) {
                  if (!e || 'function' != typeof e) return !1;
                  e();
                }
                var i = a(this.options.marginTop),
                    n = a(this.options.marginBottom),
                    s = this.points
                        ? this.points[0]
                        : this.$anchor.offset().top,
                    o = this.points ? this.points[1] : s + this.anchorHeight,
                    r = window.innerHeight;
                'top' === this.options.stickTo
                    ? (s -= i, o -= t + i)
                    : 'bottom' === this.options.stickTo &&
                    (s -= r - (t + n), o -= r -
                        n), this.topPoint = s, this.bottomPoint = o, e &&
                'function' == typeof e && e();
              },
            }, {
              key: '_destroy',
              value: function() {
                this._removeSticky(!0), this.$element.removeClass(
                    this.options.stickyClass + ' is-anchored is-at-top').
                    css({
                      height: '',
                      top: '',
                      bottom: '',
                      'max-width': '',
                    }).
                    off('resizeme.zf.trigger').
                    off('mutateme.zf.trigger'), this.$anchor &&
                this.$anchor.length &&
                this.$anchor.off('change.zf.sticky'), l()(window).
                    off(this.scrollListener), this.wasWrapped
                    ? this.$element.unwrap()
                    : this.$container.removeClass(this.options.containerClass).
                        css({
                          height: '',
                        });
              },
            }]), e;
        }(h.a);
    p.defaults = {
      container: '<div data-sticky-container></div>',
      stickTo: 'top',
      anchor: '',
      topAnchor: '',
      btmAnchor: '',
      marginTop: 1,
      marginBottom: 1,
      stickyOn: 'medium',
      stickyClass: 'sticky',
      containerClass: 'sticky-container',
      checkEvery: -1,
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return d;
    });
    var a = i(0),
        r = i.n(a),
        l = i(6),
        u = i(2),
        c = i(5),
        h = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        d = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), h(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = r.a.extend({}, e.defaults,
                    t.data(),
                    i), this.className = '', this.className = 'Toggler', c.a.init(
                    r.a), this._init(), this._events();
              },
            }, {
              key: '_init',
              value: function() {
                var t;
                this.options.animate ? (t = this.options.animate.split(
                    ' '), this.animationIn = t[0], this.animationOut = t[1] ||
                    null) : (t = this.$element.data(
                    'toggler'), this.className = '.' === t[0] ? t.slice(1) : t);
                var e = this.$element[0].id;
                r()('[data-open="' + e + '"], [data-close="' + e +
                    '"], [data-toggle="' + e + '"]').
                    attr('aria-controls', e), this.$element.attr(
                    'aria-expanded', !this.$element.is(':hidden'));
              },
            }, {
              key: '_events',
              value: function() {
                this.$element.off('toggle.zf.trigger').
                    on('toggle.zf.trigger', this.toggle.bind(this));
              },
            }, {
              key: 'toggle',
              value: function() {
                this[this.options.animate
                    ? '_toggleAnimate'
                    : '_toggleClass']();
              },
            }, {
              key: '_toggleClass',
              value: function() {
                this.$element.toggleClass(this.className);
                var t = this.$element.hasClass(this.className);
                t
                    ? this.$element.trigger('on.zf.toggler')
                    : this.$element.trigger('off.zf.toggler'), this._updateARIA(
                    t), this.$element.find('[data-mutate]').
                    trigger('mutateme.zf.trigger');
              },
            }, {
              key: '_toggleAnimate',
              value: function() {
                var t = this;
                this.$element.is(':hidden') ? l.a.animateIn(this.$element,
                    this.animationIn, function() {
                      t._updateARIA(!0), this.trigger(
                          'on.zf.toggler'), this.find('[data-mutate]').
                          trigger('mutateme.zf.trigger');
                    }) : l.a.animateOut(this.$element, this.animationOut,
                    function() {
                      t._updateARIA(!1), this.trigger(
                          'off.zf.toggler'), this.find('[data-mutate]').
                          trigger('mutateme.zf.trigger');
                    });
              },
            }, {
              key: '_updateARIA',
              value: function(t) {
                this.$element.attr('aria-expanded', !!t);
              },
            }, {
              key: '_destroy',
              value: function() {
                this.$element.off('.zf.toggler');
              },
            }]), e;
        }(u.a);
    d.defaults = {
      animate: !1,
    };
  }, function(t, e, i) {
    'use strict';

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError(
          'Cannot call a class as a function');
    }

    function s(t, e) {
      if (!t) throw new ReferenceError(
          'this hasn\'t been initialised - super() hasn\'t been called');
      return !e || 'object' != typeof e && 'function' != typeof e ? t : e;
    }

    function o(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError(
          'Super expression must either be null or a function, not ' +
          typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    i.d(e, 'a', function() {
      return p;
    });
    var a = i(0),
        r = i.n(a),
        l = i(1),
        u = i(4),
        c = i(5),
        h = i(15),
        d = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in
              n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }

          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        }(),
        f = function t(e, i, n) {
          null === e && (e = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(e, i);
          if (void 0 === s) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : t(o, i, n);
          }
          if ('value' in s) return s.value;
          var a = s.get;
          if (void 0 !== a) return a.call(n);
        },
        p = function(t) {
          function e() {
            return n(this, e), s(this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this,
                    arguments));
          }

          return o(e, t), d(e, [
            {
              key: '_setup',
              value: function(t, i) {
                this.$element = t, this.options = r.a.extend({}, e.defaults,
                    this.$element.data(),
                    i), this.className = 'Tooltip', this.isActive = !1, this.isClick = !1, c.a.init(
                    r.a), this._init();
              },
            }, {
              key: '_init',
              value: function() {
                u.a._init();
                var t = this.$element.attr('aria-describedby') ||
                    i.i(l.b)(6, 'tooltip');
                this.options.tipText = this.options.tipText ||
                    this.$element.attr(
                        'title'), this.template = this.options.template ? r()(
                    this.options.template) : this._buildTemplate(
                    t), this.options.allowHtml
                    ? this.template.appendTo(document.body).
                        html(this.options.tipText).
                        hide()
                    : this.template.appendTo(document.body).
                        text(this.options.tipText).
                        hide(), this.$element.attr({
                  title: '',
                  'aria-describedby': t,
                  'data-yeti-box': t,
                  'data-toggle': t,
                  'data-resize': t,
                }).addClass(this.options.triggerClass), f(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    '_init', this).call(this), this._events();
              },
            }, {
              key: '_getDefaultPosition',
              value: function() {
                var t = this.$element[0].className.match(
                    /\b(top|left|right|bottom)\b/g);
                return t ? t[0] : 'top';
              },
            }, {
              key: '_getDefaultAlignment',
              value: function() {
                return 'center';
              },
            }, {
              key: '_getHOffset',
              value: function() {
                return 'left' === this.position || 'right' === this.position
                    ? this.options.hOffset + this.options.tooltipWidth
                    : this.options.hOffset;
              },
            }, {
              key: '_getVOffset',
              value: function() {
                return 'top' === this.position || 'bottom' === this.position
                    ? this.options.vOffset + this.options.tooltipHeight
                    : this.options.vOffset;
              },
            }, {
              key: '_buildTemplate',
              value: function(t) {
                var e = (this.options.tooltipClass + ' ' +
                    this.options.positionClass + ' ' +
                    this.options.templateClasses).trim();
                return r()('<div></div>').addClass(e).attr({
                  role: 'tooltip',
                  'aria-hidden': !0,
                  'data-is-active': !1,
                  'data-is-focus': !1,
                  id: t,
                });
              },
            }, {
              key: '_setPosition',
              value: function() {
                f(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    '_setPosition', this).
                    call(this, this.$element, this.template);
              },
            }, {
              key: 'show',
              value: function() {
                if ('all' !== this.options.showOn &&
                    !u.a.is(this.options.showOn)) return !1;
                var t = this;
                this.template.css('visibility', 'hidden').
                    show(), this._setPosition(), this.template.removeClass(
                    'top bottom left right').
                    addClass(this.position), this.template.removeClass(
                    'align-top align-bottom align-left align-right align-center').
                    addClass('align-' + this.alignment), this.$element.trigger(
                    'closeme.zf.tooltip',
                    this.template.attr('id')), this.template.attr({
                  'data-is-active': !0,
                  'aria-hidden': !1,
                }), t.isActive = !0, this.template.stop().
                    hide().
                    css('visibility', '').
                    fadeIn(this.options.fadeInDuration,
                        function() {}), this.$element.trigger(
                    'show.zf.tooltip');
              },
            }, {
              key: 'hide',
              value: function() {
                var t = this;
                this.template.stop().attr({
                  'aria-hidden': !0,
                  'data-is-active': !1,
                }).fadeOut(this.options.fadeOutDuration, function() {
                  t.isActive = !1, t.isClick = !1;
                }), this.$element.trigger('hide.zf.tooltip');
              },
            }, {
              key: '_events',
              value: function() {
                var t = this,
                    e = (this.template, !1);
                this.options.disableHover ||
                this.$element.on('mouseenter.zf.tooltip', function(e) {
                  t.isActive || (t.timeout = setTimeout(function() {
                    t.show();
                  }, t.options.hoverDelay));
                }).on('mouseleave.zf.tooltip', function(i) {
                  clearTimeout(t.timeout), (!e || t.isClick &&
                      !t.options.clickOpen) && t.hide();
                }), this.options.clickOpen ? this.$element.on(
                    'mousedown.zf.tooltip', function(e) {
                      e.stopImmediatePropagation(), t.isClick ||
                      (t.isClick = !0, !t.options.disableHover &&
                      t.$element.attr('tabindex') || t.isActive || t.show());
                    }) : this.$element.on('mousedown.zf.tooltip', function(e) {
                  e.stopImmediatePropagation(), t.isClick = !0;
                }), this.options.disableForTouch ||
                this.$element.on('tap.zf.tooltip touchend.zf.tooltip',
                    function(e) {
                      t.isActive ? t.hide() : t.show();
                    }), this.$element.on({
                  'close.zf.trigger': this.hide.bind(this),
                }), this.$element.on('focus.zf.tooltip', function(i) {
                  if (e = !0, t.isClick) return t.options.clickOpen ||
                  (e = !1), !1;
                  t.show();
                }).on('focusout.zf.tooltip', function(i) {
                  e = !1, t.isClick = !1, t.hide();
                }).on('resizeme.zf.trigger', function() {
                  t.isActive && t._setPosition();
                });
              },
            }, {
              key: 'toggle',
              value: function() {
                this.isActive ? this.hide() : this.show();
              },
            }, {
              key: '_destroy',
              value: function() {
                this.$element.attr('title', this.template.text()).
                    off('.zf.trigger .zf.tooltip').
                    removeClass('has-tip top right left').
                    removeAttr(
                        'aria-describedby aria-haspopup data-disable-hover data-resize data-toggle data-tooltip data-yeti-box'), this.template.remove();
              },
            }]), e;
        }(h.a);
    p.defaults = {
      disableForTouch: !1,
      hoverDelay: 200,
      fadeInDuration: 150,
      fadeOutDuration: 150,
      disableHover: !1,
      templateClasses: '',
      tooltipClass: 'tooltip',
      triggerClass: 'has-tip',
      showOn: 'small',
      template: '',
      tipText: '',
      touchCloseText: 'Tap to close.',
      clickOpen: !0,
      positionClass: '',
      position: 'auto',
      alignment: 'auto',
      allowOverlap: !1,
      allowBottomOverlap: !1,
      vOffset: 0,
      hOffset: 0,
      tooltipHeight: 14,
      tooltipWidth: 12,
      allowHtml: !1,
    };
  }, function(t, e, i) {
    t.exports = i(19);
  }]);



