import { Router } from 'express';
import { FilmsController } from '../controllers/films.controllers.js';
import createDebug from 'debug';
import { AuthInterceptor } from '../middleware/auth.interceptor.js';
import { Role } from '@prisma/client';

const debug = createDebug('movies:router:films');

export const createFilmsRouter = (
    authInterceptor: AuthInterceptor,
    filmsController: FilmsController,
) => {
    debug('Ejecutando createFilmsRouter');

    const filmsRouter = Router();
    filmsRouter.get(
        '/',
        authInterceptor.authenticate,
        authInterceptor.hasRole(Role.EDITOR),
        filmsController.getAll,
    );
    filmsRouter.get(
        '/:id',
        authInterceptor.authenticate,
        filmsController.getById,
    );
    filmsRouter.post('/', authInterceptor.authenticate, filmsController.create);
    filmsRouter.patch(
        '/:id',
        authInterceptor.authenticate,
        filmsController.update,
    );
    filmsRouter.delete(
        '/:id',
        authInterceptor.authenticate,
        filmsController.delete,
    );
    return filmsRouter;
};
