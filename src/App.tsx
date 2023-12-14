import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenereList } from "./components/GenereList";
import { useState } from "react";
import { Genre } from "./hooks/useGenere";
function App() {
const[selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
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
      <GameGrid selctedGenre={selectedGenre} />
      
      </GridItem>

    </Grid>
  );
}

export default App;
