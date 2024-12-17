import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({ 
    category:{
        type: 'string',
        required: true,
    }, 
    created:{
        type: Date,
        required: true,
        default: Date.now
    }
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
