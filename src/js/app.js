let game = new ClickCounter();

const determineAvailability = () => {
    document.getElementById('autoclicker').disabled = game.clicks < game.autoClickerPrice;

    document.getElementById('multiplier').disabled = game.clicks < game.multiplierPrice;

    document.querySelectorAll('button[type="button"]').forEach(button => {
        if (!button.disabled && button.className === "disabled-button") {
            button.className = "enabled-button"
        } else if (button.disabled && button.className === "enabled-button") {
            button.className = "disabled-button"
        }
    })
};

const resetGame = () => {
    game = new ClickCounter();
};

let gameTick = setInterval(() => {
    document.getElementById('totalClicks').innerHTML = `Clicks: ${game.clicks.toFixed(3)}`;
    document.getElementById('autoclicker').innerHTML = `More Autoclickers! Price: ${game.autoClickerPrice.toFixed(0)}`;
    document.getElementById('multiplier').innerHTML = `Multiply earnings per click! Price: ${game.multiplierPrice.toFixed(0)}`;

    document.getElementById('autoclickers').innerHTML = 'Clicking Companions: ' + game.autoClickers;
    document.getElementById('multiplierRate').innerHTML = `Multiplier: ${game.multiplier.toFixed(2)}x`;

    determineAvailability();
}, 10);

let autoclickInterval = setInterval(() => {
    game.incrementWithAutoClickers();
    document.title = game.clicks.toFixed(3) + ' Clicks'
}, 500);