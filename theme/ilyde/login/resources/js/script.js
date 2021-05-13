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
});