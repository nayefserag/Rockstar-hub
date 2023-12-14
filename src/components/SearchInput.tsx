import { Input, InputGroup ,InputLeftElement} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
interface Props {
  gameQuery: string;
}
export const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input placeholder="Search games..." variant="filled" />
    </InputGroup>
  );
};
