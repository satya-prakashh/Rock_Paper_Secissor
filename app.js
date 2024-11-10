/*Track user and comp score*/

let userScore= 0;
let compScore= 0;

/*Track which choice clicked*/

/*user choice*/
let choices= document.querySelectorAll(".choice");

choices.forEach((choices)=>{ /*select all the choice element (with Tag)*/
    choices.addEventListener("click",()=>{ /*after click choice show*/
        let userChoice= choices.getAttribute("id"); /*show id naame of attribute*/
        playGame(userChoice);
    });    
});

/*comp choice*/
let genCompChoice= ()=> {
    /*computer choose randomly rock, paper or secissor. So we store these in a array*/
    let option= ["rock", "paper", "secissor"];
    /*now we need to choice random no between 0 to 2 (as i= 0 or 1 or 2).*/
    /*Math.random(); give no between 0 to 1 randomly with decimal.*/
    /*Math.random()*3; give no between 0 to 2 randomly with decimal.*/
    /*Math.floor(Math.random()*3); give no between 0 to 2 randomly with natural no (without decimal)*/
    let randIdx= Math.floor(Math.random()*3);
    return option[randIdx];    
}

//** **/
let msg= document.querySelector("#msg");
let userScorePara= document.querySelector("#user-score");
let compScorePara= document.querySelector("#comp-score");
//** **/

/*draw game*/
let drawGame= ()=> {
    msg.innerText= "Game draw. Because computer choose same as your choise.";
    msg.style.backgroundColor= "#c38edc";
}

/*show winner*/ /*with edit show message*/
let ShowWinner= (userWin,userChoice,compChoice)=> {
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;

        msg.innerText= `You win! Because your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor= "rgb(62, 184, 62)";
    }else{
        compScore++;
        compScorePara.innerText= compScore;

        msg.innerText= `You lose. Because ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor= "rgb(220, 60, 60)";
    }
}

/*Game Play*/
let playGame= (userChoice)=> {
    let compChoice= genCompChoice();

    if(userChoice=== compChoice){
        drawGame();
    }else{
        let userWin= true;
        if(userChoice=== "rock"){ /*comp choice either paper or secissor*/
            userWin= compChoice=== "paper" ? false : true;
        }else if(userChoice=== "paper"){ /*comp choice either secissor or rock*/
            userWin= compChoice=== "secissor" ? false : true;
        }else{ /*finally user choose secissor,comp choice either rock or paper*/
            userWin= compChoice=== "rock" ? false : true;
        }
    ShowWinner(userWin,userChoice,compChoice)
    }
}
