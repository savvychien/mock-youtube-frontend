import { Video } from "@/types/video";
import axios from "axios";

type VideoResponse = {
  page: number
  total: number
  videos: Video[]
}

export const fetchVideosApi = async (page: number = 1, title?: string): Promise<VideoResponse> => {
  try {
    const params = new URLSearchParams();
    params.append('page', page.toString());

    if (title) {
      params.append('title', title);
    }

    const response = await axios.get<VideoResponse>(`/youtube_videos?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
};