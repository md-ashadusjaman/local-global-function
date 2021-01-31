// function getFullName(firstName, secondName) {
//     const fullName = firstName + " " + secondName;
//     return fullName;
// }

// const name = getFullName("hanif", "paribahan");
// console.log(name);

// arguments use for catch unknown number of parameter of a function

function getFullName(firstName, lastName) {

    let fullName = firstName + " " + lastName;

    for (let i = 2; i < arguments.length; i++) {
        arguments[i];
        fullName = fullName + " " + arguments[i];
    }

    return fullName;

}
let name = getFullName("rahim", "karim", "jaber");
console.log(name);