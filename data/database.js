import mongoose from "mongoose";

// mongoDB
export const ConnectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB..");
    })
    .catch((err) => {
      console.log(err);
    });
};
