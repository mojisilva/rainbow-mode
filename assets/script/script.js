const rainbowModeClass = 'colorfull-mode';
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
    button.classList.toggle(rainbowModeClass);
    divRed.classList.toggle(rainbowModeClass);
    divOrange.classList.toggle(rainbowModeClass);
    divYellow.classList.toggle(rainbowModeClass);
    divGreen.classList.toggle(rainbowModeClass);
    divBlue.classList.toggle(rainbowModeClass);
    divIndigo.classList.toggle(rainbowModeClass);
    divViolet.classList.toggle(rainbowModeClass);
    body.classList.toggle(rainbowModeClass);
    footer.classList.toggle(rainbowModeClass);
}

function changeText(){
    const lightMode = "Light Mode";
    const rainbowMode = "Rainbow Mode";
    if(body.classList.contains(rainbowModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = `${rainbowMode} ON`;
        return;
    }
    button.innerHTML = rainbowMode;
    h1.innerHTML = `${lightMode} ON`; 

}
function changeMode(){
    changeClasses();
    changeText();
}

