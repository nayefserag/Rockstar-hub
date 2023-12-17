import useScreenshots from '../hooks/useScreenshots'
import { Image, SimpleGrid, Spinner } from '@chakra-ui/react'
interface Props {
    gamepk: number
}
export const GameScreenshots = ({ gamepk }: Props) => {
    const { data , error, isLoading } =useScreenshots(gamepk)
    if (isLoading) return <Spinner />
    if (error) throw error
  return (
    <>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} padding={5} >
      {data?.results?.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          alt={screenshot.image}
        />
      ))}




    </SimpleGrid>
    </>
  )
}
