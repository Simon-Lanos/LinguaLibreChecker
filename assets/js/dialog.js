const modal = document.getElementById("modal");

const btnOpen = document.getElementById("btnOpen");

const btnClose = document.getElementsByClassName("close")[0];

btnOpen.onclick = function() {
    modal.style.display = "flex";
}

btnClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}