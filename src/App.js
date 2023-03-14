import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './component/DetailsPage';
import Home from './component/Home';
import Navbar from './component/Navbar';
import NotFound from './component/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/missions"
          element={<DetailsPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
