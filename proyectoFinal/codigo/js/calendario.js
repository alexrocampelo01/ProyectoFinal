//Decraramos variables del calendario
//empezamos con los array que contien los textos
meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
lasemana=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]
diassemana=["lun","mar","mié","jue","vie","sáb","dom"];

let hoy = new Date(); //dia actual
let diaSemanaHoy = hoy.getDate(); // dia de la semana actual
let diaMesHoy = hoy.getDate(); //dia del mes actual
let mesHoy = hoy.getMonth(); //mes actual
let anohoy = hoy.getFullYear(); // año actual
let mescal = mesHoy;
let anocal = anohoy;
//cargamos el componete donde va el calendario
let celdas = document.querySelector('#celdas');
userRegistrado();
//comprobamos que el usario se alla registrado
function userRegistrado(){
    console.log(localStorage.tipoUser);
    if(localStorage.tipoUser){
        console.log("autorizado");
    }else{
        //window.location.href = "http://localhost/ProyectoFinal/proyectoFinal/codigo/html/login.html";
        window.location.href = "http://192.168.56.114/ProyectoFinal/proyectoFinal/codigo/html/login.html";
    }
}
cabeceraCalendario();
filaNombreDias();
genararDiasCalendario();

//traemos las dibison de informacion
let divInformacion = document.querySelector('#informacion');
//crea la cabecera del calendarioS
function cabeceraCalendario(){ //funciona
    document.querySelector('#titulo')
    .textContent = meses[mescal]+" de " + anocal; //mes en el titulo
    let mesAnt = mescal -1; //mes anterio
    let mesSig = mescal +1; //mes siguiente
    //si me paso de enero a diciembre y al contrario
    if (mesAnt<0) mesAnt = 11; 
    if (mesSig>11) mesSig = 0; 
    //lo aisnamos a los botones
    let MesAnterior = document.querySelector('#ant');
    //console.log(MesAnterior);
    MesAnterior.textContent= meses[mesAnt];
    //MesAnterior.addEventListener('click', mesAntes);
    let MesSiguiente = document.querySelector('#sig');
    //console.log(MesSiguiente);
    MesSiguiente.textContent= meses[mesSig];
    //MesSiguiente.addEventListener('click', mesSiguiente);
}
//genermos los nombres de los dias empezando por lunes 
function filaNombreDias(){ //funcionaS
    let diasLetra = document.createElement('div')
    diasLetra.classList.add('filaDiasLetra');
    for(i=0; i<7; i++){
        let diaLetra = document.createElement('div');
        diaLetra.classList.add('diaL');
        let nombreDia = document.createElement('h4');
        nombreDia.textContent = diassemana[i];
        diaLetra.append(nombreDia);
        diasLetra.append(diaLetra);
    }
    // console.log(diasLetra);
    // console.log(celdas);
    celdas.append(diasLetra);
}
function genararDiasCalendario(){
    let priDiaMes = new Date(anocal,mescal,"1"); //primer dia de cada mes
    let ultDiaMes = new Date(anocal,mescal +1, 0); //primer dia de cada mes
    let priDiaLSemana = priDiaMes.getDay(); //cojemos el nuemro

    if (priDiaLSemana==-1) {priDiaLSemana=6;}
    //buscamos numero primer dia
    let priDiaNMes = priDiaMes.getDate();
    let fechCelda = priDiaNMes - priDiaLSemana;
    empezar = priDiaMes.setDate(fechCelda);
    //console.log(empezar);
    diaMes = new Date();
    for(i=1; i<7; i++){
        let fila = document.createElement('div');
        fila.classList.add('fila');
        for(j=0; j<7; j++) {
            //generar las fechas
            let calentDia = diaMes.getDate();
            //ultDiaMes = diaMes;
            //crear una celda del calendario
            let dia = document.createElement('div');
            dia.classList.add('dia');
            //crear apartado fecha
            let diaNum = document.createElement('h6');
            diaNum.textContent=calentDia;
            //recijemos las actividades
            obtenerActividadFecha(diaMes, dia); //generamos la actividad
            //creamos actividad
            dia.append(diaNum);
            fila.append(dia);
            calentDia = calentDia+1;
            diaMes.setDate(calentDia);
        }
        celdas.append(fila);
    }
    console.log("debug==================");
        
}
console.log("hola esto es el final");
// function obtenerActividadesMes(fechaIni, fechaFin){
//     fechaIni = formatearFechaSql(fechaIni);
//     fechaFin = formatearFechaSql(fechaFin);
//     console.log("obtener actividades");
//     console.log(`url //http://localhost/proyectoFinal/proyectoFinal/codigo/php/actividades.php?fechaIni=${fechaIni}&fechaFin=${fechaFin}`);
//     fetch(`http://localhost/proyectoFinal/proyectoFinal/codigo/php/actividades.php?fechaIni=${fechaIni}&fechaFin=${fechaFin}`)
//     .then(response => response.json())
//     .then( actividades => {
//         console.log(actividades);
//         return(actividades);
//     })
// }
function obtenerActividadFecha(fecha, dia){
    //console.log(fecha);
    //console.log(`http://192.168.56.114/proyectoFinal/proyectoFinal/codigo/php/actividades.php?fechaBus=${formatearFechaSql(fecha)}`);
    //fetch(`http://localhost/proyectoFinal/proyectoFinal/codigo/php/actividades.php?fechaBus=${formatearFechaSql(fecha)}`)
    fetch(`http://192.168.56.114/proyectoFinal/proyectoFinal/codigo/php/actividades.php?fechaBus=${formatearFechaSql(fecha)}`)
    .then(response => {
        switch (response.status){
            case 200:
               return response.json();
            case 404:
                return "noData";
            break
        }
    })
    .then( actividad => {
        if(actividad){
            //console.log(actividad);
            crearActividad (actividad, dia);
        }else{
            return "noData";
        }
    })
}
function crearActividad(actividad,dia){
    //console.log(dia);
    //console.log(actividad);
    let actividadSpan = document.createElement('span');
    actividadSpan.classList.add('actividad');
    actividadSpan.dataset.id_acti = actividad[0].id_a;
    actividadSpan.addEventListener('click', crearInfo);
    //console.log(actividad[0].titulo);
    actividadSpan.textContent=actividad[0].titulo;
    dia.append(actividadSpan);
}
function formatearFechaSql(fecha){
    //console.log(fecha);
    //console.log('hora'+fecha);
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let ano = fecha.getFullYear();
    let fechaFormateada = `${ano}-${mes}-${dia}`;
    return fechaFormateada;
}
function crearInfo(e){
    //console.log("algo");
    console.log(e.target.dataset.id_acti);
    idAct = e.target.dataset.id_acti; 
    //console.log(idAct);
    //fetch(`http://localhost/proyectoFinal/proyectoFinal/codigo/php/actividades.php?idAct=${idAct}`)
    fetch(`http://192.168.56.114/ProyectoFinal/proyectoFinal/codigo/php/actividades.php?idAct=${idAct}`)
    .then(response => {
        switch (response.status){
            case 200:
               return response.json();
            case 404:
                return "noData";
            break
        }
    })
    .then( actividad => {
        if(actividad){
            console.log("algo");
            //console.log(actividad);
            insertarInfo(actividad[0]);
        }else{
            return "noData";
        }
    })
}
let divInfoAct = document.createElement('div');
    divInfoAct.classList.add('informacionAct');
    divInformacion.append(divInfoAct);
