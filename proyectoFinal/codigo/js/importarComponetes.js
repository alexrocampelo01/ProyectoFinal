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