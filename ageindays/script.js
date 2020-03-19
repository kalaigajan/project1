function ageindays(){
    var birthyear = prompt("what year do you born");
    var currentyear = 2019;
    var ageindayss = (currentyear - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('Age' + ageindayss);
    console.log(textAnswer);
    h1.setAttribute('id','ageindayss');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}


function reset() {
    document.getElementById('ageindayss').remove();
}

function generateitem() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-gen')
    image.src = "file:///Users/kalaigajan/Documents/download.jpeg";
    div.appendChild(image);
}

function rpsGame(yourChoice) {
//console.log(yourChoice);
var humanChoice, botChoice;
var message;
humanChoice = yourChoice.id;
botChoice = numberToChoice(RandTorpsInt());
console.log('Computer choice:', botChoice);
results = decideWinner(humanChoice, botChoice);
console.log(results);
message = finalmessage(results);
console.log(results);
rpsFrontEnd(yourChoice.id, botChoice, message);
}

function RandTorpsInt(){
    return Math.floor(Math.random() * 3);
}


function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice) {

    var rpsDatabase = { 
        'rock' : {'scissor':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissor':0},
        'scissor': {'paper':1, 'scissor':0.5, 'rock':0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}
    
    function finalmessage([yourScore, computerScore]) {
        if (yourScore === 0) {
            return {'message': 'you lost!', 'color': 'red'}; }
           else if (yourScore === 0.5) {
            return {'message': 'you tied!', 'color': 'yellow'}; }
            else {
             return {'message': 'you won!', 'color': 'green'}; }
            
        }

 function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
     var imagesDatabase = {
         'rock': document.getElementById('rock').src,
         'paper': document.getElementById('paper').src,
         'scissor': document.getElementById('scissor').src 
     }

     //lets remove all the images
     document.getElementById('rock').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissor').remove();


     var humanDiv = document.createElement('div');
     var botDiv = document.createElement('div');
     var MessageDiv = document.createElement('div');

     humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
     MessageDiv.innerHTML ="<h1 style= 'color: " + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>";
     botDiv.innerHTML = "<img src='" +imagesDatabase[botImageChoice] + "' height=150 width= 150 style='box-shadow: 0px 10px 50px rgba(233,38,24,1);'>"
     
     document.getElementById('flex-box-rps-div').appendChild(humanDiv);
     document.getElementById('flex-box-rps-div').appendChild(MessageDiv);  
     document.getElementById('flex-box-rps-div').appendChild(botDiv);    
    }


    var all_buttons = document.getElementsByTagName('button');
     console.log(all_buttons);

    var copyAllButtons = [];
    for(let i=0; i<all_buttons.length; i++) {
        copyAllButtons.push(all_buttons[i].classList[1]);
    }

    //console.log(copyAllButtons);
    
    function buttonColorChange(buttonThingy) {
        if (buttonThingy.value === 'red') {
            buttonsRed();
        } else if (buttonThingy.value === 'green') {
            buttonsGreen();
        } else if (buttonThingy.value === 'reset') {
            buttonsreset();
        } else if (buttonThingy.value === 'random') {
            randomcolors();
        }
    }

    function buttonsRed() {
        for(let i=0; i < all_buttons.length; i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-danger');
            }
    }

    function buttonsGreen() {
        for(let i=0; i < all_buttons.length; i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-success');
            }
    }

    function buttonsreset() {
        for(let i=0; i < all_buttons.length; i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(copyAllButtons[i]);
            }
    }

    function randomcolors() {

        let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'] 
       
        for(let i=0; i < all_buttons.length; i++) {
            var randomNumber =  Math.floor(Math.random() * 4);
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(choices[randomNumber]);
            }
    }

     let blackjackGame ={
         'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score':0},
         'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score':0},
     };

     const YOU = blackjackGame['you']
     const DEALER = blackjackGame['dealer']

     const hitSound = new Audio('file:///Users/kalaigajan/Documents/ageindays/sounds/swish.m4a');

    document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);

    document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackDeal);



    function blackjackHit() { 
       showCard(YOU);
        // alert('Ouch, you just clicked me');
    }

    function showCard(activePlayer) {
        let cardImage = document.createElement('img');
        cardImage.src = 'file:///Users/kalaigajan/Documents/ageindays/images/Q.png';
        document.querySelector(DEALER['div']).appendChild(cardImage);
        hitSound.play();
    }

    function blackjackDeal() {
        let yourImages = document.createElement('img').querySelector('#your-box).querySelectorAll('img');
    
       for (i=0; i < yourImages.length; i++) {
           yourImages[i].remove();
       }
    }