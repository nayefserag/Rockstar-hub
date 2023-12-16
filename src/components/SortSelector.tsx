import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrders: string;
}
export const SortSelector = ({ onSelectSortOrder , sortOrders }: Props ) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
    { value: "updated", label: "Last update" },
    { value: "platforms", label: "Platforms" },
    { value: "stores", label: "Stores" },
    { value: "genres", label: "Genres" },
    { value: "tags", label: "Tags" },
    { value: "companies", label: "Companies" },
    { value: "-playtime", label: "Playtime" },
    { value: "-relevance", label: "Relevance" },
  ];
  const currentSortOrder = sortOrder.find(
    (order) => order.value === sortOrders
  )
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By : {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrder.map((order) => (
            <MenuItem onClick={() => onSelectSortOrder(order.value) } key={order.value}>{order.label}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};
