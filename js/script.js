const buttons = document.querySelectorAll('.tabs__button');
const tabsItems = document.querySelectorAll(".tabs_choice-item");

buttons.forEach(function (item) {
    item.addEventListener('click', function () {
        let currentButton = item;

        let tabId = currentButton.getAttribute("data-tab");
        let showTab = document.querySelector(tabId);

        buttons.forEach(function (item) {
            item.classList.remove('tab_active');
        });
        tabsItems.forEach(function (item) {
            item.classList.remove('tab_active');
        });
        currentButton.classList.add('tab_active');
        showTab.classList.add('tab_active');
    });
});


const buttonHamburger = document.querySelectorAll('.button-burger');
const headerMenuDrop = document.querySelectorAll('.navigation-menu-dropdown');

buttonHamburger.forEach(button => button.addEventListener('click', function () {
    headerMenuDrop.classList.toggle('navigation-menu-dropdown--open')
}));



const swiper = new Swiper('.slider', {

    direction: 'horizontal',



    clickAble: true,
    pagination: {
      el: '.swiper-pagination',
        clickable: true
    },
    navigation:{
        nextEl:'.slider__right-arrow',
        prevEl:'.slider__left-arrow',
        disabledClass:'arrow_active'
    }
});

console.log(swiper);




