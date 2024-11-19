import express, { Request, Response, Application } from 'express';
import cors from 'cors';
const app: Application = express();

app.get('/', (req: Request, res: Response) => {

  const a = 10;
  res.send(a);
});

export default app;
