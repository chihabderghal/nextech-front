"use client";

import React, {useState} from 'react'
import Link from "next/link";
import Image from "next/image";
import {LINKS} from "@/data/constants";

function Navbar() {
    const [isClicked, SetIsClicked] = useState(false);
    return (

        <div
            className={`${!isClicked ? 'py-4 md:py-2 lg:py-2 px-10 flex justify-between lg:justify-around items-center bg-[#0d0d0d] text-white sticky top-0 z-10' : 'grid grid-rows-1 py-4 px-10 sticky bg-[#0d0d0d] top-0 z-10'}`}
            key="nav-bar"
        >
            {
                !isClicked ? (
                    <Link href="/">
                        <Image src="/nextech.png" alt="logo" width={58} height={30}/>
                    </Link>
                ) : null
            }


            <ul className="hidden h-full gap-12 lg:flex items-center">
                {LINKS.map((navbar) => (
                    // eslint-disable-next-line react/jsx-key
                    <li>
                        <Link
                            href={navbar.link}
                            className="cursor-pointer text-[18px] hover:border-b-2"
                            key={navbar.title}
                        >
                            {navbar.title}
                        </Link>
                    </li>
                ))}
            </ul>

            {
                !isClicked ? (
                    <Link href={"/event"}
                          className="uppercase border-2 text-white text-center rounded-2xl p-2 bg-[#0d0d0d] border-[#ED1C24] content-center hidden lg:flex hover:bg-[#ED1C24] hover:duration-500">
                        <Image src="/img.png" alt="event" width={38} height={38}
                               className="flex justify-center items-center px-1 pb-[3px]"/>
                        <div className="flex justify-center items-center py-1 pt-2">
                            event
                        </div>
                    </Link>
                ) : null}

            <div
                className={"inline-block cursor-pointer lg:hidden"}
                onClick={() => SetIsClicked(!isClicked)}
            >
                {
                    isClicked ? (
                        <div>
                            <div className="flex flex-row items-center justify-between">
                                <Link href="/" key="logo-link">
                                    <Image src="/nextech.png" alt="logo" width={58} height={30}/>
                                </Link>

                                <Image
                                    src="/close-2.png"
                                    alt="delete"
                                    width={40}
                                    height={40}
                                />
                            </div>


                            <ul className="flex flex-col justify-center text-center pt-20">
                                {LINKS.map((link) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <li className="text-white py-5 hover:bg-[#ED1C24] rounded-2xl">
                                        <Link href={link.link}
                                              className="hover:border-b-2  hover:border-white">{link.title}
                                        </Link>
                                    </li>
                                ))}
                                <Link href={"/event"}
                                      className="border-2 border-[#ED1C24] justify-center flex flex-row mx-auto rounded-xl items-center p-2 my-10 mt-10">
                                    <Image src="/img.png" alt="event" width={38} height={38}
                                           className="flex justify-center items-center px-1 pb-[3px]"/>
                                    <div className="text-white font-bold uppercase">
                                        event
                                    </div>
                                </Link>
                            </ul>


                        </div>
                    ) : (
                        <Image
                            src="/hamburger-menu.png"
                            alt="menu"
                            width={42}
                            height={42}
                        />
                    )
                }
            </div>

        </div>
    );

}

export default Navbar;