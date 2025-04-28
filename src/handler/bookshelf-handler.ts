import { searchBooksGoogle } from "@services/google-service";
import dotenv from 'dotenv';

dotenv.config();

export const searchBooks = async (event: any): Promise<GoogleAPIResponse> => {
    try {
        const query = event.queryStringParameters?.q as string;
        const books = await searchBooksGoogle(query);
    
        return {
          statusCode: 200,
          body: JSON.stringify({
            books,
          }),
        };
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
    
        return {
          statusCode: 500,
          body: JSON.stringify({
            message: 'Erro ao buscar livros',
            error: error,
          }),
        };
      }
};
