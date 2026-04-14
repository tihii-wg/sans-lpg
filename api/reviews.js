export default async function handler(req, res) {
  const placeId = process.env.PLACE_ID;
  const apiKey = process.env.GOOGLE_KEY;

  res.setHeader("Cache-Control", "no-store, max-age=0");

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
        profile_photo_url: formatProfilePhotoUrl(review.profile_photo_url),
      }))
    );
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

function formatProfilePhotoUrl(rawUrl) {
  if (!rawUrl) return "";

  try {
    const url = new URL(rawUrl);
    url.searchParams.set("sz", "120");
    return url.toString();
  } catch {
    const separator = rawUrl.includes("?") ? "&" : "?";
    return `${rawUrl}${separator}sz=120`;
  }
}
