let butLogin = document.querySelector('#butLogin');
butLogin.addEventListener('click', logear);

let logUsu = {};
function logear(){
    //console.log(butLogin);
    logUsu.tipoUser = document.querySelector('#tipoUser').value;
    logUsu.userLogin = document.querySelector('#userLogin').value;
    logUsu.passLogin = document.querySelector('#passLogin').value;
    mandarForm(logUsu);
}

function mandarForm(usu){
    console.log(SON.stringify(usu));
    fetch(urlLoginApi, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
            body: JSON.stringify(usu),
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data[0]);
        console.log(document.querySelector('#tipoUser').value);
        if(data.jwt){
            if(data[0]){
                console.log(data.tipoUser); 
                localStorage.setItem('nomUser',data[0].nomUsu);
                localStorage.setItem('tipoUser', data.tipoUser);
                localStorage.setItem('jwt', data.jwt);
                window.location.href= urlcalendarioHtml;
            }else{
                document.querySelector('#logError').innerHTML = "error al encontrar usario o contraseña";

            }
            
        }else{
            document.querySelector('#logError').innerHTML = "error al encontrar usario o contraseñaaaaa";
        }
    })
}