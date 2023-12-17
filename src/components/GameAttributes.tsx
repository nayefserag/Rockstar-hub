import { Box, Heading, Text } from '@chakra-ui/react';
import { Game } from '../Entites/Game';
interface Props {
    term : string
    children : React.ReactNode
}
export const GameAttributes = ({term , children}: Props) => {
    

  return (
    <>
    <Box margin={5}>
    <Heading  as="dt" fontSize="2xl"  color='grey.600'>
      {term}
    </Heading>
    <dd style={{padding: 2, margin: 0}}>{children}</dd>


    </Box>
    

    </>
  )
}
