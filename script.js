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
var tl2=gsap.timeline({
    
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

function cards(){
    gsap.from('.no1',{
        scaleX:.9,
        // stagger:1,
        background:'#fff',
        color:'#000',
        scrollTrigger:{
            scroller:'body',
            trigger:".no1",
            start:"-10% 35%",
            end:"10% bottom",
            // markers:true,
            scrub:1,
        },
    })
    gsap.from('.no2',{
        scaleX:.9,
        // stagger:1,
        background:'#fff',
        color:'#000',
        scrollTrigger:{
            scroller:'body',
            trigger:".no2",
            start:"-10% 35%",
            end:"10% bottom",
            // markers:true,
            scrub:1,
        },
    })
    gsap.from('.no3',{
        scaleX:.9,
        // stagger:1,
        background:'#fff',
        color:'#000',
        scrollTrigger:{
            scroller:'body',
            trigger:".no3",
            start:"-10% 35%",
            end:"10% bottom",
            // markers:true,
            scrub:1,
        },
    })
    gsap.from('.no4',{
        scaleX:.9,
        // stagger:1,
        background:'#fff',
        color:'#000',
        scrollTrigger:{
            scroller:'body',
            trigger:".no4",
            start:"-10% 35%",
            end:"10% bottom",
            // markers:true,
            scrub:1
        },
    })
}

cards()

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

var clutter1="";
document.querySelector(".footertext>h1")
.textContent.split("")
.forEach(function(e){
    if(e==="") clutter1+=`<span>$nbsp;</span>`
    clutter1+=`<span>${e}</span>`;
})
document.querySelector(".footertext>h1").innerHTML=clutter1;

gsap.from(".footertext>h1>span",{
    opacity:0,
    // transform:"translateY(-100%)",  
      stagger:.3,
    ease:Power4,
    scrollTrigger:{
        trigger:".footer",
        scrub:1,
        start:"70% 70%",
        end:"70% 90%",
        // markers:true
    }
})




