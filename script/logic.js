function side_display(){
    var v = document.getElementById("nav-side-panel");
    var a = document.getElementById("main-panel");
    v.style.left="0px";
    a.style.width="80%";
    a.style.float="right";
    a.style.transition="0.3s all";
}
function side_hide(){
    var v = document.getElementById("nav-side-panel");
    var a = document.getElementById("main-panel");
    v.style.left="-20%";
    a.style.width="100%";
    a.style.transition="0.3s all";
}