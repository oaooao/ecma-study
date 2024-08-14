const btn = document.querySelector(".btn");
const railInner = document.querySelector(".rail-inner");

// btn.addEventListener("click", () => {
//   circle.style.borderColor = "palevioletred";
// });

// btn.addEventListener("click", () => {
//   circle.classList.toggle("active");
// });

btn.addEventListener("click", () => {
  railInner.classList.toggle("active");
});
