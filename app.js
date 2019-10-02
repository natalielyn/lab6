'use strict';
 //Location Object


var Location = function(locationcity, minCustHr, maxCustHr, avgCookiesPerCust) {
  this.locationcity; locationcity
  this.minCustHr; minCustHr
  this.maxCustHr; maxCustHr
  this.avgCookiesPerCust; avgCookiesPerCust;
  allCookieLocations.push(this);
  
};

//Store hours
var allCookieLocations = [];
var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',
];

// Number generator functions
Location.prototype.randomCustomers = function() {
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
};

Location.prototype.renderlocation = render;

Location.prototype.cookieSales = function() {
  var result = [];
   for (var i = 0; i < 15; i++) {
     this.cookiesPurchasePerHour.push(Math.floor(this.randomCustomers() * this.avgCookiesPerCustomer));
  }
    return result;
 };

Location.prototype.totalCookieSales = function() {
  var cookieSalesSum = 0;
  for (var i = 0; i < 15; i++) {
  cookieSalesSum += this.cookieSales()[i];
}
  return cookieSalesSum; 
};


    function render(){
    var storelistElement = document.getElementById('storelist');
    }
    var storelistElement = document.getElementById('storelist');

  
    var article = document.createElement('article');
    article.setAttribute('id', `${this.storelist}`);
    storelistElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.storelist;
    article.appendChild(h2);

//Table for data
  
  var table = document.createElement('table');
 
  
  var row1 = document.createElement('tr');
  var row2 = document.createElement('tr');
  var row3 = document.createElement('tr');
  
  var th1 = document.createElement('th');
  th1.textContent = this.location;
  var th2 = document.createElement('th');
  th2.textContent = this.locatioin;
  
  var td1 = document.createElement('td');
  td1.textContent = this.totalCookieSales;
  var td2 = document.createElement('td');
  td2.textContent = this.location;

  var td3 = document.createElement('td');
  td3.textContent = `${this.location}`;
  var td4 = document.createElement('td');
  td4.textContent = this.location;

  row1.appendChild(th1);
  row1.appendChild(th2);

  row2.appendChild(td1);
  row2.appendChild(td2);

  row3.appendChild(td3);
  row3.appendChild(td4);

  table.appendChild(row1);
  table.appendChild(row2);
  table.appendChild(row3);
  article.appendChild(table);

   
    var seattle = new Location('Seattle', 23, 65, 6.3, hours);
    var tokyo = new Location('Toyko', 3, 24, 1.2, hours);
    var dubai = new Location('Dubai', 11, 38, 3.7, hours);
    var paris = new Location('Paris', 20, 38, 2.3, hours);
    var lima = new Location('Lima', 2, 16, 4.6, hours);



//Executing Code

(function renderAll(data){
  for(var i=0; i < data.length; i++){
    data[i] = new Location(data[i][0], data[i][1],data[i][2],data[i][3],data[i][4]);
    data[i].totalCookieSales();
    data[i].locationcity();
    data[i].hours();
  }
})(locationData);


    





