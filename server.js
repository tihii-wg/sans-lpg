import "dotenv/config";
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const placeId = "ChIJ-Z_sYbZ7n0ARtIHK5jBxAME";

app.get("/api/reviews", async (req, res) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Google API error" });
    }

    const data = await response.json();
    // console.log(data);

    console.log(process.env.GOOGLE_KEY);

    res.status(200).json(
      data.result.reviews.map((r) => ({
        ...r,
        profile_photo_url: r.profile_photo_url + "&sz=120",
      }))
    );
  } catch (error) {
    res.status(500).json({ error: "Sercer error", details: error.message });
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
