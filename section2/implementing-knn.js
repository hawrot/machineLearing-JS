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

const outputs =
    [
        [10,.5, 16,1],
        [200,.5,16,4],
        [350,.5,16,4],
        [600, .5, 16,5]
    ];

const predictionPoint = 300;
const k = 3;

function distance(point){
    return Math.abs(point - predictionPoint);
}

//Getting the distance and bucket number

 let chain =   _.chain(outputs)
        .map(row => [distance(row[0]), row[3]])
        .sortBy(row => row[0])
        .slice(0,k)
        .countBy(row => row[1])
        .toPairs()
        .sortBy(row => row[1])
        .last()
        .first()

console.log(chain);



