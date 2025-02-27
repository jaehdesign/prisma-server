// import { HttpError } from './http-error';

// export type AppResponse<T> = {
//     results: T[]; // Mostrará una respuesta de resultado
//     error: HttpError | null; // tendrá o no tendrá error en la respuesta. Si hay error lo mostrará y si no dará un null
// };

export type AppResponse<T> = {
    results: T[] | null;
    error: string;
};
