import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserPage } from "./components/Pages/UserPage/UserPage";
import { useState } from "react";
import { SwitchPages } from "./utils";
import { GlobalStyle } from './GlobalStyle'
import { MemoryGamePage } from "./components/Pages/MemoryGamePage/MemoryGamePage";
import { MemoryGameplay } from "./components/Pages/MemoryGameplayPage/MemoryGameplay";

function App() {
  const [pagePath, setPagePath] = useState(1);
  const [username, setUsername] = useState('') // recebe o username para o componente filho memory

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/userpage" element={<UserPage 
        updatePagePath={setPagePath}
        setUsername={setUsername}
        />} />
        <Route
          path="/memorygame"
          element={<MemoryGamePage 
            updatePagePath={setPagePath}
            username={username}/>}
        />
        <Route path='/memorygameplay' element={<MemoryGameplay/>}/>
      </Routes>
      <SwitchPages updatePagePath={pagePath} />
    </BrowserRouter>
  );
}

export default App;
