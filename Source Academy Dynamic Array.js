/*
Alternative version of dynamic Array. Haven't been thoroughly analyzed yet.

const buildDynamicArray = arr => f => f([arr]);
const getDynArrLength = dynArr => array_length(dynArr(x => x)[0]);
const displayDynArr = dynArr => display(dynArr(x => x));
*/

const buildDynamicArray = arr => [arr];
const getDynArrLength = dynArr => array_length(dynArr[0]);
const displayDynArr = dynArr => display(dynArr[0]);


/*
resize an array twice. Example:

const myArray = buildDynamicArray([1,2,3]);

resizeTwice(myArray);

displayDynArr(myArray); (displays [undefined, undefined, undefined, 1, 2, 3]);
*/

function resizeTwice(dynArr){
    const len = getDynArrLength(dynArr);
    const resizedArray = [];
    
    for(let i = len; i < 2*len; i = i + 1) {
        resizedArray[i] = dynArr[0][i - len];
    }
    
    dynArr[0] = resizedArray;
}

//insert element into dynArr[index]
function insert(element, index, dynArr) {
    let temp = dynArr[0][index];
    dynArr[0][index] = element;
    
    if(!is_undefined(temp)) {
        for(let i = index + 1; !is_undefined(dynArr[0][i - 1]); i = i + 1) {
            const garbage = dynArr[0][i];
            dynArr[0][i] = temp;
            temp = garbage;
        }
    }
}

const myArray = buildDynamicArray([1,2,3,4]);

insert('HELLOOO', 0, myArray);

displayDynArr(myArray);