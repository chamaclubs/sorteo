
let termotroUno={
    porcentaje:0,
    monto:0
}
let termometroDos={
    porcentaje:0,
    monto:0
}
let termometroTres={
    porcentaje:0,
    monto:0
}
let rutaSorteoUno="sistema/sorteos/uno/"
let rutaSorteoDos="sistema/sorteos/dos/"
let rutaSorteoTres="sistema/sorteos/tres/"
db.ref(rutaSorteoUno).orderByValue().once('value', function(datSort) {
      console.log("Sorteo numero :"+datSort.key+" Cargado!")
    let datUno=datSort.val();
      termotroUno={
        porcentaje:datUno.monto,
        monto:datUno.porcentaje
    }
    construirTermometro("divTermometroUno",datUno.porcentaje,datUno.monto);
})
db.ref(rutaSorteoDos).orderByValue().once('value', function(datSort) {
    console.log("Sorteo numero :"+datSort.key+" Cargados!")
  let datDos=datSort.val();
  termometroDos={
      porcentaje:datDos.monto,
      monto:datDos.porcentaje
  }
  construirTermometro("divTermometroDos",datDos.porcentaje,datDos.monto);
})
db.ref(rutaSorteoTres).orderByValue().once('value', function(datSort) {
      console.log("Sorteo numero :"+datSort.key+" Cargado!")
    let datTres=datSort.val();
    termometroTres={
        porcentaje:datTres.monto,
        monto:datTres.porcentaje
    }
    construirTermometro("divTermometroTres",datTres.porcentaje,datTres.monto);
})


function construirTermometro(termometro,porcentaje,monto){
contenido=`
<canvas  class="mx-auto" style= " -moz-box-shadow:10px 10px 5px #000000;
-webkit-box-shadow:10px 10px 5px #000000;

box-shadow:10px 10px 5px #000000;border:dashed 5px #000000;
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
border-radius: 5px;" 
data-font-title="hoLA"
data-type="linear-gauge"
data-width="180"
data-height="500"
data-units="°C"
data-min-value="0"
data-start-angle="90"
data-ticks-angle="180"
data-value-box="true"
data-max-value="100"
data-major-ticks="0,20,40,60,80,100"
data-minor-ticks="2"
data-stroke-ticks="true"
data-highlights='[ {"from": 90, "to": 100, "color": "rgba(200, 50, 50, .75)"} ]'
data-color-plate="rgba(250, 250, 250, 0.75)"
colorBarEnd="rgba(250, 250, 250, 0.75)"
data-border-shadow-width="0"
data-borders="true"
data-needle-type="arrow"
data-needle-width="2"
data-needle-circle-size="7"
data-needle-circle-outer="true"
data-needle-circle-inner="false"
data-animation-duration="1500"
data-animation-rule="linear"
data-bar-width="10"
data-value=`+porcentaje+`
></canvas>
<h1 class="bronce-header anim-bronce-glow mx-auto">$ `+monto+`</h1>
`;
$('#'+termometro).html(contenido)

}