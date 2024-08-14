const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const steps = document.querySelector(".steps");

console.dir(steps);

const stepList = steps.querySelectorAll(".step");
const barInnerList = steps.querySelectorAll(".bar-inner");

const length = stepList.length;

console.dir(stepList);
console.dir(barInnerList);

let currentStep = 1;

nextBtn.addEventListener("click", () => {
  currentStep++;
  updateSteps();
});

prevBtn.addEventListener("click", () => {
  currentStep--;
  updateSteps();
});

function updateSteps() {
  for (let i = 0; i < length; i++) {
    if (i < currentStep) {
      stepList[i].classList.add("active");
      if (i > 0) {
        barInnerList[i - 1].classList.add("active");
      }
    } else {
      stepList[i].classList.remove("active");
      if (i > 0) {
        barInnerList[i - 1].classList.remove("active");
      }
    }
  }
}
