// Emoji Slot machine
// 1. render the emoji randomly, 3 from 9 each column.
// 2.winner-if three emojis in a row means hit the jack-pot
// 3.  Wagering system : calculate the token, bet, lat win

/*----- constants -----*/
const AUDIO = new Audio();
//var audio = document.getElementById("AUDIO");
const emojis = {
    1: "imgs/emoji_money-mouth_face.png",
    2: "imgs/emoji_red heart.png",
    3: "imgs/emoji_smiling face with heart-shaped eyes.png",
    4: "imgs/emoji_smiling face with sunglasses.png",
    5: "imgs/emoji_thinking face.png",
    6: "imgs/emoji_2377.png",
    7: "imgs/emoji_2378.png",
    8: "imgs/emoji_2379.png",
    9: "imgs/emoji_2380.png"
}
/*----- app's state (variables) -----*/
let lastWin;
let token;
let bid;
let newBid;

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

  Emoji0_2.src = emojis[2];
  Emoji1_2.src = emojis[3];
  Emoji2_2.src = emojis[8];

  Emoji0_0.src = emojis[4];
  Emoji1_0.src = emojis[5];
  Emoji2_0.src = emojis[9];
}



/*----- event listeners -----*/
document.querySelector('#spinBtn').addEventListener('click', spinEmoji);

/*----- functions -----*/
// innitialize the states
init()

function init() {
  lastWin = document.getElementById("latWin");
  token = document.getElementById("token");
  bid = document.getElementById("bid-input");
  lastWin.innerHTML = 0;
  newBid = 1;
  initialToken = 100;
  token.innerHTML = initialToken;
  
  renderEmoji();
}

function changeBid(){
  newBid = bid.value;
  console.log(newBid)
}

function spinEmojiCol0(){
    // Object.keys() returns keys(index) of an object in array
  let keys = Object.keys(emojis);
  
  // Shuffle the keys array to randomize the order
  keys.sort(() => 0.5 - Math.random());
  // Select the first 3 keys from the shuffled array
  keys= keys.slice(0, 3);
  // Create a new object with the selected random items
  const randomEmojis = [];
  keys.forEach(key => {
//     randomEmojis[key] = emojis[key];
randomEmojis.push(emojis[key])
});


Emoji0_0.src = randomEmojis[0];
Emoji0_1.src = randomEmojis[1];
Emoji0_2.src = randomEmojis[2];
}

function spinEmojiCol1(){
  // Object.keys() returns keys(index) of an object in array
let keys = Object.keys(emojis);

// Shuffle the keys array to randomize the order
keys.sort(() => 0.5 - Math.random());
// Select the first 3 keys from the shuffled array
keys= keys.slice(0, 3);
// Create a new object with the selected random items
const randomEmojis = [];
keys.forEach(key => {
//     randomEmojis[key] = emojis[key];
randomEmojis.push(emojis[key])


Emoji1_0.src = randomEmojis[0];
Emoji1_1.src = randomEmojis[1];
Emoji1_2.src = randomEmojis[2];
});

}

function spinEmojiCol2(){
  // Object.keys() returns keys(index) of an object in array
  let keys = Object.keys(emojis);

  // Shuffle the keys array to randomize the order
  keys.sort(() => 0.5 - Math.random());
  // Select the first 3 keys from the shuffled array
  keys= keys.slice(0, 3);
  // Create a new object with the selected random items
  const randomEmojis = [];
  keys.forEach(key => {
  randomEmojis.push(emojis[key])
  Emoji2_0.src = randomEmojis[0];
  Emoji2_1.src = randomEmojis[1];
  Emoji2_2.src = randomEmojis[2];
  });

}


function spinEmoji(){
  if(initialToken > 0){
  initialToken -= newBid; 
  token.innerHTML = initialToken
  console.log(initialToken)
  spinEmojiCol0()
  spinEmojiCol1()
  spinEmojiCol2()
  CheckJackpot()}else{
    console.log("Insufficient balance. Please add more funds.")
  }

}

function CheckJackpot(){
  const emoji0_1Src = Emoji0_1.src;
  const emoji1_1Src = Emoji1_1.src;
  const emoji2_1Src = Emoji2_1.src;

  if (emoji0_1Src === emoji1_1Src && emoji1_1Src === emoji2_1Src ) {
    //The emojis are the same
    let winnings = initialToken + 10* newBid; 
  
    initialToken = winnings;  
    token.innerHTML = winnings;
    lastWin.innerHTML = 10* newBid;
    console.log(`last win$${10*newBid}`)
    console.log(`Congratulations! You won $${winnings}`); 
    console.log("Bingo!!!!!Emojis are the same");
  }else if(emoji0_1Src === emoji1_1Src || emoji1_1Src === emoji2_1Src || emoji0_1Src === emoji2_1Src ){
    let winnings = initialToken + 5* newBid;
    lastWin.innerHTML = 5*newBid;
    console.log(`last win$${5*newBid}`)
    console.log(`Congratulations! You won $${winnings}`);  
    initialToken = winnings;  
    token.innerHTML = winnings;
    console.log("WooHoo!!!!! Two Emojis are the same");
  }
   else {
    // The emojis are different
    console.log("Emojis are different");
  }

}




