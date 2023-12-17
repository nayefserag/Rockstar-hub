import { useQuery } from "@tanstack/react-query"
import  ApiClient   from "../services/api-clients"
import { Screenshot } from "../Entites/Screenshot"
const useScreenshots = (gamepk: number) =>
{
    const apiClient = new ApiClient<Screenshot>(`/games/${gamepk}/screenshots`)
    const done = useQuery({
    queryKey: ['screenshots' , gamepk],
    queryFn: () => apiClient.getAll(),
    staleTime: 60 * 60 * 24 * 1000
    })
    return done
}
 export default useScreenshots