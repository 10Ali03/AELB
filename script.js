
document.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll("h1 span");
  spans.forEach((span, index) => {
    span.style.setProperty('--i', index + 1);
  });
});


