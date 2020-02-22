// G
var tbody = d3.select("tbody");
var dateInput = d3.select("#datetime");
var stateInput = d3.select("#state");
var cityInput = d3.select("#city");
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");

var search = d3.select("#search");
var reset = d3.select("#reset");

search.on("click", SearchButtonClick);
reset.on("click", ResetButtonClick);

var filteredData = data;

function SearchButtonClick() {
  
  var filterDate = dateInput.property("value").trim();
  var filterCity = cityInput.property("value").trim().toLowerCase();
  var filterState = stateInput.property("value").trim().toLowerCase();
  var filterCountry = countryInput.property("value").trim().toLowerCase();
  var filterShape = shapeInput.property("value").trim().toLowerCase();


  if (filterDate != "") {
    filteredData = filteredData.filter(function (date) {
    var dataDate = date.datetime;
    return dataDate === filterDate;
});

}

if (filterCity != "") {
    filteredData = filteredData.filter(function (city) {
    var dataCity = city.city;
    return dataCity === filterCity;
});
}

if (filterState != "") {
    filteredData = filteredData.filter(function (state) {
        var dataState = state.state;
        return dataState === filterState;
    });
}

if (filterCountry != "") {
    filteredData = filteredData.filter(function (country) {
        var dataCountry = country.country;
        return dataCountry === filterCountry;
    });
}

if (filterShape != "") {
    filteredData = filteredData.filter(function (shape) {
        var dataShape = shape.shape;
        return dataShape === filterShape;
    });
}


  renderTable();

}


function renderTable() {
  tbody.html("");
  
  filteredData.forEach((Report) => {
    var row = tbody.append("tr");
    Object.entries(Report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
}


function ResetButtonClick(){
  renderTable();
}


renderTable();

