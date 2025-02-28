import { Router } from 'express';
import { FilmsController } from '../controllers/films.controllers';
import createDebug from 'debug';
const debug = createDebug('films:router:films');

export const createFilmsRouter = (filmsController: FilmsController) => {
    debug('Ejecutando createFilmsRouter');
    const filmsRouter = Router();
    filmsRouter.get('/', filmsController.getAll);
    filmsRouter.get('/:id', filmsController.getById);
    filmsRouter.post('/', filmsController.create);
    filmsRouter.patch('/:id', filmsController.update);
    filmsRouter.delete('/:id', filmsController.delete);
    return filmsRouter;
};
