class ClickCounter {
    clicks = 0;
    autoClickers = 0;
    multiplier = 1.0;
    autoClickerPrice = 100;
    multiplierPrice = 10;
    multiplierPricePercentage = 1.1;
    multiplierCount = 0;

    increment() {
        this.clicks += this.multiplier;

        return this.clicks;
    }

    incrementWithAutoClickers() {
        for (let i = 0; i < this.autoClickers; i++) {
            this.increment();
        }
    }

    incrementAutoClickers() {

        if (this.clicks >= this.autoClickerPrice.toFixed(0)) {
            this.autoClickers++;
            this.clicks -= this.autoClickerPrice;
            this.autoClickerPrice *= 1.1 + (0.1 * (this.autoClickers - 1));
            return this.autoClickers
        } else {
            return this.autoClickers
        }
    }

    incrementMultiplier() {

        if (this.clicks >= this.multiplierPrice.toFixed(0)) {
            this.multiplierCount++;
            if (this.multiplier === 1.0) {
                this.multiplier += 0.2;
            } else {
                this.multiplier = Math.pow(1.2, this.multiplierCount);
            }
            this.clicks -= this.multiplierPrice.toFixed(0);
            this.multiplierPrice *= this.multiplierPricePercentage;
            this.multiplierPricePercentage += 0.1;
            return this.multiplier;
        }

        return this.multiplier
    }

}