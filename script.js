const facts = [
    "The Marvel Cinematic Universe began with the release of 'Iron Man' in 2008.",
    "Robert Downey Jr. was the first actor cast in the MCU, playing Tony Stark/Iron Man.",
    "The MCU is divided into phases, with each phase consisting of a series of interconnected films.",
    "The Avengers, released in 2012, was the first film to bring together multiple superheroes from different MCU films.",
    "The MCU is known for its post-credit scenes, which often tease future films or plotlines.",
    "The character of Thanos, portrayed by Josh Brolin, is the main antagonist in the Infinity Saga.",
    "Black Panther, released in 2018, was the first MCU film to win an Academy Award.",
    "The MCU has expanded to include television series on Disney+, starting with 'WandaVision' in 2021.",
    "The MCU's highest-grossing film is 'Avengers: Endgame', which surpassed $2.7 billion worldwide.",
    "Stan Lee, co-creator of many Marvel characters, made cameo appearances in most MCU films until his passing in 2018."
];

document.getElementById('generateFactButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
