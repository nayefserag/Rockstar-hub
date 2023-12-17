import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenere";
import { Genre } from "../Entites/Genre";
import getCroppedImageUrl from "../services/img-url";
import useGameQueryStore from "../store";
export const GenereList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading as="h3" fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre: Genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={"4px"}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                key={genre.id}
                onClick={() => setSelectedGenreId(genre.id)}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
