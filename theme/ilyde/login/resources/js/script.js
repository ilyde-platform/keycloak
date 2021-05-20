window.addEventListener('load', (event) => {
    var bg = document.body;
    var images = [
     "bg-login-1",
     "bg-login-2",
     "bg-login-3",
     "bg-login-4",
    ];
    var image = images[Math.floor(Math.random() * images.length)];
    bg.classList.add(image);
    // add css classes
    // first child class login-pf-page 
    bg.firstElementChild.classList.add("login-pf-page");
    // children of first child
    var children = bg.firstElementChild.children;
    children[1].classList.add("card-pf");
    document.getElementById("kc-header").classList.add("login-pf-page-header");
    document.getElementsByTagName("header")[0].classList.add("login-pf-header");
    document.getElementById("kc-form-options").parentElement.classList.add("login-pf-settings");
});