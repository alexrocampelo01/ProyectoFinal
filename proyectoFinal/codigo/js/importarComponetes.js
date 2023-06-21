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
    console.log(butSesion);
    butSesion.addEventListener('click', cerrarSesion);
})
cerrarSesion();
function abrirMenu(){
    console.log("pulsado");
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