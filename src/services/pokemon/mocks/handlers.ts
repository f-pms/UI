import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon/:id', () => {
    return HttpResponse.json({
      id: 25,
      name: 'pikachu',
      height: 4,
      weight: 60,
    });
  }),
];
