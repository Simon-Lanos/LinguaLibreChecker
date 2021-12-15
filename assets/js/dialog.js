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


    data.forEach((file) => {
        console.log(file.file)
        const element = document.getElementById("test");
        element.innerHTML = "<p>" + file.file + "</p>";
    });
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
    console.log(count);
    const countAudio = Object.keys(data).length;
    console.log(countAudio);
    if (count > countAudio) {
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