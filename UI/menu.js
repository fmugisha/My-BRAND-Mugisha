window.onload = function () {
	const menu_btn = document.querySelector('.burgerMenu');
	const mobile_menu = document.querySelector('.navbar');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}