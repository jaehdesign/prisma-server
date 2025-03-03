import createDebug from 'debug';
import { PrismaClient } from '@prisma/client';

const debug = createDebug('films:repository:users');

class FilmRepo {
    prisma: PrismaClient;
    constructor() {
        debug('Instanciando');
        this.prisma = new PrismaClient();
    }
}
