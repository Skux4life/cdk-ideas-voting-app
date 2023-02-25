import { Idea } from './idea';

export type Vote = {
    pk: number; //ideaId
    sk: string; //userId
    userId: string;
    ideaId: Idea['pk'];
};
