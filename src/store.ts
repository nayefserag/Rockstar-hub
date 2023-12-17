import { create } from "zustand";

interface GameQuery {
    platformId?: number;
    genreId?: number;
    platform?: number;
    sortOrder?: string;
    searchText?: string;
  }
interface GameQueryStore{
    gameQuery : GameQuery
    setSearchText: (searchText: string) => void
    setGenreId: (genreId: number) => void
    setPlatformId: (platformId: number) => void
    setSortOrder: (sortOrder: string) => void
}

const useGameQueryStore =create<GameQueryStore>((set) => ({
    gameQuery: {} as GameQuery,
    setSearchText: (searchText) => set(() => ({ gameQuery: {  searchText } })),
    setGenreId: (genreId) => set((sort) => ({ gameQuery: {...sort.gameQuery, genreId } })),
    setPlatformId: (platformId) => set((sort) => ({ gameQuery: { ...sort.gameQuery,  platformId } })),
    setSortOrder: (sortOrder) => set((sort) => ({ gameQuery: {...sort.gameQuery,  sortOrder } })),
}))

export default useGameQueryStore