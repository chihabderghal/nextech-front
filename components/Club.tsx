import Image from "next/image";
import {Roboto_Mono, Ubuntu_Mono} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

const roboto: NextFont = Roboto_Mono({
    weight: '500',
    subsets: ['latin'],
});

const ubuntu: NextFont = Ubuntu_Mono({
    weight: '700',
    subsets: ['latin-ext'],
});

function Club() {
    return (
        <section
            className="grid grid-cols-1 py-10 px-3 gap-0 md:grid-cols-1 lg:grid-cols-2 bg-[#ED1D26] my-28 text-white content-center lg:justify-around lg:pl-16"
            id="about-us"
        >
            <div className="flex flex-col justify-center text-center  lg:mx-10 py-5 lg:py-20">
                <h1 className={`text-4xl font-bold pb-10 text-center ${ubuntu.className}`}>About Our Club</h1>
                <p className={`font-bold text-2xl text-center px-5 md:text-justify lg:text-justify ${roboto.className}`}>
                    Nextech, our scientific club located in NTIC Faculty, pushes boundaries ever further.
                    It is a dynamic ship propelling us into a realm where learning exceeds traditional constraints,
                    sailing through an ocean of creativity to collect knowledge in everything related to technology.
                    You can join us regardless of the field of study and age. Moreover, it offers you the opportunity
                    to step onto the cockpit and put the learned skills into action, rather than just sticking to
                    theory. You can join us regardless of the field of study and age. Moreover, it offers you the
                    opportunity
                    to step onto the cockpit and put the learned skills into action, rather than just sticking to
                    to step onto the cockpit and put the learned skills into action, rather than just sticking to
                    to step onto the cockpit and put the learned skills into action, rather than just sticking to
                    theory.
                </p>
            </div>

            <div className="grid grid-cols-1">
                <div className="flex flex-col justify-center items-center relative">
                    <Image src="/club.png" alt="image" width="600" height="800"
                           className=" "/>
                </div>
            </div>
        </section>
    )
}

export default Club;