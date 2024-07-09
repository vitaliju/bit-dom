import { header } from "../js/header.js";
header();

const data = [
    {
        person: 'other',
        message: 'Labas rytas',
    },
    {
        person: 'me',
        message: 'Labas rytas!',
    },
    {
        person: 'other',
        message: 'Ka tu?',
    },
    {
        person: 'me',
        message: 'Nieko, o ka tu?',
    },
    {
        person: 'other',
        message: 'Irgi nieko',
    },
    {
        person: 'me',
        message: '<div>Iprasta zinute...nera cia ko ziureti...</div>',
    },

];

const chatDOM = document.querySelector('.chat');

let HTML = '';

for (const msg of data) {
    const text = msg.message
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&apos;')
        .replaceAll("=", '&equals;');
    HTML += `<div class="msg ${msg.person}">${text}</div>`;
}

chatDOM.innerHTML = HTML;