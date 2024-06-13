var phoneMenuOn = false;
function toggleHeaderSubMenu(button) {
    let subMenu = document.getElementById("headerSubMenu");
    phoneMenuOn = !phoneMenuOn;
    if (phoneMenuOn) {
        subMenu.classList.add("headerSubMenuOn");
        subMenu.classList.remove("headerSubMenuOff");
        button.classList.toggle("buttonOn");
    }
    else {
        subMenu.classList.add("headerSubMenuOff");
        subMenu.classList.remove("headerSubMenuOn");
        button.classList.toggle("buttonOn");
    }
}