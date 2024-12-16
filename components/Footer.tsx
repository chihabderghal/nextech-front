import Link from "next/link";
import Image from "next/image";
import {COPY, EMAIL, FOOTER_LINKS, LOCATION, RIGHT, SOCIAL_MEDIA} from "@/data/constants";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

function Footer() {
    return (
        <footer className="text-white container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
                <Link href="/" className="flex flex-col items-center py-2 my-10 md:mx-17">
                    <Image src="/nextech.png" alt="nextech" width={58} height={30}/>
                </Link>


                {/* Location & Email */}
                <div className="text-center  my-10 lg:text-start">
                    <div className="pb-5 py-2 px-10 lg:px-0">
                        {LOCATION}
                    </div>
                    <div className="text-xl text-center lg:text-start font-light">
                        <strong>
                            {EMAIL}
                        </strong>
                    </div>
                </div>

                {/* Learn More footer*/}
                <div className="grid grid-cols-1 my-10 place-items-center lg:pl-24 lg:place-items-start">
                    <div className="font-bold text-xl py-2">
                        Learn More:
                    </div>
                    {FOOTER_LINKS.map((urls) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="font-light place-items-center text-center py-1">
                            <ul>
                                <Link href={urls.link}>
                                    <li>{urls.title}</li>
                                </Link>
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social Media */}
                <div className="grid grid-cols-1 my-10 place-items-center text-start lg:place-items-start">
                    <div className="font-bold text-xl py-2">
                        Social Media:
                    </div>
                    {SOCIAL_MEDIA.map((social: { name: string, link: string, image_path: string, icon: IconProp }) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="font-light">
                            <ul>
                                <Link href={social.link} target={"_blank"}>
                                    <li className="flex flex-row items-center gap-2 py-2 lg:py-0">
                                        <FontAwesomeIcon icon={social.icon} className="w-6 h-6"/>
                                        {social.name}
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    ))}
                </div>


            </div>


            <div className="text-white text-xs font-light text-center py-3">
                {COPY} &copy; {RIGHT}
                <br/>
                <br/>
                <Link href={"https://github.com/chihabderghal/"} target="_blank">
                    Made by <span className="font-bold">Chihab Derghal</span>
                </Link>
            </div>

        </footer>
    );
}

export default Footer;