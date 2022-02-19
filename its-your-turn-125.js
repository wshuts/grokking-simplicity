const functions = {
    pop_example: pop_example,
    last_element: last_element,
    drop_last: drop_last
};

function pop_example(){
    var a = [1, 2, 3, 4];
    var b = a.pop();
    console.log(b); // prints 4
    console.log(a); // prints [1, 2, 3]
}

function last_element(array){
    return array[array.length - 1];
}

function drop_last(array){
    var array_copy = array.slice();
    array_copy.pop();
    return array_copy;
}

module.exports = functions;