import { Router } from 'express';
import routeNotes from '@modules/Notes/infra/http/routes/notes-routes';
import routeUsers from '@modules/users/infra/http/routes/users';

const routes = Router();

routes.use('/notes', routeNotes);
routes.use('/users', routeUsers);

export default routes;
