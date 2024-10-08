import { Playlist } from "@/types/playlist"
import { CheckIcon } from "@heroicons/react/16/solid"

interface IPlaylistSelect {
  onSelect: (item: Playlist) => void
  items: Playlist[]
  selected: Playlist | null
}

export const PlaylistSelect: React.FC<IPlaylistSelect> = ({
  items,
  onSelect,
  selected,
}) => {
  const handleSelect = (val: Playlist) => {
    onSelect(val)
  }

  return (
    <div className="flex flex-col gap-2">
      {items.map.length ? (
        items.map((item) => (
          <div
            onClick={() => handleSelect(item)}
            key={item.name}
            className="rounded border p-3 flex justify-between items-center hover:bg-gray-100 transition-shadow"
          >
            {item.name}

            {selected?.id === item.id && <CheckIcon className="w-4" />}
          </div>
        ))
      ) : (
        <div>No Playlists</div>
      )}
    </div>
  )
}
