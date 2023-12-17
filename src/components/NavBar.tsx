import {  HStack , Image  } from '@chakra-ui/react'
import logo from '../assets/vite.png'
import { SearchInput } from './SearchInput'
import { ColorModeSwitch } from './ColorModeSwitch'
import { Link } from 'react-router-dom'

export const NavBar = ( ) => {
  return (
    <>
    <HStack padding={5}>
    <Link  to={'/'}><Image src={logo}  alt="logo"   /></Link>
        <SearchInput  />
        <ColorModeSwitch />
    </HStack>
        
  </>
  )
}
