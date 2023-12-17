import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-clients"
import ms from 'ms'
import { Genre } from "../Entites/Genre"
const apiClient = new ApiClient<Genre>('/genres')
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn : apiClient.getAll,
    staleTime: ms('24h') , //24 hours

        
    
})

export default useGenres