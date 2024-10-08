'use client'

import { Video } from "@/types/video"
import { EyeIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid"
import { Button } from "../ui/Button"
import { Card } from "../ui/Card"
import { VideoCardActionType } from "@/types/enum"

interface IVideoCard {
  video: Video
  onAddToPlaylist?: () => void
  onRemoveFromPlaylist?: () => void
  actionType: VideoCardActionType
}

export const VideoCard: React.FC<IVideoCard> = ({ 
  video, 
  onAddToPlaylist, 
  onRemoveFromPlaylist, 
  actionType 
}) => {
  const renderActionButtons = () => {
    if (actionType === VideoCardActionType.addToPlaylist) {
      return (
        <Button 
          onClick={onAddToPlaylist} 
          endContent={<PlusIcon className="w-4" />}
        >
          Add to Playlist
        </Button>
      )
    }

    if (actionType === VideoCardActionType.removeFromPlaylist) {
      return (
        <Button 
          onClick={onRemoveFromPlaylist} 
          endContent={<TrashIcon className="w-4" />}
        >
          Remove from Playlist
        </Button>
      )
    }
  }

  return (
    <Card>
      <div className="flex flex-col gap-3 h-full">
        <img 
          src={video.thumbnail_url}
          alt={video.title}
          className="w-full rounded-md"  
        />
        <p className="text-lg">{video.title}</p>
        <p className="line-clamp-2 text-gray-500">{video.description}</p>

        <div className="flex-grow" />

        <div className="flex items-center gap-2">
          <EyeIcon className="w-4" />
          <p className="text-sm">{video.views.toLocaleString()}</p>
        </div>

        <div className="flex justify-end">
          { renderActionButtons() }
        </div>
      </div>
    </Card>
  )
}