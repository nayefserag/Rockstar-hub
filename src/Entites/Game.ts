import { Platform } from "../hooks/usePlatforms";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";

export  interface Game {
    length: number;
    next: string;
    id: number;
    name: string;
    slug: string;
    description_raw: string;
    metacritic_url: string;
    publishers: Publisher[];
    rating: number;
    metacritic: number;
    genres: Genre[];
    released: string;
    background_image: string;
    parent_platforms: {
        platform: Platform;
    }[];
    rating_top: number;
    

}
