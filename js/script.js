const load = gsap.timeline({
    paused: "true"
})
load.to("#bar",{
    duration: .2,
    opacity: 0,
    zIndex: -1,
    onComplete: function() {
        $('.lbg').hide();
    }
});
load.to(".progress",{
    duration: .8,
    width: "0%"
});
load.to(".logo",{
    duration: 1.5,
    top: "40px",
    left: "40px"
})
load.to(".logo img",{
    css: {
        height: 70,
        width: 175,
    },
    delay: 0,
    duration: .5
}, 0);

load.to(".nbtn",{
    opacity: 1,
    duration: .5,
    ease: Power1.inOut,
    onComplete: function() {
        $('section').show();
    }
});
load.to(".loader",{
    onComplete: function() {
        $('.loader').hide();
        $('.lgo').show();
    }
});

load.from(".footer",{
    duration: 1.5,
    y: "150%",
    x: "-50%",
    opacity: 0,
    stagger: {
        amount: .4
    }
},"-=.5");
load.from("section",{
    duration: 01,
    delay: 0.5,
    y: 200,
    skewY: 10,
    stagger: {
        amount: .4
    },
    opacity: 0,
    ease: "power4.out"
    
},"-=2.5");

var id;
var width = 1;
function loading(){
    id = setInterval(frame,20);
}
function frame(){
    if(width>=100){
        clearInterval(id);
        load.play();
    }
    else{
        width++;
        document.getElementById("barc").style.width = width + "%";
    }
}

function chk(){
    $('.navigation').toggleClass('t-0');
}

$('.und').click(function() {
    $('.nbtn').click();
});

function planets(){
    window.location.href = "planets.html";
}

function constellations(){
    window.location.href = "constellations.html";
}