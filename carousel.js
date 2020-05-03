function createCarousel() {
    let carousel = document.getElementById("carousel");
    let imagesList = document.getElementById("imagesList");
    let prevImage = document.getElementById("prevImage");
    let nextImage = document.getElementById("nextImage");
    let playPauseButton = document.getElementById("play");

    let play = true;
    let currentImage = 0;
    let carouselWidth = carousel.offsetWidth;

    let items = imagesList.querySelectorAll("li").length - 1;

    let isMoving = false;
    imagesList.addEventListener("transitionstart", function() {isMoving = true;} );
    imagesList.addEventListener("transitionend", function() {isMoving = false;} );

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
    function changeImage(playPauseButton){
        let v = playPauseButton.getAttribute("src");
     //   if(v == "image/carousel/play-button.png"){v = "image/carousel/pause-button.png"}
    //    else{v = "image/carousel/play-button.png"};
        alert("pause")
         playPauseButton.setAttribute("src", v);	
     }

    function playPause() {
        // does not play if carousel is already manually being moved
        if (play && !isMoving) { goNext() }
    }

    function playPauseToggle() {
       
        play = !play;
        changeImage()
    }

    setInterval(playPause, 2000);
    prevImage.addEventListener("click", goPrev);
    document.addEventListener("keyup", goKey);
    nextImage.addEventListener("click", goNext);
    playPauseButton.addEventListener("click", playPauseToggle);
};



//          Survey


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

function preventReloadOnSubmit(){
    var formSurvey = document.getElementById("formSurvey");
    formSurvey.addEventListener("submit", function(e) {
        e.preventDefault();
    });
}

window.onload = function(){
    preventReloadOnSubmit();
    createCarousel();
}
