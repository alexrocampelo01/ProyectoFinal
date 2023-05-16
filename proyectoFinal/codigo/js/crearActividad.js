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
function crear(){
    actividad.fecha = document.querySelector('#fecha').ariaValueMax;
    actividad.lugar = document.querySelector('#lugar').ariaValueMax;
    actividad.curso = document.querySelector('#curso').ariaValueMax;
    actividad.fecha = document.querySelector('#fecha').ariaValueMax;
    actividad.titulo = document.querySelector('#titulo').ariaValueMax;
    actividad.des = document.querySelector('#des').ariaValueMax;
    fetch("http://localhost/ProyectoFinal/proyectoFinal/codigo/php/actividades.php", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
            body: JSON.stringify(actividad),
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