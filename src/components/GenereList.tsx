import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenere";
import getCroppedImageUrl from "../services/img-url";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number ;
}
export const GenereList = ({
  onSelectGenre,
  selectedGenreId,
}: Props) => {
  const { data, isLoading, error } = useGenres();
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
                onClick={() => onSelectGenre(genre)}
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
