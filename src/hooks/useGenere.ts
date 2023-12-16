import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-clients"
import ms from 'ms'
export interface Genre {
    id: number
    name: string
    image_background: string
    
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn : new ApiClient<Genre>('/genres').getAll,
    staleTime: ms('24h') , //24 hours

        
    
})

export default useGenres