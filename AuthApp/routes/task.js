//const { Console } = require("console");
//const { response } = require("express");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../model/user");
const Task = require("../model/task");
const Location = require("../model/location");
const { use } = require("./user");
//const { db } = require("../model/user");
//const { route } = require("./user");
//const fetch = require('node-fetch');
//const task = require("../model/task");

const googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyAJwZsfn11D8zVEscm8te2ZsygB4deaFk0",
});

// function get_nearest_location(driver_location, user_location, fn) {
//   googleMapsClient.distanceMatrix(
//     {
//       origins: driver_location,
//       destinations: user_location,
//       units: "imperial",
//     },
//     function callback(status, response) {
//       result_list = [];
//       result_list = response.json.rows[0].elements;
//       console.log(result_list);
//       distance_dict = {};
//       for (i = 0; i < result_list.length; i++) {
//         //console.log(result_list[i])
//         str_distance = result_list[i].distance.text;
//         num_distance = str_distance.replace(" mi", "");
//         distance_dict[i] = parseFloat(num_distance);
//       }
//       //console.log(distance_dict);
//       //return min distance from dic
//       min_value = Object.keys(distance_dict).reduce(function (a, b) {
//         return distance_dict[a] < distance_dict[b] ? a : b;
//       });
//       //return_list = []
//       //return_list.push(user_location[min_value])
//       //console.log(min_value);
//       //console.log(user_location[min_value]);
//       //fn(return_list);
//       fn(user_location[min_value]);
//     }

//   );
// }
//a = [];
function get_nearest_location(driver_location, user_location, fn, a) {
  //console.log(a);
  if (user_location.length == 0) {
    fn(a);
    //console.log(a);
  } else {
    googleMapsClient.distanceMatrix(
      {
        origins: driver_location,
        destinations: user_location,
        units: "imperial",
      },
      function callback(status, response) {
        result_list = [];
        result_list = response.json.rows[0].elements;
        //console.log(result_list);
        distance_dict = {};
        for (i = 0; i < result_list.length; i++) {
          //console.log(result_list[i])
          str_distance = result_list[i].distance.text;
          str_time = result_list[i].duration.text;
          num_distance = parseFloat(str_distance.replace(" mi", ""));
          num_time = parseFloat(str_time.replace(" mins", ""));
          b = [];
          b.push(num_distance);
          b.push(num_time);
          distance_dict[i] = b;
        }
        //console.log(distance_dict);
        //return min distance from dic
        min_value = Object.keys(distance_dict).reduce(function (a, b) {
          return distance_dict[a][0] < distance_dict[b][0] ? a : b;
        });

        //console.log(user_location);
        d_location = user_location[min_value];
        x = [];
        x.push(d_location);
        x.push(distance_dict[min_value][1]);
        //a[d_location] = distance_dict[min_value][1];
        a.push(x);
        user_location.splice(min_value, 1);
        get_nearest_location(d_location, user_location, fn, a);
      }
    );
  }
}
router.get("/generateTask", async (req, res) => {
  driver = await User.findOne({ email: "driver1@pickbins.com" });
  const street = driver.street;
  const city = driver.city;
  const zip = driver.zip;
  const country = driver.country;
  const driver_location = street + "," + city + "," + zip + "," + country;
  //console.log(driver_location)

  user_list = await User.find({ isDriver: false });
  user_location = [];
  for (i = 0; i < user_list.length; i++) {
    const street = user_list[i].street;
    const city = user_list[i].city;
    const zip = user_list[i].zip;
    const country = user_list[i].country;
    const location = street + "," + city + "," + zip + "," + country;
    user_location.push(location);
  }
  //console.log(user_list)
  //console.log(user_location)
  get_nearest_location(
    driver_location,
    user_location,
    async function (result) {
      for (i = 0; i < result.length; i++) {
        const task = new Task({
          address: result[i][0],
          time: result[i][1],
        });
        await task.save();
      }
      res.status(200);
    },
    []
  );
});

router.get("/getTask", async (req, res) => {
  task_list = await Task.find();
  //console.log(task_list);
  res.send(task_list);
});

router.get("/getSchedule", auth, async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  const street = user.street;
  const city = user.city;
  const zip = user.zip;
  const country = user.country;
  const location = street + "," + city + "," + zip + "," + country;
  task_list = await Task.find();
  var index = 0;
  for(i = 0; i < task_list.length; i++){
    if(task_list[i].address === location){
      index = i;
      break;
    }
  }
  var time = 0;
  //Find driver location to estimate time
  object1 = await Location.find();
  driver_location = object1[0].current_location;
  driver_index = 0
  for (i= 0; i< task_list.length; i++){
    if (driver_location !== '1608 Blue Danube St,Arlington,76015,USA' && driver_location === task_list[i].address){
      driver_index = i;
      break;
    }
  }
  var i = 0;
  if (driver_index == 0 && driver_location === '1608 Blue Danube St,Arlington,76015,USA'){
    i = driver_index;
  }else{
    i = driver_index + 1;
  }
  for (i; i<=index; i++){
    time += task_list[i].time;
  }
  data = {
    "duration":time,
    "location": location,
    "firstName": user.fName
  }
  console.log(time);
  console.log(location);
  res.send(data)
});

router.post("/updateDriverLocation", auth, async (req, res)=>{
let doc = await Location.findOneAndUpdate({driver:req.user._id},{current_location:req.body.current_location},{new:true});
await doc.save();
res.send(doc)
})
module.exports = router;
