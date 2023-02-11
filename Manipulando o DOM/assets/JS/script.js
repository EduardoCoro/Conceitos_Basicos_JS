function changeMode(){
   changeClasses();
    chageText(); 
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function chageText(){
    const ModoClaro  = 'Modo Claro';
    const ModoEscuro = 'Modo Escuro';
    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = ModoClaro; 
        h1.innerHTML =  ModoEscuro + " ON "; 
        return; 
    }

    button.innerHTML = ModoEscuro;
    h1.innerHTML = ModoClaro + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


button.addEventListener('click', changeMode); 