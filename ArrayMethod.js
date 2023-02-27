
/**
 * Add the missing logic to a transformToObjects() function that transforms 
 * a list of numbers into a list of JavaScript objects.
 * For the provided input [1, 2, 3] the transformToObjects() function should
 *  return [{val: 1}, {val: 2}, {val: 3}]
 */

function transformToObjects(numberArray) {

    return numberArray.map(num => ({val: num}));

    // return numberArray.map( num => {return {val: num}} );

    // let newArray = [];
    // numberArray.forEach(el => {
    //     let obj = {};
    //     obj.val = el;
    //     newArray.push(obj);
    // });
    // return newArray;
}

numbers = [1, 2, 3, 4];
console.log(transformToObjects(numbers));