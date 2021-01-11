// Assign the data from `data.js` to a descriptive variable
var tableData = data;

console.log(tableData)

// Select the button & form
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form

// Get a reference to the table body

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the filter element & assign variable
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    // Filter
    var filterData = tableData.filter(day => day.datetime === inputValue);

    // Select table
    var tbody = d3.select("tbody");

    // Append a row for each value
    filterData.forEach(function(sighting) {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key,value]) {

    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
});
});
};