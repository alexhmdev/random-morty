import { type Characters } from '../models/characters.model';
import { type Result, type Episodes } from '../models/episode.model';

export async function getCharacters(
  page?: number,
  search?: string
): Promise<Characters> {
  try {
    const response = await fetch(
      'https://rickandmortyapi.com/api/character' +
        `?page=${page ?? ''}` +
        `&name=${search ?? ''}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getEpisodes(
  episode?: number
): Promise<Episodes | Result> {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${episode ?? ''}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
