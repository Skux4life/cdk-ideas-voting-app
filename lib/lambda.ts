import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const middyfy = (handler: any) => {
    return middy(handler).use(middyJsonBodyParser());
};
