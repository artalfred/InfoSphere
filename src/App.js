import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import World from "./components/World";
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

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    home();
    world();
    politics();
    business();
    sports();
    science();
    fashion();
  }, []);

  const home = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(`${urlApi}/${homeApi}.json?api-key=${apiKey}`, {
        signal: controller.signal,
      });

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();
      setData(jsonData.results);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const world = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(`${urlApi}/${worldApi}.json?api-key=${apiKey}`, {
        signal: controller.signal,
      });

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();
      setData_2(jsonData.results);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const politics = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `${urlApi}/${politicsApi}.json?api-key=${apiKey}`,
        {
          signal: controller.signal,
        }
      );

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();
      setData_3(jsonData.results);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const business = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `${urlApi}/${businessApi}.json?api-key=${apiKey}`,
        {
          signal: controller.signal,
        }
      );

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();
      setData_4(jsonData.results);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const sports = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(`${urlApi}/${sportsApi}.json?api-key=${apiKey}`, {
        signal: controller.signal,
      });

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();
      setData_5(jsonData.results);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const science = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `${urlApi}/${scienceApi}.json?api-key=${apiKey}`,
        { signal: controller.signal }
      );

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();
      setData_6(jsonData.results);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fashion = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `${urlApi}/${fashionApi}.json?api-key=${apiKey}`,
        { signal: controller.signal }
      );

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();
      setData_7(jsonData.results);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                home={data}
                world={data_2}
                isLoading={isLoading}
                error={error}
              />
            }
          />
          <Route
            path="/world"
            element={
              <World World={data_2} isLoading={isLoading} error={error} />
            }
          />
          <Route
            path="/politics"
            element={
              <Politics Politics={data_3} isLoading={isLoading} error={error} />
            }
          />
          <Route
            path="/business"
            element={
              <Business Business={data_4} isLoading={isLoading} error={error} />
            }
          />
          <Route
            path="/sports"
            element={
              <Sports Sports={data_5} isLoading={isLoading} error={error} />
            }
          />
          <Route
            path="/science"
            element={
              <Science Science={data_6} isLoading={isLoading} error={error} />
            }
          />
          <Route
            path="/fashion"
            element={
              <Fashion Fashion={data_7} isLoading={isLoading} error={error} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
