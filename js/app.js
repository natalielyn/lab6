'use strict';

var locationHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var locationSalesByHour = [];
var locationData = [
  [`Seattle`, 23, 65, 6.3, [], 0],
  [`Tokyo`, 3, 24, 1.2, [], 0],
  [`Dubai`, 11, 38, 2.3, [], 0],
  [`Paris`, 20, 38, 2.3, [], 0],
  [`Lima`, 2, 16, 4.6, [], 0],
];

var locationArray = [];

var Location = function (locationcity, minCustHr, maxCustHr, avgCookiesPerCust, salesByHour, totalDailySales) {
  this.locationcity = locationcity;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.salesByHour = salesByHour;
  this.totalDailySales = totalDailySales;
};


Location.prototype.avgCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  };

  Location.prototype.avgCookieSales = function() {
  for (var i = 0; i < locationHours.length; i++) {
    var salesByHour = Math.round(this.avgCustomersPerHour() * this.avgCookiesPerCust);
    this.salesByHour.push(salesByHour);
  }
      locationSalesByHour.push(this.salesByHour);
 };

  Location.prototype.totalCookieSales = function() {
    this.totalDailySales = 0;
    for(var i = 0; i < this.salesByHour.length; i++) {
      this.totalDailySales += this.salesByHour[i];
    };
};

//TABLEHEADER
function renderTableHead() {
  var section = document.getElementById ('locationSalesLists');
  var table = document.createElement('table');
  table.setAttribute ('id', 'table');
  section.appendChild(table);


  var tableHead = document.createElement('th');
  tableHead.textContent = 'Location';
  table.appendChild(tableHead);

  var tableRow = document.createElement('tr');
  tableHead.appendChild(tableRow);
  
  var th = document.createElement('th');
  th.textContent = ``;
  tableRow.appendChild(th);

  for(var i = 0; i < locationHours.length; i++ ) {
    var th = document.createElement('th');
    th.textContent = `${locationHours[i]}`;
    tableRow.appendChild(th);
  }
  var thLocationTotal = document.createElement('th');
  thLocationTotal.textContent = `Daily Location Total`;
  tableRow.appendChild(thLocationTotal);

};

  function renderTableFoot() {
    var table = document.getElementById('locationSalesLists');

    var tfoot = document.createElement('tfoot');
    table.appendChild(tfoot);
  
    var tr = document.createElement('tr');
    tr.setAttribute('id','totals');
    tfoot.appendChild(tr);
  
    var td = document.createElement('td');
    td.textContent = 'Hourly Total';
    tr.appendChild(td);

    var finalTotal = 0;
    for (var i = 0; i < locationHours.length; i++) {
      var hourTotal = 0;
      for (var j = 0; j < locationSalesByHour.length; j++) {
        hourTotal += parseInt(locationSalesByHour[j][i]);
      }
      finalTotal += hourTotal;
      td = document.createElement('td');
      td.textContent = hourTotal;
      tr.appendChild(td);
      }
      td = document.createElement('td');
      td.textContent = finalTotal;
      tr.appendChild(td);
  };

Location.prototype.renderSalesData = function() {
    var table = document.getElementById('locationSalesLists');
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var th = document.createElement('th');
    th.textContent = `${this.locationcity}:`;
    tr.appendChild(th);

    for(var i = 0; i < locationHours.length; i++){
      var sales = this.salesByHour[i];
      var td = document.createElement('td');
      td.textContent = sales;
      tr.appendChild(td);
}

  td = document.createElement('td');
  td.setAttribute('class', 'total');
  td.textContent = `${this.totalDailySales}`;
  tr.appendChild(td);

};



var newLocationForm = document.getElementById('addLocationForm');
newLocationForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  var locationcity = event.target.locationcity.value;
  var minCustHr = event.target.minCustHr.value;
  var maxCustHr = event.target.maxCustHr.value;
  var avgCookiesPerCust = event.target.avgCookiesPerCust.value;
  var newLocation = new Location(locationcity, minCustHr, maxCustHr, avgCookiesPerCust, [], 0);
  newLocation.avgCookieSales();
  newLocation.totalCookieSales();
  newLocation.renderSalesData();
  renderTableFoot();
}

function removeFooter() {
  var section = document.getElementById('locationSalesLists');
  var index_to_remove = section.childNodes.length -1;
  section.removeChild(section.childNodes[index_to_remove]);
}
  
(function displaySales(data) {
  renderTableHead();
  for(var i = 0; i < data.length; i++){
    data[i] = new Location(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5]);
    data[i].avgCookieSales();
    data[i].totalCookieSales();
    data[i].renderSalesData();
  };
})(locationData);

