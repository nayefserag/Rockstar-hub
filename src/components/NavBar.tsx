import {  HStack , Image  } from '@chakra-ui/react'
import logo from '../assets/rockstar_hub.png'
import { ColorModeSwitch } from './ColorModeSwitch'

export const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}  >
        <Image src={logo} boxSize={"60px"} />
        <ColorModeSwitch />

    </HStack>
  )
}
