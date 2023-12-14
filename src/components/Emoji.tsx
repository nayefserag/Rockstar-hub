import { ImageProps , Image } from '@chakra-ui/react'
import bullsEye from '../assets/icons8-bulls-eye-64.png'
import confusedEye from '../assets/icons8-bulls-eye-64.png'
import tumbsUp from '../assets/icons8-thumbs-up-48.png'
interface Props {
rating: number
}
export const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null

    // const emojiMap = {
    //     3: '🙂',
    //     4: '😀',
    //     5: '😍'
    // }
    const emojiMap: {[key: number]: ImageProps} = {
        3: {src: confusedEye, alt: 'meh'},
        4: {src: tumbsUp, alt: 'recommended'},
        5: {src: bullsEye, alt: 'exceptional'}
    }
  return (
    <Image {...emojiMap[rating]} boxSize={'25px'} marginTop={'5px'} />
  )
}
