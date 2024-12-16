import Link from "next/link";
import Image from "next/image";
import React from "react";
import {SOCIAL_MEDIA} from "@/data/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Hero() {
    return (
        <section className="grid gap-8 md:grid-cols-2 bg-[#0d0d0d] text-white lg:pt-32 px-5 lg:px-28 md:px-28 container mx-auto">
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center items-center text-center uppercase py-20">
                <div className="text-4xl font-bold pb-4 pt-10">
                    <h1>nextech</h1>
                    <h1>your hub for tech</h1>
                    <h1>exellence</h1>
                </div>

                <Link href={"/event"}
                      className="uppercase font-bold text-white text-center rounded-xl p-3 bg-[#0d0d0d] border-2 border-[#ED1C24] content-cente lg:flex hover:bg-[#ED1C24] hover:duration-500">
                    event
                </Link>
                <div className="flex flex-row my-4 gap-4 ">
                    {SOCIAL_MEDIA.map((social) => (
                        // eslint-disable-next-line react/jsx-key
                        <Link href={social.link} target={"_blank"}>
                            <FontAwesomeIcon icon={social.icon} className="w-7 h-7 hover:scale-125 hover:duration-300 cursor-pointer"/>
                        </Link>
                    ))}
                </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-center items-center relative py-20">
                <Image src="/nexverse.png" alt="event" width={270} height={270} className="flex justify-center"/>
            </div>
        </section>
    )
}

export default Hero;