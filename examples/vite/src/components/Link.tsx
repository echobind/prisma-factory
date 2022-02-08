import type { HTMLChakraProps } from '@chakra-ui/react'
import { chakra, useColorModeValue } from '@chakra-ui/react'

export const Link = (props: HTMLChakraProps<'a'>) => (
  <chakra.a
    marginStart="1"
    href="#"
    color={useColorModeValue('blue.500', 'blue.200')}
    _hover={{ color: useColorModeValue('blue.600', 'blue.300') }}
    display={{ base: 'block', sm: 'inline' }}
    {...props}
  />
)
