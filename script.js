const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// document.addEventListener('mousemove', (e) => {
//     console.log(e);
// });

// svgObject.addEventListener("load", () => {
//     const svgDoc = svgObject.contentDocument;
//     const paths = svgDoc.querySelectorAll("path");

//     paths.forEach(path => {
//         path.addEventListener("mouseenter", () => {
//             path.style.stroke = "gold";
//         });

//         path.addEventListener("mouseleave", () => {
//             path.style.stroke = "white";
//         });
//     });
// });