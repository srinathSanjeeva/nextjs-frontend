import { useState, useEffect } from "react";

interface Org {
  login: string;
  description: string;
  html_url: string;
}

const Home = () => {
  const [data, setData] = useState<Org[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result: Org[] = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        GitHub Organizations for User: Hadley
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      {!error && data.length === 0 && <p className="text-center">Loading...</p>}
      <ul className="space-y-6">
        {data.map((org) => (
          <li
            key={org.login}
            className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              <a
                href={org.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {org.login}
              </a>
            </h2>
            <p className="text-gray-600 italic">
              {org.description || "No description available"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
