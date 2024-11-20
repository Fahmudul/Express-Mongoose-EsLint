import express, { Request, Response } from 'express';
// import cors from 'cors';
import { StudentRoutes } from './app/module/Student/student.route';
const app = express();
app.use(express.json());

// application routes
app.use('/api/v1/students', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('hello from 3000');
});

export default app;
