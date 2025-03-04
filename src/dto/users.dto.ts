import { Prisma } from '@prisma/client';
import createDebug from 'debug';
const debug = createDebug('film:dto:users');
debug('Loaded module');

import { z } from 'zod';

export const UserCreateDTO = z.object({
    email: z.string().email().nonempty(),
    handleName: z.string().min(3).optional(),
    password: z.string().min(6).nonempty(),
    firstName: z.string().min(3).nonempty(),
    lastName: z.string().min(3).nonempty(),
}) satisfies z.Schema<Pick<Partial><Prisma.UserCreateInput, 'email' | 'password'>>;

export const UserLoginDTO = z.object({
    email: z.string().email().nonempty(),
    password: z.string().min(6).nonempty(),
});

// extract the inferred type
export type UserCreateDTO = z.infer<typeof UserCreateDTO>;
export type UserLoginDTO = z.infer<typeof UserLoginDTO>;
