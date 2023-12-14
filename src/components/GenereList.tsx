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
  selectedGenre: Genre | null;
}
export const GenereList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
    <Heading as="h3" fontSize="2xl" marginBottom={3}>
      Genres
    </Heading>
    <List>
      {data.map((genre) => (
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
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
