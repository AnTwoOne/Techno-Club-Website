/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.scrollY;
window.onscroll = function() {
let currentScrollPos = window.scrollY;
if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-row").style.top = "0";
} else {
    document.getElementById("header-row").style.top = "-200px";
}
prevScrollpos = currentScrollPos;
} 