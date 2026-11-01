document.addEventListener("DOMContentLoaded", () => {
    const setupScreen = document.getElementById("setup-screen");
    const gameScreen = document.getElementById("game-screen");
    const usernameInput = document.getElementById("username-input");
    const startBtn = document.getElementById("start-btn");
    const errorMsg = document.getElementById("error-msg");

    const displayName = document.getElementById("display-name");
    const statusText = document.getElementById("status-text");
    const userScoreEl = document.getElementById("user-score");
    const compScoreEl = document.getElementById("comp-score");
    const userNumEl = document.getElementById("user-num");
    const compNumEl = document.getElementById("comp-num");
    const userCard = document.getElementById("user-card");
    const compCard = document.getElementById("comp-card");
    const rollBtn = document.getElementById("roll-btn");
    const resetBtn = document.getElementById("reset-btn");
    const changeBtn = document.getElementById("chng-btn");

    let userName = "";
    let userScore = 0;
    let compScore = 0;

    function startGame() {
        const trimmedName = usernameInput.value.trim();

        if (trimmedName.length < 1) {
            errorMsg.textContent = "Введіть ім'я (мінімум 1 символ)!";
            usernameInput.style.borderColor = "#ef4444";
            return;
        }

        userName = trimmedName;
        displayName.textContent = userName;
        errorMsg.textContent = "";
        
        setupScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");
    }

    startBtn.addEventListener("click", startGame);

    usernameInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") startGame();
    });

    rollBtn.addEventListener("click", () => {
        const userNumber = Math.floor(Math.random() * 100) + 1;
        const compNumber = Math.floor(Math.random() * 100) + 1;

        userNumEl.textContent = userNumber;
        compNumEl.textContent = compNumber;

        userCard.classList.remove("win-round");
        compCard.classList.remove("win-round");

        if (userNumber > compNumber) {
            userScore++;
            userScoreEl.textContent = userScore;
            userCard.classList.add("win-round");
            statusText.textContent = `Бал для ${userName}! (${userNumber} > ${compNumber})`;
        } else if (compNumber > userNumber) {
            compScore++;
            compScoreEl.textContent = compScore;
            compCard.classList.add("win-round");
            statusText.textContent = `Бал для Комп'ютера! (${compNumber} > ${userNumber})`;
        } else {
            statusText.textContent = `Нічия! Випало однакове число (${userNumber})`;
        }

        if (userScore === 3 || compScore === 3) {
            const winner = userScore === 3 ? userName : "Комп'ютер";
            statusText.textContent = `Матч завершено! Переможець: ${winner} 🏆`;
            rollBtn.classList.add("hidden");
            resetBtn.classList.remove("hidden");
        }
    });

    resetBtn.addEventListener("click", () => {
        userScore = 0;
        compScore = 0;
        userScoreEl.textContent = "0";
        compScoreEl.textContent = "0";
        userNumEl.textContent = "-";
        compNumEl.textContent = "-";
        userCard.classList.remove("win-round");
        compCard.classList.remove("win-round");
        statusText.textContent = "Нова гра! Натисніть кнопку нижче.";
        
        resetBtn.classList.add("hidden");
        rollBtn.classList.remove("hidden");
    });
    changeBtn.addEventListener("click", () => {
        userScore = 0;
        compScore = 0;
        userScoreEl.textContent = "0";
        compScoreEl.textContent = "0";
        userNumEl.textContent = "-";
        compNumEl.textContent = "-";
        userCard.classList.remove("win-round");
        compCard.classList.remove("win-round");
        
        setupScreen.classList.remove("hidden");
        gameScreen.classList.add("hidden");
    })

});