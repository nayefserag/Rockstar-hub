import { Badge } from '@chakra-ui/react'


interface Props {
    score: number
}
export const CriticScore = ( { score }: Props) => {
  return (
    <Badge colorScheme={score > 75 ? 'green' : 'yellow'} fontSize={'14px'} paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  )
}
