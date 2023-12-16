import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenereList } from "./components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGenere";
import { Platform } from "./hooks/usePlatforms";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";
import { GameHeading } from "./components/GameHeading";
export interface GameQuery {
  platformId: any;
  genreId?: number;
  platform?: number;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} padding={5}>
          {" "}
          <GenereList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />{" "}
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={30}>
          <GameHeading gamequery={gameQuery} />
          <Flex paddingLeft={30} marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
            </Box>
            <SortSelector
              sortOrders={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gamequery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
