import axios from "axios";

export async function GET() {
  try {
    const res = await axios.get('https://mock-youtube-api-f3d0c17f0e38.herokuapp.com/api/videos', { timeout: 10000 })
    return Response.json(res.data)
  } catch (err) {
    return Response.json(err)
  }
}
