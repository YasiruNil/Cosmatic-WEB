import cors from 'cors';
import { routes } from './routes';
import bodyParser from 'body-parser';
import config from '../config/config';
import express, {Application, Request, Response } from 'express';

const app: Application = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// routes
app.use('/', routes);

app.get('/', (req: Request,res: Response)=>{
    res.send('hello world');
})

app.listen(config.server, () => {
  console.log(`Server is Running on Port ${config.server}`)
});