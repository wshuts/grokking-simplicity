const functions = {
    pop_example: pop_example,
    last_element: last_element,
    drop_last: drop_last,
    pop: pop,
    pop_v2: pop_v2
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

function pop(array){
    var array_copy = array.slice();
    var last_element = array_copy.pop();
    return {
        last_element: last_element, 
        array: array_copy
    };
}

function pop_v2(array){
    return {
        last_element: last_element(array),
        array: drop_last(array)
    };
}

module.exports = functions;