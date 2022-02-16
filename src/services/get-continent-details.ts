import { worldTripClient } from '../api/worldTripClient';
import { formatFirstLetterToUppercase } from '../utils/formatters';

export const getContinentDetails = async (continentName: string) => {
  const formattedContinentName = formatFirstLetterToUppercase(continentName);

  const { data } = await worldTripClient.get(
    `/continents_details?continent_name=${formattedContinentName}`,
  );

  return data;
};
