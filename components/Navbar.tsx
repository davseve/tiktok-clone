import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { createOrGetUser } from '../utils';
import Logo from '../utils/tiktik-logo.png'
import user from "@/sanity-backend/schemaTypes/user";
import useAuthStore from "@/store/authStore";


const Navbar = ()=> {
    const user = false;

    return (
        <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px4">
            <Link href="/">
                <div className="w-[100px] m:w-[130px]">
                    <Image
                        className="cursor-pointer"
                        src={Logo}
                        alt="Tik tik"
                        layout="responsive"
                    />
                </div>
            </Link>
            <div>
                SEARCH
            </div>
            <div>
                { user ? (
                    <div>Logged In</div>
                ) : (
                    <GoogleLogin
                        onSuccess={(response)=>
                            createOrGetUser(response)
                        }
                        onError={(error: void)=> console.log(error)}
                    />
                ) }
            </div>
        </div>
    );
}

export default Navbar;