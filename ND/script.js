

    const button = document.querySelector('.js-button');
    console.log(button.classList.contains('js-button'));

    //const gamingButton = document.querySelector('.js-gaming');


function gamingButton(){ // funkcijos skelbimas ir pavadinimas
    const button = document.querySelector('.js-button'); 
    if (!button.classList.contains('is-toggled')) {
      button.classList.add('is-toggled');
    } else {
      button.classList.remove('is-toggled');
    }
    }