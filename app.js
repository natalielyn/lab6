'use strict';

var locationData = [
  ['Seattle', 23, 65, 6.3],
  ['Tokyo', 3, 24, 1.2 ],
  ['Dubai', 11, 38, 3.7 ],
  ['Paris', 20, 38, 1.3 ],
  ['Seattle', 2, 16, 4.6 ],


];

var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',
];


var Location = function(locationcity, minCustHr, maxCustHr, avgCookiesPerCust) {
    this.locationcity; locationcity
    this.minCustHr; minCustHr
    this.maxCustHr; maxCustHr
    this.avgCookiesPerCust; avgCookiesPerCust
    this.cookiesPurchasePerHour; cookiesPurchasePerHour
};

Location.prototype.locationcity = function(){
  console.log(this.locationcity);
},
Location.prototype.minCustHr = function(){
  console.log(this.minCustHr);
},
Location.prototype.maxCustHr = function(){
  console.log(this.maxCustHr);
},
Location.prototype.avgCookiesPerCust = function(){
  console.log(this.avgCookiesPerCust);
},
Location.prototype.cookiesPurchasePerHour = function(){
  console.log(this.cookiesPurchasePerHour);
},

Location.prototype.renderlocation = render;


Location.prototype.avgCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
};

location.prototype.avgCookieSales = function() {
   for (var i = 0; i < 15; i++) {
     this.cookiesPurchasePerHour.push(Math.floor(this.avgCustomersPerHour() * this.avgCookiesPerCustomer));
  }

 }
location.prototype.totalCookieSales = function() {
  var totalCookies = 0;
  for (var i = 0; < this.cookiesPurchasePerHour.length; i++) {
  totalCookies = totalCookies + this.cookiesPurchasePerHour[i];
}
}
  

