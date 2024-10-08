import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center gap-5 border-b py-7">
      <Link
        href="/"
        className="text-gray-400 hover:text-black transition-colors"
      >
        All
      </Link>
      <Link
        href="/playlist"
        className="text-gray-400 hover:text-black transition-colors"
      >
        My Playlist
      </Link>
    </div>
  );
};
