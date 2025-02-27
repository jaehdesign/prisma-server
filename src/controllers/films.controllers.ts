import { Request, Response } from 'express';
import { Film } from '@prisma/client';
import { Repository } from '../repo/repository.type.js';
import { AppResponse } from '../types/app-response';

export class FilmsController {
    constructor(private repoFilms: Repository<Film>) {}
    getAll = async (req: Request, res: Response) => {
        const films = await this.repoFilms.read();
        const data: AppResponse<Film> = {
            results: films,
            error: '',
        };
        res.json({ data });
    };
}
