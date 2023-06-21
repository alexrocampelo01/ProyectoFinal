let cabecera = document.getElementsByTagName('header');
console.log(cabecera);
fetch('../html/componetes/header.html')
.then( response => response.text())
.then (html => {
    console.log("cargo cabecera");
    cabecera[0].innerHTML = html;
    let iconoMenu = document.querySelector("#menuNav");
    iconoMenu.addEventListener('click',abrirMenu);
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
    let butSesion = document.querySelector('#butCerrar');
    butSesion.addEventListener('click', cerrarSesion);
    console.log(butSesion);
    if(localStorage.getItem('jwt')){
        //console.log("hola" +localStorage.getItem('tipoUser'));
        localStorage.removeItem('jwt');
        document.querySelector('#butCerrar').textContent = "Cerrar SESION";
        if(e){
            window.location.href= urlMain;
        }
        
        
    }else{
        document.querySelector('#butCerrar').textContent = "Iniciar SESION";
        if(e){

            window.location.href= urlLoginHtml;
        }
    }
}