function insertarInfo(actividad){
    console.log(actividad);
    //cremos vaciamos el div
    divInfoAct.innerHTML = " ";
    
    //ponemos el titulo
    let divTitulo = document.createElement('h4');
    divTitulo.classList.add('tituloInfo');
    divTitulo.textContent = actividad.titulo;

    let listaInfo = document.createElement('ul');
    listaInfo.classList.add('InfoAct');

    //cremos la parte de la lista
    let lugar = document.createElement('li');
    lugar.textContent = `Lugar: ${actividad.lugar}`;
    let fecha = document.createElement('li');
    fecha.textContent = `Fecha y hora: ${actividad.fecha}`;
    let curso = document.createElement('li');
    curso.textContent = `Curso: ${actividad.curso}`;

    divInfoAct.append(divTitulo);
    divInfoAct.append(listaInfo);
    listaInfo.append(lugar);
    listaInfo.append(fecha);
    listaInfo.append(curso);


}
//anadimos los metodos de pasar los meses
// function mesAntes(){
//     let nuevoMes = new Date(); //creamos un objeto fecha
//     let priDiaMes = new Date(anocal,mescal,"1"); //cojemos el primerdia del m,es acrtual
//     priDiaMes--;//le restamos uno y pasamos al mes anterior
//     nuevoMes.setTime(priDiaMes);
//     mescal = nuevoMes.getMonth();
//     anocal = nuevoMes.getFullYear();
//     cabeceraCalendario(); //escribir la cabecera 
//     genararDiasCalendario(); // y los dias nuevos
// }
// function mesSiguiente(){
//     let nuevoMes = new Date(); //creamos un objeto fecha
//     let ultDiaMes = new Date(anocal,mescal +1, 0); //hayamos el ultimo dia del mes
//     ultDiaMes++; //le sumamos un dia
//     nuevoMes.setTime(ultDiaMes);
//     mescal = nuevoMes.getMonth();
//     annocal = nuevoMes.getFullYear();
//     cabeceraCalendario(); //escribir la cabecera 
//     genararDiasCalendario(); // y los dias nuevos
// }