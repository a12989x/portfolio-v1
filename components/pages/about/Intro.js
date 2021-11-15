import { Box, Heading, Text } from '@chakra-ui/layout';

const Intro = () => {
  return (
    <Box as='main' maxW='container.sm'>
      <Heading as='h1' size='2xl' mt={12} mb={20}>
        About 👨‍💻
      </Heading>

      <Heading as='h3' size='md' mb={1}>
        Background
      </Heading>
      <Text mb={5}>
        Hey there! I’m Alexis, a self-taught developer exploring what’s possible
        on the web.
      </Text>
      <Text mb={20}>
        I like to spend my time building projects that interest me, as well as
        pushing myself to learn more through open source projects and share my
        knowledge with other developers.
      </Text>

      <Heading as='h3' size='md' mb={1}>
        What I’ve been up to
      </Heading>
      <Text mb={20}>
        I{"'"}ve been recently focused on building React (specifically Next.js)
        applications, using popular tools such as Chakra UI and to help me bring
        my designs.
      </Text>

      <Heading as='h3' size='md' mb={1}>
        Interests
      </Heading>
      <Text mb={5}>
        I’m currently interested in building tools that help us make things
        faster and more efficient.
      </Text>
      <Text mb={5}>
        I’m also really into <em>Design Systems</em> and{' '}
        <em>Component Driven User Interfaces</em> and I love to explore the
        tools and techniques that help to create more scalable and maintainable
        UI{"'"}s.
      </Text>
      <Text mb={5}>
        When I{"'"}m not coding (or writing or reading about it) you
        {"'"}ll typically find me engaging with another creative or engaging
        activity such as design, gaming, curating playlists, solving rubik{"'"}s
        cube or getting lost in series!
      </Text>
      <Text>
        Although I love to keep myself busy with activities, I make sure to set
        aside to going for walks and runs.
      </Text>
    </Box>
  );
};

export default Intro;
