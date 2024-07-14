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

function App() {
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
        <Route path="/" element={<Board />} />
        <Route path="/" element={<HomPages />}>
          <Route index element={<Board />} />
          <Route path="home" element={<Board />} />
          <Route path="search" element={<SearchResult />} />
        </Route>
        <Route path="/completed" element={<Completed />} />
        <Route path="/on-progress" element={<OnProgress />} />
      </Routes>
      {settingBoxVisible && <ReusableForm mood={moodButton} />}
    </div>
  );
}

export default App;
