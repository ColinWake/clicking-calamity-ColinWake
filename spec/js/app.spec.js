describe('Application', () => {

    describe('Button DOM Manipulation', () => {

        beforeEach(() => {
            game = new ClickCounter();
        });

        it('should disable the clicking companion button if clicks are less than the price', function () {
            determineAvailability();
            expect(document.querySelector('#autoclicker').disabled).toBeTrue();
            expect(document.querySelector('#autoclicker').className).toBe('disabled-button');
        });

        it('should disable the multiplier button if clicks are less then the price', function () {
            determineAvailability();
            expect(document.querySelector('#multiplier').disabled).toBeTrue();
            expect(document.querySelector('#multiplier').className).toBe('disabled-button')
        });

        it('should enable the clicking companion button if clicks are >= the price', function () {
            game.clicks = game.autoClickerPrice;
            determineAvailability();
            expect(document.querySelector('#autoclicker').disabled).toBeFalse();
            expect(document.querySelector('#autoclicker').className).toBe('enabled-button')
        });

        it('should enable the multiplier button if clicks are >= the price', function () {
            game.clicks = game.multiplierPrice;
            determineAvailability();
            expect(document.querySelector('#multiplier').disabled).toBeFalse();
            expect(document.querySelector('#multiplier').className).toBe('enabled-button');
        });


    });
});