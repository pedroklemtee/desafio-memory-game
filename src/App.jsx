import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserPage } from "./components/Pages/UserPage/UserPage";
import { useEffect, useState } from "react";
import { SwitchPages } from "./utils";
import { GlobalStyle } from './GlobalStyle'
import { MemoryGamePage } from "./components/Pages/MemoryGamePage/MemoryGamePage";
import { MemoryGameplay } from "./components/Pages/MemoryGameplayPage/MemoryGameplay";
import { ScorePage } from "./components/Pages/ScorePage/ScorePage";

function App() {
  const [numberCards, setNumberCards] = useState(2)
  const [pagePath, setPagePath] = useState(1);
  const [username, setUsername] = useState('') ;
  const [gameMode, setGameMode] = useState(0);
  const [points, setPoints] = useState([])
  const [gamesCount, setGamesCount] = useState(1)

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/userpage" element={<UserPage 
        updatePagePath={setPagePath}
        gamesCount={gamesCount}
        setUsername={setUsername}
        />} />
        <Route
          path="/memorygame"
          element={<MemoryGamePage 
            setNumberCards={setNumberCards}
            numberCards={numberCards}
            updatePagePath={setPagePath}
            username={username}
            setGameMode={setGameMode}
            gameMode={gameMode}
            />}
        />
        <Route path="/scorepage" element={<ScorePage
        username={username}
        gamesCount={gamesCount}
        points={points}
        setPoints={setPoints}
        setGameMode={setGameMode}
        setNumberCards={setNumberCards}
        />}/>
        <Route path='/memorygameplay' element={<MemoryGameplay
          numberCards={numberCards}
          setGamesCount={setGamesCount}
          gameMode={gameMode}
          points={points}
          setPoints={setPoints}
          gamesCount={gamesCount}
        />
      }
        />
      </Routes>
      <SwitchPages updatePagePath={pagePath} />
    </BrowserRouter>
  );
}

export default App;
