import { Playlist } from "@/types/playlist"
import { NewPlaylistCard } from "./NewPlaylistCard"
import { PlaylistCard } from "./PlaylistCard"
import { UpdatePlaylist } from "./UpdatePlaylist"
import { useState } from "react"

interface IPlaylistCardList {
  playlists: Playlist[]
  handleCreate: (val: Playlist) => void
  handleUpdate: (val: Playlist) => void
  handleRemove: (id: number) => void
}

export const PlaylistCardList: React.FC<IPlaylistCardList> = ({
  playlists,
  handleCreate,
  handleUpdate,
  handleRemove,
}) => {
  const [selected, setSelected] = useState<Playlist | null>(null)

  return (
    <div className="grid grid-cols-5 gap-3">
      <NewPlaylistCard onCreate={handleCreate} />

      {playlists.map((item) => (
        <PlaylistCard 
          key={item.id} 
          onUpdate={() => setSelected(item)}
          onRemove={handleRemove} 
          {...item} 
        />
      ))}

      {
        selected &&
        <UpdatePlaylist playlist={selected} handleUpdate={handleUpdate} />
      }
    </div>
  )
}
