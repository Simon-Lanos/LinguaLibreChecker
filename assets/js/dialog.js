const modal = document.getElementById("modal");
const btnClose = document.getElementsByClassName("close")[0];
let timer;
let reverse_counter = 10;
const progressbar = document.getElementById("pbar");

let count = 0;
const btnOpen = function (num) {
    count = num;
    modal.classList.add('d-flex');
    const source = document.getElementById('audio-source');
    source.src = data[count].file
    initAudioPlayer();
    // audio.addEventListener('timeupdate', (event) => {
    //     const currentTime = Math.floor(audio.currentTime);
    //     const duration = Math.floor(audio.duration);
    // }, false);
    const title = document.getElementById('title');
    title.textContent = data[count].word;
    renderTags()
}

const renderTags = function () {
    const divTag = document.getElementById('tag');
    divTag.innerHTML = ''
    tags.forEach((tag) => {
        const btnTag = document.createElement("button")
        btnTag.type = 'button';
        btnTag.innerHTML = '#' + tag.name;
        btnTag.className = 'btn rounded-pill shadow-custom m-2';

        if (data[count].tags.includes(tag.name)) {
            btnTag.classList.add('btn-primary');
        } else {
            btnTag.classList.add('btn-light');
        }
        btnTag.setAttribute('id', tag.name.replaceAll(' ', '-'))

        btnTag.onclick = handleTagClickFunction(tag, data[count])
        divTag.appendChild(btnTag)
    });
};

const btnNext = function () {
    resetProgress();
    count += 1;
    const countAudio = Object.keys(data).length - 1;
    console.log("count :" + count);
    console.log("countAudio :" + countAudio);
    if (count > countAudio) {
        count = 0;
        btnOpen(count)
    } else {
        btnOpen(count)
    }
}

const btnBack = function () {
    resetProgress();

    count -= 1;
    const countAudio = Object.keys(data).length;
    console.log("count :" + count);
    console.log("countAudio :" + countAudio);
    if (count < 0) {
        count = 0;
    } else {
        btnOpen(count)
    }
}

const btnStop = function () {
    resetProgress();
}
const handleTagClickFunction = function (tag, element) {
    return function () {
        const btnTag = document.getElementById(tag.name.replaceAll(' ', '-'));
        if (element.tags.includes(tag.name)) {
            btnTag.classList.remove('btn-primary');
            btnTag.classList.add('btn-light');
            element.tags.splice(element.tags.indexOf(tag.name));
            return;
        }
        btnTag.classList.remove('btn-light');
        btnTag.classList.add('btn-primary');

        element.tags.push(tag.name);
        CreateTableFromJSON();
    };
};

btnClose.onclick = function () {
    modal.classList.remove('d-flex');
    resetProgress();
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.classList.remove('d-flex');
        resetProgress();
    }
}


//progress bar
function progress() {
    clearInterval(timer);
    timer = setInterval(function () {

        progressbar.value = --reverse_counter;

        progressbar.style.width = reverse_counter * 10 + "%";
        if (reverse_counter <= 0) {
            clearInterval(timer);
            btnNext()
        }

        // console.log(reverse_counter);
        // document.getElementById("counter").innerHTML = reverse_counter;

    }, 500);
    console.log("end");
    reverse_counter = 10;
}

function resetProgress() {
    clearInterval(timer);
    progressbar.style.width = "100%";
}

audioPlaySubscriber.subscribe('reset', resetProgress);
audioEndedSubscriber.subscribe('progress', progress);
