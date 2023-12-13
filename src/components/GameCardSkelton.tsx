import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
export const GameCardSkelton = () => {
  return (
    <Card>
      <Skeleton width='300px' height='200px' borderRadius={10}   />
      <CardBody>
        <SkeletonText />
    </CardBody>
    </Card>
  )
}
