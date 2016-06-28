/*global $*/

// To do list for Product Project

// 1.) Product List --> CHECK!
// 2.) Product Detail popup window --> ummm, skipped so CHECK!
// 3.) Product Search Bar --> CHECK!

//# for ID, . for CLASS

//BE ABLE TO MOVE THE INFORMATION BUTTON

/*global $*/
/*global _*/
(() => {
    
    //BUILDING AN INDIVIDUAL PRODUCT
    const createProduct = (product) => {
        
        //LOW STOCK CONDITION
        let stock = product.stock;
        if (stock <= 10) {
            stock = ("<br><br>Only " + stock + " left!");
        }
        else {
            stock = "<br><br>In Stock: " + product.stock;
        }
        
        //ADDING ALL THE ATTRIBUTES
        return $("<li class='items' id='"+ product.id +"' >")
            .text(product.desc)
            .append("<br><br>Price: $" + product.price)
            .append(stock)
            .prepend('<img src="./img/product/thumbs/' + product.image + '">')
            .prepend('<button name="moreInfo" class="moreInfo">INFO</button>').on("click", (e) => {
                
                //EXTRA INFO VISIBILITY
                if ($("#" + product.id).hasClass('one-click')) {
                    $("#" + product.id).removeClass('one-click');
                    $( '#extraInfo' + product.id).remove();
                }
                else $("#" + product.id)
                    .addClass('one-click')
                    .append("<div id ='extraInfo" + product.id + "' ><br><br>Colors: " + product.availableColors.toString() + "</div>");
                    $("#extraInfo" + product.id).append("<br><br>Specs: " + product.specs);
            });
    };
    
    
    //MAKING ALL THE PRODUCTS SHOW UP
    function makeItems(products) {
        $("#products").append(products.map(createProduct));   
        $("[name='first-input']").on("keyup", (e) => {
           var input = e.target.value;
           var productList = $('#products');
           productList.empty();
           let filterList = search(products, input);
           $("#products").append(filterList.map(createProduct));
        });
    }
    
    //COMPLEX VALUE CHECK FUNCTION -- FOR USE IN RECURSION
    function isComplex(value) {
        if (Array.isArray(value)) return true;
        if (typeof value === 'object' && value !== null && value instanceof Date === false) return true;
        else return false;
    }
    
    //RECURSIVE SEARCH FUNCTIONALITY
    function search(products, input) {
        return _.reduce(products, (results, value) => {
            if (isComplex(value)) {
                if (search(value, input).length) {
                    results.push(value);
                }
            }
            else if (typeof(value) === 'string') {
                if (value.toLowerCase().indexOf(input.toLowerCase()) > -1) {
                    results.push(value);   
                }
            }
            return results;
        }, []);
    }
    
    //DROP DOWN MENU
    function dropDown(products) {
        $("#myDropdown").append("<a id= 'all'>All Products</a>");
        $("#all").on('click', (e) => {
            $("#products").empty(); 
            $("#products").append(products.map(createProduct));    
            
        });
        
        _.map(_.uniq(_.pluck(products, 'type')), (type) => {
            $("#myDropdown").append("<a href = '#' id = '"+ type+ "'>" + type[0].toUpperCase() + type.slice(1)  + "</a>");
            $("#" + type).on('click', (e) => {
                let productList = $('#products');
                productList.empty();
                let filtered = _.filter(products, (product) => {
                    return (product.type === type);
                });
                $("#products").append(filtered.map(createProduct));
            });
        });
        
    }
    
    //EXECUTING THE FUNCTIONS
    $.ajax("data/product.json")
    .done((products) => {
        makeItems(products);
        dropDown(products);
    })
    
    .error((err) => {
        console.log(err);   
    });
    
})();