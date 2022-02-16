const formatCapitalizeString = (string: string) => {
  const stringWithoutDashed = string.split('-');
  stringWithoutDashed[2] =
    stringWithoutDashed[2].charAt(0).toUpperCase() +
    stringWithoutDashed[2].slice(1);

  const capitalizedString = stringWithoutDashed.join(' ');

  return capitalizedString;
};

export const formatFirstLetterToUpperCase = (string: string) => {
  const formattedString = string.charAt(0).toUpperCase() + string.slice(1);

  if (formattedString.includes('-')) {
    const newFormattedString = formatCapitalizeString(formattedString);

    return newFormattedString;
  }

  return formattedString;
};
