/*
Student Name: Nathan Schneider
File Name: script.js
Today's Date: 04/26/2021
*/

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}
