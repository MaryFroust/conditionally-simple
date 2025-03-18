/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(str){
  if(str.length > 20){
    return "That's a long string!"
  }
}
function isItMedium(str){
  if(str.length <=10 >=20){
    return "That's a regular sized string!"
  }else if(str.length ===10){
    return "That's a regular sized string!"
  }else if(str.length ===20){
    return "That's a regular sized string!"
  }
}



/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}