var locationHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var numberOfLocations = 0;
var locationArray = [0];
var sumArray = [];

  
function renderTableHead(){
  var mainElement = document.getElementById('locationdata');
  var tableElement = document.createElement('table')
  tableElement.setAttribute('id', 'table');
  mainElement.appendChild(tableElement);

  var captionElement = document.createElement('caption');
  captionElement.textContent = 'Sales Data by Time and Location';
  tableElement.appendChild(captionElement);

  var tableHeadElement = document.createElement('thead');
  tableElement.appendChild(tableHeadElement);

  var tableRowElement = document.createElement('tr');
  tableHeadElement.appendChild(tableRowElement);

  var tableHeadingElement = document.createElement('th');
  tableHeadingElement.setAttribute ('scope', 'col');
  tableHeadingElement.textContent = 'Location';
  tableRowElement.appendChild(tableHeadingElement);

  for(var i = 0; i < locationHours.length; i++){
    tableHeadingElement = document.createElement('th');
    tableHeadingElement.textContent = `${locationHours[i]}`;
    tableRowElement.appendChild(tableHeadingElement);
}
  tableHeadingElement = document.createElement('th');
  tableHeadingElement.setAttribute('scope', 'col');
  tableHeadingElement.textContent = 'Daily Location Total:';
  tableRowElement.appendChild(tableHeadingElement);
}

function renderTableFooter() {
  var table = document.getElementById('table');

  var tfoot = document.createElement ('tfoot');
  table.appendChild(tfoot);

  var tr = document.createElement('tr');
  tr.setAttribute('id', 'totals');
  tfoot.appendChild(tr);

  var th = document.createElement('th');
  th.textContent = 'Hourly Total';
  th.setAttribute('scope', 'row');
  tr.appendChild(th);

  for(var i = 0; i < locationHours.length; i++) {
    var sumValue = 0;
    var dailyLocationSum = 0;
    var columnValues = document.getElementsByClassName(`${[i]}`);
    var dailyValues = document.getElementsByClassName('sum');
    // for (var j = 0; j < locationArray.length; j++) {
    //   dailyLocationSum += parseInt(dailyValues[j].textContent);
    //   sumValue += parseInt(columnValues[j].textContent);
    // }
    // tableData = document.createElement ('td');
    // tableData.setAttribute ('class', 'columnTotals');
    // tableData.textContent = sumValue;
    // row.appendChild(tableData)
    // sumArray.push(sumValue);
    var tdHourlyTotal = document.createElement('th');
    tdHourlyTotal.setAttribute('scope','col');
    tdHourlyTotal.textContent = ' ';
    tr.appendChild(tdHourlyTotal);
  }
    // tableData = document.createElement('td');
    // tableData.textContent = dailyLocationSum.toLocaleString();
    // row.appendChild(td);
    // sumArray.push(dailyLocationSum);

  var tableHeadingElement = document.createElement('th');
  tableHeadingElement.textContent = 'Hourly Total: ';
  tableHeadingElement.setAttribute('scope', 'row');
  tr.appendChild(tableHeadingElement);
};



function Location(locationcity, minCustHr, maxCustHr, avgCookiesPerCust, locationHours, hourlySalesArray, initialTotalSales) {
  this.locationcity = locationcity
  this.minCustHr = minCustHr
  this.maxCustHr = maxCustHr
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.locationHours = locationHours;
  this.hourlySalesArray = hourlySalesArray;
  this.initialTotalSales = initialTotalSales;
};


  Location.prototype.avgCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  };

  Location.prototype.avgCookieSales = function() {
  var hourlySales = [];
  for (var i = 0; i < locationHours.length; i++) {
    hourlySales.push(Math.round(this.avgCustomersPerHour() * this.avgCookiesPerCust));
     }
      return hourlySales;
 };

  Location.prototype.totalCookieSales = function() {
    var cookieSalesSum = 0;
    for (var i = 0; i < locationHours.length; i++) {
    cookieSalesSum += this.avgCookieSales()[0];
  }
    return cookieSalesSum.toLocaleString(); 
};

Location.prototype.renderSalesData = function(){
  var table = document.getElementById('table');
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var tableHeadingElement = document.createElement('th');
  tableHeadingElement.setAttribute('scope', 'row');
  tableHeadingElement.textContent = `${this.locationcity}:`;
  tr.appendChild(tableHeadingElement);

  for(var i = 0; i < locationHours.length; i++){
    var tableDataElement = document.createElement('td');
    tableDataElement.setAttribute('class', `${locationHours[i]}`);
    tableDataElement.textContent = (`${this.avgCookieSales()[i]}`);
    tr.appendChild(tableDataElement);
  }
  td = document.createElement('td');
  td.setAttribute('class', 'total');
  td.textContent = `${this.totalCookieSales()[i]}`;
  tr.appendChild(td);
  
}; 


renderTableHead(); 
renderTableFooter();

//NEW STORE DATA*****************************
var seattle = new Location('Seattle', 23, 65, 6.3);
seattle.renderSalesData();

var tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.renderSalesData();

var dubai = new Location('Dubai', 11, 38, 3.7);
dubai.renderSalesData();

var paris = new Location('Paris', 20, 38, 2.3);
paris.renderSalesData();

var lima = new Location('Lima', 2, 16, 4.6);
lima.renderSalesData();



  
//EVENT HANDLER***********************
var newLocationForm = document.getElementById('addLocationForm');

newLocationForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  var locationcity = event.target.locationcity.value;
  var minCustHr = event.target.minCustHr.value;
  var maxCustHr = event.target.maxCustHr.value;
  var avgCookiesPerCust = event.target.avgCookiesPerCust.value;
  var newLocation = new Location(locationcity, minCustHr, maxCustHr, avgCookiesPerCust);
  newLocation.renderSalesData();
}
  

  
  


