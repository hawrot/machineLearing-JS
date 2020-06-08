const tf = require('@tensorflow/tfjs');
const _ = require('lodash');

class LinearRegression {
    constructor(features, labels, options) {
        this.features = this.processFeatures(features);
        this.labels = tf.tensor(labels);


        this.options = Object.assign({learningRate: 0.1, iterations: 1000}, options);

        this.weights = tf.zeros([2, 1]);
    }


    gradientDescent() {
        //matMul() is a matrix multiplication
        const currentGuesses = this.features.matMul(this.weights);
        const differences = currentGuesses.sub(this.labels);

        const slopes = this.features
            .transpose()
            .matMul(differences)
            .div(this.features.shape[0])

        this.weights = this.weights.sub(slopes.mul(this.options.learningRate));
    }

    train() {
        for (let i = 0; i < this.options.iterations; i++) {
            this.gradientDescent();
        }
    }

    test(testFeatures, testLabels) {
        testFeatures = this.processFeatures(testFeatures);
        testLabels = tf.tensor(testLabels);


        const predictions = testFeatures.matMul(this.weights);


        //sum of squares of residuals
        const res = testLabels.sub(predictions).pow(2).sum().get();

        //total sum of squares
        const tot = testLabels.sub(testLabels.mean()).pow(2).sum().get();

        //Coefficient of Determination

        return 1 - res / tot;

    }

    processFeatures(features) {
        features = tf.tensor(features);


        if (this.mean && this.variance) {
            features = features.sub(this.mean).div(this.variance.pow(0.5));
        } else {
            features = this.standardize(features);
        }
        features = tf.ones([features.shape[0], 1]).concat(features, 1);

        return features;
    }

    standardize(featues) {
        const {mean, variance} = tf.moments(featues, 0);

        this.mean = mean;
        this.variance = variance;

        return featues.sub(mean).div(variance.pow(0.5));
    }
}

module.exports = LinearRegression;
