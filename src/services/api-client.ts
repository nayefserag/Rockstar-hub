import axios from "axios";
export interface FetchRes <T> {
    count: number
    results : T[]
}
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
       key: "3a80583a2e4e41d2bce6a193759acbe8" 
    }
})
