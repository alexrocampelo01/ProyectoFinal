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
    if(localStorage.getItem('jwt')){
        butSesion.textContent="Cerrar Sesion";
    }else{
        butSesion.textContent="Iniciar Sesion";
    }
    console.log(butSesion);
})
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
        e.target.textContent = "Cerrar Sesion";     
        window.location.href= urlMain;   
    }else{
        e.target.textContent = "Iniciar Sesion";
        window.location.href= urlLoginHtml;  

    }
}