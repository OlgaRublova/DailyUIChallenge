var container = document.querySelector(".glider");

function change_img(img) {
    container.src = img.src;

}

window.addEventListener('load', function () {

    new Glider(document.querySelector('.glider'), {
        slidesToScroll: 4,
        slidesToShow: 5,
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
});