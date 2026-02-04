
function homepageanimation(){
gsap.set(".slidesm", {scale: 5})
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    end: "bottom bottom",
    // markers: true,
    scrub: 2
  }

})

tl
.to(".vdodiv", {
  '--clip': "0%",
  ease: Power2
},'a')

.to(".slidesm", {
  scale:1,
  ease: Power2
},'a') 

.to(".slidesm", {
  scale:1,
  stagger: .03,
  ease: Power4
},'a') 

.to(".lft", {
  xPercent: -10,
  ease: Power2
},'b') 
 
.to(".rgt", {
  xPercent: 10,
  ease: Power2
},'b') 

}

function realanimation(){
  gsap.to(".slide",{
  scrollTrigger: {
    trigger: ".real",
    start: "top top",
    end: "bottom bottom",
    // markers: true,
    scrub: 2
  },
  xPercent: -200,
  ease: Power4
})
}

function teamAnimation() {
  document.querySelectorAll(".listelem").forEach(function (el) {

    // 1️⃣ MOUSE ENTER — RESET OTHERS + OPEN CURRENT
    el.addEventListener("mouseenter", function () {

      // Close all blue layers instantly
      gsap.to(".bluelayer", {
        height: "0%",
        duration: 0.2,
        ease: Power2,
        overwrite: true
      });

      // Open current blue layer
      gsap.to(this.querySelector(".bluelayer"), {
        height: "100%",
        duration: 0.3,
        ease: Power3.out,
        overwrite: true
      });
    });

    // 2️⃣ MOUSE MOVE — IMAGE FOLLOW
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        duration: 0.4,
        ease: Power4,
        overwrite: true
      });
    });

    // 3️⃣ MOUSE LEAVE — CLOSE BLUE + HIDE IMAGE
    el.addEventListener("mouseleave", function () {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        duration: 0.3,
        ease: Power4,
        overwrite: true
      });

      gsap.to(this.querySelector(".bluelayer"), {
        height: "0%",
        duration: 0.3,
        ease: Power2,
        overwrite: true
      });
    });

  });
}

function paraAnimatio(){

  var clutter = "";
  document.querySelector(".textpara")
  .textContent.split("")
  .forEach(function(e){
    if(e === " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${e}</span>`
  })

document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span", {opacity: .1})
gsap.to(".textpara span",{
  scrollTrigger: {
    trigger: ".para",
    start: "top 60%",
    end: "bottom 90%",
    scrub: 1
  },
  opacity: 1,
  stagger: .03,
  ease: Power4
})

}

function capsulesAnimation(){
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      // markers: true,
      scrub: 1
    },
    y: 0,
    ease: Power4
  });
}

function themecolorchange(){
  document.querySelectorAll(".section")
.forEach(function(e){
  ScrollTrigger.create({
   
    trigger: e,
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,
    onEnter: function(){
      document.body.setAttribute("theme",e.dataset.color);
    },
    onEnterBack: function(){
       document.body.setAttribute("theme",e.dataset.color);
    }

  })

})
}



themecolorchange();
homepageanimation(); 
realanimation();
teamAnimation();
paraAnimatio(); 
capsulesAnimation();

