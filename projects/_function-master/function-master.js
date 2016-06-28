function objectValues(objects) {
    var array = [];
    for (let key in objects) {
        array.push(objects[key]);
    }
    return array;
}

function keysToString(objects) {
    return Object.keys(objects).join(" ");
}
    
function valuesToString(objects) {
    var array = [];
    for(var value in objects) {
        if (typeof (objects[value]) === "string") {
            array.push(objects[value]);
        } 
    } return array.join(" ");
}

function arrayOrObject(argument) {
    if (Array.isArray(argument)) {
     return "array";   
    }   else return "object";
}

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function capitalizeAllWords(words) {
    var splitWords = words.split(" ")
    for (var i = 0; i < splitWords.length; i++) {
        splitWords[i] = capitalizeWord(splitWords[i]);
    }
    return splitWords.join(" ");
}

function welcomeMessage(obj) {
    
    return "Welcome " + capitalizeWord(obj.name) + "!";
}

function profileInfo(obj) {
    return capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species);
}

function maybeNoises(obj) {
  if(!obj.noises || obj.noises.length === 0) {
      return "there are no noises";
  } else {
      return obj.noises.join(" ");
  }
}

function hasWord(words, word) {
    
    var splitWords = words.split(" ");
    
    for(var i = 0; i < splitWords.length; i++) {
        if(word === splitWords[i]){
            return true;
        }
    } return false;
}

function addFriend(name, object) {
    object.friends.push(name);
    
    return object;
}

//13. 
function nonFriends (name, people) {
    //find the namd person:
    var namedPerson;
    for (var i = 0; i < people.length; i++) {
        if (name === people[i].name) {
            namedPerson = people[i];
        }
    }
     //see who is not in the name person's friends list
    //make sure not to add the named person to the list
    //spit it back out 
    var out = [];
    for (var j = 0; j < people.length; j++) {
        if (people[j].name === name) continue;
        
        if (namedPerson.friends.indexOf(people[j].name) === -1) {
            out.push(people[j].name);
        }
    }
    return out;
}