document.addEventListener("DOMContentLoaded", () => {

  /* IMAGES */
  const photos = [
    "./photos/photo1.jpg",
    "./photos/photo2.jpg"
  ];

  let index = 0;
  const slide = document.getElementById("slide");

  // Ensure image is visible initially
  slide.style.opacity = 1;

  // PRELOAD IMAGES
  const preloaded = photos.map(src => {
    const img = new Image();
    img.src = src;
    return img;
  });

  /* SLIDESHOW */
  setInterval(() => {
    slide.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % photos.length;

      const nextImage = new Image();
      nextImage.src = photos[index];

      nextImage.onload = () => {
        slide.src = nextImage.src;
        slide.style.opacity = 1;

        // ❤️ Heart pulse sync
        slide.classList.remove("heart-pulse");
        void slide.offsetWidth;
        slide.classList.add("heart-pulse");
      };
    }, 500);

  }, 3000);

  /* MUSIC FADE-IN */
  const music = document.getElementById("bgMusic");
  music.volume = 0;

  function fadeInMusic() {
    let vol = 0;
    music.play().catch(() => {});
    const fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        music.volume = Math.min(vol, 1);
      } else {
        clearInterval(fade);
      }
    }, 200);
  }

  /* BUTTONS */
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const response = document.getElementById("response");

  yesBtn.addEventListener("click", () => {
    fadeInMusic();

    response.innerHTML = `
      You have my heart today,<br>
      tomorrow, and forever. ❤️<br><br>
      Happy Valentine’s Day, Tanuu.
    `;

    setInterval(createHeart, 600);
  });

  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  /* FLOATING HEARTS */
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }

});
