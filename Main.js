function build(keys) {
    const arr = [];
    
    for_each(x => arr[x] = x, keys);

    return arr;
}

function generateMersennePrime(x) {
    const log2 = math_log2(x);
    return log2 > 106
        ? error(log2, "number too big. Max size 106 bit, your number:")
        : log2 > 88
        ? 162259276829213363391578010288127
        : log2 > 60
        ? 618970019642690137449562111
        : log2 > 30.8
        ? 2305843009213693951
        : log2 > 18.8
        ? 2147483647
        : log2 > 16.9
        ? 524287
        : log2 > 12.9
        ? 131071
        : log2 > 7
        ? 8191
        : log2 > 5
        ? 127
        : 31;
}


//Universal Hashing
function generateUHash(size, universe) {
    const primeConst = generateMersennePrime(universe); //generate Prime bigger than the universe
    const randomA = math_floor(primeConst * math_random());
    const randomB = math_floor(primeConst * math_random());
    
    return key => (((randomA * key) + randomB) % primeConst) % size;
}

function build_hashed(keys, universe) {
    const size = array_length(keys);
    const result = [];
    const hashFunc = generateUHash(size, universe);
    
    for(let i = 0; i < size; i = i + 1) {
        const pos = hashFunc(keys[i]);
        
        //create chain:
        result[pos] = result[pos] === undefined
            ? pair(keys[i], null)
            : pair(keys[i], result[pos]);
    }
    
    //return hashed array and the hash function
    return pair(result, hashFunc);
}

const getHashedArr = hashed => head(hashed);
const getHashFunc = hashed => tail(hashed);


function isInsideHash(key, hashedArr, hashFunc) {
    function searchChain(element, lst) {
        return is_null(lst)
            ? false
            : element === head(lst)
            ? true
            : searchChain(element, tail(lst));
    }
    
    const index = hashFunc(key);
    
    return is_undefined(hashedArr[index])
        ? false
        : searchChain(key, hashedArr[index]);
}

const testHash = build_hashed([12345,13456,14567,23456], math_pow(2, 102));

//NOT YET FINISHED.
/*
input: Array of elements, key universe
element format: (key, element)
output: Hashed dictionary
*/
function createDictionary(arr, universe) {
    function getDictKeys(dict) {
        const keys = [];
        const len = dictionaryLength(dict)
        
        for(let i = 0; i < len; i = i + 1) {
            keys[i] = head(dict[i]);
        }
        
        return keys;
    }
    
    const keys = getDictKeys(arr);
    
    build_hashed();
    
    return f => f(arr);
}

const dictionaryLength = dict => array_length(dict);

function getDictElement(key) {
    
}
