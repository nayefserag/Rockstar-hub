import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms,{ Platform } from "../hooks/usePlatforms";
interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
export const PlatformSelector = ({ onSelectPlatform  , selectedPlatform}: Props) => {
    const {data ,error ,isLoading} = usePlatforms();
    let result = data?.results || [];
    if (error) return null;
    if (isLoading) return <Spinner />;
  return (
    <>
      <Menu >
        <MenuButton as ={Button} rightIcon={<BsChevronDown /> }>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList> 
        {result.map((platform: Platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
      </Menu>
    </>
  );
};
