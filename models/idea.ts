import { Board } from './board';

export type Idea = {
    pk: number; //id
    sk: Board['pk']; //boardId
    owner: string;
    idea: string;
};
