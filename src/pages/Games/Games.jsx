import styles from './Games.module.css'
import { useState } from 'react'
import GameCard from '../../components/GameCard/GameCard'
import SearchForm from '../../components/SearchForm/SearchForm'
import { searchGame } from '../../services/gameService'

const Games = () => {
  const [games, setGames] = useState([])

  const handleGameSearch = async formData => {
    const gameResults = await searchGame(formData)
    setGames(gameResults.result)
  }
  return (
    <div className={styles.pageContent}>
      <h3>Game Search</h3>
      <SearchForm handleGameSearch={handleGameSearch} />
      {games ? 
        <div className={styles.gameContainer}>
          {games.map(game => 
            <GameCard 
              game={game}
              key={game.id}
            />
          )}
        </div>
        :
        <h3>Please search for a Game!</h3>
      }
    </div>
  );
}
 
export default Games;