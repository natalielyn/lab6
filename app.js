'use strict';

var seattle = {
    location: 'seattle',
    minCustHr: 23,
    maxCustHr: 65,
    avgCookiesPerCust: 6.3,
    cookiesPurchasePerHour:[],

    avgCustomersPerHour: function () {
        return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr; 
      },
      avgCookieTotal: function () {
        for (var i=0; i < 15; i++) {
            this.cookiesPurchasePerHour.push(math.floor(this.avgCustomersPerHour() * this.avgCookiesPerCust)); 
        }
      },
      getTotalCookies: function(){
        var totalCookies = 0;
        for (var i = 0; i < this.cookiesPurchasePerHour.length; i++) {
          totalCookies = totalCookies + this.cookiesPurchasePerHour[i];
        }
        return totalCookies;
      },
    }; 




    var seattle = {
      location: 'tokyo',
      minCustHr: 3,
      maxCustHr: 24,
      avgCookiesPerCust: 1.2,
      cookiesPurchasePerHour:[],
  
      avgCustomersPerHour: function () {
          return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr; 
        },
        avgCookieTotal: function () {
          for (var i=0; i < 15; i++) {
              this.cookiesPurchasePerHour.push(math.floor(this.avgCustomersPerHour() * this.avgCookiesPerCust)); 
          }
        },
        getTotalCookies: function(){
          var totalCookies = 0;
          for (var i = 0; i < this.cookiesPurchasePerHour.length; i++) {
            totalCookies = totalCookies + this.cookiesPurchasePerHour[i];
          }
          return totalCookies;
        },
      }; 


      var dubai = {
        location: 'dubai',
        minCustHr: 11,
        maxCustHr: 38,
        avgCookiesPerCust: 3.7,
        cookiesPurchasePerHour:[],
    
        avgCustomersPerHour: function () {
            return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr; 
          },
          avgCookieTotal: function () {
            for (var i=0; i < 15; i++) {
                this.cookiesPurchasePerHour.push(math.floor(this.avgCustomersPerHour() * this.avgCookiesPerCust)); 
            }
          },
          getTotalCookies: function(){
            var totalCookies = 0;
            for (var i = 0; i < this.cookiesPurchasePerHour.length; i++) {
              totalCookies = totalCookies + this.cookiesPurchasePerHour[i];
            }
            return totalCookies;
          },
        }; 


        var paris = {
          location: 'paris',
          minCustHr: 23,
          maxCustHr: 38,
          avgCookiesPerCust: 2.3,
          cookiesPurchasePerHour:[],
      
          avgCustomersPerHour: function () {
              return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr; 
            },
            avgCookieTotal: function () {
              for (var i=0; i < 15; i++) {
                  this.cookiesPurchasePerHour.push(math.floor(this.avgCustomersPerHour() * this.avgCookiesPerCust)); 
              }
            },
            getTotalCookies: function(){
              var totalCookies = 0;
              for (var i = 0; i < this.cookiesPurchasePerHour.length; i++) {
                totalCookies = totalCookies + this.cookiesPurchasePerHour[i];
              }
              return totalCookies;
            },
          }; 


          var lima = {
            location: 'lima',
            minCustHr: 2,
            maxCustHr: 38,
            avgCookiesPerCust: 4.6,
            cookiesPurchasePerHour:[],
        
            avgCustomersPerHour: function () {
                return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr; 
              },
              avgCookieTotal: function () {
                for (var i=0; i < 15; i++) {
                    this.cookiesPurchasePerHour.push(math.floor(this.avgCustomersPerHour() * this.avgCookiesPerCust)); 
                }
              },
              getTotalCookies: function(){
                var totalCookies = 0;
                for (var i = 0; i < this.cookiesPurchasePerHour.length; i++) {
                  totalCookies = totalCookies + this.cookiesPurchasePerHour[i];
                }
                return totalCookies;
              },
            }; 

var locationsListElement = document.getElementById('locationslist')

//seattle


      

    
    
    

