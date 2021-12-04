import 'reflect-metadata';
import './container/index';
import * as express from 'express';
import 'express-async-errors';
import routes from '@shared/infra/http/routes/index';
import './infra/typeorm/DBconnection';
import AppError from './Error/AppError';
import * as cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, req: express.Request, res: express.Response, _: express.NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    message: 'Internal server error...',
    error: err.message,
    stack: err.stack,
  });
});

app.listen(4001, () => {
  console.log('server running on port 4001 ❤️');
});
