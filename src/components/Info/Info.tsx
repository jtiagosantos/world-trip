import { Box, Icon, Text, Tooltip } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

interface InfoProps {
  number: number;
  text: string;
  showInfoTooltip?: boolean;
}

export const Info: React.FC<InfoProps> = ({
  number,
  text,
  showInfoTooltip = false,
}) => {
  return (
    <Box>
      <Text
        as="h1"
        align="center"
        color="#FFBA08"
        fontSize="2.8rem"
        fontWeight="600"
      >
        {number}
      </Text>
      <Text as="h2" color="#47585B" fontSize="1.3rem" fontWeight="600">
        {text}
        {showInfoTooltip && (
          <Tooltip label="+100 cidades visitadas do mundo">
            <Icon as={InfoOutlineIcon} fontSize="0.9rem" ml="2" opacity={0.6} />
          </Tooltip>
        )}
      </Text>
    </Box>
  );
};
