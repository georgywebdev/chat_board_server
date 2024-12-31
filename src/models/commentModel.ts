import { Schema, model } from "dynamoose";

const commentSchema = new Schema({
  commentId: {
    type: String,
    required: true,
  },
  roomId: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  timestamp: {
    type: String,
    required: true,
  },
});

const Comment = model("Comment", commentSchema);
export default Comment;
