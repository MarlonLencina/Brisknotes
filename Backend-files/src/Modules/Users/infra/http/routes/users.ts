import { Router } from 'express';
import { createUser, loginUser } from '../controllers/usersController';

const routeUsers = Router();

routeUsers.post('/create', createUser);
routeUsers.post('/login', loginUser);

export default routeUsers;
