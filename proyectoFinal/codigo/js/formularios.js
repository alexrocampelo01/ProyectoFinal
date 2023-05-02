let usuario = "Socio"; //por defecto que sea socio
let suapForm = document.querySelector('#formUsu');
suapForm.addEventListener('click', cambiarUsu);
cambiarForm();

function cambiarUsu(e){
    usuario = e.target.textContent;
    console.log(usuario +"cambio de usario");
    cambiarForm();
}
function cambiarForm(){
    if(usuario == "Socio"){
        fetch('componetes/formSocio.html')
        .then((response) => response.text())
        .then( (formulario) =>{
            console.log("socio");
            let form = document.querySelector('#formulario').innerHTML = formulario;
            //cremos el boton de registro 
            // let butRegistro = document.createElement('span');
            // butRegistro.addEventListener('click', recogerDatos);
            // butRegistro.textContent = "registro generado";
            // form.append(butRegistro);
            let butregistro = document.querySelector('#butRegistro');
            butregistro.addEventListener('click', recogerDatos);
            console.log(butregistro);

        });
    }
    if(usuario == "Monitor"){
        fetch('componetes/formMonitor.html')
        .then((response) => response.text())
        .then( (formulario) =>{
            console.log("monitor");
            document.querySelector('#formulario').innerHTML = formulario;
        });
    }
}

function recojerDatosMonitor(){
    
}


function recogerDatos(){
    console.log("registro");
    let nomUsu = document.querySelector('#nomUsu').value;
    let pass = document.querySelector('#pass').value;
    let nom = document.querySelector('#nom').value;
    let apel1 = document.querySelector('#apel1').value;
    let apel2 = document.querySelector('#apel2').value;
    let curso = document.querySelector('#curso').value;
    let nomP = document.querySelector('#nomP').value;
    let tlfP = document.querySelector('#tlfP').value;
    let nomM = document.querySelector('#nomM').value;
    let tlfM = document.querySelector('#tlfM').value;
    let dir = document.querySelector('#dir').value;
    let fechNac = document.querySelector('#fechNac').value;
    let observaciones = document.querySelector('#observaciones').value;
}