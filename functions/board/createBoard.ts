import { ValidatedEventAPIGatewayProxyEvent, formatJSONResponse } from '../../lib/api-gateway';
import { middyfy } from '../../lib/lambda';
import { Board } from '../../models/board';
import { boardService } from '../../services/boardService';
import schema from './schema';

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    const id = Date.now();
    const newBoard: Board = await boardService.addBoard({
        pk: id,
        sk: event.body.user,
        title: event.body.title,
        description: event.body.description,
    });
    return formatJSONResponse({
        message: `Create board ${newBoard.title} id is ${newBoard.pk}`,
    });
};

export const main = middyfy(handler);
