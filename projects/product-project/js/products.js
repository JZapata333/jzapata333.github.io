/*global $ _*/ 

//nomenclature that confirms to IDE that the global variable is OK as is.

$(document).on('ready', function(event) {         //you want to wait until the document is loaded before you can modify it with jQuery
    console.log('products.js is loading');   
    
$.getJSON( "data/product.json", function(data) {
    console.log(data);
})
    .fail(function() {console.log('getJSON on product data failed!')});
});

