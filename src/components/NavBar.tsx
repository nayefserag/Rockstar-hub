import {  HStack , Image  } from '@chakra-ui/react'
import logo from '../assets/vite.png'
import { SearchInput } from './SearchInput'
import { ColorModeSwitch } from './ColorModeSwitch'

export const NavBar = ( ) => {
  return (
    <>
    <HStack padding={5}>
        <Image src={logo} boxSize={"60px"} />
        <SearchInput  />
        <ColorModeSwitch />
    </HStack>
        
  </>
  )
}
