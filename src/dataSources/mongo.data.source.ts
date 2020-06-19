import {DataSource} from "grand-connectors"
import mongoose from "mongoose";


class MongoDataSource extends DataSource{
    type = "mongo"
    connect() {
        mongoose.connect("mongodb://localhost:27017/todolistapp", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
            console.log("connected")
        }).catch(err => {
            console.log(err);
        })
    }
}


export default MongoDataSource;