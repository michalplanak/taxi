function readMore(){
    document.getElementById("unvisible").style.display = "grid";
    document.getElementById("arrowdown").style.display = "none";
    document.getElementById("arrowup").style.display = "flex";
}
function RemoveReadMore(){
    document.getElementById("unvisible").style.display = "none";
    document.getElementById("arrowdown").style.display = "flex";
    document.getElementById("arrowup").style.display = "none";
}

var modal1 = document.getElementById("modal");
function modal() {
    modal1.style.display = "block";
    
}
function closemodal() {
    modal1.style.display = "none";
}