const firstStep = document.querySelector(".step");
const nextStep = firstStep.nextElementSibling.nextElementSibling;
const preStep = firstStep.previousElementSibling.previousElementSibling;

console.dir(firstStep);
console.dir(nextStep);

const firstBar = document.querySelector(".bar");
const nextBar = firstBar.nextElementSibling.nextElementSibling;
const preBar = preStep.previousElementSibling.previousElementSibling;

const firstBarInner = document.querySelector(".bar-inner");
const nextbarInner = firstBarInner.parentElement.nextBar.children;

const nextButton = document.querySelector(".next btn");
const previousButton = document.querySelector(".prev btn");

nextButton.addEventListener("click", handleClick);

function handleClick() {
  if (
    firstStep.classList.contains("active") &&
    !nextStep.classList.contains("active")
  ) {
    return nextStep.classList.toggle("active");
  }
  if (
    firstBarInner.classList.contains("active") &&
    !nextbarInner.contains("active")
  ) {
    return nextbarInner.classList.toggle("active");
  }
}
