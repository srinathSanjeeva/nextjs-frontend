import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://default-backend-url";
    const response = await fetch(`${backendUrl}/data`);

    if (!response.ok) {
      throw new Error("Service unavailable");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      message:
        "Backend service is not available. This is a placeholder response.",
    });
  }
}
