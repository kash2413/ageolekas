/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(i,o,t,d){var g=t('html'),r=t(i),a=t(o),e=t.fancybox=function(){e.open.apply(this,arguments)},u=navigator.userAgent.match(/msie/i),f=null,l=o.createTouch!==d,h=function(e){return e&&e.hasOwnProperty&&e instanceof t},c=function(e){return e&&'string'===t.type(e)},p=function(e){return c(e)&&0<e.indexOf('%')},n=function(t,i){var n=parseInt(t,10)||0;i&&p(t)&&(n*=e.getViewport()[i]/100);return Math.ceil(n)},s=function(e,t){return n(e,t)+'px'};t.extend(e,{version:'2.1.5',defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!l,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:'auto',wrapCSS:'',arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:'html',headers:{'X-fancyBox':!0}},iframe:{scrolling:'auto',preload:!0},swf:{wmode:'transparent',allowfullscreen:'true',allowscriptaccess:'always'},keys:{next:{13:'left',34:'up',39:'left',40:'up'},prev:{8:'right',33:'down',37:'right',38:'down'},close:[27],play:[32],toggle:[70]},direction:{next:'left',prev:'right'},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(u?' allowtransparency="true"':'')+'></iframe>',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:'fade',openSpeed:250,openEasing:'swing',openOpacity:!0,openMethod:'zoomIn',closeEffect:'fade',closeSpeed:250,closeEasing:'swing',closeOpacity:!0,closeMethod:'zoomOut',nextEffect:'elastic',nextSpeed:250,nextEasing:'swing',nextMethod:'changeIn',prevEffect:'elastic',prevSpeed:250,prevEasing:'swing',prevMethod:'changeOut',helpers:{overlay:!0,title:!0},onCancel:t.noop,beforeLoad:t.noop,afterLoad:t.noop,beforeShow:t.noop,afterShow:t.noop,beforeChange:t.noop,beforeClose:t.noop,afterClose:t.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(i,n){if(i&&(t.isPlainObject(n)||(n={}),!1!==e.close(!0)))return t.isArray(i)||(i=h(i)?t(i).get():[i]),t.each(i,function(o,a){var s={},l,u,p,r,f;'object'===t.type(a)&&(a.nodeType&&(a=t(a)),h(a)?(s={href:a.data('fancybox-href')||a.attr('href'),title:t('<div/>').text(a.data('fancybox-title')||a.attr('title')).html(),isDom:!0,element:a},t.metadata&&t.extend(!0,s,a.metadata())):s=a);l=n.href||s.href||(c(a)?a:null);u=n.title!==d?n.title:s.title||'';r=(p=n.content||s.content)?'html':n.type||s.type;!r&&s.isDom&&(r=a.data('fancybox-type'),r||(r=(r=a.prop('class').match(/fancybox\.(\w+)/))?r[1]:null));c(l)&&(r||(e.isImage(l)?r='image':e.isSWF(l)?r='swf':'#'===l.charAt(0)?r='inline':c(a)&&(r='html',p=a)),'ajax'===r&&(f=l.split(/\s+/,2),l=f.shift(),f=f.shift()));p||('inline'===r?l?p=t(c(l)?l.replace(/.*(?=#[^\s]+$)/,''):l):s.isDom&&(p=a):'html'===r?p=l:r||l||!s.isDom||(r='inline',p=a));t.extend(s,{href:l,type:r,content:p,title:u,selector:f});i[o]=s}),e.opts=t.extend(!0,{},e.defaults,n),n.keys!==d&&(e.opts.keys=n.keys?t.extend({},e.defaults.keys,n.keys):!1),e.group=i,e._start(e.opts.index)},cancel:function(){var t=e.coming;t&&!1===e.trigger('onCancel')||(e.hideLoading(),t&&(e.ajaxLoad&&e.ajaxLoad.abort(),e.ajaxLoad=null,e.imgPreload&&(e.imgPreload.onload=e.imgPreload.onerror=null),t.wrap&&t.wrap.stop(!0,!0).trigger('onReset').remove(),e.coming=null,e.current||e._afterZoomOut(t)))},close:function(i){e.cancel();!1!==e.trigger('beforeClose')&&(e.unbindEvents(),e.isActive&&(e.isOpen&&!0!==i?(e.isOpen=e.isOpened=!1,e.isClosing=!0,t('.fancybox-item, .fancybox-nav').remove(),e.wrap.stop(!0,!0).removeClass('fancybox-opened'),e.transitions[e.current.closeMethod]()):(t('.fancybox-wrap').stop(!0).trigger('onReset').remove(),e._afterZoomOut())))},play:function(t){var i=function(){clearTimeout(e.player.timer)},n=function(){i();e.current&&e.player.isActive&&(e.player.timer=setTimeout(e.next,e.current.playSpeed))},o=function(){i();a.unbind('.player');e.player.isActive=!1;e.trigger('onPlayEnd')};!0===t||!e.player.isActive&&!1!==t?e.current&&(e.current.loop||e.current.index<e.group.length-1)&&(e.player.isActive=!0,a.bind({'onCancel.player beforeClose.player':o,'onUpdate.player':n,'beforeLoad.player':i}),n(),e.trigger('onPlayStart')):o()},next:function(t){var i=e.current;i&&(c(t)||(t=i.direction.next),e.jumpto(i.index+1,t,'next'))},prev:function(t){var i=e.current;i&&(c(t)||(t=i.direction.prev),e.jumpto(i.index-1,t,'prev'))},jumpto:function(t,i,a){var o=e.current;o&&(t=n(t),e.direction=i||o.direction[t>=o.index?'next':'prev'],e.router=a||'jumpto',o.loop&&(0>t&&(t=o.group.length+t%o.group.length),t%=o.group.length),o.group[t]!==d&&(e.cancel(),e._start(t)))},reposition:function(i,n){var a=e.current,r=a?a.wrap:null,o;r&&(o=e._getPosition(n),i&&'scroll'===i.type?(delete o.position,r.stop(!0,!0).animate(o,200)):(r.css(o),a.pos=t.extend({},a.dim,o)))},update:function(t){var i=t&&t.originalEvent&&t.originalEvent.type,n=!i||'orientationchange'===i;n&&(clearTimeout(f),f=null);e.isOpen&&!f&&(f=setTimeout(function(){var o=e.current;o&&!e.isClosing&&(e.wrap.removeClass('fancybox-tmp'),(n||'load'===i||'resize'===i&&o.autoResize)&&e._setDimension(),'scroll'===i&&o.canShrink||e.reposition(t),e.trigger('onUpdate'),f=null)},n&&!l?0:300))},toggle:function(i){e.isOpen&&(e.current.fitToView='boolean'===t.type(i)?i:!e.current.fitToView,l&&(e.wrap.removeAttr('style').addClass('fancybox-tmp'),e.trigger('onUpdate')),e.update())},hideLoading:function(){a.unbind('.loading');t('#fancybox-loading').remove()},showLoading:function(){var n,i;e.hideLoading();n=t('<div id="fancybox-loading"><div></div></div>').click(e.cancel).appendTo('body');a.bind('keydown.loading',function(t){27===(t.which||t.keyCode)&&(t.preventDefault(),e.cancel())});e.defaults.fixed||(i=e.getViewport(),n.css({position:'absolute',top:0.5*i.h+i.y,left:0.5*i.w+i.x}));e.trigger('onLoading')},getViewport:function(){var n=e.current&&e.current.locked||!1,t={x:r.scrollLeft(),y:r.scrollTop()};n&&n.length?(t.w=n[0].clientWidth,t.h=n[0].clientHeight):(t.w=l&&i.innerWidth?i.innerWidth:r.width(),t.h=l&&i.innerHeight?i.innerHeight:r.height());return t},unbindEvents:function(){e.wrap&&h(e.wrap)&&e.wrap.unbind('.fb');a.unbind('.fb');r.unbind('.fb')},bindEvents:function(){var i=e.current,n;i&&(r.bind('orientationchange.fb'+(l?'':' resize.fb')+(i.autoCenter&&!i.locked?' scroll.fb':''),e.update),(n=i.keys)&&a.bind('keydown.fb',function(o){var a=o.which||o.keyCode,r=o.target||o.srcElement;if(27===a&&e.coming)return!1;o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||r&&(r.type||t(r).is('[contenteditable]'))||t.each(n,function(n,r){if(1<i.group.length&&r[a]!==d)return e[n](r[a]),o.preventDefault(),!1;if(-1<t.inArray(a,r))return e[n](),o.preventDefault(),!1})}),t.fn.mousewheel&&i.mouseWheel&&e.wrap.bind('mousewheel.fb',function(n,o,l,r){for(var a=t(n.target||null),s=!1;a.length&&!(s||a.is('.fancybox-skin')||a.is('.fancybox-wrap'));)s=a[0]&&!(a[0].style.overflow&&'hidden'===a[0].style.overflow)&&(a[0].clientWidth&&a[0].scrollWidth>a[0].clientWidth||a[0].clientHeight&&a[0].scrollHeight>a[0].clientHeight),a=t(a).parent();0!==o&&!s&&1<e.group.length&&!i.canShrink&&(0<r||0<l?e.prev(0<r?'down':'left'):(0>r||0>l)&&e.next(0>r?'up':'right'),n.preventDefault())}))},trigger:function(i,n){var r,o=n||e.coming||e.current;if(o){t.isFunction(o[i])&&(r=o[i].apply(o,Array.prototype.slice.call(arguments,1)));if(!1===r)return!1;o.helpers&&t.each(o.helpers,function(n,a){if(a&&e.helpers[n]&&t.isFunction(e.helpers[n][i]))e.helpers[n][i](t.extend(!0,{},e.helpers[n].defaults,a),o)})};a.trigger(i)},isImage:function(e){return c(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return c(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(i){var o={},r,a;i=n(i);r=e.group[i]||null;if(!r)return!1;o=t.extend(!0,{},e.opts,r);r=o.margin;a=o.padding;'number'===t.type(r)&&(o.margin=[r,r,r,r]);'number'===t.type(a)&&(o.padding=[a,a,a,a]);o.modal&&t.extend(!0,o,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});o.autoSize&&(o.autoWidth=o.autoHeight=!0);'auto'===o.width&&(o.autoWidth=!0);'auto'===o.height&&(o.autoHeight=!0);o.group=e.group;o.index=i;e.coming=o;if(!1===e.trigger('beforeLoad'))e.coming=null;else{a=o.type;r=o.href;if(!a)return e.coming=null,e.current&&e.router&&'jumpto'!==e.router?(e.current.index=i,e[e.router](e.direction)):!1;e.isActive=!0;if('image'===a||'swf'===a)o.autoHeight=o.autoWidth=!1,o.scrolling='visible';'image'===a&&(o.aspectRatio=!0);'iframe'===a&&l&&(o.scrolling='scroll');o.wrap=t(o.tpl.wrap).addClass('fancybox-'+(l?'mobile':'desktop')+' fancybox-type-'+a+' fancybox-tmp '+o.wrapCSS).appendTo(o.parent||'body');t.extend(o,{skin:t('.fancybox-skin',o.wrap),outer:t('.fancybox-outer',o.wrap),inner:t('.fancybox-inner',o.wrap)});t.each(['Top','Right','Bottom','Left'],function(e,t){o.skin.css('padding'+t,s(o.padding[e]))});e.trigger('onReady');if('inline'===a||'html'===a){if(!o.content||!o.content.length)return e._error('content')}
else if(!r)return e._error('href');'image'===a?e._loadImage():'ajax'===a?e._loadAjax():'iframe'===a?e._loadIframe():e._afterLoad()}},_error:function(i){t.extend(e.coming,{type:'html',autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:'no',hasError:i,content:e.coming.tpl.error});e._afterLoad()},_loadImage:function(){var t=e.imgPreload=new Image;t.onload=function(){this.onload=this.onerror=null;e.coming.width=this.width/e.opts.pixelRatio;e.coming.height=this.height/e.opts.pixelRatio;e._afterLoad()};t.onerror=function(){this.onload=this.onerror=null;e._error('image')};t.src=e.coming.href;!0!==t.complete&&e.showLoading()},_loadAjax:function(){var i=e.coming;e.showLoading();e.ajaxLoad=t.ajax(t.extend({},i.ajax,{url:i.href,error:function(t,i){e.coming&&'abort'!==i?e._error('ajax',t):e.hideLoading()},success:function(t,n){'success'===n&&(i.content=t,e._afterLoad())}}))},_loadIframe:function(){var i=e.coming,n=t(i.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr('scrolling',l?'auto':i.iframe.scrolling).attr('src',i.href);t(i.wrap).bind('onReset',function(){try{t(this).find('iframe').hide().attr('src','//about:blank').end().empty()}catch(e){}});i.iframe.preload&&(e.showLoading(),n.one('load',function(){t(this).data('ready',1);l||t(this).bind('load.fb',e.update);t(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();e._afterLoad()}));i.content=n.appendTo(i.inner);i.iframe.preload||e._afterLoad()},_preloadImages:function(){var o=e.group,n=e.current,a=o.length,r=n.preload?Math.min(n.preload,a-1):0,t,i;for(i=1;i<=r;i+=1)t=o[(n.index+i)%a],'image'===t.type&&t.href&&((new Image).src=t.href)},_afterLoad:function(){var i=e.coming,o=e.current,n,s,a,r,l;e.hideLoading();if(i&&!1!==e.isActive)if(!1===e.trigger('afterLoad',i,o))i.wrap.stop(!0).trigger('onReset').remove(),e.coming=null;else{o&&(e.trigger('beforeChange',o),o.wrap.stop(!0).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove());e.unbindEvents();n=i.content;s=i.type;a=i.scrolling;t.extend(e,{wrap:i.wrap,skin:i.skin,outer:i.outer,inner:i.inner,current:i,previous:o});r=i.href;switch(s){case'inline':case'ajax':case'html':i.selector?n=t('<div>').html(n).find(i.selector):h(n)&&(n.data('fancybox-placeholder')||n.data('fancybox-placeholder',t('<div class="fancybox-placeholder"></div>').insertAfter(n).hide()),n=n.show().detach(),i.wrap.bind('onReset',function(){t(this).find(n).length&&n.hide().replaceAll(n.data('fancybox-placeholder')).data('fancybox-placeholder',!1)}));break;case'image':n=i.tpl.image.replace(/\{href\}/g,r);break;case'swf':n='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+r+'"></param>',l='',t.each(i.swf,function(e,t){n+='<param name="'+e+'" value="'+t+'"></param>';l+=' '+e+'="'+t+'"'}),n+='<embed src="'+r+'" type="application/x-shockwave-flash" width="100%" height="100%"'+l+'></embed></object>'};h(n)&&n.parent().is(i.inner)||i.inner.append(n);e.trigger('beforeShow');i.inner.css('overflow','yes'===a?'scroll':'no'===a?'hidden':a);e._setDimension();e.reposition();e.isOpen=!1;e.coming=null;e.bindEvents();if(!e.isOpened)t('.fancybox-wrap').not(i.wrap).stop(!0).trigger('onReset').remove();else if(o.prevMethod)e.transitions[o.prevMethod]();e.transitions[e.isOpened?i.nextMethod:i.openMethod]();e._preloadImages()}},_setDimension:function(){var l=e.getViewport(),L=0,c=!1,i=!1,c=e.wrap,b=e.skin,r=e.inner,a=e.current,i=a.width,o=a.height,d=a.minWidth,h=a.minHeight,f=a.maxWidth,u=a.maxHeight,H=a.scrolling,S=a.scrollOutside?a.scrollbarWidth:0,g=a.margin,m=n(g[1]+g[3]),k=n(g[0]+g[2]),T,y,O,v,x,C,E,w,W;c.add(b).add(r).width('auto').height('auto').removeClass('fancybox-tmp');g=n(b.outerWidth(!0)-b.width());T=n(b.outerHeight(!0)-b.height());y=m+g;O=k+T;v=p(i)?(l.w-y)*n(i)/100:i;x=p(o)?(l.h-O)*n(o)/100:o;if('iframe'===a.type){if(W=a.content,a.autoHeight&&1===W.data('ready'))try{W[0].contentWindow.document.location&&(r.width(v).height(9999),C=W.contents().find('body'),S&&C.css('overflow-x','hidden'),x=C.outerHeight(!0))}catch(P){}}
else if(a.autoWidth||a.autoHeight)r.addClass('fancybox-tmp'),a.autoWidth||r.width(v),a.autoHeight||r.height(x),a.autoWidth&&(v=r.width()),a.autoHeight&&(x=r.height()),r.removeClass('fancybox-tmp');i=n(v);o=n(x);w=v/x;d=n(p(d)?n(d,'w')-y:d);f=n(p(f)?n(f,'w')-y:f);h=n(p(h)?n(h,'h')-O:h);u=n(p(u)?n(u,'h')-O:u);C=f;E=u;a.fitToView&&(f=Math.min(l.w-y,f),u=Math.min(l.h-O,u));y=l.w-m;k=l.h-k;a.aspectRatio?(i>f&&(i=f,o=n(i/w)),o>u&&(o=u,i=n(o*w)),i<d&&(i=d,o=n(i/w)),o<h&&(o=h,i=n(o*w))):(i=Math.max(d,Math.min(i,f)),a.autoHeight&&'iframe'!==a.type&&(r.width(i),o=r.height()),o=Math.max(h,Math.min(o,u)));if(a.fitToView)if(r.width(i).height(o),c.width(i+g),l=c.width(),m=c.height(),a.aspectRatio)for(;(l>y||m>k)&&i>d&&o>h&&!(19<L++);)o=Math.max(h,Math.min(u,o-10)),i=n(o*w),i<d&&(i=d,o=n(i/w)),i>f&&(i=f,o=n(i/w)),r.width(i).height(o),c.width(i+g),l=c.width(),m=c.height();else i=Math.max(d,Math.min(i,i-(l-y))),o=Math.max(h,Math.min(o,o-(m-k)));S&&'auto'===H&&o<x&&i+g+S<y&&(i+=S);r.width(i).height(o);c.width(i+g);l=c.width();m=c.height();c=(l>y||m>k)&&i>d&&o>h;i=a.aspectRatio?i<C&&o<E&&i<v&&o<x:(i<C||o<E)&&(i<v||o<x);t.extend(a,{dim:{width:s(l),height:s(m)},origWidth:v,origHeight:x,canShrink:c,canExpand:i,wPadding:g,hPadding:T,wrapSpace:m-b.outerHeight(!0),skinSpace:b.height()-o});!W&&a.autoHeight&&o>h&&o<u&&!i&&r.height('auto')},_getPosition:function(t){var n=e.current,o=e.getViewport(),i=n.margin,a=e.wrap.width()+i[1]+i[3],r=e.wrap.height()+i[0]+i[2],i={position:'absolute',top:i[0],left:i[3]};n.autoCenter&&n.fixed&&!t&&r<=o.h&&a<=o.w?i.position='fixed':n.locked||(i.top+=o.y,i.left+=o.x);i.top=s(Math.max(i.top,i.top+(o.h-r)*n.topRatio));i.left=s(Math.max(i.left,i.left+(o.w-a)*n.leftRatio));return i},_afterZoomIn:function(){var i=e.current;i&&((e.isOpen=e.isOpened=!0,e.wrap.css('overflow','visible').addClass('fancybox-opened'),e.update(),(i.closeClick||i.nextClick&&1<e.group.length)&&e.inner.css('cursor','pointer').bind('click.fb',function(n){t(n.target).is('a')||t(n.target).parent().is('a')||(n.preventDefault(),e[i.closeClick?'close':'next']())}),i.closeBtn&&t(i.tpl.closeBtn).appendTo(e.skin).bind('click.fb',function(t){t.preventDefault();e.close()}),i.arrows&&1<e.group.length&&((i.loop||0<i.index)&&t(i.tpl.prev).appendTo(e.outer).bind('click.fb',e.prev),(i.loop||i.index<e.group.length-1)&&t(i.tpl.next).appendTo(e.outer).bind('click.fb',e.next)),e.trigger('afterShow'),i.loop||i.index!==i.group.length-1)?e.opts.autoPlay&&!e.player.isActive&&(e.opts.autoPlay=!1,e.play(!0)):e.play(!1))},_afterZoomOut:function(i){i=i||e.current;t('.fancybox-wrap').trigger('onReset').remove();t.extend(e,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});e.trigger('afterClose',i)}});e.transitions={getOrigPosition:function(){var t=e.current,a=t.element,i=t.orig,n={},r=50,l=50,c=t.hPadding,d=t.wPadding,o=e.getViewport();!i&&t.isDom&&a.is(':visible')&&(i=a.find('img:first'),i.length||(i=a));h(i)?(n=i.offset(),i.is('img')&&(r=i.outerWidth(),l=i.outerHeight())):(n.top=o.y+(o.h-l)*t.topRatio,n.left=o.x+(o.w-r)*t.leftRatio);if('fixed'===e.wrap.css('position')||t.locked)n.top-=o.y,n.left-=o.x;return n={top:s(n.top-c*t.topRatio),left:s(n.left-d*t.leftRatio),width:s(r+d),height:s(l+c)}},step:function(t,i){var r,o,a=i.prop;o=e.current;var l=o.wrapSpace,s=o.skinSpace;if('width'===a||'height'===a)r=i.end===i.start?1:(t-i.start)/(i.end-i.start),e.isClosing&&(r=1-r),o='width'===a?o.wPadding:o.hPadding,o=t-o,e.skin[a](n('width'===a?o:o-l*r)),e.inner[a](n('width'===a?o:o-l*r-s*r))},zoomIn:function(){var i=e.current,n=i.pos,o=i.openEffect,a='elastic'===o,r=t.extend({opacity:1},n);delete r.position;a?(n=this.getOrigPosition(),i.openOpacity&&(n.opacity=0.1)):'fade'===o&&(n.opacity=0.1);e.wrap.css(n).animate(r,{duration:'none'===o?0:i.openSpeed,easing:i.openEasing,step:a?this.step:null,complete:e._afterZoomIn})},zoomOut:function(){var t=e.current,n=t.closeEffect,o='elastic'===n,i={opacity:0.1};o&&(i=this.getOrigPosition(),t.closeOpacity&&(i.opacity=0.1));e.wrap.animate(i,{duration:'none'===n?0:t.closeSpeed,easing:t.closeEasing,step:o?this.step:null,complete:e._afterZoomOut})},changeIn:function(){var o=e.current,l=o.nextEffect,i=o.pos,r={opacity:1},a=e.direction,t;i.opacity=0.1;'elastic'===l&&(t='down'===a||'up'===a?'top':'left','down'===a||'right'===a?(i[t]=s(n(i[t])-200),r[t]='+=200px'):(i[t]=s(n(i[t])+200),r[t]='-=200px'));'none'===l?e._afterZoomIn():e.wrap.css(i).animate(r,{duration:o.nextSpeed,easing:o.nextEasing,complete:e._afterZoomIn})},changeOut:function(){var i=e.previous,o=i.prevEffect,a={opacity:0.1},n=e.direction;'elastic'===o&&(a['down'===n||'up'===n?'top':'left']=('up'===n||'left'===n?'-':'+')+'=200px');i.wrap.animate(a,{duration:'none'===o?0:i.prevSpeed,easing:i.prevEasing,complete:function(){t(this).trigger('onReset').remove()}})}};e.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!l,fixed:!0},overlay:null,fixed:!1,el:t('html'),create:function(i){var n;i=t.extend({},this.defaults,i);this.overlay&&this.close();n=e.coming?e.coming.parent:i.parent;this.overlay=t('<div class="fancybox-overlay"></div>').appendTo(n&&n.lenth?n:'body');this.fixed=!1;i.fixed&&e.defaults.fixed&&(this.overlay.addClass('fancybox-overlay-fixed'),this.fixed=!0)},open:function(i){var n=this;i=t.extend({},this.defaults,i);this.overlay?this.overlay.unbind('.overlay').width('auto').height('auto'):this.create(i);this.fixed||(r.bind('resize.overlay',t.proxy(this.update,this)),this.update());i.closeClick&&this.overlay.bind('click.overlay',function(i){if(t(i.target).hasClass('fancybox-overlay'))return e.isActive?e.close():n.close(),!1});this.overlay.css(i.css).show()},close:function(){r.unbind('resize.overlay');this.el.hasClass('fancybox-lock')&&(t('.fancybox-margin').removeClass('fancybox-margin'),this.el.removeClass('fancybox-lock'),r.scrollTop(this.scrollV).scrollLeft(this.scrollH));t('.fancybox-overlay').remove().hide();t.extend(this,{overlay:null,fixed:!1})},update:function(){var e='100%',t;this.overlay.width(e).height('100%');u?(t=Math.max(o.documentElement.offsetWidth,o.body.offsetWidth),a.width()>t&&(e=a.width())):a.width()>r.width()&&(e=a.width());this.overlay.width(e).height(a.height())},onReady:function(e,i){var n=this.overlay;t('.fancybox-overlay').stop(!0,!0);n||this.create(e);e.locked&&this.fixed&&i.fixed&&(i.locked=this.overlay.append(i.wrap),i.fixed=!1);!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,i){i.locked&&!this.el.hasClass('fancybox-lock')&&(!1!==this.fixPosition&&t('*').filter(function(){return'fixed'===t(this).css('position')&&!t(this).hasClass('fancybox-overlay')&&!t(this).hasClass('fancybox-wrap')}).addClass('fancybox-margin'),this.el.addClass('fancybox-margin'),this.scrollV=r.scrollTop(),this.scrollH=r.scrollLeft(),this.el.addClass('fancybox-lock'),r.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(i){this.overlay&&!e.coming&&this.overlay.fadeOut(i.speedOut,t.proxy(this.close,this))}};e.helpers.title={defaults:{type:'float',position:'bottom'},beforeShow:function(i){var o=e.current,r=o.title,a=i.type;t.isFunction(r)&&(r=r.call(o.element,o));if(c(r)&&''!==t.trim(r)){o=t('<div class="fancybox-title fancybox-title-'+a+'-wrap">'+r+'</div>');switch(a){case'inside':a=e.skin;break;case'outside':a=e.wrap;break;case'over':a=e.inner;break;default:a=e.skin,o.appendTo('body'),u&&o.width(o.width()),o.wrapInner('<span class="child"></span>'),e.current.margin[2]+=Math.abs(n(o.css('margin-bottom')))};o['top'===i.position?'prependTo':'appendTo'](a)}}};t.fn.fancybox=function(i){var o,r=t(this),n=this.selector||'',l=function(a){var l=t(this).blur(),d=o,c,s;a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||l.is('.fancybox-wrap')||(c=i.groupAttr||'data-fancybox-group',s=l.attr(c),s||(c='rel',s=l.get(0)[c]),s&&''!==s&&'nofollow'!==s&&(l=n.length?t(n):r,l=l.filter('['+c+'="'+s+'"]'),d=l.index(this)),i.index=d,!1!==e.open(l,i)&&a.preventDefault())};i=i||{};o=i.index||0;n&&!1!==i.live?a.undelegate(n,'click.fb-start').delegate(n+':not(\'.fancybox-item, .fancybox-nav\')','click.fb-start',l):r.unbind('click.fb-start').bind('click.fb-start',l);this.filter('[data-fancybox-start=1]').trigger('click');return this};a.ready(function(){var n,o;t.scrollbarWidth===d&&(t.scrollbarWidth=function(){var i=t('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),e=i.children(),e=e.innerWidth()-e.height(99).innerWidth();i.remove();return e});t.support.fixedPosition===d&&(t.support.fixedPosition=function(){var e=t('<div style="position:fixed;top:20px;"></div>').appendTo('body'),i=20===e[0].offsetTop||15===e[0].offsetTop;e.remove();return i}());t.extend(e.defaults,{scrollbarWidth:t.scrollbarWidth(),fixed:t.support.fixedPosition,parent:t('body')});n=t(i).width();g.addClass('fancybox-lock-test');o=t(i).width();g.removeClass('fancybox-lock-test');t('<style type=\'text/css\'>.fancybox-margin{margin-right:'+(o-n)+'px;}</style>').appendTo('head')})})(window,document,jQuery);
!function(t){var i=t.fancybox;i.helpers.thumbs={defaults:{width:50,height:50,position:'bottom',source:function(i){var h;return i.element&&(h=t(i.element).find('img').attr('src')),!h&&'image'===i.type&&i.href&&(h=i.href),h}},wrap:null,list:null,width:0,init:function(i,h){var n,r=this,e=i.width,s=i.height,a=i.source;n='';for(var o=0;o<h.group.length;o++)n+='<li><a style="width:'+e+'px;height:'+s+'px;" href="javascript:jQuery.fancybox.jumpto('+o+');"></a></li>';this.wrap=t('<div id="fancybox-thumbs"></div>').addClass(i.position).appendTo('body'),this.list=t('<ul>'+n+'</ul>').appendTo(this.wrap),t.each(h.group,function(i){var o=h.group[i],n=a(o);n&&t('<img />').load(function(){var n,a,l,h=this.width,o=this.height;r.list&&h&&o&&(n=h/e,a=o/s,l=r.list.children().eq(i).find('a'),n>=1&&a>=1&&(n>a?(h=Math.floor(h/a),o=s):(h=e,o=Math.floor(o/n))),t(this).css({width:h,height:o,top:Math.floor(s/2-o/2),left:Math.floor(e/2-h/2)}),l.width(e).height(s),t(this).hide().appendTo(l).fadeIn(300))}).attr('src',n).attr('title',o.title)}),this.width=this.list.children().eq(0).outerWidth(!0),this.list.width(this.width*(h.group.length+1)).css('left',Math.floor(.5*t(window).width()-(h.index*this.width+.5*this.width)))},beforeLoad:function(t,i){return i.group.length<2?void(i.helpers.thumbs=!1):void(i.margin['top'===t.position?0:2]+=t.height+15)},afterShow:function(t,i){this.list?this.onUpdate(t,i):this.init(t,i),this.list.children().removeClass('active').eq(i.index).addClass('active')},onUpdate:function(i,h){this.list&&this.list.stop(!0).animate({left:Math.floor(.5*t(window).width()-(h.index*this.width+.5*this.width))},150)},beforeClose:function(){this.wrap&&this.wrap.remove(),this.wrap=null,this.list=null,this.width=0}}}(jQuery);
!function(e){'use strict';var a=e.fancybox,t=function(a,o,t){return t=t||'','object'===e.type(t)&&(t=e.param(t,!0)),e.each(o,function(e,t){a=a.replace('$'+e,t||'')}),t.length&&(a+=(a.indexOf('?')>0?'&':'?')+t),a};a.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:'opaque',enablejsapi:1,ps:'docs',controls:1},type:'iframe',url:'//www.youtube.com/embed/$3'},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:'iframe',url:'//player.vimeo.com/video/$1'},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:'yes'},type:'swf',url:function(a,t,o){return o.swf.flashVars='playerVars='+e.param(t,!0),'//www.metacafe.com/fplayer/'+a[1]+'/.swf'}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:'swf',url:'//www.dailymotion.com/swf/video/$1'},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:'iframe',url:'//www.twitvid.com/embed.php?guid=$1'},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:'image',url:'//twitpic.com/show/full/$1/'},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:'image',url:'//$1/p/$2/media/?size=l'},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:'iframe',url:function(e){return'//maps.google.'+e[1]+'/'+e[3]+e[4]+'&output='+(e[4].indexOf('layer=c')>0?'svembed':'embed')}}},beforeLoad:function(a,o){var r,i,m,l,c=o.href||'',p=!1;for(r in a)if(a.hasOwnProperty(r)&&(i=a[r],m=c.match(i.matcher))){p=i.type,l=e.extend(!0,{},i.params,o[r]||(e.isPlainObject(a[r])?a[r].params:null)),c='function'===e.type(i.url)?i.url.call(this,m,l,o):t(i.url,m,l);break};p&&(o.href=c,o.type=p,o.autoHeight=!1)}}}(jQuery);