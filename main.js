let sound = document.getElementById("sound");
let currentScreen = 0;
let videoElement = document.querySelectorAll('.screen')

sound.addEventListener("click", function(){
    if(sound.getAttribute("src") == "assests/mute.png") {
        sound.setAttribute("src", "assests/sound.png")
        

    } else {
        sound.setAttribute("src", "assests/mute.png")
    };
    
});
const MainElement = document.querySelector('.Main');

MainElement.addEventListener('click', () => {
    console.log(videoElement)
    currentScreen++;
    
    if(currentScreen >= videoElement.length){
        currentScreen = 0;
        videoElement.forEach((video) => {
            video.classList.remove('active');
            video.classList.add('hidden');
    });
    videoElement[0].classList.remove('hidden');
    videoElement[0].classList.add('active');
    return;
} 

    let active = false
    videoElement.forEach((video) => {
        if(video.classList.contains('active')){
            active = true
            video.classList.remove('active');
            video.classList.add('hidden');
            video.muted = true;
            return;
        }

        if (active) {
            video.classList.remove('hidden');
            video.classList.add('active');
            active = false
            video.muted = false;
            video.play();
        }
    });
});

