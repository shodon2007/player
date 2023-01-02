const play = document.querySelector('.player__play');
const prew = document.querySelector('.player__prew');
const next = document.querySelector('.player__next');
const audio = document.querySelector('.player__audio');
const progress = document.querySelector('.player__progress');

const songList = ['random test music', 'Free Test File', 'Free Test File'];

let thisSong = 0;

function loadSong(song) {
    console.log(`audio/${song}.mp3`);
    audio.src = `audio/${song}.mp3`;
}

loadSong(songList[thisSong]);

function playSong() {
    play.innerHTML = '<img src="img/pause.svg">';
    audio.play();
    play.classList.remove('pause');
}
function pauseSong() {
    play.innerHTML = '<img src="img/play.svg">';
    audio.pause();
    play.classList.add('pause');
}

play.addEventListener('click', () => {
    if (!play.classList.contains('pause')) {
        pauseSong();
    } else {
        playSong();
    }
})


function nextSong() {
    thisSong++;
    loadSong(songList[thisSong]);
    if (!play.classList.contains('pause')) {
        pauseSong();
    } else {
        playSong();
    }
}

next.addEventListener('click', () => {
    nextSong();
})