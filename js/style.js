const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".menu-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}


// // Hero carousel
// const slider1 = document.querySelector("#glide1");
// if (slider1) {
//   new Glide(slider1, {
//     type: "carousel",
//     startAt: 0,
//     autoplay: 6000,
//     gap: 0,
//     hoverpause: true,
//     perView: 1,
//     animationDuration: 800,
//     animationTimingFunc: "linear",
//   }).mount();
// }