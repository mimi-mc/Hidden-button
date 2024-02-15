function getWinningButton() {
    let noButtons = document.getElementById("noButtons").value;
    let winningBtn = Math.floor(Math.random() * noButtons) + 1;
    return winningBtn;
}

function generateButtons() {
    let winningBtn = getWinningButton();
    let noButtons = document.getElementById("noButtons").value;
    for (let i = 1; i <= noButtons; ++i) {
        let button = document.createElement("button");
        button.className = "btn btn-info";
        button.Id = i;
        button.textContent = "Button " + i;
        button.addEventListener("click", function() {
            if (button.Id === winningBtn) {
                alert(`Winning button! Congratulations!!`);
            } else {
                alert(`Losing button :( Try again.`);
            }
        });
        generateButtonsDiv.appendChild(button);
    }
}
