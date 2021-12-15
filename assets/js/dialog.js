const modal = document.getElementById("modal");
const btnClose = document.getElementsByClassName("close")[0];
let count = 0;
const btnOpen = function () {
    modal.style.display = "flex";
    const audio = document.getElementById('audio');
    const source = document.getElementById('audioSource');
    source.src = data[count].file
    audio.load();
    audio.play();

    const title = document.getElementById('title');
    title.textContent = data[count].word;

    const divTag = document.getElementById('tag');
    divTag.innerHTML = ''

    tags.forEach((tag) => {
        const btnTag = document.createElement("button")
        btnTag.type = 'button';
        btnTag.innerHTML = '#' + tag.name;
        btnTag.className = 'btn btn-light';

        btnTag.onclick = handleTagClickFunction(tag, data[count])
        const divTag = document.getElementById('tag');
        divTag.appendChild(btnTag)
    });
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

const handleTagClickFunction = function (tag, element) {
    return function () {
        if (element.tags.includes(tag.name)) {
            return;
        }
        element.tags.push(tag.name);
        CreateTableFromJSON();
    };
};

btnClose.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
