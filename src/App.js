import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import World from "./components/World";
import Politics from "./components/Politics";
import Business from "./components/Business";
import Sports from "./components/Sports";
import HomeArticlePage from "./components/resusable/HomeArticlePage";
import Home from "./components/Home";
import { CategoryProvider } from "./components/Functionality/CategoryContext";
import Error from "./components/resusable/Error";
import SearchPage from "./components/SearchPage";
import SearchPageArticle from "./components/resusable/SearchPageArticle";
import { ApiProvider } from "./components/Functionality/ApiContext";
import Arts from "./components/Arts";
import Magazine from "./components/Magazine";

function App() {
  return (
    <Router>
      <ApiProvider>
        <CategoryProvider>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/world" element={<World />} />
              <Route path="/politics" element={<Politics />} />
              <Route path="/business" element={<Business />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/arts" element={<Arts />} />
              <Route path="/magazine" element={<Magazine />} />
              <Route
                path="/:path/:latestId/:name"
                element={<HomeArticlePage />}
              />
              <Route path="*" element={<Error message="Page not found ❌" />} />
              <Route path="/AccuDaily/search" element={<SearchPage />} />
              <Route
                path="/article/:articleId/:topic"
                element={<SearchPageArticle />}
              />
            </Routes>
            <Footer />
          </div>
        </CategoryProvider>
      </ApiProvider>
    </Router>
  );
}

export default App;
