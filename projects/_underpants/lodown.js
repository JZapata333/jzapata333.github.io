/* global $ */
/* global _ */
(() => {
    $.ajax("customers.json")
    .done((customers) => {
        // WRITE YOUR CODE BELOW HERE
        console.log("customers: ",customers);    
    
        //#1: How many males, how many females
        
         let males = _.filter(customers, (c, i, list) => {
            return c.gender === "male";
            
        });
        
        let females = _.filter(customers, (c, i, list) => {
            return c.gender === "female"; 
            
        });
        
        //#2: Oldest customer, youngest customer
        
       let ages = _.map(customers, (el, i, list) => {
            return el.age;        
       });
       
           let youngestAge = Math.min.apply(Math, ages); 
           let oldestAge = Math.max.apply(Math, ages); 
           
       let oldestCustomer = _.map(customers, (el, i, list) => {
           if(el.age === oldestAge) {
                return el.name;
           }
           
       });
       
       let youngestCustomer = _.map(customers, (el, i, list) => {
           if(youngestAge === el.age) {
               return el.name;
           }
       });
        
        //3#: Average balance
        
        let arrayOfNumbers = _.map(customers, (customer) => {
            
            return customer.balance.replace("$", "").replace(",", "");
            });
            
            let sum = 0; 
            let numOfBalances = 0;
            _.each(arrayOfNumbers, (balance) => {
                sum += parseFloat(balance);
                numOfBalances++; 
            
        });   

        //4#: How many customers' names begin with the same letter
        
        let input = "a";
        function customerNameNum(letter) {
            let names = _.map(customers, (el, i, collection) => {
               return el.name; 
            });
            
            let inputLetter = _.map(names, (el, i, collection) => {
                if (letter.toUpperCase() === el.charAt(0).toUpperCase()) {
                    return names;
                }
            });
            return inputLetter.length;
        }
        
        
        //5#: How many customer's friend's names begin with some letter
        
         let counter = 0;
        let letter = 'D';
        
        _.each(customers, (customer, i, col) => {
            _.each(customer.friends, (friend, i, col) => {
                if (letter.toUpperCase() === friend.name[0].toUpperCase()) {
                    counter++;
                }
            });
        });
        
        
        //6#: How many customers are friends
        
        let counter1 = 0;
        let customerNames = _.pluck(customers, "name");
        console.log(customerNames);
        _.each(customers, (customer) => {
            _.each(customer.friends, (friends) => {
                _.each(customerNames, (names) => {
                    if(friends.name === names) {
                counter1++; }
            
                    });   
            });
    });

        //7#: How many customers have friends in common
        
        let friendArray = [];
           let nameArray = [];
           
           _.each(customers, (customer, i, col) => {
               _.each(customer.friends, (friend, j, col) => {
                   if (_.contains(friendArray, friend.name) === true) {
                       nameArray.push(customer.name);
                       console.log(nameArray);
                   }
                   friendArray.push(friend.name);    
               });
           });
           console.log(friendArray);
           console.log(nameArray);
           
           let finalCount = _.unique(nameArray);
           
           console.log(`${finalCount.length} customers have friends in common`);
        
        //8#: Most common tags 
        
        let tags = _.map(customers, (el, i, col) => {
                return el.tags;
            });
            let mergeTags = [].concat.apply([], tags);
            let orderedTags = [];
            let mostCommon = function(array) {
                if (array.length === 0)
                    return null;
                let modeMap = {};
                let maxEl = array[0];
                let maxCount = 1;
                for (let i = 0; i < array.length; i++) {
                    var el = array[i];
                    if (modeMap[el] == null)
                        modeMap[el] = 1;
                    else modeMap[el]++;
                    if (modeMap[el] > maxCount) {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }
                return maxEl;
            };
            let removeItem = function(item, array) {
                for (let i in array) {
                    if (array[i] === item) array.splice(i, 1);
                }
            };
            for (let i = 0; i < mergeTags.length; i++) {
                if (mergeTags.length === 0) {
                    return null;
                }
                let element = mostCommon(mergeTags);
                orderedTags.push(element);
                removeItem(element, mergeTags);
            }
            orderedTags.sort();
            mergeTags.sort();
            
        
        console.log(`females: ${females.length}`);
        console.log(`males: ${males.length}`);
        console.log(`oldest: ${oldestCustomer}`);
        console.log(`youngest: ${youngestCustomer}`);
        console.log(`average balance: ${sum/numOfBalances}`);
        console.log(`same letter: ${customerNameNum(input)}`);
        console.log(`how many customers are friends: ${counter1}`);
        console.log(`friends in common: ${finalCount.length}`);
        console.log(`Most common tags: ${orderedTags.concat(mergeTags)} `);
        
        // WRITE YOUR CODE ABOVE HERE
    })
    .fail((r) => console.error(r));
    
    
})();