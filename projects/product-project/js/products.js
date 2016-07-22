/* global $ _ */
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

// $(function() {

// });


 // ALL YOUR CODE GOES BELOW HERE //

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
            
            
            function isCollection(value){
                if(typeof value !== null && value instanceof Date === false && typeof value === 'object') return true;
                return false;
            }
            
            function createProductList(data){
                return $('<ul>')
                .attr('id', 'product-list')
                .addClass('product-list')
                .append(_.map(data, function(product, item){
                    return createProductListItem(product);
                }))
            }
            
            function createProductListItem(product){
                return $('<li>')
                .attr('id', 'list-item')
                .addClass('list-item')
                .append(createProductImage('img/product/thumbs/' + product.image))
                .append(createProductDetails(product.desc))
                .append(product.price)
                .append('<br>In Stock: ' + product.stock + " left!");
            }
            
            function createProductImage(url){
                return $('<div>').addClass('image-div')
                .append($('<img>').attr('src', url).addClass('image'));
            }
            
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
            
 function dropDown(data) {
        $(".all-products-button").on('click', (e) => {
            $("#products").empty(); 
            var allProducts = _.map(data, function(product) {
                return createProductListItem(product).appendTo('#products');
            });
            return allProducts;
        });
 
        

       var mapped = _.map(_.uniq(_.pluck(data, 'type')), (type) => {
            $("#myDropdown").append($('<li>').append("<a href = '#' id = '"+ type+ "'>" + type[0].toUpperCase() + type.slice(1)  + "</a>"));
            $("#" + type).on('click', (e) => {
                $('#products').empty();
                var filtered = _.filter(data, (product) => {
                    if(product.type === type) {
                        return createProductListItem(product).appendTo('#products');
                    }
                });
            });
        });
        return mapped;
 } 
            // ALL YOUR CODE GOES ABOVE HERE //