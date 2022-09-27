$(function () {

	$('.header-blok__header').click(function (e) {

		if ($(e.target.closest('div')).hasClass('header__burger')) {
			$('.header__burger, .header__menu').toggleClass('active');
			$('body').toggleClass('lock');
			return
		};

		if ($(e.target.closest('a')).hasClass('header__link')) {
			$('.header__burger, .header__menu').removeClass('active');
			$('body').removeClass('lock');
			return
		};
	})
});