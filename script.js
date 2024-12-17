const facts = [
  "Iron Man's suit was inspired by a mix of real-world technology and creative design. It’s a symbol of Tony Stark’s personality.",
  "The first MCU movie, Iron Man (2008), was almost entirely funded by Marvel themselves, marking a huge gamble.",
  "The Hulk's massive size in the MCU was achieved through motion capture, with actor Mark Ruffalo giving the performance.",
  "Chris Hemsworth originally auditioned for the role of Thor while he was training for a role in a different film.",
  "The character of Black Widow was not originally planned to have her own solo film, but fan interest made it happen.",
  "Robert Downey Jr. was so confident that Iron Man would be successful, he said: 'If this doesn't work, I’ll eat a tuna fish sandwich on camera.'",
  "The Avengers' 'Team Cap vs. Team Iron Man' storyline in Civil War was inspired by a 2006 Marvel Comics event of the same name.",
  "Tom Hiddleston (Loki) was a last-minute choice to play the villain in Thor, after several other actors were considered.",
  "Stan Lee made cameo appearances in nearly every MCU movie before his passing in 2018. His last cameo was in Avengers: Endgame.",
  "The character of Vision was created by combining the personalities of both Jarvis and Ultron in Avengers: Age of Ultron."
];

const factElement = document.getElementById("fact");
const newFactButton = document.getElementById("new-fact-btn");

function generateRandomFact() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  factElement.textContent = randomFact;
}


generateRandomFact();


newFactButton.addEventListener("click", () => {
  generateRandomFact();
});
