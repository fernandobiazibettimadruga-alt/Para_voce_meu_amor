const musicList = [
  "./imagens/musica1.mp3",
  "./imagens/musica2.mp3",
  "./imagens/musica3.mp3",
  "./imagens/musica4.mp3"
];

let currentMusic = Math.floor(Math.random() * musicList.length);
const musicPlayer = document.getElementById("music");

const INITIAL_VOLUME = 0.2;
const FADE_DURATION = 5000;

function startLove() {
  document.getElementById("intro").style.display = "none";
  playMusic();
}

function playMusic() {
  musicPlayer.src = musicList[currentMusic];
  musicPlayer.volume = INITIAL_VOLUME;

  const playPromise = musicPlayer.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {});
  }

  fadeInMusic();
}

function fadeInMusic() {
  let step = 0.01;
  let intervalTime = FADE_DURATION / ((1 - INITIAL_VOLUME) / step);

  const fade = setInterval(() => {
    if (musicPlayer.volume < 1) {
      musicPlayer.volume = Math.min(musicPlayer.volume + step, 1);
    } else {
      clearInterval(fade);
    }
  }, intervalTime);
}

musicPlayer.addEventListener("ended", () => {
  currentMusic = (currentMusic + 1) % musicList.length;
  playMusic();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    musicPlayer.pause();
  }
});

const message = "Meu amor, eu fiz isso para tentar mostrar, nem que seja um pouquinho, o tamanho do amor que sinto por você, porque você é tudo para mim.";
let index = 0;

function typeWriter() {
  if (index < message.length) {
    document.getElementById("loveText").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

window.onload = typeWriter;

function showLetter() {
  const letter = document.getElementById("letter");
  letter.style.display = "block";
  letter.scrollIntoView({ behavior: "smooth" });
}

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 800);
