import { Grid, Show, GridItem, Flex, Box } from '@chakra-ui/react'
import { GameGrid } from '../components/GameGrid'
import { GameHeading } from '../components/GameHeading'
import { GenereList } from '../components/GenereList'
import { PlatformSelector } from '../components/PlatformSelector'
import { SortSelector } from '../components/SortSelector'

export const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} padding={5}>
          {" "}
          <GenereList

          />{" "}
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={30}>
          <GameHeading />
          <Flex paddingLeft={30} marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
               
              />
            </Box>
            <SortSelector

            />
          </Flex>
        </Box>
        <GameGrid  />
      </GridItem>
    </Grid>
  )
}
