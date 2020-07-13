import { sound } from '../js/sound.js';
import Home from '../js/home.js'; 

const End = (_ => {
    // state
    const state = {
        outcome: ''
    }

    const setState = input => {
        state.outcome = input;
    }

    const init = _ => {
        let markup = `
        <h1 class="hangman__title">${state.outcome}</h1>
        <button class="button main-menu">Main Menu</button>
        `;
        document.querySelector('.hangman').innerHTML = markup;

        listeners();
    }

    const listeners = _ => {
        document.querySelector('.main-menu').addEventListener('click', _ => {
            sound.click.play();
            Home.init();
        })
    }

    return {
        init,
        setState
    }
})();

export default End;