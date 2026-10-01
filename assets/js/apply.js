let currentStep = 0;
const steps = document.querySelectorAll(".form-step");

function nextStep() {
  steps[currentStep].classList.remove("active");
  currentStep++;
  steps[currentStep].classList.add("active");
}

function submitForm() {
  steps[currentStep].classList.remove("active");
  document.getElementById("successStep").classList.add("active");

  // Redirect back to jobs.html after 3 seconds
  setTimeout(() => {
    window.location.href = "jobs.html";
  }, 3000);
}
