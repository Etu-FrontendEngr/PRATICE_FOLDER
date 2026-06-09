function rockpaperscissors() {
    const introContainer = document.getElementById("intro-container");
    const gameMode = document.getElementById("game-mode");
    const overLay = document.getElementById("overlay");
    const Modal = document.getElementById("modal");
    const headtxt=document.getElementById("headtxt");
    const instruction = document.getElementById("instruction");
    const username = document.getElementById("username");
    const proceedBtn = document.getElementById("proceedBtn")
    const welcometxt = document.getElementById("welcometxt");
    const instructiontxt = document.getElementById("instructiontxt");
    const continueBtn = document.getElementById("continueBtn");
    const exitBtn = document.getElementById("exitBtn");
    const gameheadtxt = document.getElementById("gameheadtxt");
    const gameinstruct = document.getElementById("gameinstruct");
    const userInput = document.getElementById("user-input");
    const computerInput = document.getElementById("computer-input");
    const messageCard = document.getElementById("message-card");
    const messageTxt = document.getElementById("message-text");
    const choices = document.getElementById("choices");
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissor = document.getElementById("scissor");
    const scoreBoard = document.getElementById("scoreboard");
    const computersChoice = document.getElementById("computer-choice");
    const playersChoice = document.getElementById("player-choice");

   
    const introContent = {
        heading: "Welcome to Rock, Paper & Scissors",
        instruction : "It's nice having you here, please kindly enter your name in the space provided underneath to proceed",
        proceedBtn: "Proceed" 
    };

     let userRealName = username.value.trim().toLowerCase(); 

     headtxt.textContent = introContent.heading;
    instruction.textContent = introContent.instruction;
    proceedBtn.textContent = introContent.proceedBtn;

     const ModalContent = {
        welcometxt: `Welcome, to the game ${userRealName}!`,
        instructiontxt: "Get ready to play the game! Click continue to start or exit to leave.",
        continueBtn: "Continue",
        exitBtn: "Exit"
    };

    welcometxt.textContent = ModalContent.welcometxt;
    instructiontxt.textContent = ModalContent.instructiontxt;
    continueBtn.textContent = ModalContent.continueBtn;
    exitBtn.textContent = ModalContent.exitBtn;

    proceedBtn.addEventListener("click", () => {
 introContainer.style.display = "none";
       overLay.style.display = "flex";
         Modal.style.display = "flex";
    });



     
  

   
   
    exitBtn.addEventListener("click", () => {
        Modal.style.display = "none";
        overLay.style.display = "none";
        introContainer.style.display = "flex";
    })


    function playgame() {
    
        let userChoice;

    let computerChoice;

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    if (userChoice === computerChoice) {
        messageTxt.textContent = "It's a tie!";
    } else if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper") {
        messageTxt.textContent = "Congratulations! You win!";
    } else {
        messageTxt.textContent = "Sorry, you lose. Computer Wins! Better luck next time!";
    }



    rock.addEventListener("click", function(){
        userChoice = "rock";
        playgame();
    })

    paper.addEventListener("click", function(){
        userChoice = "paper";
        playgame();
    })

    scissor.addEventListener("click", function(){
        userChoice = "scissors";
        playgame();
    })
    }

          const gameContent = {
        gameheadtxt: "Rock, Paper & Scissors",
        gameinstruct: "Please select your move by clicking rock, paper, or scissors.",
        rock: "rock",
        paper: "paper",
        scissor: "scissor",
        playerChoice: `You chose ${userChoice}`,
        computerChoice: `Computer chose ${computerChoice}`,
    }

      gameheadtxt.textContent = gameContent.gameheadtxt;
    gameinstruct.textContent = gameContent.gameinstruct;
    rock.textContent = gameContent.rock;
    paper.textContent = gameContent.paper;
    scissor.textContent = gameContent.scissor;
    computersChoice.textContent = gameContent.computerChoice;
    playersChoice.textContent = gameContent.playerChoice;

       continueBtn.addEventListener("click", () => {
        Modal.style.display = "none";
        overLay.style.display = "none";
        gameMode.style.display = "flex";
    })
}

rockpaperscissors();