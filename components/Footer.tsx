import React from 'react';
import { footerList1, footerList2, footerList3 } from "@/utils/constants";

const List = ( { items, mt }: { items: string[], mt: boolean } ) => (
    <div className={`flex flex-wrap gap-2 ${ mt && 'mt-2' }`}>
        { items.map( ( item ) => (

            <p key={ item } className="hover:underline cursor-pointer text-sm text-gray-400">
                { item }
            </p>
        ))}
    </div>
)
const Footer = () => {
    return (
        <div className="mt-6 hidden xl:block">
            <div className="flex flex-wrap  gap-2">
                <List items={footerList1} mt={ false }/>
                <List items={footerList2} mt />
                <List items={footerList3} mt />
                <p className="text-sm text-gray-400">2024 davdev tiktik</p>
            </div>
        </div>
    );
}

export default Footer;