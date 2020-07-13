import { sound } from '../js/sound.js';
import Home from '../js/home.js';

const How = (_ => {
    const init = _ => {
        howPage();
        listeners();
    }

    const listeners = _ => {
        document.querySelector('.main-menu').addEventListener('click', _ => {
            sound.click.play();
            Home.init();
        })
    }

    const howPage = _ => {
        let markup = `
        <h1 class="hangman__title">INSTRUCTIONS</h1>
        <ul class='instructions__list'>
            <li>Click new game to start a new game</li>
            <li>Guess the random word by selecting letters</li>
            <li>7 lives will be given, choose a wrong letter and a life will be taken</li>
            <li>Complete the word before running out of lives to win</li>
            <li>If you run out of lives you lose and the man will be hanged!</li>
        </ul>
        <button class="button main-menu">Main Menu</button>
        `;

        document.querySelector('.hangman').innerHTML = markup;
    }

    return {
        init
    }
})();

export default How;