import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-clients"

export interface Genre {
    id: number
    name: string
    image_background: string
    
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn : new ApiClient<Genre>('/genres').getAll,
    staleTime: 24 * 60 * 60 * 1000 , //24 hours

        
    
})

export default useGenres