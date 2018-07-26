const mongoConnector = require('./mongo');
const { ObjectId } = require('mongodb');

class VehicleModel {
    constructor(obj) {

    }

    findAll() {
        return new Promise((resolve, reject) => {
            mongoConnector
                .getConnection()
                .then(db => {
                    const collection = db.collection('vehicles');
                    collection
                        .find({})
                        .toArray((err, docs) => {
                            if(err){
                                reject(err);
                            }else{
                                resolve(docs);
                            }
                        });
                })
                .catch(error => {
                    reject(error);
                })
        });
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            mongoConnector
                .getConnection()
                .then(db => {
                    const collection = db.collection('vehicles');
                    collection
                        .find({_id:ObjectId(id)})
                        .toArray((err, docs) => {
                            if(err){
                                reject(err);
                            }else{
                                resolve(docs);
                            }
                        });
                })
                .catch(error => {
                    reject(error);
                })
        });
    }
}

module.exports = VehicleModel;