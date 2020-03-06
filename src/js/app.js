let game = new ClickCounter();

const determineAvailability = () => {
    document.querySelector('#autoclicker').disabled = game.clicks < game.autoClickerPrice;

    document.querySelector('#multiplier').disabled = game.clicks < game.multiplierPrice;

    document.querySelectorAll('button[type="button"]').forEach(button => {
        if (!button.disabled && button.className === "grid-container__disabled-button") {
            button.className = "grid-container__enabled-button"
        } else if (button.disabled && button.className === "grid-container__enabled-button") {
            button.className = "grid-container__disabled-button"
        }
    })
};

const showModal = () => {
    document.querySelector('.modal').style.visibility = 'visible';
    document.querySelector('.modal').style.opacity = '1';
};

window.onclick = (e) => {
    if (e.target === document.querySelector(".modal")) {
        document.querySelector(".modal").style.visibility = 'hidden';
        document.querySelector(".modal").style.opacity = '0';
    }
};

const resetGame = () => {
    game = new ClickCounter();
};

let gameTick = setInterval(() => {
    document.querySelector('#total-clicks').innerHTML = `Clicks: ${game.clicks.toFixed(3)}`;
    document.querySelector('#autoclicker').innerHTML = `More Companions! Price: ${game.autoClickerPrice.toFixed(0)}`;
    document.querySelector('#multiplier').innerHTML = `Multiply earnings per click! Price: ${game.multiplierPrice.toFixed(0)}`;
    document.querySelector('#cookies-per-second').innerHTML = `Cookies/s: ${((game.autoClickers * game.multiplier) * 2).toFixed(2)}`;

    document.querySelector('#autoclickers').innerHTML = 'Clicking Companions: ' + game.autoClickers;
    document.querySelector('#multiplier-rate').innerHTML = `Multiplier: ${game.multiplier.toFixed(2)}x`;

    determineAvailability();
}, 10);

let autoclickInterval = setInterval(() => {
    game.incrementWithAutoClickers();
    document.title = game.clicks.toFixed(3) + ' Clicks'
}, 500);