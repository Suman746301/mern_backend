const mongoose = require("mongoose");
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI =
  "mongodb+srv://gofood:mern123@cluster0.jymvxk6.mongodb.net/gofoodmern?retryWrites=true&w=majority";
// Customer change url to your db you created in atlas
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
const mongoDB = async () => {
  // try {
  //   await mongoose.connect(mongoURI);
  //   console.log("Connected!");
  //   // let fetched_data = mongoose.connection.db.collection("food_items");
  //   // let data = await fetched_data.find({}).toArray();
  //   // console.log(data);
  // } catch (error) {
  //   console.log("err: " + error);
  // }
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
    if (err) console.log("-----", err);
    else {
      console.log("connected to mongo");
      const fetched_data = mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(async function (err, data) {
        const categoryCollection = await mongoose.connection.db.collection(
          "foodCategory"
        );
        categoryCollection.find({}).toArray(async function (err, Catdata) {
          // callback(err, data, Catdata);
          if (err) console.log("-----", err);
          else {
            global.food_items = data;
            global.foodCategory = Catdata;
          }
        });

        // var database = console.log("connected to mongo");
        //   const foodCollection = await mongoose.connection.db.collection(
        //     "food_items"
        //   );
        //   foodCollection.find({}).toArray(async function (err, data) {
        //     const categoryCollection = await mongoose.connection.db.collection(
        //       "Categories"
        //     );
        //     categoryCollection.find({}).toArray(async function (err, Catdata) {
        //       callback(err, data, Catdata);
        //     });
        //   });
        // listCollections({name: 'food_items'}).toArray(function (err, database) {
        // });
        //     module.exports.Collection = database;
        // });
        // }
      });
    }
  });
};
// module.exports = function (callback) {
//   mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
// mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
// const mongoDB = async () => {
//   await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
//     if (err) console.log("---", err);
//     else {
//       // var database =
//       console.log("connected to mongo");
//       //   const foodCollection = await mongoose.connection.db.collection(
//       //     "food_items"
//       //   );
//       //   foodCollection.find({}).toArray(async function (err, data) {
//       //     const categoryCollection = await mongoose.connection.db.collection(
//       //       "Categories"
//       //     );
//       //     categoryCollection.find({}).toArray(async function (err, Catdata) {
//       //       callback(err, data, Catdata);
//       //     });
//       //   });
//       // listCollections({name: 'food_items'}).toArray(function (err, database) {
//       // });
//       //     module.exports.Collection = database;
//       // });
//     }
//   });
// };
module.exports = mongoDB;

// //################################################################3

// const mongoose = require("mongoose");
// const mongoURI = "mongodb+srv://mankmern:mankmern@mernproject.bicx37m.mongodb.net/gofood?retryWrites=true&w=majority";
// //const mongoURI = process.env.MONOGDB_URI;
// //const mongoURI = "mongodb://mankmern:mankmern@ac-cbaxhm8-shard-00-00.bicx37m.mongodb.net:27017,ac-cbaxhm8-shard-00-01.bicx37m.mongodb.net:27017,ac-cbaxhm8-shard-00-02.bicx37m.mongodb.net:27017/?ssl=true&replicaSet=atlas-2vvume-shard-0&authSource=admin&retryWrites=true&w=majority"

// // module.exports = function (callback) {
// //   mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
// //       // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
// //       if (err) console.log("---" + err)
// //       else {
// //           // var database =
// //           console.log("connected to mongo")
// //           const foodCollection = await mongoose.connection.db.collection("food_items");
// //           foodCollection.find({}).toArray(async function (err, data) {
// //               const categoryCollection = await mongoose.connection.db.collection("Categories");
// //               categoryCollection.find({}).toArray(async function (err, Catdata) {
// //                   callback(err, data, Catdata);
// //               })
// //           });
// //           // listCollections({name: 'food_items'}).toArray(function (err, database) {
// //           // });
// //           //     module.exports.Collection = database;
// //           // });
// //       }
// //   })
// // };

// const mongodb = async () => {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true });
//     console.log("connected");
//     const fetched_data = await mongoose.connection.db.collection("food_items");
//     fetched_data.find({}).toArray(async (err, data) => {
//       const foodCategory = await mongoose.connection.db.collection("foodCategory");
//       foodCategory.find({}).toArray(async function(err, catData){
//           if (err) {
//               console.log(err)
//           }
//           else {
//               global.food_items = data;
//               global.foodCategory = catData;
//           };
//       })

//     //   if (err) {
//     //     console.log(err);
//     //   } else {
//     //     global.food_items = data;
//     //   }

//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports = mongodb;
