(function(e){e.fn.hoverIntent=function(n,o,a){var t={interval:100,sensitivity:7,timeout:0};if(typeof n==='object'){t=e.extend(t,n)}
else if(e.isFunction(o)){t=e.extend(t,{over:n,out:o,selector:a})}
else{t=e.extend(t,{over:n,out:n,selector:o})};var r,i,v,u,s=function(e){r=e.pageX;i=e.pageY},h=function(o,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if((Math.abs(v-r)+Math.abs(u-i))<t.sensitivity){e(n).off('mousemove.hoverIntent',s);n.hoverIntent_s=1;return t.over.apply(n,[o])}
else{v=r;u=i;n.hoverIntent_t=setTimeout(function(){h(o,n)},t.interval)}},I=function(e,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);n.hoverIntent_s=0;return t.out.apply(n,[e])},f=function(o){var r=jQuery.extend({},o);var n=this;if(n.hoverIntent_t){n.hoverIntent_t=clearTimeout(n.hoverIntent_t)};if(o.type=='mouseenter'){v=r.pageX;u=r.pageY;e(n).on('mousemove.hoverIntent',s);if(n.hoverIntent_s!=1){n.hoverIntent_t=setTimeout(function(){h(r,n)},t.interval)}}
else{e(n).off('mousemove.hoverIntent',s);if(n.hoverIntent_s==1){n.hoverIntent_t=setTimeout(function(){I(r,n)},t.timeout)}}};return this.on({'mouseenter.hoverIntent':f,'mouseleave.hoverIntent':f},t.selector)}})(jQuery);
(function(e,s){'use strict';var n=(function(){var n={bcClass:'sf-breadcrumb',menuClass:'sf-js-enabled',anchorClass:'sf-with-ul',menuArrowClass:'sf-arrows'},r=(function(){var s=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);if(s){e('html').css('cursor','pointer').on('click',e.noop)};return s})(),p=(function(){var e=document.documentElement.style;return('behavior' in e&&'fill' in e&&/iemobile/i.test(navigator.userAgent))})(),c=(function(){return(!!s.PointerEvent)})(),a=function(e,s,i){var t=n.menuClass,o;if(s.cssArrows){t+=' '+n.menuArrowClass};o=(i)?'addClass':'removeClass';e[o](t)},d=function(s,t){return s.find('li.'+t.pathClass).slice(0,t.pathLevels).addClass(t.hoverClass+' '+n.bcClass).filter(function(){return(e(this).children(t.popUpSelector).hide().show().length)}).removeClass(t.pathClass)},l=function(e,s){var t=(s)?'addClass':'removeClass';e.children('a')[t](n.anchorClass)},h=function(e){var n=e.css('ms-touch-action'),s=e.css('touch-action');s=s||n;s=(s==='pan-y')?'auto':'pan-y';e.css({'ms-touch-action':s,'touch-action':s})},u=function(e){return e.closest('.'+n.menuClass)},t=function(e){return u(e).data('sfOptions')},o=function(){var s=e(this),n=t(s);clearTimeout(n.sfTimer);s.siblings().superfish('hide').end().superfish('show')},f=function(s){s.retainPath=(e.inArray(this[0],s.$path)>-1);this.superfish('hide');if(!this.parents('.'+s.hoverClass).length){s.onIdle.call(u(this));if(s.$path.length){e.proxy(o,s.$path)()}}},i=function(){var n=e(this),s=t(n);if(r){e.proxy(f,n,s)()}
else{clearTimeout(s.sfTimer);s.sfTimer=setTimeout(e.proxy(f,n,s),s.delay)}},v=function(s){var n=e(this),r=t(n),i=n.siblings(s.data.popUpSelector);if(r.onHandleTouch.call(i)===!1){return this};if(i.length>0&&i.is(':hidden')){n.one('click.superfish',!1);if(s.type==='MSPointerDown'||s.type==='pointerdown'){n.trigger('focus')}
else{e.proxy(o,n.parent('li'))()}}},m=function(s,n){var a='li:has('+n.popUpSelector+')';if(e.fn.hoverIntent&&!n.disableHI){s.hoverIntent(o,i,a)}
else{s.on('mouseenter.superfish',a,o).on('mouseleave.superfish',a,i)};var t='MSPointerDown.superfish';if(c){t='pointerdown.superfish'};if(!r){t+=' touchend.superfish'};if(p){t+=' mousedown.superfish'};s.on('focusin.superfish','li',o).on('focusout.superfish','li',i).on(t,'a',n,v)};return{hide:function(s){if(this.length){var r=this,n=t(r);if(!n){return this};var a=(n.retainPath===!0)?n.$path:'',o=r.find('li.'+n.hoverClass).add(this).not(a).removeClass(n.hoverClass).children(n.popUpSelector),i=n.speedOut;if(s){o.show();i=0};n.retainPath=!1;if(n.onBeforeHide.call(o)===!1){return this};o.stop(!0,!0).animate(n.animationOut,i,function(){var s=e(this);n.onHide.call(s)})};return this},show:function(){var e=t(this);if(!e){return this};var n=this.addClass(e.hoverClass),s=n.children(e.popUpSelector);if(e.onBeforeShow.call(s)===!1){return this};s.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(s)});return this},destroy:function(){return this.each(function(){var t=e(this),s=t.data('sfOptions'),o;if(!s){return!1};o=t.find(s.popUpSelector).parent('li');clearTimeout(s.sfTimer);a(t,s);l(o);h(t);t.off('.superfish').off('.hoverIntent');o.children(s.popUpSelector).attr('style',function(e,s){return s.replace(/display[^;]+;?/g,'')});s.$path.removeClass(s.hoverClass+' '+n.bcClass).addClass(s.pathClass);t.find('.'+s.hoverClass).removeClass(s.hoverClass);s.onDestroy.call(t);t.removeData('sfOptions')})},init:function(s){return this.each(function(){var o=e(this);if(o.data('sfOptions')){return!1};var t=e.extend({},e.fn.superfish.defaults,s),i=o.find(t.popUpSelector).parent('li');t.$path=d(o,t);o.data('sfOptions',t);a(o,t,!0);l(i,!0);h(o);m(o,t);i.not('.'+n.bcClass).superfish('hide',!0);t.onInit.call(this)})}}})();e.fn.superfish=function(s,t){if(n[s]){return n[s].apply(this,Array.prototype.slice.call(arguments,1))}
else if(typeof s==='object'||!s){return n.init.apply(this,arguments)}
else{return e.error('Method '+s+' does not exist on jQuery.fn.superfish')}};e.fn.superfish.defaults={popUpSelector:'ul,.sf-mega',hoverClass:'sfHover',pathClass:'overrideThisToUse',pathLevels:1,delay:800,animation:{opacity:'show'},animationOut:{opacity:'hide'},speed:'normal',speedOut:'fast',cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop,onHandleTouch:e.noop}})(jQuery,window);
(function(e){e.catSlider=function(n,s){var t=this;t.el=n;t.$el=e(n);t.$el.data('catSlider',t);t.init=function(){t.options=e.extend({},e.catSlider.defaultOptions,s);var l=e(['<span class="cat-arrow"> &rArr;</span>'].join('')),i=t.$el.find('.parent:not(.selected)');i.addClass('cat-closed');var n=t.$el.find('.parent:not(.selected):has(.children)');if(n.find('.cat-arrow').length<1){n.prepend(l.clone())};if(t.options.mode==='hover'){t.$el.find('.parent a').hoverIntent({interval:100,timeout:0,over:function(){t.handleEvent(e(this))},out:function(){}})}
else{t.$el.find('.parent a').click(function(n){n.preventDefault();t.handleEvent(e(this));n.stopPropagation()})};t.$el.find('a[href="#"]').click(function(e){e.preventDefault()});t.$el.find('.selected > ul').show()};t.handleEvent=function(e){e.blur();var s=e.parent(),n=e.next();if(s.is('.cat-closed')){n.closest('li').siblings().removeClass('selected').addClass('cat-closed').children('ul').stop(!0,!0).slideUp(t.options.speed);s.children('.cat-arrow').html('&dArr;');n.closest('li').siblings().find('.cat-arrow').html('&rArr;');n.stop(!0,!0).slideDown(t.options.speed).closest('li').removeClass('cat-closed').addClass('selected')}
else if(t.options.mode!=='hover'){s.removeClass('selected').addClass('cat-closed');n.stop(!0,!0).slideUp(t.options.speed)}};t.init()};e.catSlider.defaultOptions={mode:'hover',speed:'medium'};e.fn.catSlider=function(t){return this.each(function(){new e.catSlider(this,t)})}})(jQuery);