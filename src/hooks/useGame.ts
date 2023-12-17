
import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-clients"
import { Game } from "../Entites/Game"
const apiclient = new ApiClient<Game>('/games')
const useGame = (slug: string) => 
    useQuery({
        queryKey: ['game' , slug] , 
        queryFn: () => apiclient.get(slug)
    })

export default useGame
