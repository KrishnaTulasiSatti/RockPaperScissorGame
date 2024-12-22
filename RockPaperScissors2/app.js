let userScore = 0;
let compScore = 0;

const wpns = document.querySelectorAll(".weapon");

const msg = document.querySelector("#msg");
const uSc = document.querySelector("#userScore");
const cSc = document.querySelector("#compScore");

const user1 = document.querySelector("#user");
const clickedhand1 = ["<img src='rock.png' alt='userChoice'>","<img src='paper.png' alt='userChoice'>","<img src='scissors.png' alt='userChoice'>"];
const computer1 = document.querySelector("#computer");
const clickedhand2 = ["<img src='rock.png' alt='computerChoice'>","<img src='paper.png' alt='computerChoice'>","<img src='scissors.png' alt='computerChoice'>"];


const showWinner = (userWin) => {
     if(userWin === true) {
        userScore++;
        msg.innerText = "You win!!";
        msg.style.backgroundColor = "green";
        uSc.innerText = userScore;
     }
     else {
        compScore++;
        msg.innerText = "You lose!!";
        msg.style.backgroundColor = "red";
        cSc.innerText = compScore;
     }
};

const playGame = (userChoice) => {
    const arr = ["rock","paper","scissor"];
    let rand = Math.floor(Math.random()*3);
    const compChoice =  arr[rand];

    let idx = arr.indexOf(userChoice); 

    user1.innerHTML = clickedhand1[idx]; 
    computer1.innerHTML = clickedhand2[rand];


    let userWin = false;

    if(userChoice === compChoice) {
        msg.innerText = "It was DRAW!!";
        msg.style.backgroundColor = "#03101f";
    }
    else {
        if(userChoice === "rock") {
            if(compChoice === "scissor") userWin = true;
            else userWin = false;
        }
        else if(userChoice === "paper") {
            if(compChoice === "scissor") userWin = false;
            else userWin = true;
        }
        else {
            if(compChoice === "paper") userWin = true;
            else userWin = false;
        }
        showWinner(userWin);

    }

};

wpns.forEach((wpn) => {
    wpn.addEventListener("click", () => {
        const userChoice = wpn.getAttribute("id"); 
        playGame(userChoice);
    });
});


let currMode = "light";

const mode = document.querySelector("#mode");
const heading = document.querySelector("h1");
const b = document.querySelector("body");
const score = document.querySelectorAll(".sc");


mode.addEventListener("click",() => {
    
    if(currMode == "light") {
        currMode = "dark";
        heading.style.backgroundColor = "#121212";
        b.style.backgroundColor = "black";
        
        wpns.forEach((wpn) => {
            wpn.style.backgroundColor = "#121212";
        });

        score.forEach((sc) => {
            sc.style.color = "white";
        });

        msg.style.backgroundColor = "#121212";
        mode.innerText = "Try LIGHT MODE!!";
        mode.style.backgroundColor = "#121212";

    }
    else {
        currMode = "light";
        heading.style.backgroundColor = "#03101f";
        b.style.backgroundColor = "white";

        wpns.forEach((wpn) => {
            wpn.style.backgroundColor = "#03101f";
        });

        score.forEach((sc) => {
            sc.style.color = "black";
        });

        msg.style.backgroundColor = "#03101f";
        mode.innerText = "Try DARK MODE!!";
        mode.style.backgroundColor = "#03101f";
    }

})

