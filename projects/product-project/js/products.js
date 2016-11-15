/* global $ _ */


/**
 * when the document is ready, invokes function that that uses jQuery to call
 * .getJSON method to make an http request from the server to get at 'data/product/json' and also
 * call another function that prints out the data json object. It also initializes the
 * functions for creating product lists, the search bar and the drop-down menu.
 */


$(document).on('ready', function(event) {
    $.getJSON('data/product.json', function(data) {
            console.log(data);
            
            createProductList(data).appendTo('#products');
            initializeSearch(data);
            dropDown(data);
        
        })
        .fail(function() {
            throw new Error('getJSON on product data failed!');
        });
});



 // ALL YOUR CODE GOES BELOW HERE //

/**
 * takes the button search's ID and attaches 'on' method so that every click gets a function
 * call that again uses jQuery to empty the product's list by its ID. we assign the value of input
 * to variable target. assign searchResults to a function call, listItems to another one where
 * HOD function map is used to iterate and transform the searchResults data, and we return a call to
 * createProductListItem and then append it to the product-list ID in the main DIV so that our listed items
 * will show on the website.
 *
 */
            function initializeSearch(data){
                $('#button-search').on('click', function(event){
                   $('#product-list').empty();
                   var target = document.getElementById('input').value;
                   var searchResults = search(data, target);
                   var listItems = _.map(searchResults, function(product){
                      return createProductListItem(product).appendTo('#product-list'); 
                   });
                   $('#product-list').append(listItems);
                });
            }
            
            //Functionality for search bar
            function search(collection, target){
                var output = [];
                _.each(collection, function(value){
                   if(typeof value === 'string'){
                       if(value.toLowerCase().indexOf(target.toLowerCase()) > -1){
                           output.push(value);
                        }
                   } else if(isCollection(value)){
                        if(search(value, target).length){
                            output.push(value);
                        }
                    }
                });
                return output;
            }
            
            //test function to see if value is a collection (array or object)
            function isCollection(value){
                if(typeof value !== null && value instanceof Date === false && typeof value === 'object') return true;
                return false;
            }
            
            /**
             * function that returns a unordered list with an ID, a class, and appends 
             * an iteration of the data/product.json to this list.
             */
            
            function createProductList(data){
                return $('<ul>')
                .attr('id', 'product-list')
                .addClass('product-list')
                .append(_.map(data, function(product, item){
                    return createProductListItem(product);
                }))
            }
            
            /**
             * function that creates a list item, adds an ID, a class, and appends
             * all parts of a product: the image, the description, the price, and 
             * the amount left of that product.
             */
            
            function createProductListItem(product){
                return $('<li>')
                .attr('id', 'list-item')
                .addClass('list-item')
                .append(createProductImage('img/product/thumbs/' + product.image))
                .append(createProductDetails(product.desc))
                .append(product.price)
                .append('<br>In Stock: ' + product.stock + " left!");
            }
            
            /**
             * function that returns a jQuery-created DIV with a class. It then appends
             * an HTML image tag, with a src attribute and a class for the image.
             */
             
            function createProductImage(url){
                return $('<div>').addClass('image-div')
                .append($('<img>').attr('src', url).addClass('image'));
            }
            
            /**
             * function creates DIVs, classes, and the HTML for each product and 
             * assigns them to their individual descriptive variable. We then return
             * them after assigning them to a new DIV and appending them to it.
             */
             
            function createProductDetails(desc, price, stock){
               var price = $('<div>')
               .addClass('price')
               .html(price)
               var desc = $('<div>')
               .addClass('desc')
               .html(desc)
               var stock = $('<div>')
               .addClass('stock')
               .html(stock);
               
               return $('<div>').addClass().append(desc, price, stock);
           }
            
            /**
             * function assigns a clickable function to the all-products-button class
             * from the dropdown menu 'All Products' button. It empties the products from
             * the main DIV (found inside Main), and then calls a function asigned to a variable 
             * that takes the data JSON structure and maps or transforms it before return this 
             * modified collection to createProductListItem as an argument and appending it to the products
             * ID.
             */
            
            function dropDown(data) {
                $(".all-products-button").on('click', function(e) {
                $("#products").empty(); 
                var allProducts = _.map(data, function(product) {
                    return createProductListItem(product).appendTo('#products');
            });
            return allProducts;
        });
            
            /**
             *Takes the myDropdown ID and appends a list item, and also appends a clickable 
             * link that describes the time of product, after equalizing and slicing all of the 
             * mapped types. It then uses jQuery to assign the 'on click' method to the ID of the type
             * of product, then empties the product list in the main DIV. Lastly, this function uses filter
             * to filter to 'filter' the types of of product, as per the conditional statement found under the 
             * filtered variable. Lastly, it returns a function call of those mapped products and appends it
             * to the products DIV in main.
             */
             
            var mapped = _.map(_.uniq(_.pluck(data, 'type')), function (type) {
                $("#myDropdown").append($('<li>').append("<a href = '#' id = '"+ type + "'>" + type[0].toUpperCase() + type.slice(1)  + "</a>"));
                $("#" + type).one('click', function (e) {
                $('#products').empty();
                var filtered = _.filter(data, function (product) {
                    if(product.type === type) {
                        return createProductListItem(product).appendTo('#products');
                    }
                });
            });
        });
        return mapped;
 } 
            // ALL YOUR CODE GOES ABOVE HERE //