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

function newLineAvg(newEntry, id) {
    var barObj = dynamicData[id];
    barObj.lineEntries += 1;
    barObj.lineTotal += newEntry;
    barObj.lineAvg = barObj.lineTotal/ barObj.lineEntries;
    return barObj.lineAvg;
  }

function newCoverAvg(newEntry,id) {
    var barObj = dynamicData[id];
    barObj.coverEntries += 1;
    barObj.coverTotal += newEntry;
    barObj.coverAvg = barObj.coverTotal/ barObj.coverEntries;
    return barObj.coverAvg;
  }

  
module.exports.getDynamicData = getDynamicData;
module.exports.newLineAvg = newLineAvg;
module.exports.newCoverAvg = newCoverAvg;