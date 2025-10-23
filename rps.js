let BotPick = ["rock", "paper", "scissors"];

// bot buttons
const brock = document.getElementById("Brock");
const bpaper = document.getElementById("Bpaper");
const bscissors = document.getElementById("Bscissors");

// player buttons
const prock = document.getElementById("Prock");
const ppaper = document.getElementById("Ppaper");
const pscissors = document.getElementById("Pscissors");

// result elements
const bresults = document.getElementById("BResults");
const presults = document.getElementById("PResults");
const results = document.getElementById("Results"); // Add this div in HTML for messages

// global scores
let bpoints = 0;
let ppoints = 0;

const botmove = () => {
  const randomIndex = Math.floor(Math.random() * BotPick.length);
  const finalChoice = BotPick[randomIndex];

  // reset sizes
  brock.style.width = bpaper.style.width = bscissors.style.width = "100px";
  brock.style.height = bpaper.style.height = bscissors.style.height = "100px";

  // highlight the bot's move
  if (finalChoice === "rock") {
    brock.style.width = "150px";
    brock.style.height = "150px";
  } else if (finalChoice === "paper") {
    bpaper.style.width = "150px";
    bpaper.style.height = "150px";
  } else if (finalChoice === "scissors") {
    bscissors.style.width = "150px";
    bscissors.style.height = "150px";
  }

  return finalChoice;
};

const playermove = (playerChoice) => {
  const botChoice = botmove();
  console.log(`Bot picked: ${botChoice}`);

  if (playerChoice === botChoice) {
    results.textContent = "It's a tie!";
  } else if (
    (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissors" && botChoice === "paper")
  ) {
    ppoints++;
    presults.textContent = ppoints;
    results.textContent = "You win this round!";
  } else {
    bpoints++;
    bresults.textContent = bpoints;
    results.textContent = "Bot wins this round!";
  }
};

// event listeners
prock.addEventListener("click", () => playermove("rock"));
ppaper.addEventListener("click", () => playermove("paper"));
pscissors.addEventListener("click", () => playermove("scissors"));
