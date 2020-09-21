// file server.js
import express from 'express';
import rotas from './rotas';

const app = express();

app.use(express.json());
app.use(rotas);
app.listen(3000, () => console.log('Example app listening on port 3000!'));
