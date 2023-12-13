import useGames from "../hooks/useGames"
export const GameGrid = () => {
    const {games, error} = useGames()
  return (
    <ul>
        {error && <li>{error}</li>}
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  )
}
