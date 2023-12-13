import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
export const GameCardSkelton = () => {
  return (
    <Card>
      <Skeleton  height={'200px'} />
      <CardBody>
        <SkeletonText />
    </CardBody>
    </Card>
  )
}
