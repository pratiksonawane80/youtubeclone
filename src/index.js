// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDb from "./db/index.js";
import express from "express";

const app = express();

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log(`Before listen error:: ${error}`);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is runnig at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("DB connection failed::", error);
  });

// import express from "express";

// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log(error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is running on: ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// })();
