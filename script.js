$(window).trigger('resize').trigger('scroll');
AOS.init({once: false,  mirror: true});
let inner_height = window.innerHeight;
const p_window = document.querySelectorAll(".parallax-window");
const scrollImages = document.querySelector(".scrollable");


    let count = 1;
    for (const wind of p_window) 
    {
        $(wind).parallax({imageSrc: wind.dataset.imageSrc});
        $(wind).parallax({
            naturalWidth: 600,
            naturalHeight: 400
        });
    }

    if (scrollImages) {
        window.addEventListener("wheel", (e) =>
        {

          if (count == 1) {
              if (e.deltaY > 0) {
                  let myCount = window.pageYOffset + window.innerHeight;
                  window.scrollTo({top: myCount, behavior: 'smooth'});
              }
              if (e.deltaY < 0) {
                  window.scrollTo({top: window.pageYOffset - window.innerHeight, behavior: 'smooth'});           
              }
              count++;


              setTimeout(() => {
                      count = 1;
                    },1000)
                }
        //   if (e.deltaY == 1 || e.deltaY == 0 || e.deltaY == -0) {
            // count = 1;
        // }
        })
    }



    const upBtn = document.querySelector("#up");
    const downBtn = document.querySelector("#down");
    const toTop = document.querySelector("#toTop");

    if (upBtn) {
        
        
        upBtn.onclick = (e) =>
        {
            window.scrollTo({top: window.pageYOffset - window.innerHeight, behavior: 'smooth'});           
        }
        downBtn.onclick = (e) =>
        {
            window.scrollTo({top: window.pageYOffset + window.innerHeight, behavior: 'smooth'});
        }
    }

    if (toTop) {
        toTop.onclick = () =>
        {
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    }

    const mouseBorder = document.querySelector(".bordered");
    
    setTimeout((e) => {
        const mouseBorderloader = document.querySelector(".bordered span");
        mouseBorderloader.style.display = "none";
    }, 3000)

    let index = 30;
    document.onmouseenter = () =>
    {
        mouseBorder.setAttribute("style", "display: inline-block")
    }
    document.onmousemove = (e) =>
    {
        mouseBorder.style.left = (e.clientX - 18) + "px";
        mouseBorder.style.top = (e.clientY - 16) + "px";
        mouseBorder.style.zIndex =  index;
    }
    
    
    let links = document.querySelectorAll("a, button, iframe, label")
    
    for (const link of links) {
        let zInd = window.getComputedStyle(link).zIndex;
        link.onmouseover = (e) =>
        {
            circleOver()
            link.style.zIndex = "99";
        }
        link.onmouseenter = (e) =>
        {
            circleOver()
            link.style.zIndex = "99";
        }
        link.onmouseout = (e) =>
        {
            circleOut()
            link.style.zIndex = zInd;
        }
    }
    
    
    const text = document.querySelector(".center-text")
    
    if (text) {
        
        
        text.onmouseover = (e) =>
        {
            mouseBorder.style.visibility = "hidden";
        }
        text.onmouseenter = (e) =>
        {
            mouseBorder.style.visibility = "hidden";
        }
        text.onmouseout = (e) =>
        {
            mouseBorder.style.visibility = "visible";
        }
        
    }
        
    
    const menu = document.querySelector("#menu") 
    const _menu = document.querySelector(".menu") 
    
    
    
    menu.onchange = () =>
    {
        if (menu.checked) {
            _menu.innerHTML = `<img src="./images/multi.png" alt="" class="close">`
            index =  99;
        }else
        {
            _menu.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
            `
            index =  30;
        }
    }

    // setTimeout(() =>
    // {
    //     const video = document.querySelector(".video");
    //     console.log(video)
        
    //     if (video) {
    //         video.play()
    //     }
    // }, 1000)
    

    // const bgImages = document.querySelectorAll(".port .large")


    // if(bgImages.length > 0)
    // {
    //     for (const bgimage of bgImages) {
    //         bgimage.setAttribute("data-speed", "1");
    //     }
        
    // }

        const sideMenu = document.querySelector("#sideMenu");

    if(sideMenu)
    {   
        sideMenu.onchange = () =>
        {
            console.log(sideMenu.checked)
        }
    }


    const stories = document.querySelectorAll(".main-stories .story")


    
    if (stories.length > 0) {
        for (const story of stories) {
            story.onclick = () =>
            {
                window.location.href = "./stories-post.html"
            }
            story.onmouseover = (e) =>
            {
                visHide()
            }
            story.onmouseenter = (e) =>
            {
                visHide()
            }
            story.onmouseout = (e) =>
            {
                visShow()
            }
        }
    }


    function circleOver() {
        mouseBorder.style.opacity = "0.3";
        mouseBorder.style.transform = "scale(1.5)";
    }


    function circleOut() {
        mouseBorder.style.opacity = 1;
        mouseBorder.style.transform = "scale(1)";
    }


    function visHide() {
        mouseBorder.style.visibility = "hidden";
    }


    function visShow() {
        mouseBorder.style.visibility = "visible";
    }