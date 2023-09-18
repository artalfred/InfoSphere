import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
};

const urlApi = "https://api.nytimes.com/svc/topstories/v2";
const apiKey = "wbvqsqGzDnecddBOkQqrtUTSnM08QqXS";
const homeSection = "home";
const worldSection = "world";
const politicsSection = "politics";
const businessSection = "business";
const sportsSection = "sports";
const artsSection = "arts";
const magazineSection = "t-magazine";

export const ApiProvider = ({ children }) => {
  const [searchApiResults, setSearchApiResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const [form, setForm] = useState(localStorage.getItem("searchForm") || "");

  function submitSearch(e) {
    navigate(`search?query=${form}`);
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
      setIsLoading(true);
      setError("");

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
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchHomeData = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `${urlApi}/${homeSection}.json?api-key=${apiKey}`,
        {
          signal: controller.signal,
        }
      );

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
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchWorldData = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `${urlApi}/${worldSection}.json?api-key=${apiKey}`,
        {
          signal: controller.signal,
        }
      );

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
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPoliticsData = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `${urlApi}/${politicsSection}.json?api-key=${apiKey}`,
        {
          signal: controller.signal,
        }
      );

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
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchBusinessData = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `${urlApi}/${businessSection}.json?api-key=${apiKey}`,
        {
          signal: controller.signal,
        }
      );

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
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSportsData = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `${urlApi}/${sportsSection}.json?api-key=${apiKey}`,
        {
          signal: controller.signal,
        }
      );

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
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchArtsData = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `${urlApi}/${artsSection}.json?api-key=${apiKey}`,
        {
          signal: controller.signal,
        }
      );

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
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMagazineData = async () => {
    const controller = new AbortController();

    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `${urlApi}/${magazineSection}.json?api-key=${apiKey}`,
        { signal: controller.signal }
      );

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
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

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
        isLoading,
        error,
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
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
