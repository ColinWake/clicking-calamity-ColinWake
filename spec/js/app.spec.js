describe('Application', () => {

    describe('Button DOM Manipulation', () => {

        beforeEach(() => {
            game = new ClickCounter();
        });

        it('should disable the clicking companion button if clicks are less than the price', function () {
            determineAvailability();
            expect(document.querySelector('#autoclicker').disabled).toBeTrue();
            expect(document.querySelector('#autoclicker').className).toBe('grid-container__disabled-button');
        });

        it('should disable the multiplier button if clicks are less then the price', function () {
            determineAvailability();
            expect(document.querySelector('#multiplier').disabled).toBeTrue();
            expect(document.querySelector('#multiplier').className).toBe('grid-container__disabled-button')
        });

        it('should enable the clicking companion button if clicks are >= the price', function () {
            game.clicks = game.autoClickerPrice;
            determineAvailability();
            expect(document.querySelector('#autoclicker').disabled).toBeFalse();
            expect(document.querySelector('#autoclicker').className).toBe('grid-container__enabled-button')
        });

        it('should enable the multiplier button if clicks are >= the price', function () {
            game.clicks = game.multiplierPrice;
            determineAvailability();
            expect(document.querySelector('#multiplier').disabled).toBeFalse();
            expect(document.querySelector('#multiplier').className).toBe('grid-container__enabled-button');
        });
    });

    describe('Header Interaction', () => {
        it('should show the modal when showModal() is called', () => {
            showModal();
            expect(document.querySelector('.modal').style.visibility).toBe('visible');
            expect(document.querySelector('.modal').style.opacity).toBeGreaterThan(0);
        });

        it('should hide the modal when anywhere outside of it is clicked', function () {
            showModal();
            expect(document.querySelector('.modal').style.visibility).toBe('visible');
            expect(document.querySelector('.modal').style.opacity).toBeGreaterThan(0);
            document.querySelector('.modal').click(); // If modal is the target, hide the content
            expect(document.querySelector('.modal').style.visibility).toBe('hidden');
            expect(document.querySelector('.modal').style.opacity).toBeCloseTo(0)
        });
    });
});