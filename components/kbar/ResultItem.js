import { forwardRef, Fragment, useMemo } from 'react';
import { Box, Flex, Grid, Kbd, Text } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';

// eslint-disable-next-line react/display-name
const ResultItem = forwardRef(
  ({ action, active, currentRootActionId }, ref) => {
    const ancestors = useMemo(() => {
      return (function collect(action, ancestors = []) {
        if (action.parent && action.parent.id !== currentRootActionId) {
          ancestors.push(action.parent);
          if (action.parent.parent) {
            collect(action.parent.parent, ancestors);
          }
        }
        return ancestors;
      })(action);
    }, [action, currentRootActionId]);
    const { colorMode } = useColorMode();

    return (
      <Flex
        ref={ref}
        py={3}
        px={4}
        bgColor={
          active
            ? colorMode === 'light'
              ? '#eaeaea'
              : '#393939'
            : colorMode === 'light'
            ? 'default.light'
            : 'default.dark'
        }
        borderLeft='2px solid'
        borderLeftColor={
          active
            ? 'primary.500'
            : colorMode === 'light'
            ? 'default.light'
            : 'default.dark'
        }
        align='center'
        justify='space-between'
        cursor='pointer'
      >
        <Grid
          gap={2}
          autoFlow='column'
          alignItems='center'
          // color={active ? 'default.light' : 'default.light'}
        >
          {action.icon && action.icon}
          <Flex direction='column'>
            <Box>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <Fragment key={ancestor.id}>
                    <Text as='span' opacity={0.5} mr={2}>
                      {ancestor.name}
                    </Text>
                    <Text
                      as='span'
                      style={{
                        marginRight: 8,
                      }}
                    >
                      &rsaquo;
                    </Text>
                  </Fragment>
                ))}
              <Text as='span' fontSize='sm'>
                {action.name}
              </Text>
            </Box>
            {action.subtitle && (
              <Text as='span' fontSize='xs' opacity={0.8}>
                {action.subtitle}
              </Text>
            )}
          </Flex>
        </Grid>
        {action.shortcut?.length ? (
          <Grid
            autoFlow='column'
            gap={1}
            // aria-hidden
          >
            {action.shortcut.map((sc) => (
              <Kbd key={sc}>{sc}</Kbd>
            ))}
          </Grid>
        ) : null}
      </Flex>
    );
  }
);

export default ResultItem;
