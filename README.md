# 202307 GA SEI Project 1 - Emoji Slot Machine
This project is for General Assembly's Software Engineering Immersive, a JavaScript browser-based game developed in a week.

![slot-machine](https://github.com/miya-w/GA-SEI-Project1-slotMachine/blob/main/imgs/emojiSlotMachine.png)

## Deployment
Deployed this game on GitHub Pages [-> Emoji Slot Machine ](https://miya-w.github.io/GA-SEI-Project1-slotMachine/)

## Technologies Used

- HTML5
- CSS3 
- JavaScript (ES6)
- GitHub Pages
- Google Fonts


## User Stories & Rules
- Select the Number of Bids: Before starting the game, the player must choose the number of bids they want to place. This determines the amount of money or credits they are willing to wager.

- Click the Spin Button: Once the player has selected their desired number of bids, they can click the spin button to initiate the slot machine. The reels will start spinning, and the excitement begins!

- Reel Composition: The slot machine consists of three columns, each displaying three emojis. There are a total of nine emojis to choose from, and for each spin, three random emojis are selected for each column. The combination of these emojis determines the outcome of the game.

- Winning Combinations:
a. Three Same Emojis in the Middle Row: The ultimate goal is to align three identical emojis in the middle row of the slot machine. If this happens, the player wins a reward equal to 10 times their bid.
b. Two Same Emojis in a Row: In addition to the middle row win, if the player manages to align two identical emojis in any other row, they win a reward equal to 3 times their bid.

- Losing Scenario: If the emojis on the reels do not form any winning combinations as mentioned above, the player does not win any rewards, and their bid is lost.

Repeat and Enjoy: The player can repeat the process by selecting a new bid amount and clicking the spin button. The randomness of the emoji selection on each spin keeps the game engaging and unpredictable, adding to the excitement of potential wins.


## Code process

#### Step 1: Set Up
- Set all the global state variables required for the game.
- Create an object to store the URLs of all the emoji images.
- Create constants for all the required DOM elements.
- Set the initial state of the game, including the token balance and last win.
```javascript 

```


#### Step 2: Create the SpinCol Function
- Implement the spinCol() function, which is responsible for randomly selecting emojis for each column of the slot machine.
- Inside the function, generate random numbers to determine the index of the chosen emojis from the emoji image URLs object.
- Update the DOM elements to display the selected emojis in each column.
 ```javascript
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
 ```
#### Step 3: Implement the Wagering System
- Set up the wagering system to allow the player to place bids or wagers.
- Use if-else conditions to determine the winning combinations based on the alignment of emojis on the reels.
- Update the token balance based on the outcome of the spin.
- Use DOM manipulation to display the current token balance and the amount won in the previous spin.
```javascript
function CheckJackpot(){
  const emoji0_1Src = Emoji0_1.src;
  const emoji1_1Src = Emoji1_1.src;
  const emoji2_1Src = Emoji2_1.src;

  if (emoji0_1Src === emoji1_1Src && emoji1_1Src === emoji2_1Src ) {
    //The emojis are the same
    let winnings = initialToken + 10 * newBid; 
  
    initialToken = winnings;  
    token.innerHTML = winnings;
    lastWin.innerHTML =10 *newBid;

  }else if(emoji0_1Src === emoji1_1Src || emoji1_1Src === emoji2_1Src || emoji0_1Src === emoji2_1Src ){
    let winnings = initialToken + 3*newBid;
    lastWin.innerHTML = 3*newBid;
    initialToken = winnings;  
    token.innerHTML = winnings;
  
  }
   else {
    // The emojis are different
    console.log("Emojis are different");
  }

}
```

#### Step 4: User Interaction
`document.querySelector('#spinBtn').addEventListener('click', spinEmoji);`
- Implement event listeners or buttons to allow the player to interact with the game, such as selecting the number of bids and initiating the spin.
- Handle user input and trigger the necessary functions accordingly.

```javascript
function spinEmoji(){
  if(initialToken > 0){
  initialToken -= newBid; 
  token.innerHTML = initialToken
  console.log(`Now, you have token $${initialToken}`)
  spinEmojiCol0()
  spinEmojiCol1()
  spinEmojiCol2()
  CheckJackpot()}else{
    console.log("Insufficient balance. Please add more funds.")
  }
}
```


#### Step 5: Repeat and Enjoy
- Provide the functionality to repeat the game by allowing the player to select a new bid amount and initiate the spin again.


## Biggest challenge

```javascript
const randomEmojis = [];
  keys.forEach(key => {
  randomEmojis.push(emojis[key])
  Emoji2_0.src = randomEmojis[0];
  Emoji2_1.src = randomEmojis[1];
  Emoji2_2.src = randomEmojis[2];
  });
```
One of the main challenges was when I set randomEmojis as an object `const randomEmojis = { };` instead of an array`const randomEmojis = [];`. This caused issues when trying to render the emoji images in the browser because I mistakenly assumed that the order of the items in the object would match the index as in an array. This confusion between the features of arrays and objects caused difficulties in displaying the emoji images correctly.


## Key learnings/takeaways
- The differences between objects and arrays and when to use each data structure. In this case, using an array would have been more appropriate for maintaining the order of emoji images.
- `if-else` conditions to implement the wagering system and determine winning conditions based on the alignment of emojis.
- Document Object Model (DOM) to update and manipulate data on the web page, such as updating the token balance and displaying the results of the spin.

## Next Steps: Planned future enhancements (icebox items).
- Enhance the slot machine game, here are some planned future enhancements, specifically focusing on designing different winning conditions: Additional Winning Combinations: Currently, the game recognizes winning combinations of three same emojis in the middle row and two same emojis in any row. To make the game more engaging, consider adding more winning combinations, such as specific patterns across the reels. 


### Resources

- [Project 1 Browser-based Game](https://git.generalassemb.ly/seir66anz/project-1-brief)
- [project-1-brief](https://git.generalassemb.ly/seir66anz/project-1-brief/blob/main/project-1-code-review.pdf)