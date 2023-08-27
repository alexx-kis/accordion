'use strict';

/*------------------------------ ACC 1 ------------------------------*/

; (function () {
	let sections = document.querySelectorAll('.acc1__section');
	let buttons = document.querySelectorAll('.acc1__button');

	for (let i = 0; i < sections.length; i++) {
		sections[i].addEventListener('click', function () {
			this.classList.toggle('active');
			buttons[i].classList.toggle('acc1__button--active');
			
			let text = this.nextElementSibling;
			if (text.style.maxHeight) {
				text.style.maxHeight = null;
			} else {
				text.style.maxHeight = text.scrollHeight + "px";
			}
		});
	}
})();

/*------------------------------ ACC 2 ------------------------------*/

; (function () {
	let tabs = document.querySelectorAll('.acc2__tab');
	let sections = document.querySelectorAll('.acc2__section');



	for (let i = 0; i < tabs.length; i++) {
		sections[i].addEventListener('click', function () {
			let open = document.querySelector('.acc2__tab--active');
			if (tabs[i].classList.contains('acc2__tab--active')) {
				tabs[i].classList.remove('acc2__tab--active');

			} else {
				tabs[i].classList.add('acc2__tab--active');
				if (open) {
					open.classList.remove('acc2__tab--active');

				}
			}
		});
	}
})();


/*------------------------------ ACC 3 ------------------------------*/

; (function () {
	let tabs = document.querySelectorAll('.acc3__tab'); //вкладки
	let sections = document.querySelectorAll('.acc3__section'); // ссылки внутри вкладок
	let contents = document.querySelectorAll('.acc3__content'); //раскрывающиеся контенты внтури вкладок


	for (let i = 0; i < contents.length; i++) {
		sections[i].addEventListener('click', function () {
			let active = document.querySelector('.acc3__content--active'); //поиск открытого контента
			let open = document.querySelector('.acc3__tab--open'); //поиск открытой вкладки

			//если есть активный контент и его высота не равна 0
			if (contents[i].classList.contains('acc3__content--active') && contents[i].style.maxHeight != null) {
				contents[i].classList.remove('acc3__content--active'); //удалить пустой класс активности у контента
				tabs[i].classList.remove('acc3__tab--open'); //удалить класс активности у вкладки (плюсик)
				contents[i].style.maxHeight = null; //закрыть контент

			} else {
				contents[i].classList.add('acc3__content--active'); //добавить класс контенту
				tabs[i].classList.add('acc3__tab--open'); //добавить класс активности вкладке
				contents[i].style.maxHeight = contents[i].scrollHeight + "px"; //открыть контент
				if (active) { //если есть открытые контенты на странице
					active.classList.remove('acc3__content--active'); //удалить класс у контента
					open.classList.remove('acc3__tab--open'); //удалить класс у открытой вкладки
					active.style.maxHeight = null; //закрыть контент
				}
			}
		});
	}

})();