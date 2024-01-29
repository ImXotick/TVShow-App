import { mongoose } from "mongoose";

const url =
  "mongodb+srv://TestUser1:norakoda13@tvshow-app.x5mzbbk.mongodb.net/?retryWrites=true&w=majority";

//Tries to connect to DB
async function connect() {
  try {
    //const client = await mongoose.connect(uri);
    await mongoose.connect(url);
    //const db = client.db(dbName);
    console.log("Connected to mongoDB! " + client);
  } catch (error) {
    console.log(error);
  }
}
