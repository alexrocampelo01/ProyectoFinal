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
    console.log(usu);
    fetch("http://localhost/ProyectoFinal/proyectoFinal/codigo/php/login.php", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
            body: JSON.stringify(usu),
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        if(data){
            let nomUser = data[0].nomUsu;
            console.log(data.tipoUser);
            localStorage.setItem('nomUser',nomUser);
            localStorage.setItem('tipoUser',data[0].tipoUser);
        }
    })
}