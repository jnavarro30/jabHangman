import { sound } from '../js/sound.js';
import How from '../js/how.js';
import Game from '../js/game.js';

const Home = (_ => {
    const init = _ => {
        homePage();
        listeners();
    }

    const listeners = _ => {
        document.querySelector(".new-game").addEventListener("click", _ => {
            sound.click.play();
            Game.init();
        })

        document.querySelector(".instructions").addEventListener("click", _ => {
            sound.click.play();
            How.init();
        })
    }

    const homePage = _ => {
        let markup = `
        <h1 class="hangman__title">HANGMAN</h1>
        <button class="button new-game">New Game</button>
        <button class="button instructions">How to Play</button>
        `;

        document.querySelector(".hangman").innerHTML = markup;
    }

    return {
        init
    }
})();

export default Home;