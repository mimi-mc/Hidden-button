function getWinningButton() {
    let noButtons = document.getElementById("noButtons").value;
    let winningBtn = Math.floor(Math.random() * noButtons) + 1;
    return winningBtn;
}

checkButton = function () {
    let winningBtn = getWinningButton();
    if (this.Id === winningBtn) {
        alert(`Winning button! Congratulations!!`);
    } else {
        alert(`Losing button :( Try again.`);
    }
}

function generateButtons() {
    let winningBtn = getWinningButton();
    let noButtons = document.getElementById("noButtons").value;
    for (let i = 1; i <= noButtons; ++i) {
        let button = document.createElement("button");
        button.className = "btn btn-info";
        button.Id = i;
        button.textContent = "Button " + i;
        button.addEventListener("click", checkButton);
        generateButtonsDiv.appendChild(button);
    }
}
