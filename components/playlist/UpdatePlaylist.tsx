import { Playlist } from "@/types/playlist"
import { Dialog } from "../ui/Dialog"
import { useEffect, useState } from "react"
import { Input } from "../ui/Input"
import { updatePlaylistApi } from "@/apis/playlist"

interface IUpdatePlaylist {
  playlist: Playlist
  handleUpdate: (val: Playlist) => void
}

export const UpdatePlaylist: React.FC<IUpdatePlaylist> = ({ playlist, handleUpdate }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [name, setName] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (playlist.name) {
      setName(playlist.name)
      setIsOpen(true)
    }
  }, [playlist])

  const handleConfirm = async () => {
    setIsLoading(true)

    try {
      await updatePlaylistApi(playlist.id, name)
      handleUpdate({ name, id: playlist.id })
      setIsOpen(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog
      isOpen={isOpen}
      onConfirm={handleConfirm}
      onCancel={() => setIsOpen(false)}
      isLoading={isLoading}
    >
      <Input
        placeholder="Playlist name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Dialog>
  )
}
