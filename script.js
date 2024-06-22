const main = document.querySelector(".main");
const boll = document.querySelector(".boll");
const crose = document.querySelector(".inner-icon");
const frount = document.querySelector(".frount-card");
const uper = document.querySelector(".uper-image");
const lower = document.querySelector(".lower-image");
const right = document.querySelector(".right-images");



// first title animation start

gsap.to(".left-text",{
   x:40,
   duration:1,
   delay:.2
})
   
gsap.from(".right-text",{
   x:20,
   delay:.2,
   duration:1
})

// first title animation end


// images animation start
gsap.from(".img-card ",{
   y:40,
   duration:1
})

// images animation end

// crationg & screen animation start

gsap.from(".creating ",{
   y:60,
   duration:.5,
   scrollTrigger:".creating"
})

gsap.from(".screen ",{
y:60,
duration:.5,
scrollTrigger:".screen"
})

// crationg & screen animation end

// second images animation start

uper.addEventListener("mouseenter",()=>{
   gsap.to(".uper-image img",{
       scale:1.3
       st
       
   })
})

uper.addEventListener("mouseleave",()=>{
   gsap.to(".uper-image img",{
       scale:1
       
   })
})  

lower.addEventListener("mouseenter",()=>{
gsap.to(".lower-image img",{
    scale:1.3
    
})
})

lower.addEventListener("mouseleave",()=>{
gsap.to(".lower-image img",{
    scale:1
    
})
})

right.addEventListener("mouseenter",()=>{
gsap.to(".right-images img",{
    scale:1.3
    
})
})

right.addEventListener("mouseleave",()=>{
gsap.to(".right-images img",{
    scale:1
    
})
})


gsap.from(' .second-images',{
   y:60,
   duration:1,
   scrollTrigger:".second-images"
   })
   
// second images animation end

// yellow card animation start
gsap.from(' .round-images',{
   y:70,
   delay:.1,
   duration:.8,
   opacity:0,
   stagger:.2,
   scrollTrigger:(".round-images")
   
})

// gsap.from(' .two',{
//    y:40,
//    delay:.1,
//    duration:1,
//    scrollTrigger:(".two")
   
// })

// gsap.from(' .three',{
//    y:40,
//    delay:.1,
//    duration:1,
//    scrollTrigger:(".three")
   

// })

// gsap.from(' .foure',{
//    y:40,
//    delay:.1,
//    duration:1,
//    scrollTrigger:(".foure")

// })

// yellow card animation end

// moving card animation start
frount.addEventListener("mouseenter",()=>{
   gsap.to(".back-card",{
       rotate:0
       
   })
})

frount.addEventListener("mouseleave",()=>{
 
   gsap.to(".back-card",{
       rotate:8
   })
})

gsap.from(' .double-card',{
   x:60,
   duration:1,
   delay:.2,
   scrollTrigger:".double-card"
})

gsap.to(' .text-with-button',{
   x:60,
   duration:1,
   delay:.2,
   scrollTrigger:".text-with-button"
})

// moving card animation start


// smole card animation start

gsap.from('.smole-cards',{
   y:100,
   duration:1.5,
   opacity:0,
   delay:.2,
   scrollTrigger:".smole-cards"

})

gsap.from('.punch-cards',{
   y:100,
   duration:2,
   opacity:0,
   scrollTrigger:".punch-card"

})

// smole card animation start


// leade animation start 
gsap.to('.lead-card, .slead-card',{
   x:100,
   duration:1,
   delay:.2,
   scrollTrigger:".leader-card"
})

gsap.from('.right-text-button, .sright-text-button',{
   x:60,
   duration:1,
   delay:.2,
   scrollTrigger:".leader-card"
}) 

// leade animation start 


// gallery animation start

main.addEventListener("mousemove", (dets)=>{
   boll.style.left = dets.x+"px"
   boll.style.top = dets.y+"px"
})

const menu = document.querySelector(".menu-icon")

menu.addEventListener('click',()=>{
   var gellery = document.querySelector(".gellery")
   gellery.style.visibility = 'visible';
})

crose.addEventListener('click',()=>{
   var gellery = document.querySelector(".gellery")
   const i = document.querySelector(".inner-icon i");
   gellery.style.visibility = 'hidden';
})
// gallery animation end
   

(function () {
   var scroll = new LocomotiveScroll();
})();