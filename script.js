document.addEventListener("DOMContentLoaded", () => {

  /* SLIDESHOW */
  const photos = [
    "./photos/photo1.jpg",
    "./photos/photo2.jpg"
  ];

  let index = 0;
  const slide = document.getElementById("slide");

  if (slide) {
    setInterval(() => {
      slide.style.opacity = 0;

      setTimeout(() => {
        index = (index + 1) % photos.length;
        slide.src = photos[index];
        slide.style.opacity = 1;

        // ❤️ Heart pulse
        slide.classList.remove("heart-pulse");
        void slide.offsetWidth;
        slide.classList.add("heart-pulse");
      }, 500);
    }, 3000);
  }

  /* MUSIC FADE-IN */
  const music = document.getElementById("bgMusic");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const response = document.getElementById("response");

  if (music) music.volume = 0;

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

  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      fadeInMusic();

      response.innerHTML = `
        You have my heart today,<br>
        tomorrow, and forever. ❤️<br><br>
        Happy Valentine’s Day, Tanuu.
      `;

      setInterval(createHeart, 600);
    });
  }

  if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

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
