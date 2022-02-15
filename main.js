function jsShowText(event) {
    var i = document.getElementById("about");
    if (i.innerHTML = "About me & Contact") {
       i.innerHTML = "Hey; \n I am Ulrich, student at NHCC in Brooklyn Park, MN. \n My favorite thing to do is to read online articles. Otherwise, I ride my bicycle or just get asleep. \n I am native to Africa and my family is a big part of who I am. \n I am a dedicted Student and looking to pursue my Computer Science Career!";
    }
    else {
       i.innerHTML = "About me & Contact";
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
