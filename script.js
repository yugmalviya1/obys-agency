function loadingAnimation(){
var tl =  gsap.timeline()

tl.from(".line h1",{             // slide up animation
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
    
});

tl.from("#line1-part1",{      // timer animation
    opacity:0,
    onStart:function(){  // we can create a function inside on start

    var h5timer = document.querySelector("#line1-part1 h5")
    var grow = 0

    setInterval(function(){
    if(grow<100){
        h5timer.textContent = grow++  
    }
    else{
        h5timer.textContent = grow
    }
    },33)

    }
});

tl.to(".line h2",{
    animationName:"anime",
    opacity:1,
})

tl.to("#loader",{         // loader remove 
    opacity:0,
    duration:0.2,
    delay:4,
});

tl.from("#page1",{
    delay:0.2,
    y:1600,
    duration:0.6,
    ease: Power4,
});

tl.to("#loader",{
    display:"none",
});

tl.from("#nav",{
    opacity:0,
    stagger:0.2,
});

tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:140,
    stagger:0.2,
});


};

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4", {}); //Magnet Effect
};

loadingAnimation();
cursorAnimation();

