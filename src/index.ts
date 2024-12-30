import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import dynamoose from "dynamoose";

dotenv.config();

dynamoose.aws.ddb.local();

const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  `Server running on port ${port}`;
});
