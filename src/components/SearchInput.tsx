import { Input, InputElement, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input borderRadius={20} placeholder="Search games..." />
    </InputGroup>
  );
};
