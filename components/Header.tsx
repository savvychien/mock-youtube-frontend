"use client"

import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"

export const Header = () => {
  const pathName = usePathname()

  return (
    <div className="flex justify-center gap-5 border-b py-7">
      <Link
        href="/"
        className={clsx("text-gray-400 hover:text-black transition-colors", {
          "text-black": pathName === "/",
        })}
      >
        All
      </Link>
      <Link
        href="/playlist"
        className={clsx("text-gray-400 hover:text-black transition-colors", {
          "text-black": pathName.includes("/playlist"),
        })}
      >
        My Playlist
      </Link>
    </div>
  )
}
