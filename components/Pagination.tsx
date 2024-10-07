import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Button } from "./Button";

interface IPagination {
  total: number
  page: number
  size: number
  onNext: () => void
  onPrev: () => void
}

export const Pagination: React.FC<IPagination> = ({ total, page, size, onNext, onPrev }) => {
  const from = total > 0 ? (page - 1) * size + 1 : 0
  const to = Math.min(page * size, total)
  return (
    <div className="flex gap-3 my-5 items-center w-full">
      <p className="text-gray-500 text-sm flex-grow">
        Showing <strong>{from}</strong>-<strong>{to}</strong> of <strong>{total}</strong>{" "}
        videos
      </p>
      <Button 
        onClick={onPrev}
        startContent={<ChevronLeftIcon className="w-4" />}
        disabled={page <= 1}
      >
        Prev
      </Button>
      <Button 
        onClick={onNext} 
        endContent={<ChevronRightIcon className="w-4" />}
        disabled={page >= Math.ceil(total / size)}
      >
        Next
      </Button>
    </div>
  )
}
