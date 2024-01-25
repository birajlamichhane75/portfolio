let tl = gsap.timeline();

tl.from(".glow", {
    scale: 0,
    delay: 1,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
})

let videos = document.querySelectorAll("#box3 .video-card video");
let count = 0;

let slider = () =>{
    videos.forEach((e)=>{

            gsap.to(e,{
                x:`-${100 * count}%`,
            })
        
    })
}

let slideleft = () =>{
    count++;
    if(count > videos.length - 1){
        count = 0;
    }
    slider();
}

setInterval(()=>{
    slideleft();
},6000)








    // ============= menu section ===================

let openMenu = () =>{
    
let menuBar = document.querySelector(".menu-bar");
let cross = document.querySelector(".cross");

menuBar.addEventListener("click",()=>{
    let menu = document.querySelector("#menu-section");

    let tl = gsap.timeline()

    tl.to(menu,{
        left:"0%"
    },'a')
    tl.from("#menu-section .profile .image",{
        scale:0,
        opacity:0,
        delay:.2
    },'a')

    tl.from("#menu-section .profile .name h2",{
        opacity:0,
        x:"-10%",
        delay:.4,
    },'a')

    tl.from("#menu-section .menu a",{
        opacity:0,
        x:"-40%",
        delay:.6,
        stagger:.1
    },'a')
})


cross.addEventListener("click",()=>{
    let menu = document.querySelector("#menu-section");

    let tl2 =gsap.timeline();

    tl2.to(menu,{
        left:"-100%",
        duration:1
    },'a')

})
}
gsap.from(".bar",{
    width:0,
    duration:1,

})

openMenu();
