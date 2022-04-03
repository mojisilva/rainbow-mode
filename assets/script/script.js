const colorfullMode = 'colorfull-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const divRed = document.getElementById('div-red');
const divOrange = document.getElementById('div-orange');
const divYellow = document.getElementById('div-yellow');
const divGreen = document.getElementById('div-green');
const divBlue = document.getElementById('div-blue');
const divIndigo = document.getElementById('div-indigo');
const divViolet = document.getElementById('div-violet');

button.addEventListener('click', changeMode);


function changeClasses(){
    button.classList.toggle(colorfullMode);
    divRed.classList.toggle(colorfullMode);
    divOrange.classList.toggle(colorfullMode);
    divYellow.classList.toggle(colorfullMode);
    divGreen.classList.toggle(colorfullMode);
    divBlue.classList.toggle(colorfullMode);
    divIndigo.classList.toggle(colorfullMode);
    divViolet.classList.toggle(colorfullMode);
    body.classList.toggle(colorfullMode);
    footer.classList.toggle(colorfullMode);
}

function changeMode(){
    changeClasses();
}

