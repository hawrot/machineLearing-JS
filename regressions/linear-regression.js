const tf = require('@tensorflow/tfjs');
const _ = require('lodash');

class LinearRegression {
    constructor(features, labels, options) {
        this.features = features;
        this.labels = labels;

        this.options = Object.assign({learningRate: 0.1, iterations: 1000}, options);
        this.m = 0;
        this.b = 0;
    }

}

gradientDescent = () => {
    const currentGuessesForMPG = this.features.map(row => {
        return this.m * row[0] + this.b;
    });

    const bSlope = _.sum(currentGuessesForMPG.map((guess, index) => {
        return guess - this.labels[index][0];
    })) * 2 / this.features.length;

    const mSlope = _.sum(currentGuessesForMPG.map((guess, index) => {
        return -1 * this.features[index][0] * (this.labels[index][0] - guess)
    })) * 2 / this.features.length;

}

function train() {
    for (let i = 0; i < this.options.iterations; i++) {
        this.gradientDescent();
    }

}


module.exports = LinearRegression;
