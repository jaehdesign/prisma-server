import { Router } from 'express';
import createDebug from 'debug';
import { UsersController } from '../controllers/users.controller';
const debug = createDebug('movies:router:users');

export const createUsersRouter = (usersController: UsersController) => {
    debug('Ejecutando createFilmsRouter');
    const usersRouter = Router();
    usersRouter.get('/', usersController.getAll.bind(usersController));
    usersRouter.get('/:id', usersController.getById.bind(usersController));
    usersRouter.post('/register', usersController.create.bind(usersController));
    usersRouter.post('/login', usersController.login.bind(usersController));
    usersRouter.patch('/:id', usersController.update.bind(usersController));
    usersRouter.delete('/:id', usersController.delete.bind(usersController));
    return usersRouter;
};
