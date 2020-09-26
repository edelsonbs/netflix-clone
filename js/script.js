function abrirVideo() {
    window.location = "video.html";
}

function abrirModal() {
    document.getElementById('bg-modal').style.display = "block";
    document.getElementById('modal').style.top = "0";
}

function fecharModal() {
    document.getElementById('bg-modal').style.display = "none";
    document.getElementById('modal').style.top = "-100%";
}