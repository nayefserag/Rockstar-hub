import {  useInfiniteQuery } from "@tanstack/react-query"
import ApiClient, { FetchRes } from "../services/api-clients"
import useGameQueryStore from "../store"
import { Game } from "../Entites/Game"
const client = new ApiClient<Game>('/games')
const useGames = () => {
    const gamequery = useGameQueryStore((s) => s.gameQuery)
  return  useInfiniteQuery<FetchRes<Game> , Error>({
            queryKey: ['games' , gamequery] , 
            queryFn: ({pageParam = 1 }) => client
                            .getAll({
                                params: {
                                    genres: gamequery.genreId ,
                                    platforms: gamequery.platformId , 
                                    ordering: gamequery.sortOrder, 
                                    page: pageParam,
                                    search: gamequery.searchText}
                                 }),
            getNextPageParam: (lastPage, allPages) => {
                return lastPage.next ? allPages.length + 1 : undefined
            },
            initialPageParam: 1 ,
            staleTime: 24 * 60 * 60 * 100 , //24 hours

        
    })
}
    // useData<Game>('/games' , {params: {genres: gamequery.genre?.id , platforms: gamequery.platform?.id , ordering: gamequery.sortOrder, search: gamequery.searchText} }, [gamequery])
    

export default useGames