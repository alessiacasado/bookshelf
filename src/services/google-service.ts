import axios from 'axios';

export const searchBooksGoogle = async (query: string) => {
    const apiKey = process.env.GOOGLE_API_KEY;

    try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
        );
        return response.data.items;  // Retorna os itens encontrados pela API
      } catch (error) {
        throw new Error(`Erro ao buscar livros: ${error}`);
      }

}