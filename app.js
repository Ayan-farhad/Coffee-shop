const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

//Show menu to small screen 
menuBtn.addEventListener('click', () => {
    header.classList.toggle("show-mobile-menu");
});

//Close menu to small screen 
closeBtn.addEventListener('click', () => {
    const event = new Event('click');
    menuBtn.dispatchEvent(event);
});