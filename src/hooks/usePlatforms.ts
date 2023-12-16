import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-clients"
import ms from "ms"
const apiClient = new ApiClient<Platform>('/platforms/lists/parents')
export interface Platform{
    id: number
    name: string
    slug: string,
    results : {
        results : Platform[]
    }
}
const usePlatforms = () =>useQuery( {
    queryKey: ['platforms'],
    queryFn : apiClient.getAll
    ,staleTime: ms('24h') , //24 hours
})
 export default usePlatforms