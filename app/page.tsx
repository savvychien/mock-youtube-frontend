'use client'

import { fetchVideosApi } from "@/apis/video"
import { VideoCardList } from "@/components/video/VideoCardList"
import { Video } from "@/types/video"
import { useEffect, useState } from "react"

import { Search } from "@/components/Search"
import { Pagination } from "@/components/Pagination"
import { useRouter, useSearchParams } from "next/navigation"
import { VideoCardActionType } from "@/types/enum"
import { PlaylistSelectDialog } from "@/components/playlist/PlaylistSelectDialog"
import { addVideoToPlaylistApi } from "@/apis/playlist"
import { Playlist } from "@/types/playlist"

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([])
  const [total, setTotal] = useState(0)
  const router = useRouter()

  const searchParams = useSearchParams()

  const page = Number(searchParams.get('page')) || 1
  const title = searchParams.get('title') || ''  

  const [selected, setSelected] = useState<Video | null>(null)

  const [isPlaylistSelectOpen, setIsPlaylistSelectOpen] = useState(false)

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetchVideosApi(page, title)
        setTotal(res.total)
        setVideos(res.videos)
      } catch (err) {
        console.error("Error fetching videos:", err)
      }
    }

    getVideos()
  }, [page, title])

  const handleChangePage = (page: number) => {
    if (page < 1) return

    const params = new URLSearchParams(window.location.search)
    params.set('page', page.toString())
    router.push(`?${params.toString()}`)
  }

  const handleChangeTitle = (value: string) => {
    const params = new URLSearchParams(window.location.search)
    params.set('title', value)
    params.set('page', '1')
    router.push(`?${params.toString()}`)
  }

  const onAddToPlaylist = (val: Video) => {
    setIsPlaylistSelectOpen(true)
    setSelected(val)
  }

  const handleAddToPlaylist = async (val: Playlist) => {
    if (selected) {
      try {
        await addVideoToPlaylistApi(val.id, selected)
        setIsPlaylistSelectOpen(false)
      } catch {
        // err handling
      }
    }
  }

  return (
    <div className="container mx-auto pt-5">
      <Search onSearch={handleChangeTitle} />

      <VideoCardList 
        videos={videos} 
        videoCardActionType={VideoCardActionType.addToPlaylist} 
        onAddToPlaylist={onAddToPlaylist}
      />

      <Pagination 
        page={page} 
        total={total} 
        size={10} 
        onNext={() => handleChangePage(page + 1)} 
        onPrev={() => handleChangePage(page - 1)} 
      />

      <PlaylistSelectDialog
        isOpen={isPlaylistSelectOpen} 
        onOpenChange={setIsPlaylistSelectOpen} 
        onSelect={handleAddToPlaylist}
      />
    </div>
  )
}
