import {  useQuery } from "@tanstack/react-query"
import { GameQuery } from "../App"
import apiClient, { FetchRes } from "../services/api-client"
import { Platform } from "./usePlatforms"

export interface Game {
    id: number
    name: string,
    background_image: string,
    parent_platforms:  {
        platform: Platform
    } []
    metacritic: number
    rating_top: number
    
}

const useGames = (gamequery: GameQuery ) => 
    useQuery<FetchRes<Game> , Error>({
            queryKey: ['games' , gamequery] , 
            queryFn: () => apiClient
                            .get<FetchRes<Game>>('/games' , {params: {genres: gamequery.genre?.id , parent_platforms: gamequery.platform?.id , ordering: gamequery.sortOrder, search: gamequery.searchText} })
                            .then(res => res.data)
        
    })
    // useData<Game>('/games' , {params: {genres: gamequery.genre?.id , platforms: gamequery.platform?.id , ordering: gamequery.sortOrder, search: gamequery.searchText} }, [gamequery])
    

export default useGames