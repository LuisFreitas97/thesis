//import { MongoClient } from 'mongodb';
import mongoClient from 'mongodb';
const { MongoClient } = mongoClient;

export class DbConfig {
    constructor(){
        this.url = 'mongodb://localhost:27017/ThesisDB';
    }

    connectToDB(){
        MongoClient.connect(this.url,{ useUnifiedTopology: true},function(err,db){
            if(!err){
                console.log("Connected");
                db.close();
            }     
        })
    }

};

