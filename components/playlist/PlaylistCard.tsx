import { PencilIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid"
import { Card } from "../ui/Card"
import { IconButton } from "../ui/IconButton"
import Link from "next/link"
import { removePlaylistApi } from "@/apis/playlist"
import { Playlist } from "@/types/playlist"

interface IPlaylistCard {
  id: number
  name: string
  onUpdate: () => void
  onRemove: (id: number) => void
}

export const PlaylistCard: React.FC<IPlaylistCard> = (props) => {
  const handleUpdate= (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    props.onUpdate()
  }

  const handleRemove = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      await removePlaylistApi(props.id)
      props.onRemove(props.id)
    } catch {
      //
    }
}

  return (
    <Link href={`/playlist/${props.id}`}>
      <Card>
        <p className="py-5 text-center">{props.name}</p>

        <div className="absolute top-2 right-2 flex gap-2">
          <IconButton  onClick={handleUpdate}>
            <PencilSquareIcon className="w-4" />
          </IconButton>
          <IconButton  onClick={handleRemove}>
            <TrashIcon className="w-4" />
          </IconButton>
        </div>
      </Card>
    </Link>
  )
}