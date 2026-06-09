function rockpaperscissors() {

    const introContainer = document.getElementById("intro-container");
    const gameMode = document.getElementById("game-mode");
    const overLay = document.getElementById("overlay");
    const modal = document.getElementById("modal");

    const headtxt = document.getElementById("headtxt");
    const instruction = document.getElementById("instruction");
    const username = document.getElementById("username");
    const proceedBtn = document.getElementById("proceedBtn");

    const welcometxt = document.getElementById("welcometxt");
    const instructiontxt = document.getElementById("instructiontxt");
    const continueBtn = document.getElementById("continueBtn");
    const exitBtn = document.getElementById("exitBtn");

    const gameheadtxt = document.getElementById("gameheadtxt");
    const gameinstruct = document.getElementById("gameinstruct");

    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissor = document.getElementById("scissor");

    const playersChoice = document.getElementById("player-choice");
    const computersChoice = document.getElementById("computer-choice");
    const messageTxt = document.getElementById("message-text");



    const introContent = {
        heading: "Welcome to Rock, Paper & Scissors",
        instruction: "Enter your name to continue",
        proceedBtn: "Proceed"
    };

    headtxt.textContent = introContent.heading;
    instruction.textContent = introContent.instruction;
    proceedBtn.textContent = introContent.proceedBtn;


    let userChoice = "";
    let computerChoice = "";


    proceedBtn.addEventListener("click", function () {

        let userRealName = username.value.trim();
        welcometxt.textContent =
            `Welcome to the game, ${userRealName}!`;
            instructiontxt.textContent = "Get ready to play the game! Click continue to start or exit to leave."
            exitBtn.textContent = "Exit"
            continueBtn.textContent = "Continue"
        overLay.style.display = "flex";
        modal.style.display = "flex";
        introContainer.style.display = "none";
    });

    exitBtn.addEventListener("click", function () {
        modal.style.display = "none";
        overLay.style.display = "none";
        introContainer.style.display = "flex";
    });

    continueBtn.addEventListener("click", function () {
        modal.style.display = "none";
        overLay.style.display = "none";
        gameMode.style.display = "flex";
    });



    function playGame(choice) {

        userChoice = choice;


        const randomNumber = Math.floor(Math.random() * 3) + 1;

        if (randomNumber === 1) {
            computerChoice = "rock";
        } else if (randomNumber === 2) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }

        playersChoice.textContent = `You chose ${userChoice}`;
        computersChoice.textContent = `Computer chose ${computerChoice}`;

        // game rules
        if (userChoice === computerChoice) {
            messageTxt.textContent = "It's a tie!";
        }
        else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            messageTxt.textContent = "You win!";
        }
        else {
            messageTxt.textContent = "You lose!";
        }
    }



    rock.addEventListener("click", function () {
        playGame("rock");
    });

    paper.addEventListener("click", function () {
        playGame("paper");
    });

    scissor.addEventListener("click", function () {
        playGame("scissors");
    });


  
    const gameContent = {
        gameheadtxt: "Rock, Paper & Scissors",
        gameinstruct: "Click a choice to play",
        rock: "rock",
        paper: "paper",
        scissor: "scissor"
    };

    gameheadtxt.textContent = gameContent.gameheadtxt;
    gameinstruct.textContent = gameContent.gameinstruct;
    rock.textContent = gameContent.rock;
    paper.textContent = gameContent.paper;
    scissor.textContent = gameContent.scissor;
}


rockpaperscissors();