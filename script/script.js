const parallaxElements = document.querySelectorAll(".parallax");

let xValue = 0 ,
yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
    parallaxElements.forEach((element) => {
        let speedx = element.dataset.speedx;
        let speedy = element.dataset.speedy;
        let speedz = element.dataset.speedz;
        let rotationSpeed = element.dataset.rotation;

        let isInLeft = parseFloat(getComputedStyle(element).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(element).left)) * isInLeft * 0.1;
                
        element.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) 
                                   translateY(calc(-50% + ${yValue * speedy}px)) 
                                   perspective(2300px) 
                                   translateZ(${zValue * speedz}px) 
                                   rotateY(${rotateDegree * rotationSpeed}deg)`
    })
}

update(0);

window.addEventListener("mousemove" , (event) => {
    xValue = event.clientX - window.innerWidth / 2;
    yValue = event.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;    

    update(event.clientX)
});

// // GSAP Animation 

// let timeline = gsap.timeline();

// Array.from(parallaxElements).filter(element => !element.classList.contains(".text")).forEach((element) => {
//     timeline.from("\"" + element.classList.value + "\"" , {
//         top: `${element.offsetHeight / 2 + Number(element.dataset.distance)}px` ,
//         duration: 3.5,
//         },
//         "1"
//     );
// });

// // parallaxElements.forEach(el => {
// //     console.log(el.classList.value);
// // });

// parallaxElements.forEach(el => console.log(el.classList.value));
