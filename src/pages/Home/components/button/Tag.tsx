interface TagProps {
  tag: string
}

export function Tag({ tag }: TagProps) {
  return (
    <button className="bg-yellow-light text-yellow-dark font-bold text-[0.625rem] px-2 py-1 rounded-[100px]">
      {tag}
    </button>
  )
}
