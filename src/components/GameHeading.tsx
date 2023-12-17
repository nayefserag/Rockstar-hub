import { HStack, Heading } from "@chakra-ui/react";
import { VisitorsCounter } from "./VisitorsCounter";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

export const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genere = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genere?.name || ""} Games`;
  return (
    <>
      <HStack marginBottom={5} justifyContent={"space-between"}>
        <Heading as="h1" fontSize="5xl" marginBottom={5}>
          {heading}
        </Heading>
        <VisitorsCounter />
      </HStack>
    </>
  );
};
