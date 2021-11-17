import useColorModeValues from '@/hooks/useColorModeValues';
import { Box } from '@chakra-ui/layout';

const Minimap = () => {
  const { bgColor, greyColor } = useColorModeValues();

  return (
    <Box
      as='minimap'
      display='block'
      position='absolute'
      top='5.75rem'
      right='2rem'
      height='calc(100% - 20rem)'
    >
      <Box
        className='screen-image'
        position='sticky'
        padding='1rem'
        top='1rem'
        bottom='1rem'
        border='1px solid'
        borderColor={greyColor}
        bgColor={bgColor}
      >
        <Box
          className='canvas'
          height='250px'
          width='90px'
          background='transparent -moz-element(#main) no-repeat scroll center center / contain'
        ></Box>
      </Box>
    </Box>
  );
};

export default Minimap;
