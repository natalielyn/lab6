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

//random customer generator
Location.prototype.avgCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  };

//cookies sales per hour and store within location object
  Location.prototype.avgCookieSales = function() {
  for (var i = 0; i < locationHours.length; i++) {
    var hourlySales = Math.round(this.avgCustomersPerHour() * this.avgCookiesPerCust);
    this.salesByHour.push(hourlySales);
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
  var section = document.getElementById ('locationSalesLists')
  var table = document.createElement('table');
  table.setAttribute ('id', 'table');
  section.appendChild(table);

  var tableHead = document.createElement('tableHead');
  table.appendChild(tableHead);

  var tableRow = document.createElement('tableRow');
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


//TABLEFOOTER
  var renderTableFoot = function() {
    var table = document.getElementById('table');

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
    firstRow.appendChild(td);
    }
    td = document.createElement('td');
    td.textContent = finalTotal;
    firstRow.appendChild(td);

    renderTableFoot(); 
};

Location.prototype.renderSalesData = function() {
  var table = document.getElementById('table');
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var th = document.createElement('th');
    th.setAttribute('scope', 'row');
    th.textContent = `${this.locationcity}:`;
    tr.appendChild(th);

  for(var i = 0; i < locationHours.length; i++){
    var sales = this.salesByHour[i];
    var td = document.createElement('td');
    td.textContent = sales;
    tr.appendChild(td);
}; 

  td = document.createElement('td');
  td.setAttribute('class', 'total');
  td.textContent = `${this.totalDailySales}`;
  tr.appendChild(td);

};

renderTableHead();


//EVENT HANDLER***********************
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
}
  
(function displaySales(data) {
  for(var i = 0; i < data.length; i++){
    data[i] = new Location(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5]);
    data[i].avgCookieSales();
    data[i].totalCookieSales();
    data[i].renderSalesData();
  };
})(locationData);








//OLD CODE *******************************************
  
// function renderTableHead(){
//   var mainElement = document.getElementById('locationdata');
//   var tableElement = document.createElement('table')
//   tableElement.setAttribute('id', 'table');
//   mainElement.appendChild(tableElement);

//   var captionElement = document.createElement('caption');
//   captionElement.textContent = 'Sales Data by Time and Location';
//   tableElement.appendChild(captionElement);

//   var tableHeadElement = document.createElement('thead');
//   tableElement.appendChild(tableHeadElement);

//   var tableRowElement = document.createElement('tr');
//   tableHeadElement.appendChild(tableRowElement);

//   var tableHeadingElement = document.createElement('th');
//   tableHeadingElement.setAttribute ('scope', 'col');
//   tableHeadingElement.textContent = 'Location';
//   tableRowElement.appendChild(tableHeadingElement);

//   for(var i = 0; i < locationHours.length; i++){
//     tableHeadingElement = document.createElement('th');
//     tableHeadingElement.textContent = `${locationHours[i]}`;
//     tableRowElement.appendChild(tableHeadingElement);
// }
//   tableHeadingElement = document.createElement('th');
//   tableHeadingElement.setAttribute('scope', 'col');
//   tableHeadingElement.textContent = 'Daily Location Total:';
//   tableRowElement.appendChild(tableHeadingElement);
// }

// function renderTableFooter() {
//   var table = document.getElementById('table');

//   var tfoot = document.createElement ('tfoot');
//   table.appendChild(tfoot);

//   var tr = document.createElement('tr');
//   tr.setAttribute('id', 'totals');
//   tfoot.appendChild(tr);

//   var th = document.createElement('th');
//   th.textContent = 'Hourly Total';
//   th.setAttribute('scope', 'row');
//   tr.appendChild(th);

//   for(var i = 0; i < locationHours.length; i++) {
//     var sumValue = 0;
//     var dailyLocationSum = 0;
//     var columnValues = document.getElementsByClassName(`${[i]}`);
//     var dailyValues = document.getElementsByClassName('sum');
    
//     var tdHourlyTotal = document.createElement('th');
//     tdHourlyTotal.setAttribute('scope','col');
//     tdHourlyTotal.textContent = ' ';
//     tr.appendChild(tdHourlyTotal);
//   }
//     // tableData = document.createElement('td');
//     // tableData.textContent = dailyLocationSum.toLocaleString();
//     // row.appendChild(td);
//     // sumArray.push(dailyLocationSum);

//   var tableHeadingElement = document.createElement('th');
//   tableHeadingElement.textContent = 'Hourly Total: ';
//   tableHeadingElement.setAttribute('scope', 'row');
//   tr.appendChild(tableHeadingElement);
// };



//   Location.prototype.avgCustomersPerHour = function() {
//   return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
//   };

//   Location.prototype.avgCookieSales = function() {
//   var hourlySales = [];
//   for (var i = 0; i < locationHours.length; i++) {
//     hourlySales.push(Math.round(this.avgCustomersPerHour() * this.avgCookiesPerCust));
//      }
//       return hourlySales;
//  };

//   Location.prototype.totalCookieSales = function() {
//     var cookieSalesSum = 0;
//     for (var i = 0; i < locationHours.length; i++) {
//     cookieSalesSum += this.avgCookieSales()[0];
//   }
//     return cookieSalesSum.toLocaleString(); 
// };

// Location.prototype.renderSalesData = function(){
//   var table = document.getElementById('table');
//   var tr = document.createElement('tr');
//   table.appendChild(tr);
//   var tableHeadingElement = document.createElement('th');
//   tableHeadingElement.setAttribute('scope', 'row');
//   tableHeadingElement.textContent = `${this.locationcity}:`;
//   tr.appendChild(tableHeadingElement);

//   for(var i = 0; i < locationHours.length; i++){
//     var tableDataElement = document.createElement('td');
//     tableDataElement.setAttribute('class', `${locationHours[i]}`);
//     tableDataElement.textContent = (`${this.avgCookieSales()[i]}`);
//     tr.appendChild(tableDataElement);
//   }
//   td = document.createElement('td');
//   td.setAttribute('class', 'total');
//   td.textContent = `${this.totalCookieSales()[i]}`;
//   tr.appendChild(td);
  
// }; 




//NEW STORE DATA*****************************
// var seattle = new Location('Seattle', 23, 65, 6.3);
// seattle.renderSalesData();

// var tokyo = new Location('Tokyo', 3, 24, 1.2);
// tokyo.renderSalesData();

// var dubai = new Location('Dubai', 11, 38, 3.7);
// dubai.renderSalesData();

// var paris = new Location('Paris', 20, 38, 2.3);
// paris.renderSalesData();

// var lima = new Location('Lima', 2, 16, 4.6);
// lima.renderSalesData();



  


  
  


