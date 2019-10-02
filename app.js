'use strict';
 

var locationHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',
];
var initialNumStores = 0;
var InitialTotalTotal = 0;

// Number generator functions
Location.prototype.randomCustomers = function() {
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
};


Location.prototype.randomCookieSales = function() {
   for (var i = 0; i < hoursOpen; i++) {
     this.cookiesPurchasePerHour.push(Math.floor(this.randomCustomers() * this.avgCookiesPerCustomer)); this.initialTotalSales += this.hourlySalesArray
  }
    return result;
 };

Location.prototype.totalCookieSales = function() {
  var cookieSalesSum = 0;
  for (var i = 0; i < 15; i++) {
  cookieSalesSum += this.randomCookieSales()[i];
}
  return cookieSalesSum; 
};


    function render(){
    var storelistElement = document.getElementById('locationdata');
    }
    var storelistElement = document.getElementById('locationdata');

  
    var article = document.createElement('article');
    article.setAttribute('id', `${this.locationdata}`);
    storelistElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.storelist;
    article.appendChild(h2);

//Table for data
  
function renderTableHead(){
  var mainElement =document.getElementById('locationdata');
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

  for(var i = 0; i < hoursOpenTitle.length; i++){
    tableHeadingElement = document.createElement('th');
    tableHeadingElement.textContent = `${hours[i]}`;
    tableRowElement.appendChild(tableHeadingElement);
}
  tableHeadingElement = document.createElement('th');
  tableHeadingElement.setAttribute('scope', 'col');
  tableHeadingElement.textContent = 'Daily Location Total:';
  tableRowElement.appendChild(tableHeadingElement);
}

function renderTableFooter(){
  var targetLocationNode = document.getElementsByTagName('table')[0];
  var tableFooterElement = document.createElement ('tfoot');
  targetLocationNode.appendChild(tableFooterElement);

  var tableRowElement = document.createElement('tr');
  tableRowElement.setAttribute('id', 'totalTarget');
  tableFooterElement.appendChild(tableRowElement);

  var tableHeadingElement = document.createElement('th');
  tableHeadingElement.textContent = 'Hourly Total: ';
  tableHeadingElement.setAttribute('scope', 'row');
  tableRowElement.appendChild(tableHeadingElement);
}

tableDataElement.textContent = `${initialTotalTotal}`;
tableRowElement.appendChild(tableDataElement);

function Location(locationcity, minCustHr, maxCustHr, avgCookiesPerCust, locationHours, hourlySalesArray, initialTotalSales) {
  this.locationcity = locationcity
  this.minCustHr = minCustHr
  this.maxCustHr = maxCustHr
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.locationHours = locationHours;
  this.hourlySalesArray = hourlySalesArray;
  this.initialTotalSales = initialTotalSales;
};

   
    var seattle = new Location('Seattle', 23, 65, 6.3, hours);
    var tokyo = new Location('Toyko', 3, 24, 1.2, hours);
    var dubai = new Location('Dubai', 11, 38, 3.7, hours);
    var paris = new Location('Paris', 20, 38, 2.3, hours);
    var lima = new Location('Lima', 2, 16, 4.6, hours);



//Executing Code

renderTableFooter();


    





