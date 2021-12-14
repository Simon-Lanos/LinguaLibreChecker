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

    // data.forEach((file) => {
    //     console.log(file.file)
    //     const element = document.getElementById("test");
    //     element.innerHTML = "<p>" + file.file + "</p>";
    // });
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
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}