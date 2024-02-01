import { BrowserRouter , Route, Routes } from 'react-router-dom';

import ShowDetailsPage from './pages/ShowDetailsPage';
import Home from './pages/Home';
import Header from './components/Header';
import BookedTicketsPage from './pages/BookedTicketsPage';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:showId" element={<ShowDetailsPage />} />
          <Route path="/booked-tickets" element={<BookedTicketsPage />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
