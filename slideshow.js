document.addEventListener("DOMContentLoaded", () => {

  /* ================= SLIDESHOW ================= */
  const slides = document.querySelectorAll(".slide");
  let slideIndex = 0;

  if (slides.length > 1) {
    setInterval(() => {
      slides[slideIndex].classList.remove("active");
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].classList.add("active");
    }, 4500);
  }

  /* ================= ROTATING LOVE MESSAGES ================= */
  const loveMessages = [
    "Every moment with you feels like home.",
    "Loving you is my favorite thing to do.",
    "You are my peace, my joy, my everything.",
    "No matter where life takes us, I choose you.",
    "You are the best part of my every day."
  ];

  const loveText = document.getElementById("love-text");
  let messageIndex = 0;

  function changeMessage() {
    loveText.style.opacity = 0;

    setTimeout(() => {
      loveText.textContent = loveMessages[messageIndex];
      loveText.style.opacity = 1;
      messageIndex = (messageIndex + 1) % loveMessages.length;
    }, 600);
  }

  if (loveText) {
    loveText.textContent = loveMessages[0];
    setInterval(changeMessage, 4000);
  }

  /* ================= PARALLAX HERO ================= */
  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    if (hero) {
      hero.style.backgroundPositionY =
        window.pageYOffset * 0.4 + "px";
    }
  });

  /* ================= SECRET HEART UNLOCK ================= */
  const secretHeart = document.getElementById("secretHeart");
  const secretModal = document.getElementById("secretModal");
  const closeSecret = document.getElementById("closeSecret");

  if (secretHeart && secretModal && closeSecret) {
    secretHeart.addEventListener("click", () => {
      secretModal.classList.add("active");
    });

    closeSecret.addEventListener("click", () => {
      secretModal.classList.remove("active");
    });

    secretModal.addEventListener("click", (e) => {
      if (e.target === secretModal) {
        secretModal.classList.remove("active");
      }
    });
  }

});
