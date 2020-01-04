
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $search = document.querySelector("#search");
var $reset = document.querySelector("#reset");


$search.addEventListener("click", handleSearchButtonClick);
$reset.addEventListener("click", handleResetButtonClick);

var tableData = data;


function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    
    var address = tableData[i];
    console.log(address)
    var tlists = Object.keys(address);
    
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < tlists.length; j++) {
      var tuple = tlists[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[tuple];
    }
  }
}


function handleSearchButtonClick() {
  var filterDate = $dateInput.value;
  
 
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

