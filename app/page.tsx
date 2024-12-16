"use client";

import Hero from "@/components/Hero";
import Club from "@/components/Club";
import Newbie from "@/components/Newbie";
import Card from "@/components/Card";
import Image from "next/image";
import {CONTACT_MESSAGE, EMAIL} from "@/data/constants";
import React, {useRef, useState} from "react";
import {QUESTIONS} from "@/data/questions";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Divider from "@/components/Divider";

export default function Home() {

    const [loading, SetLoading] = useState(false);
    const formRef: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nodzvrk', 'template_jcvgqps', formRef.current, {
                publicKey: 'FBylfKE2NNWEYdt8w',
            })
            .then(
                () => {
                    SetLoading(true);
                    e.target.reset();
                },
                (error) => {
                    SetLoading(false);
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div>
            <Hero/>
            <Divider/>
            <Club/>

            <Divider/>

            <div className="mb-20 container mx-auto" id="faqs">
                <h1 className="uppercase text-center text-5xl pt-3 text-white font-bold">faqs</h1>
                <div
                    className="mt-10 mx-10 lg:px-10 lg:mx-22 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[50px]">
                    {QUESTIONS.map((question) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="border border-white rounded-xl hover:scale-110 transition hover:duration-200">
                            <Card question={question.question} answer={question.answer}/>
                        </div>
                    ))}
                </div>
            </div>

            <Divider/>
            <Newbie/>
            <div className="border border-white hidden my-6 mx-[400px] lg:flex md:hidden" id={"app"}/>

            <div className="container mx-auto my-20">
                <div className="flex flex-col justify-center items-center gap-20">
                    <div className="text-white flex flex-col items-center text-center lg:w-[650px]">
                        <span className="text-4xl mx-4">
                        Download our app for a new experimental experience and enjoy seamless browsing!
                        </span>

                        <Link href={"https://app.mediafire.com/i5oobpjqhhbb9"}
                              className="uppercase font-bold text-white text-center rounded-xl p-3 my-5 bg-[#0d0d0d] border-2 border-[#ED1C24] content-cente lg:flex hover:bg-[#ED1C24] hover:duration-500"
                              target="_blank"
                        >
                            download
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Image src="/application.png" alt="app image" width={330} height={330} className=""/>
                        <div className={`text-white text-center text-4xl font-bold`}>
                            Scan me
                        </div>
                    </div>
                </div>
            </div>


            <Divider/>

            <div className="container mx-auto">
                <h1 className="uppercase text-center text-5xl pt-3 text-white font-bold">our partners</h1>
                <div
                    className="mt-24 mx-5 px-24 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[50px] place-items-center mb-20">
                    <Image src="/univ2.png" alt="image" width={200} height={200}
                           className="hover:scale-110 transition hover:duration-400"/>
                    <Image src="/dasc.png" alt="image" width={200} height={200}
                           className="hover:scale-110 transition hover:duration-400"/>
                    <Image src="/ntic2.png" alt="image" width={185} height={185}
                           className="hover:scale-110 transition hover:duration-400"/>
                </div>
            </div>

            <Divider/>

            <div className="container mx-auto">
                <h1 className="uppercase text-center text-5xl pt-3 text-white font-bold">Contact us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                    <div className="my-20 mx-3 md:px-10 lg:px-10">
                        <form ref={formRef} onSubmit={sendEmail}>
                            <div className="flex flex-col justify-center text-white py-3">
                                <label className="font-bold px-4 py-1">Name:</label>
                                <input type="text"
                                       placeholder="John Doe"
                                       name={"user_name"}
                                       required
                                       className="font-light bg-[#0d0d0d] border border-white rounded-xl py-3 px-4"/>
                            </div>

                            <div className="flex flex-col justify-center text-white py-3">
                                <label className="font-bold px-4 py-1">Email:</label>
                                <input type="email"
                                       name={"user_email"}
                                       placeholder="exemple123@gmail.com"
                                       required
                                       className="font-light bg-[#0d0d0d] border border-white rounded-xl py-3 px-4"/>
                            </div>

                            <div className="flex flex-col justify-center text-white py-3">
                                <label className="font-bold px-4 py-1">Message:</label>
                                <textarea cols={25} rows={10} placeholder="Write Your Message"
                                          name={"message"}
                                          required
                                          className="font-light bg-[#0d0d0d] border border-white rounded-xl py-4 px-4"></textarea>
                            </div>

                            <div className="flex justify-center my-5">
                                <button
                                    type={"submit"}
                                    value={"send"}
                                    className={`uppercase font-bold text-white text-center rounded-xl p-3 ${loading ? 'bg-green-500 border-2 border-white content-center' : 'bg-[#0d0d0d] border-2 border-[#ED1C24] content-center lg:flex hover:bg-[#ED1C24] hover:duration-500'} `}
                                >
                                    {loading ? 'Sent Successfully' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div
                        className="lg:flex lg:flex-col md:flex md:flex-col md:justify-center md:my-20 md:border-l-2  md:border-l-white lg:justify-center lg:my-20 lg:border-l-2 lg:border-l-white">
                        <h1 className="text-white text text-center text-xl font-light px-5 lg:px-20">
                            {CONTACT_MESSAGE}
                        </h1>
                        <div className="">
                            <div
                                className="flex flex-col items-center my-5 justify-center md:felx md:flex-col lg:flex-row">
                                <Image src="/gmail.png" alt="gmail" width={45} height={45} className="mx-4"/>
                                <h2 className="font-bold text-white text-2xl text-center">
                                    <Link href="mailto:nextechsquad@gmail.com">
                                        {EMAIL}
                                    </Link>
                                </h2>
                            </div>

                            <div className="flex flex-col items-center relativ">
                                <h1 className="uppercase text-center text-3xl py-3 text-white font-bold">location</h1>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.729946319797!2d6.567431376277398!3d36.246053598739984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1655aaa0d63ab%3A0xa80cc72a9da3c77b!2sUniversity%20of%20Constantine%202%20-%20Abdelhamid%20Mehri!5e0!3m2!1sen!2sdz!4v1709762913511!5m2!1sen!2sdz"
                                    width="320" height="320" loading="lazy" className="rounded-2xl"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
