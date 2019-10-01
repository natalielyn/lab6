'use strict';
//Code barrowed from David Vloedman: I really tried doing it on my own but contined to run into dead ends. I typed everything in by hand. I made sure to really understand what each object and method were doing. I had to de-bug a bit to which helped me really analyze this code.

var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',
];

//Seattle Object

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

  //Tokyo Object


  var tokyo = {
    location: 'tokyo',
    minCustHr: 3,
    maxCustHr: 24,
    avgCookiesPerCust: 1.2,
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

      h2.appendChild(document.createTextNode('Tokyo'));
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

  tokyo.render();   


  //Dubai Object

  var dubai = {
    location: 'dubai',
    minCustHr: 11,
    maxCustHr: 38,
    avgCookiesPerCust: 3.7,
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

      h2.appendChild(document.createTextNode('Dubai'));
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

  dubai.render();   


  //Paris Object

  var paris = {
    location: 'paris',
    minCustHr: 20,
    maxCustHr: 38,
    avgCookiesPerCust: 2.3,
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

      h2.appendChild(document.createTextNode('Paris'));
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

  paris.render();   


  //Lime Object

  var lima = {
    location: 'lima',
    minCustHr: 2,
    maxCustHr: 16,
    avgCookiesPerCust: 4.6,
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

      h2.appendChild(document.createTextNode('Lima'));
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

  lima.render();   






      

    
    
    

