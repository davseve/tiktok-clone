import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { GoogleLogin } from "react-google-login";
import Footer from "@/components/Footer";
import Discover from "@/components/Discover";
import SuggestedAccounts from "@/components/SuggestedAccounts";

const Sidebar = () => {
    const [ showSidebar, setShowSidebar ] = useState( true ),
        activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded',
        normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded',
        userProfile = false;
    return (
        <div
            className="block items-center gap-3 hover:bg-grimary p-3"
            onClick={ () => setShowSidebar( ( prev ) => !prev ) }
        >

            { showSidebar ? <ImCancelCircle/> : <AiOutlineMenu/> }

            { showSidebar && (
                <div
                    className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 '>
                    <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
                        <Link href='/'>
                            <div className={ normalLink }>
                                <p className='text-2xl normalLink'>
                                    <AiFillHome/>
                                </p>
                                <span className='capitalize text-xl hidden xl:block'>
                                     For You
                                </span>
                            </div>
                        </Link>
                    </div>
                    { ! userProfile && (
                        <div className='px-2 py-4 hidden xl:block'>
                            <p className='text-gray-400 '>
                                Log in to see videos from your friends and discover other accounts you'll love.
                            </p>
                            <div className='pr-4'>
                                <GoogleLogin
                                    clientId=""
                                    render={ ( renderProps ) => (
                                        <button
                                            className='bg-white text-lg text-[#f51997] border-[1px] border=[#f51997] rounded-md px-6 py-3 font-semibold outline-none w-full mt-3 hover:bg-[#f51997] hover:text-white cursor-pointer'
                                            onClick={ renderProps.onClick }
                                            disabled={ renderProps.disabled }
                                        >Login
                                        </button>
                                    ) }
                                    onSuccess={ () => {
                                    } }
                                    onFailure={ () => {
                                    } }
                                    cookiePolicy={ 'single_host_origin' }
                                />
                            </div>
                        </div>
                    ) }
                    <Discover/>
                    <SuggestedAccounts/>
                    <Footer/>
                </div>
            ) }
        </div>
    )
};

export default Sidebar;