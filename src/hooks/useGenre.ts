import useGenres from "./useGenere";

const useGenre = (id? : number | undefined) => {
    const {data:generes}=useGenres();
   return generes?.results.find((genere: { id: number | undefined; })=>genere.id==id);
}
export default useGenre