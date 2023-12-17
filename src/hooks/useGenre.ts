import useGenres from "./useGenere";

const useGenre = (id? : number | undefined) => {
    const {data}=useGenres();
   return data?.results.find((genere: { id: number | undefined; })=>genere.id==id);
}
export default useGenre