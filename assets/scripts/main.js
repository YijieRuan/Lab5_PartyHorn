// main.js

// TODO
// Yijie Ruan
// A15857392

var audio = document.getElementById("horn-sound");     //the audio
var honkButton = document.getElementById("honk-btn");    //the honk button that clicks

//function that resets the image of the volume icon while changing the volume
function reset(){
    var volumeIcon = document.getElementById('volume-image');
    if (audio.volume >= .67){
        volumeIcon.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(audio.volume >=.34){
        volumeIcon.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(audio.volume >= 0.01 ){
        volumeIcon.src = "./assets/media/icons/volume-level-1.svg";
    }
    else{
        volumeIcon.src = "./assets/media/icons/volume-level-0.svg";
    }
}

//volume changes while change the input value
var volumeNumber = document.getElementById("volume-number");
volumeNumber.addEventListener("change", function(){
    audio.volume = volumeNumber.value / 100;     // assign the volume of audio
    volumeSlider.value = volumeNumber.value;   //make sure that slider part and input part are the same
    reset();
    if (audio.volume == 0) {
        honkButton.disabled = true;
    } else {
        honkButton.disabled = false;
    }
});

//volume changes while moving the slider
var volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener("change", function(){
    audio.volume = volumeSlider.value / 100;
    volumeNumber.value = volumeSlider.value;    //make sure that slider part and input part are the same
    reset();    //change the image
    if (audio.volume == 0) {
        honkButton.disabled = true;
    } else {
        honkButton.disabled = false;
    }
});

//changes the image and the sound audio by selection
var audioSelection = document.getElementById("audio-selection");
audioSelection.addEventListener("change", function(){
    if(document.getElementById('radio-car-horn').checked){
        audio.src = "./assets/media/audio/car-horn.mp3";
        document.getElementById('sound-image').src = "./assets/media/images/car.svg";
    }
    else if(document.getElementById('radio-air-horn').checked){
        audio.src = "./assets/media/audio/air-horn.mp3";
        document.getElementById('sound-image').src = "./assets/media/images/air-horn.svg";
    }
    else if(document.getElementById('radio-party-horn').checked){
        audio.src = "./assets/media/audio/party-horn.mp3";
        document.getElementById('sound-image').src = "./assets/media/images/party-horn.svg";
    }
})

//click
honkButton.onclick = function(){
    audio.play();
    return false;
}

// honkButton.addEventListener("click", function(e){
//     e.preventDefault();
//     audio.play();
// })
