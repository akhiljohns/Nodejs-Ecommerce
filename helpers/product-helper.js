var db = require('../config/connection')
var collection = require('../config/collection')
const bcrypt = require('bcrypt')
const { ObjectId } = require('mongodb')

module.exports = {

    addProducts: (product) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then(async(result) => {
                let product = await db.get().collection(collection.PRODUCT_COLLECTION).findOne({ _id: ObjectId(result.insertedId) })
                resolve(product);
            })
        })
    },

    showProducts: async() => {
        let products = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray();
        return products;
    },

    getProductById: async(id) => {
        let product = await db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id: ObjectId(id)})
        return product;
    },

    updateProduct: async(id, product) => {
        console.log(product);
        await db.get().collection(collection.PRODUCT_COLLECTION).updateOne({_id: ObjectId(id)},{$set:{name: product.name, description: product.description, image: product.image}});
        return;
        
    },
    deleteProductById: async(id) => {
        await db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({_id: ObjectId(id)});
        return;
    }

}