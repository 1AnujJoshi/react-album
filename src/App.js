import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlbumList } from "./pages/AlbumList";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/react-album" element={<Home />} />
        <Route path="/albums/:id/photos" element={<AlbumList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
