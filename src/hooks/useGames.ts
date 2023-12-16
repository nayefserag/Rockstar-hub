import {  useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { GameQuery } from "../App"

import apiClient, { FetchRes } from "../services/api-client"
import { Platform } from "./usePlatforms"
import ApiClient from "../services/api-clients"
const client = new ApiClient<Game>('/games')
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
    useInfiniteQuery<FetchRes<Game> , Error>({
            queryKey: ['games' , gamequery] , 
            queryFn: ({pageParam = 1 }) => client
                            .getAll({
                                params: {
                                    genres: gamequery.genre?.id ,
                                    platforms: gamequery.platform?.id , 
                                    ordering: gamequery.sortOrder, 
                                    page: pageParam,
                                    search: gamequery.searchText}
                                 }),
            getNextPageParam: (lastPage, allPages) => {
                return lastPage.next ? allPages.length + 1 : undefined
            },
            staleTime: 24 * 60 * 60 * 1000 , //24 hours

        
    })
    // useData<Game>('/games' , {params: {genres: gamequery.genre?.id , platforms: gamequery.platform?.id , ordering: gamequery.sortOrder, search: gamequery.searchText} }, [gamequery])
    

export default useGames