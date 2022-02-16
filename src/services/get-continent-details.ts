import { worldTripClient } from '../api/worldTripClient';
import { formatFirstLetterToUpperCase } from '../utils/formatters';

export const getContinentDetails = async (continentName: string) => {
  const formattedContinentName = formatFirstLetterToUpperCase(continentName);

  const { data } = await worldTripClient.get(
    `/continents_details?continent_name=${formattedContinentName}`,
  );

  return data;
};
