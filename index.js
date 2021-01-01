var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var barDynamicData = [
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
]

var barData = [
    {
      "id": 0,
      "name": "Phyrst",
      "description": "Subterranean Irish pub featuring daily live, local music & drink specials plus billiards & games.",
      "pic_name": "Phyrst",
      "closed": 0,
      "hours": {
        "Sunday": "7:00 pm - 2:00 am",
        "Monday": "7:00 pm - 2:00 am",
        "Tuesday": "7:00 pm - 2:00 am",
        "Wednesday": "7:00 pm - 2:00 am",
        "Thursday": "5:00 pm - 2:00 am",
        "Friday": "5:00 pm - 2:00 am",
        "Saturday": "5:00 pm - 2:00 am"
      },
      "phone": "7178675309",
      "address": "111 East Beaver Street",
      "coverCharge": 0,
      "line": 0,
    },
    {
      "id": 1,
      "name": "Champs Downtown",
      "description": "Sports bar in the heart of State College",
      "pic_name": "Champs",
      "closed": 0,
      "hours": {
        "Sunday": "12:00 pm - 2:00 am",
        "Monday": "4:00 pm - 2:00 am",
        "Tuesday": "4:00 pm - 2:00 am",
        "Wednesday": "4:00 pm - 2:00 am",
        "Thursday": "4:00 pm - 2:00 am",
        "Friday": "4:00 pm - 2:00 am",
        "Saturday": "12:00 pm - 2:00 am"
      },
      "phone": "8142381110",
      "address": "139 S Allen St",
      "coverCharge": 0,
      "line": 0,
    },
    {
      "id": 2,
      "name": "Bar Bleu",
      "description": "Craft beer, cocktails & Kansas City-style BBQ served in a bilevel sports bar with pool & live music.",
      "pic_name": "Bar_Bleu",
      "closed": 0,
      "hours": {
        "Sunday": "Closed",
        "Monday": "5:30 pm - 2:00 am",
        "Tuesday": "5:30 pm - 2:00 am",
        "Wednesday": "5:30 pm - 2:00 am",
        "Thursday": "5:30 pm - 2:00 am",
        "Friday": "5:30 pm - 2:00 am",
        "Saturday": "3:00 pm - 2:00 am"
      },
      "phone": "8142370374",
      "address": "112 S Garner St",
      "coverCharge": 0,
      "line": 0,
    },
    {
      "id": 3,
      "name": "Lions Den",
      "description": "",
      "pic_name": "Lions_Den",
      "closed": 0,
      "hours": {
        "Sunday": "Closed",
        "Monday": "Closed",
        "Tuesday": "8:00 pm - 2:00 am",
        "Wednesday": "Closed",
        "Thursday": "8:00 pm - 2:00 am",
        "Friday": "8:00 pm - 2:00 am",
        "Saturday": "8:00 pm - 2:00 am"
      },
      "phone": "8142375081",
      "address": "118 S Garner St",
      "coverCharge": 0,
      "line": 0,
    },
    {
      "id": 4,
      "name": "Primanti Brothers",
      "description": "Pittsburgh-born counter-serve chain known for its sandwiches.",
      "pic_name": "Primanti_Bros",
      "closed": 0,
      "hours": {
        "Sunday": "11:00 am - 11:00 pm",
        "Monday": "11:00 am - 11:00 pm",
        "Tuesday": "11:00 am - 11:00 pm",
        "Wednesday": "11:00 am - 11:00 pm",
        "Thursday": "11:00 am - 11:00 pm",
        "Friday": "11:00 am - 12:00 am",
        "Saturday": "11:00 am - 12:00 am"
      },
      "phone": "8148629367",
      "address": "130 Heister St",
      "coverCharge": 0,
      "line": 0,
    },
    {
      "id": 5,
      "name": "Cafe 210",
      "description": "",
      "pic_name": "Cafe_210",
      "closed": 0,
      "hours": {
        "Sunday": "7:00 pm - 2:00 am",
        "Monday": "7:00 pm - 2:00 am",
        "Tuesday": "7:00 pm - 2:00 am",
        "Wednesday": "7:00 pm - 2:00 am",
        "Thursday": "5:00 pm - 2:00 am",
        "Friday": "5:00 pm - 2:00 am",
        "Saturday": "5:00 pm - 2:00 am"
      },
      "address": "111 East Beaver Street",
      "coverCharge": 0,
      "line": 0,
    },
    {
      "id": 6,
      "name": "Doggies",
      "description": "",
      "pic_name": "Doggies",
      "closed": 0,
      "hours": {
        "Sunday": "7:00 pm - 2:00 am",
        "Monday": "7:00 pm - 2:00 am",
        "Tuesday": "7:00 pm - 2:00 am",
        "Wednesday": "7:00 pm - 2:00 am",
        "Thursday": "5:00 pm - 2:00 am",
        "Friday": "5:00 pm - 2:00 am",
        "Saturday": "5:00 pm - 2:00 am"
      },
      "address": "111 East Beaver Street",
      "coverCharge": 0,
      "line": 0,
    },
    {
      "id": 7,
      "name": "Mad Mex",
      "description": "",
      "pic_name": "Mad_Mex",
      "closed": 0,
      "hours": {
        "Sunday": "7:00 pm - 2:00 am",
        "Monday": "7:00 pm - 2:00 am",
        "Tuesday": "7:00 pm - 2:00 am",
        "Wednesday": "7:00 pm - 2:00 am",
        "Thursday": "5:00 pm - 2:00 am",
        "Friday": "5:00 pm - 2:00 am",
        "Saturday": "5:00 pm - 2:00 am"
      },
      "address": "111 East Beaver Street",
      "coverCharge": 0,
      "line": 0,
    },
    {
      "id": 8,
      "name": "Pickles",
      "description": "",
      "pic_name": "Pickles",
      "closed": 0,
      "hours": {
        "Sunday": "7:00 pm - 2:00 am",
        "Monday": "7:00 pm - 2:00 am",
        "Tuesday": "7:00 pm - 2:00 am",
        "Wednesday": "7:00 pm - 2:00 am",
        "Thursday": "5:00 pm - 2:00 am",
        "Friday": "5:00 pm - 2:00 am",
        "Saturday": "5:00 pm - 2:00 am"
      },
      "address": "111 East Beaver Street",
      "coverCharge": 0,
      "line": 0,
    },
    {
      "id": 9,
      "name": "Shandygaff",
      "description": "",
      "pic_name": "Shandygaff",
      "closed": 0,
      "hours": {
        "Sunday": "7:00 pm - 2:00 am",
        "Monday": "7:00 pm - 2:00 am",
        "Tuesday": "7:00 pm - 2:00 am",
        "Wednesday": "7:00 pm - 2:00 am",
        "Thursday": "5:00 pm - 2:00 am",
        "Friday": "5:00 pm - 2:00 am",
        "Saturday": "5:00 pm - 2:00 am"
      },
      "address": "111 East Beaver Street",
      "coverCharge": 0,
      "line": 0,
    },
    {
      "id": 10,
      "name": "Chrome",
      "description": "",
      "pic_name": "Chrome",
      "closed": 1,
      "hours": {
        "Sunday": "Closed",
        "Monday": "Closed",
        "Tuesday": "Closed",
        "Wednesday": "Closed",
        "Thursday": "9:00 pm - 2:00 am",
        "Friday": "9:00 pm - 2:00 am",
        "Saturday": "9:00 pm - 2:00 am"
      },
      "phone": "8142310808",
      "address": "222 W Beaver Street",
      "coverCharge": 0,
      "line": 0,
    },
    {
      "id": 11,
      "name": "Basement",
      "description": "",
      "pic_name": "Basement",
      "closed": 1,
      "hours": {
        "Sunday": "7:00 pm - 2:00 am",
        "Monday": "7:00 pm - 2:00 am",
        "Tuesday": "7:00 pm - 2:00 am",
        "Wednesday": "7:00 pm - 2:00 am",
        "Thursday": "5:00 pm - 2:00 am",
        "Friday": "5:00 pm - 2:00 am",
        "Saturday": "5:00 pm - 2:00 am"
      },
      "address": "111 East Beaver Street",
      "coverCharge": 0,
      "line": 0,
    }
  ]
  
  
