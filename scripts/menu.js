var phoneMenuOn = false;
function toggleHeaderSubMenu(id) {
    let subMenu = document.getElementById("headerSubMenu");
    let button = document.getElementById(id);
    phoneMenuOn = !phoneMenuOn;
    if (phoneMenuOn) {
        subMenu.classList.add("headerSubMenuOn");
        subMenu.classList.remove("headerSubMenuOff");
        button.textContent = "x"
    }
    else {
        subMenu.classList.add("headerSubMenuOff");
        subMenu.classList.remove("headerSubMenuOn");
        button.textContent = "?";
    }
}