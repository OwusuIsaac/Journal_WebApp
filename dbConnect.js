import mongoose, { connections } from "mongoose";

const ct= {};

const MONGO_URI = "mongodb://localhost:27017/journal";

async function dbConnect(){
    mongoose
    .set("strictQuery", false)
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`Connected to DB}`))
    .catch((error) => console.log(error));
}

export default dbConnect;