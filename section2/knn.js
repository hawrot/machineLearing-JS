// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');


const numbers = [
    [10,5],
    [17,2],
    [34,1],
    [60,-5]
];

//sorting by first element
console.log('Sort by first element:');
console.log(_.sortBy(numbers));
console.log(' ');


console.log('Sort by second  element:');
console.log(_.sortBy(numbers, function (row){
    return row[1];
}
));
