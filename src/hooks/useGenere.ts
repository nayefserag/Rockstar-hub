import useData from "./useData"
export interface Platform {
    id: number
    name: string
    slug: string
}
export interface Genre {
    id: number
    name: string
    
}

const useGenres = () => {
   return useData<Genre>('/genres')
}

export default useGenres