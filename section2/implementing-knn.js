var _ = require('lodash');
var _ = require('lodash/core');
var fp = require('lodash/fp');
var array = require('lodash/array');
var object = require('lodash/fp/object');
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
const chain = _.chain(outputs)
    .map(row => [distance(row[0]), row[3]])
    .sortBy(row => row[0])
    .slice(0,k)
    .cou
    .value()

console.log(chain);
