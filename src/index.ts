import express, { Request, Response } from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 8001;
const secret = process.env.SECRET || "no_secret";

app.use(express.json());

app.get('/zhaodev_secret', (req: Request, res: Response) => {
    console.log('Received request to get secret code');
    res.status(200).send({ secret: secret });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
