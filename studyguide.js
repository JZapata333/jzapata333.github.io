
//Higher oder function is a first class function, which means it can be assigned, retrieved and passed as an argument.

//Each: what does it do? --> It loops over an array or object.
//Steps: it takes 2 arguments, the collection and the function (action). 
       //It then iterate over the value, position, and collection.
       //You then apply the callback function called action 
       //It doesn't modify the collection nor returns anything
       
 function each(collection, action) {
    if(Array.isArray(collection)) {
      for(var i = 0; i < collection.length; i++) {
          action(collection[i], i, collection);
      } 
    } for(var key in collection) {
        action(collection[key], key, collection);
    }
}

//write a function myObjectNames, that takes object as an argument, use each and print object names()
var myObjectNames = {
     age: 24,
     name: "Sandwichface",
     SSN: 420
};



function myObjectNames(object) {
    var output = [];
    each(object, function(name){
        output.push(name);
    });
    return output;
}

function myObjectNames(object){
    var output = [];
    for(var name in object) {
        output.push(name);
    }
    return output;
}


//Filter: What does it do? --> it filters the wanted result;
//Steps: //
        //It takes two arguments: collection and a function (called test)
        //create a variable with an empty array.
        //It iterates the value, position and collection.
        //You need a condition to test what it is looking for; and then applying the callback function to the collection, position, value
        //We then push the values that passed the test into the empty array.
        //return the array.
        //filter doesn't modify the original collection, that's why we are pushing the modified part of array into a new one


function filter(collection, test){
    var output = [];
    if(Array.isArray(collection)){
       for(var i = 0; i < collection.length; i++){
         if(test(collection[i], i, collection)){
             output.push(collection[i], i, collection);
         }  
       } 
    }
    for(var key in collection){
        if(test(collection[i], i, collection)){
            output.push(collection[i], i, collection);
        }
    }
    return output;
}
        
        
function filter(collection, test) {
    var output = [];
    each(collection, function(value, position, collection) {
       if(test(value, position, collection)) {
           output.push(value, position, collection);
       }
    });
    return output;
}

//write an example of implementation (later)
// write a function of myArray, it takes an array for an argument and use filter to filter positive numbers


//Reduce: what does it do --> it returns the summary(of the keys in the object and the values in an array)
//Steps: it takes three arguments: collection, summarize(function name), seed (start point)
//we create an array, where we going to put the summarized items, but we have to start that summary with 
//seed (or start point). Why? Because it starts counting from zero (or any chosen start point), everytime adding another counted item,
//and that's called summarizing
//iterate over collection and other two friends (value, position, collection(summary) (with each)
//you assign the calculation to the summary array while using callback function
//then you return the summary
//reduce doesn't modify the original collection but returns summarized(modified) collection


function reduce(collection, summarize, start) {
    var summary = start;
    each(collection, function(value, position, collection) {
        summary = summarize(summary, value, position, collection);
    });
    return summary;
}

//create a function named youngest, it takes object as an argument, use reduce to find the youngest
function youngest(object) {
    reduce(object, function(youngest, oldest) {
        if(youngest < oldest) {
            return youngest;
        }
    });
}

each(collection, action);
