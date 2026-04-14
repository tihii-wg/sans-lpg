export default async function handler(req, res) {
  const placeId = process.env.PLACE_ID;
  const apiKey = process.env.GOOGLE_KEY;

  if (!placeId || !apiKey) {
    return res.status(500).json({ error: "Missing server environment variables" });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Google API error" });
    }

    const data = await response.json();
    const reviews = data?.result?.reviews ?? [];

    return res.status(200).json(
      reviews.map((review) => ({
        ...review,
        profile_photo_url: `${review.profile_photo_url}&sz=120`,
      }))
    );
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
