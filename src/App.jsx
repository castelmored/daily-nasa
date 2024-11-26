import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);

  const toggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetched from cache today");
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Fetched from API today");
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      <div>
        {data ? (
          <Main data={data} />
        ) : (
          <div>
            <i className="fa-solid fa-gear"></i>
          </div>
        )}
        <Footer toggleSidebar={toggleSidebar} data={data} />
        <SideBar toggleSidebar={toggleSidebar} isOpen={isOpen} data={data} />
      </div>
    </>
  );
}

export default App;
