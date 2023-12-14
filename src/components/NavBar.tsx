import {  HStack , Image  } from '@chakra-ui/react'
import logo from '../assets/rockstar_hub.png'
import { SearchInput } from './SearchInput'
import { ColorModeSwitch } from './ColorModeSwitch'
interface Props {
  onSearch: (searchText: string) => void;
}
export const NavBar = ({ onSearch }: Props ) => {
  return (
    <>
    <HStack padding={5}>
        <Image src={logo} boxSize={"60px"} />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
        
  </>
  )
}
