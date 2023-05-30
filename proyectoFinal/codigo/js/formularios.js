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
            document.querySelector('#formulario').innerHTML = formulario;
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
        let butregistro = document.querySelector('#butRegistro');
            butregistro.addEventListener('click', recogerDatos);
            console.log(butregistro);
    }
}

function recojerDatosMonitor(){
    
}

let datosSocios = {};
function recogerDatos(){
    console.log("registro");
    if(usuario == "Socio"){
        datosSocios.tipoUsu = "socio";
        datosSocios.nomUsu = document.querySelector('#nomUsu').value;
        datosSocios.pass = document.querySelector('#pass').value;
        datosSocios.nom = document.querySelector('#nom').value;
        datosSocios.apel1 = document.querySelector('#apel1').value;
        datosSocios.apel2 = document.querySelector('#apel2').value;
        datosSocios.curso = document.querySelector('#curso').value;
        datosSocios.nomP = document.querySelector('#nomP').value;
        datosSocios.tlfP = document.querySelector('#tlfP').value;
        datosSocios.nomM = document.querySelector('#nomM').value;
        datosSocios.tlfM = document.querySelector('#tlfM').value;
        datosSocios.dir = document.querySelector('#dir').value;
        datosSocios.fechNac = document.querySelector('#fechNac').value;
        datosSocios.observaciones = document.querySelector('#observaciones').value;
        //console.log(JSON.stringify(datosSocios));
        mandarForm(datosSocios);
    }
    if(usuario == "Monitor"){
        console.log("registrado moni");
        datosSocios.tipoUsu = "monitor";
        datosSocios.nomUsu = document.querySelector('#nomUsu').value;
        datosSocios.pass = document.querySelector('#pass').value;
        datosSocios.nom = document.querySelector('#nom').value;
        datosSocios.apel1 = document.querySelector('#apel1').value;
        datosSocios.apel2 = document.querySelector('#apel2').value;
        datosSocios.curso = document.querySelector('#curso').value;
        datosSocios.tlf = document.querySelector('#tlf').value;
        datosSocios.tituloM = document.querySelector('#tituloM').value;
        datosSocios.carneC = document.querySelector('#carneC').value;
        console.log(JSON.stringify(datosSocios));
        mandarForm(datosSocios);
    }
    
}
//console.log("los datosd e los socios"+datosSocios.nom);
function mandarForm(objeto){
    // fetch("http://localhost/ProyectoFinal/proyectoFinal/codigo/php/login.php", {
    fetch("http://192.168.56.114/ProyectoFinal/proyectoFinal/codigo/php/login.php", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
            body: JSON.stringify(objeto),
    }).then(response => {
        return response.text();
        // switch(response.status){
        //     case 200:
        //         return response.json();
        //     default:
        // }
    })
    .then(data => {
        if(data){
            console.log(data);
        }else{
            console.log("no hay datos");
        }
    })
}