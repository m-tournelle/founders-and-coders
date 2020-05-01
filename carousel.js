function createCarousel() {
    let carousel = document.getElementById("carousel");
    let imagesList = document.getElementById("imagesList");
    let currentImage = 0;
    let carouselWidth = carousel.offsetWidth;

    let items = imagesList.querySelectorAll("li").length - 1;

    function setLeftPosition(currentImage) {
        imagesList.style.left = "-" + currentImage * carouselWidth + "px";
    }

    function goNext() {
        if (currentImage < items) {
            currentImage++;
            setLeftPosition(currentImage);
        } else {
            currentImage = 0
            setLeftPosition(currentImage);
        }
    };

    setInterval(goNext, 4000);
};


window.onload = createCarousel;
