import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms,{ Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}
export const PlatformSelector = ({ onSelectPlatform  , selectedPlatformId}: Props) => {
    const {data ,error ,isLoading} = usePlatforms();
    const selectedPlatform = usePlatform(selectedPlatformId);
    if (error) return null;
    if (isLoading) return <Spinner />;
  return (
    <>
      <Menu >
        <MenuButton as ={Button} rightIcon={<BsChevronDown /> }>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList> 
        {data?.results.map((platform: Platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
      </Menu>
    </>
  );
};
