function createCarousel() {
    let carousel = document.getElementById("carousel");
    let imagesList = document.getElementById("imagesList");
    let prevImage = document.getElementById("prevImage");
    let nextImage = document.getElementById("nextImage");
    let playPauseButton = document.getElementById("playPause");
    let play = true;
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
        if (currentImage > 0) {
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

    function goKey() {
        if (event.keyCode === 37) {
            goPrev()
        }
        else if (event.keyCode === 39) {
            goNext()
        }
        else if (event.keyCode === 32) {
            playPauseToggle()
        }
    }

    function playPause() {
        if (play) { goNext() }
    }
    function playPauseToggle() {
        play = !play;
    }

    setInterval(playPause, 4000);
    prevImage.addEventListener("click", goPrev);
    document.addEventListener("keyup", goKey);
    nextImage.addEventListener("click", goNext);
    playPauseButton.addEventListener("click", playPauseToggle);
};

function submitSurvey(){
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");
    let p5 = document.getElementById("p5");

    function check() {
        if(p1.checked && p2.checked && p3.checked && p4.checked && p5.checked){alert("I am what you are looking for !")}
        else{
            alert("We have nobody like this in our database, please try again")
};
    }

    check()
}

window.onload = createCarousel;
