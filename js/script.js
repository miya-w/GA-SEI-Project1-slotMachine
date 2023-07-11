// Emoji Slot machine
// 1. render the emoji randomly 
// 2.winner-if three emojis in a row means win
// 3.  Wagering system : calculate the token, bet, lat win


/*----- constants -----*/
const AUDIO = new Audio();
const emojis = {
    1: "imgs/emoji_money-mouth_face.png",
    2: "imgs/emoji_red heart.png",
    3: "imgs/emoji_smiling face with heart-shaped eyes.png",
    4: "imgs/emoji_smiling face with sunglasses.png",
    5: "imgs/emoji_thinking face.png",
}
/*----- app's state (variables) -----*/
let lastWin = document.getElementById("latWin");
let token = document.getElementById("token")
let bid = document.getElementById("bid");


/*----- cached element references -----*/
const Emoji0_0 = document.getElementById('0_0');
const Emoji0_1 = document.getElementById('0_1');
const Emoji0_2 = document.getElementById('0_2');

const Emoji1_0 = document.getElementById('1_0');
const Emoji1_1 = document.getElementById('1_1');
const Emoji1_2 = document.getElementById('1_2');

const Emoji2_0 = document.getElementById('2_0');
const Emoji2_1 = document.getElementById('2_1');
const Emoji2_2 = document.getElementById('2_2');


function renderEmoji(){
  Emoji0_1.src = emojis[1];
  Emoji1_1.src = emojis[1];
  Emoji2_1.src = emojis[1];

  Emoji0_2.src = emojis[3];
  Emoji1_2.src = emojis[3];
  Emoji2_2.src = emojis[3];

  Emoji0_0.src = emojis[4];
  Emoji1_0.src = emojis[4];
  Emoji2_0.src = emojis[4];
  //console.log( Emoji2_1.src )
}



/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', spinEmoji);


/*----- functions -----*/
// innitialize the states
init()
function init() {
  lastWin= "";
  token.innerText = 100;
 
  renderEmoji();
}

function spinEmojiCol0(){
    //console.log('clicked!')
    // Get all the keys from the emojis object
  let keys = Object.keys(emojis);
  // Shuffle the keys array to randomize the order
  keys.sort(() => 0.5 - Math.random());
  // Select the first 3 keys from the shuffled array
 keys= keys.slice(0, 3);
  // Create a new object with the selected random items
  const randomEmojis = {};
  keys.forEach(key => {
    randomEmojis[key] = emojis[key];
});

Emoji0_0.src = randomEmojis[1];
Emoji0_1.src = randomEmojis[2];
Emoji0_2.src = randomEmojis[3];

console.log(randomEmojis);
}
function spinEmojiCol1(){
    //console.log('clicked!')
    // Get all the keys from the emojis object
  let keys = Object.keys(emojis);
  // Shuffle the keys array to randomize the order
  //const shuffledKeys = keys.sort(() => 0.5 - Math.random());
  // Select the first 3 keys from the shuffled array
  keys.sort(() => 0.5 - Math.random());
  keys= keys.slice(0, 3);
  // Create a new object with the selected random items
  const randomEmojis = {};
  keys.forEach(key => {
    randomEmojis[key] = emojis[key];
  })
  console.log(randomEmojis)

  Emoji1_0.src = randomEmojis[1];
  Emoji1_1.src = randomEmojis[2];
  Emoji1_2.src = randomEmojis[3];

// console.log(randomEmojis);
}

function spinEmojiCol2(){
    //console.log('clicked!')
    // Get all the keys from the emojis object
  let keys = Object.keys(emojis);
  // Shuffle the keys array to randomize the order
  keys.sort(() => 0.5 - Math.random());
  // Select the first 3 keys from the shuffled array
  keys = keys.slice(0, 3);
  // Create a new object with the selected random items
  const randomEmojis = {};
  keys.forEach(key => {
    randomEmojis[key] = emojis[key];
});

Emoji2_0.src = randomEmojis[1];
Emoji2_1.src = randomEmojis[2];
Emoji2_2.src = randomEmojis[3];

console.log(randomEmojis);
}


function spinEmoji(){
  spinEmojiCol0()
  spinEmojiCol1()
  spinEmojiCol2()
}

function renderControl(){

}