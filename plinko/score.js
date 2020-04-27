const outputs = [];

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);

}


const k = 3;

function runAnalysis() {
  const [testSet, trainingSet] = splitDataset(outputs, 10);

}



function knn(dataset, point){
return  _.chain(dataset)
      .map(row => [distance(row[0], point), row[3]])
      .sortBy(row => row[0])
      .slice(0,k)
      .countBy(row => row[1])
      .toPairs()
      .sortBy(row => row[1])
      .last()
      .first()
      .parseInt()
      .value();
}

function distance(pointA, pointB) {
  return Math.abs(pointA - pointB);
}

function splitDataset(data, testCount){
  const shuffled = _.shuffle(data);

  const testSet = _.slice(shuffled, 0, testCount);
  const trainingSet = _.slice(shuffled, testCount);

  return[testSet, trainingSet];

}
