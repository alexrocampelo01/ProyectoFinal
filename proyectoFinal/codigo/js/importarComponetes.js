let cabecera = document.getElementsByTagName('header');
console.log(cabecera);
fetch('../html/componetes/header.html')
.then( response => response.text())
.then (html => {
    console.log("cargo cabecera");
    cabecera[0].innerHTML = html;
    let iconoMenu = document.querySelector("#menuNav");
    iconoMenu.addEventListener('click',abrirMenu);
    let butSesion = document.querySelector('#butCerrar');
    butSesion.addEventListener('click', cerrarSesion);
    console.log(butSesion);
})
cerrarSesion();
function abrirMenu(e){
    console.log(e.target);
    let nav = document.querySelector("#navegacion");
    if(nav.classList.contains('escondido')){
        console.log('me escondo');
        nav.classList.remove('escondido');
    }else{
        console.log('salgo del escondite');
        nav.classList.add('escondido');
    }
}

function cerrarSesion(e){
    console.log("pulsado cierro");
    if(localStorage.getItem('jwt')){
        //console.log("hola" +localStorage.getItem('tipoUser'));
        localStorage.removeItem('jwt');
        e.target.textContent = "Cerrar SESION";        
    }else{
        e.target.textContent = "Iniciar SESION";
    }
}