const mongoConnector = require('./mongo');

class DeviceModel {
    constructor(obj){

    }

    findAll(){
        return new Promise((resolve, reject) => {
            mongoConnector
                .getConnection()
                .then( db => {
                    const collection = db.collection('devices');
                    collection
                        .find({})
                        .toArray( (err, docs) => {
                            if(err){
                                reject(err);
                            }else{
                                resolve(docs);
                            }
                        });
                })
                .catch( error => {
                    reject(error);
                })
        });
    }
}

module.exports = DeviceModel;