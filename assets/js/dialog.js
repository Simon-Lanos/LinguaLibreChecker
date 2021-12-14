const modal = document.getElementById("modal");

// const btnOpen = document.getElementById("btnOpen");

const btnClose = document.getElementsByClassName("close")[0];

const btnOpen = function (data) {
    modal.style.display = "flex";
    const audio = document.getElementById('audio');
    const source = document.getElementById('audioSource');
    source.src = data[0].file
    // audio.load(); //call this to just preload the audio without playing
    // audio.play(); //call this to play the song right away

    const count = Object.keys(data).length;
    console.log(count);
    data.forEach((file) => {
        console.log(file.file)
        const element = document.getElementById("test");
        element.innerHTML = "<p>" + file.file + "</p>";
    });
}

btnClose.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}