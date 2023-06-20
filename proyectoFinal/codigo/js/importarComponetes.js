let cabecera = document.getElementsByTagName('header');
console.log(cabecera);

fetch('../html/componetes/header.html')
.then( response => response.text())
.then (html => {
    console.log("cargo cabecera");
    cabecera[0].innerHTML = html;
    let iconoMenu = document.querySelector("#menuNav");
    iconoMenu.addEventListener('click',abrirMenu);
    let butCerrarSesion = document.querySelector('#butCerrar');
    butCerrarSesion.addEventListener('click', cerrarSesion);
    if(localStorage.getItem('jwt')){
        butCerrarSesion.textContent = "Cerrar Sesion";
        console.log("hay jwt");
    }else{
        butCerrarSesion.textContent = "Iniciar Sesion";
        console.log("No hay jwt");
    }
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
    console.log(e.target);
    if(localStorage.getItem('jwt')){
        //console.log("hola" +localStorage.getItem('tipoUser'));
        localStorage.removeItem('jwt');
        document.querySelector('#butCerrar').innerHTML = `<a href="../html/calendario.html">acabar sesion</a>`;

    }else{
        document.querySelector('#butCerrar').innerHTML = `<a href="../html/login.html">iniciar sesion</a>`;
    }
}