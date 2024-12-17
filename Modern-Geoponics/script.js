const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemc = document.querySelector("#elem-con")
var fixImage = document.querySelector("#fixed-image")

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    var img = e.getAttribute("data-image")
    e.addEventListener("mouseenter",function(){
        fixImage.style.display = "block"
        fixImage.style.backgroundImage = `url(${img})`
        fixImage.addEventListener("mouseenter",function(){
            fixImage.style.display = "block";
        })
    })
    e.addEventListener("mouseleave",function(){
        fixImage.style.display = "none" 
    })
    fixImage.addEventListener("mouseleave",function(){
        fixImage.style.display = "none";
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 50
  });

var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4000)

var desc = document.querySelector("#desc")
var Design = document.querySelector("#Design")
var design = document.querySelector("#design")
var Project = document.querySelector("#Project")
var Execution = document.querySelector("#Execution")
var image = document.querySelector("#page4-img")

Design.addEventListener("click",function(){
    desc.textContent = "A commitment to enhancing agricultural output by implementing cutting-edge technologies and sustainable practices. Focused on delivering higher yields with fewer resources, ensuring both profitability and environmental care in every harvest."
    var add = Design.getAttribute("data-img")
    image.setAttribute("src",`${add}`)
    Project.style.right = "0vw"
    Design.style.right = "2vw"
    design.style.color = "#f5deb3"
    Execution.style.right = "0vw"
    Execution.style.color = "#B3A9A3"
    Project.style.color = "#B3A9A3"
})

Project.addEventListener("click",function(){
    desc.textContent = "The backbone of modern agriculture, centered on optimizing every stage of the farming process. From resource allocation to labor management, efficiency ensures that time, effort, and materials are utilized effectively to reduce waste and increase overall farm performance."
    var add = Project.getAttribute("data-img")
    image.setAttribute("src",`${add}`)
    Project.style.right = "2vw"
    Project.style.color = "#f5deb3"
    Design.style.right = "0vw"
    design.style.color = "#B3A9A3"
    Execution.style.color = "#B3A9A3"
    Execution.style.right = "0vw"
})

Execution.addEventListener("click",function(){
    desc.textContent = "The ability to thrive amidst adversity, resilience ensures that agricultural operations can withstand environmental, economic, and social challenges. Whether it's adapting to climate change, combating pests, or navigating market fluctuations, resilience is key to long-term success and sustainability in agriculture."
    var add = Execution.getAttribute("data-img")
    image.setAttribute("src",`${add}`)
    Project.style.right = "0vw"
    Design.style.right = "0vw"
    Execution.style.right = "2vw"
    Execution.style.color = "#f5deb3"
    Project.style.color = "#B3A9A3"
    design.style.color = "#B3A9A3"
})