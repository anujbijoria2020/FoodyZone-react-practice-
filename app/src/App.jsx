// App.jsx
import { TopContainer } from "./components/TopContainer";
import { FilterContainer } from "./components/FilterContainer";
import { HomePage } from "./components/HomePage";
import { useState, useEffect } from "react";

export const BASE_URL = "http://localhost:9000";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setError("Unable to fetch data");
      }
    };

    fetchFoodData();
  }, []);

  function searchFilter(e) {
    const searchVal = e.target.value.trim();
    if (!searchVal) {
      setFilteredData(null);
      return;
    }
    const filtered = data?.filter((food) =>
      food.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilteredData(filtered);
  }

  function onClickFilter(type) {
    if (type === "all") {
      setFilteredData(data);
      return;
    }
    const filtered = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filtered);
  }

  return (
    <div className="max-w-[1600px] m-0 p-0 overflow-hidden">
      <div className="min-h-[14rem] bg-[#323334]">
        <TopContainer searchFilter={searchFilter} />
        <FilterContainer onClickFilter={onClickFilter} />
      </div>
      <HomePage data={filteredData || data} loading={loading} error={error} />
    </div>
  );
}


