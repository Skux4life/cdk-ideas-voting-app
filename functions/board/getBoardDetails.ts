import { APIGatewayProxyEvent } from 'aws-lambda';
import { middyfy } from '../../lib/lambda';

const handler = async (event: APIGatewayProxyEvent) => {
    const boardId = event.pathParameters?.boardId;
    // what will board details look like
};

export const main = middyfy(handler);
