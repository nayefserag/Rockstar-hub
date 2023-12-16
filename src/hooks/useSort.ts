import { useQuery } from "@tanstack/react-query"
import  apiClient ,{ FetchRes }  from "../services/api-client"
interface Sort{
    id: number
    name: string
    slug: string
}
const useSort = () =>useQuery({
    // return useData<Sort>('/platforms/lists/parents')
    queryKey: ['sort'],
    queryFn: () => apiClient
                    .get<FetchRes<Sort>>('/platforms/lists/parents')
                    .then(res => res.data)
})
 export default useSort