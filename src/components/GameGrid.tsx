import  { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
interface Game {
    id: number
    name: string
}
interface FetchGameRes {
    count: number
    results : Game[]
}

export const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error , setError] = useState('')
    useEffect(() => {
        apiClient.get<FetchGameRes>('/games')
        .then(res => {
            setGames(res.data.results)
        })
        .catch(err => {
            setError(err.message)
        })
    })
  return (
    <ul>
        {error && <li>{error}</li>}
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  )
}
