import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({ 
    // id:{
    //     type: Number,
    //     required: true,
    //     autoIncrement: true,
    //     unique: true
    // },
    product:{
        type: 'string',
        required: [true, "Please enter product name"],
    },  
    category:{
        type: 'string',
        required: true,
    },  
    amount:{
        type: 'number',
        required: true,
    },  
    status:{
        type: 'string',
        required: true,
    }, 
    created:{
        type: Date,
        required: true,
        default: Date.now
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
