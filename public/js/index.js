google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

let disp;

$(document).ready(() => {
    $.get("/buscar", {}, (data) => {
      disp = data;
    });
});

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Dispositivos', 'Numero de usuarios'],
        [disp[0][0], disp[1][0]],
        [disp[0][1], disp[1][1]],
        [disp[0][2], disp[1][2]],
        [disp[0][3], disp[1][2]],
        [disp[0][4], disp[1][4]],
        [disp[0][5], disp[1][5]],
        [disp[0][6], disp[1][6]],
    ]);

    var options = {
        title: 'Dispositivos más usados',
        pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('dispchart'));
    chart.draw(data, options);
}
