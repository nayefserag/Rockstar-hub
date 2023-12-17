import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setsearchtext = useGameQueryStore(s=>s.setSearchText);
  const navigate = useNavigate();
  return (
    <form style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {setsearchtext(ref.current.value)
        navigate('/')};
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} placeholder="Search games..." variant="filled" />
      </InputGroup>
    </form>
  );
};
