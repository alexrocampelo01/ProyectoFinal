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
//cargamos el componete donde va el calendario
let celdas = document.querySelector('#celdas');
cabecera();
filaNombreDias();
primeraSemana();
function cabecera(){ //funciona
    document.querySelector('#titulo')
    .textContent = meses[mesHoy]+" de "+ anohoy; //mes en el titulo
    let mesAnt = mesHoy -1; //mes anterio
    let mesSig = mesHoy +1; //mes siguiente
    //si me paso de enero a diciembre y al contrario
    if (mesAnt<0) mesAnt = 11; 
    if (mesSig>11) mesSig = 0; 
    //lo aisnamos a los botones
    document.querySelector('#ant').textContent= meses[mesAnt];
    document.querySelector('#sig').textContent= meses[mesSig];
    
}
function filaNombreDias(){ //funciona
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
    console.log(diasLetra);
    console.log(celdas);
    celdas.append(diasLetra);
}
function primeraSemana(){
    let priDiaMes = new Date(anohoy,mesHoy,"1"); //primer dia de cada mes
    let priDiaLSemana = priDiaMes.getDay(); //cojemos el nuemro
    //console.log(diassemana[priDiaLSemana]);
    //buscamos numero primer dia
    let priDiaNMes = priDiaMes.getDate();
    let fechCelda = priDiaNMes - priDiaLSemana;
    empezar = priDiaMes.setDate(fechCelda);
    diaMes = new Date();
    diaMes.setTime(empezar);  
    console.log(diaMes);
    //cremos los elementos
    let fila = document.createElement('div');
    fila.classList.add('fila');

    celdas.append(fila);
    
    for(i=0; i<7; i++) {
        let dia = document.createElement('div');
        dia.classList.add('dia');
        //crear apartado fecha
        let diaNum = document.createElement('h6');
        diaNum.textContent=1;
        let actividad = document.createElement('span');
        actividad.classList.add('actividad');
        actividad.textContent="futbol";
        dia.append(diaNum);
        dia.append(actividad);
        fila.append(dia);
    }
}
console.log("hola esto es el final");
