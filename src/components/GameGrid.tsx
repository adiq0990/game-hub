import useGames from "../hooks/useGames";

function GameGrid() {
  const { games, setGames, error, setError } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
