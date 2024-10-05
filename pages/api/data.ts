import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    "https://api.github.com/users/hadley/orgs";

  try {
    // Fetch data from the backend URL (GitHub API in this case)
    const response = await fetch(backendUrl);

    // If the response is not OK, throw an error
    if (!response.ok) {
      throw new Error("Failed to fetch data from the backend");
    }

    const data = await response.json();

    // Return the data as JSON
    res.status(200).json(data);
  } catch (error) {
    // Return a placeholder response in case of failure
    res.status(500).json({
      message: "Error fetching data. Fallback to placeholder data.",
    });
  }
}
