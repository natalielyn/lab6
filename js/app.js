'use strict';

$(document).ready(() => {

const locationHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const locationSalesByHour = [];
const locationData = [
  [`Seattle`, 23, 65, 6.3, [], 0],
  [`Tokyo`, 3, 24, 1.2, [], 0],
  [`Dubai`, 11, 38, 2.3, [], 0],
  [`Paris`, 20, 38, 2.3, [], 0],
  [`Lima`, 2, 16, 4.6, [], 0],
];

const Location = function (locationcity, minCustHr, maxCustHr, avgCookiesPerCust, salesByHour, totalDailySales) {
  this.locationcity = locationcity;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.salesByHour = salesByHour;
  this.totalDailySales = totalDailySales;
  Location.data.push(this);
};

Location.data = [];

Location.prototype.avgCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  };

  Location.prototype.avgCookieSales = function() {
  for (let i = 0; i < locationHours.length; i++) {
    let cookieSales = Math.round(this.avgCustomersPerHour() * this.avgCookiesPerCust);
    this.salesByHour.push(cookieSales);
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
const renderTableHead = function() {
  $('<section>').appendTo('#locationSalesLists');
  $('<table>').attr('id', 'salesTable').appendTo('#locationSalesLists section');
  $('<thead>').appendTo('#salesTable');
  $('<tr>').appendTo('thead');
  $('<th>').appendTo('tr');

  locationHours.forEach(hr => {
    $('tr').append(`<th>${hr}</th>`);
  });
  $('tr').append('<th>Daily Total</th>');
};

//TABLE FOOTER
const renderTableFoot = function() {
  $('<tfoot>').appendTo('#salesTable');
  $('<tr>').appendTo('tfoot');
  $('<td>').appendTo('tfoot tr').text('Totals');

  let finalTotal = 0;
    for (let i = 0; i < locationHours.length; i++) {
      let hourTotal = 0;
      for (let j = 0; j < locationSalesByHour.length; j++) {
        hourTotal += parseInt(locationSalesByHour[j][i]); 
   }
   finalTotal += hourTotal;
   $('tfoot tr').append(`<td>${hourTotal}</td>`);
    }
    $('tfoot tr').append(`<td>${finalTotal}</td>`);
  }



Location.prototype.renderSalesData = function(){
  //Code below inspired by Travis Sklyes
  $('<tr>').attr('id', `${this.locationcity}-row`).appendTo('#salesTable');
  $('<td>').text(`${this.locationcity}`).appendTo(`#${this.locationcity}-row`);

  for(var i = 0; i < locationHours.length; i++){
    $('<td>').text(this.salesByHour[i]).appendTo(`#${this.locationcity}-row`);
  }

  $('<td>').attr('class', 'total').text(`${this.totalDailySales}`).appendTo(`#${this.locationcity}-row`);
  $('#salesTable tfoot').remove();
  renderTableFoot();
};


$('#addLocationForm').on('submit', handleSubmit);
function handleSubmit(event){
  event.preventDefault();
  let locationcity = event.target.locationcity.value;
  let minCustHr = event.target.minCustHr.value;
  let maxCustHr = event.target.maxCustHr.value;
  let avgCookiesPerCust = event.target.avgCookiesPerCust.value;

  let newLocation = new Location(locationcity, minCustHr, maxCustHr, avgCookiesPerCust, [], 0);
  newLocation.avgCookieSales();
  newLocation.totalCookieSales();
  newLocation.renderSalesData();
}

// PIE CHART ------------------------------------------------
let getPieLabels = function(info) {
  const labelsArr = [];
  for (let i=0; i < info.length; i++){
    labelsArr.push(info[i].locationcity);
  }
  return labelsArr;
};

let genPieData = function(info) {
  const dataArr = [];
  for (let i=0; i < info.length; i++){
    dataArr.push(info[i].totalDailySales);
  }
  return dataArr;
};

function makePieChart(){
  let ctx = document.getElementById('myPieChart').getContext('2d');
  let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: getPieLabels(Location.data),
      datasets: [{
        label: 'Daily Sales',
        data: genPieData(Location.data),
        backgroundColor: [
          'rgba(241, 91, 91, 1)',
          'rgba(241, 141, 91, 1)',
          'rgba(241, 211, 91, 1)',
          'rgba(116, 156, 216, 1)',
          'rgba(157, 152, 179, 1)',
          'rgba(241, 91, 91, 1)',
          'rgba(241, 141, 91, 1)',
          'rgba(241, 211, 91, 1)',
          'rgba(116, 156, 216, 1)',
          'rgba(157, 152, 179, 1)',
          'rgba(241, 91, 91, 1)',
          'rgba(241, 141, 91, 1)',
          'rgba(241, 211, 91, 1)',
          'rgba(116, 156, 216, 1)',
          'rgba(157, 152, 179, 1)',
          'rgba(241, 91, 91, 1)',
          'rgba(241, 141, 91, 1)',
          'rgba(241, 211, 91, 1)',
          'rgba(116, 156, 216, 1)',
          'rgba(157, 152, 179, 1)'
        ],
        borderColor: [
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)'
        ],
        borderWidth: 1
      },
      ],
    },
  });
}

//BAR CHART ------------------------------------------------------------
let getBarLabels = function(info) {
  const labelsArr = [];
  for (let i=0; i < info.length; i++){
    labelsArr.push(info[i]);
  }
  return labelsArr;
};

let genBarData = function() {
  const dataArr = [];
  $('tfoot td').map(function() {
    dataArr.push($(this).text());
  });
  dataArr.shift();
  dataArr.pop();
  return dataArr;
};

function makeBarChart(){

  let ctx = document.getElementById('myBarChart').getContext('2d');
  let myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getBarLabels(locationHours),
      datasets: [{
        label: 'Hourly Sales',
        data: genBarData(Location.data),
        backgroundColor: [
          'rgba(241, 91, 91, 1)',
          'rgba(241, 141, 91, 1)',
          'rgba(241, 211, 91, 1)',
          'rgba(116, 156, 216, 1)',
          'rgba(157, 152, 179, 1)',
          'rgba(241, 91, 91, 1)',
          'rgba(241, 141, 91, 1)',
          'rgba(241, 211, 91, 1)',
          'rgba(116, 156, 216, 1)',
          'rgba(157, 152, 179, 1)',
          'rgba(241, 91, 91, 1)',
          'rgba(241, 141, 91, 1)',
          'rgba(241, 211, 91, 1)',
          'rgba(116, 156, 216, 1)',
          'rgba(157, 152, 179, 1)',
          'rgba(241, 91, 91, 1)',
          'rgba(241, 141, 91, 1)',
          'rgba(241, 211, 91, 1)',
          'rgba(116, 156, 216, 1)',
          'rgba(157, 152, 179, 1)'
        ],
        borderColor: [
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)',
          'rgba(135, 135, 135, 0.57)'
        ],
        borderWidth: 1
      },
      ],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }
  });
}

(function displaySales(data) {
  renderTableHead();
  $('table').append('<tbody>');
  
  for(var i = 0; i < data.length; i++){
        data[i] = new Location(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5]);
        data[i].avgCookieSales();
        data[i].totalCookieSales();
        data[i].renderSalesData();
      }
     
      makePieChart();
      makeBarChart();
    })(locationData);
});




