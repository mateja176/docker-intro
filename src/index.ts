import * as express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send('Hello World');
});

const port = parseInt(process.env.PORT, 10) || 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
