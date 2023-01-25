const play = document.querySelector('.player__play');
const prew = document.querySelector('.player__prew');
const next = document.querySelector('.player__next');
const audio = document.querySelector('.player__audio');
const progress = document.querySelector('.player__progress');
const domSongList = document.querySelector('.player__items')
const volume = document.querySelector('.volume__input');

const songList = [
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
    'random test music',
];

let thisSong = 0;

songList.forEach((el, index) => {
    const testAudio = new Audio();
    testAudio.src = `audio/${el}.mp3`;
    testAudio.onloadeddata = () => {
        let min = Math.floor(testAudio.duration / 60);
        let sec = Math.floor(testAudio.duration % 60);
        if (min < 10) {
            min = `0${min}`;
        }
        if (sec < 10) {
            sec = `0${sec}`;
        }
        document.querySelector(`.music${index}`).querySelector('.item__time').innerHTML = min + ":" + sec;
    }
    domSongList.innerHTML += ` 
    <div onclick="itemClick(${index})" class="player__item music${index} ${index == thisSong ? 'played' : false}">
        <div class="item__left">
            <div class="play__name">
                <div class="item__plays">
                    <svg class="item__play" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M37 18.5C37 23.4065 35.0509 28.1121 31.5815 31.5815C28.1121 35.0509 23.4065 37 18.5 37C13.5935 37 8.88795 35.0509 5.41852 31.5815C1.9491 28.1121 0 23.4065 0 18.5C0 13.5935 1.9491 8.88795 5.41852 5.41852C8.88795 1.9491 13.5935 0 18.5 0C23.4065 0 28.1121 1.9491 31.5815 5.41852C35.0509 8.88795 37 13.5935 37 18.5ZM15.7019 11.7776C15.529 11.6545 15.3255 11.5813 15.1139 11.5662C14.9022 11.551 14.6904 11.5944 14.5017 11.6916C14.313 11.7888 14.1548 11.9361 14.0442 12.1172C13.9337 12.2984 13.8751 12.5065 13.875 12.7188V24.2812C13.8751 24.4935 13.9337 24.7016 14.0442 24.8828C14.1548 25.0639 14.313 25.2112 14.5017 25.3084C14.6904 25.4056 14.9022 25.449 15.1139 25.4338C15.3255 25.4187 15.529 25.3455 15.7019 25.2224L23.7956 19.4412C23.9455 19.3342 24.0677 19.193 24.152 19.0293C24.2363 18.8656 24.2803 18.6841 24.2803 18.5C24.2803 18.3159 24.2363 18.1344 24.152 17.9707C24.0677 17.807 23.9455 17.6658 23.7956 17.5588L15.7019 11.7776Z"
                        />
                    </svg>
                </div>
                <div class="item__name">${el}</div>
            </div>
        </div>

        <div class="item__right">
            <div class="item__time"></div>
        </div >
    </div > `;
});

window.loadSong = (song) => {
    console.log(`audio/${song}.mp3`);
    audio.src = `audio/${song}.mp3`;
}

loadSong(songList[thisSong]);

