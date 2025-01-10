import { Video } from "@/types";
import React, { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { BsPlay } from 'react-icons/bs';


interface IProps {
    post: Video;
}
const VideoCard = ({ post }: IProps) => {
    const [isHover, setIsHover] = useState(true);
    const [playing, setPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const onVideoClick = () => {
        if (playing) {
            videoRef?.current?.pause();
            setPlaying(false);
        } else {
            videoRef?.current?.play();
            setPlaying(true);
        }
    }


    useEffect(() => {
        console.log({ isHover, playing, isMuted });
    }, [isHover]);

    console.log({ post });
    return (
        <div className="flex flex-col border-b-2 border-gray-200 pb-6">
            <div>
                <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
                    <div className="md:w-16 md:h-16 w-10 h-10">
                        <Link href="/">
                            <>
                                <Image
                                    width={62}
                                    height={62}
                                    alt={post.userId}
                                    className="rounded-full"
                                    src={post.postedBy.image}
                                    layout="responsive"
                                />
                            </>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <div className="flex flex-row items-center gap-2">
                                <p className="flex items-center gap-2 md:text-md font-bold text-primary">
                                    {post.postedBy.userName} {` `}
                                    <GoVerified className="text-blue-400 text-md" />
                                </p>
                                <p className="capitalize font-medium text-xs text-gray-500 hidden md:block">
                                    {post.postedBy.userName}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="lg:ml-20 flex gap-4 relative">
                <div className="rounded-3xl"
                    onMouseEnter={() => setIsHover(true) }
                    onMouseLeave={() => setIsHover(false) }
                >
                    <Link href="/">
                        <video
                            src={post.video.asset.url}
                            className="lg:w-[600px] h-[300px] md:h-[400px] w-[300px] lg:h-[530px] w-[200px] rounded-2xl cursor-pointer bg-gray-100"
                            loop
                            autoPlay
                            ref={videoRef}
                        />
                    </Link>
                    { isHover && (
                        <div
                            className="absolute bottom-6 cursor-pointer left-20 md:left-20 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3"
                        >
                            { playing ? (
                                <button>
                                    <BsFillPauseFill
                                        className="text-black text-2xl lg:text-4xl"
                                        onClick={ onVideoClick }
                                    />
                                </button>
                            ) : (
                                <button>
                                    <BsFillPlayFill
                                        className="text-black text-2xl lg:text-4xl"
                                        onClick={ onVideoClick }
                                    />
                                </button>
                            ) }

                            { isMuted ? (
                                <button>
                                    <HiVolumeOff
                                        className="text-black text-2xl lg:text-4xl"
                                        onClick={ () => setIsMuted( false ) }
                                    />
                                </button>
                            ) : (
                                <button>
                                    <HiVolumeUp
                                        className="text-black text-2xl lg:text-4xl"
                                        onClick={ () => setIsMuted( true ) }
                                    />
                                </button>
                        ) }
                </div>
                ) }
            </div>
        </div>
</div>
)
    ;
}

export default VideoCard;