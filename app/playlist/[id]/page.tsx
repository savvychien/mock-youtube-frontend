'use client'

import { fetchVideosFromPlaylistApi, removeVideoFromPlaylistApi } from "@/apis/playlist";
import { VideoCardList } from "@/components/video/VideoCardList";
import { VideoCardActionType } from "@/types/enum";
import { Video } from "@/types/video";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PlaylistDetailPage () {
  const [videos, setVideos] = useState<Video[]>([])

  const { id: playlistId } = useParams<{ id: string }>()
 
  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetchVideosFromPlaylistApi(Number(playlistId))
        setVideos(res.videos)
      } catch (err) {
        console.error("Error fetching videos:", err)
      }
    };

    getVideos()
  }, [])

  const handleRemoveFromPlaylist = async (val: Video) => {
    await removeVideoFromPlaylistApi(playlistId, val.video_id)
    setVideos(videos.filter(item => item.id !== val.id))
  }

  return (
    <div className="container mx-auto pt-5">
      <VideoCardList 
        videos={videos} 
        videoCardActionType={VideoCardActionType.removeFromPlaylist} 
        onRemoveFromPlaylist={handleRemoveFromPlaylist}
      />
    </div>
  )
}