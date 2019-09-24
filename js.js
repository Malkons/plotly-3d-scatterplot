var verticalArr = [];

var horizontalArr = [];

var colorArr = [];

function verticalAxis(value) {
    verticalArr = [];
    verticalArr.push(value);
    console.log("vertical Axis: " + verticalArr);
    $("#vertical").text("Dependent Variable set to: " + verticalArr);
};

function horizontalAxis(value) {
    horizontalArr = [];
    horizontalArr.push(value);
    console.log("horizontal Axis: " + horizontalArr);
    $("#horizontal").text("Independent Variable set to: " + horizontalArr);
};

function colorAxis(value) {
    colorArr = [];
    colorArr.push(value);
    console.log("Color Axis: " + colorArr);
    $("#color").text("Color Variable set to: " + colorArr);
};

function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/auto-mpg.csv", function (data) { processData(data) });
};

function processData(allRows) {
    var vertical = verticalArr[0];
    var horizontal = horizontalArr[0];
    var color = colorArr[0];
    console.log(allRows);
    var x = [], y = [], colorPlot = [];

    for (var i = 0; i < allRows.length; i++) {
        row = allRows[i];
        x.push(row[horizontal]);
        y.push(row[vertical]);
        colorPlot.push(row[color]);
    }
    console.log('X', x, 'Y', y, 'color plot', colorPlot);
    makePlotly(x, y, colorPlot);
}

function makePlotly(x, y, colorPlot) {
    var vertical = verticalArr[0];
    var horizontal = horizontalArr[0];
    var plotDiv = document.getElementById("plot");

    var traces = [{
        y: y,
        x: x,
        z: colorPlot,
        mode: "markers",
        type: "scatter3d",
        
        marker: {
            color: colorPlot,
            showscale: true,
        },
    }];

    Plotly.newPlot('myDiv', traces,
        {
            title: horizontal + " vs " + vertical,
            xaxis: { title: horizontal },
            yaxis: { title: vertical }
        });

};

//makeplot();
