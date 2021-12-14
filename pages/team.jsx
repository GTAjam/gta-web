import React from "react";
import Member from "../components/team/member";

const teamData = [{ name: "ABC" }];

const Team = () => {
  return (
    <div>
      <h1>Our Team</h1>
      {teamData.map((member) => (
        <Member name={member.name} />
      ))}
    </div>
  );
};

export default Team;
