# Basic Browser JavaScript - Cookie Click Counter Calamity

###### A tribute to [Cookie Clicker](https://orteil.dashnet.org/cookieclicker/)

## The Scenario - Welcome to Coo Coo Computing Challengers!
You have been contracted by Coo Coo Computing Challengers to take a concept, Click Counter Calamity, from the drawing board to the browser. Coo Coo Computing Challengers is a company that spends more time creating alliterative puns than actual writing software and they need our help.  They want you to create a webpage that keeps track of user clicks, but they have some strange requirements for _'Clicking Companions'_ and _'Collective Culmination Compounders'_.  They have a list of requirements for us, but they are too busy trying to change the words in their company's mission statement to words that start with the letter 'C' exclusively to give us guidance on how to implement these requirements.

## The Application Requirements
- [X] You must create a website that tracks the amount of times the clicking button has been clicked.
    - [X] Create a button in the browser to click.
    - [X] Create a section on the page that interacts with the _'Clicking Companions'_.
      - [X] Displays the amount of _Clicking Companions_ purchased.
      - [X] Provides a button to purchase _Clicking Companions_.
      - [X] Button is disabled when you do not have enough clicks to buy a _Clicking Companion_.
    - [X] Create a section on the page that interacts with the _'Collective Culmination Compounder'_.
      - [X] Displays the amount of _Collective Culmination Compounder_ purchased.
      - [X] Provides a button to purchase _Collective Culmination Compounder_.
      - [X] Button is disabled when you do not have enough clicks to buy a _Collective Culmination Compounder_.
- [X] Have a function that returns the click count.
- [X] You must implement a feature called _'Clicking Companions'_.
    - [X] _Clicking Companions_ are bought with clicks from your click total.
    - [X] Each _Clicking Companion_ that is purchased increases the cost of the next _Clicking Companion_.
    - [X] The initial cost should be around 100 clicks.
    - [X] For each _Clicking Companion_ that has been purchased the count of clicks goes up by one every second.  This is a cumulative effect, so having 100 _Clicking Companions_ would result in having 100 clicks automatically added to the total every second.
      - [X] Have a function that adds the amount of _Clicking Companions_ to the click total.
      - [X] Inside your game loop, call the above function every second.
- [X] You must implement a feature called _'Collective Culmination Compounders'_.
  - [X] _Collective Culmination Compounders_ are bought with clicks from your click total.
  - [X] Each _Collective Culmination Compounder_ that is purchased increases the cost of the next _Collective Culmination Compounder_.
  - [X] The initial cost should be around 10 clicks.
  - [X] The first _Collective Culmination Compounder_ increases the value of a click from `1x` to `1.2x`.
  - [X] Every subsequent _Collective Culmination Compounder_ increases the value of a click exponentially.  For example, the second _Collective Culmination Compounder_ will increase the value of a click to `1.2x * 1.2x` or `1.44x`.
- [X] You must be able to reset the game state.  This action should reset the game to zero clicks, zero _Clicking Companions_, and zero _Collective Culmination Compounders_.
- [X] This website also has some other requirements:
  - [X] Use semantic html and BEM when writing your html so that in the future we have a solid base to expand upon.
  - [X] You must have a header for this page.  It should have a few of the following features:
    - [X] A navigation menu that when clicked will expand sections about:
      - [X] Coo Coo Computing Challengers
      - [X] The inspiration for this game, Cookie Clicker.
      - [X] Your contact info.
  - [ ] Deploy your project so that it is reachable on the internet.
