let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const message=document.querySelectorAll("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx]
};

const drawGame=()=>{
    msg.innerText="Game was Draw! Play Again, All The Best";
    msg.style.backgroundColor="blue";
};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice ===compChoice){
        drawGame();

    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice ==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Won. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        computerScore++;
        compScorePara.innerText=computerScore;
        msg.innerText=`You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    });
});