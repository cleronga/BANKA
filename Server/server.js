import express from 'express';
import bodyParser from 'body-parser';
import router from '../Server/routes/routes';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to Banka' });
});

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

export default app;
