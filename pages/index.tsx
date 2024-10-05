import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState({ message: "Loading..." });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/data");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Next.js with Fallback</h1>
      <p>{data.message}</p>
    </div>
  );
};

export default Home;
