
var animal = {};
animal.species = "dog";
animal["name"] = "Zelda";
animal.noises = [];
console.log(animal);

var noises = [];
noises[0] = "woof";
noises.push("bark");
noises.unshift("woofens");
noises.push("sniff sniff");
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);    

animal["noises"] = noises; 
animal.noises.push("sniffles");
console.log(animal);

var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
    species: "duck",
    name: "Jerome",
    noises: ["quack", "honk", "sneeze", "woosh"]
};

animals.push(duck);
console.log(animals);

var cat = {
    species: "cat",
    name: "Steve",
    noises: ["meow", "beg", "ignoring"]
};

animals.push(cat);

var hedgehog = {
    species: "hedgehog",
    name: "Sonic",
    noises: ["huff", "puff", "gottagofast"]
};

animals.push(hedgehog);
console.log(animals.length);

var friends = [];                   //Array's are zero indexed, therefore they're good for lists.
function getRandom() {
    var randomFriend = animals[Math.floor(animals.length * Math.random())]; 
    return friends.push(randomFriend.name);
}

getRandom();
hedgehog.friends = friends;

console.log(friends);

function search(name) {
  for(var i = 0; i < animals.length; i++) {
    if(name.toUpperCase() === animals[i].name.toUpperCase()) {
        return animals[i];
    } 
  } return null;
}

function edit(name, object) {
  for(var i = 0; i < animals.length; i++) {    
    if(name.toUpperCase() === animals[i].name.toUpperCase()) {
        return animals.splice(i, 1, object);
    }
  } 
}

function remove(name) {
    for(var i = 0; i < animals.length; i++) {
    if(name.toUpperCase() === animals[i].name.toUpperCase()) {
        animals.splice(i, 1);
    }
  }
}

function create(object) {
    for(var i = 0; i < animals.length; i++) {
      if(object.name.toUpperCase() === animals[i].name.toUpperCase()) {
      return;
      }
    } 
    
    if(object.name.length > 0 && object.species.length > 0) {
        animals.push(object);
      } 
}