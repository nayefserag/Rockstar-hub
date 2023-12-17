import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setsearchtext = useGameQueryStore(s=>s.setSearchText);
  return (
    <form style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setsearchtext(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} placeholder="Search games..." variant="filled" />
      </InputGroup>
    </form>
  );
};
