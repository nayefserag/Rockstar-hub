import { HStack, List, ListItem, Image , Text} from "@chakra-ui/react";
import useGenres from "../hooks/useGenere";
import getCroppedImageUrl from "../services/img-url";

export const GenereList = () => {
  const { data } = useGenres();
  return (
    <List >
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px" >
          <HStack><Image src={getCroppedImageUrl(genre.image_background)} boxSize={"32px"} borderRadius={"4px"} /> 
          <Text fontWeight='lg' >{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
