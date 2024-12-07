document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const triangle = document.querySelector(".triangle");

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("night");
    updateTriangleColor();
  });

  function updateTriangleColor() {
    if (body.classList.contains("night")) {
      triangle.style.borderLeftColor = "#2c3e50"; // night color
    } else {
      triangle.style.borderLeftColor = "#87CEEB"; // day color
    }
  }
  updateTriangleColor();
});
// Fungsi untuk menghasilkan bintang
function createStars(numStars) {
  const starsContainer = document.querySelector(".stars");

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Tetapkan posisi acak
    const top = Math.random() * 100; // 0% - 100%
    const left = Math.random() * 100; // 0% - 100%
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;

    // Tetapkan ukuran acak
    const size = Math.random() * 5 + 1; // Ukuran antara 1px dan 6px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Tambahkan bintang ke container
    starsContainer.appendChild(star);
  }
}

// Panggil fungsi untuk membuat 100 bintang
createStars(100);
