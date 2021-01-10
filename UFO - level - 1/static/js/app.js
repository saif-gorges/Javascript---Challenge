// Assign the data from `data.js` to a descriptive variable
var tableData = data;

console.log(tableData)

// Get a reference to the table body
var tbody = d3.select("tbody");

// Append a row for each value
tableData.forEach(function(sighting) {
var row = tbody.append("tr");
Object.entries(sighting).forEach(function([key, value]) {

// Append a cell to the row for each value
var cell = row.append("td");
cell.text(value);
});
});