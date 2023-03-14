import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './component/DetailsPage';
import Home from './component/Home';
import Navbar from './component/Navbar';
import NotFound from './component/NotFound';
import { fetchCoins } from './features/HomePage/CoinSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/details/:coinId"
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
