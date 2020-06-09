require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');
const loadCSV = require('./load-csv');
const plot = require('node-remote-plot')
const LinearRegression = require('./tensorflow-linear-regression');

let {features, labels, testFeatures, testLabels} = loadCSV('./cars.csv', {
    shuffle: true,
    splitTest: 50,
    dataColumns: ['horsepower', 'weight', 'displacement'],
    labelColumns: ['mpg']
});

//console.log(features);
//console.log(labels);

const regression = new LinearRegression(features, labels, {learningRate: 0.1, iterations: 100, batchSize: 10});


regression.train(); //training


// console.log('Updated M is ', regression.weights.get(1, 0), '   |   ' , 'Updated B is ', regression.weights.get(0,0));

const r2 = regression.test(testFeatures, testLabels);

plot({
    y: regression.mseHistory.reverse(),
    xLabel: 'Iteration #',
    yLabel: 'Mean Squared Error'
});



console.log('R2 is : ', r2);
