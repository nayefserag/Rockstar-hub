import { useQuery } from "@tanstack/react-query"
import  apiClient ,{ FetchRes }  from "../services/api-client"
export interface Platform {
    id: number
    name: string
    slug: string
}
export interface Genre {
    id: number
    name: string
    image_background: string
    
}

const useGenres = () => useQuery({
//    return useData<Genre>('/genres')
    queryKey: ['genres'],
    queryFn: () => apiClient
                    .get<FetchRes<Genre>>('/genres')
                    .then(res => res.data)
    ,
    staleTime: 24 * 60 * 60 * 1000 , //24 hours

        
    
})

export default useGenres