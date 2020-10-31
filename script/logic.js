function side_display(){
    var v = document.getElementById("nav-side-panel");
    v.style.left="0px";
    v.style.transition="0.3s all";
}
function side_hide(){
    var v = document.getElementById("nav-side-panel");
    v.style.left="-60%";
    v.style.transition="0.3s all";
}