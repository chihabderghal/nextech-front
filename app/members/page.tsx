import {MEMEBRS} from "@/data/members";
import React from "react";
import MemeberCard from "@/components/MemeberCard";

function members() {
    return (
        <div className="mb-20">
            <h1 className="uppercase text-center text-5xl pt-10 text-white font-bold">our members</h1>

            <div className="mt-10 mx-2 lg:px-10 lg:mx-22 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[50px]">
                {
                    MEMEBRS.map((member) => (
                        // eslint-disable-next-line react/jsx-key
                        <MemeberCard
                            image_path={member.image_path}
                            name={member.name}
                            team={member.team}
                            position={member.position}
                            system={member.system}
                            descritpion={member.description}
                            github={member.github}
                            linkedin={member.linkedin}
                            instagram={member.instagram}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default members;