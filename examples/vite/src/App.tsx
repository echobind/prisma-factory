import {
  Box,
  Grid,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

import { Card } from 'src/components/Card';
import { DividerWithText } from 'src/components/DividerWithText';
import { Link } from 'src/components//Link';
import { LoginForm } from 'src/components/LoginForm';

function App() {
  return (
    <Grid placeItems="center" minH="100vh" w="full">
      <Box bg={useColorModeValue('gray.50', 'inherit')} py="12" px={{ base: '4', lg: '8' }}>
        <Box maxW="md" mx="auto">
          <Heading textAlign="center" size="xl" fontWeight="extrabold">
            Sign in
          </Heading>
          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
            <Text as="span">Don&apos;t have an account?</Text>
            <Link href="#">Start free trial</Link>
          </Text>
          <Card>
            <LoginForm />
            <DividerWithText mt="6">or continue with</DividerWithText>
            <SimpleGrid mt="6" columns={3} spacing="3">
              <Button color="currentColor" variant="outline">
                <VisuallyHidden>Login with Facebook</VisuallyHidden>
                <FaFacebook />
              </Button>
              <Button color="currentColor" variant="outline">
                <VisuallyHidden>Login with Google</VisuallyHidden>
                <FaGoogle />
              </Button>
              <Button color="currentColor" variant="outline">
                <VisuallyHidden>Login with Github</VisuallyHidden>
                <FaGithub />
              </Button>
            </SimpleGrid>
          </Card>
        </Box>
      </Box>
    </Grid>
  );
}

export default App;
