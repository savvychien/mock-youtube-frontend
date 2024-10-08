'use client'

import { PlaylistCardList } from "@/components/playlist/PlaylistCardList";
import { usePlaylists } from "@/components/usePlaylists";

export default function PlaylistPage () {
  const {playlists, setPlaylists} = usePlaylists()

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