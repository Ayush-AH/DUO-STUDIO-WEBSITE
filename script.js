const cursor = document.querySelector("#cursor");
const main = document.querySelector("#main")
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+20 +"px";
    cursor.style.top = dets.y +20 +"px";
})

gsap.from("#page1 h1,#page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})


function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}
init();


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 ",
        scroller:"#main",
        start:"top 0%",
        end:"top -40%",
        scrub:3,
        pin:true
    }
})
tl.to("#page1>h1", {
    x: -100,
    filter:"blur(6px)"
},"anim")

tl.to("#page1>h2", {
    x: 100,
    filter:"blur(6px)"
},"anim")
tl.to("#page1>p", {
    filter:"blur(6px)"
},"anim")
tl.to("#page1> video", {
    width: "90%",
    y:"-100%",
    duration:2
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#main",
        scroller:"#main",
        start:"top -60%",
        end:"top -75%",
        scrub:true
    }
})
tl2.to("#main",{
    backgroundColor:"white"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#main",
        scroller:"#main",
        start:"top -270%",
        end:"top -400%",
        scrub:true
    }
})

tl3.to("#main",{
    backgroundColor:"#0F0D0D"
})  

var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page6",
        scroller:"#main",
        start:"top 50%",
        end:"top 30%",
        scrub:true
    }
})
tl4.from("#strip >h1", {
    y: 10,
    rotate: 10,
    opacity: 0,
    duration: 0.7
})



var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        cursor.style.width = "450px"
        cursor.style.height = "350px"
        cursor.style.borderRadius = "0"
        cursor.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")

h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display ="block"
        purple.style.opacity ="1"
        })
   
    elem.addEventListener("mouseleave",function(){
        purple.style.display ="none"
        purple.style.opacity ="0"
    })
})
