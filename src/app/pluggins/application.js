(function () {
	if ((/bot|google|yandex|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|spider|robot|crawling|facebook/i.test(navigator.userAgent)) === false && typeof (sessionStorage) != 'undefined' && sessionStorage.getItem('visited') !== 'y' && document.visibilityState) {
		var style = document.createElement('style'); style.type = 'text/css'; style.innerHTML = '@media screen and (min-width: 980px) {.t-records {opacity: 0;}.t-records_animated {-webkit-transition: opacity ease-in-out .2s;-moz-transition: opacity ease-in-out .2s;-o-transition: opacity ease-in-out .2s;transition: opacity ease-in-out .2s;}.t-records.t-records_visible {opacity: 1;}}'; document.getElementsByTagName('head')[0].appendChild(style); function t_setvisRecs() { var alr = document.querySelectorAll('.t-records'); Array.prototype.forEach.call(alr, function (el) { el.classList.add("t-records_animated"); }); setTimeout(function () { Array.prototype.forEach.call(alr, function (el) { el.classList.add("t-records_visible"); }); sessionStorage.setItem("visited", "y"); }, 400); }
		document.addEventListener('DOMContentLoaded', t_setvisRecs);
	}
})();

(function () {
	function t_onReady(func) {
		if (document.readyState != 'loading') {
			func();
		} else {
			document.addEventListener('DOMContentLoaded', func);
		}
	}
})();

function t_onFuncLoad(funcName, okFunc, time) { if (typeof window[funcName] === 'function') { okFunc(); } else { setTimeout(function () { t_onFuncLoad(funcName, okFunc, time); }, (time || 100)); } } function t_throttle(fn, threshhold, scope) { return function () { fn.apply(scope || this, arguments); }; } function t396_initialScale(t) { t = document.getElementById("rec" + t); if (t) { t = t.querySelector(".t396__artboard"); if (t) { var e, r = document.documentElement.clientWidth, a = []; if (i = t.getAttribute("data-artboard-screens")) for (var i = i.split(","), l = 0; l < i.length; l++)a[l] = parseInt(i[l], 10); else a = [320, 480, 640, 960, 1200]; for (l = 0; l < a.length; l++) { var n = a[l]; n <= r && (e = n) } var o = "edit" === window.allrecords.getAttribute("data-tilda-mode"), d = "center" === t396_getFieldValue(t, "valign", e, a), c = "grid" === t396_getFieldValue(t, "upscale", e, a), s = t396_getFieldValue(t, "height_vh", e, a), u = t396_getFieldValue(t, "height", e, a), g = !!window.opr && !!window.opr.addons || !!window.opera || -1 !== navigator.userAgent.indexOf(" OPR/"); if (!o && d && !c && !s && u && !g) { for (var _ = parseFloat((r / e).toFixed(3)), f = [t, t.querySelector(".t396__carrier"), t.querySelector(".t396__filter")], l = 0; l < f.length; l++)f[l].style.height = Math.floor(parseInt(u, 10) * _) + "px"; t396_scaleInitial__getElementsToScale(t).forEach(function (t) { t.style.zoom = _ }) } } } } function t396_scaleInitial__getElementsToScale(t) { return t ? Array.prototype.slice.call(t.children).filter(function (t) { return t && (t.classList.contains("t396__elem") || t.classList.contains("t396__group")) }) : [] } function t396_getFieldValue(t, e, r, a) { var i = a[a.length - 1], l = r === i ? t.getAttribute("data-artboard-" + e) : t.getAttribute("data-artboard-" + e + "-res-" + r); if (!l) for (var n = 0; n < a.length; n++) { var o = a[n]; if (!(o <= r) && (l = o === i ? t.getAttribute("data-artboard-" + e) : t.getAttribute("data-artboard-" + e + "-res-" + o))) break } return l }

if (typeof window !== "undefined") {
	window.dataLayer = window.dataLayer || [];
}

