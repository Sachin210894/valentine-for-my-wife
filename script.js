const photos = [
  "photos/photo1.jpg",
  "photos/photo2.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

/* MUSIC FADE IN */
const music = document.getElementById("bgMusic");
music.volume = 0;

/* BUTTONS */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

/* SLIDESHOW */
setInterval(() => {
  slide.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % photos.length;
    slide.src = photos[index];
    slide.style.opacity = 1;
  }, 500);
}, 3000);

/* YES CLICK */
yesBtn.addEventListener("click", () => {
  response.innerHTML = `
    You have my heart today,<br>
    tomorrow, and forever ❤️
  `;

  music.play();
  let vol = 0;
  const fade = setInterval(() => {
    vol += 0.05;
    music.volume = Math.min(vol, 1);
    if (vol >= 1) clearInterval(fade);
  }, 200);

  createKiss();
});

/* NO BUTTON RUN */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* SPARKLES */
setInterval(() => {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.style.left = Math.random() * window.innerWidth + "px";
  s.style.bottom = "0px";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 2000);
}, 300);

/* KISS */
function createKiss() {
  const k = document.createElement("div");
  k.className = "kiss";
  k.innerText = "💋";
  k.style.left = "50%";
  k.style.top = "50%";
  document.body.appendChild(k);
  setTimeout(() => k.remove(), 1500);
}
