import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
};

const urlApi = "https://api.nytimes.com/svc/topstories/v2";
const apiKey = "wbvqsqGzDnecddBOkQqrtUTSnM08QqXS";

export const ApiProvider = ({ children }) => {
  const [searchApiResults, setSearchApiResults] = useState([]);
  const navigate = useNavigate();

  // ERROR HANDLING EACH SECTION
  const [isHomeLoading, setIsHomeLoading] = useState(false);
  const [isHomeError, setIsHomeError] = useState(null);
  const [isWorldLoading, setIsWorldLoading] = useState(false);
  const [isWorldError, setIsWorldError] = useState(null);
  const [isPoliticsLoading, setIsPoliticsLoading] = useState(false);
  const [isPoliticsError, setIsPoliticsError] = useState(null);
  const [isBusinessLoading, setIsBusinessLoading] = useState(false);
  const [isBusinessError, setIsBusinessError] = useState(null);
  const [isSportsLoading, setIsSportsLoading] = useState(false);
  const [isSportsError, setIsSportsError] = useState(null);
  const [isArtsLoading, setIsArtsLoading] = useState(false);
  const [isArtsError, setIsArtsError] = useState(null);
  const [isMagazineLoading, setIsMagazineLoading] = useState(false);
  const [isMagazineError, setIsMagazineError] = useState(null);
  const [isResultsLoading, setIsResultsLoading] = useState(false);
  const [isResultsError, setIsResultsError] = useState(null);

  const [form, setForm] = useState(localStorage.getItem("searchForm") || "");

  function submitSearch() {
    navigate(`InfoSphere/search?query=${form}`);
  }

  useEffect(() => {
    localStorage.setItem("searchForm", form);
  }, [form]);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("query");

  const [home, setHome] = useState([]);
  const [world, setWorld] = useState([]);
  const [politics, setPolitics] = useState([]);
  const [business, setBusiness] = useState([]);
  const [sports, setSports] = useState([]);
  const [arts, setArts] = useState([]);
  const [magazine, setMagazine] = useState([]);

  const searchApi = async () => {
    const controller = new AbortController();

    try {
      setIsResultsLoading(true);
      setIsResultsError(null);

      const res = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${form}&api-key=${apiKey}`,
        { signal: controller.signal }
      );

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const jsonData = await res.json();
      const dataWithIds = jsonData.response.docs.map((item, index) => ({
        ...item,
        id: index,
      }));

      setSearchApiResults(dataWithIds);
    } catch (err) {
      setIsResultsError(err.message);
    } finally {
      setIsResultsLoading(false);
    }
  };

  const fetchHomeData = async () => {
    const controller = new AbortController();

    try {
      setIsHomeLoading(true);
      setIsHomeError(null);
      const res = await fetch(`${urlApi}/home.json?api-key=${apiKey}`, {
        signal: controller.signal,
      });

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();

      // Add unique IDs to each item in the data
      const dataWithIds = jsonData.results.map((item, index) => ({
        ...item,
        id: index, // You can use a more unique identifier if available in the data
      }));

      setHome(dataWithIds);
    } catch (err) {
      setIsHomeError(err.message);
    } finally {
      setIsHomeLoading(false);
    }
  };

  const fetchWorldData = async () => {
    const controller = new AbortController();

    try {
      setIsWorldLoading(true);
      setIsWorldError(null);
      const res = await fetch(`${urlApi}/world.json?api-key=${apiKey}`, {
        signal: controller.signal,
      });

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();

      // Add unique IDs to each item in the data
      const dataWithIds = jsonData.results.map((item, index) => ({
        ...item,
        id: index, // You can use a more unique identifier if available in the data
      }));

      setWorld(dataWithIds);
    } catch (err) {
      setIsWorldError(err.message);
    } finally {
      setIsWorldLoading(false);
    }
  };

  const fetchPoliticsData = async () => {
    const controller = new AbortController();

    try {
      setIsPoliticsLoading(true);
      setIsPoliticsError(null);
      const res = await fetch(`${urlApi}/politics.json?api-key=${apiKey}`, {
        signal: controller.signal,
      });

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();

      // Add unique IDs to each item in the data
      const dataWithIds = jsonData.results.map((item, index) => ({
        ...item,
        id: index, // You can use a more unique identifier if available in the data
      }));

      setPolitics(dataWithIds);
    } catch (err) {
      setIsPoliticsError(err.message);
    } finally {
      setIsPoliticsLoading(false);
    }
  };

  const fetchBusinessData = async () => {
    const controller = new AbortController();

    try {
      setIsBusinessLoading(true);
      setIsBusinessError(null);
      const res = await fetch(`${urlApi}/business.json?api-key=${apiKey}`, {
        signal: controller.signal,
      });

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();

      // Add unique IDs to each item in the data
      const dataWithIds = jsonData.results.map((item, index) => ({
        ...item,
        id: index, // You can use a more unique identifier if available in the data
      }));

      setBusiness(dataWithIds);
    } catch (err) {
      setIsBusinessError(err.message);
    } finally {
      setIsBusinessLoading(false);
    }
  };

  const fetchSportsData = async () => {
    const controller = new AbortController();

    try {
      setIsSportsLoading(true);
      setIsSportsError(null);
      const res = await fetch(`${urlApi}/sports.json?api-key=${apiKey}`, {
        signal: controller.signal,
      });

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();

      // Add unique IDs to each item in the data
      const dataWithIds = jsonData.results.map((item, index) => ({
        ...item,
        id: index, // You can use a more unique identifier if available in the data
      }));

      setSports(dataWithIds);
    } catch (err) {
      setIsSportsError(err.message);
    } finally {
      setIsSportsLoading(false);
    }
  };

  const fetchArtsData = async () => {
    const controller = new AbortController();

    try {
      setIsArtsLoading(true);
      setIsArtsError(null);
      const res = await fetch(`${urlApi}/arts.json?api-key=${apiKey}`, {
        signal: controller.signal,
      });

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();
      // Add unique IDs to each item in the data
      const dataWithIds = jsonData.results.map((item, index) => ({
        ...item,
        id: index, // You can use a more unique identifier if available in the data
      }));

      setArts(dataWithIds);
    } catch (err) {
      setIsArtsError(err.message);
    } finally {
      setIsArtsLoading(false);
    }
  };

  const fetchMagazineData = async () => {
    const controller = new AbortController();

    try {
      setIsMagazineLoading(true);
      setIsMagazineError(null);
      const res = await fetch(`${urlApi}/t-magazine.json?api-key=${apiKey}`, {
        signal: controller.signal,
      });

      if (!res.ok)
        throw new Error("Someting went wrong with fetching the data");

      const jsonData = await res.json();
      // Add unique IDs to each item in the data
      const dataWithIds = jsonData.results.map((item, index) => ({
        ...item,
        id: index, // You can use a more unique identifier if available in the data
      }));

      setMagazine(dataWithIds);
    } catch (err) {
      setIsMagazineError(err.message);
    } finally {
      setIsMagazineLoading(false);
    }
  };

  // FETCHING DATA
  useEffect(() => {
    searchApi();
    fetchHomeData();
    fetchWorldData();
    fetchPoliticsData();
    fetchBusinessData();
    fetchSportsData();
    fetchArtsData();
    fetchMagazineData();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        searchApiResults,
        home,
        world,
        politics,
        business,
        sports,
        arts,
        magazine,
        query,
        form,
        setForm,
        submitSearch,
        urlApi,
        apiKey,
        isHomeError,
        isHomeLoading,
        isWorldError,
        isWorldLoading,
        isPoliticsError,
        isPoliticsLoading,
        isBusinessError,
        isBusinessLoading,
        isSportsError,
        isSportsLoading,
        isArtsError,
        isArtsLoading,
        isMagazineError,
        isMagazineLoading,
        isResultsError,
        isResultsLoading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
