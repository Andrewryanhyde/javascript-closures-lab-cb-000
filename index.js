const app = "I don't do much."


function bumpCounter() {
  let counter = 0;

  function addBumps() {
    counter += 1;
  };

  function getBumps() {
    counter;
  };

  return addBump;
  return getBump;
}


function createAnimal(animalType) {
  return function(deadlyDevice) {
    return {animalType, deadlyDevice}; 
  };
}


var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');