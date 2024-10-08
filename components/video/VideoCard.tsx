import { Video } from "@/types/video"
import { ChatBubbleLeftEllipsisIcon, EyeIcon, PlusIcon } from "@heroicons/react/16/solid"
import { Button } from "../ui/Button"
import { Card } from "../ui/Card"

export const VideoCard: React.FC<Video> = (props) => {
  return (
    <Card>
      <div className="flex flex-col gap-3">
        <img 
          src={props.thumbnail_url}
          alt={props.title}
          className="w-full rounded-md"
        />
        <p className="text-lg">{props.title}</p>
        <p className="line-clamp-2 text-gray-500">{props.description}</p>

        <div className="flex-grow" />

        <div className="flex items-center gap-2">
          <EyeIcon className="w-4" />
          <p className="text-sm">{props.views.toLocaleString()}</p>
        </div>

        <div className="flex justify-end">
          <Button endContent={<PlusIcon className="w-4" />}>Add to Playlist</Button>
        </div>
      </div>
    </Card>
  )
}