const express = require("express");
const Bar = require("./models/Bar");
const router = express.Router();

var dynamicData = [
    {
    "id": 0,
    "name": "Phyrst",
    "coverTotal": 0,
    "coverEntries": 0,
    "coverAvg" : 0,
    "lineTotal": 0,
    "lineEntries": 0,
    "lineAvg" : 0,
    
  },
  {
    "id": 1,
    "name": "Champs Downtown",
    "coverTotal": 0,
    "coverEntries": 0,
    "coverAvg" : 0,
    "lineTotal": 0,
    "lineEntries": 0,
    "lineAvg" : 0,
  },
  {
    "id": 2,
    "name": "Bar Bleu",
    "coverTotal": 0,
    "coverEntries": 0,
    "coverAvg" : 0,
    "lineTotal": 0,
    "lineEntries": 0,
    "lineAvg" : 0,
  },
  {
    "id": 3,
    "name": "Lions Den",
    "coverTotal": 0,
    "coverEntries": 0,
    "coverAvg" : 0,
    "lineTotal": 0,
    "lineEntries": 0,
    "lineAvg" : 0,
  },
  {
    "id": 4,
    "name": "Primanti Brothers",
    "coverTotal": 0,
    "coverEntries": 0,
    "coverAvg" : 0,
    "lineTotal": 0,
    "lineEntries": 0,
    "lineAvg" : 0,
  },
  {
    "id": 5,
    "name": "Cafe 210",
    "coverTotal": 0,
    "coverEntries": 0,
    "coverAvg" : 0,
    "lineTotal": 0,
    "lineEntries": 0,
    "lineAvg" : 0,
  },
  {
    "id": 6,
    "name": "Doggies",
    "coverTotal": 0,
    "coverEntries": 0,
    "coverAvg" : 0,
    "lineTotal": 0,
    "lineEntries": 0,
    "lineAvg" : 0,
  },
  {
    "id": 7,
    "name": "Mad Mex",
    "coverTotal": 0,
    "coverEntries": 0,
    "coverAvg" : 0,
    "lineTotal": 0,
    "lineEntries": 0,
    "lineAvg" : 0,
  },
  {
    "id": 8,
    "name": "Pickles",
    "coverTotal": 0,
    "coverEntries": 0,
    "coverAvg" : 0,
    "lineTotal": 0,
    "lineEntries": 0,
    "lineAvg" : 0,
  },
  {
    "id": 9,
    "name": "Shandygaff",
    "coverTotal": 0,
    "coverEntries": 0,
    "coverAvg" : 0,
    "lineTotal": 0,
    "lineEntries": 0,
    "lineAvg" : 0,
  },
  {
    "id": 10,
    "name": "Chrome",
    "coverTotal": 0,
    "coverEntries": 0,
    "coverAvg" : 0,
    "lineTotal": 0,
    "lineEntries": 0,
    "lineAvg" : 0,
  },
  {
    "id": 11,
    "name": "Basement",
    "coverTotal": 0,
    "coverEntries": 0,
    "coverAvg" : 0,
    "lineTotal": 0,
    "lineEntries": 0,
    "lineAvg" : 0,
  }
  ];

function getDynamicData(){
    return dynamicData;
}

function newLineAvg(bar, newEntry) {
    bar.lineEntries += 1;
    bar.lineTotal += newEntry;
    bar.lineAvg = bar.lineTotal/ bar.lineEntries;
    return bar.lineAvg;
  }

function newCoverAvg(bar, newEntry) {
    bar.coverEntries += 1;
    bar.coverTotal += newEntry;
    bar.coverCharge = bar.coverTotal/ bar.coverEntries;
    return bar.coverCharge;
  }

function newFoodAvg(bar, newEntry) {
  bar.foodCount += 1;
  bar.food = bar.food * ((bar.foodCount-1)/bar.foodCount) + newEntry/bar.foodCount;
  return bar.food; 
}

function newDrinkAvg(bar, newEntry) {
  bar.drinkCount += 1;
  bar.drink = bar.drink * ((bar.drinkCount-1)/bar.drinkCount) + newEntry/bar.drinkCount;
  return bar.drink; 
}

function newServiceAvg(bar, newEntry) {
  bar.serviceCount += 1;
  bar.service = bar.service * ((bar.serviceCount-1)/bar.serviceCount) + newEntry/bar.serviceCount;
  return bar.service; 
}

function newPriceAvg(bar, newEntry) {
  bar.priceCount += 1;
  bar.price = bar.price * ((bar.priceCount-1)/bar.priceCount) + newEntry/bar.priceCount;
  return bar.price; 
}

function newNoiseAvg(bar, newEntry) {
  bar.noiseCount += 1;
  bar.noise = bar.noise * ((bar.noiseCount-1)/bar.noiseCount) + newEntry/bar.noiseCount;
  return bar.noise; 
}

function newAtmosphereAvg(bar, newEntry) {
  bar.atmosphereCount += 1;
  bar.atmosphere = bar.atmosphere * ((bar.atmosphereCount-1)/bar.atmosphereCount) + newEntry/bar.atmosphereCount;
  return bar.atmosphere; 
}

function resetDynamicData() {
    var dynamicData = getDynamicData();
    for(i = 0; i < dynamicData; i++){
      dynamicData[i].coverEntries = 0;
      dynamicData[i].coverTotal = 0;
      dynamicData[i].coverAvg = 0;
      dynamicData[i].lineAvg = 0;
      dynamicData[i].lineEntries = 0;
      dynamicData[i].lineTotal = 0;
    }
}
  
module.exports.getDynamicData = getDynamicData;
module.exports.newLineAvg = newLineAvg;
module.exports.newCoverAvg = newCoverAvg;
module.exports.newFoodAvg = newFoodAvg;
module.exports.newDrinkAvg = newDrinkAvg;
module.exports.newPriceAvg = newPriceAvg;
module.exports.newServiceAvg = newServiceAvg;
module.exports.newNoiseAvg = newNoiseAvg;
module.exports.newAtmosphereAvg = newAtmosphereAvg;
module.exports.resetDynamicData = resetDynamicData;