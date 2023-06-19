let form = document.querySelector('#formulario');
fetch('componetes/formActividad.html')
        .then((response) => response.text())
        .then( (formulario) =>{
            console.log("actividad");
            document.querySelector('#formulario').innerHTML = formulario;
        });
let butCrear = document.querySelector('#butCrear');
butCrear.addEventListener('click', crear);
let actividad = {};
function crear() {
    actividad.fecha = document.querySelector('#fecha').value;
    actividad.lugar = document.querySelector('#lugar').value;
    actividad.curso = document.querySelector('#curso').value;
    actividad.fecha = document.querySelector('#fecha').value;
    actividad.titulo = document.querySelector('#titulo').value;
    actividad.des = document.querySelector('#des').value;
    console.log(butCrear);
    console.log(actividad);
    fetch(urlActividadesApi, {
    // fetch("http://192.168.56.114/ProyectoFinal/proyectoFinal/codigo/php/actividades.php", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
            body: JSON.stringify(actividad),
    }).then(response => {
        return response.json();
        // switch(response.status){
        //     case 200:
        //         return response.json();
        //     default:
        // }
    })
    .then(data => {
        if(data){
            console.log(data);
            window.location.href = urlcalendarioHtml;
        }else{
            console.log("no hay datos");
        }
    })
}