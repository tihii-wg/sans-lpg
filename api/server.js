import fetch from "node-fetch";

export default async function handler(req, res) {
  const placeId = "ChIJ-Z_sYbZ7n0ARtIHK5jBxAME";
  const apiKey = process.env.GOOGLE_KEY;

  if (req.url.includes("/api/reviews")) {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
      );

      if (!response.ok) {
        return res.status(response.status).json({ error: "Google API error" });
      }

      const data = await response.json();

      return res.status(200).json(
        data.result.reviews.map((r) => ({
          ...r,
          profile_photo_url: r.profile_photo_url + "&sz=120",
        }))
      );
    } catch (error) {
      return res.status(500).json({
        error: "Server error",
        details: error.message,
      });
    }
  }

  return res.status(404).json({ error: "Not found" });
}