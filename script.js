gsap.set(".slidesm",{
    scale:5
})
var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        scrub:1,
        start:"top top",
        end:"bottom bottom",
        
    }
});
function home(){
    
tl.to(".videos",{
    "--clip":"0%",
    ease:Power2,
    
},"a")
tl.to(".slidesm",{
    ease:Power2,
    scale:1
},"a")
.to(".lft",{
    ease:Power4,
    xPercent:-10,
},"b")
.to(".rgt",{
    ease:Power4,
    xPercent:10,
    stagger:.0002
},"b")
}
home()



function real(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            scroller:"body",
            start:"top top",
            end:"bottom top",
            // markers:true,
            
            pin:true,
            scrub:2
        },
        
        xPercent:-320,
        ease:Power4
    })
}
real()
// var pic=document.querySelector(".picture")
document.querySelectorAll(".listelem").forEach(function(el){
    el.addEventListener("mousemove",function(dets){
        gsap.to(this.querySelector(".picture"),{
            x:gsap.utils.mapRange(0,window.innerWidth,-200 ,200,dets.clientX),
            // y:dets.clientY+"px",
            opacity:1,
            ease:Power4,
            duration:.5
        })
    })
    el.addEventListener("mouseleave",function(dets){
        gsap.to(this.querySelector(".picture"),{
            opacity:0,
            ease:Power4,
            duration:.5
        })
    })
})
function team(){
}
team()

function para(){
    var clutter="";
document.querySelector(".info")
.textContent.split("")
.forEach(function(e){
    if(e==="") clutter+=`<span>$nbsp;</span>`
    clutter+=`<span>${e}</span>`;
})
document.querySelector(".info").innerHTML=clutter;
gsap.set(".info span",{
    opacity:.1
})
gsap.to(".info span",{
    opacity:1,
    stagger:.03,
    ease:Power4,
    scrollTrigger:{
        trigger:".para",
        scrub:2,
        start:"top 70%",
        end:"bottom 90%",
        // markers:true
    }
})
}
para();
function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
loco()

function colortransition(){
    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:'top 50%',
        end:'bottom 50%',
        // markers:true,
        onEnter:function(){
            document.body.setAttribute("theme",e.dataset.color);
        },
        onEnterBack:function(){
            document.body.setAttribute("theme",e.dataset.color);

        }
    })
})
}
colortransition()

gsap.to('.disappear',{
    scrollTrigger:{
        trigger:".real",
        scrub:1,
        // markers:true,
        start:"-85% -90%",
        end:"bottom 20%"
    },
    opacity:0
})