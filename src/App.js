import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import World from "./components/World";
import axios from "axios";
import Politics from "./components/Politics";

const urlApi = "https://api.nytimes.com/svc/topstories/v2";
const apiKey = "wbvqsqGzDnecddBOkQqrtUTSnM08QqXS";
const homeApi = "home";
const worldApi = "world";
const politicsApi = "politics";

function App() {
  const [data, setData] = useState([]);
  const [data_2, setData_2] = useState([]);
  const [data_3, setData_3] = useState([]);

  useEffect(() => {
    home();
    world();
    politics();
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

  return (
    <BrowserRouter basename="/AccuDaily">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main home={data} world={data_2} />} />
          <Route path="/home" element={<Main home={data} world={data_2} />} />
          <Route path="/world" element={<World world={data_2} />} />
          <Route path="/politics" element={<Politics Politics={data_3} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
