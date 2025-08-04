import { Home, CryptoCurrencies, News } from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { Navigate } from "react-router-dom";
import Crypto from "./pages/Crypto";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
          <Route path="/crypto/:id" element={<Crypto />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
