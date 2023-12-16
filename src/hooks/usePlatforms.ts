import { useQuery } from "@tanstack/react-query"
import  apiClient ,{ FetchRes }  from "../services/api-client"
export interface Platform{
    id: number
    name: string
    slug: string
}
const usePlatforms = () =>useQuery( {
    // return useData<Platform>('/platforms/lists/parents')
    queryKey: ['platforms'],
    queryFn: () => apiClient
                    .get<FetchRes<Platform>>('/platforms/lists/parents')
                    .then(res => res.data)
 })
 export default usePlatforms