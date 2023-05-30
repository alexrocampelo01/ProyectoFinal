let butLogin = document.querySelector('#butLogin');
butLogin.addEventListener('click', logear);

let logUsu = {};
function logear(){
    console.log(butLogin);
    logUsu.tipoUser = document.querySelector('#tipoUser').value;
    logUsu.userLogin = document.querySelector('#userLogin').value;
    logUsu.passLogin = document.querySelector('#passLogin').value;
    mandarForm(logUsu);
}
function mandarForm(usu){
    //console.log(usu);
    // fetch("http://localhost/ProyectoFinal/proyectoFinal/codigo/php/login.php", {
    fetch("http://192.168.56.114/ProyectoFinal/proyectoFinal/codigo/php/login.php", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
            body: JSON.stringify(usu),
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        console.log(document.querySelector('#tipoUser').value);
        if(data.tipoUser == document.querySelector('#tipoUser').value){
            if(data[0]){
                console.log(data.tipoUser); 
                localStorage.setItem('nomUser',data[0].nomUsu);
                localStorage.setItem('tipoUser', data.tipoUser);
                window.location.href="http://192.168.56.114/ProyectoFinal/proyectoFinal/codigo/html/calendario.html";
            }else{
                document.querySelector('#logError').innerHTML = "error al encontrar usario o contraseña";

            }
            
        }else{
            document.querySelector('#logError').innerHTML = "error al encontrar usario o contraseña";
        }
    })
}