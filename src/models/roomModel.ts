import { Schema, model } from "dynamoose";

const roomSchema = new Schema(
  {
    roomId: {
      type: String,
      hashKey: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Room = model("Room", roomSchema);
export default Room;
