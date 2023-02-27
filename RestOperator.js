// REST converts a list of elements into an array (so we use it for arrays only)

function convertToArray(...asManyArgumentsAsYouWant) {
    return asManyArgumentsAsYouWant;
}

console.log(convertToArray(1, 2, 3)) // yields [1, 2, 3]
console.log(convertToArray('hi', 'everyone')) // yields ['hi', 'everyone']