import { Video } from "@/types/video"

export const VideoCard: React.FC<Video> = (props) => {
  return (
    <div className="p-4 rounded-lg border flex flex-col gap-3 hover:shadow-lg transition-shadow">
      <img 
        src={props.thumbnail_url}
        alt={props.title}
        className="w-full rounded-md"
      />
      <p className="text-lg">{props.title}</p>
      <p className="line-clamp-3 text-gray-500">{props.description}</p>
      <p className="text-sm"><strong>Views: {props.views}</strong></p>
    </div>
  )
}