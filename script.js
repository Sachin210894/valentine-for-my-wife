const photos = [
  "photos/photo1.jpg",
  "photos/photo2.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

const music = document.getElementById("bgMusic");
const yesBtn1 = document.getElementById("yesBtn");

yesBtn1.addEventListener("click", () => {
  music.play().catch(err => {
    console.log("Autoplay blocked:", err);
  });

  document.getElementById("response").innerText =
    "Yayyy! ❤️ You made my heart the happiest!";
});

setInterval(() => {
  index = (index + 1) % photos.length;
  slide.src = photos[index];
}, 3000);

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.innerHTML = `
    You have my heart today,<br>
    tomorrow, and forever. ❤️<br><br>
    Happy Valentine’s Day, Tanuu.
  `;
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
