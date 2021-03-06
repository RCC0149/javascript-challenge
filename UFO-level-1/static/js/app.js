// from data.js
var tableData = data;

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Create event handler 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Use D3 to select the table body
    var tbody = d3.select("tbody");

    // Remove previously viewed sightings table data
    tbody.html("");

    // Loop through an array of sightings and build the entire table body from scratch

    // Call the custom function with filter()
    var filterSightings = tableData.filter(sightings => sightings.datetime == inputValue);

    // Iterate through each sighting on the specific date input
    filterSightings.forEach((fs) => {

        // Append one table row per sighting
        var row = tbody.append("tr");

        // Append row data concerning the sighting
        row.append("td").text(fs.datetime);
        row.append("td").text(fs.city);
        row.append("td").text(fs.state);
        row.append("td").text(fs.country);
        row.append("td").text(fs.shape);
        row.append("td").text(fs.durationMinutes);
        row.append("td").text(fs.comments);
  
    });

};

