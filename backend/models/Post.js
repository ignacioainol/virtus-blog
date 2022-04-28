import mongoose from 'mongoose';


const PostSchema = new mongoose.Schema(
    {
        author: { type: String, default: 'Pablo de Marcos' },
        message: { type: String, required: true }
    },
    {
        timestamps: true
    }
)

const Post = mongoose.model('Post', PostSchema);
export default Post;