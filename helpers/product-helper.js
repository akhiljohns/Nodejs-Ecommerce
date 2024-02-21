var db = require('../config/connection')
var collection = require('../config/collection')
const bcrypt = require('bcrypt')
const { ObjectId } = require('mongodb')

module.exports = {

    addProducts: (product) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then(async(result) => {
                let product = await db.get().collection(collection.PRODUCT_COLLECTION).findOne({ _id: ObjectId(result.insertedId) })
                console.log(product)
                resolve(product);
            })
        })
    },
    
    showProducts: async() => {
        let products = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray();
        console.log(product)
        return products;

    },

    getProductById: async(id) => {
        let product = await db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id: ObjectId(id)})
        console.log(product)
        return product;
    },

    updateProduct: async(id, product) => {
        await db.get().collection(collection.PRODUCT_COLLECTION).updateOne({_id: ObjectId(id)},{$set:{name: product.name, description: product.description, image: product.image}});
        return;
        
    },
    deleteProductById: async(id) => {
        await db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({_id: ObjectId(id)});
        return;
    }

}