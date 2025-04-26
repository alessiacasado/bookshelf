import { APIGatewayProxyEvent } from 'aws-lambda';

export const searchBooks = async (event: APIGatewayProxyEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Serverless function executed!",
        input: event,
      },
      null,
      2
    ),
  };
};
