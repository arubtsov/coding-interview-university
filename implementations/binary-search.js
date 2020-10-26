const { strict: assert } = require('assert');

/**
 *
 */
function binarySearch (array, key) {
    assert.strictEqual(Array.isArray(array), true);

    let index = -1;
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        const midpoint = min + Math.floor((max - min) / 2);
        const element = array[midpoint];

        if (element === key) {
            index = midpoint;
            break;
        }
        else if (element > key)
            max = midpoint - 1;
        else
            min = midpoint + 1;
    }

    return index;
}

assert.strictEqual(binarySearch([1,2,3], 4), -1);

assert.throws(() => {
     binarySearch('string', 42);
}, Error);

assert.strictEqual(binarySearch([1, 2, 3], 2), 1);
assert.strictEqual(binarySearch([1, 2, 3, 4], 2), 1);
assert.strictEqual(binarySearch([1, 2, 3, 4], 3), 2);
assert.strictEqual(binarySearch([1, 7, 11, 17, 22, 24, 26, 29], 26), 6);
