var locationHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var initialNumStores = 0;


//Table for data
  
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

function renderTableFooter(){
  var table = document.getElementsByTagName('table');

  var tableFooterElement = document.createElement ('tfoot');
  table.appendChild(tableFooterElement);

  var tableRowElement = document.createElement('tr');
  tableRowElement.setAttribute('id', 'totalTarget');
  tableFooterElement.appendChild(tableRowElement);

  for(var i = 0; i < locationHours.length; i++) {
    var tdHourlyTotal = document.createElement('th');
    tdHourlyTotal.setAttribute('scope','col');
    tdHourlyTotal.textContent = ' ';
    tableRowElement.appendChild(thHourlyTotal);
  }

  var tableHeadingElement = document.createElement('th');
  tableHeadingElement.textContent = 'Hourly Total: ';
  tableHeadingElement.setAttribute('scope', 'row');
  tableRowElement.appendChild(tableHeadingElement);
};





//Location object
function Location(locationcity, minCustHr, maxCustHr, avgCookiesPerCust, locationHours, hourlySalesArray, initialTotalSales) {
  this.locationcity = locationcity
  this.minCustHr = minCustHr
  this.maxCustHr = maxCustHr
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.locationHours = locationHours;
  this.hourlySalesArray = hourlySalesArray;
  this.initialTotalSales = initialTotalSales;
};

// Number generator functions
  Location.prototype.avgCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  };

  Location.prototype.avgCookieSales = function() {
  var hourlySales = [];
  for (var i = 0; i < 14; i++) {
    hourlySales.push(Math.round(this.avgCustomersPerHour() * this.avgCookiesPerCust));
     }
      return hourlySales;
 };

  Location.prototype.totalCookieSales = function() {
    var cookieSalesSum = 0;
    for (var i = 0; i < 15; i++) {
    cookieSalesSum += this.avgCookieSales()[i];
  }
    return cookieSalesSum; 
};



Location.prototype.renderSalesData = function(){
  var table = document.getElementById('table');
  var tableRowElement = document.createElement('tr');
  table.appendChild(tableRowElement);

  var tableHeadingElement = document.createElement('th');
  tableHeadingElement.setAttribute('scope', 'row');
  tableHeadingElement.textContent = `${this.locationcity}:`;
  tableRowElement.appendChild(tableHeadingElement);

  for(var i = 0; i < locationHours.length; i++){
    var tableDataElement = document.createElement('td');
    tableDataElement.setAttribute('class', `${locationHours[i]}`);
    tableDataElement.textContent = (`${this.avgCookieSales()[i]}`);
    tableRowElement.appendChild(tableDataElement);
  }
  td = document.createElement('td');
  td.setAttribute('class', 'total');
  td.textContent = `${this.avgCookieSales()}`;
  tableRowElement.appendChild(td);
  
}; 
  
renderTableHead(); 
   
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
    

//Executing Code
  

renderTableFooter();

