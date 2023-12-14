import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

export const SortSelector = () => {
    // const {data ,error ,isLoading} = useSort();
  return (
    <>
    <Menu >
      <MenuButton as ={Button} rightIcon={<BsChevronDown /> }>Order By</MenuButton>
      <MenuList> 

      </MenuList>
    </Menu>
  </>
  )
}
