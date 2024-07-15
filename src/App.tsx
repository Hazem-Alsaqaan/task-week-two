import { Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./pages/Board";
import Completed from "./pages/Completed";
import OnProgress from "./pages/OnProgress";
import Header from "./components/Header";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import ReusableForm from "./components/ReusableForm";
import HomPages from "./pages/HomPages";
import SearchResult from "./pages/SearchResult";
import { useState } from "react";

function App() {
  const [render, setRender] = useState(false);
  const { settingBoxVisible } = useSelector(
    (state: RootState) => state.publicVariablesSlice
  );
  const { moodButton } = useSelector(
    (state: RootState) => state.publicVariablesSlice
  );
  return (
    <div className="root">
      <Header />
      <Routes>
        <Route path="/" element={<HomPages />}>
          <Route
            index
            element={<Board render={render} setRender={setRender} />}
          />
          <Route
            path="home"
            element={<Board render={render} setRender={setRender} />}
          />
          <Route path="search" element={<SearchResult />} />
        </Route>
        <Route
          path="/completed"
          element={<Completed render={render} setRender={setRender} />}
        />
        <Route
          path="/on-progress"
          element={<OnProgress render={render} setRender={setRender} />}
        />
      </Routes>
      {settingBoxVisible && (
        <ReusableForm mood={moodButton} setRender={setRender} />
      )}
    </div>
  );
}

export default App;