window.playSong = () => {
    play.innerHTML = '<img src="img/pause.svg">';
    document.querySelectorAll('.player__item').forEach((el, index) => {
        el.querySelector('.item__plays').innerHTML = `
            <svg class="item__play" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M37 18.5C37 23.4065 35.0509 28.1121 31.5815 31.5815C28.1121 35.0509 23.4065 37 18.5 37C13.5935 37 8.88795 35.0509 5.41852 31.5815C1.9491 28.1121 0 23.4065 0 18.5C0 13.5935 1.9491 8.88795 5.41852 5.41852C8.88795 1.9491 13.5935 0 18.5 0C23.4065 0 28.1121 1.9491 31.5815 5.41852C35.0509 8.88795 37 13.5935 37 18.5ZM15.7019 11.7776C15.529 11.6545 15.3255 11.5813 15.1139 11.5662C14.9022 11.551 14.6904 11.5944 14.5017 11.6916C14.313 11.7888 14.1548 11.9361 14.0442 12.1172C13.9337 12.2984 13.8751 12.5065 13.875 12.7188V24.2812C13.8751 24.4935 13.9337 24.7016 14.0442 24.8828C14.1548 25.0639 14.313 25.2112 14.5017 25.3084C14.6904 25.4056 14.9022 25.449 15.1139 25.4338C15.3255 25.4187 15.529 25.3455 15.7019 25.2224L23.7956 19.4412C23.9455 19.3342 24.0677 19.193 24.152 19.0293C24.2363 18.8656 24.2803 18.6841 24.2803 18.5C24.2803 18.3159 24.2363 18.1344 24.152 17.9707C24.0677 17.807 23.9455 17.6658 23.7956 17.5588L15.7019 11.7776Z" 
                />
            </svg>
        `;
    })
    document.querySelector(`.music${thisSong}`).querySelector('.item__plays').innerHTML = '<img class="item__play played" src="img/pause_music.svg">';
    document.querySelector('.player__image img').classList.add('played');

    audio.play();
    play.classList.remove('pause');
}
window.pauseSong = () => {
    play.innerHTML = '<img src="img/play.svg">';
    document.querySelectorAll('.player__item').forEach((el) => {
        el.querySelector('.item__plays').innerHTML = `
            <svg class="item__play" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M37 18.5C37 23.4065 35.0509 28.1121 31.5815 31.5815C28.1121 35.0509 23.4065 37 18.5 37C13.5935 37 8.88795 35.0509 5.41852 31.5815C1.9491 28.1121 0 23.4065 0 18.5C0 13.5935 1.9491 8.88795 5.41852 5.41852C8.88795 1.9491 13.5935 0 18.5 0C23.4065 0 28.1121 1.9491 31.5815 5.41852C35.0509 8.88795 37 13.5935 37 18.5ZM15.7019 11.7776C15.529 11.6545 15.3255 11.5813 15.1139 11.5662C14.9022 11.551 14.6904 11.5944 14.5017 11.6916C14.313 11.7888 14.1548 11.9361 14.0442 12.1172C13.9337 12.2984 13.8751 12.5065 13.875 12.7188V24.2812C13.8751 24.4935 13.9337 24.7016 14.0442 24.8828C14.1548 25.0639 14.313 25.2112 14.5017 25.3084C14.6904 25.4056 14.9022 25.449 15.1139 25.4338C15.3255 25.4187 15.529 25.3455 15.7019 25.2224L23.7956 19.4412C23.9455 19.3342 24.0677 19.193 24.152 19.0293C24.2363 18.8656 24.2803 18.6841 24.2803 18.5C24.2803 18.3159 24.2363 18.1344 24.152 17.9707C24.0677 17.807 23.9455 17.6658 23.7956 17.5588L15.7019 11.7776Z" 
                />
            </svg>
        `;
    })

    document.querySelector('.player__image img').classList.remove('played');
    audio.pause();
    play.classList.add('pause');
}

document.querySelector('.player__name').innerHTML = songList[thisSong];

window.showThisSong = () => {
    document.querySelectorAll('.player__item').forEach((el) => {
        el.classList.remove('played');
    })
    document.querySelector(`.music${thisSong}`).classList.add('played');
    document.querySelector('.player__name').innerHTML = songList[thisSong];
}


window.nextSong = () => {

    if (thisSong < songList.length - 1) {
        thisSong++;
    } else {
        thisSong = 0;
    }
    loadSong(songList[thisSong]);
    if (play.classList.contains('pause')) {
        pauseSong();
    } else {
        playSong();
    }

    showThisSong();
}

window.prevSong = () => {
    if (thisSong != 0) {
        thisSong--;
    } else {
        thisSong = songList.length - 1;
    }
    loadSong(songList[thisSong]);
    if (play.classList.contains('pause')) {
        pauseSong();
    } else {
        playSong();
    }

    showThisSong();
}

next.addEventListener('click', () => {
    nextSong();
})

prew.addEventListener('click', () => {
    prevSong();
})

play.addEventListener('click', () => {
    if (!play.classList.contains('pause')) {
        pauseSong();
    } else {
        playSong();
    }
})


window.updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    const percent = (currentTime / duration * 100);
    progress.style.width = percent + '%';
}

audio.addEventListener('timeupdate', updateProgress);


window.setProgress = (e) => {
    const width = document.querySelector('.player__top').clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

document.querySelector('.player__top').addEventListener('click', setProgress);


audio.addEventListener('ended', nextSong)


window.itemClick = (index) => {
    thisSong = index;
    loadSong(songList[thisSong]);
    playSong();
    showThisSong();
}

volume.addEventListener('input', (e) => {
    audio.volume = e.target.value;
    if (e.target.value == 0) {
        document.querySelector('.volume__img').src = 'img/volume-off.png';
    } else {
        document.querySelector('.volume__img').src = 'img/volume-on.png';
    }
})

window.volumeOff = () => {
    if (audio.volume == 0) {
        audio.volume = 1;
        document.querySelector('.volume__img').src = 'img/volume-on.png';
        volume.value = 1;
    } else {
        audio.volume = 0;
        document.querySelector('.volume__img').src = 'img/volume-off.png';
        volume.value = 0;
    }
}

window.fullClick = () => {
    const fullBody = document.querySelector('.player__music');
    fullBody.classList.contains('active') ? removeFullBody() : showFullBody();

    function removeFullBody() {
        fullBody.classList.remove('active');
        document.querySelector('.player__items').style.display = 'flex';
    }

    function showFullBody() {
        fullBody.classList.add('active')
        document.querySelector('.player__items').style.display = 'none';
    }
}



let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);