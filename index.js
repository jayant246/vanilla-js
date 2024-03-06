import {myEvent, customEvent} from './event.js';

const fireEvent = () =>  {
    console.log('hey there')
    document.dispatchEvent(myEvent);
}

const fireCustomEvent = () => {
    document.dispatchEvent(customEvent);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('dom loaded');
    document.addEventListener('firstEvent', () => {
        console.log('first event has been fires');
    })

    document.addEventListener('firstCustomEvent', (event) => {
        console.log('event', event.target, event.type, event.detail);
    })

    const firstButton = document.getElementById('first-button');
    firstButton.addEventListener('click', fireEvent);

    const secondButton = document.getElementById('second-button');
    secondButton.addEventListener('click', fireCustomEvent);
})