// function totalCookieSales() {
//     var cookieSum = 0;
//      this.cookiesPurchasePerHour.forEach(element => {
//       cookieSum += element;
//     });
//     return cookieSum;
//   }

  function render(){
    var locationslistElement = document.getElementById('locationslist');

  
    var article = document.createElement('article');
    article.setAttribute('id', `${this.locationcity.toLowerCase()}`);
    locationsListElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.locationcity;
    article.appendChild(h2);



    //************************************ *
//Executing Code

(function renderAll(data){
  for(var i=0; i < data.length; i++){
    data[i] = new Location(data[i][0], data[i][1], data[i][2], data[i][3]);
    data[i].hours();
    data[i].renderlocation();
  }
})(locationData);








// Seattle Object

// var seattle = {
//     location: 'seattle',
//     minCustHr: 23,
//     maxCustHr: 65,
//     avgCookiesPerCust: 6.3,
//     cookiesPurchasePerHour:[],

//     avgCustomersPerHour: function () {
//         var customers = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
//         return customers;
//       },
//       avgCookieSales: function () {
//         var sales = this.avgCustomersPerHour() * this.avgCookiesPerCust;
//         sales = Math.floor(sales);
//         this.cookiesPurchasePerHour.push(sales);
//         return sales;
//         },

//         totalCookieSales: function () {
//           var cookieSum = 0;
//           this.cookiesPurchasePerHour.forEach(element => {
//             cookieSum += element;
//           });
//           return cookieSum;
//         },
     
//     render: function() {
//       var listItems = [];
//       hours.forEach(element => {
//         listItems.push(element + ': ' + this.avgCookieSales() + ' cookies');
//       }); 


      

//       var locationslist = document.getElementById('locationslist');
//       var ul = document.createElement('ul');
//       var h2 = document.createElement('h2');

//       h2.appendChild(document.createTextNode('Seattle'));
//       ul.appendChild(h2)

//       listItems.forEach(element => {
//       var item = document.createElement ('li');
//       var text = document.createTextNode(element);
//       item.appendChild(text);
//       ul.appendChild(item)
//       });

//       var sumLi = document.createElement('li');
//       var sumText = document.createTextNode('Total: ' + this.totalCookieSales());
//       sumLi.appendChild(sumText);
//       ul.appendChild(sumLi);

//       locationslist.appendChild(ul);
//     }
//   };

//   seattle.render();   

//   //Tokyo Object


//   var tokyo = {
//     location: 'tokyo',
//     minCustHr: 3,
//     maxCustHr: 24,
//     avgCookiesPerCust: 1.2,
//     cookiesPurchasePerHour:[],

//     avgCustomersPerHour: function () {
//         var customers = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
//         return customers;
//       },
//       avgCookieSales: function () {
//         var sales = this.avgCustomersPerHour() * this.avgCookiesPerCust;
//         sales = Math.floor(sales);
//         this.cookiesPurchasePerHour.push(sales);
//         return sales;
//         },

//         totalCookieSales: function () {
//           var cookieSum = 0;
//           this.cookiesPurchasePerHour.forEach(element => {
//             cookieSum += element;
//           });
//           return cookieSum;
//         },
     
//     render: function() {
//       var listItems = [];
//       hours.forEach(element => {
//         listItems.push(element + ': ' + this.avgCookieSales() + ' cookies');
//       }); 

//       var locationslist = document.getElementById('locationslist');
//       var ul = document.createElement('ul');
//       var h2 = document.createElement('h2');

//       h2.appendChild(document.createTextNode('Tokyo'));
//       ul.appendChild(h2)

//       listItems.forEach(element => {
//       var item = document.createElement ('li');
//       var text = document.createTextNode(element);
//       item.appendChild(text);
//       ul.appendChild(item)
//       });

//       var sumLi = document.createElement('li');
//       var sumText = document.createTextNode('Total: ' + this.totalCookieSales());
//       sumLi.appendChild(sumText);
//       ul.appendChild(sumLi);

//       locationslist.appendChild(ul);
//     }
//   };

//   tokyo.render();   


//   //Dubai Object

//   var dubai = {
//     location: 'dubai',
//     minCustHr: 11,
//     maxCustHr: 38,
//     avgCookiesPerCust: 3.7,
//     cookiesPurchasePerHour:[],

//     avgCustomersPerHour: function () {
//         var customers = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
//         return customers;
//       },
//       avgCookieSales: function () {
//         var sales = this.avgCustomersPerHour() * this.avgCookiesPerCust;
//         sales = Math.floor(sales);
//         this.cookiesPurchasePerHour.push(sales);
//         return sales;
//         },

//         totalCookieSales: function () {
//           var cookieSum = 0;
//           this.cookiesPurchasePerHour.forEach(element => {
//             cookieSum += element;
//           });
//           return cookieSum;
//         },
     
//     render: function() {
//       var listItems = [];
//       hours.forEach(element => {
//         listItems.push(element + ': ' + this.avgCookieSales() + ' cookies');
//       }); 

//       var locationslist = document.getElementById('locationslist');
//       var ul = document.createElement('ul');
//       var h2 = document.createElement('h2');

//       h2.appendChild(document.createTextNode('Dubai'));
//       ul.appendChild(h2)

//       listItems.forEach(element => {
//       var item = document.createElement ('li');
//       var text = document.createTextNode(element);
//       item.appendChild(text);
//       ul.appendChild(item)
//       });

//       var sumLi = document.createElement('li');
//       var sumText = document.createTextNode('Total: ' + this.totalCookieSales());
//       sumLi.appendChild(sumText);
//       ul.appendChild(sumLi);

//       locationslist.appendChild(ul);
//     }
//   };

//   dubai.render();   


//   //Paris Object

//   var paris = {
//     location: 'paris',
//     minCustHr: 20,
//     maxCustHr: 38,
//     avgCookiesPerCust: 2.3,
//     cookiesPurchasePerHour:[],

//     avgCustomersPerHour: function () {
//         var customers = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
//         return customers;
//       },
//       avgCookieSales: function () {
//         var sales = this.avgCustomersPerHour() * this.avgCookiesPerCust;
//         sales = Math.floor(sales);
//         this.cookiesPurchasePerHour.push(sales);
//         return sales;
//         },

//         totalCookieSales: function () {
//           var cookieSum = 0;
//           this.cookiesPurchasePerHour.forEach(element => {
//             cookieSum += element;
//           });
//           return cookieSum;
//         },
     
//     render: function() {
//       var listItems = [];
//       hours.forEach(element => {
//         listItems.push(element + ': ' + this.avgCookieSales() + ' cookies');
//       }); 

//       var locationslist = document.getElementById('locationslist');
//       var ul = document.createElement('ul');
//       var h2 = document.createElement('h2');

//       h2.appendChild(document.createTextNode('Paris'));
//       ul.appendChild(h2)

//       listItems.forEach(element => {
//       var item = document.createElement ('li');
//       var text = document.createTextNode(element);
//       item.appendChild(text);
//       ul.appendChild(item)
//       });

//       var sumLi = document.createElement('li');
//       var sumText = document.createTextNode('Total: ' + this.totalCookieSales());
//       sumLi.appendChild(sumText);
//       ul.appendChild(sumLi);

//       locationslist.appendChild(ul);
//     }
//   };

//   paris.render();   


//   //Lime Object

//   var lima = {
//     location: 'lima',
//     minCustHr: 2,
//     maxCustHr: 16,
//     avgCookiesPerCust: 4.6,
//     cookiesPurchasePerHour:[],

//     avgCustomersPerHour: function () {
//         var customers = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
//         return customers;
//       },
//       avgCookieSales: function () {
//         var sales = this.avgCustomersPerHour() * this.avgCookiesPerCust;
//         sales = Math.floor(sales);
//         this.cookiesPurchasePerHour.push(sales);
//         return sales;
//         },

//         totalCookieSales: function () {
//           var cookieSum = 0;
//           this.cookiesPurchasePerHour.forEach(element => {
//             cookieSum += element;
//           });
//           return cookieSum;
//         },
     
//     render: function() {
//       var listItems = [];
//       hours.forEach(element => {
//         listItems.push(element + ': ' + this.avgCookieSales() + ' cookies');
//       }); 

//       var locationslist = document.getElementById('locationslist');
//       var ul = document.createElement('ul');
//       var h2 = document.createElement('h2');

//       h2.appendChild(document.createTextNode('Lima'));
//       ul.appendChild(h2)

//       listItems.forEach(element => {
//       var item = document.createElement ('li');
//       var text = document.createTextNode(element);
//       item.appendChild(text);
//       ul.appendChild(item)
//       });

//       var sumLi = document.createElement('li');
//       var sumText = document.createTextNode('Total: ' + this.totalCookieSales());
//       sumLi.appendChild(sumText);
//       ul.appendChild(sumLi);

//       locationslist.appendChild(ul);
//     }
//   };

//   lima.render()
  }