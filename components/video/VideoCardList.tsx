import { Video } from "@/types/video"
import { VideoCard } from "./VideoCard"

interface IVideoCardList {
  videos: Video[]
}

export const VideoCardList: React.FC<IVideoCardList> = (props) => {
  return (
    <div className="grid grid-cols-5 gap-3">
      {
        props.videos.map(video => (
          <VideoCard key={video.id} {...video} />
        ))
      }
    </div>
  ) 
}