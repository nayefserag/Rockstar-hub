import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-clients"
import ms from 'ms'
import { Genre } from "../Entites/Genre"
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn : new ApiClient<Genre>('/genres').getAll,
    staleTime: ms('24h') , //24 hours

        
    
})

export default useGenres