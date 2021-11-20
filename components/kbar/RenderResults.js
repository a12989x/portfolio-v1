import { Text } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';
import { KBarResults, useDeepMatches } from 'kbar';

import ResultItem from './ResultItem';

const RenderResults = () => {
  const { results, rootActionId } = useDeepMatches();
  const { colorMode } = useColorMode();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <Text
            as='span'
            display='block'
            w='100%'
            py={2}
            px={4}
            fontSize='xs'
            textTransform='uppercase'
            color='neutral.400'
            bgColor={colorMode === 'light' ? 'default.light' : 'default.dark'}
          >
            {item}
          </Text>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId}
          />
        )
      }
    />
  );
};

export default RenderResults;
