var el = {
    img: document.getElementsByClassName("img-player")[0]
}

var p = 520
el.img.style.left = -520 + "px";

setInterval(function view() {

    p += -520
    el.img.style.left = p + "px";
    if (p<=-520*4){
        p=520
    }
},2000)


// position: absolute; overflow: hidden; width: 3640px; transition-duration: 0.3s; transform: translate3d(-1560px, 0px, 0px); backface-visibility: hidden; left: 0px; opacity: 1;