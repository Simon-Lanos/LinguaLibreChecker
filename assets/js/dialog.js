const modal = document.getElementById("modal");

// const btnOpen = document.getElementById("btnOpen");

const btnClose = document.getElementsByClassName("close")[0];

const btnOpen = function (data) {
    modal.style.display = "flex";
    data.forEach((file) => {
        console.log(file.file)
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