let leftStep = document.querySelector(".step");
let rightStep = leftStep.nextElementSibling.nextElementSibling;
// const preStep = firstStep.previousElementSibling.previousElementSibling;

console.dir(leftStep);
console.dir(rightStep);

const firstBar = document.querySelector(".bar");
const nextBar = firstBar.nextElementSibling.nextElementSibling;
// const preBar = preStep.previousElementSibling.previousElementSibling;

// const firstBarInner = document.querySelector(".bar-inner");
// const nextbarInner = firstBarInner.parentElement.nextBar.children;

const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".prev");

nextButton.addEventListener("click", handleClick);

function handleClick() {
  console.log("clicked");

  console.log(leftStep.classList);
  console.log(rightStep.classList);

  if (
    leftStep.classList.contains("active") &&
    !rightStep.classList.contains("active")
  ) {
    rightStep.classList.toggle("active");

    leftStep = rightStep;
    rightStep = rightStep.nextElementSibling.nextElementSibling;
  }
  // if (
  //   firstBarInner.classList.contains("active") &&
  //   !nextbarInner.contains("active")
  // ) {
  //   return nextbarInner.classList.toggle("active");
  // }
}
