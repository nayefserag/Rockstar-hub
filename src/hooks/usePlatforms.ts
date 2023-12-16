import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-clients"
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
    // return useData<Platform>('/platforms/lists/parents')
    queryKey: ['platforms'],
    queryFn : apiClient.getAll
    ,staleTime: 24 * 60 * 60 * 1000 , //24 hours
})
 export default usePlatforms