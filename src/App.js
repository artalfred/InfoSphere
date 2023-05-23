import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import Main from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import World from "./components/World";
import axios from "axios";
import Politics from "./components/Politics";
import Business from "./components/Business";
import Sports from "./components/Sports";
import Science from "./components/Science";
import Fashion from "./components/Fashion";

const urlApi = "https://api.nytimes.com/svc/topstories/v2";
const apiKey = "wbvqsqGzDnecddBOkQqrtUTSnM08QqXS";
const homeApi = "home";
const worldApi = "world";
const politicsApi = "politics";
const businessApi = "business";
const sportsApi = "sports";
const scienceApi = "science";
const fashionApi = "fashion";

function App() {
  const [data, setData] = useState([]);
  const [data_2, setData_2] = useState([]);
  const [data_3, setData_3] = useState([]);
  const [data_4, setData_4] = useState([]);
  const [data_5, setData_5] = useState([]);
  const [data_6, setData_6] = useState([]);
  const [data_7, setData_7] = useState([]);

  useEffect(() => {
    home();
    world();
    politics();
    business();
    sports();
    science();
    fashion();
  }, []);

  const home = () => {
    axios
      .get(`${urlApi}/${homeApi}.json?api-key=${apiKey}`)
      .then((res) => setData(res.data.results))
      .catch((err) => console.error(err));
  };

  const world = () => {
    axios
      .get(`${urlApi}/${worldApi}.json?api-key=${apiKey}`)
      .then((res) => setData_2(res.data.results))
      .catch((err) => console.error(err));
  };

  const politics = () => {
    axios
      .get(`${urlApi}/${politicsApi}.json?api-key=${apiKey}`)
      .then((res) => setData_3(res.data.results))
      .catch((err) => console.error(err));
  };

  const business = () => {
    axios
      .get(`${urlApi}/${businessApi}.json?api-key=${apiKey}`)
      .then((res) => setData_4(res.data.results))
      .catch((err) => console.log(err));
  };

  const sports = () => {
    axios
      .get(`${urlApi}/${sportsApi}.json?api-key=${apiKey}`)
      .then((res) => setData_5(res.data.results))
      .catch((err) => console.log(err));
  };

  const science = () => {
    axios
      .get(`${urlApi}/${scienceApi}.json?api-key=${apiKey}`)
      .then((res) => setData_6(res.data.results))
      .catch((err) => console.log(err));
  };

  const fashion = () => {
    axios
      .get(`${urlApi}/${fashionApi}.json?api-key=${apiKey}`)
      .then((res) => setData_7(res.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <Router basename="/AccuDaily">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main home={data} world={data_2} />} />
          <Route path="/home" element={<Main home={data} world={data_2} />} />
          <Route path="/world" element={<World World={data_2} />} />
          <Route path="/politics" element={<Politics Politics={data_3} />} />
          <Route path="/business" element={<Business Business={data_4} />} />
          <Route path="/sports" element={<Sports Sports={data_5} />} />
          <Route path="/science" element={<Science Science={data_6} />} />
          <Route path="/fashion" element={<Fashion Fashion={data_7} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
