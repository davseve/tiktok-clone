import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { topics } from '@/utils/constants';
const Discover = () => {
    const topicStyle = "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black",
        activeTopicStyle = "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer xl:border-[#f51997] text-[#f51997]";

    const router = useRouter(),
        { topic } = router.query;
        console.log(router.query);

    return (
        <div className="xl:border-b-2 xl-border-gray-200 pb-6">
            <p className="text-grey-500 font-semibold m-3 mt-4 hidden xl:block">
                Popular Topiscs
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
                { topics.map( (item, index) => (
                    <Link key={item.name} href={`/?topic=${item.name}`}>
                        <div className={ topic === item.name ? activeTopicStyle : topicStyle }>
                            <span className="font-bold text-2xl xl:text-md">
                                { item.icon }
                            </span>
                            <span className="hidden xl:block">
                                { item.name }
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Discover;