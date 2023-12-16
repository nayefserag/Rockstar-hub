import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGenere";
interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
export const PlatformSelector = ({ onSelectPlatform  , selectedPlatform}: Props) => {
    const {data ,error ,isLoading} = usePlatforms();
    if (error) return null;
    if (isLoading) return <Spinner />;
  return (
    <>
      <Menu >
        <MenuButton as ={Button} rightIcon={<BsChevronDown /> }>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList> 
        {data?.results.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
      </Menu>
    </>
  );
};
