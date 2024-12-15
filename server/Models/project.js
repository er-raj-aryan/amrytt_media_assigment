import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({ 
    product:{
        type: 'string',
        required: true,
    },  
    category:{
        type: 'string',
        required: true,
    },  
    stock:{
        type: 'string',
        required: true,
    },  
    price:{
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

export default mongoose.model('Project', projectSchema);
