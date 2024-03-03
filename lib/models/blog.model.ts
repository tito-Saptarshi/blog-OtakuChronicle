import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: false},
    heading: {type: String, required: true},
    blogbody: {type: String, required: true},
    date: {
		type: Date,
		default: Date.now
	},
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;