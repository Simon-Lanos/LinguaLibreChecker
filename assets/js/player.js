const audioPlayer = document.getElementById('audio-player');
const audio = document.getElementById('audio');
const audioDuration = document.getElementById('audio-duration');
const audioTime = document.getElementById('audio-time');
const audioSource = document.getElementById('audio-source');

const initAudioPlayer = function () {
    audio.load();
    changePlayerState('playing');
};

const changePlayerState = function (state) {
    let char;
    let classToRemove;
    let classToAdd;

    switch (state) {
        case 'paused':
            audioPlayer.removeAttribute('data-playing');
            char = '&#9655;'; // play icon
            classToRemove = 'text-danger';
            classToAdd = 'text-success';
            audio.pause();
            break;
        case 'playing':
            audioPlayer.setAttribute('data-playing', true);
            char = '&#9209;'; // stop icon
            classToRemove = 'text-success';
            classToAdd = 'text-danger';
            audio.play();
            break;
        default:
            console.error('Unexpected player state, got : ' + state);
            return;
    }

    audioPlayer.innerHTML = char;
    audioPlayer.classList.add(classToAdd);
    audioPlayer.classList.remove(classToRemove);
};

const computeTime = function (secs) {
    const minutes = Math.round(secs / 60);
    const seconds = Math.round(secs % 60);
    // add 0 before the seconds if single digit
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}
const filterReadedAudio = function (el) {
    return el.isRead ?? false ;
}

audioPlayer.onclick = function () {
    if (this.hasAttribute('data-playing')) {
        changePlayerState('paused');
    } else {
        changePlayerState('playing');
    }
};

const audioPlaySubscriber = new Subscriber();
const audioPauseSubscriber = new Subscriber();
const audioEndedSubscriber = new Subscriber();

audioEndedSubscriber.subscribe('state', function () {
    changePlayerState('paused')
    // check la data
    
    data[data.findIndex(el => el.file === audioSource.attributes.src.value)].isRead = true;
    

});

audio.onplay = audioPlaySubscriber.handle;
audio.onpause = audioPauseSubscriber.handle;
audio.onended = audioEndedSubscriber.handle;

audio.onloadedmetadata = function () {
    audioDuration.innerText = computeTime(audio.duration);
};

audio.ontimeupdate = function () {
    audioTime.innerText = computeTime(audio.currentTime);
};
