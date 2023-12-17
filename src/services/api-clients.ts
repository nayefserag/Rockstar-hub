import axios, { AxiosRequestConfig } from "axios";
export interface FetchRes <T> {
    next: string | null;
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
        const res = await axiosinstance.get<T>(this.endpoint, config);
        return res.data;
         
    };
    post =  async (data: any) =>{
        const res = await axiosinstance.post<T>(this.endpoint, data);
        return res.data;
        
    };
    get  = async (id: string | number) =>{
        const res = await axiosinstance.get<T>(this.endpoint + '/' + id);
        return res.data;
    }
}
export default ApiClient