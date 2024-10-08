import { Video } from "@/types/video"
import { VideoCard } from "./VideoCard"
import { VideoCardActionType } from "@/types/enum"

interface IVideoCardList {
  videos: Video[]
  videoCardActionType: VideoCardActionType
  onAddToPlaylist?: (val: Video) => void
  onRemoveFromPlaylist?: (val: Video) => void
}

export const VideoCardList: React.FC<IVideoCardList> = ({ 
  videos, 
  videoCardActionType, 
  onAddToPlaylist, 
  onRemoveFromPlaylist 
}) => {
  return (
    <div className="grid grid-cols-5 gap-3">
      {
        videos.map(video => (
          <VideoCard 
            key={video.id} 
            video={video} 
            onAddToPlaylist={() => onAddToPlaylist && onAddToPlaylist(video)} 
            onRemoveFromPlaylist={() => onRemoveFromPlaylist && onRemoveFromPlaylist(video)}
            actionType={videoCardActionType}
          />
        ))
      }
    </div>
  ) 
}