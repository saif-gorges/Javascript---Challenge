// Assign the data from `data.js` to a descriptive variable
var tableData = data;

console.log(tableData)

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form

function runEnter() {  
// Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");  
  
  // Get the value property of the input button
  var inputValue = inputElement.property("value");  
  console.log(inputValue);
  console.log(people);  
  var filteredData = people.filter(person => person.bloodType === inputValue);  
  console.log(filteredData);  
  
  // BONUS: Calculate summary statistics for the age field of the filtered data  // First, create an array with just the age values
  var ages = filteredData.map(person => person.age); 
};

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