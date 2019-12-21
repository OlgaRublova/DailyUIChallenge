let img_container = document.querySelector(".img__holder");
let imgBig = img_container.querySelector("img");

let img_nav = document.querySelector(".img__nav");
let img = img_nav.querySelectorAll("img");


function changePicture(image) {
    imgBig.src = image.src;
    console.log(this)
}

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 1,
        time: 400
    });
});