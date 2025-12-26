document.body.addEventListener("click", (event) => {
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.textContent = "Hello";

  // Mouse position
  const x = event.clientX;
  const y = event.clientY;

  // Position the circle at click point
  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 25}px`;

  // Random colors
  const colors = ["red", "blue", "orange", "green", "purple", "pink","yellow","emerald"];
  circle.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(circle);

  // Remove after animation
  setTimeout(() => {
    circle.remove();
  }, 5000);
});
