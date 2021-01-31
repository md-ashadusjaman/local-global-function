// when we declare a variable inside of a function than it's a local variable. We can't use this from outside of specific function.

function addTodo(task) {
    const newTaskElement = document.createElement("li");
}

var name = "rashed";
// global variables are declared from outside of the function. So, name is a global variable.

function addUsers() {
    console.log("ripon");
    // var new = "robin";
}
addUsers();

// immediately-involed function expressions (IIFE)

(function addUser() {
    const newName = "tarek";
    console.log(newName);
})();