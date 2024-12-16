import Link from "next/link";
import React from "react";
import {FORM_LINK} from "@/data/constants";
import {JetBrains_Mono} from "next/font/google";

const jetbrain_mono = JetBrains_Mono({
    weight: '400',
    subsets: ['latin'],
});

function Newbie() {
    return(
        <div className={`py-28 ${jetbrain_mono.className}`} id="newbie">
            <div className="bg-[#ED1C24] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-4 px-auto px-5 lg:px-40 lg:justify-center">
                <div className="flex text-center uppercase text-white text-4xl py-10 lg:justify-start ">
                    Join us, and become an active member in our future events
                </div>

               <div className="flex items-center content-center justify-center px-auto pb-10 lg:pb-0 md:pb-0">
                   <Link href={FORM_LINK}
                         className="uppercase text-white text-center rounded-2xl p-2 bg-[#0d0d0d] lg:flex">
                       <div className="flex justify-center items-center py-1 pt-2 uppercase px-4 font-bold">
                           fill the form
                       </div>
                   </Link>
               </div>
            </div>
        </div>
    )
}

export default Newbie;