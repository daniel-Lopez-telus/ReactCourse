
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];

const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};

// {
//     name: 'Max',
//     age: 28
// }

const myObj = { name: 'Max', age: 28 }

const anotherObj = { ...myObj, hobby: 'Sports' }

console.log(anotherObj);