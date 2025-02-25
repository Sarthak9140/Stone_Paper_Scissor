let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "game was draw play again !!";
    msg.style.backgroundColor ="#081b31";
};

const showWinner =(userWin , userchoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `you win ! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText =`you lose ! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}



const playGame = (userchoice ) => {
    //generate computer choice
    const compChoice = genCompChoice();

    if(userchoice === compChoice){
        //game draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compChoice === "paper"? false : true;

        }
        else if(userchoice === "paper"){
            userWin = compChoice === "scissors" ? false :true;

        }
        else{
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin , userchoice , compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked" , userchoice);
        playGame(userchoice);
    });
});