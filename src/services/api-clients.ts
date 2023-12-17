import axios, { AxiosRequestConfig } from "axios";
const axiosinstance =axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
       key: "3a80583a2e4e41d2bce6a193759acbe8" 
    }
})
export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
  }

class ApiClient <T> {
    endpoint: string
    constructor(endpoint: string) {
        this.endpoint = endpoint
    }
    getAll =  (config? :AxiosRequestConfig )=>{
        return axiosinstance.get<T>(this.endpoint, config).then((res) => res.data);
         
    };
    get  =  (id: string | number) =>{
        return axiosinstance.get<T>(this.endpoint + '/' + id).then((res) => res.data);
    }
}
export default ApiClient