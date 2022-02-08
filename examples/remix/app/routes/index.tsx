import type { LoaderFunction } from 'remix';
import { useLoaderData, json } from 'remix';
import {
  Grid,
  Box,
  Heading,
  Stack,
  Text,
  HStack,
  SimpleGrid,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

import { TeamMember } from '~/components/TeamMember';
import { getTeamMembers } from '~/lib/team';

export type IndexLoaderData = Awaited<ReturnType<typeof getTeamMembers>>;

export const loader: LoaderFunction = async () => {
  return json(await getTeamMembers());
};

export default function Index() {
  const members = useLoaderData<IndexLoaderData>();

  return (
    <Grid placeItems="center" minH="100vh" w="full">
      <Stack align="center">
        <Heading as="h1">Team</Heading>
        <Box as="section" bg={mode('gray.50', 'gray.800')}>
          <Box
            maxW={{ base: 'xl', md: '7xl' }}
            mx="auto"
            px={{ base: '6', md: '8' }}
            py={{ base: '12', md: '20' }}
          >
            <Grid
              templateColumns={{ base: '1fr', lg: '24rem 1fr' }}
              gap={{ base: '8', md: '12', lg: '16' }}
            >
              <Box>
                <Heading
                  size="2xl"
                  letterSpacing="tight"
                  mb="5"
                  fontWeight="extrabold"
                  color={mode('blue.600', 'blue.300')}
                >
                  Meet our team
                </Heading>
                <Text fontSize="xl" maxW="2xl" color={mode('blackAlpha.700', 'whiteAlpha.800')}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation
                </Text>
                <HStack
                  mt="8"
                  as="a"
                  display="inline-flex"
                  href="#"
                  className="group"
                  fontSize="lg"
                  fontWeight="bold"
                  color={mode('blue.600', 'blue.300')}
                >
                  <span>Join the team</span>
                  <Box
                    as={FaArrowRight}
                    transition="all 0.2s"
                    _groupHover={{ transform: 'translateX(5px)' }}
                  />
                </HStack>
              </Box>
              <SimpleGrid mt={{ base: '8', md: '0' }} columns={{ base: 1, md: 2 }} spacing="10">
                {members?.map((member, index) => (
                  <TeamMember
                    key={index}
                    image={member.image}
                    role={member.role}
                    name={member.name}
                    twitter="#"
                    linkedIn="#"
                  >
                    {member.description}
                  </TeamMember>
                ))}
              </SimpleGrid>
            </Grid>
          </Box>
        </Box>
      </Stack>
    </Grid>
  );
}
