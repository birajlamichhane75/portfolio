// ======================= Project js ================================


let projectArr = [

    
    {
        video:"videos/techinfo.mp4",
        tools:["Next JS","Mongodb","Tailwind CSS"],
        title:"TechInfo",
        url:"https://biraj-techinfo.vercel.app",
    },
    {
        video:"videos/ecommerce.mp4",
        tools:["Next JS"],
        title:"E-commerce Website",
        url:"https://b-store.vercel.app",
    },
    {
        video:"videos/vr.mp4",
        tools:["HTML","CSS","JS","GSAP"],
        title:"Virtual Reality Website",
        url:"https://birajtask.netlify.app",
    },
    {
        video:"videos/todolist.mp4",
        tools:["Next JS","Mongodb","Tailwind CSS"],
        title:"Fullstack To-Do-List",
        url:"https://github.com/birajlamichhane75/Todo-list-Next-js",
    },
    {
        video:"videos/fb.mp4",
        tools:["Next JS"],
        title:"Facebook Clone",
        url:"https://github.com/birajlamichhane75/Next-js",
    },
    {
        video:"videos/video1.mp4",
        tools:["HTML","CSS","JavaScript","GSAP"],
        title:"Animated Landing Page",
        url:"https://github.com/birajlamichhane75/animated-website-features/tree/main/modern_webdesign1",
    },
    {
        video:"videos/video2.mp4",
        tools:["HTML","CSS","JavaScript","GSAP"],
        title:"Photo Jumping Effect",
        url:"https://github.com/birajlamichhane75/animated-website-features/tree/main/photo_jump_effect",
    },
    {
        video:"videos/video3.mp4",
        tools:["HTML","CSS","JavaScript","GSAP"],
        title:"ScrollTrigger Animation",
        url:"https://github.com/birajlamichhane75/animated-website-features/tree/main/feature4",
    },
    {
        video:"videos/video4.mp4",
        tools:["HTML","CSS","JavaScript"],
        title:"Instagram Clone",
        url:"https://github.com/birajlamichhane75/JavaScript_projects/tree/main/instagram",
    },
    {
        video:"videos/video5.mp4",
        tools:["HTML","CSS","JavaScript","GSAP"],
        title:"Image Scroller",
        url:"https://github.com/birajlamichhane75/animated-website-features/tree/main/feature5",
    },
    {
        video:"videos/video6.mp4",
        tools:["HTML","CSS","JavaScript","GSAP"],
        title:"Animated Landing Page",
        url:"https://github.com/birajlamichhane75/animated-landing-page/tree/main/landing_page3",
    },
    {
        video:"videos/video7.mp4",
        tools:["HTML","CSS","JavaScript","GSAP"],
        title:"Animated Landing Page",
        url:"https://github.com/birajlamichhane75/animated-landing-page/tree/main/landing_page1",
    },
    {
        video:"videos/video8.mp4",
        tools:["HTML","CSS","JavaScript","GSAP"],
        title:"Animated Landing Page",
        url:"https://github.com/birajlamichhane75/animated-website-features/tree/main/feature2",
    },
]
projectArr.forEach((e)=>{
    
    let box = document.createElement("div");
    box.classList.add("project-box");
    
    box.innerHTML = `
    <div class="img-card">
    <video width="100%" height="100%" loop muted>
        <source src=${e.video} type="video/mp4">
    </video>
</div>

<div class="tool-box">
    <!-- Use map to iterate over e.tools and generate an array of tool divs -->
    ${e.tools.map((tool, index) => `
        <div class="tools" id="tools${index + 1}">
            <p>${tool}</p>
        </div>
    `).join('')}
</div>

<div class="project-name">
    <h1>${e.title}</h1>
    <a href=${e.url} target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
</div>

     `;
    
     document.querySelector(".p-center").appendChild(box);
    })



// ============= video play on hover==============

let videoPlay = () =>{
    let vid = document.querySelectorAll(".project-box video");

    vid.forEach((v)=>{
        v.addEventListener("mouseover",()=>{

            v.play();
        })
        v.addEventListener("mouseleave",()=>{
            v.pause();
        })
    })
}

videoPlay();


    // <div class="img-card">
    // <video width="100%" height="100%" loop muted>
    //     <source src=${e.video} type="video/mp4">
    // </video>
    // </div>
    
    // <div class="tool-box">
    // <div class="tools" id="tools1"><p>${e.tools[0]}</p></div>
    // <div class="tools" id="tools2"><p>${e.tools[1]}</p></div>
    // <div class="tools" id="tools3"><p>${e.tools[2]}</p></div>
    // <div class="tools" id="tools3"><p>${e.tools[3]}</p></div>
    // </div>
    
    // <div class="project-name">
    // <h1>${e.title}</h1>
    // <a href=${e.url} target = "_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    // </div>
