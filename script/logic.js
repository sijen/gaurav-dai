function side_display(){
    var v = document.getElementById("nav-side-panel");
    var a = document.querySelector("#main-panel");
    a.style.width="80%";
    a.style.float="right";
    v.style.left="0px";
    v.style.transition="0.3s all";
}
function side_hide(){
    var v = document.getElementById("nav-side-panel");
    var a = document.querySelector("#main-panel");
    a.style.width="100%";
    a.style.clear="both";
    v.style.left="-50%";
    v.style.transition="0.3s all";
}