
var tbody = d3.select("tbody");
var dateInput = d3.select("#datetime");
var search = d3.select("#search");
var reset = d3.select("#reset");


search.on("click", handleSearchButtonClick);
reset.on("click", handleResetButtonClick);


var tableData = data;


function renderTable() {

  tbody.html("");
  
  tableData.forEach((Report) => {
    var row = tbody.append("tr");
    Object.entries(Report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
  
}


function handleSearchButtonClick() {
  var filterDate = dateInput.property("value");
  
 
  if (filterDate != "") {
    tableData = data.filter(function (address) {
      var addressDate = address.datetime;
      return addressDate === filterDate;
    });
  }
  else { tableData };
  renderTable();
}

function handleResetButtonClick(){
  renderTable();
}


renderTable();

