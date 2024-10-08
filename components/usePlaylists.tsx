import { fetchPlaylistsApi } from "@/apis/playlist"
import { Playlist } from "@/types/playlist"
import { useEffect, useState } from "react"

export const usePlaylists = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([])

  useEffect(() => {
    const getPlaylists = async () => {
      const data = await fetchPlaylistsApi()
      setPlaylists(data)
    }

    getPlaylists()
  }, [])

  return {
    playlists,
    setPlaylists
  }
}