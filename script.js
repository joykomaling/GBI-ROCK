const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide')
})

const data = [
    {
        image: "link",
        text: "lorem ipsum"
    },
    {
        image: "link",
        text: "lorem ipsum"
    },
    {
        image: "link",
        text: "lorem ipsum"
    }
]