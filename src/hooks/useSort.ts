import { useQuery } from "@tanstack/react-query"
import  ApiClient   from "../services/api-clients"
import { Sort } from "../Entites/Sort"
const apiClient = new ApiClient<Sort>('/platforms/lists/parents')
const useSort = () =>useQuery({
    // return useData<Sort>('/platforms/lists/parents')
    queryKey: ['sort'],
    queryFn: () => apiClient.get,
    staleTime: 24 * 60 * 60 * 100 , //24 hours

})
 export default useSort