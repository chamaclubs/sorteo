google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(iniciarUno);

function iniciarUno() {
    var dataUno = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Bronce', 20],

    ]);
    var dataDos = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Plata', 47],

    ]);
    var dataTres = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Oro', 90],

    ]);
    var options = {
        width: 900, height: 360,
        redFrom: 90, redTo: 100,
        yellowFrom: 75, yellowTo: 90,
        minorTicks: 5
    };
    var chartUno = new google.visualization.Gauge(document.getElementById('divUno'));
    var chartDos = new google.visualization.Gauge(document.getElementById('divDos'));
    var chartTres = new google.visualization.Gauge(document.getElementById('divTres'));
    chartUno.draw(dataUno, options);
    chartDos.draw(dataDos, options);
    chartTres.draw(dataTres, options);
    // data.setValue(0, 1, 40 + Math.round(60 * Math.random()));

}   
function setear(bronce,plata,oro) {
    var dataUno = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Bronce', bronce],

    ]);
    var dataDos = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Plata', plata],

    ]);
    var dataTres = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Oro', oro],

    ]);
    var options = {
        width: 900, height: 220,
        redFrom: 90, redTo: 100,
        yellowFrom: 75, yellowTo: 90,
        minorTicks: 5
    };
    var chartUno = new google.visualization.Gauge(document.getElementById('divUno'));
    var chartDos = new google.visualization.Gauge(document.getElementById('divDos'));
    var chartTres = new google.visualization.Gauge(document.getElementById('divTres'));
    chartUno.draw(dataUno, options);
    chartDos.draw(dataDos, options);
    chartTres.draw(dataTres, options);
    // data.setValue(0, 1, 40 + Math.round(60 * Math.random()));

}   
