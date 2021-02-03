// main.js
// Add event when the textual indicator of sound level change
document.getElementById("volume-number").addEventListener("change", changeSlide);
document.getElementById("volume-slider").addEventListener("change", changeNumber);

function changeSlide() {
    var numInput = document.getElementById("volume-number");
    var slideInput = document.getElementById("volume-slider");
    var audio = document.getElementById("horn-sound");

    audio.volume = parseInt(numInput.value)/100;
    // volValue.setAttribute("value", volValue.value);
    // document.getElementById("volume-slider").setAttribute("value",parseInt(volValue.value));
    document.getElementById("volume-slider").value = numInput.value;
    changeIcon(numInput.value);
}

function changeNumber() {
    var numInput = document.getElementById("volume-number");
    var slideInput = document.getElementById("volume-slider");
    var audio = document.getElementById("horn-sound");

    audio.volume = parseInt(slideInput.value)/100;
    // volValueSli.setAttribute("value", volValueSli.value);
    // document.getElementById("volume-number").setAttribute("value",parseInt(volValueSli.value));
    numInput.value = slideInput.value;
    changeIcon(slideInput.value);
}

// Change the volume icon
function changeIcon(volValue) {
    var volIcon = document.getElementById("volume-image");
    var button = document.getElementById("honk-btn");
    if (volValue == 0) {
        volIcon.setAttribute("src","./assets/media/icons/volume-level-0.svg");
        button.disabled = true;
    }
    else {
        button.disabled = false;
        if (volValue <= 33)
            volIcon.setAttribute("src","./assets/media/icons/volume-level-1.svg");
        else if (volValue <= 66)
            volIcon.setAttribute("src","./assets/media/icons/volume-level-2.svg");
        else
            volIcon.setAttribute("src","./assets/media/icons/volume-level-3.svg");
    }
}

// Add event when the visual controller for sound level change
document.getElementById("radio-air-horn").addEventListener("change", function() {
    var audio = document.getElementById("horn-sound");
    audio.setAttribute("src", "./assets/media/audio/air-horn.mp3");
    var img = document.getElementById("sound-image");
    img.setAttribute("src", "./assets/media/images/air-horn.svg");
    img.setAttribute("alt", "Air Horn");
});

document.getElementById("radio-car-horn").addEventListener("change", function() {
    var audio = document.getElementById("horn-sound");
    audio.setAttribute("src", "./assets/media/audio/car-horn.mp3");
    var img = document.getElementById("sound-image");
    img.setAttribute("src", "./assets/media/images/car.svg");
    img.setAttribute("alt", "Car Horn");
});

document.getElementById("radio-party-horn").addEventListener("change", function() {
    var audio = document.getElementById("horn-sound");
    audio.setAttribute("src", "./assets/media/audio/party-horn.mp3");
    var img = document.getElementById("sound-image");
    img.setAttribute("src", "./assets/media/images/party-horn.svg");
    img.setAttribute("alt", "Party Horn");
});

// Click button playing sound
document.getElementById("honk-btn").addEventListener("click", playSound);
function playSound(event) {
    event.preventDefault();
    var audio = document.getElementById("horn-sound");
    audio.play();
}
// TODO
