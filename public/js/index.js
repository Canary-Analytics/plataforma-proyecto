google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

$("#boton").click( function() {
   $.get("/buscar",{}, function (data) {

     console.log(data);

   });
});

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', datos[0]],
        ['Eat', datos[1]],
        ['Commute', datos[2]],
        ['Watch TV', datos[3]],
        ['Sleep', datos[4]]
    ]);

    var options = {
        title: 'My Daily Activities',
        pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}
