import { sound } from '../js/sound.js';
import Home from '../js/home.js';
import End from '../js/end.js';
import Canvas from '../js/canvas.js';

const Game = (_ => {
    // data
    const data = {
        letters: [],
        takenLetters: [],
        words: ['one', 'two','three', 'four', 'five'],
        chosenWord: '',
        guessWord: '',
        lives: 7
    }

    let { letters, takenLetters, words, chosenWord, guessWord, lives } = data;

    const init = _ => {
        lives = 7;
        chosenWord = words[Math.floor(Math.random() * words.length)];
        guessWord = '-'.repeat(chosenWord.length);
        letters = [];
        takenLetters = [];
        alphabet();
        gamePage();
        listeners();
        Canvas.init();
        console.log(chosenWord);
    }

    const listeners = _ => {
        document.querySelector('.hangman__list').addEventListener('click', event => {
            if (event.target.matches('.hangman__letter')) {
                let letter = event.target.textContent;
                if(takenLetters.includes(letter)) return;
                else {
                    sound.click.play();
                    takenLetters.push(letter);
                    check(letter);
                    renderUpdate();
                }
            }
        })

        document.querySelector('.main-menu').addEventListener('click', _ => {
            sound.click.play();
            Home.init();
        })
    }

    const gamePage = _ => {
        let markup = `
        <span class="hangman__lives">Lives: ${lives}</span>
        <h1 class="hangman__title">HANGMAN</h1>
        <canvas class="hangman__canvas"></canvas>
        <p class="hangman__guessword">${guessWord}</p>
        <p class="hangman__tagline">Pick a letter below to guess the word</p>
        <ul class="hangman__list">
        ${renderLetters(letters)}
        </ul>
        <button class="button main-menu">Main Menu</button>
        `;

        document.querySelector('.hangman').innerHTML = markup;
    }
    

    const alphabet = _ => {
        for (let i = 97; i < 123; i++) {
            letters.push(String.fromCharCode(i));
        }
    }

    const renderLetters = letters => {
        let markup = "";
        letters.forEach(letter => {
            if (takenLetters.includes(letter)) {
                markup += `<li class="hangman__letter--taken">${letter}</li>`;
            } else {
                sound.click.play();
                markup += `<li class="hangman__letter">${letter}</li>`;
            }
        })
        return markup;
    }

    const updateHTML = (name, text) => {
        document.querySelector(name).innerHTML = text;
    }

    const renderUpdate = _ => {
        if(chosenWord == guessWord) {
            sound.win.play();
            End.setState(`You Win! The word is ${chosenWord}.`);
            End.init();
        }
        updateHTML('.hangman__lives',`Lives: ${lives}` );
        updateHTML('.hangman__list', renderLetters(letters));
        updateHTML('.hangman__guessword', guessWord);
    }

    const check = letter => {
        if(!chosenWord.includes(letter)) {
            lives--;
           Canvas.setLives(lives);
        }
        if(lives <= 0) {
            sound.lose.play();
            let timer = setTimeout(_ => {
                End.setState(`You Lose! The word is ${chosenWord}.`);
                End.init();
            }, 500);
            
        }
        if(chosenWord.includes(letter)) {
            let temp = [...guessWord];
            [...chosenWord].forEach((ltr, index) => {
                if(ltr == letter) {
                    temp.splice(index, 1, ltr);
                }
            })
            guessWord = temp.join('');
        }
    }

    return {
        init
    }
})();

export default Game;