if (typeof window !== "undefined") {
	window.addEventListener('resize', t_throttle(function () { t_onFuncLoad('t_menu__setBGcolor', function () { t_menu__setBGcolor('896654647', '.t228'); }); })); t_onReady(function () { t_onFuncLoad('t_menu__highlightActiveLinks', function () { t_menu__highlightActiveLinks('.t228__list_item a'); }); t_onFuncLoad('t_menu__findAnchorLinks', function () { t_menu__findAnchorLinks('896654647', '.t228__list_item a'); }); t_onFuncLoad('t228__init', function () { t228__init('896654647'); }); t_onFuncLoad('t_menu__setBGcolor', function () { t_menu__setBGcolor('896654647', '.t228'); }); t_onFuncLoad('t_menu__interactFromKeyboard', function () { t_menu__interactFromKeyboard('896654647'); }); t_onFuncLoad('t_menu__createMobileMenu', function () { t_menu__createMobileMenu('896654647', '.t228'); }); });
}

function t_menuburger_init(recid) {
	var rec = document.querySelector('#rec' + recid); if (!rec) return; var burger = rec.querySelector('.t-menuburger'); if (!burger) return; var isSecondStyle = burger.classList.contains('t-menuburger_second'); if (isSecondStyle && !window.isMobile && !('ontouchend' in document)) { burger.addEventListener('mouseenter', function () { if (burger.classList.contains('t-menuburger-opened')) return; burger.classList.remove('t-menuburger-unhovered'); burger.classList.add('t-menuburger-hovered'); }); burger.addEventListener('mouseleave', function () { if (burger.classList.contains('t-menuburger-opened')) return; burger.classList.remove('t-menuburger-hovered'); burger.classList.add('t-menuburger-unhovered'); setTimeout(function () { burger.classList.remove('t-menuburger-unhovered'); }, 300); }); }
	burger.addEventListener('click', function () { if (!burger.closest('.tmenu-mobile') && !burger.closest('.t450__burger_container') && !burger.closest('.t466__container') && !burger.closest('.t204__burger') && !burger.closest('.t199__js__menu-toggler')) { burger.classList.toggle('t-menuburger-opened'); burger.classList.remove('t-menuburger-unhovered'); } }); var menu = rec.querySelector('[data-menu="yes"]'); if (!menu) return; var menuLinks = menu.querySelectorAll('.t-menu__link-item'); var submenuClassList = ['t978__menu-link_hook', 't978__tm-link', 't966__tm-link', 't794__tm-link', 't-menusub__target-link']; Array.prototype.forEach.call(menuLinks, function (link) { link.addEventListener('click', function () { var isSubmenuHook = submenuClassList.some(function (submenuClass) { return link.classList.contains(submenuClass); }); if (isSubmenuHook) return; burger.classList.remove('t-menuburger-opened'); }); }); menu.addEventListener('clickedAnchorInTooltipMenu', function () { burger.classList.remove('t-menuburger-opened'); });
}
if (typeof window !== "undefined") {
	window.onload = function () {
		t_onReady(function () { t_onFuncLoad('t_menuburger_init', function () { t_menuburger_init('896654647'); }); });

	}
}

(function () {
	function t_onReady(func) { t_onFuncLoad('t396_init', function () { t396_init('896654650'); }) }
})();

(function () {
	function t_onReady(func) { t_onFuncLoad('t__paintIcons', function () { t__paintIcons('896716438', '.t508__img, .t508__bgimg'); })};
})();

(function () {
	function t_onReady(func) { t_onFuncLoad('t843_init', function () { t843_init('896654656'); }); }
})();

(function () {
	function t_onReady(func) { t_onFuncLoad('t858_init', function () { t858_init('896654659'); }); }
})();	

(function () {
	function t_onReady(func) {t_onFuncLoad('t396_init', function () { t396_init('896654665'); }); }
}
)();