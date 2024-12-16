"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import {Accordion, AccordionItem, Card, CardFooter} from "@nextui-org/react";
import {EVENT_NAME} from "@/data/constants";
import {EVENT_QUESTIONS, WP} from "@/data/event";

function event() {
    const itemClasses = {
        title: "flex justify-center items-center text-center font-bold my-0 py-0 px-3",
        content: "flex justify-center items-center text-center font-light text-xl px-5",
        indicator: "text-2xl",
    }
    return (
        <div>
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col justify-center items-center relative pt-20 pb-10">
                    <Image src="/nexverse.png" alt="event" width={270} height={270} className="flex justify-center"/>
                </div>

                <h1 className="uppercase text-center text-5xl text-white font-bold">The Nexverse Event</h1>

                <Link href="/documents/agenda.pdf" target={"_blank"}
                      className="uppercase font-bold text-white text-center rounded-xl p-3 bg-[#0d0d0d] border-2 border-[#ED1C24] content-cente lg:flex hover:bg-[#ED1C24] hover:duration-500">
                    download agenda
                </Link>
            </div>

            <div className="border border-white hidden my-8 mx-[400px] lg:flex md:hidden"/>

            <h1 className="uppercase text-center text-5xl py-10 text-white font-bold">{EVENT_NAME}</h1>

            <div className="container mx-auto">
                {
                    EVENT_QUESTIONS.map((question) => (
                    // eslint-disable-next-line react/jsx-key
                    <div
                        className="flex justify-center bg-[#ED1C24] my-3 rounded-xl items-center text-white mx-3 lg:mx-56">
                        <Accordion
                            className="max-w-4xl flex justify-center items-center my-3"
                            itemClasses={itemClasses}
                        >
                            <AccordionItem key="1"
                                           aria-label="Accordion 1"
                                           title={question.question}
                                           className="flex flex-col justify-center items-center lg:max-w-3xl py-3"
                            >
                                {question.answer}
                            </AccordionItem>
                        </Accordion>
                    </div>
                ))
                }
            </div>

            <div className="border border-white hidden my-16 mx-[400px] lg:flex md:hidden"/>

            <h1 className="uppercase text-center text-4xl text-white my-10 font-bold">workshops & conferences</h1>

            <div className="flex flex-col md:flex-row lg:flex-row gap-10 justify-center items-center my-20">
                {
                    WP.map((wp) => (

                        // eslint-disable-next-line react/jsx-key
                        <Link href={"#"}>
                            <Card
                                isFooterBlurred
                                radius={"lg"}
                                className="border-none mx-5 hover:scale-105 hover:duration-200"
                            >
                                <Image
                                    alt={wp.name}
                                    className="object-cover rounded-t-large"
                                    src={wp.image}
                                    height={500}
                                    width={500}
                                />
                                <CardFooter
                                    className={`justify-center ${wp.isAvailable ? 'bg-success' : 'bg-warning'} rounded-b-large py-1 shadow-small`}>
                                    <p className="text-black font-bold uppercase">{wp.isAvailable ? `Available, click to Navigate` : `${wp.name} -- Available soon`}</p>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))
                }
            </div>

            <div className="border border-white hidden my-16 mx-[400px] lg:flex md:hidden"/>

            <h1 className="uppercase text-center text-4xl text-white my-10 font-bold">Competitions</h1>

            <div className="grid grid-cols-1 place-items-center relative mb-20">
                <Link href={"#"} >
                    <Card
                        isFooterBlurred
                        radius="lg"
                        className="border-none mx-4 hover:scale-105 hover:duration-200"
                    >
                        <Image
                            alt="Woman listing to music"
                            className="object-cover rounded-t-large"
                            height={600}
                            src="/draw.png"
                            width={600}
                        />
                        <CardFooter
                            className="justify-center bg-warning rounded-b-large py-1 shadow-small">
                            <p className="text-black font-bold uppercase">Available soon.</p>
                        </CardFooter>
                    </Card>
                </Link>
            </div>

        </div>

    );
}

export default event;