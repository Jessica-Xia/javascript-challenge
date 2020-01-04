// G
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");


var $search = document.querySelector("#search");
var $reset = document.querySelector("#reset");

$search.addEventListener("click", SearchButtonClick);
$reset.addEventListener("click", ResetButtonClick);



var filteredData = data;

function SearchButtonClick() {
  var filterDate = $dateInput.value.trim();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();

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
  $tbody.innerHTML = "";

  for (var i = 0; i < filteredData.length; i++) {
    
    var address = filteredData[i];
    var tlists = Object.keys(address);
    
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < tlists.length; j++) {
      var tuple = tlists[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[tuple];
    }
  }
}


function ResetButtonClick(){
  renderTable();
}


renderTable();