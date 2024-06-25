import React from 'react';
import { teamMembers } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Team = () => {
  return (
    <Section id="team">
      <div className="container relative z-2 flex flex-col items-center">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Meet Our Team"
        />

        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {teamMembers.map((member) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-[300px] h-[400px]"
              key={member.id}
            >
              <div className="relative z-2 flex flex-col h-full p-[2.4rem] pointer-events-none border-2 border-white rounded-lg">
                <img
                  src={member.imageUrl}
                  width={96}
                  height={96}
                  alt={member.name}
                  className="mb-4 rounded-full"
                />
                <h5 className="h5 mb-2">{member.name}</h5>
                <p className="body-2 mb-1 text-n-3">{member.role}</p>
                <p className="body-2 mb-6 text-n-3">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Team;