function newLineAvg(newEntry, id) {
  var barObj = barDynamicData[id];
  barObj.lineEntries += 1;
  barObj.lineTotal += newEntry;
  barObj.lineAvg = barObj.lineTotal/ barObj.lineEntries;
  return barObj.lineAvg;
}

function newCoverAvg(newEntry,id) {
  var barObj = barDynamicData[id];
  barObj.coverEntries += 1;
  barObj.coverTotal += newEntry;
  barObj.coverAvg = barObj.coverTotal/ barObj.coverEntries;
  return barObj.coverAvg;
}

app.get("/", function(req, res){
	res.render("home");
});

app.get("/linedata", function(req, res){
    res.send(barData)
})

app.get("/linedata/:id", function(req, res){
    var returnData = barData.find(element => element.id == req.params.id)
    console.log(returnData);
    res.send(returnData)
});

app.get("/dynamic", function(req,res){
  res.send(barDynamicData);
})

app.post("/linedata/:id", function(req,res){
    console.log(req.body.data.line)
    var index = req.params.id
    var newCover = parseInt(req.body.data.coverCharge)
    var newLine = parseInt(req.body.data.line);


    if(req.body.data.coverCharge != 0){
      barData[index].coverCharge = Math.round(newCoverAvg(newCover, index))
    }
    if(req.body.data.line != -1){
      barData[index].line = Math.round(newLineAvg(newLine, index))
    }
    console.log(barData[0]);
    res.send({})
})

app.post("/reset", function(req,res){
  if(req.body.resetKey == process.env.resetKey){
    var i;
    for(i = 0; i < barDynamicData.length; i++ ){
      barDynamicData[i].coverTotal = 0;
      barDynamicData[i].coverEntries = 0;
      barDynamicData[i].coverAvg = 0;
      barDynamicData[i].lineTotal = 0;
      barDynamicData[i].lineEntries = 0;
      barDynamicData[i].lineAvg = 0;
      barData[i].coverCharge = 0;
      barData[i].line = 0;
    }
    res.send("Reset successful");
  }
  else{
    res.send("Wrong password");
  }
})

const host = '0.0.0.0';
const port = process.env.PORT || 3000; 

app.listen(port, host, function() {
  console.log("Server started.......");
});