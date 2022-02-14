function jsShowText(event) {
    var i = document.getElementById("about");
    if (i.innerHTML === "") {
       i.innerHTML = "Hello";
    }
    else {
       i.innerHTML = "hh";
    }
    event.preventDefault();
 }
 function cssShowText(event) {
    var i = document.getElementById("about");
    if (i.className === "") {
       i.className = "hide";
    }
    else {
       i.className = "";
    }
    event.preventDefault();
 }
 function setListeners() {
    document.getElementById("about").addEventListener("click", jsShowText, false);
    document.getElementById("about").addEventListener("click", cssShowText, false);
 }
 window.onload = setListeners;