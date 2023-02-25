import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { Board } from '../models/board';
import { ddbDocClient } from './ddbDocClient';

class BoardService {
    private tableName = 'IdeasTable'; //env variable?

    constructor(private client: DynamoDBDocumentClient) {}

    async addBoard(board: Board): Promise<Board> {
        const putParams = {
            TableName: this.tableName,
            Item: board,
        };
        try {
            await this.client.send(new PutCommand(putParams));
            return board;
        } catch (err) {
            console.log(err);
            throw new Error('Error creating new board');
        }
    }

    async getBoardDetails(boardId: string): Promise<Board> {
        const getParams = {
            TableName: this.tableName,
            Key: {
                pk: boardId,
            },
        };
        try {
            const data = await this.client.send(new GetCommand(getParams));
            return data.Item as Board;
        } catch (err) {
            console.log(err);
            throw new Error('Error retrieving board details');
        }
    }
}

export const boardService = new BoardService(ddbDocClient);
