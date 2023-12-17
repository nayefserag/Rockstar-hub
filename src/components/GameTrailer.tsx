import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
 gameId: number   
}
export const GameTrailer = ({ gameId }: Props ) => {
    const { data, error, isLoading } = useTrailers(gameId);
    if (isLoading) return <Spinner />;
    if (error) throw error;

    const first = data?.results[0];
    console.log( "first", first)
    return first? (
        <video width="100%" controls autoPlay src={first.data[480]}  />
    ) : null
}
