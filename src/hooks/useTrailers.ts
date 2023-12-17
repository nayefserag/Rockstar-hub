import { useQuery } from "@tanstack/react-query"
import  ApiClient   from "../services/api-clients"
import { Trailer } from "../Entites/Trailer"
const useTrailers = (gameId: number) =>
{
    const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`)
    const done = useQuery({
    queryKey: ['trailers' , gameId],
    queryFn:  apiClient.getAll,
    staleTime: 60 * 60 * 24 * 1000
    })
    return done
}
 export default useTrailers