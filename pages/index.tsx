import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState({ message: "Loading..." });

  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://default-backend-url";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${backendUrl}/api/data`);
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
