import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenereList } from "./components/GenereList";
import { useState } from "react";
import { Genre, Platform } from "./hooks/useGenere";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
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
      <GridItem area={"nav"} > <NavBar /></GridItem>
      <Show above="lg"><GridItem area={"aside"} padding={5}  > <GenereList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} /> </GridItem></Show>
      <GridItem area={"main"} > 
      <HStack spacing={5} paddingLeft={30}  >
      <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}  />
      <SortSelector sortOrders={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
      </HStack>
      <GameGrid gamequery={gameQuery}  />
      </GridItem>

    </Grid>
  );
}

export default App;
