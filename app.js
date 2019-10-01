'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',
];

var seattle = {
    location: 'seattle',
    minCustHr: 23,
    maxCustHr: 65,
    avgCookiesPerCust: 6.3,
    cookiesPurchasePerHour:[],

    avgCustomersPerHour: function () {
        var customers = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
        return customers;
      },
      avgCookieSales: function () {
        var sales = this.avgCustomersPerHour() * this.avgCookiesPerCust;
        sales = Math.floor(sales);
        this.cookiesPurchasePerHour.push(sales);
        return sales;
        },

        totalCookieSales: function () {
          var cookieSum = 0;
          this.cookiesPurchasePerHour.forEach(element => {
            cookieSum += element;
          });
          return cookieSum;
        },
     
    render: function() {
      var listItems = [];
      hours.forEach(element => {
        listItems.push(element + ': ' + this.avgCookieSales() + ' cookies');
      }); 

      var locationslist = document.getElementById('locationslist');
      var ul = document.createElement('ul');
      var h2 = document.createElement('h2');

      h2.appendChild(document.createTextNode('Seattle'));
      ul.appendChild(h2)

      listItems.forEach(element => {
      var item = document.createElement ('li');
      var text = document.createTextNode(element);
      item.appendChild(text);
      ul.appendChild(item)
      });

      var sumLi = document.createElement('li');
      var sumText = document.createTextNode('Total: ' + this.totalCookieSales());
      sumLi.appendChild(sumText);
      ul.appendChild(sumLi);

      locationslist.appendChild(ul);
    }
  };

  seattle.render();   

var locationsListElement = document.getElementById('locationslist')

//seattle


      

    
    
    

