let computer;
let computerScore = 0;
let your;
let yourScore = 0;


const choices = ["rock","paper","scissors"];

window.onload = function(){
    for (let i=0;i<3;i++){
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "images/" + choices[i] + ".png";
        choice.addEventListener("click",selectChioce)
        document.getElementById("choices").append(choice)
    }
}

function selectChioce(){
    your = this.id;
    document.getElementById("yourChoice").src = "images/"+ your +".png"; 

    // using Math.random 
    computer = choices[Math.floor(Math.random()*3)];
    document.getElementById("computerChoice").src = "images/"+ computer +".png"; 

    if(your == computer){
        yourScore += 1;
        computerScore += 1;
    }
    else {
        if (your == "rock"){
            if (computer == "scissors"){
                yourScore += 1;
            }else if(computer == "paper"){
                computerScore += 1;
            }
        }
        else if (your == "paper"){
            if (computer == "rock"){
                yourScore += 1;
            }else if(computer = "scissors"){
                computerScore += 1;
            }
        }
        else if (your == "scissors"){
            if (computer == "rock"){
                computerScore += 1;
            }
            else if(computer == "paper" ){
                yourScore += 1;
            }
        }
    }

    document.getElementById("computerScore").innerText = computerScore;
    document.getElementById("yourScore").innerText = yourScore;
}