function createCarousel() {
    let carousel = document.getElementById("carousel");
    let imagesList = document.getElementById("imagesList");
    let prevImage = document.getElementById("prevImage");
    let nextImage = document.getElementById("nextImage");
    let currentImage = 0;
    let carouselWidth = carousel.offsetWidth;

    let items = imagesList.querySelectorAll("li").length - 1;

    function setLeftPosition(currentImage) {
        imagesList.style.left = "-" + currentImage * carouselWidth + "px";
    }

    window.addEventListener('resize', function () {
        carouselWidth = carousel.offsetWidth;
        setLeftPosition(currentImage);
    });

    function goPrev() {
        if(currentImage > 0) {
          currentImage--;
          setLeftPosition(currentImage);
        }
        else {
          currentImage = items - 1;
          setLeftPosition(currentImage);
        }
      };
    
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
    prevImage.addEventListener("click", goPrev);
    nextImage.addEventListener("click", goNext);
};


window.onload = createCarousel;
