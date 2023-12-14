import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenereList } from "./components/GenereList";
import { useState } from "react";
import { Genre, Platform } from "./hooks/useGenere";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
      <Show above="lg"><GridItem area={"aside"} padding={5}  > <GenereList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} /> </GridItem></Show>
      <GridItem area={"main"} > 
      <HStack spacing={5} paddingLeft={30}  >
      <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}  />
      <SortSelector />
      </HStack>
      <GameGrid selectedPlatform={selectedPlatform} selctedGenre={selectedGenre} />
      </GridItem>

    </Grid>
  );
}

export default App;
