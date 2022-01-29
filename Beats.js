console.log('Welcome to beats');

// Initialization of variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let musicBar = document.getElementById('musicBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Desires", filePath: "1.mp3", coverPath: "hiddengems.jpg" },
    { songName: "Spaceship", filePath: "2.mp3", coverPath: "hiddengems.jpg" },
    { songName: "Tere Te", filePath: "3.mp3", coverPath: "hiddengems.jpg" },
    { songName: "Majhe Aale", filePath: "4.mp3", coverPath: "hiddengems.jpg" },
    { songName: "Excuses", filePath: "5.mp3", coverPath: "https://sirfjatt.com/wp-content/media/covers/1164313.jpg.jpg" },
    { songName: "Insane", filePath: "6.mp3", coverPath: "https://i.scdn.co/image/ab67616d0000b273f26219080879cd317b98ece8.jpg" },
    { songName: "Brown Munde", filePath: "7.mp3", coverPath: "https://britasia.tv/wp-content/uploads/2020/09/Eh09An1VkAEohgB-768x768.jpg" },
    { songName: "Sadda Pyaar", filePath: "8.mp3", coverPath: "https://linkstorage.linkfire.com/medialinks/images/9e382895-960e-459e-a780-e9f5beafe078/artwork-440x440.jpg" },
    { songName: "Ma Belle", filePath: "9.mp3", coverPath: "https://cover.riskyjattnew.com/498163/Ma-Belle.jpg" },
]

// Handle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//Listen to Events 
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    musicBar.value = progress;
})
musicBar.addEventListener('change', () => {
    audioElement.currentTime = musicBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3`;
        songInfo.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    songInfo.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    songInfo.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})








// audioElement.play();