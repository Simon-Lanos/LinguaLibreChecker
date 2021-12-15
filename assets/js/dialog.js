const modal = document.getElementById("modal");
const btnClose = document.getElementsByClassName("close")[0];
let timer;
let reverse_counter = 10;
const progressbar = document.getElementById("pbar");

//Tags
const divTag = document.getElementById('tag');
divTag.innerHTML = ''
tags.forEach((tag) => {
    const btnTag = document.createElement("button")
    btnTag.type = 'button';
    btnTag.innerHTML = '#' + tag.name;
    btnTag.className = 'btn btn-light';

    btnTag.onclick = function () {
        console.log(tag.name)
    };
    const divTag = document.getElementById('tag');
    divTag.appendChild(btnTag)
    // console.log(tag.name)
});
// clearInterval(timer);

let count = 0;
const btnOpen = function () {
    progress();
    modal.style.display = "flex";
    const audio = document.getElementById('audio');
    const source = document.getElementById('audioSource');
    source.src = data[count].file
    audio.load();
    audio.play();

    const title = document.getElementById('title');
    title.textContent = data[count].word;
}

const btnOpenAt = function(num) {
    modal.style.display = "flex";
    const audio = document.getElementById('audio');
    const source = document.getElementById('audioSource');
    count = num;
    source.src = data[num].file
    audio.load();
    audio.play();
}

const btnNext = function () {
    count += 1;
    const countAudio = Object.keys(data).length - 1;
    console.log("count :" + count);
    console.log("countAudio :" + countAudio);
    if (count > countAudio) {
        count = 0;
        btnOpen(data)
    } else {
        btnOpen(data)
    }
}

const btnBack = function () {
    count -= 1;
    const countAudio = Object.keys(data).length;
    console.log("count :" + count);
    console.log("countAudio :" + countAudio);
    if (count < 0) {
        count = 0;
    } else {
        btnOpen(data)
    }
}

btnClose.onclick = function () {
    modal.style.display = "none";
    clearInterval(timer);

}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        clearInterval(timer);
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

        console.log(reverse_counter);
        // document.getElementById("counter").innerHTML = reverse_counter;

    }, 500);
    console.log("end");
    reverse_counter = 10;
    progressbar.style.width = reverse_counter * 10 + "%";
}
