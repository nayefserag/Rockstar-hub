import axios, { AxiosRequestConfig } from "axios";
export interface FetchRes <T> {
    count: number
    results : T[]
}

const axiosinstance =axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
       key: "3a80583a2e4e41d2bce6a193759acbe8" 
    }
})

class ApiClient <T> {
    endpoint: string
    constructor(endpoint: string) {
        this.endpoint = endpoint
    }
    getAll = async (config? :AxiosRequestConfig )=>{
        const res = await axiosinstance.get<T[]>(this.endpoint, config);
        return res.data;
         
    }
    post = (data: T) =>{
        return axiosinstance.post<T>(this.endpoint, data).then((res) => res.data)
        
    }
}
export default ApiClient