'use strict';

let main_menu_button = document.querySelector('.main_menu_button');
let header_menu = document.querySelector('.header_menu');
let menuClose = document.querySelector('.menuClose');

function toggleMenu() {
    header_menu.classList.toggle('hidden');
}

main_menu_button.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);