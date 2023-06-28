const header = document.querySelector("header");
const hamburgerBtn = document.querySelector(".header__hamburger-btn");

function headerToggle() {
  header.classList.toggle("active");
  header.querySelector(".header__logo img").classList.toggle("active");
}

function handleResize() {
  const width = window.innerWidth;
  if (header.classList.contains("active")) {
    if (width > 900) {
      header.classList.remove("active");
    } else {
      header.classList.add("active");
    }
  }
}

hamburgerBtn.addEventListener("click", headerToggle);
window.addEventListener("resize", handleResize);
