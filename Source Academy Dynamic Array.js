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

const myArray = buildDynamicArray([1,2,3,4]);
resizeTwice(myArray);
displayDynArr(myArray);