const modal = document.getElementById("modal");
const btnClose = document.getElementsByClassName("close")[0];
let timer;
let reverse_counter = 10;
const progressbar = document.getElementById("pbar");

let count = 0;
const btnOpen = function (num) {
    console.log("num btnOpen: " + num);
    count = num;
    console.log("count btnOpen: " + count);
    progress();
    modal.style.display = "flex";
    const audio = document.getElementById('audio');
    const source = document.getElementById('audioSource');
    source.src = data[count].file
    audio.load();
    audio.play();

    const title = document.getElementById('title');
    title.textContent = data[count].word;
    renderTags()
}

const btnOpenAt = function(num) {
    modal.style.display = "flex";
    const audio = document.getElementById('audio');
    const source = document.getElementById('audioSource');
    count = num;
    source.src = data[num].file
    audio.load();
    audio.play();
    renderTags();
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
