
const card = document.getElementById("birthdayCard");
const openButton = document.getElementById("openButton");
const backButton = document.getElementById("backButton");
const heartLayer = document.getElementById("heartLayer");


let isOpen = false;

function openCard() {
  isOpen = true;
  card.classList.add("is-open");
}

function closeCard() {
  isOpen = false;
  card.classList.remove("is-open");
}

openButton.addEventListener("click", (event) => {
  event.stopPropagation();
  openCard();

  for (let i = 0; i < 4; i++) {
    setTimeout(createHeart, i * 220);
  }
});

backButton.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  closeCard();
});


openButton.addEventListener("click", () => {
  if (isOpen) return;

  isOpen = true;
  card.classList.add("is-open");

  // A few hearts when the letter opens
  for (let i = 0; i < 4; i++) {
    setTimeout(createHeart, i * 220);
  }
});

backButton.addEventListener("click", () => {
  isOpen = false;
  card.classList.remove("is-open");
});

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

  heart.style.left = (10 + Math.random() * 80) + "%";
  heart.style.fontSize = (12 + Math.random() * 10) + "px";
  heart.style.animationDuration = (3.5 + Math.random() * 2) + "s";

  heartLayer.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

/* ==========================================
   PERSONAL DETAILS — CHANGE THESE FOR ORDERS
   ========================================== */

const PERSON_NAME = "TO MY MAN ♥️";
const SENDER_NAME = "Your Wifeyy ♡";

const MESSAGE = `
I never imagined I'd meet such a special person in my life. You bring to me a happiness that no one else ever could. You bring to me a love I have never known before. I could not imagine what my life would be like without you. I love being with you and I want to spend the rest of my life with you. You have given me so much, and I don't know if I will be able to give back all that you have given me.🥺

On this special day, I want you to know how deeply you are cherished. You've filled my life with so much happiness and love, and I'm beyond grateful to have you by my side. You make every day brighter, and I feel so blessed to be loved by someone as incredible as you. I hope your birthday is as amazing as you are.🥰

Whatever happens, I promise that you'll find me staying with you on your bad days. Even if you're not at your best, or even on your biggest or littlest happenings in your life, I'll be here with you. You can always count on me, bitch. I will always support and cheer for your goals and dreams even with all your delulus. And please know that I appreciate you and I am very proud of my bitch.😝✌️

Every day with you is a blessing, and I'm so thankful to God and to my mother in law for bringing you into my life. And I can proudly say that it was my best decision ever to choose you.
 
Words fail to capture just how special you are to me. You've become a part of me in a way I didn't think was possible, and I hope that this connection only grows as time goes on. Falling for you has been the best thing that ever happened to me. 

I wish that I could be right there beside you, holding you in my arms, kissing your forehead, and making you feel just how deeply you are loved. It hurts sometimes knowing that I can't be with you physically on your special day, that I can't see your beautiful smile right in front of me or hug you whenever I want to, but even though we're miles apart, my heart has never been closer to anyone else.

You're not just my boyfriend, you're my husband in my heart, my safe place, my happiness, my comfort, my favourite person, and the man I want to spend the rest of my life with. I wish I could magically appear beside you today, wrap my arms around you, look into your eyes, and tell you a thousand times how much you mean to me. I want to be the person who makes you smile when you're sad, the person you run to when everything feels overwhelming, and the person who reminds you how precious and loved you are when you forget it yourself.😌

I know long distance relationships aren't always easy. There are days when we'll miss each other terribly, days when the distance feels unfair, and moments when all we'll want is to be in each other arms instead of staring at a screen. But baby, I want you to know that you're worth every mile, every sleepless night, every second of waiting, and every tear that comes from missing you. I would choose you in a thousand lifetimes, in a thousand different worlds, and in every possible version of my life.

No matter how far life takes us, I hope we always find our way back to each other. One day, this distance will be nothing more than a chapter in our love story, and we'll look back at these days while holding each other close, knowing that every moment of waiting was worth it. Until then, it's you, always you, in every lifetime, in every universe, and in every dream of my future. I LOVE YOU SO MUCH, MY LOVE. HAPPIEST BIRTHDAY TO MY MAN. Mwah ❤️🫂💋`;

document.getElementById("personName").textContent = PERSON_NAME;
document.getElementById("senderName").textContent = SENDER_NAME;
document.getElementById("birthdayMessage").textContent = MESSAGE;
