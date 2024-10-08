'use client'

import { PlusIcon } from "@heroicons/react/16/solid"
import { Card } from "../ui/Card"
import { Dialog } from "../ui/Dialog"
import { useState } from "react"
import { Input } from "../ui/Input"
import { createPlaylistApi } from "@/apis/playlist"
import { Playlist } from "@/types/playlist"

interface INewPlaylistCard {
  onCreate: (value: Playlist) => void
}

export const NewPlaylistCard: React.FC<INewPlaylistCard> = ({ onCreate }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [name, setName] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const handleCreate = async () => {
    setIsLoading(true)
    try {
      const data = await createPlaylistApi(name)
      onCreate(data)
      setName('')
    } finally {
      setIsLoading(false)
      setIsOpen(false)
    }
  }

  return (
    <>
      <Card onClick={() => setIsOpen(true)}>
        <div className="flex justify-center gap-3 items-center cursor-default h-full">
          Create New Playlist
          <PlusIcon className="w-5" />
        </div>
      </Card>

      <Dialog
        isOpen={isOpen} 
        title="Create New Playlist"
        onConfirm={handleCreate} 
        onCancel={() => setIsOpen(false)}
        isLoading={isLoading}
      >
        <Input 
          placeholder="Playlist name..." 
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Dialog>
    </>
  )
}