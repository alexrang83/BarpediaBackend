var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var lineTotal = 0;
var lineEntries = 0;
var lineAvg = 0;

var coverTotal = 0;
var coverEntries = 0;
var coverAvg = 0;
//Update Cover Charges
var barData =[
    {
      "id": 0,
      "name": "Phyrst",
      "description": "Subterranean Irish pub featuring daily live, local music & drink specials plus billiards & games.",
      "pic_name": "Phyrst",
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
      "coverCharge": 5,
      "line": 2,
    },
    {
      "id": 1,
      "name": "Champs Downtown",
      "description": "Sports bar in the heart of State College",
      "pic_name": "Champs",
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
      "coverCharge": 1,
      "line": 1,
    },
    {
      "id": 2,
      "name": "Bar Bleu",
      "description": "Craft beer, cocktails & Kansas City-style BBQ served in a bilevel sports bar with pool & live music.",
      "pic_name": "Bar_Bleu",
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
      "coverCharge": 10,
      "line": 0,
    },
    {
      "id": 3,
      "name": "Lions Den",
      "description": "",
      "pic_name": "Lions_Den",
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
      "coverCharge": 8,
      "line": 1,
    },
    {
      "id": 4,
      "name": "Primanti Brothers",
      "description": "Pittsburgh-born counter-serve chain known for its sandwiches.",
      "pic_name": "Primanti_Bros",
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
      "coverCharge": 15,
      "line": 2,
    },
    {
      "id": 5,
      "name": "Chrome",
      "description": "",
      "pic_name": "Chrome",
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
      "id": 6,
      "name": "Basement",
      "description": "",
      "pic_name": "Basement",
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
      "name": "Cafe 210",
      "description": "",
      "pic_name": "Cafe_210",
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
      "name": "Doggies",
      "description": "",
      "pic_name": "Doggies",
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
      "name": "Mad Mex",
      "description": "",
      "pic_name": "Mad_Mex",
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
      "name": "Pickles",
      "description": "",
      "pic_name": "Pickles",
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
      "id": 11,
      "name": "Shandygaff",
      "description": "",
      "pic_name": "Shandygaff",
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
  
function newLineAvg(newEntry) {
    lineEntries = lineEntries + 1;
    lineTotal = newEntry + lineTotal;
    lineAvg = (lineTotal/lineEntries);
    return lineAvg;
}

function newCoverAvg(newEntry) {
  coverEntries = coverEntries + 1;
  coverTotal = newEntry + coverTotal;
  coverAvg = (coverTotal/coverEntries);
  console.log(coverAvg)
  return coverAvg;
}

app.get("/", function(req, res){
	res.render("home");
});

app.get("/linedata", function(req, res){
    res.send(barData)
})

app.get("/linedata/:barname", function(req, res){
    var returnData = barData.find(element => element.id == req.params.barname)
    console.log(returnData);
    res.send(returnData)
});

app.post("/linedata/:barname", function(req,res){
    var index = req.params.barname
    console.log(req.body)
    //console.log(req.params.barname)
    if(req.body.data.coverCharge != 0){
      barData[index].coverCharge = Math.round(newLineAvg(parseInt(req.body.data.coverCharge)))
    }
    if(req.body.data.line != -1){
      barData[index].line = Math.round(newCoverAvg(parseInt(req.body.data.line)))
    }
    console.log(barData[0]);
    res.send({})
})

const host = '0.0.0.0';
const port = process.env.PORT || 3000; 

app.listen(port, host, function() {
  console.log("Server started.......");
});