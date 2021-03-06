describe("Game Engine", () => {
    beforeEach(() => {
        game = new ClickCounter();
    });

    describe('Clicking the Cookie', () => {

        it('should increment total clicks', () => {
            game.increment();
            expect(game.clicks).toBe(1);
        });

    });

    describe('Multiplier', () => {

        it('should increase multiplier by 0.2', () => {
            game.clicks = game.multiplierPrice;
            game.incrementMultiplier();
            expect(game.multiplier).toBe(1.2);
        });

        it('should square multiplier when > 1.0', () => {
            game.clicks = game.multiplierPrice;
            game.incrementMultiplier();
            expect(game.multiplier).toBe(1.2);
            game.clicks = game.multiplierPrice;
            game.incrementMultiplier();
            expect(game.multiplier).toBe(1.44);
        });

        it('should increase multiplier price by 10%', () => {
            game.clicks = game.multiplierPrice;
            game.incrementMultiplier();
            expect(game.multiplierPrice).toBe(11);
        });

        it('should increase price when multiplier is purchased', () => {
            game.clicks = game.multiplierPrice;
            game.incrementMultiplier();
            expect(game.multiplierPrice).toBe(11)
        });

        it('should decrease clicks when multiplier is purchased', () => {
            game.clicks = game.multiplierPrice;
            game.incrementMultiplier();
            expect(game.clicks).toBe(0);
        });

    });

    describe('Autoclicker', () => {

        it('should increment autoclickers on event call', () => {
            game.clicks = game.autoClickerPrice;
            game.incrementAutoClickers();
            expect(game.autoClickers).toBe(1);
        });

        it('should increase price when autoclicker is purchased', () => {
            game.clicks = game.autoClickerPrice;
            game.incrementAutoClickers();
            expect(game.autoClickerPrice.toFixed(0)).toBeCloseTo(110);
        });

        it('should decrease clicks when autoclicker is purchased', () => {
            game.clicks = game.autoClickerPrice;
            game.incrementAutoClickers();
            expect(game.clicks).toBe(0)
        });

    });

});
