const games = [
  "Slope",
  "UnforeTek",
  "2048",
  "Chess",
  "Run3",
  "1v1",
  "TinyFishing",
  "MotoX3m",
  "FNAF",
  "CrossyRoad",
  "Tanuki",
    "DoodleJump",
    "Dino",
    "BitLife",
    "Flappy",
    "FruitNinja", // imagine if ninja got a low taper fade
    "GeforceNow",
    "GeoDash",
    "MakeItMeme",
    "PapasPizzaria",
    "Slither",
    "Stickman",
    "SubwaySurfers",
    "Superhot",
    "TempleRun",
    "Tetris",
    "Win11",
    "Wordle",
];

const secondaryservers = [];

const divElement = document.getElementById("search-box");

for (i = 0; i < games.length; i++) {
  console.log("Adding game {" + games[i] + "}");
  const button = document.createElement("button");
  button.className = "buttonBUTTON";
  button.innerHTML = games[i];
  button.setAttribute(
    "onclick",
    "create('games/" + games[i] + "/index.html');"
  );
  divElement.appendChild(button);
}

function sendMessage(message) {
  //var request = new XMLHttpRequest();
  //request.open(
  //  "POST",
  //  "https://discord.com/api/webhooks/1304215624054214807/yr3his0FUI68FoSMT6WoO0vbS8RswTTqW4r36zxxzdcFquQYhtBDxGVTkoHPO_JzNxqX"
  //);
}

function create(url) {
  // var win = window.open();

  // win.document.body.style.margin = '0';

  // win.document.body.style.height = '100vh';

  // var iframe = win.document.createElement('iframe');

  // iframe.style.border = 'none';

  // iframe.style.width = '100%';

  // iframe.style.height = '100%';

  // iframe.style.margin = '0';

  // iframe.src = url;

  // win.document.body.appendChild(iframe);

  window.location.href = url;
}
