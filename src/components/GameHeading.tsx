import { HStack, Heading } from '@chakra-ui/react'
import { GameQuery } from '../App';
import { VisitorsCounter } from './VisitorsCounter';
interface Props {
    gamequery: GameQuery
}

export const GameHeading = ({ gamequery  }: Props) => {
    const heading = `${gamequery.platform?.name || ''} ${gamequery.genre?.name || ''} Games`
  return (
  <>
  <HStack marginBottom={5} justifyContent={"space-between"}>
    <Heading  as='h1' fontSize='5xl' marginBottom={5} >
      {heading}
    </Heading>
    <VisitorsCounter  />
  </HStack>
    </>

  )
}
