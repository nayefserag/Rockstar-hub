import { Box, HStack, Heading , Spinner } from '@chakra-ui/react';
import useCounter from '../hooks/useCounter';

export const VisitorsCounter = () => {
    const data = useCounter()
    let isLoading = data.loading
    if (isLoading) return <Spinner />;
    if (data.error != null) return (
      null
      )
      var { visitorsCount } = data
      visitorsCount = visitorsCount ? visitorsCount -1 : 0
      return (
        
    <Box
    maxW="md"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="lg"
    p={4}
    m={5}
    transition="box-shadow 0.3s ease-in-out"
    _hover={{
      boxShadow: 'xl',
      transition: 'box-shadow 0.3s ease-in-out',
    }}
  >
    <HStack spacing={4} align="center" marginBlock={2}>
      <Heading as="h2" size="lg" fontWeight="bold">
        🌟 Visitors : {visitorsCount  }
      </Heading>


    </HStack>
  </Box>
  );
}