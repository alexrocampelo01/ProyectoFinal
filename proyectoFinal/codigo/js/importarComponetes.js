let cabecera = document.getElementsByTagName('header');
console.log(cabecera);
cerrarSesion();
fetch('../html/componetes/header.html')
.then( response => response.text())
.then (html => {
    console.log("cargo cabecera");
    cabecera[0].innerHTML = html;
    let iconoMenu = document.querySelector("#menuNav");
    iconoMenu.addEventListener('click',abrirMenu);
    let divSesion = document.querySelector('#divSesion');
    divSesion.addEventListener('click', cerrarSesion);
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

function cerrarSesion(){
    if(localStorage.getItem('jwt')){
        //console.log("hola" +localStorage.getItem('tipoUser'));
        localStorage.removeItem('jwt');
        document.querySelector('#butCerrar').textContent = "Cerrar SESION";
        window.location.href= urlMain;
        
    }else{
        document.querySelector('#butCerrar').textContent = "Iniciar SESION";
        window.location.href= urlLoginHtml;
    }
}