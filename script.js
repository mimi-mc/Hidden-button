let winnerBtn = Math.floor(Math.random() * 3) + 1;

function checkButton() {
    let clickedBtn = parseInt(document.activeElement.innerHTML);
    if (clickedBtn === winnerBtn) {
        alert(`Winning button! Congratulations!!`);
    } else {
        alert(`Losing button :( Try again.`);
    }
}
