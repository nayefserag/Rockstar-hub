import { Box } from "@chakra-ui/react";
interface Props {
  children: React.ReactNode;
}

export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.15s ease",
        boxShadow: "2xl",
      }}
      borderRadius={10}
      overflow={"hidden"}
    >
      {" "}
      {children}{" "}
    </Box>
  );
};
