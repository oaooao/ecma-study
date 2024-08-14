// const n = 4;
let step = 1;

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const balls = document.querySelectorAll(".step");
const ball1 = balls[0];
const ball2 = balls[1];
const ball3 = balls[2];
const ball4 = balls[3];

nextBtn.addEventListener("click", handleNext);
prevBtn.addEventListener("click", handlePrev);

function handleNext() {
  step++;

  render(step);
}

function handlePrev() {
  step--;

  render(step);
}

// function render(step) {
//   if (step === 1) {
//     ball1.classList.add("active");
//     ball2.classList.remove("active");
//     ball3.classList.remove("active");
//     ball4.classList.remove("active");
//   }

//   if (step === 2) {
//     ball1.classList.add("active");
//     ball2.classList.add("active");
//     ball3.classList.remove("active");
//     ball4.classList.remove("active");
//   }

//   if (step === 3) {
//     ball1.classList.add("active");
//     ball2.classList.add("active");
//     ball3.classList.add("active");
//     ball4.classList.remove("active");
//   }

//   if (step === 4) {
//     ball1.classList.add("active");
//     ball2.classList.add("active");
//     ball3.classList.add("active");
//     ball4.classList.add("active");
//   }
// }

function render(step) {
  for (let i = 0; i < n; i++) {
    const currentBall = balls[i];

    if (i < step) {
      // 亮
      currentBall.classList.add("active");
    } else {
      // 不亮
      currentBall.classList.remove("active");
    }
  }
}
