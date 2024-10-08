import { Dialog } from "../ui/Dialog"
import { PlaylistSelect } from "./PlaylistSelect"
import { usePlaylists } from "../usePlaylists"
import { useState } from "react"
import { Playlist } from "@/types/playlist"

interface IPlaylistSelectDialog {
  isOpen: boolean
  onOpenChange: (val: boolean) => void
  onSelect: (val: Playlist) => void
}

export const PlaylistSelectDialog: React.FC<IPlaylistSelectDialog> = ({ onSelect, isOpen, onOpenChange }) => {

  const { playlists } = usePlaylists()

  const [selected, setSelected] = useState<Playlist | null>(null)

  const handleConfirm = () => {
    if (selected) {
      onSelect(selected)
      onOpenChange(false)
    }
  }

  return (
    <Dialog 
      isOpen={isOpen} 
      onConfirm={handleConfirm} 
      onCancel={() => onOpenChange(false)}
    >
      <PlaylistSelect 
        items={playlists} 
        selected={selected}
        onSelect={setSelected} 
      />
    </Dialog>
  )
}