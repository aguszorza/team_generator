import * as dotenv from "dotenv";
import express from 'express';
import cors from "cors";
import helmet from "helmet";
import { matchRouter } from "./routes";


dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const port: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World 2!');
});

app.use("/", matchRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
