'use client'

import { fetchPlaylistsApi } from "@/apis/playlist";
import { PlaylistCardList } from "@/components/playlist/PlaylistCardList";
import { Playlist } from "@/types/playlist";
import { useEffect, useState } from "react";

export default function PlaylistPage () {
  const [playlists, setPlaylists] = useState<Playlist[]>([])

  useEffect(() => {
    const getPlaylists = async () => {
      const data = await fetchPlaylistsApi()
      setPlaylists(data)
    }

    getPlaylists()
  }, [])

  return (
    <div className="container mx-auto pt-5">
      <PlaylistCardList 
        playlists={playlists} 
        handleCreate={(val) => setPlaylists(playlists.concat(val))} 
        handleUpdate={(val) => setPlaylists(playlists.map(item => item.id === val.id ? val : item))}
        handleRemove={(id) => setPlaylists(playlists.filter(item => item.id !== id))}
      />
    </div>
  )
}