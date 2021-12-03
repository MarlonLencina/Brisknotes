import { Router } from 'express';
import routeNotes from './notes';
import routeUsers from './users';

const routes = Router();

routes.use('/notes', routeNotes);
routes.use('/users', routeUsers);

export default routes;
