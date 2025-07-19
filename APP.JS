let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock, paper, scissors
};
const drawGame = () =>{
    //console.log("Game was draw.");
     msg.innerText ="Game Was Draw. Play Again.";
     msg.style.backgroundColor = "yellow";
     msg.style.color = "black";
};

const showWinner = (userwin, userChoice, compChoice) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
       // console.log("You Win!");
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
       // console.log("You Lose");
        msg.innerText =`You Lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
   // console.log("user choice =",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
   // console.log("comp choice=",compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();

    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userwin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userwin = compChoice === "scissors" ? false: true;
        }
        else{
            //rock,paper
            userwin = compChoice === "rock" ? false: true;
        }
        showWinner(userwin, userChoice,compChoice);
        
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});