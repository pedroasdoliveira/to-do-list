import express from 'express';
import path from 'path';
import {routes} from './src/routes/routes.js';
import {connectToDb} from './src/database/db.js';
import { urlencoded } from 'express';

// config ----------------------------------------------------
connectToDb();
const app = express();

app.set('view engine', 'ejs');

const __dirname = path.resolve(path.dirname(''));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());

app.use(routes);

// porta ---------------------------------------------------
const port = 3000;
app.listen(port, () => {
    console.log(`Servido local na porta ${port}.`)
})