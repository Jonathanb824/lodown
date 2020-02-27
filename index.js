 'use strict';
// YOU KNOW WHAT TO DO //
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, test) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            test(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            test(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: return the given on altered. 
 * 
 * @param {Any Value} value: Can be any datatype
 * 
 * @return {Any Value}: Same value as input, unaltered 
 */
 
 function identity(value){
    return value;
}
module.exports.identity = identity;



/** typeOf: returns the type of data in a string.
*
* @param: {Value} : Input as an argument
*
* @return {Value} :  Will return a the type of data in a string
*/    
   
 function typeOf(value){
    if (Array.isArray(value)){
        return "array";
   }else if(value === null){
        return "null";
   }
    return typeof anything;  
}
module.exports.typeOf = typeOf;


/** first: Gets the first index of array. Designed to take in two arugments
*
* @param {Array} Array: The array which to iterate over.
*                  Input as an arugment. Array may or may not have a value or even exist
* @param {Number} Num: Input as an argument. The number may have any numeric
*
* @return {Index[0]}: the first element of the array
*/
function first(array, num){
    // let first = (arr, num) => { if (!num){return arr[0]} else if (num <0) {return [] } else{return arr.slice(0,num)} }
    if(!Array.isArray(array)){
        return [];
    }else if (num === undefined && isNaN(num)){
        return array[0];
    }else if (num > array.length){
        return array;
    }else {
        return array.splice(0, num);
    }
    }
module.exports.first = first;


/**last: Gets the last element of array. Designed to take two arguments - an array
* and a number - and evaluate existence of the arguments. If array is not an array, last
* returns an empty array. If array and number exist, the last number of the array is returned.
* If number is not give or is NaN, the last element of array is returned.
*
* @param {Array} array: Input as an argument. The array to inspect that may or may not have a value or even exist.
* @param {Num} number: Input as an argument. The value to inspect that  may have any numeric value, may not be given or NaN.
*
* @return {Array} array: If array is not an array after checked, return an empty array[];
* If the number doesnt have a value or is NaN, the last element shall return in the array only, or else
* other if arguments do not pass the test, return the last number items of array
*/

function last(array, num) {
    let arrResult = [];
    if(Array.isArray(array) === false) {
        return arrResult;
    } if (isNaN(num) === true) {
        return array[array.length - 1];
    } else if ( num < 0) {
        return arrResult;
    } else if( num > array.length) {
        return array;
    }  for(let i = num; i > 0; i--) {
        arrResult.push(array[i]);
    }   arrResult.sort();
    return arrResult;
}
module.exports.last = last;


/**indexOf: 
*
* @param {Array} Array: The Array over which to inspect. Input as an arguement. 
* The test will inspect using a for loop over the array. When the loop is initiated, the index of
* the array that is the first occurence of value inside of the array will be returned.
* 
* @param {Value}: Input as an argument.
*
* @return {Number}: Returns the index of the matched value in the array. If the
* value is not in the array, -1 will be returned.
*/

function indexOf(array, value) {
    
     for(let i = 0; i < array.length; i++) {
         if(array[i] === value) {
             return i;
         }
     } return -1;
}
module.exports.idexOf = indexOf;


/** contains: test to see if an array contains a value
*
* @param {Array}: array: The Array which to inspect. Input as an argument
* @param {Value}: Input as an argument
*
* @return {Value}: true -  If the array contains a value, returns a boolean value of true
* @return {Value}: false - If the array don't contain a value, returns a boolean value false
*/

function contains(array, value) {
    
    return array.includes(value) ? true : false;
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, test) {
     if(Array.isArray(collection) === true) {
         for (let i = 0; i < collection.length; i ++) {
             test(collection[i], i, collection);
         }
     } else if(typeof collection === 'object' &&  collection !== null) {
              for(let key in collection) {
                  test(collection[key], key,  collection);
              }
         }
}
module.exports.each = each;
 
/**unique removes duplicates from an array
*
* @param {Array} collection: Input as argument.
*
* @return{Array}: Returns a collection with elements that were pushed in having no duplicates
*/
  function unique(array) {
      return array.filter((a, b) => array.indexOf(a) === b);
}
module.exports.unique = unique;

/** filter: Iterates over elements in the collection to return an array of all the elements that are true.
*
* @param {Array} collection: The collection over which to iterate. Input as an argument
* @param {Function} action: The Function to be applied to each value in the collection. Input as argument
* @return {Array}: collection: An array will return with only the values that past the test (returned true)
*/
 function filter (array, test){
     var myArray = [];
     each(array, function(element, index, array){
         if(test(element, index, array)){
             myArray.push(element);
         }
     });
     return myArray;
 }
 
 module.exports.filter = filter;
 
/** reject is the opposite of _.filter and this method returns the elements of a collection that does not return true.
*
* @param {Array} collection: The collection over which to iterate. Input as an argument.
* @param {function} action: The Function to be applied to each value in the collection. Input as an argument.
*
* @return {Array}: collection: This will return a new array of elements that passed the test (or returned false)
*
*/

function reject (array, test){
    let newArray = [];
    filter(array, function(element, index, array) {
        if(!test(element, index, array)){
            newArray.push(element);
        }
    });
    return newArray;
}
module.exports.reject = reject;



/** _.partition: creates an array of elements split into two groups
*
* @param {Array} array: The the array which to inspect over which to iterate. Input as as argument.
* @param {function} test: The Function to be applied to each value in the array. Input as an argument.
*
* @return {Array}: collection - An array will be returned that is made up of two sub arrays
*
*/
function partition(array, test){
    var newArray = [];
    if (filter(array,test)){
        newArray.push(filter(array,test));
        newArray.push(reject(array,test));
    }
    return newArray;
   
}
module.exports.partition = partition;


/** map: creates an array of values by running each element in the collection
*
* @param {Array} collection: The collection over which to iterate.
* @param {function} action: The Function to be applied to each value in the collection
*
* @return {array} arr:  A new array will be returned with the new values.
*/
function map (collection, test){
    
    let newArray = [];
    each(collection, function(value, index, collection){
        newArray.push(test(value, index, collection));
    });
    return newArray;
}
module.exports.map = map;

/** pluck: is used to extract a given list of property from an array
*
* @param {Array}: collection: The collection over which to iterate. Input as argument
* @param:{property}: Input as arguemnt
*
* @return {Array}: collection: An array will be returned that is containing the values of the properties of
* every element in the array
*/
function pluck (arrObj, prop) {
    return map(arrObj, function(value, index, collection){
        return value[prop];
    });
}
module.exports.pluck = pluck;


/** every: is utilized to check if all components in a collection brings truthy back. 
* Iteration stops once a test returns falsy
*
* @param {Collection}: collection: The object or Array which to iterate over. Input as argument.
* @param {function}: test: The Function to be applied to each value in the collection. Input as argument.
*
* @return {Boolean}: true - Returns a boolean value of true if every element in the array is true
* @return {Boolean}: false -  If just one of the elements returns false, return a boolean value of false
*/
//returns a boolean
function every(collection,test){
    var newArray = [];
     each(collection,function(element, index, collection){
         if(typeof test !== "function"){
             if(!element){
            newArray.push(element);}
         }else if(!test(element, index, collection)){
            newArray.push(element);
        }
    });
        if(newArray.length > 0){
        return false;
    }
        return true;
    
}
module.exports.every = every;


/** some: test to see if any element is true in the collection
*
* @param: {Collection}: collection: The collection over which to iterate. Input as argument.
* @param: {function}: action: The Function to be applied to each value in the collection. Input as argument,
*
* @return {Value}: Returns a boolean value of true if element passes the test, otherwise it returns false
*
*/
//returns a boolean
function some(collection,func){
    var newArray = [];
     every(collection,function(element, index, collection){
         if(typeof func !== "function"){
             if(element){
            newArray.push(element);}
         }
        else if(func(element, index, collection)){
            newArray.push(element);
        }
    });
    if(newArray.length > 0){
        return true;
    }
        return false;
}
module.exports.some = some;


/** reduce: Reduces a collection to a value which is the result of running each element
*in collection thru iteration. Each time the function is called, it is supplied
*the return value of the previous.
*
* @param {Array}: collection: The collection over which to iterate. Input as argument.
* @param {function}: action: The Function to be applied to each value in the collection. Input as argument.
* @param {seed}: Input as argument.
*
* @return {Value}: Returns the value of the final function call
*/
function reduce(array, test, seed) { 
        let i;
        let previousResult;
        if(seed !== undefined && seed !== null) {
            i = 0;
            previousResult = seed;
        } else {
            previousResult = array[0];
            i = 1;
        }
         for(; i < array.length; i++) {  // loop over array
             previousResult = test(previousResult, array[i], i);
         }
         return previousResult;
}
module.exports.reduce = reduce;

/** extend: iterates over own properties and copies from one object to another object
*
* @param: {Object}: collection: The collection over which to iterate. Input as argument.
* @param: {Object}: collection: Input as argument.
*
* @return {object}: collection: Returns the updated object
*/
function extend(obj1, obj2, ...theArgs) {
       Object.assign(obj1, obj2);
       Object.assign(obj1, ...theArgs);
       return obj1;
}
module.exports.extend = extend;