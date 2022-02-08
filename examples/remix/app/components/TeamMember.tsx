import type { ReactNode } from 'react';
import { Box, Flex, Img, Text, useColorModeValue } from '@chakra-ui/react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { SocialLink } from '~/components/SocialLink';

interface Props {
  image: string;
  name: string;
  role: string;
  twitter?: string;
  linkedIn?: string;
  children: ReactNode;
}

export const TeamMember = (props: Props) => {
  const { image, role, name, twitter, linkedIn, children } = props;
  return (
    <Flex
      direction="column"
      bg={useColorModeValue('white', 'gray.700')}
      shadow={useColorModeValue('base', 'none')}
    >
      <Box p="6" flex="1">
        <Img
          float="right"
          alt={name}
          w="16"
          h="16"
          rounded="lg"
          objectFit="cover"
          src={image}
          zIndex="1"
        />
        <Box mt="2">
          <Text fontWeight="bold">{name}</Text>
          <Text
            color={useColorModeValue('gray.500', 'whiteAlpha.700')}
            fontWeight="medium"
            fontSize="sm"
          >
            {role}
          </Text>
        </Box>
        <Text
          color={useColorModeValue('gray.600', 'whiteAlpha.800')}
          maxW={{ base: 'unset', md: '20rem' }}
          mt="6"
        >
          {children}
        </Text>
      </Box>
      <Flex align="center" borderTopWidth="1px">
        <SocialLink icon={FaTwitter} href={twitter} borderEndWidth="1px">
          Twitter
        </SocialLink>
        <SocialLink icon={FaLinkedinIn} href={linkedIn}>
          LinkedIn
        </SocialLink>
      </Flex>
    </Flex>
  );
};
