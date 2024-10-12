function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "") {
        navbar.className = "open";
    } else {
        navbar.className = "";
    }
}