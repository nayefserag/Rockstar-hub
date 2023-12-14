import useData from "./useData"
interface Sort{
    id: number
    name: string
    slug: string
}
const useSort = () => {
    return useData<Sort>('/platforms/lists/parents')
 }
 export default useSort