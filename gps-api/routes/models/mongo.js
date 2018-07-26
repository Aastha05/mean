const MongoClient = require('mongodb').MongoClient;

// connnect url
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'gps';

class MongoConnector {
    constructor() {
        this.db = null;
    }

    getConnection() {
        return new Promise((resolve,reject) => {
            if(this.db === null){
                this
                    .connect()
                    .then( () => {
                        resolve(this.db);
                    })
                    .catch( (err) => {
                        reject(err);
                    });
            }else{
                resolve(this.db);
            }
        })
    }

    connect() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, (err, client) => {
                if(err){
                    return reject(err);
                }
                const db = client.db(dbName);
                this.db = db;
                resolve();
            });
        })
    }
}

const mongoConnector = new MongoConnector();

module.exports = mongoConnector;