import { worldTripClient } from '../api/worldTripClient';
import { Continent } from '../types/continent';

export const getContinentsService = async (): Promise<Continent[]> => {
  const { data } = await worldTripClient.get('/continents');

  return data;
};
