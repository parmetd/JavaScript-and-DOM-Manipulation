// from data.js
var tableData = data;

// Select the input elements and get the raw HTML node
var tbody = d3.select("tbody");
var dateInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state");
var countryInput = d3.select("#country");
var shapeInputer = d3.select("#shape");

console.log(data);

tableData.forEach((ufos) => {
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(([key, value]) => {
         row.append("td").text(value);
    });
  });


//Event Handler
// Select the submit button
var submit = d3.select("#filter-btn");
// var submit = d3.select("#datetime");
// var submit = d3.select("#submit");

// submit.on("click", search)
// Complete the click handler for the form
submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  d3.selectAll("td").remove()

  // Select the input element and get the raw HTML node
  // Get the value property of the input element
  var inputValue = dateInput.property("value");
  // var filteredData = {};
  console.log(inputValue);
  
  function ufo(inputValue) {
    if (inputValue != "" && tableData.datetime === inputValue) {
      var filteredData = tableData.filter(inputValue);
      console.log(filteredData);
    
  
      // return tableData.datetime === inputValue;}
 
    
    // console.log(filteredData);}
 
    return filteredData.forEach((inputValue) => {
      var row = tbody.append("tr");
        Object.entries(inputValue).forEach(([key, value]) => {
           row.append("td").text(value);
    });
    
    // Clearing the Filter value
 d3.select("#datetime").node().value = "";
});}
ufo(inputValue);}
});


// starting the bonus for the html filters beyon date.
function search(event){
	//to prevent the page from refreshing
    d3.event.preventDefault();
    d3.selectAll("td").remove()
    var filterDict = {};

    if (dateInput.property("value") != ""){
        filterDict = {...filterDict,...{"datetime":dateInput.property("value")}};
    }

    if (cityInput.property("value") != ""){
        filterDict = {...filterDict,...{"city":cityInput.property("value")}};
    }

    if (stateInput.property("value") != ""){
        filterDict = {...filterDict,...{"state":stateInput.property("value")}};
    }

    if (countryInput.property("value") != ""){
        filterDict = {...filterDict,...{"country":countryInput.property("value")}};
    }

    if (shapeInputer.property("value") != ""){
        filterDict = {...filterDict,...{"shape":shapeInputer.property("value")}};
    }

    console.log(filterDict);
    var dataOutput = tableData;

    Object.entries(filterDict).forEach(function([key,value]) {

        console.log(key,value);
        dataOutput = dataOutput.filter(dataDict => dataDict[key] === value);

    })

    if (dataOutput.length > 0) {
        table(dataOutput);
    }

}  
  


function table(dataOutput) {
dataOutput.forEach((ufos) => {
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(([key, value]) => {
         row.append("td").text(value);
    });
  });
}


