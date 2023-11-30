"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface SearchContentProps {
    songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
    const onPlay = useOnPlay(songs);
    if (songs.length === 0) {
        return (
            <div
                className="
                flex
                flex-col
                gap-y-2
                w-full
                px-6
                text-neutral-400"
            >
                No Song Found
            </div>
        )
    }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
        {songs.map((songs) => (
            <div
                key={songs.id}
                className="flex items-center gap-x-4 w-full"
            >
                <div className="flex-1">
                    <MediaItem
                     onClick={(id: string) => onPlay(id)}
                     data={songs}
                    />
                </div>
                <LikeButton songId={songs.id}/>
            </div>
        ))}
    </div>
  )
}

export default SearchContent