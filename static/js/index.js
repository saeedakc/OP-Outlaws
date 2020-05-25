// // Define SVG area dimensions
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 30,
//   right: 30,
//   bottom: 30,
//   left: 30
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);

// // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // // Load data
// // d3.csv("/static/data/age_totals.csv").then(function(ageData) {

// //   // Print data
// //   console.log(ageData);

// var ageTotals = d3.csv("/static/data/age_totals.csv")
// var age0to24 = d3.csv("/static/data/age0to24.csv")
// var age25to34 = d3.csv("/static/data/age25to34.csv")
// var age35to44 = d3.csv("/static/data/age35to44.csv")
// var age45to54 = d3.csv("/static/data/age45to54.csv")
// var age55plus = d3.csv("/static/data/age55plus.csv")

// d3.csv("/static/data/age_totals.csv", function(ageTotal) {
//     var totalHeaders = ['Location', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']

//     // var layers = d3.layout.stack()(headers.map(function(totalAges) {
//     //     return ageTotal.map(function(d) {
//     //         return {x: d.Location, y: +d[totalAges]};
//     //     });
//     // }));
// })

// var trace1 = {
//     x: ageTotal, //['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
//     y: ageTotal.slice('Location'), //['Location'],
//     name: 'All Ages opioid consumption by year',
//     type: 'bar'
//   };
  
//   var data = [trace1];
  
//   var layout = {barmode: 'group'};
  
//   Plotly.newPlot('plot1', data, layout);