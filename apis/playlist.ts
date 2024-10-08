import { Playlist } from "@/types/playlist";
import { Video } from "@/types/video";
import axios from "axios";

interface AddVideoDto {
  title: string
  video_id: string
  views: number
  description: string
  thumbnail_url: string
}

interface PlaylistVideoResponse {
  playlist_id: number
  videos: Video[]
}

const BASE_URL = '/api/playlists'

export const createPlaylistApi = async (name: string): Promise<Playlist> => {
  try {
    const response = await axios.post<Playlist>(BASE_URL, { name });
    return response.data;
  } catch (error) {
    console.error("Error creating playlist:", error);
    throw error;
  }
};

export const updatePlaylistApi = async (id: number, name: string): Promise<Playlist> => {
  try {
    const response = await axios.put<Playlist>(`${BASE_URL}/${id}`, { name });
    return response.data;
  } catch (error) {
    console.error("Error updating playlist:", error);
    throw error;
  }
}

export const removePlaylistApi = async (id: number) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting playlist:", error);
    throw error;
  }
}

export const fetchPlaylistsApi = async (): Promise<Playlist[]> => {
  try {
    const response = await axios.get<Playlist[]>(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching playlist:", error);
    throw error;
  }
}

export const addVideoToPlaylistApi = async (playlistId: number, dto: AddVideoDto): Promise<PlaylistVideoResponse> => {
  try {
    const response = await axios.post<PlaylistVideoResponse>(`${BASE_URL}/${playlistId}/add_video`, dto);
    return response.data;
  } catch (error) {
    console.error("Error adding video to a playlist:", error);
    throw error;
  }
}

export const removeVideoFromPlaylistApi = async (playlistId: string, video_id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${playlistId}/remove_video`, { video_id });
    return response.data;
  } catch (error) {
    console.error("Error deleting video from a playlist:", error);
    throw error;
  }
}

export const getVideosFromPlaylistApi = async (playlistId: number): Promise<PlaylistVideoResponse> => {
  try {
    const response = await axios.get<PlaylistVideoResponse>(`${BASE_URL}/${playlistId}/videos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching videos from a playlist:", error);
    throw error;
  }
}
