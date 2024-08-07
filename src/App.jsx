import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data.slice(0, 50));
        console.log(data);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <h1>Countreis</h1>
        <ul className="list">
          {countries.map((country) => (
            <li key={country.id} className="list-item">
              <img
                src={country.flags.png}
                alt={`flag of ${country.name.common}`}
              />
              <h3>{country.name.common}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
